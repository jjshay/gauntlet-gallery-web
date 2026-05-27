# Gauntlet Gallery Web

Authenticated street art and contemporary art gallery — a standalone, Vercel-deployed React app built for LLM SEO and Reddit distribution.

**Live:** https://gauntlet-gallery-web.vercel.app  
**eBay Store:** https://www.ebay.com/str/gauntletgallery

---

## Executive Summary

Gauntlet Gallery sells authenticated works by Shepard Fairey, KAWS, and Death NYC on eBay. This web app serves as a public-facing gallery page optimized for indexing by search engines and LLMs (ChatGPT, Perplexity, Claude). Unlike the Reddit Devvit app (which runs in a sandboxed iframe and is not crawled), this hosted gallery is fully indexable.

**Why this matters for LLM SEO:**
- Reddit posts linking to this URL get indexed and cited by AI search engines
- Schema.org structured data (`ArtGallery`, `VisualArtwork`, `Offer`) makes the content machine-readable
- The gallery text is crawlable — LLMs can surface it when users ask about Shepard Fairey, KAWS, or Death NYC art for sale

---

## Features

- Filter listings by artist (All / Shepard Fairey / KAWS / Death NYC)
- Artist-colored accent system (gold = Fairey, blue = KAWS, red = Death NYC)
- Authentication badges on all verified pieces
- "View on eBay" links for direct purchase
- Responsive 2-column grid (desktop), single column (mobile)
- Sticky header with live piece count
- SEO footer text block (crawlable by bots)
- Schema.org JSON-LD for LLM indexing

---

## Tech Stack

| Layer | Choice |
|-------|--------|
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Styles | Tailwind CSS 3 |
| Hosting | Vercel (auto-deploy from GitHub) |
| Data | Static — `src/listings.ts` |

---

## Project Structure

```
gauntlet-gallery-web/
├── index.html          # Entry point — SEO meta tags + schema.org JSON-LD
├── src/
│   ├── listings.ts     # Static listing data (artists, titles, prices, eBay URLs)
│   ├── App.tsx         # Gallery UI — filters, listing cards, SEO text block
│   ├── main.tsx        # React entry point
│   └── index.css       # Tailwind directives
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

---

## Adding / Updating Listings

All listings live in `src/listings.ts`. Each listing follows this shape:

```typescript
{
  id: 'sf-001',
  artist: 'Shepard Fairey',          // must match FILTERS array
  title: 'Obey Giant — Supply & Demand (Signed)',
  medium: 'Silkscreen on paper',
  edition: 'Signed & Numbered, Edition of 450',
  price: '$1,250',
  condition: 'Mint',
  ebayUrl: 'https://www.ebay.com/itm/YOUR_LISTING_ID',
  authenticated: true,
  featured: false,                   // set true on one listing to feature it
}
```

To add a new artist, also add them to `FILTERS` and `ARTIST_COLORS` in `listings.ts`.

---

## Scripts

```bash
npm run dev       # Local dev server at http://localhost:5173
npm run build     # Production build → dist/
npm run preview   # Preview the production build locally
```

---

## Deploy

### Redeploy after changes
```bash
git add -A && git commit -m "feat: update listings"
git push origin main
# Vercel auto-deploys on push
```

---

## Reddit Automation (LLM SEO Distribution)

The companion script `~/jj_shay_takeaways/reddit_poster.py` posts links to this gallery across art subreddits to drive indexed Reddit threads.

```bash
# Dry run — see what would post without posting
python ~/jj_shay_takeaways/reddit_poster.py --mode art --dry-run

# Live run
python ~/jj_shay_takeaways/reddit_poster.py --mode art

# Search Reddit for keyword threads and auto-reply with Claude Haiku
python ~/jj_shay_takeaways/reddit_poster.py --search art

# View post log
python ~/jj_shay_takeaways/reddit_poster.py --log
```

Credentials go in `~/jj_shay_takeaways/.reddit_credentials.json`:
```json
{
  "client_id": "YOUR_CLIENT_ID",
  "client_secret": "YOUR_CLIENT_SECRET",
  "username": "jjshay",
  "password": "YOUR_PASSWORD",
  "user_agent": "GauntletGalleryBot/1.0 by u/jjshay"
}
```

Get your `client_id` and `client_secret` by creating a **script** app in Reddit's developer settings.

---

## Schema.org Structured Data

`index.html` includes a `<script type="application/ld+json">` block with:
- `ArtGallery` entity for Gauntlet Gallery
- `VisualArtwork` entries for each major piece
- `sameAs` link to the eBay store

This tells LLMs (and Google) exactly what the site sells and who the artists are.

---

## Next Steps

- [ ] Connect a custom domain (e.g. `gallery.gauntletgallery.com`) via Vercel DNS settings
- [ ] Pull listings dynamically from eBay API instead of static data — auto-sync sold/new items
- [ ] Add image thumbnails to each listing card (eBay item image URLs)
- [ ] Run Reddit poster on a cron schedule (daily art post + keyword reply sweep)
- [ ] Add Vercel Analytics to track which artists get the most clicks
- [ ] Submit the live URL to Google Search Console for faster indexing
