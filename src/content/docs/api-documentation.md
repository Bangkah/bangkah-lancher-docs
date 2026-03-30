---
title: API Documentation
description: Referensi endpoint API yang dihasilkan Bangkah Launcher.
---

# API Documentation

Dokumentasi endpoint default yang biasa digunakan setelah scaffold API.

## Health Endpoint

```bash
curl -X GET http://localhost/api/health -H "Accept: application/json"
```

Contoh response:

```json
{
  "status": "ok",
  "message": "API is running",
  "app": "MyApp",
  "environment": "local",
  "laravel": "12.42.0",
  "php": "8.4.1",
  "time": "2025-12-15T10:30:00.000000Z"
}
```

## Format Response

Success:

```json
{
  "success": true,
  "data": {},
  "message": "Request berhasil"
}
```

Error:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Input tidak valid"
  }
}
```

## HTTP Status Umum

- `200` request berhasil
- `201` resource dibuat
- `400` bad request
- `401` unauthorized
- `403` forbidden
- `404` not found
- `422` validasi gagal
- `429` rate limit
- `500` internal server error

## Rate Limiting

Contoh penerapan throttling route:

```php
Route::middleware('throttle:60,1')->group(function () {
    Route::get('/health', [HealthController::class, 'index']);
});
```

## Bearer Token

Untuk endpoint terlindungi, gunakan header berikut:

```bash
curl -X GET http://localhost/api/me \
  -H "Authorization: Bearer <token>" \
  -H "Accept: application/json"
```
