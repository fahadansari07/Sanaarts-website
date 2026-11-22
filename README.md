# Sanaarts — mehandi portfolio of Sana Hashmi

Astro 7 static site. No UI framework; plain CSS and small inline scripts.

```sh
npm install
npm run dev       # http://localhost:4321 (or the next free port)
npm run build     # type check + static build into dist/
npm run preview   # serve dist/
```

## Before going live
- Set the real domain: `SITE_URL=https://your-domain npm run build` (or edit `astro.config.mjs`).
  Canonicals, Open Graph URLs, `robots.txt` and the sitemap all use it.

## Adding or updating designs
All portfolio content lives in `src/data/designs.ts`.
1. Save the image as `src/assets/work/<instagram-shortcode>.jpg`.
2. Add an entry (shortcode, label, date, categories, views/likes only if known, `image`, `alt`).
3. Reel cover missing? Leave `image` out — the reel shows as a "Watch on Instagram" card until a cover is added.

Brand, contact and Insights figures: `src/data/site.ts`. FAQs: `src/data/faqs.ts`.
