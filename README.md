# Pool & Billiards Self-Trainer — Website

Static marketing site for the [Pool & Billiards Self-Trainer](https://github.com/mylesieong/PoolBilliardsSelfTrainer)
app: one landing page plus a set of SEO guide pages.

**Live at** <https://mylesieong.github.io/products/pool-billiards-self-trainer>
(served from GitHub Pages, under the `products/pool-billiards-self-trainer/` path of
`mylesieong.github.io`).

No build step, no dependencies, no JavaScript — plain HTML and one stylesheet.

## Layout

```
index.html                 Landing page
guides/index.html          Guide index
guides/*.html              SEO guide pages
privacy-policy.html        Privacy policy (the URL referenced by the App Store and Play listings)
support.html               Support / FAQ
404.html                   Not found
style.css                  The only stylesheet; light and dark via prefers-color-scheme
robots.txt, sitemap.xml    Crawling
```

## Paths

Because the site is served from a subdirectory, **all internal links are relative** — `style.css`,
`guides/index.html`, `../index.html` — never root-relative (`/style.css`), which would resolve
against `mylesieong.github.io` and 404. Keep it that way when adding pages.

Absolute URLs appear only in `<link rel="canonical">`, the Open Graph tags, `sitemap.xml` and
`robots.txt`, all using the base above.

## Local preview

```
python3 -m http.server 8321
```

Then open <http://localhost:8321>. Relative links mean the pages also open correctly straight
from disk.

## Still outstanding

- **Social image** — no `og:image` is set. Add one (1200×630) and reference it from every page.
- **robots.txt / 404.html** — GitHub Pages only honours these at the root of
  `mylesieong.github.io`, not in a subdirectory. The copies here are for reference and for the
  case where the site moves to its own domain; to get crawl directives live, add the sitemap line
  to the root `robots.txt` of the Pages repo.
- **Sitemap submission** — submit `sitemap.xml` in Google Search Console for the
  `mylesieong.github.io` property.

## Keeping the privacy policy in sync

`privacy-policy.html` mirrors `docs/PRIVACY_POLICY.md` in the app repo, and its URL is the one
given to the App Store and Google Play. When that document changes, update this page in the same
pass — a store listing pointing at a stale policy is a review risk.
