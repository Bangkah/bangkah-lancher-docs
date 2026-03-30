---
title: Database
---

# Database Setup

## MySQL
```env
DB_CONNECTION=mysql
DB_HOST=mysql # or 127.0.0.1 without Docker
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```

## PostgreSQL
```env
DB_CONNECTION=pgsql
DB_HOST=pgsql # or 127.0.0.1 without Docker
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```

## Migrations & Seeding
```bash
php artisan migrate
php artisan db:seed --class=UserSeeder
php artisan db:seed
```

Recommended GUI: phpMyAdmin, MySQL Workbench, pgAdmin, DBeaver, TablePlus.
