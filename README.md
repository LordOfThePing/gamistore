# Gamistore

Showcase-only e-commerce for Apple, Samsung, PlayStation, Nintendo, GoPro and more. Built with Astro.

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321

## Build

```bash
npm run build
npm run preview
```

## Config

- WhatsApp number: edit `src/config/site.ts` → `whatsappNumber` (international format, no spaces, no `+`).
- Store name, slogan, hero copy, hot banner message: same file.
- Product catalog + prices: `src/data/products.ts`. Prices are placeholder ARS — edit freely.
- Featured products on homepage: toggle `featured: true` on any product in `src/data/products.ts`.

## Stack

- Astro 4 (zero JS by default)
- Vanilla TS cart (localStorage) — no framework overhead
- Mobile-first responsive CSS, system font stack, no external fonts
- Checkout = pre-filled WhatsApp message with cart items
