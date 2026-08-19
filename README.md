<div align = "center">

<h1><a href="https://github.com/pinnheads/personal-website">Personal Portfolio</a></h1>

<a href="https://github.com/pinnheads/Personal-Portfolio-2.0/graphs/contributors">
<img alt="People" src="https://img.shields.io/github/contributors/pinnheads/personal-website?style=flat&color=ffaaf2&label=People"> </a>

<a href="https://github.com/pinnheads/personal-website/stargazers">
<img alt="Stars" src="https://img.shields.io/github/stars/pinnheads/personal-website?style=flat&color=98c379&label=Stars"></a>

<a href="https://github.com/pinnheads/personal-website/network/members">
<img alt="Forks" src="https://img.shields.io/github/forks/pinnheads/personal-website?style=flat&color=66a8e0&label=Forks"> </a>

<a href="https://github.com/pinnheads/personal-website/watchers">
<img alt="Watches" src="https://img.shields.io/github/watchers/pinnheads/personal-website?style=flat&color=f5d08b&label=Watches"> </a>

<a href="https://github.com/pinnheads/personal-website/pulse">
<img alt="Last Updated" src="https://img.shields.io/github/last-commit/pinnheads/personal-website?style=flat&color=e06c75&label="> </a>

<!-- TODO: Add tests and deployment badges here -->

<h3>Portfolio website built w/ Astro, Tailwind and Svelte 🎇🎉</h3>

<figure>
  <img src="src/assets/site-preview.png" width=1000 alt="repo-template in action">
  <br/>
</figure>

</div>

## ✨ Features

-   Uses a JSON file to present data on the frontend
-   Implements SSR with Astro
-   [latex-resume](https://github.com/pinnheads/latex-resume) repo updates the resume file automatically with Github Actions

## Setup

### ⚡ Requirements

-   Node 22.12 or greater (required by Astro 7)

### 🚀 Installation

```bash
git clone https://github.com/pinnheads/personal-website
cd personal-website
npm install
```

### 💻 Usage

```bash
npm run dev
```

## 📋 TODO — needs my attention

Left over from the Astro 7 / Cloudflare adapter 14 upgrade. The adapter dropped
Cloudflare Pages support, so deploys now target Workers.

-   [ ] **Re-point `utsavdeep.com` to the Worker.** The apex domain still routes to the
    old `personal-website` Pages project. Add it as a custom domain on the
    `personal-website` Worker in the Cloudflare dashboard, then retire the Pages project.
-   [ ] **Decide what `preview.utsavdeep.com` points at.** Pages gave a URL per branch for
    free; Workers does not. `deploy_preview.yml` now runs `wrangler versions upload`, which
    produces a version-specific URL instead. Either map the subdomain to a preview alias or
    drop it.
-   [ ] **Fix or delete `Dockerfile`.** It runs `node dist/server/entry.mjs`, but that file
    imports `cloudflare:workers` and cannot run under Node. Broken before this upgrade too.
-   [ ] **Drop the `satteri` override in `package.json`.** Pinned to `0.10.3` because
    `satteri@0.10.4` never published its `darwin-arm64` and `linux-x64-musl` binaries, which
    breaks `npm ci` on every platform. Remove once upstream republishes:
    `npm view @bruits/satteri-linux-x64-musl@<version> version`
-   [ ] **Decide on Tailwind v4.** Still on v3.4 — it works on Astro 7 now that the
    deprecated `@astrojs/tailwind` integration is gone and PostCSS handles it directly.
    v4 means rewriting `tailwind.config.mjs` as a CSS `@theme` block and absorbing v4's
    default changes (border colors, ring width, `space-y`) across every component.
-   [ ] **Re-enable the Playwright steps.** They are commented out in all four workflow
    files. `playwright.config.ts` had its `baseURL` corrected from port 4321 to 3001.
-   [ ] **Fix the tagline.** The header says "Astro, Tailwind and Svelte" but there is no
    Svelte in this project.

## What's Next

Planning to add few more projects and start blogging as well

## Behind The Code

### 🧰 Tooling

-   [Astro](https://astro.build/)
-   [Tailwind](https://tailwindcss.com/)

### 🔍 More Info

-   [latex-resume](https://github.com/pinnheads/latex-resume) —  resume repo
- [v1 portfolio](https://v1.utsavdeep.com) — first version of my  portfolio
- [v2 portfolio](https://v2.utsavdeep.com) — second version of my  portfolio
<hr>

<div align="center">

<strong>⭐ hit the star button if you found this useful ⭐</strong><br>

<a href="https://github.com/pinnheads/repo-template">Source</a>
| <a href="https://twitter.com/utsavdeep01" target="_blank">Twitter </a>
| <a href="https://linkedin.com/in/utsavdeep" target="_blank">LinkedIn </a>
| <a href="https://utsavdeep.com" target="_blank">Portfolio Website </a>
| <a href="https://utsavdeep.com/project" target="_blank">Other Projects </a>

</div>
