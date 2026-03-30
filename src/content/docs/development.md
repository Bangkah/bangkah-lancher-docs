---
title: Development
---

# Development

## Local Development
```bash
git clone https://github.com/Bangkah/bangkah-launcher.git
cd bangkah-launcher
composer install
./vendor/bin/phpunit
```

## Testing Changes Against Laravel
```bash
composer create-project laravel/laravel test-project
cd test-project
composer config repositories.bangkah path ../bangkah
composer require bangkah/bangkah @dev
php artisan bangkah:create
```

## Structure
`src/` (commands/services/provider), `stubs/` (web/api/nginx), `tests/`.

## Code Style
PSR-12:
```bash
./vendor/bin/phpcs
./vendor/bin/phpcbf
```
