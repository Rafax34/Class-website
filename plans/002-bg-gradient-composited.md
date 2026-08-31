# 002 — Make the animated gradient background composited

- **Status**: TODO
- **Commit**: `5a16433` (stamp when plan written)
- **Severity**: MEDIUM
- **Category**: performance
- **Estimated scope**: 1 file (`members-profile/Rafa Aydinfadhilah/css/style.css`), no markup/JS changes

## Problem

The animated gradient background (added recently) animates `background-position` on `body`:

```css
/* members-profile/Rafa Aydinfadhilah/css/style.css:58-76 — current */
body {
  font-family: var(--font-body);
  background-color: var(--bg);
  background-image:
    radial-gradient(45% 60% at 20% 30%, rgba(214, 255, 63, 0.08), transparent 70%),
    radial-gradient(40% 55% at 75% 25%, rgba(220, 220, 220, 0.05), transparent 70%),
    radial-gradient(50% 60% at 60% 85%, rgba(110, 110, 110, 0.05), transparent 70%);
  background-size: 260% 260%;
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  animation: bgDrift 30s var(--ease-in-out) infinite alternate;
  transition: var(--transition-colors);
}
@keyframes bgDrift {
  from { background-position: 0% 0%; }
  to { background-position: 100% 100%; }
}
```

`background-position` is a paint-affecting property. Animating it repaints the full-viewport background on the main thread **every frame for the lifetime of an infinite animation** — it is not GPU-composited. This is exactly the "animate `transform` and `opacity` only" violation in AUDIT.md §5 (Performance). The fix keeps the identical look but drives the drift with a composited `transform` on a dedicated fixed layer, so it runs on the compositor with no per-frame repaint.

## Target

Move the gradient onto a fixed, slightly oversized `body::before` layer and drift it via `transform`. Remove the gradient/animation from `body` itself.

```css
/* members-profile/Rafa Aydinfadhilah/css/style.css — dark (default) */
body {
  font-family: var(--font-body);
  background-color: var(--bg);
  color: var(--text);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  transition: var(--transition-colors);
}
/* Animated gradient background — composited drift of soft radial glows behind all content */
body::before {
  content: '';
  position: fixed;
  inset: -30%;
  z-index: -1;
  pointer-events: none;
  background:
    radial-gradient(45% 60% at 20% 30%, rgba(214, 255, 63, 0.08), transparent 70%),
    radial-gradient(40% 55% at 75% 25%, rgba(220, 220, 220, 0.05), transparent 70%),
    radial-gradient(50% 60% at 60% 85%, rgba(110, 110, 110, 0.05), transparent 70%);
  background-size: 200% 200%;
  animation: bgDrift 30s var(--ease-in-out) infinite alternate;
}
@keyframes bgDrift {
  from { transform: translate3d(0, 0, 0); }
  to { transform: translate3d(8%, 8%, 0); }
}
```

Light theme override — change the selector, keep the two light radials:

```css
/* members-profile/Rafa Aydinfadhilah/css/style.css — light */
html[data-theme="light"] body::before {
  background:
    radial-gradient(45% 60% at 20% 30%, rgba(150, 120, 20, 0.10), transparent 70%),
    radial-gradient(40% 55% at 75% 25%, rgba(0, 0, 0, 0.04), transparent 70%);
}
```

Why this works:

- `inset: -30%` sizes the layer to 160% of the viewport; the 8% `translate` (8% of the layer ≈ 12.8% of the viewport) stays inside that slack, so no edges of the underlying `body` are ever exposed.
- `z-index: -1` paints the layer above the `body` background-color (canvas) but below all in-flow content — the standard "behind everything" background pattern, no stacking-context tricks needed.
- `transform: translate3d(...)` is compositor-driven (GPU), replacing the paint-driven `background-position`.

## Repo conventions to follow

- Reuses the existing easing token already imported by this animation: `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)` (defined in `:root`). Do not introduce a new curve.
- Consolidates onto the same composited-transform technique the hero `.blob` elements already use after plan 001 (transform-only motion, radial gradients, no filter) — both background systems now run on the compositor.
- Reduced motion is already handled: the global `@media (prefers-reduced-motion: reduce)` block sets `* { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; }`, which freezes `bgDrift`. No change needed.

## Steps

1. In the `body` rule, delete the `background-image` (3 radial lines), `background-size: 260% 260%`, and `animation: bgDrift ...` lines. Leave `background-color`, `font-family`, `color`, `line-height`, `-webkit-font-smoothing`, and `transition` untouched.
2. After the `body` rule, add the `body::before` block and replace the existing `bgDrift` keyframes with the `transform: translate3d(...)` version from the Target above.
3. Change the light-theme override selector from `html[data-theme="light"] body` to `html[data-theme="light"] body::before`, keeping the same two radial gradients.

## Boundaries

- Do NOT touch `index.html` or `js/script.js`.
- Do NOT change `body` `background-color` or any other global `body` styles.
- Do NOT change the hero `.blob` markup or styles.
- Do NOT add new dependencies or new easing/duration tokens.
- Keep the alpha values identical (dark `0.08 / 0.05 / 0.05`; light `0.10 / 0.04`) for visual parity, unless the feel check below shows the drift is imperceptible.
- If a step doesn't match the code found (drift since the `5a16433` stamp), STOP and report instead of improvising.

## Verification

- **Mechanical**:
  - Brace-balance check on the CSS (`{` count === `}` count).
  - `grep -n "background-position" css/style.css` returns nothing.
  - `grep -n "translate3d" css/style.css` shows it inside `@keyframes bgDrift`.
  - `grep -n "body::before" css/style.css` shows the new layer, and `html[data-theme="light"] body::before` for the light variant.
  - `grep -n "background-image" css/style.css` shows it only inside the `body::before` blocks (not on `body`).
- **Feel check** (open `index.html` in a browser):
  - The background still shows the same soft drifting glows — no visual regression, no hard edges — in both dark and light themes.
  - DevTools → Rendering → "Paint flashing": the drifting background should NOT continuously flash paint over the full viewport (it should be a composited transform, so only the initial frame paints). If the whole viewport still flashes on every frame, the layer is not actually compositing — STOP and report.
  - Toggle `prefers-reduced-motion` (Rendering panel): the gradient is static, no drift.
  - **Imperceptibility (taste decision — confirm with the human first):** at 30s the drift may be too slow to notice. If the reviewer cannot tell it is moving, the plan may reduce the duration to ~20s (still `var(--ease-in-out)` `infinite alternate`) — but only if the human confirms, since this is a feel call, not a correctness fix.
- **Done when**: all mechanical checks pass and the feel check confirms visually identical gradients that drift on the compositor (no per-frame full-viewport repaint) and freeze under reduced motion.
