---
title: FAQ
---

# FAQ

## Umum
- Perbedaan dengan Breeze/Jetstream: Bangkah fokus scaffolding infra; bisa dipakai bersamaan.
- Override files: `.env`, `routes`, `bootstrap/app.php` (API). Backup otomatis.
- Support Laravel 11 & 12.
- DB lain (SQLite/MariaDB/SQL Server): manual configure.

## Teknis
- Auto build NPM untuk convenience; bisa skip dengan `--frontend=none`.
- Templates bisa dipublish dan dimodifikasi: `php artisan vendor:publish --tag=bangkah-stubs`.
- Update Bangkah: `composer update bangkah/bangkah`.
- Non-intrusive: kompatibel dengan Livewire, Inertia, Filament, dll.
