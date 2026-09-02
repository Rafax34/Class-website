# Rafa Aydinfadhilah — Portfolio

A premium, dark-first personal portfolio, built with **plain HTML, CSS, and vanilla JavaScript**. No frameworks, no build step — open `index.html` and it works.

## Structure

```text
portfolio/
├── index.html
├── css/style.css
├── js/script.js
├── assets/
│   ├── images/
│   └── icons/
└── README.md
```

## Features

- **Sections**: Nav, Hero, About, Skills, Projects, Experience, Contact, Footer
- **Animations**: staggered hero entrance, scroll reveal (fired once), card/button hovers, menu dropdown — all `transform`/`opacity`, gated on `(hover: hover)`, with a `prefers-reduced-motion` fallback
- **Light/Dark theme** toggle, saved to `localStorage` (dark is default)
- **Responsive**: desktop → mobile with hamburger menu, no horizontal overflow
- **Frontend-only contact form** with validation and a success message (no backend)
- **Accessible**: skip link, semantic HTML, ARIA states, visible focus, labeled inputs

## Edit

- Content lives in `index.html` (sections) — swap placeholder text/links there.
- Colors, spacing, and motion live in `css/style.css` under `:root`.
- Interactions live in `js/script.js` (theme, nav, reveal, form).
