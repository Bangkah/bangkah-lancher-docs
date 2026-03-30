---
title: Installation
---

# Installation

## Prerequisites

Before installing Bangkah, ensure your system has:

### Required
- **PHP 8.2+** dengan extensions: openssl, pdo, mbstring, tokenizer, xml, ctype, json
- **Composer 2.0+** - [Install Composer](https://getcomposer.org/download/)
- **Node.js 18+ LTS** atau **20+ LTS** - [Install Node.js](https://nodejs.org/)
- **Git 2.x+** - [Install Git](https://git-scm.com/downloads)

### Optional tapi Recommended
- **Docker Desktop** (20.10+)
- **Docker Compose** (v2.0+) - Usually bundled with Docker Desktop

### Verify Installation

```bash
# Check PHP version
php -v
# Output: PHP 8.2.x atau lebih tinggi

# Check Composer
composer --version
# Output: Composer 2.x.x

# Check Node.js
node -v
v20.x.x

# Check NPM
npm -v
9.x.x atau lebih tinggi

# Check Docker (if installed)
docker --version
Docker version 20.10+

docker compose version
Docker Compose v2.0+
```

👉 [See Requirements for full system specs →](/docs/requirements)

---

## Installation Methods

### Method 1: Fresh Laravel Project (Recommended)

Best untuk project baru dari nol.

```bash
# Step 1: Create Laravel project
composer create-project laravel/laravel my-awesome-project

# Step 2: Navigate to project
cd my-awesome-project

# Step 3: Add Bangkah
composer require bangkah/bangkah

# Step 4: Run scaffolding
php artisan bangkah:create
```

**Total waktu:** ~2-3 menit (tergantung internet speed)

### Method 2: Existing Laravel Project

Untuk project Laravel yang sudah ada.

```bash
# Step 1: Navigate to project
cd my-existing-project

# Step 2: Add Bangkah
composer require bangkah/bangkah

# Step 3: Run scaffolding
php artisan bangkah:create
```

⚠️ **Important:** Bangkah akan memodifikasi beberapa file:
- `.env` (database configuration)
- `routes/web.php` atau `routes/api.php`
- `app/Http/Controllers/`
- Database migrations

**Backup otomatis dibuat:**
- `routes/web.php.backup-YYYYMMDDHHMMSS`
- `.env.backup-YYYYMMDDHHMMSS`
- Etc.

Anda bisa revert kapan saja jika perlu.

### Method 3: With Git (For Teams)

```bash
# Clone starter template
git clone https://github.com/bangkah/bangkah-starter my-project
cd my-project

# Install dependencies
composer install
npm install

# Run setup wizard
php artisan bangkah:create
```

---

## Post-Installation Setup

### Step 1: Verify Installation

```bash
# List Bangkah commands
php artisan list bangkah
```

Expected output:
```
Available commands for the "bangkah" namespace:
  bangkah:create  Create a new starter project with Bangkah
  bangkah:reset   Reset to original state (undo scaffolding)
```

### Step 2: Generate App Key

```bash
php artisan key:generate
```

Ini membuat `APP_KEY` unik untuk encryption.

### Step 3: Setup Database

**With Docker:**
```bash
# Start containers
docker compose up -d

# Run migrations
docker compose exec app php artisan migrate

# Seed sample data (optional)
docker compose exec app php artisan db:seed
```

**Without Docker:**
```bash
# Update .env dengan database credentials
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_DATABASE=laravel
# DB_USERNAME=root
# DB_PASSWORD=

# Run migrations
php artisan migrate

# Seed sample data (optional)
php artisan db:seed
```

### Step 4: Build Frontend Assets

```bash
# Install frontend dependencies
npm install

# Build development assets
npm run dev

# OR build production assets
npm run build
```

### Step 5: Start Development

**With Docker:**
```bash
docker compose up -d
# Access http://localhost
```

**Without Docker:**
```bash
# Terminal 1: Start PHP dev server
php artisan serve

# Terminal 2: Watch frontend assets
npm run dev

# Access http://localhost:8000
```

---

## Troubleshooting Installation

### Composer require fails

**Error:** "Could not find package bangkah/bangkah"

**Solution:**
1. Update Composer repositories:
   ```bash
   composer config repositories.bangkah vcs https://github.com/bangkah/bangkah.git
   ```

2. Clear cache dan retry:
   ```bash
   composer clear-cache
   composer require bangkah/bangkah
   ```

3. Atau gunakan path repository (development):
   ```bash
   composer require --repository="{\"type\":\"path\",\"url\":\"/path/to/bangkah\"}" bangkah/bangkah
   ```

### PHP version mismatch

**Error:** "Your PHP version (8.1.0) does not satisfy requirement (>=8.2.0)"

**Solution:**
```bash
# Update PHP ke 8.2+
# Windows: Update via PHP installer atau XAMPP
# macOS: brew upgrade php
# Linux: apt-get install php8.2 atau upgrade binary

# Verify after update
php -v
```

### Permission denied (Linux/macOS)

**Error:** "The "./storage" directory does not have write permissions"

**Solution:**
```bash
# Set correct permissions
chmod -R 775 storage bootstrap/cache

# Or if using Docker:
docker compose exec app chmod -R 775 storage bootstrap/cache
```

### Docker port conflict

**Error:** "Port 80 is already allocated"

**Solution:** Edit `docker-compose.yml` dan ubah port:
```yaml
services:
  nginx:
    ports:
      - "8080:80"  # Use 8080 instead of 80
```

Then access http://localhost:8080

### Database connection failed

**With Docker:**
```bash
# Check if db container is running
docker compose ps

# Check logs
docker compose logs db

# Verify .env settings match docker-compose.yml
```

**Without Docker:**
```bash
# Test database connection
mysql -u [username] -p [database_name]

# Or verify in PHP:
php artisan tinker
>>> DB::connection()->getPdo();
```

### Node/NPM issues

**Error:** "node_modules is empty" atau npm install fails

**Solution:**
```bash
# Clean and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm ci (recommended for CI/CD)
npm ci
```

### Clear Laravel Cache

Jika ada issues setelah install:
```bash
php artisan cache:clear
php artisan config:clear
php artisan view:clear
php artisan route:clear
```

---

## Verify Everything Works

```bash
# 1. Check database connection
php artisan tinker
>>> DB::connection()->getPdo();
>>> // Should return PDO object, no error

# 2. Check migrations ran
php artisan migrate:status

# 3. Check app running
php artisan serve
# Visit http://localhost:8000

# 4. Check frontend assets
node -e "console.log('Node works')"
npm run build
```

Semua OK? **You're ready to go!**

---

## Next Steps

✅ Installation complete!

- 🚀 [Quick Start →](/docs/quick-start)
- 📚 [Features Overview →](/docs/features)
- 🐳 [Docker Guide →](/docs/docker)
- ❓ [FAQ & Help →](/docs/faq)
