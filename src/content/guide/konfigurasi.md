---
title: Konfigurasi
---

# Konfigurasi

Panduan menyesuaikan Bangkah Launcher sesuai kebutuhan.

## File Konfigurasi

Jika launcher menggunakan file konfigurasi (mis: `bangkah.config.json`), contoh minimal:

```json
{
  "projectRoot": "/path/ke/proyek",
  "scripts": {
    "serve": "php artisan serve",
    "build": "npm run build"
  },
  "env": {
    "APP_ENV": "local",
    "APP_DEBUG": true
  }
}
```

## Variabel Lingkungan

Anda dapat mengatur variabel lingkungan global (Linux/macOS):

```bash
export APP_ENV=local
export APP_DEBUG=1
```

## Integrasi Laravel

- Jalankan `php artisan` perintah umum.
- Hubungkan dengan Vite: `npm run dev`.

Sesuaikan dengan fitur aktual di repositori Bangkah Launcher.
