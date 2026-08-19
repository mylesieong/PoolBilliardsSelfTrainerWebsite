# Pool & Billiards Self-Trainer — Website

Static marketing site for the [Pool & Billiards Self-Trainer](https://github.com/mylesieong/PoolBilliardsSelfTrainer)
app: one landing page plus a set of SEO guide pages.

No build step, no dependencies, no JavaScript. Plain HTML and one stylesheet — deployable to
GitHub Pages, Netlify, Cloudflare Pages or any static host by pointing it at the repo root.

## Layout

```
index.html                 Landing page
guides/index.html          Guide index
guides/*.html              SEO guide pages
privacy.html               Privacy policy (generated from the app repo's docs/PRIVACY_POLICY.md)
support.html               Support / FAQ
404.html                   Not found
style.css                  The only stylesheet; light and dark via prefers-color-scheme
robots.txt, sitemap.xml    Crawling
```

## Before going live

These placeholders are deliberate and must be replaced:

- **Domain** — every `<link rel="canonical">`, the Open Graph URLs, `robots.txt` and
  `sitemap.xml` use `https://poolselftrainer.com`. Search and replace once the real domain is
  registered.
- **Store links** — the App Store and Google Play buttons in `index.html` point at `#`.
- **Contact email** — `support.html` uses `CONTACT_EMAIL`; `privacy.html` carries
  `[PUBLISHER LEGAL NAME]` and `[CONTACT EMAIL]` inherited from the source document.
- **Social image** — no `og:image` is set yet; add one (1200×630) and reference it from every page.

## Local preview

```
python3 -m http.server 8000
```

Then open <http://localhost:8000>. Root-relative links (`/style.css`, `/guides/`) require a
server — opening the files directly from disk will not load the stylesheet.

## Keeping the privacy policy in sync

`privacy.html` is a conversion of `docs/PRIVACY_POLICY.md` in the app repo. When that document
changes, re-convert it rather than hand-editing the HTML.
