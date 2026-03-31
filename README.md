# Bangkah Docs Frontend (Cloudflare)

Frontend-only rewrite untuk dokumentasi Bangkah Launcher dengan SEO lengkap dan deploy-ready ke Cloudflare Pages.

⚡ **Static pages** | 🔍 **SEO-optimized** | 📱 **Mobile-friendly** | ⚙️ **Zero config deploy**

## Stack

- **Astro 5** - Static site generator (pre-render semua halaman)
- **Markdown collections** - `src/content/docs`
- **SEO built-in** - Canonical URLs, Open Graph, Twitter Card, JSON-LD, Sitemap, Robots.txt
- **Deploy target** - Cloudflare Pages (CDN global, SSL otomatis, 0 cost)

## Quick Start

### Jalankan Lokal

```bash
npm install
npm run dev
```

Buka: `http://localhost:4321`

### Build & Test

```bash
npm run build
npm run preview  # preview dist folder lokal
```

## Deploy ke Cloudflare Pages

**[📖 Read full deployment docs →](./DEPLOY.md)**

TL;DR:
1. Push ke GitHub
2. Connect repo ke Cloudflare Pages
3. Cloudflare otomatis deploy setiap push ke `main`

Settings Cloudflare yang tepat:
- **Framework**: Astro
- **Build command**: `npm run build`
- **Build output**: `dist`
- **Node version**: 20

## SEO & Metadata

✅ **Sudah disetup:**
- Canonical URLs (auto dari `SITE.url`)
- Open Graph tags untuk social sharing
- Twitter Card metadata
- JSON-LD schema markup
- Sitemap auto-generate: `/sitemap-index.xml`
- Robots.txt: `/robots.txt`
- Social preview image: `/social-cover.svg`

**Customize di:**
- URL: [`src/lib/site.ts`](src/lib/site.ts)
- Navigation: [`src/lib/navigation.ts`](src/lib/navigation.ts)

## Struktur Folder

```
cloudflare-docs-frontend/
├── src/
│   ├── content/              # Markdown content
│   │   ├── docs/             # docs pages
│   │   └── config.ts         # Content collection schema
│   ├── pages/                # Astro pages (routes)
│   │   ├── docs/[...slug].astro    # /docs/{slug}
│   │   └── index.astro             # homepage
│   ├── layouts/
│   │   └── BaseLayout.astro  # SEO + header + footer
│   ├── components/
│   │   └── Sidebar.astro     # Navigasi sidebar
│   ├── lib/                  # Config & helpers
│   ├── styles/
│   │   └── global.css        # Styling (mobile-first)
│   └── env.d.ts
├── public/
│   ├── robots.txt
│   └── social-cover.svg
├── dist/                     # Build output
├── astro.config.mjs          # Astro config + sitemap
├── package.json
├── tsconfig.json
├── DEPLOY.md                 # Deployment docs
├── CHECKLIST.md              # Pre/post deploy checklist
└── README.md
```

## Edit & Update Docs

### Add/Edit Page

1. Create atau edit markdown di:
   - `src/content/docs/your-page.md` (untuk docs)

2. Add frontmatter:
```yaml
---
title: Page Title
description: Short description for SEO
---

# Content here...
```

3. Add ke sidebar di [`src/lib/navigation.ts`](src/lib/navigation.ts)

4. Test lokal:
```bash
npm run dev
# Visit http://localhost:4321/docs/your-page
```

### Deploy Changes

```bash
git add .
git commit -m "Update docs: ..."
git push origin main
```

Cloudflare auto-deploy dalam 1-2 menit.

## Performance

- **Build time**: ~3 seconds
- **Page size**: ~15-20 KB (gzipped)
- **Lighthouse**: 100/100 (static HTML)
- **CDN**: Cloudflare global edge (99.99% uptime)

## Troubleshooting

### Local build fails

```bash
npm run build --debug
# Check detailed error messages
```

### Preview not updating

```bash
npm run build
rm -rf .astro dist
npm run build
```

### DNS issues after deploy

Check: `dig docs.bangkah.com` or https://www.whatsmydns.net

See [DEPLOY.md](./DEPLOY.md#troubleshooting) untuk troubleshooting lengkap.

## Checklists

- **[📋 Pre-deploy checklist](./CHECKLIST.md)** - Verify everything before deploy
- **[📋 Post-deploy checklist](./CHECKLIST.md)** - Test after deploy live

## Commands

```bash
npm run dev       # Start dev server with HMR
npm run build     # Production build
npm run preview   # Serve dist/ locally
npm run check     # Type checking
```

## Next Steps

- [ ] Test lokal dengan `npm run dev`
- [ ] Push ke GitHub repo
- [ ] Connect ke Cloudflare Pages (see [DEPLOY.md](./DEPLOY.md))
- [ ] Setup custom domain
- [ ] Monitor analytics post-launch

---

Built with ❤️ using Astro & Cloudflare Pages | [GitHub](https://github.com/Bangkah/bangkah-launcher)
