# Jelly Gates — website

Plain static HTML/CSS (no build step, no frameworks, no CDNs, no JavaScript required). Fonts are self-hosted (SIL OFL, see `assets/fonts/`).

**Status:** draft. Placeholders are marked `<!-- STATIC: ... -->` in the HTML and listed in [`STATIC-NOTES.md`](STATIC-NOTES.md). Legal pages carry a "Draft — review by a lawyer" banner.

## Preview locally
```sh
python3 -m http.server 8000   # then open http://localhost:8000/
```

## Publish
**GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root (`.nojekyll` is included). Custom domain: add a `CNAME` file and set the domain in Pages settings. A project site is served under `/Jelly-gates-landing-page/`; `404.html` uses relative asset paths, so use a custom domain (site at the root) for it to be styled on deep URLs.
**Firebase Hosting:** `firebase init hosting`, public dir `.`, single-page rewrite **off**, then `firebase deploy`.
`app-ads.txt` must be served at the root of the domain listed as the developer website in the stores.

## URLs for the store consoles
Replace `https://<domain>` with the final site URL.

| Field | URL |
|---|---|
| Play Console — Privacy policy | `https://<domain>/privacy.html` |
| App Store Connect — Privacy Policy URL | `https://<domain>/privacy.html` |
| App Store Connect — Support URL | `https://<domain>/support.html` |
| App Store Connect — Marketing URL | `https://<domain>/` |
| Play Console — Account / data deletion URL | `https://<domain>/delete-data.html` |
| Terms (EULA, if needed) | `https://<domain>/terms.html` |
| AdMob app-ads.txt | `https://<domain>/app-ads.txt` |

Screenshots of the home page: `docs/screenshots/`.
