---
title: Features
---

# Features

## 🚀 Zero Configuration Setup

Interactive CLI yang memandu Anda through setiap step. Tidak ada file config yang rumit atau hidden magic.

**Apa yang didapat:**
- Step-by-step prompts untuk semua pilihan
- Smart defaults untuk developer baru
- Flags untuk automation & CI/CD
- Instant feedback dan validation

```bash
# Interactive mode (recommended)
php artisan bangkah:create

# Non-interactive mode (CI/CD)
php artisan bangkah:create --type=web --frontend=tailwind --docker --yes
```

## 🐳 Docker Ready

Generate lengkap Docker setup siap production:

```
✓ Dockerfile
  - PHP 8.2-FPM optimized
  - Composer dependencies cached
  - Production-grade image
  
✓ docker-compose.yml
  - Multi-service orchestration
  - Development overrides included
  - Health checks configured
  - Named volumes for persistence
  
✓ Nginx Configuration
  - Production optimization
  - FastCGI caching
  - Gzip compression
  - Static file serving
  - Security headers
  
✓ Database & Redis
  - MySQL 8 atau PostgreSQL 16
  - Redis caching setup
  - Adminer untuk database management
  - Automated backups ready
```

**Mulai langsung:**
```bash
docker compose up -d
# Production-ready dalam seconds
```

## 📦 Multiple Project Templates

### Web Template (Default)
Full-stack web application dengan:
- Responsive homepage
- Authentication scaffolding
- User dashboard example
- CSS/JS assets integrated
- Routes & controllers pre-configured

```bash
php artisan bangkah:create --type=web
```

### API Template
REST API dengan modern practices:
- Health check endpoint
- CORS configured
- Sanctum token authentication
- API routes separated
- OpenAPI/Swagger ready

```bash
php artisan bangkah:create --type=api
```

## 🎨 Frontend Flexibility

Pilih frontend setup yang sesuai kebutuhan:

### Tailwind CSS (Recommended)
```
✓ Latest Tailwind CSS 3.x
✓ @tailwindcss/forms for form styling
✓ Dark mode support built-in
✓ Production-optimized output
✓ Excellent documentation
✓ Active community & ecosystem
```

### Bootstrap 5
```
✓ Bootstrap 5 latest
✓ Bem-optimized CSS
✓ jQuery excluded (modern JS only)
✓ Bundled icons via Bootstrap icons
✓ Great for legacy projects
```

### Headless / None
```
✓ API-only setup
✓ No frontend scaffolding
✓ Perfect untuk SPA/mobile apps
✓ Separate frontend repository
```

## 🔐 Authentication Scaffolding

### Laravel Breeze (with Tailwind)
```
✓ Clean, minimal authentication pages
✓ Login & Registration
✓ Password reset with email verification
✓ Email verification feature
✓ Tailwind-styled Forms
✓ CSRF protection built-in
```

### Laravel UI (with Bootstrap)
```
✓ Bootstrap-styled authentication
✓ User dashboard included
✓ Responsive design
✓ Pre-built components
✓ Customizable scaffolding
```

**Apa yang included:**
- User model & migrations
- Routes & controllers
- Login & register pages
- Password reset email templates
- Email verification flow
- Remember me functionality

Semua production-ready tanpa perlu manual setup.

## 💾 Database Options

### MySQL 8
```
✓ Latest MySQL 8.0
✓ InnoDB storage engine
✓ Fast query performance
✓ Wide compatibility
✓ Good for most projects
```

### PostgreSQL 16
```
✓ Advanced features (JSON, Arrays, etc)
✓ Better ACID compliance
✓ Excellent for complex queries
✓ Better scalability
✓ Open source & enterprise-ready
```

**Otomatis configured:**
- `.env` file settings
- Database user & password
- Database name
- Connection parameters
- Adminer container untuk management

## ⚡ Auto Build & Hot Reload

### Development Mode
```bash
npm run dev
# Vite watches dan rebuilds on changes
# Browser auto-refresh dengan HMR
# Sub-second rebuild time
```

### Production Build
```bash
npm run build
# Optimized output
# Asset minification & compression
# Tree-shaking untuk smaller bundles
# Sourcemap generation
```

**Vite configuration:**
- Pre-configured untuk Laravel
- Mix CSS/JS seamlessly
- Asset versioning for cache busting
- Image optimization ready

## 🔧 Customizable & Extensible

Bangkah bukan framework—ini scaffolding. Setelah dijalankan:

```
✓ Semua file standard Laravel
✓ Edit atau extend sesuka hati
✓ Gunakan any Laravel package
✓ Tidak ada vendor lock-in
✓ Zero runtime dependency
```

**Generated files:**
- `app/` - Controllers, Models, etc (fully modifiable)
- `routes/` - Web & API routes
- `resources/` - Views, CSS, JS
- `database/` - Migrations & seeders
- `docker-compose.yml` - Edit untuk kebutuhan custom

## 🎯 Best Practices Built-in

**Code Organization:**
- Clean folder structure
- Separation of concerns
- Consistent naming conventions
- Middleware configuration

**Security:**
- CSRF protection
- Rate limiting setup
- Secure password hashing
- Environment configuration
- SQL injection prevention

**Performance:**
- Docker optimization
- Nginx caching
- Asset optimization
- Database indexing examples
- Queue setup ready

**Deployment:**
- Production-grade configuration
- Health check endpoints
- Logging initialized
- Error handling setup
- Ready for Kubernetes

## 📊 Project Statistics

Bangkah generate project dengan:
```
✓ 1 Dockerfile (optimized)
✓ 1 docker-compose.yml
✓ Full nginx config
✓ 2-3 Example controllers
✓ 2-3 Example routes
✓ Auth views & templates
✓ 1-2 Example migrations
✓ CSS/JS assets configured
✓ .env template
✓ README dengan setup dokumentasi
```

**Total setup time:** 2-3 minutes vs 30-60 minutes manual

## Command Line Interface

```bash
# Main command
php artisan bangkah:create

# Flags
--type=web|api              # Project type
--frontend=tailwind|bootstrap|none
--database=mysql|postgresql
--docker                    # Include Docker setup
--nginx                     # Include Nginx config
--yes                       # Skip confirmations
```

**Example:**
```bash
php artisan bangkah:create \
  --type=web \
  --frontend=tailwind \
  --database=postgresql \
  --docker \
  --yes
```

## What's Next?

- 🚀 [Quick Start →](/docs/quick-start)
- 🐳 [Docker Setup →](/docs/docker)
- 🎨 [Frontend Setup →](/docs/frontend)
- 📚 [Full Documentation →](/docs/usage)
