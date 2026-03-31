# Deployment Checklist

Checklist sebelum dan sesudah deploy.

## Pre-Deploy Checklist

- [ ] Semua konten markdown selesai
- [ ] Test lokal: `npm run dev` berjalan tanpa error
- [ ] Build lokal: `npm run build` berhasil
- [ ] Git initialized dan semua files committed
- [ ] GitHub repository dibuat dan public
- [ ] Git remote pointing ke GitHub repo

```bash
# Verifikasi git setup
git remote -v
git status
```

## Deploy Day Checklist

- [ ] GitHub repository up-to-date dengan latest code
- [ ] Cloudflare account siap
- [ ] Custom domain ready (atau gunakan *.pages.dev untuk test dulu)

## Post-Deploy Checklist

- [ ] Pages deployment active di Cloudflare dashboard
- [ ] Preview URL accessible dan loading cepat
- [ ] Semua halaman render dengan benar
- [ ] Sidebar navigation works
- [ ] Links antar halaman berfungsi
- [ ] Home page `/` terbuka normal
- [ ] Mobile responsiveness OK (test di DevTools)

```bash
# Test kecepatannya
curl -I https://docs.bangkah.com
# Lihat Cache-Control headers
```

- [ ] Robots.txt accessible: `https://docs.bangkah.com/robots.txt`
- [ ] Sitemap accessible: `https://docs.bangkah.com/sitemap-index.xml`
- [ ] Social preview works (test di Facebook sharing preview)
- [ ] DNS propagated sepenuhnya (jika custom domain)

```bash
# Verify DNS
dig docs.bangkah.com
# Lihat CNAME atau A record pointing ke Cloudflare
```

## Monitoring After Deploy

- [ ] Check Cloudflare Analytics untuk traffic
- [ ] Monitor deployment logs untuk errors
- [ ] Set up Slack/email notifications untuk deployment failures (optional)

## Update Docs Workflow

1. Edit markdown di `src/content/docs/`
2. `npm run build` local untuk test
3. `git add . && git commit -m "..."` dan `git push`
4. Cloudflare auto-builds dan deploys (~1-2 min)
5. Test live site

## Rollback jika ada issue

Jika deployment bermasalah:

```bash
# Revert commit lokally
git revert HEAD
git push origin main

# Atau rollback di Cloudflare dashboard
# Settings → Deployments → Promote previous deployment
```
