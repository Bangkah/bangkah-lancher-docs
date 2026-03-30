---
title: Examples
---

# Examples

## Full-Stack Web Application

```bash
php artisan bangkah:create \
  --type=web \
  --docker \
  --nginx \
  --db=mysql \
  --frontend=tailwind \
  --auth \
  --yes
```

Generated:

- Dockerfile, docker-compose.yml, Nginx conf
- Controller, view, routes
- `.env` MySQL, Breeze, Tailwind

Next:
```bash
docker compose up -d
docker compose exec app php artisan migrate
open http://localhost
```

## RESTful API with PostgreSQL

```bash
php artisan bangkah:create \
  --type=api \
  --docker \
  --nginx \
  --db=postgres \
  --frontend=none \
  --yes
```

Health endpoint:
```bash
curl http://localhost/api/health
```

## Traditional Bootstrap Web App

```bash
php artisan bangkah:create \
  --type=web \
  --frontend=bootstrap \
  --auth \
  --db=mysql \
  --yes
```

Next:
```bash
php artisan migrate
php artisan serve
```

## Minimal Setup

```bash
php artisan bangkah:create --type=web --frontend=none --yes
```
