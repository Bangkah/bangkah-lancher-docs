---
title: Usage | Bangkah Launcher Usage Guide
description: Panduan penggunaan Bangkah Launcher - Interactive mode dengan CLI, non-interactive mode untuk CI/CD, dan customization options untuk Laravel project setup.
updatedAt: 2026-03-31
---

# Usage

## Interactive Mode

```bash
php artisan bangkah:create
```

Flow: pilih template, Docker, Nginx, DB, frontend, auth. Setelah itu Bangkah akan generate file, konfigurasi env, install dependencies, build aset, dan start Docker (opsional).

## Non-Interactive Mode

```bash
php artisan bangkah:create --yes [options]
```

Examples:

- API + Docker:
```bash
php artisan bangkah:create --type=api --docker --nginx --db=postgres --yes
```

- Web tanpa Docker:
```bash
php artisan bangkah:create --type=web --frontend=tailwind --auth --yes
```

- Minimal:
```bash
php artisan bangkah:create --type=web --frontend=none --yes
```

## Command Options

| Option | Values | Default | Description |
| --- | --- | --- | --- |
| `--type` | web, api | web | Template |
| `--docker` | flag | false | Docker config |
| `--nginx` | flag | false | Nginx config |
| `--db` | mysql, postgres | mysql | Database type |
| `--frontend` | tailwind, bootstrap, none | tailwind | Frontend |
| `--auth` | flag | false | Auth scaffolding |
| `--yes` | flag | false | Non-interactive defaults |
