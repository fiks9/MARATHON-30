<div align="center">

# MARATHON 30

### A clinically-styled, mobile-first landing page for a 30-day metabolic optimization protocol.

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![GitHub Pages](https://img.shields.io/github/deployments/fiks9/MARATHON-30/github-pages?style=flat-square&label=Live%20Site&logo=github)](https://fiks9.github.io/MARATHON-30/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](#license)

<br />

<a href="https://fiks9.github.io/MARATHON-30/" target="_blank" rel="noopener">
  <img
    src="https://api.microlink.io/?url=https://fiks9.github.io/MARATHON-30/&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1280&viewport.height=800"
    alt="MARATHON 30 — Live Site Preview"
    width="880"
  />
</a>

<br /><br />

### [🌐 &nbsp;View Live Demo →](https://fiks9.github.io/MARATHON-30/)

<sub>The preview above is generated automatically from the live site.</sub>

</div>

---

## ✨ Highlights

- **Pure React + Tailwind** — zero UI libraries, fully hand-rolled components.
- **Mobile-first responsive layout** with hamburger navigation, fluid typography (`clamp()`), and a Material 3 token palette.
- **Scroll-triggered animations** powered by a tiny `useInView` IntersectionObserver hook — staggered card reveals + hover micro-interactions.
- **Live countdown timer** in the CTA section driven by a custom `useCountdown` hook.
- **Glassmorphism design language** — `.glass-card` utilities with backdrop blur and inner borders.
- **Inline SVG data-viz** — sparkline trajectory and 30-day completion grid, no charting libraries.
- **Auto-deployed** to GitHub Pages on every push to `main` via GitHub Actions.

## 🛠 Tech Stack

| Layer | Choice |
|---|---|
| **Framework** | React 18 (JSX, no TypeScript) |
| **Build tool** | Vite 5 |
| **Styling** | Tailwind CSS 3 + custom utilities |
| **Fonts** | Epilogue, Lexend, Space Grotesk, Material Symbols |
| **Icons** | Material Symbols (variable font) |
| **Deployment** | GitHub Pages via GitHub Actions |

## 📁 Project Structure

```
src/
├── App.jsx                          # Composition root
├── main.jsx                         # React entry
├── index.css                        # Tailwind layers + glass utilities
├── hooks/
│   ├── useCountdown.js              # Live D/H/M/S countdown
│   └── useInView.js                 # IntersectionObserver reveal hook
└── components/
    └── landing/
        ├── Navbar.jsx               # Fixed header + mobile hamburger
        ├── HeroSection.jsx          # Hero + bar chart + SpotCounter
        ├── SpotCounter.jsx          # `spots` prop, default = 7
        ├── ProblemSection.jsx       # 3 pain-point cards (red accent)
        ├── SolutionSection.jsx      # Phase-shift protocol + bento grid
        ├── BiometricSparkline.jsx   # SVG weight-loss trajectory
        ├── ComplianceGrid.jsx       # 30-day dot grid (animated fill)
        ├── ProofSection.jsx         # 3 testimonial cards
        ├── CTASection.jsx           # Countdown + pricing CTA
        ├── RevealCard.jsx           # Reusable scroll-reveal wrapper
        └── Footer.jsx
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ (Node 20 LTS recommended)
- npm 9+

### Install & Run

```bash
git clone https://github.com/fiks9/MARATHON-30.git
cd MARATHON-30
npm install
npm run dev
```

The dev server starts at **http://localhost:5173**.

### Production Build

```bash
npm run build      # Output → dist/
npm run preview    # Serve the built bundle locally
```

## 🌐 Deployment

The site auto-deploys to **https://fiks9.github.io/MARATHON-30/** on every push to `main`.

The pipeline lives in `.github/workflows/deploy.yml`:

1. Checkout & setup Node 20
2. `npm ci` (reproducible install from `package-lock.json`)
3. `npm run build` → produces `dist/`
4. Upload `dist/` as a Pages artifact
5. Deploy via `actions/deploy-pages@v4`

> **Note**: Vite's `base` is set to `/MARATHON-30/` for production builds only — local dev still works at `/`. See `vite.config.js`.

## 🎨 Design Notes

- **Color tokens** — Material 3 palette (`primary`, `surface-container`, `error-container`, etc.) defined in `tailwind.config.js`.
- **Fluid typography** — display / headline / body sizes use `clamp()` for smooth scaling between mobile and desktop.
- **Spacing** — base-8 scale with semantic tokens (`section-gap`, `container-padding`, `stack-md`).
- **Motion** — all transitions respect `prefers-reduced-motion: reduce` via Tailwind's `motion-reduce` modifier.

## 📜 License

MIT © [fiks9](https://github.com/fiks9)
