# SPEC: Still Becoming Astro Blog

## 1. Goal

Build a minimal, durable, text-first personal blog for publishing essays and notes on:

- AI-assisted work
- problem definition
- work capability
- knowledge assets
- ML systems
- judgment and learning in the AI age

The site should be calm, serious, readable, and low maintenance.

The target repository is:

```text
https://github.com/suredream/suredream.github.io
```

The target deployment flow is:

```text
edit Markdown → push → GitHub Actions build → GitHub Pages publish
```

## 2. Site Name

Recommended name:

```text
Still Becoming
```

Subtitle:

```text
Essays on AI, work, judgment, and knowledge assets.
```

Rationale:

- keeps the self-correcting spirit of “Still Wrong”;
- avoids the negative first impression of “wrong”;
- fits a long-term archive of evolving models;
- sounds serious enough for professional readers.

## 3. Design Direction

Reference style: a minimal personal archive similar to `wangcong.org`.

Core design principles:

- text first;
- no thumbnails;
- no cards;
- no newsletter popup;
- no heavy branding;
- narrow reading column;
- archive-first navigation;
- stable, long-lived visual language.

## 4. Navigation

Initial navigation:

```text
Archive | About | Resume
```

No tags, categories, projects, or notes pages in v1.

Possible future navigation:

```text
Archive | Notes | Projects | About | Resume
```

## 5. Pages

### 5.1 Home

Home displays recent essays.

Each item includes:

- date;
- language;
- title;
- summary.

No images, no cards, no tags.

### 5.2 Archive

Archive must be dense and scannable.

Structure:

```text
Archive

2026
  Jul 06  From Pattern Matching to Problem Governance      en · linked
  Jul 06  从模式识别到问题治理：工作能力的最小模型          zh · linked
  Jul 04  Personal Taste Is the Moat                       zh

2025
  ...
```

Posts are grouped by year and sorted by descending date.

### 5.3 Post Page

Post pages include:

- title;
- date;
- language;
- optional updated date;
- optional translation link;
- body;
- back-to-archive link.

If `translation` exists, display language switch. If not, hide it.

### 5.4 About

About explains:

- who the author is;
- what the blog is for;
- what topics it covers;
- contact links.

### 5.5 Resume

Resume can be a static page, a PDF link, or both.

## 6. Content Model

All posts live under:

```text
src/content/posts/
```

Front matter schema:

```yaml
title: string
date: date
lang: en | zh
summary: string
translation?: string
type: essay | note | project
draft: boolean
updated?: date
tags: string[]
```

## 7. Bilingual Rules

The blog is not necessarily bilingual article-by-article.

Supported content modes:

1. Chinese only
2. English only
3. Bilingual pair

For bilingual content, create two independent pages and link them through `translation`.

Do not use paragraph-by-paragraph bilingual formatting.

## 8. URL Rules

Dynamic post URLs are generated from Astro content slugs:

```text
/posts/2026-07-06-problem-governance.en/
/posts/2026-07-06-problem-governance.zh/
```

This keeps language visible in the URL and allows single-language posts without special routing.

## 9. Style Requirements

Visual style:

- warm off-white background;
- dark text;
- muted metadata;
- narrow column around 760px;
- simple underline links;
- system font stack for English and Chinese.

CSS variables:

```css
--bg: #fbfaf7;
--text: #1f1f1f;
--muted: #77736b;
--line: #ded7cc;
--accent: #8a5a2b;
```

## 10. Publishing Workflow

Author workflow:

```text
1. Edit or add Markdown under src/content/posts/
2. Fill front matter
3. Set draft: false
4. Push to main
5. GitHub Actions builds and deploys
6. Site updates on GitHub Pages
```

## 11. Quality Gate for Posts

Before publishing, check:

```text
[ ] title is clear
[ ] summary has information density
[ ] date is correct
[ ] lang is correct
[ ] draft is false
[ ] translation link is correct if present
[ ] article has one central question or model
[ ] article includes diagnosis or operation, not just opinion
[ ] archive displays correctly
[ ] mobile layout is readable
```

## 12. Success Criteria

The blog succeeds if:

- writing and publishing are low friction;
- archive remains easy to scan;
- posts feel durable and reusable;
- the site strengthens professional credibility;
- the design does not become a maintenance burden.

The blog fails if:

- visual design becomes the project;
- every post requires bilingual overhead;
- archive becomes cluttered;
- posts become generic AI commentary;
- the site is hard to update from GitHub.
