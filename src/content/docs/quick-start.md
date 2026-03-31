---
title: Quick Start
updatedAt: 2026-03-30
---

# Quick Start

Setup Laravel project dengan Bangkah Launcher dalam 3 menit.

## Prerequisites

Sebelum mulai, pastikan sudah install:
- PHP 8.2+ dengan Composer 2.0+
- Node.js 18+ atau 20+ LTS
- Docker & Docker Compose v2+ (opsional tapi recommended)
- Git

👉 [Cek Requirements lengkap →](/docs/requirements)

## Step 1: Create Fresh Laravel Project

```bash
composer create-project laravel/laravel my-awesome-project
cd my-awesome-project
```

## Step 2: Install Bangkah

```bash
composer require bangkah/bangkah
```

## Step 3: Run Scaffolding CLI

```bash
php artisan bangkah:create
```

Ini akan trigger interactive CLI yang memandu Anda memilih:

### Template Type
```
? Select template (web/api):
  web  →  Web app dengan auth & frontend
  api  →  REST API (Laravel Sanctum)
```

### Frontend Framework
```
? Select frontend framework:
  tailwind    →  Tailwind CSS (recommended)
  bootstrap   →  Bootstrap 5
  none        →  Headless / API-only
```

### Database
```
? Select database:
  mysql       →  MySQL 8 (default)
  postgresql  →  PostgreSQL 16
```

### Docker
```
? Generate Docker setup? (yes/no)
  yes  →  Dockerfile, docker-compose, Nginx config
  no   →  Skip Docker (kamu configure manual)
```

## Step 4: Start Development

### Using Docker (Recommended)

```bash
# Build dan jalankan containers
docker compose up -d

# Check status
docker compose ps

# View logs
docker compose logs -f app

# Access the app
# http://localhost
```

### Without Docker

```bash
# Terminal 1: Start PHP dev server
php artisan serve

# Terminal 2: Build frontend assets
npm run dev

# Access: http://localhost:8000
```

## Step 5: Login to App

Default account dibuat otomatis:

```
Email:    admin@example.com
Password: password
```

⚠️ **Change this immediately di production!** Edit `database/seeders/DatabaseSeeder.php`

## Next Steps

### Create First Controller

```bash
php artisan make:controller PostController
```

### Generate Model + Migration

```bash
php artisan make:model Post -m
```

### Run Migrations

```bash
php artisan migrate
```

### Build Frontend

```bash
# Development with hot reload
npm run dev

# Production build
npm run build
```

## Useful Docker Commands

```bash
# Enter app container
docker compose exec app bash

# Run artisan commands
docker compose exec app php artisan tinker
docker compose exec app php artisan migrate
docker compose exec app php artisan db:seed

# View database from container
docker compose exec db mysql -u root -p

# Stop all containers
docker compose down

# Restart
docker compose restart
```

## Troubleshooting

### Port 80 already in use

Edit `docker-compose.yml` dan ubah port:
```yaml
services:
  nginx:
    ports:
      - "8080:80"  # Use 8080 instead
```

### Permission denied on storage

```bash
docker compose exec app chown -R www-data:www-data storage bootstrap/cache
```

### Database connection error

Cek `.env` configuration:
```bash
DB_CONNECTION=mysql
DB_HOST=db          # docker service name
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=laravel
DB_PASSWORD=secret
```

### Composer install slow

Gunakan flag `--no-dev` untuk production:
```bash
composer install --no-dev
```

## Automation / CI-CD

Jika ingin auto-scaffold tanpa interactive prompts:

```bash
php artisan bangkah:create \
  --type=web \
  --frontend=tailwind \
  --database=mysql \
  --docker \
  --yes
```

Perfect untuk:
- Docker images / containerized CI
- GitHub Actions workflows
- Terraform / Infrastructure as Code
- Team setup scripts

## What's Next?

✅ Project setup complete!

- 📖 [Learn more features →](/docs/features)
- 🐳 [Docker deep dive →](/docs/docker)
- 🚀 [Deploy to production →](/docs/deployment)
- ❓ [FAQ & Troubleshooting →](/docs/faq)
