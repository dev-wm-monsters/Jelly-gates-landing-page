# Jelly Gates — website

Next.js (App Router, TypeScript) **static export**: `npm run build` writes plain HTML/CSS to `out/`, so it hosts on GitHub Pages or Firebase Hosting. No runtime server, no external CDNs; fonts (SIL OFL) are self-hosted. Pages work with JavaScript disabled.

**Status:** draft. Placeholders are marked `STATIC:` in the code and listed in [`STATIC-NOTES.md`](STATIC-NOTES.md). Legal pages carry a "Draft — review by a lawyer" banner.

## Develop
```sh
npm install
npm run dev                 # http://localhost:3000
npm run build && npx serve out   # preview the exported site
```
Build-time settings (environment variables): `NEXT_PUBLIC_SITE_URL` (full public URL, used for canonical/Open Graph/sitemap/JSON-LD) and `NEXT_PUBLIC_BASE_PATH` (only for a sub-path such as `/Jelly-gates-landing-page`).

## Structure
- `app/` pages: `/`, `/how-to-play/`, `/support/`, `/press/`, `/privacy/`, `/terms/`, `/delete-data/`, `not-found`, `sitemap.ts`, `robots.ts`
- `lib/site.ts` all site facts (name, store links, email, FAQ, screenshot list); `lib/seo.ts` metadata + JSON-LD helpers
- `components/` `Mascot` (Jelly), `GateDemo` (CSS-only animated demo), `TileIcon` (game tiles + symbols)
- Motion: bouncy springs, squash-and-stretch and scroll pop-in are pure CSS and are switched off under `prefers-reduced-motion`
- `public/` `app-ads.txt`, `llms.txt`, icons, game screenshots (`img/screens`, from the game repo's `design/handoff/progress`) and art (`img/art`)

## SEO / GEO / AEO
- Per-page title, description, canonical, Open Graph and Twitter tags; 1200×630 share image built from game art.
- JSON-LD: `Organization`, `WebSite`, `MobileApplication`/`VideoGame` (with screenshots), `FAQPage`, `HowTo`, `BreadcrumbList`. No ratings or reviews are claimed.
- Answer-first copy and a visible FAQ (same text as the structured data) so search and AI answer engines can quote it.
- `llms.txt` summary of the game and pages; `robots.txt` explicitly allows search and AI crawlers; `sitemap.xml`.
- Press kit page with entity facts (developer, genre, platforms, status).
- After launch: add the real store URLs to `sameAs`/`downloadUrl`, submit the sitemap in Google Search Console and Bing Webmaster Tools.

## Publish
**GitHub Pages:** `.github/workflows/pages.yml` builds and deploys on push to `main`. Settings → Pages → Source: GitHub Actions. Set repository variables `SITE_URL` (and `BASE_PATH` if not on a custom domain at the root). For a custom domain add `public/CNAME`.
**Firebase Hosting:** `npm run build`, `firebase init hosting` with public dir `out`, then `firebase deploy`.
`app-ads.txt` must be served at the root of the domain listed as the developer website in the stores.

## URLs for the store consoles (replace `<domain>`)
| Field | URL |
|---|---|
| Play Console — Privacy policy | `https://<domain>/privacy/` |
| App Store Connect — Privacy Policy URL | `https://<domain>/privacy/` |
| App Store Connect — Support URL | `https://<domain>/support/` |
| App Store Connect — Marketing URL | `https://<domain>/` |
| Play Console — Account / data deletion URL | `https://<domain>/delete-data/` |
| Terms (EULA, if needed) | `https://<domain>/terms/` |
| AdMob app-ads.txt | `https://<domain>/app-ads.txt` |

Home-page screenshots: `docs/screenshots/`.
