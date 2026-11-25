# STATIC items (owner must provide)

Search the code for `STATIC:` to find each one.

| # | Item | File(s) | What the owner must provide |
|---|---|---|---|
| 1 | Google Play / App Store links | `lib/site.ts` (`playUrl`, `appStoreUrl`) | Store URLs (currently `#`); official badge artwork in `components/StoreBadges.tsx` |
| 2 | AdMob publisher ID + app-ads.txt location | `public/app-ads.txt` | Real `pub-…` id replacing `pub-XXXXXXXXXXXXXXXX`. **Open check:** confirm in AdMob help whether the file may be served from the subdomain; if not, host it at `wakeupmonster.com/app-ads.txt` and set that as the developer website in the stores |
| 3 | Support / contact / press email | `lib/site.ts` (`email`) | **Set:** `support@wakeupmonster.com`. Make sure the mailbox exists and is monitored before launch |
| 4 | Company legal name & address | `app/privacy`, `app/terms`, `components/Footer.tsx`, `lib/site.ts` | Legal entity name and postal address (site says "Wakeup Monster") |
| 5 | Governing law / venue | `app/terms/page.tsx` | Jurisdiction |
| 6 | Effective date | `app/privacy`, `app/terms` | Date at launch |
| 7 | Age statement (under 13) — **owner decision to confirm** | `app/privacy/page.tsx`, FAQ in `lib/site.ts` | Confirm; must match store age ratings and AdMob child-directed setting |
| 8 | Draft banner "Draft — review by a lawyer before publishing" | `components/LegalPage.tsx` (`draft` prop on privacy, terms, delete-data) | Remove at launch after legal review |
| 9 | **In-app text mismatch** | `app/privacy/page.tsx`; game repo `settings_popup.dart` | In-app Privacy says "If you sign in with Google…", contradicting the no-login decision. Update the app (or this page) so they agree. In-app Terms is one line; link it to `/terms/` |
| 10 | Site URL / domain | `lib/site.ts` | **Set:** `https://jellygates.wakeupmonster.com` (Hostinger). Re-check if the domain changes |
| 11 | Price model | FAQ in `lib/site.ts`, JSON-LD offer in `app/page.tsx`, `app/press` | Confirm free-to-play with ads and IAP (JSON-LD says price 0 USD) |
| 12 | Release date / status | `app/press/page.tsx`, home band text | Launch date; replace "Coming soon" |
| 13 | Restore-purchases menu path | `app/support/page.tsx`, FAQ | Confirm "Settings → Restore purchases" in the app |
| 14 | Share image / icons | `public/img/share.png`, `app/icon.png`, `app/apple-icon.png`, `public/icon-512.png` | Share image and icons use the game's purple Jelly mascot art on cream; swap in the final app icon (game repo `app/assets/images/app_icon.png`) if preferred |
| 17 | Mascot name and art | `components/Mascot.tsx`, `public/img/mascot/` | Mascot is the game's purple buddy art (`mood_r3_buddy_v1.png`, marked placeholder in the game's handoff README); the other jelly colours on the site are CSS hue-shifts of it. Confirm the mascot's name (site just says "Jelly") and final art |
| 15 | Screenshots | `public/img/screens/*.webp` | Taken from the game repo's progress screenshots (shop shows "Demo prices"); replace with store-final captures when available |
| 16 | Contact form / analytics | none | None built: mailto only, no analytics |
