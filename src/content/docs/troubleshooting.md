---
title: Troubleshooting
---

# Troubleshooting

## Command Not Found
```bash
php artisan clear-compiled
php artisan cache:clear
composer dump-autoload
composer require bangkah/bangkah
```

## Docker Ports In Use
```bash
lsof -i :80
sudo systemctl stop apache2
# or change port mapping
```

## Permissions (Docker)
```bash
docker compose exec app chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache
docker compose exec app chmod -R 775 /var/www/storage /var/www/bootstrap/cache
```

## NPM Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## DB Connection Failed
With Docker set `DB_HOST=mysql` (or `pgsql`); local ensure DB running and credentials correct.

## API Routes 404
Enable API routes in `bootstrap/app.php` with `api: __DIR__.'/../routes/api.php'`.

## Assets 404
Build with `npm run build` or run dev server and ensure `@vite` directive in Blade.
