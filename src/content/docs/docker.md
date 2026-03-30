---
title: Docker
---

# Docker Configuration

Generated files:

- `Dockerfile`
- `docker-compose.yml`
- `docker/nginx/default.conf`

Architecture:

Nginx → Laravel (PHP-FPM) → Database on a shared Docker network.

`docker-compose.yml` services include app, mysql/pgsql, and nginx with volumes and ports.

Commands:

```bash
docker compose up -d
docker compose logs -f
docker compose logs -f app
docker compose down
docker compose restart
docker compose up -d --build
docker compose exec app php artisan migrate
docker compose exec app bash
docker compose ps
docker compose down -v
```
