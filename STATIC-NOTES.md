# STATIC items (owner must provide)

Search the code for `STATIC:` to find each one.

| # | Item | File(s) | What the owner must provide |
|---|---|---|---|
| 1 | Google Play / App Store links | `lib/site.ts` (`playUrl`, `appStoreUrl`) | Store URLs (currently `#`); official badge artwork in `components/StoreBadges.tsx` |
| 2 | AdMob publisher ID + app-ads.txt location | `public/app-ads.txt` | Real `pub-…` id replacing `pub-XXXXXXXXXXXXXXXX`. **Open check:** confirm in AdMob help whether the file may be served from the subdomain; if not, host it at `wakeupmonster.com/app-ads.txt` and set that as the developer website in the stores |
| 3 | Support / contact / press email | `lib/site.ts` (`email`) | **Set:** `support@wakeupmonster.com`. Make sure the mailbox exists and is monitored before launch |
| 4 | Company legal name & address | — | **Decided:** no postal address; site uses "Wakeup Monster" |
| 5 | Governing law / venue | `app/terms/page.tsx` | **Set to India** (same as the Let's Drag terms). Owner to confirm |
| 6 | Effective date | `app/privacy`, `app/terms` | **Set:** 25 November 2026. Update if launch date changes materially |
| 7 | Age statement (under 13) | `app/privacy/page.tsx`, FAQ in `lib/site.ts` | Text says "not directed at children under 13"; marker removed. Must match store age ratings and AdMob child-directed setting |
| 8 | Draft banner | — | **Removed** (legal review done, per owner) |
| 9 | In-app text mismatch | game repo `settings_popup.dart` | Owner will fix: in-app Privacy still says "sign in with Google"; link in-app Terms to `/terms/` |
| 10 | Site URL / domain | `lib/site.ts` | **Set:** `https://jellygates.wakeupmonster.com` (Hostinger). Re-check if the domain changes |
| 11 | Price model | FAQ in `lib/site.ts`, JSON-LD offer in `app/page.tsx`, `app/press` | Confirm free-to-play with ads and IAP (JSON-LD says price 0 USD) |
| 12 | Release date / status | `app/press/page.tsx`, home band text | Launch date; replace "Coming soon" |
| 13 | Restore-purchases menu path | `app/support/page.tsx`, FAQ | Confirm "Settings → Restore purchases" in the app |
| 14 | Share image / icons | `public/img/share.png`, `app/icon.png`, `app/apple-icon.png`, `public/icon-512.png` | Share image and icons use the game's purple Jelly mascot art on cream; swap in the final app icon (game repo `app/assets/images/app_icon.png`) if preferred |
| 17 | Mascot name and art | `components/Mascot.tsx`, `public/img/mascot/` | Mascot is the game's purple buddy art (`mood_r3_buddy_v1.png`, marked placeholder in the game's handoff README); the other jelly colours on the site are CSS hue-shifts of it. Confirm the mascot's name (site just says "Jelly") and final art |
| 15 | Screenshots | `public/img/screens/*.webp` | Taken from the game repo's progress screenshots (shop shows "Demo prices"); replace with store-final captures when available |
| 16 | Contact form / analytics | none | None built: mailto only, no analytics |
| 18 | Buddy names | `lib/game.ts` (`BUDDIES`), `public/img/buddies/` | Names are the art folder names in the game repo (Djinn, Falcon, Lootie, Orion); descriptions only describe the pictures. Confirm which buddies ship and their names |
| 19 | Zone / level / booster facts | `lib/game.ts` | Copied from the game repo (6 zones x 5 levels + boss gates; Freeze 5, Pop 10, Key 15; "owner, Nov 23" values). Re-check against the release build |
| 20 | Website privacy statement | `app/privacy/page.tsx` section 7 | Says the site uses no cookies or analytics. Update if you add analytics |
| 21 | Let's Drag link | `components/SisterApp.tsx`, `components/Footer.tsx` | Links to letsdrag.wakeupmonster.com; remove if you don't want cross-promotion |
