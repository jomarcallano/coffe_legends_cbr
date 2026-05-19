# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server (default http://localhost:5173)
- `npm run build` — production build to `dist/`
- `npm run preview` — serve the production build locally
- `npm run lint` — **currently broken**: targets the path `coffe_legends_cbr`, which does not exist in this repo. Fix to `src` (or run `npx eslint src`) before relying on it.

There is no test setup in this project.

## Architecture

Single-page marketing site for "Coffee Legend." Stack: **React 19 + Vite 8 + Tailwind CSS 4** (via the `@tailwindcss/vite` plugin — Tailwind is imported in `src/index.css` with `@import "tailwindcss";`, no `tailwind.config.js`). Icons come from `lucide-react`.

`src/App.jsx` is a flat composition of section components rendered in order: `Navbar`, `Hero`, `MarqueeStrip`, `MenuSection`, `FindUs`, `Footer`. Navigation is **anchor-based only** (`#menu`, `#location`) — there is no router, no client-side routing, and the README explicitly relies on this for "no special server config" static hosting. Don't introduce React Router or any history-based routing without confirming.

Content is hardcoded inside each component as plain arrays/objects — there is no CMS, no data fetching, no backend. To change menu items, hours, address, nav links, footer links, or the marquee text, edit the array literal at the top of the relevant component file (see the table in `README.md` for the exact mapping).

Styling conventions used consistently across components:
- Brand blue `#0052b4` (hover `#003d8a`) for primary CTAs
- Neutral palette: `#1a1a1a` (text), `#737373` (muted), `stone-*` borders, `#fafaf8` section backgrounds
- Uppercase micro-labels with wide tracking (`text-[11px] font-bold uppercase tracking-[0.12em..0.22em]`)
- Custom `marquee` keyframes + `.no-scrollbar` helper live in `src/index.css`

## Deployment

Output is a fully static `dist/` folder uploaded to Virtualmin `public_html/` (see README for the full procedure). No SSR, no environment variables, no build-time secrets.
