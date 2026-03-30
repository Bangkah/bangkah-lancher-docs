---
title: Advanced Usage
---

# Advanced Usage

## Custom Templates
Publish stubs:
```bash
php artisan vendor:publish --tag=bangkah-stubs
```

Edit at `resources/bangkah/stubs/`.

## Extending Services
Example custom service extends `TemplateService` and register via `AppServiceProvider`.

## Programmatic Usage
Use services from container: `TemplateService`, `DockerService`, apply templates and generate Docker files.
