# Class 2-B Website

Single-page, dark-themed class website built with plain HTML, CSS, and JavaScript. Designed for GitHub Pages — no build step, no dependencies.

## Quick Start

1. Clone or fork this repo
2. Edit the placeholder content (marked `[EDIT ME]`) in `index.html` and `script.js`
3. Add images to `assets/images/` (logo, class photo, member photos)
4. Push to `main` branch
5. Enable GitHub Pages: Settings → Pages → Deploy from `main` branch / root folder

## File Structure

```
/
├── index.html      # Main page structure
├── style.css       # All styles (dark theme, responsive)
├── script.js       # Data + rendering + interactions
├── assets/
│   └── images/     # Place your images here
└── README.md
```

## Customizing Content

### Class Info (index.html)
- Class name, tagline, hero photo
- Contact links (group chat, email, room)
- Footer GitHub repo link

### Class Structure (script.js → `orgData`)
```js
{ role: 'Homeroom Teacher', name: 'Ms. Johnson', photo: 'assets/images/teacher.jpg' }
```
Add/remove objects. `photo` is optional — shows placeholder if omitted.

### Rules (script.js → `rulesData`)
```js
{ category: 'Attendance', items: ['Rule 1', 'Rule 2'] }
```
Each category becomes an accordion section.

### Schedule (script.js → `scheduleData`)
```js
{ time: '8:00–8:50', mon: 'Math', tue: 'English', wed: 'Science', thu: 'History', fri: 'PE' }
```
Rows = periods. Columns = days. Mobile auto-switches to stacked cards.

### Announcements (script.js → `announcementsData`)
```js
{ title: 'Exam Dates', date: '2025-10-15', text: 'Midterms start Nov 3...' }
```
Date format: `YYYY-MM-DD`. Newest first.

### Members (script.js → `membersData`)
```js
{ name: 'Alex Chen', role: 'Member', photo: 'assets/images/alex.jpg' }
```
Grid auto-flows. 24 placeholders included — adjust length as needed.

## Adding Images

Place files in `assets/images/` and reference them:
```js
photo: 'assets/images/photo.jpg'
```
Recommended: 400×400px for org chart, 200×200px for members, 800×600px for hero.

## Features

- **Dark theme only** — near-black background, teal accent
- **Responsive** — mobile-first, hamburger nav < 768px, schedule cards on mobile
- **Sticky nav** — backdrop blur, active link highlight on scroll
- **Accordion rules** — keyboard accessible, ARIA attributes
- **Scroll animations** — fade-up on intersect, respects `prefers-reduced-motion`
- **Scroll-to-top** — appears after 300px scroll
- **Smooth scroll** — native CSS + JS fallback
- **Open Graph tags** — decent link previews
- **Last updated date** — auto-sets if placeholder left unchanged

## Browser Support

Modern browsers (last 2 versions). Uses:
- CSS Grid / Flexbox
- IntersectionObserver
- `scroll-behavior: smooth`
- Backdrop filter (nav)

## License

MIT — use freely for your class.