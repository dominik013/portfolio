# Dominik Reichinger — portfolio

A static Astro portfolio with a vivid red editorial design, light/dark themes, categorised public repositories, and a cited research publication.

## Development

Use the Node.js version in `.node-version`.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

`npm run build` checks Astro/TypeScript, builds static HTML, and verifies internal links and draft exclusion. GitHub Actions runs the same checks. No server adapter, database, API keys, or runtime GitHub requests are needed.

## Content

- `src/content/projects/*.md`: project descriptions, category, technology tags, and repository/demo links.
- `src/content/papers/*.md`: paper summary and publication metadata.
- `src/content/notes/*.md`: future articles. Copy the unpublished template, replace its content, and set `draft: false`. Notes appear in navigation when at least one is published. Drafts do not generate pages or sitemap entries.
- `src/pages/index.astro`: introduction and About text.
- `src/styles/global.css`: colours and layout.

Projects are a curated snapshot of original public repositories as of 22 September 2026. Private repositories and community forks are excluded. The portfolio repository is linked in the footer rather than listed as its own project.

Category controls progressively enhance the page: all projects remain visible with JavaScript disabled. Theme selection follows the operating system initially, is saved locally when changed, and is applied before rendering to avoid a flash. If local storage is unavailable, the toggle still works for the current page.

## Cloudflare Pages via GitHub

Connect `dominik013/portfolio` in Cloudflare **Workers & Pages → Pages → Import an existing Git repository**.

| Setting | Value |
| --- | --- |
| Project name | `dominik-reichinger` |
| Production branch | `main` |
| Framework | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | repository root |
| Node version | `.node-version` (`24.13.1`) |
| `PUBLIC_SITE_URL` | `https://reichinger.dev` (optional override of the default) |

Cloudflare builds and publishes pushes to the production branch and can provide preview deployments for pull requests. The build command includes validation, so publication fails if those checks fail. GitHub Actions is an additional check, not a separate Cloudflare deployment gate.

The Astro `site` URL defaults to `https://reichinger.dev`. Set `PUBLIC_SITE_URL` when changing the canonical domain; this controls canonical links, Open Graph URLs, robots.txt, and the sitemap. A top-level `404.html` provides a real not-found page on Pages.

## Sources

Project descriptions are based on the corresponding public repository metadata and READMEs. Coursework folders were verified through the GitHub contents API. The garage by tom demo is an MVP preview.

Publication: Reichinger, D.; Sonnleitner, E.; Kurz, M. *Continuous Mobile User Authentication Using Combined Biometric Traits*. Applied Sciences 2021, 11(24), 11756. [Publisher](https://www.mdpi.com/2076-3417/11/24/11756), [DOI](https://doi.org/10.3390/app112411756), [indexed abstract](https://doaj.org/article/6bc66862076b44149465e57eb2ac34a4), [research repository](https://github.com/dominik013/continuous-mobile-user-authentication).

The site uses system fonts and no third-party analytics or remotely loaded assets.
