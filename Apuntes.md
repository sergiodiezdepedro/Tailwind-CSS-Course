# Tailwind CSS

## Tailwind con PostCSS

1. Instalar los paquetes:

```bash
npm install -D tailwindcss postcss autoprefixer postcss-cli
```

2. Generar los archivos de configuración de Tailwind y PostCSS. De este modo se crean los dos a la vez:

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

## Utilizando valores arbitrarios (JIT)

[Enlace](https://tailwindcss.com/docs/adding-custom-styles)

When you find yourself really needing something like `top: 117px` to get a background image in just the right spot, use Tailwind’s square bracket notation to generate a class on the fly with any arbitrary value:

```html
<div class="top-[117px]">
  <!-- ... -->
</div>
```

## heroicons

Se pueden utilizar [heroicons](https://heroicons.com/) en un entorno en el que se aplica Tailwind CSS. Estos iconos han sido realizados por los desarrolladores de Tailwind.

Los modos de usarlos se explica en [este sitio](https://github.com/tailwindlabs/heroicons).

## Tailblocks

[Tailblocks](https://tailblocks.cc/) es una página con componentes creados con Tailwind de uso gratuito.

## Recursos

- [Gulp with TailwindCSS Starter Kit](https://github.com/lazymozek/gulp-with-tailwindcss).
