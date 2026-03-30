---
title: Authentication
---

# Authentication

## Laravel Breeze (Tailwind)
```bash
php artisan bangkah:create --auth --frontend=tailwind --yes
```
Includes: login, register, reset, verify email, profile, Tailwind UI.

Routes: `/login`, `/register`, `/forgot-password`, `/reset-password`, `/verify-email`, `/dashboard`, `/profile`.

## Laravel UI (Bootstrap)
```bash
php artisan bangkah:create --auth --frontend=bootstrap --yes
```
Includes: login, register, reset, remember me, Bootstrap 5, optional Vue.

Routes: `/login`, `/register`, `/password/reset`, `/home`.

## Post-Installation
```bash
php artisan migrate
```

Configure email for password reset:
```env
MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=your_username
MAIL_PASSWORD=your_password
```
