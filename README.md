# landing-benson

Editorial law-firm landing site for **Benson Goldstein** — a Next.js + Tailwind v4 + Motion build with a theatrical-playbill aesthetic, parallax scroll choreography, and sliding-over section stacking.

## Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS v4 with bespoke design tokens
- **Motion**: `motion` library — `useScroll`, `useTransform`, `useVelocity`, sticky-stacking
- **Type**: Fraunces (display) · Instrument Serif (italic accent) · Geist (body)

## Pages

- `/` — home with hero, eligibility form, marquee, stats, horizontal-pinned cases, testimonials, FAQ, CTA
- `/about` — counsel bios (Coby Benson · David Goldstein), awards, philosophy
- `/mis-sold-motor-finance` — service page
- `/unaffordable-lending-claims` — service page
- `/privacy-policy`, `/complaints-procedure` — long-form policy pages with sticky TOC

## Develop

```bash
npm install
npm run dev      # dev server on http://localhost:3000
npm run build    # production build
npm run lint
```

## Notable patterns

- `components/sections/scrolls-over.tsx` + `.scrolls-over` utility — sticky-stacked sections so the next slides up and over the previous
- `hooks/use-section-parallax.ts` — section-local scroll progress; consumers call `useTransform` at top level
- `components/decor/editorial-watermark.tsx` — oversized italic display word as parallax backdrop
- `components/sections/cases-pinned.tsx` — horizontal-pinned scroll showcase
- `components/sections/marquee-band.tsx` — display-type marquee modulated by scroll velocity
