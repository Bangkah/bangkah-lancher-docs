---
title: Frontend Assets
---

# Frontend Assets

## Tailwind CSS
`tailwind.config.js`:
```js
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: { extend: {} },
  plugins: [],
}
```

`resources/css/app.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Bootstrap
`package.json` devDependencies: `bootstrap`, `@popperjs/core`

`resources/js/app.js`:
```js
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

## Vite
`vite.config.js` uses `laravel-vite-plugin` with inputs `resources/css/app.css` and `resources/js/app.js`.

Dev:
```bash
npm run dev
php artisan serve
```

Prod build:
```bash
npm run build
```
