# SaaS Landing Page

A modern, dark-themed SaaS landing page template built with Next.js (originally
generated with v0.app). It ships with a complete marketing-page layout: animated
hero, features grid, testimonials, pricing section, FAQ accordion, new-release
promo banner, sticky footer, and mock login/signup pages — everything a SaaS
startup needs for its homepage in one drop-in template.

## Features

- **Animated hero section** — staggered Framer Motion entrance animations over a
  pearl-mist radial glow background
- **Sticky shrinking navbar** — rounded glass navbar that contracts on scroll,
  with smooth-scroll anchor navigation and a mobile menu
- **Features grid** — product feature cards with icons
- **Testimonials section** — social proof with customer quotes
- **Pricing section** — tiered pricing cards
- **FAQ accordion** — Radix-based accessible accordion
- **New-release promo banner** — announcement strip for launches/updates
- **Sticky footer** — full-width footer with links
- **Login / signup pages** — ready-made auth page UI shells
- **Dark theme** — next-themes provider, dark mode by default
- **Magic UI components** — extra animated marketing components included
- **Fully responsive** — mobile, tablet, and desktop layouts

## Tech Stack

- [Next.js](https://nextjs.org) 15 (App Router, static export)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com) 3
- [shadcn/ui](https://ui.shadcn.com) + Radix UI primitives
- [Framer Motion](https://www.framer.com/motion/) — animations
- [next-themes](https://github.com/pacocoursey/next-themes) — theming
- [lucide-react](https://lucide.dev) — icons

## Quick Start

### Prerequisites

- Node.js 18 or later
- npm (or pnpm/yarn)

### Install and run

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
npm run build
npm start
```

The project is configured for static export (`output: "export"`), so
`npm run build` produces a fully static site in the `out/` directory that can
be hosted on any static host (GitHub Pages, Cloudflare Pages, Netlify, Vercel).

## Project Structure

```
app/                  # Next.js App Router
  page.tsx            # Home page (hero + sections)
  layout.tsx          # Root layout, theme provider, fonts
  login/page.tsx      # Login page shell
  signup/page.tsx     # Signup page shell
components/
  home/               # Hero and other home-specific components
  magicui/            # Animated marketing components
  ui/                 # shadcn/ui primitives
  features.tsx        # Features grid
  testimonials.tsx    # Testimonials section
  pricing-section.tsx # Pricing cards
  faq-section.tsx     # FAQ accordion
  new-release-promo.tsx
  sticky-footer.tsx
  theme-provider.tsx
lib/
  utils.ts            # cn() class-name helper
public/               # Static assets
styles/
  globals.css         # Tailwind + global styles
next.config.mjs       # Static export + basePath config
```

## Environment Variables

None required. The template runs entirely client-side with no backend.

## Deployment

This repo is deployed as a static site on **GitHub Pages**:

- Live URL: https://girishlade111.github.io/saas-landing-page/
- Deployment: `output: "export"` static build pushed to the `gh-pages` branch.

Notes:

- `basePath` is set to `/saas-landing-page` so assets resolve correctly under
  the GitHub Pages subpath. **Remove the `basePath` line from `next.config.mjs`
  if you deploy to a root domain (Vercel/Netlify/Cloudflare Pages root) — or set
  it to your own subpath.**
- `images.unoptimized` is enabled because static export has no image optimizer.
- Next.js was bumped to 15.2.8 to patch CVE-2025-55182 (React2Shell, CVSS 10.0)
  and related vulnerabilities.

## Customizing

- Edit `app/page.tsx` to reorder or remove sections.
- Marketing copy lives in each component under `components/` — search for the
  text you want to change.
- Global styles and Tailwind tokens are in `styles/globals.css` and
  `components.json`.

---

Built by Girish Lade — https://ladestack.in
