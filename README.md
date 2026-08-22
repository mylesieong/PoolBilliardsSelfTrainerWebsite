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
assets/                    Logo mark (SVG), app icons, social image
guides/index.html          Guide index
guides/*.html              SEO guide pages
privacy-policy.html        Privacy policy (the URL referenced by the App Store and Play listings)
support.html               Support / FAQ
404.html                   Not found
zh/ vi/ pt/ ko/            Translations — a full mirror of the ten pages above
style.css                  The only stylesheet; light and dark via prefers-color-scheme
site.webmanifest           PWA/app metadata (name, theme colour, icons)
favicon.ico                Favicon (also assets/favicon.svg)
robots.txt, sitemap.xml    Crawling
```

## Languages

Five locales, each a directory that mirrors the English tree one-for-one:

| Locale | Directory | `hreflang` | Label in the switcher |
| --- | --- | --- | --- |
| English (source) | *(site root)* | `en`, and `x-default` | English |
| Chinese, Simplified | `zh/` | `zh-Hans` | 简体中文 |
| Vietnamese | `vi/` | `vi` | Tiếng Việt |
| Portuguese (European) | `pt/` | `pt-PT` | Português |
| Korean | `ko/` | `ko` | 한국어 |

English is the source of truth: translate *from* it, never the other way round.

Every page carries a self-referential `<link rel="canonical">` and the **same** set of six
`<link rel="alternate" hreflang>` tags — one per locale plus `x-default` pointing at English.
Search engines only honour `hreflang` when the set is identical and reciprocal on all five
copies, so when you add or remove a page you must add or remove all five at once. `sitemap.xml`
repeats the same alternates as `xhtml:link` elements.

The switcher at the top of every footer links to the *same page* in each other locale, using
relative paths. The `.lang-switch`, `html[lang^="zh"]` and `html[lang^="ko"]` rules at the bottom
of `style.css` handle the switcher and the CJK/Korean font stacks — the Latin stack has no CJK
faces, and the negative heading tracking meant for Latin looks wrong in those scripts.

### Adding or changing content

There is no build step and no translation tooling: the localised pages are plain static HTML,
committed as-is. A change to an English page is not finished until the four translations carry
it too, and a new page means five files, five sitemap entries and six `hreflang` tags on each.

The translated privacy policies open with a callout stating that they are provided for
convenience and that the English version prevails — keep that note if you edit them.

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

- **robots.txt / 404.html** — GitHub Pages only honours these at the root of
  `mylesieong.github.io`, not in a subdirectory. The copies here are for reference and for the
  case where the site moves to its own domain; to get crawl directives live, add the sitemap line
  to the root `robots.txt` of the Pages repo.
- **Sitemap submission** — submit `sitemap.xml` in Google Search Console for the
  `mylesieong.github.io` property.

## Branding

The palette in `style.css` mirrors the app's Material theme
(`composeApp/.../theme/Theme.kt`): primary `#1565C0`, secondary `#42A5F5`, error `#D32F2F`,
background `#F5F5F5`. Change it there and here in the same pass.

`assets/logo-mark.svg` is a hand-drawn SVG of the app icon's ball-and-cue mark, used in the site
header and favicon. `assets/icon-*.png` and `assets/apple-touch-icon.png` are downscaled from
`composeApp/src/androidMain/ic_launcher-playstore.png` in the app repo, and
`assets/og-image.png` (1200×630) is the social card referenced by every page.

## Keeping the privacy policy in sync

`privacy-policy.html` mirrors `docs/PRIVACY_POLICY.md` in the app repo, and its URL is the one
given to the App Store and Google Play. When that document changes, update this page **and the
four translations** (`zh/`, `vi/`, `pt/`, `ko/`) in the same pass — a store listing pointing at a
stale policy is a review risk. Only the English page is authoritative; the translations say so.
