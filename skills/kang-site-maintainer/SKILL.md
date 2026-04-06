---
name: kang-site-maintainer
description: Use when working on Kang's personal navigation website repository (kk12521/myweb, likang.eu.cc) for adding or editing site cards, updating logos and QR codes, refining homepage layout, changing search providers, cleaning unused assets, deploying to Vercel, or syncing project metadata.
---

# Kang Site Maintainer

Use this skill when maintaining Kang's personal Hugo navigation site.

## Project Identity

- Site name: `康康网站`
- Domain: `https://likang.eu.cc`
- Blog: `https://akang9.eu.cc`
- GitHub repo: `https://github.com/kk12521/myweb`
- Vercel team scope: `kangs-projects-d92c767d`
- Preferred production deploy command:
  `npx.cmd vercel deploy --prod --yes --scope kangs-projects-d92c767d`

## Main Files

- Site config:
  `config.toml`
- Top nav:
  `data/headers.yml`
- Friend links:
  `data/friendlinks.yml`
- Main site cards:
  `data/webstack.yml`
- About page:
  `content/about.md`
- Homepage hero/search:
  `layouts/partials/content_search.html`
- Homepage card rendering:
  `layouts/partials/content_main.html`
  `layouts/partials/site_card.html`
- Header / sidebar / footer behaviors:
  `layouts/partials/content_header.html`
  `layouts/partials/sidebar.html`
  `layouts/partials/content_footer.html`
  `layouts/partials/footer.html`
- Custom styling:
  `static/assets/css/custom-style.css`
- Runtime enhancements:
  `static/assets/js/site-enhancements.js`

## Asset Rules

- Add reusable site logos to:
  `static/assets/images/logos/`
- Add page-level images, QR codes, and brand marks to:
  `static/assets/images/`
- Prefer lowercase ASCII file names with hyphens for new assets:
  `bbys.svg`, `linuxdo.svg`, `wechat-personal.svg`
- If an official favicon URL is stable, using the remote URL is acceptable.
- If a card uses a local QR code image, store it under `static/assets/images/` and set:
  `qrcode: assets/images/<filename>`

## Editing Site Cards

All navigation content is driven by `data/webstack.yml`.

### Add a top-level recommendation

Add under:
`taxonomy: 常用推荐`

Example:

```yml
- title: KangNews
  logo: https://akang.icu/icon.svg
  url: https://akang.icu/
  description: 康康自创的专属新闻爬虫网站，适合快速汇总热点、追踪资讯与信息检索。
```

### Add a categorized site

Add under the correct `term:` block inside a taxonomy list.

Example:

```yml
- term: 科研AI
  links:
    - title: ChatGPT
      logo: https://chatgpt.com/favicon.ico
      url: https://chatgpt.com/
      description: OpenAI 的对话式 AI 助手，适合问答、写作、代码与资料整理。
```

### Card Writing Style

- Prefer concise Chinese descriptions.
- Avoid raw English marketing copy unless the user asks to keep it.
- If the site is a tool:
  say what it is for.
- If the site is a media site:
  mention what kind of content it provides and why it is useful.
- If the site is a QR card:
  make the main card clickable when a `url` exists, and use the QR image for hover view.

## Homepage / UI Changes

When adjusting homepage look and layout:

- Start with `static/assets/css/custom-style.css`
- Change structure only when needed in:
  `layouts/partials/content_search.html`
  `layouts/partials/content_main.html`
  `layouts/partials/site_card.html`
- Preserve the current design direction:
  refined, centered, minimal, soft warm-neutral palette

### If the user asks to add a new search source

Update both files:

- `layouts/partials/content_search.html`
- `layouts/partials/modal_search.html`

Keep both desktop and modal search lists in sync.

## Deployment Workflow

### Preferred live publish path

Use Vercel direct deploy:

```powershell
npx.cmd vercel deploy --prod --yes --scope kangs-projects-d92c767d
```

After deploy, confirm the alias:
`https://likang.eu.cc`

### GitHub

- Repository target:
  `kk12521/myweb`
- If only metadata or content changed, a normal push is preferred:
  `git push origin main`
- If GitHub HTTPS push resets from this machine, do not rewrite history casually.
- Only use the clean-export force-push approach if explicitly needed to recover remote sync.

## Cleanup Rules

Before deleting anything:

- Confirm the file is not referenced by:
  `config.toml`
  `layouts/partials/*.html`
  `layouts/_default/*.html`
  `data/webstack.yml`
- Keep runtime dependencies even if they look old.
- It is safe to remove:
  unreferenced logos, old preview assets, unused Font Awesome source bundles, and dead workflow files.

## Validation Checklist

After edits:

1. Run:
   `git diff --check`
2. If JS changed, run:
   `node --check static/assets/js/site-enhancements.js`
3. If search providers changed, verify both desktop and modal search blocks were updated.
4. If logos or QR codes changed, verify the referenced file exists.
5. If publishing, redeploy via Vercel and verify the live alias.

## Notes Specific To This Project

- `我的微信` card uses a local QR image and should link to the blog:
  `https://akang9.eu.cc/`
- `科研办公` contains a `科研AI` sub-block with `ChatGPT / Grok / Gemini`.
- `常用推荐` also includes personal tools and media shortcuts like `KangNews`.
- Keep repo/project naming consistent with:
  `myweb`
