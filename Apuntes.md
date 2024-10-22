# Tailwind CSS

## Tailwind con PostCSS

1. Instalar los paquetes:

```bash
npm install -D tailwindcss postcss autoprefixer postcss-cli
```

2. Generar los archivos de configuración de Tailwind y PostCSS. De este modo se crean a la vez los dos:

```bash
npx tailwindcss init -p
```

3. Ejemplo de configuración en `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Ejemplos de scripts de `node` para desarrollo y build en `package.json`:

```json
  "scripts": {
    "dev": "postcss ./dev/tailwind-input.css -o ./build/css/styles.css --watch",
    "build": "postcss ./dev/tailwind-input.css -o ./build/css/styles.css"
  }
```

## Breakpoints

Tailwind es **mobile first**.

| Breakpoint prefix | Minimun width | CSS                                |
| ----------------- | ------------- | ---------------------------------- |
| sm                | 640px         | @media (min-width: 640px) { ... }  |
| md                | 768px         | @media (min-width: 768px) { ... }  |
| lg                | 1024px        | @media (min-width: 1024px) { ... } |
| xl                | 1280px        | @media (min-width: 1280px) { ... } |
| 2xl               | 1536px        | @media (min-width: 1536px) { ... } |

## Recursos

- [Gulp with TailwindCSS Starter Kit](https://github.com/lazymozek/gulp-with-tailwindcss).
