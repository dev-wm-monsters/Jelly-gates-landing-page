# STATIC items (owner must provide)

| # | Item | File(s) | What the owner must provide |
|---|---|---|---|
| 1 | Google Play link | `index.html` (2 buttons) | Store URL for `href="#"`; official badge artwork |
| 2 | App Store link | `index.html` (2 buttons) | Store URL for `href="#"`; official badge artwork |
| 3 | AdMob publisher ID | `app-ads.txt` | Real `pub-…` id replacing `pub-XXXXXXXXXXXXXXXX` |
| 4 | Support/contact email | `privacy.html`, `terms.html`, `support.html`, `delete-data.html` | Real address replacing `support@example.com` (no personal email) |
| 5 | Company legal name & address | `privacy.html`, `terms.html`, all footers | Legal entity name, postal address (footer currently says "Wakeup Monster") |
| 6 | Governing law / venue | `terms.html` | Jurisdiction |
| 7 | Effective date | `privacy.html`, `terms.html` | Date at launch |
| 8 | Age statement (under 13) — **owner decision to confirm** | `privacy.html` | Confirm; must match store age ratings and AdMob child-directed setting |
| 9 | Draft banner "Draft — review by a lawyer before publishing" | `privacy.html`, `terms.html`, `delete-data.html` | Remove at launch after legal review |
| 10 | Reconcile with in-app Privacy/Terms text | `privacy.html`, `terms.html` | `app/lib/candy/screens/home/settings_popup.dart` could not be read (game repo attach was denied); compare and align wording |
| 11 | Real screenshots / game art | `index.html` | Phone mock-ups are CSS illustrations built from the palette; swap in `design/handoff/progress/*.png`. Share image `assets/img/share.png` and icon `assets/img/favicon.svg`/`apple-touch-icon.png` are placeholders made from palette shapes, not the game's art |
| 12 | Custom domain / absolute URLs | all `<head>` (canonical, og:url, og:image, twitter:image), `sitemap.xml`, `robots.txt` | Replace `https://example.com/jelly-gates` |
| 13 | In-app menu path for Restore purchases | `support.html` | Confirm "Settings → Restore purchases" |
| 14 | Contact form / analytics | none | None built; mailto only, no analytics |
