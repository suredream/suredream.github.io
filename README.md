# Still Becoming

A minimal Astro blog for publishing essays on AI, work, judgment, and knowledge assets.

Target remote repository:

```text
https://github.com/suredream/suredream.github.io
```

This repo is designed for a simple workflow:

```text
edit Markdown in GitHub repo → push to main → GitHub Actions builds → GitHub Pages publishes
```

## Site Structure

```text
src/
  content/
    posts/              # Markdown posts
  layouts/              # Base and post layouts
  pages/                # Home, archive, about, resume, dynamic post route
  styles/
    global.css          # Site style
.github/
  workflows/
    deploy.yml          # GitHub Pages deployment
```

## Writing Workflow

### 1. Create a new post

Create a new Markdown file under:

```text
src/content/posts/
```

Recommended naming:

```text
YYYY-MM-DD-short-slug.lang.md
```

Examples:

```text
2026-07-06-problem-governance.en.md
2026-07-06-problem-governance.zh.md
2026-07-04-personal-taste.zh.md
```

### 2. Add front matter

English post:

```yaml
---
title: "From Pattern Matching to Problem Governance"
date: 2026-07-06
lang: en
summary: "A minimal model of independent work capability."
translation: "/posts/2026-07-06-problem-governance.zh/"
type: essay
draft: false
tags:
  - work-capability
  - problem-definition
---
```

Chinese post:

```yaml
---
title: "从模式识别到问题治理：工作能力的最小模型"
date: 2026-07-06
lang: zh
summary: "一个关于独立工作能力的最小模型。"
translation: "/posts/2026-07-06-problem-governance.en/"
type: essay
draft: false
tags:
  - work-capability
  - problem-definition
---
```

Single-language post:

```yaml
---
title: "Personal Taste Is the Moat"
date: 2026-07-04
lang: zh
summary: "为什么 AI 时代品味、判断和问题选择变得更重要。"
type: essay
draft: false
tags:
  - judgment
---
```

If there is no paired translation, omit `translation`.

### 3. Draft control

Use:

```yaml
draft: true
```

for unfinished posts.

Change to:

```yaml
draft: false
```

when ready to publish.

Draft posts are excluded from the homepage, archive, and generated post pages.

## Content Strategy

Not every post needs to be bilingual.

Use three modes:

| Mode | Use When | Rule |
|---|---|---|
| Chinese only | Original thinking, dense conceptual exploration | `lang: zh`, no translation |
| English only | Professional audience, portfolio, LinkedIn | `lang: en`, no translation |
| Bilingual pair | Durable framework or public-facing model | Two independent posts with mutual `translation` links |

Avoid paragraph-by-paragraph bilingual pages. Use separate pages when both versions exist.

## Local Development

Install dependencies:

```bash
npm install
```

Run local server:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Publishing

Push to `main`. GitHub Actions will build and deploy to GitHub Pages.

See `deploy_note.md` for detailed local test and deployment setup.
