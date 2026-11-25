# Jelly Gates: Block Jam Puzzle — website

Next.js (App Router, TypeScript) **static export**: `npm run build` writes plain HTML/CSS to `out/`, so it hosts on any static host (Hostinger in production). No runtime server, no external CDNs; fonts (SIL OFL) are self-hosted. Pages work with JavaScript disabled.

**Status:** draft. Placeholders are marked `STATIC:` in the code and listed in [`STATIC-NOTES.md`](STATIC-NOTES.md). Legal pages carry a "Draft — review by a lawyer" banner.

## Develop
```sh
npm install
npm run dev                 # http://localhost:3000
npm run build && npx serve out   # preview the exported site
```
Build-time settings (environment variables): `NEXT_PUBLIC_SITE_URL` (full public URL, used for canonical/Open Graph/sitemap/JSON-LD) and `NEXT_PUBLIC_BASE_PATH` (only if ever served from a sub-path).

## Structure
- `app/` pages: `/`, `/how-to-play/`, `/worlds/`, `/boosters/`, `/llms-full.txt`, `/support/`, `/press/`, `/privacy/`, `/terms/`, `/delete-data/`, `not-found`, `sitemap.ts`, `robots.ts`
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

## Publish (Hostinger, jellygates.wakeupmonster.com)
1. In hPanel create the subdomain `jellygates` for `wakeupmonster.com` (Domains → Subdomains); enable the free SSL for it.
2. Build locally: `npm install && npm run build`. The site is now in `out/` (it already includes `.htaccess`, `404.html`, `llms.txt`, `app-ads.txt`).
3. Upload **the contents of `out/`** (not the folder itself) into the subdomain's `public_html` folder (hPanel File Manager or FTP), replacing old files.
4. Open `https://jellygates.wakeupmonster.com/` and `/privacy/`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`.
The default site URL is `https://jellygates.wakeupmonster.com`; set `NEXT_PUBLIC_SITE_URL` only to build a preview on another host.
`app-ads.txt`: AdMob reads it from the developer-website domain listed in the store listings. Confirm in AdMob's help whether the subdomain is accepted; otherwise serve it from `https://wakeupmonster.com/app-ads.txt` (see STATIC-NOTES.md).

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
