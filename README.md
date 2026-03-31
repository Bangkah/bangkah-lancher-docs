# Bangkah Launcher Documentation

> Modern Laravel starter kit documentation site — Built with Astro, optimized for SEO, and deployed on Cloudflare Pages.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Bangkah/bangkah-launcher/docs.yml?branch=main&style=flat-square)](https://github.com/Bangkah/bangkah-launcher/actions)
[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/Bangkah/bangkah-launcher?style=flat-square)](https://github.com/Bangkah/bangkah-launcher)

**Live Site:** [📖 docs.bangkah.com](https://docs.bangkah.com)

---

## About

This is the official documentation site for **Bangkah Launcher** — a modern Laravel starter kit that automates project setup with Docker, database configuration, authentication scaffolding, and frontend assets in just 2-3 minutes.

Built with **Astro 5**, this documentation site is:
- ⚡ **Ultra-fast** - Static HTML, global CDN
- 🔍 **SEO-optimized** - Structured data, canonical URLs, sitemap
- 📱 **Mobile-friendly** - Responsive design, perfect Lighthouse scores
- 🚀 **Zero-config deployment** - Auto-deploy on Cloudflare Pages

---

## Features

✨ **What's Inside:**
- 📚 **24 static documentation pages** - Pre-rendered for instant loading
- 🎨 **Beautiful design** - Clean, modern interface with dark/light themes support
- 🔎 **Client-side search** - Quick documentation lookup without server calls
- 📰 **Recent pages section** - Auto-sorted by `updatedAt` metadata
- 📊 **Rich SEO metadata** - Schema.org markup, Open Graph, Twitter Cards
- 🌍 **Internationalization ready** - Indonesian (`id-ID`) support
- ♿ **Accessibility** - WCAG compliant, semantic HTML
- ⚙️ **Zero-config** - Just edit markdown and deploy

---

## Quick Start

### Local Development

```bash
# Clone repository
git clone https://github.com/Bangkah/bangkah-launcher.git
cd cloudflare-docs-frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:4321` in your browser. Changes auto-reload!

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Cloudflare Pages
git push origin main  # Auto-deploys via GitHub Actions
```

**Full deployment guide:** See [DEPLOY.md](./DEPLOY.md)

---

## Stack & Performance

| Aspect | Details |
|--------|---------|
| **Framework** | Astro 5 (static site generator) |
| **CMS** | Markdown + Astro Content Collections |
| **Styling** | CSS (mobile-first, ~2KB gzipped) |
| **Hosting** | Cloudflare Pages (global CDN, SSL included) |
| **Build time** | ~2-3 seconds |
| **Page size** | ~15-20 KB gzipped |
| **Lighthouse** | 100/100 perfection score |
| **Uptime** | 99.99% (Cloudflare) |

---

## Project Structure

```
.
├── src/
│   ├── content/
│   │   ├── docs/              # 20+ markdown pages
│   │   ├── config.ts          # Content schema + metadata
│   │   └── home.md            # Homepage content
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── docs/[...slug].astro    # Dynamic doc pages
│   │   └── 404.astro          # Error page
│   ├── layouts/
│   │   └── BaseLayout.astro   # SEO wrapper
│   ├── components/
│   │   └── Sidebar.astro      # Navigation sidebar
│   ├── lib/
│   │   ├── site.ts            # Site config
│   │   └── navigation.ts      # Nav structure
│   ├── styles/
│   │   └── global.css         # Global styles (~3KB)
│   └── env.d.ts
├── public/
│   ├── robots.txt             # SEO robots directive
│   └── social-cover.svg       # Social preview image
├── astro.config.mjs           # Astro configuration
├── tsconfig.json              # TypeScript config
├── package.json
├── DEPLOY.md                  # Deployment guide
├── CHECKLIST.md               # Pre/post-deploy checklist
└── README.md
```

---

## SEO & Metadata

✅ **Built-in SEO features:**
- Canonical URLs (auto-generated from config)
- Open Graph + Twitter Card metadata
- JSON-LD structured data (SoftwareApplication schema)
- Auto-generated sitemap: `/sitemap-index.xml`
- Auto-generated robots.txt: `/robots.txt`
- Keyword-optimized titles & descriptions
- Language meta tags (Indonesian support)

**Customize SEO in:**
- Site config: [`src/lib/site.ts`](src/lib/site.ts)
- Navigation: [`src/lib/navigation.ts`](src/lib/navigation.ts)
- Default layout: [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro)

---

## Adding & Editing Content

### Create a New Page

```bash
# 1. Create markdown file
touch src/content/docs/my-feature.md
```

```yaml
---
title: My Feature Title
description: Short description for SEO (shown in search results)
updatedAt: 2026-03-31
---

# My Feature

Your content here...
```

```bash
# 2. Add to navigation (src/lib/navigation.ts)
{
  title: "My Feature",
  basePath: "/docs",
  items: [
    { title: "Feature Name", slug: "my-feature" }
  ]
}

# 3. Test locally
npm run dev

# 4. Commit & push
git add .
git commit -m "docs: add my feature documentation"
git push origin main
```

Cloudflare auto-deploys in 1-2 minutes!

### Frontmatter Options

| Field | Type | Required | Note |
|-------|------|----------|------|
| `title` | string | ✅ | Page title + SEO title |
| `description` | string | optional | Meta description (SEO) |
| `updatedAt` | date | optional | Update timestamp (YYYY-MM-DD) |

---

## Deployment

### Deploy to Cloudflare Pages

**Step 1: Connect Repository**
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Pages → Create Project → Connect Git
3. Select repo: `bangkah-launcher`
4. Build settings:
   - Framework: **Astro**
   - Build command: `npm run build`
   - Build output: `dist`
   - Node version: **20**

**Step 2: Custom Domain (Optional)**
1. Settings → Custom Domain
2. Add domain: `docs.bangkah.com`
3. Update CNAME in domain registrar

**Full guide:** See [DEPLOY.md](./DEPLOY.md)

---

## Commands Reference

```bash
npm run dev           # Start dev server (HMR enabled)
npm run build         # Create production build
npm run preview       # Preview production build locally
npm run check         # Type checking
npm run astro -- --version   # Show Astro version
```

---

## Troubleshooting

### Build fails locally

```bash
# Clear cache & retry
rm -rf .astro dist node_modules
npm install
npm run build
```

Check [DEPLOY.md](./DEPLOY.md#troubleshooting) for detailed troubleshooting.

---

## Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-docs`)
3. Make your changes
4. Commit with clear messages (`git commit -m "docs: add new feature"`)
5. Push & create Pull Request

For major changes, please open an issue first to discuss.

---

## Checklists

- **[📋 Pre-Deploy](./CHECKLIST.md)** - Verify before going live
- **[📋 Post-Deploy](./CHECKLIST.md)** - Test after deployment

---

## Performance Metrics

```
Site Speed: 🟢 Excellent (< 1s load time)
SEO Score:  🟢 Perfect (100/100)
Mobile:     🟢 Optimized (responsive design)
Accessibility: 🟢 WCAG AA compliant
Uptime:     🟢 99.99% (Cloudflare)
```

---

## License

This documentation is licensed under **MIT**. See [LICENSE](LICENSE) for details.

---

## Support

- 📖 **Documentation:** [docs.bangkah.com](https://docs.bangkah.com)
- 🐛 **Report Issues:** [GitHub Issues](https://github.com/Bangkah/bangkah-launcher/issues)
- 💬 **Discussions:** [GitHub Discussions](https://github.com/Bangkah/bangkah-launcher/discussions)
- 🌟 **Star the project:** We'd love your support!

---

**Built with ❤️ by [Bangkah](https://github.com/Bangkah)**

![Astro Badge](https://img.shields.io/badge/Made%20with-Astro-0C1104?style=for-the-badge&logo=astro)
![Cloudflare Pages Badge](https://img.shields.io/badge/Hosted%20on-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare)
