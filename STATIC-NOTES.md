# STATIC items (owner must provide)

Search the code for `STATIC:` to find each one.

| # | Item | File(s) | What the owner must provide |
|---|---|---|---|
| 1 | Google Play / App Store links | `lib/site.ts` (`playUrl`, `appStoreUrl`) | Store URLs (currently `#`); official badge artwork in `components/StoreBadges.tsx` |
| 2 | AdMob publisher ID | `public/app-ads.txt` | Real `pub-…` id replacing `pub-XXXXXXXXXXXXXXXX` |
| 3 | Support / contact / press email | `lib/site.ts` (`email`) | Real address replacing `support@example.com` (no personal email) |
| 4 | Company legal name & address | `app/privacy`, `app/terms`, `components/Footer.tsx`, `lib/site.ts` | Legal entity name and postal address (site says "Wakeup Monster") |
| 5 | Governing law / venue | `app/terms/page.tsx` | Jurisdiction |
| 6 | Effective date | `app/privacy`, `app/terms` | Date at launch |
| 7 | Age statement (under 13) — **owner decision to confirm** | `app/privacy/page.tsx`, FAQ in `lib/site.ts` | Confirm; must match store age ratings and AdMob child-directed setting |
| 8 | Draft banner "Draft — review by a lawyer before publishing" | `components/LegalPage.tsx` (`draft` prop on privacy, terms, delete-data) | Remove at launch after legal review |
| 9 | **In-app text mismatch** | `app/privacy/page.tsx`; game repo `settings_popup.dart` | In-app Privacy says "If you sign in with Google…", contradicting the no-login decision. Update the app (or this page) so they agree. In-app Terms is one line; link it to `/terms/` |
| 10 | Site URL / domain | `NEXT_PUBLIC_SITE_URL` (build env / repo variable `SITE_URL`), `public/llms.txt` | Final URL; `llms.txt` links are root-relative. Default `https://example.com` |
| 11 | Price model | FAQ in `lib/site.ts`, JSON-LD offer in `app/page.tsx`, `app/press` | Confirm free-to-play with ads and IAP (JSON-LD says price 0 USD) |
| 12 | Release date / status | `app/press/page.tsx`, home band text | Launch date; replace "Coming soon" |
| 13 | Restore-purchases menu path | `app/support/page.tsx`, FAQ | Confirm "Settings → Restore purchases" in the app |
| 14 | Share image / icon | `public/img/share.png`, `public/icon.svg`, `public/favicon.svg` | Share image uses real game art; icon is a placeholder made from palette shapes; supply the final app icon (add a 180px PNG apple-touch-icon) |
| 15 | Screenshots | `public/img/screens/*.webp` | Taken from the game repo's progress screenshots (shop shows "Demo prices"); replace with store-final captures when available |
| 16 | Contact form / analytics | none | None built: mailto only, no analytics |
