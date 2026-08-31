# 001 — Rafa portfolio animation polish

- **Status**: DONE (applied on `Rafa-profile`, see commit after `8bee14b`)
- **Commit**: `8bee14b` (stamp when plan written)
- **Severity**: MEDIUM
- **Category**: performance, cohesion, missed opportunities
- **Estimated scope**: 1 file (`members-profile/Rafa Aydinfadhilah/css/style.css`), no markup/JS changes

## Problem

Audit of `members-profile/Rafa Aydinfadhilah/` motion surface (Rafa-profile branch) surfaced four findings and two missed opportunities:

1. `css/style.css:591` — `.reveal` pins `will-change: opacity, transform` on every element permanently (~20 elements: hero, about, 3 skills, 3 projects, 3 timeline, contact, info cards). Pinned layers waste GPU memory on mobile; the browser already promotes the layer during an active opacity/transform transition.
2. `css/style.css:255-281` — `.blob` applies `filter: blur(70px)` to three 360–420px divs that continuously animate `transform` (`blobFloat`). Blur is paint-heavy; animating transformed+blurred layers repaints every frame.
3. `css/style.css:119` — `.navbar { transition: var(--transition-colors), background-color 0.3s ease; }` lists `background-color` twice (it is already inside `--transition-colors`).
4. `css/style.css:604-607` — nth-child `--delay` rules are inert: every card they would target (`skill-card`, `project-card`, `timeline-item`, `info-card`) carries an inline `style="--delay: …"`, and inline styles always beat stylesheet rules.

Missed:
A. `css/style.css:447` — project thumbs never react on hover; the build spec requested "image zoom" as a premium hover effect.
B. `css/style.css:182-184` — light/dark icon swap is instant (`display: none` ↔ `block`) instead of a smooth crossfade.

## Target

### 2. Blobs — no filter, radial-gradient glow (identical soft look, zero per-frame blur)

```css
.blob {
  position: absolute;
  border-radius: 50%;
  opacity: 0.5;
  will-change: transform;
}
.blob-1 {
  width: 420px; height: 420px;
  left: -80px; top: -60px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.55) 0%, rgba(99, 102, 241, 0) 68%);
  animation: blobFloat 18s var(--ease-in-out) infinite alternate;
}
.blob-2 {
  width: 380px; height: 380px;
  right: -70px; top: 30%;
  background: radial-gradient(circle, rgba(244, 114, 182, 0.45) 0%, rgba(244, 114, 182, 0) 68%);
  animation: blobFloat 22s var(--ease-in-out) infinite alternate-reverse;
}
.blob-3 {
  width: 360px; height: 360px;
  left: 30%; bottom: -140px;
  background: radial-gradient(circle, rgba(0, 212, 170, 0.45) 0%, rgba(0, 212, 170, 0) 68%);
  animation: blobFloat 26s var(--ease-in-out) infinite alternate;
}
```

### B. Theme icon crossfade — opacity + rotate, transform/opacity only

```css
.theme-toggle {
  position: relative;
  /* …existing inline-flex sizing props unchanged… */
}
.theme-toggle svg {
  position: absolute;
  inset: 0;
  width: 20px;
  height: 20px;
  margin: auto;
  transition: opacity 0.2s var(--ease-out), transform 0.2s var(--ease-out);
}
.theme-toggle .icon-sun { opacity: 1; transform: rotate(0) scale(1); }
.theme-toggle .icon-moon { opacity: 0; transform: rotate(40deg) scale(0.6); }
html[data-theme="light"] .theme-toggle .icon-sun { opacity: 0; transform: rotate(-40deg) scale(0.6); }
html[data-theme="light"] .theme-toggle .icon-moon { opacity: 1; transform: rotate(0) scale(1); }
```

### A. Project thumb zoom (gated, transform-only)

```css
.project-thumb {
  /* existing props */
  transition: transform 0.3s var(--ease-out);
}
@media (hover: hover) and (pointer: fine) {
  .project-card:hover .project-thumb { transform: scale(1.05); }
}
```

### 1, 3, 4 — removals

- `.reveal`: delete the `will-change: opacity, transform;` line.
- `.navbar`: `transition: var(--transition-colors);`
- Delete the nth-child `--delay` block; replace with a comment.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  /* …keep existing… */
  .reveal, .hero-reveal, .hero-name.reveal { opacity: 1; transform: none; filter: none; transition: none; }
  .theme-toggle .icon-sun, .theme-toggle .icon-moon { transform: none; } /* keep the color/opacity crossfade, drop rotation; same specificity, later in file */
}
```

## Repo conventions to follow

- All curves come from tokens already in this file: `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` and `--ease-in-out: cubic-bezier(0.77, 0, 0.175, 1)`. Do not introduce new curves.
- Hover motion is gated behind `@media (hover: hover) and (pointer: fine)` (existing pattern, e.g. `.project-card:hover`).
- The file's existing style: comment banners per section, one-line rules where readable.

## Steps

1. Edit `members-profile/Rafa Aydinfadhilah/css/style.css` line ~119: `transition: var(--transition-colors), background-color 0.3s ease;` → `transition: var(--transition-colors);`
2. Replace the `.theme-toggle` rule (add `position: relative;`) and the three icon rules (`icon-moon`, `light .icon-sun`, `light .icon-moon`) with the icon-crossfade block above. Delete the `display: none` / `display: block` approach.
3. Replace `.blob`, `.blob-1`, `.blob-2`, `.blob-3` with the radial-gradient version (drop `filter: blur(70px)`).
4. Add `transition: transform 0.3s var(--ease-out);` to `.project-thumb`, and add `.project-card:hover .project-thumb { transform: scale(1.05); }` inside the existing `@media (hover: hover) and (pointer: fine)` block.
5. Delete the `will-change: opacity, transform;` line from `.reveal`.
6. Delete the nth-child `--delay` block; replace with the comment `/* Stagger is set per element via the inline --delay in index.html. */`
7. In the `prefers-reduced-motion` media block, add the `.theme-toggle .icon-sun, .theme-toggle .icon-moon { transform: none; }` line.

## Boundaries

- Do NOT touch `index.html` or `js/script.js` — CSS only.
- Do NOT change the `blobFloat` keyframes or the `.blob` animation declarations (transform-only motion stays).
- Do NOT change `.reveal` transition durations/easings — only the `will-change` removal.
- Do NOT add `width`/`height`/`top`/`left` animations anywhere.

## Verification

- **Mechanical**: `node --check js/script.js` (unchanged, still passes); confirm no `filter: blur`, no `will-change` on `.reveal`, no `display: none` on theme icons remain via grep. Brace balance check on the CSS.
- **Feel check**: open `index.html` in a browser:
  - Hero glow still reads soft and blurred (radial gradients ≠ visible hard edges).
  - Theme toggle: sun/moon crossfade and rotate, not a hard swap. In DevTools Animations panel set playback to 10% and confirm both icons are briefly visible during the crossfade (no double-exposure at rest).
  - Hover a project card: thumbnail zooms to ~1.05 with the card lift, pointer-only (touch does not fire it).
  - Toggle `prefers-reduced-motion` (Rendering panel): reveal elements appear instantly, no blob motion, theme icons stop rotating but still crossfade.
- **Done when**: grep shows all six changes present and the feel checks pass.
