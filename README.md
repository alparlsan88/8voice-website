<p align="center">
  <img src="./public/logo.svg" width="96" height="96" alt="8voice logo">
</p>

<h1 align="center">8voice — Landing Page</h1>

<p align="center">
  Marketing site for <strong>8voice</strong>, the privacy-first voice dictation desktop app.
  Built with Vite + React 19 + Tailwind CSS v4, sharing the app's design
  language (dark <code>neutral-950</code> + emerald accent, Open Sans, the equalizer wave).
</p>

## Develop

```bash
cd site
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # outputs static files to site/dist/
npm run preview  # preview the production build locally
```

## Deploy to GitHub Pages

The site is preconfigured with `base: "/8voice/"` in `vite.config.ts` for
`https://alparlsan88.github.io/8voice`.

1. Build: `npm run build`
2. Publish `site/dist/` to the `gh-pages` branch (e.g. via a GitHub Action or
   `gh-pages` npm package).
3. In the repo settings → Pages, set the source to the `gh-pages` branch.

> **Custom domain?** Set `base: "/"` in `vite.config.ts` before building.

## Structure

```
src/
├── App.tsx              # Page composition
├── brand.ts             # Centralized brand text & links
├── main.tsx
├── index.css            # Tailwind + Open Sans (Latin) + voice-wave animation
└── components/
    ├── Nav.tsx
    ├── Hero.tsx
    ├── Features.tsx
    ├── HowItWorks.tsx
    ├── Privacy.tsx
    ├── Providers.tsx
    ├── TechStack.tsx
    ├── Footer.tsx
    ├── LogoMark.tsx      # White rounded-square logo mark (mirrors the app)
    ├── WaveIndicator.tsx # Animated equalizer (mirrors the app)
    └── icons.tsx         # Feather-style inline SVG icons
```
