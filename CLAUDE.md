# CLAUDE.md

This repo is a minimal Astro blog for `suredream.github.io`.

## Role

You are helping maintain a quiet, text-first personal blog called **Still Becoming**.

The blog publishes durable essays and notes on intelligience and knowledge assets.

Optimize for clarity, low maintenance, and long-term readability.

## Do Not

- Do not add visual clutter.
- Do not introduce heavy UI frameworks.
- Do not add images, cards, or popups unless explicitly requested.
- Do not force every post to be bilingual.
- Do not create paragraph-by-paragraph bilingual pages.
- Do not change deployment assumptions without updating `deploy_note.md`.

## Site Principles

- Text first.
- Archive first.
- Minimal navigation.
- Essays should feel durable, not news-like.
- Posts may be Chinese only, English only, or paired bilingual versions.
- Bilingual versions are separate posts linked through `translation`.

## Key Files

```text
src/content/posts/       Markdown posts
src/content/config.ts    Post schema
src/layouts/             Base and post layouts
src/pages/index.astro    Homepage recent posts
src/pages/archive.astro  Year-grouped archive
src/styles/global.css    Global style
.github/workflows/       GitHub Pages deploy workflow
```

## Post Front Matter

Required:

```yaml
title: "Post title"
date: 2026-07-06
lang: en # or zh
summary: "Short high-signal summary."
type: essay
draft: false
tags: []
```

Optional:

```yaml
translation: "/posts/paired-post-slug/"
updated: 2026-07-07
```

## Editing Rules

When adding a post:

1. Put it under `src/content/posts/`.
2. Use filename pattern `YYYY-MM-DD-short-slug.lang.md`.
3. Keep `summary` concise and informative.
4. Use `draft: true` for unfinished posts.
5. Use `translation` only when a paired page exists.

When editing layout or style:

1. Preserve the narrow reading column.
2. Preserve simple Archive structure.
3. Test homepage, archive, post page, mobile width.
4. Do not introduce client-side JavaScript unless necessary.

## Build Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Deployment

Deployment target:

```text
https://github.com/suredream/suredream.github.io
```

Pushing to `main` triggers GitHub Actions and deploys to GitHub Pages.
