---
title: Deployment
---

# Deployment

## Pre-Deployment Checklist
- `APP_ENV=production`, `APP_DEBUG=false`
- Production `APP_KEY`
- Configure DB, MAIL, QUEUE, SESSION
- `APP_URL` production domain
- SSL/HTTPS and logging

## Laravel Optimization
```bash
composer install --optimize-autoloader --no-dev
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache
npm run build
php artisan migrate --force
php artisan storage:link
```

## Docker Production
Use `restart: unless-stopped`, env set to production, and multi-stage Dockerfile for optimized images.

## SSL
Certbot (Nginx) or Cloudflare.
