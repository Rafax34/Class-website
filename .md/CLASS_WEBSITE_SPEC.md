# Class Website — Build Instructions

Build a single-page, dark-themed website for my class. Keep the file structure minimal since this will be deployed on **GitHub Pages**.

## 1. Goal
A clean, modern, one-page website that presents our class: who's who, the rules, the schedule, and updates. It should feel welcoming but organized — something classmates actually want to check.

## 2. Tech Stack
- Plain **HTML + CSS + JavaScript** (no frameworks, no build step — must run directly on GitHub Pages).
- Vanilla JS only for small interactions (mobile nav toggle, smooth scroll, maybe a simple accordion for rules/FAQ).
- Google Fonts via `<link>` tag (pick a clean modern pairing, e.g. a geometric sans for headings + a readable sans for body).

## 3. File Structure (keep it simple)
```
/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/        (logo, class photo, icons — placeholders are fine)
└── README.md
```
No frameworks, no package.json, no build tools. Everything must work by just opening/deploying the repo as-is.

## 4. Design Direction
- **Dark theme** as default (and only theme — no light/dark toggle needed).
- Background: near-black / dark slate (e.g. `#0f0f14` or similar), not pure `#000`.
- One accent color for links, buttons, highlights (pick something that pops on dark — e.g. an electric blue, violet, or teal). Use it sparingly and consistently.
- Generous whitespace, soft rounded corners on cards, subtle borders or shadows to separate sections (avoid harsh pure-white text — use a soft off-white like `#e8e8ec`).
- Smooth scroll between sections, subtle fade/slide-in animation on scroll for section content.
- Fully responsive: mobile-first, with a collapsible nav menu (hamburger) on small screens.
- Sticky top navbar with anchor links to each section.

## 5. Sections / Content (single page, anchor-linked)

### Hero / Header
- Class name/title, short tagline (e.g. school year, homeroom).
- Optional class photo or illustration.
- Nav bar: Home, Structure, Rules, Schedule, Announcements, Members, Contact.

### Class Structure
- Org-chart style layout of class roles: Homeroom Teacher, Class President, Vice President, Secretary, Treasurer, Committee heads, etc.
- Card per person: name, role, (optional) photo placeholder.

### Class Rules
- Clear list of rules (numbered or icon list). Group into categories if useful (e.g. Attendance, Conduct, Assignments).
- Use an accordion or clean card list so it doesn't feel like a wall of text.

### Schedule
- Weekly class schedule as a table (day × subject/time), styled to fit the dark theme (readable on mobile — consider a stacked/card layout for small screens instead of a squished table).

### Announcements / Updates
- A simple list/feed of recent announcements (title, date, short text). Static content for now, easy to edit later.

### Members / Gallery
- Grid of classmates or class photos (placeholder images okay).

### Contact / Footer
- Contact info (class group chat link, email, etc.), social links if any, credits, last-updated date.

## 6. Nice-to-haves (add if time allows)
- Scroll-to-top button.
- Active nav-link highlight based on scroll position.
- Simple countdown to next exam/event if I provide a date.
- Favicon + Open Graph meta tags (title, description) so links look good when shared.
- Basic `README.md` explaining how to edit content and deploy via GitHub Pages.

## 7. Content Placeholders
Use realistic placeholder text/names where I haven't given real content yet, clearly marked as `[EDIT ME]` so I can find and swap them easily.

## 8. Deployment
No config needed beyond a plain `index.html` at the repo root — this should work with GitHub Pages out of the box (Settings → Pages → deploy from `main` branch).
