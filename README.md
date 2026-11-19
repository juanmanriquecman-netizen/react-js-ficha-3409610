# Tienda tecnológica con React

Catálogo de productos creado con React y Vite para el taller de JavaScript aplicado a React.

## Requisitos

- Node.js y npm
- Git

## Ejecutar el proyecto

Desde la carpeta del proyecto, instala las dependencias y levanta el servidor local:

```bash
npm install
npm run dev
```

Abre en el navegador la dirección local que muestra Vite, normalmente `http://localhost:5173/`.

## Comandos disponibles

```bash
npm run dev    # Inicia el servidor de desarrollo
npm run lint   # Revisa el código con Oxlint
npm run build  # Genera la versión de producción en dist/
```

## Qué incluye

- `practica-js.js`: funciones, funciones flecha, arreglos de objetos y ejercicios con `forEach`, `map`, `filter`, `find`, `some`, `every` y `reduce`.
- `src/data/productos.js`: catálogo de diez productos.
- `src/components/ProductoCard.jsx`: tarjeta reutilizable de producto.
- `src/App.jsx`: catálogo completo, productos disponibles, aviso de agotados y valor del inventario.

La aplicación muestra el estado de inventario y calcula el total usando el precio y el stock de cada producto.
