# MARATHON 30 — React Landing Page

A clinically-styled, mobile-first React landing page for a 30-day metabolic optimization program. Built with **Vite + React + Tailwind CSS** — no external UI libraries.

## Stack

- React 18 (JSX)
- Vite 5
- Tailwind CSS 3
- Google Fonts: Epilogue, Lexend, Space Grotesk + Material Symbols (loaded via `<link>` in `index.html`)

## Project Structure

```
src/
├── App.jsx                          # Composition root
├── main.jsx                         # React entry
├── index.css                        # Tailwind layers + glass utilities
├── hooks/
│   └── useCountdown.js              # Live countdown hook used by CTA
└── components/
    └── landing/
        ├── Navbar.jsx
        ├── HeroSection.jsx
        ├── SpotCounter.jsx          # Hardcoded prop, default = 7
        ├── ProblemSection.jsx
        ├── SolutionSection.jsx
        ├── ProofSection.jsx
        ├── CTASection.jsx           # Uses useCountdown
        └── Footer.jsx
```

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Notes

- `SpotCounter` defaults to `spots={7}` and is rendered inside `HeroSection`.
- `CTASection` accepts a `deadline` prop (Date) and uses the `useCountdown` hook to show a live D/H/M/S countdown until cohort enrollment closes.
- Design tokens (Material 3 palette, fluid typography, base-8 spacing) are configured in `tailwind.config.js`.
- Glassmorphism utilities (`.glass-card`, `.glass-card-strong`) live in `src/index.css`.
- Mobile-first responsive: stacked layouts collapse below `md`, with a hamburger nav on mobile.
