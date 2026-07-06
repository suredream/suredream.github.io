# Deploy Note

Target remote repository:

```text
https://github.com/suredream/suredream.github.io
```

Target site:

```text
https://suredream.github.io
```

This repo uses Astro and GitHub Actions to deploy to GitHub Pages.

## 1. Local Test

### Install Node.js

Use Node.js 22 or later.

Check:

```bash
node --version
npm --version
```

### Install dependencies

```bash
npm install
```

### Run local dev server

```bash
npm run dev
```

Open the local URL printed by Astro, usually:

```text
http://localhost:4321
```

Check:

```text
/                 Homepage
/archive/         Archive
/about/           About
/resume/          Resume
/posts/.../       Post pages
```

### Production build

```bash
npm run build
```

This runs:

```text
astro check && astro build
```

The output is generated into:

```text
dist/
```

### Preview production build

```bash
npm run preview
```

## 2. GitHub Pages Setup

In the GitHub repository:

```text
https://github.com/suredream/suredream.github.io
```

Go to:

```text
Settings → Pages
```

Set:

```text
Source: GitHub Actions
```

Because this is a user site repository named `suredream.github.io`, Astro config should use:

```js
site: 'https://suredream.github.io'
```

and no custom `base` path is needed.

## 3. GitHub Actions Workflow

The workflow file is:

```text
.github/workflows/deploy.yml
```

It runs on every push to `main`:

```text
push to main → npm ci → npm run build → upload dist → deploy pages
```

## 4. First Push

From local repo:

```bash
git init
git add .
git commit -m "site: initialize astro blog"
git branch -M main
git remote add origin https://github.com/suredream/suredream.github.io.git
git push -u origin main
```

If the remote already has content, clone it first instead of running `git init`:

```bash
git clone https://github.com/suredream/suredream.github.io.git
cd suredream.github.io
# copy these files into the cloned repo
git add .
git commit -m "site: initialize astro blog"
git push
```

## 5. Normal Publishing Flow

For new posts:

```text
1. Add or edit Markdown in src/content/posts/
2. Make sure draft: false
3. Commit
4. Push to main
5. GitHub Actions publishes automatically
```

Example:

```bash
git add src/content/posts/2026-07-06-problem-governance.en.md
git commit -m "post: add problem governance essay en"
git push
```

## 6. Troubleshooting

### Build fails because of front matter

Check required fields:

```yaml
title: "..."
date: 2026-07-06
lang: en # or zh
summary: "..."
draft: false
```

### Post does not appear

Check:

```yaml
draft: false
```

Draft posts are intentionally hidden.

### Translation link is broken

Make sure `translation` matches the generated URL:

```yaml
translation: "/posts/2026-07-06-problem-governance.zh/"
```

### GitHub Pages does not update

Check:

```text
GitHub → Actions → latest workflow run
GitHub → Settings → Pages → Source: GitHub Actions
```

### Custom domain later

If adding a custom domain later, update:

```js
site: 'https://your-domain.com'
```

in `astro.config.mjs`, and configure GitHub Pages custom domain settings.
