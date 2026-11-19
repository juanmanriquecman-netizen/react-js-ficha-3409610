// Taller: JavaScript aplicado a React
// Ejecuta este archivo desde la terminal con: node practica-js.js

// RETO 1: funciones, parámetros y return
function calcularTotal(precio, cantidad) {
  const total = precio * cantidad;
  return total;
}

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return 'No se puede dividir entre cero';
  }
  return a / b;
}

function calcularPromedio(nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
}

console.log('RETO 1: funciones');
console.log('Total:', calcularTotal(50000, 3));
console.log('Suma:', sumar(8, 4));
console.log('Resta:', restar(8, 4));
console.log('Multiplicación:', multiplicar(8, 4));
console.log('División:', dividir(8, 4));
console.log('Promedio:', calcularPromedio(4, 5, 3));

// console.log() muestra un valor en la terminal; return devuelve un valor
// desde una función para que el programa pueda guardarlo o utilizarlo.

// RETO 2: funciones flecha
const aplicarIva = precio => precio * 1.19;
const cuadrado = numero => numero * numero;
const esMayorEdad = edad => edad >= 18;
const nombreCompleto = (nombre, apellido) => `${nombre} ${apellido}`;

console.log('\nRETO 2: funciones flecha');
console.log('Precio con IVA:', aplicarIva(50000));
console.log('Cuadrado:', cuadrado(5));
console.log('¿Es mayor de edad?:', esMayorEdad(20));
console.log('Nombre completo:', nombreCompleto('Ana', 'Pérez'));

// RETO 3: arreglo de objetos (10 productos, dos agotados y varias categorías)
const productos = [
  { id: 1, nombre: 'Mouse', precio: 50000, categoria: 'Periféricos', stock: 5 },
  { id: 2, nombre: 'Teclado', precio: 90000, categoria: 'Periféricos', stock: 0 },
  { id: 3, nombre: 'Monitor', precio: 650000, categoria: 'Pantallas', stock: 3 },
  { id: 4, nombre: 'Audífonos', precio: 120000, categoria: 'Audio', stock: 8 },
  { id: 5, nombre: 'Webcam', precio: 180000, categoria: 'Accesorios', stock: 0 },
  { id: 6, nombre: 'Portátil', precio: 2800000, categoria: 'Computadores', stock: 2 },
  { id: 7, nombre: 'Parlante', precio: 150000, categoria: 'Audio', stock: 4 },
  { id: 8, nombre: 'Memoria USB', precio: 35000, categoria: 'Almacenamiento', stock: 12 },
  { id: 9, nombre: 'Disco SSD', precio: 320000, categoria: 'Almacenamiento', stock: 6 },
  { id: 10, nombre: 'Base refrigerante', precio: 85000, categoria: 'Accesorios', stock: 3 },
];

// RETO 4: forEach() recorre y muestra cada producto sin crear otro arreglo.
console.log('\nRETO 4: forEach()');
productos.forEach((producto, indice) => {
  console.log(
    `${indice + 1}. ${producto.nombre} - $${producto.precio} - stock: ${producto.stock}`,
  );
});

// RETO 5: map() crea arreglos nuevos a partir de los productos.
const nombres = productos.map(producto => producto.nombre);
const preciosConIva = productos.map(producto => producto.precio * 1.19);
const nombresMayuscula = productos.map(producto => producto.nombre.toUpperCase());
const resumenProductos = productos.map(
  producto => `${producto.nombre} cuesta $${producto.precio}`,
);

console.log('\nRETO 5: map()');
console.log('Nombres:', nombres);
console.log('Precios con IVA:', preciosConIva);
console.log('Nombres en mayúscula:', nombresMayuscula);
console.log('Resúmenes:', resumenProductos);

// RETO 6: filter() selecciona varios elementos y find() busca uno.
const disponibles = productos.filter(producto => producto.stock > 0);
const productosCaros = productos.filter(producto => producto.precio > 100000);
const rangoPrecios = productos.filter(
  producto => producto.precio >= 50000 && producto.precio <= 200000,
);
const productosDeAudio = productos.filter(
  producto => producto.categoria === 'Audio',
);
const producto3 = productos.find(producto => producto.id === 3);
const producto5 = productos.find(producto => producto.id === 5);

function buscarProducto(id) {
  return productos.find(producto => producto.id === id);
}

console.log('\nRETO 6: filter() y find()');
console.log('Disponibles:', disponibles.map(producto => producto.nombre));
console.log('Precio mayor a $100.000:', productosCaros.map(producto => producto.nombre));
console.log('Entre $50.000 y $200.000:', rangoPrecios.map(producto => producto.nombre));
console.log('Categoría Audio:', productosDeAudio.map(producto => producto.nombre));
console.log('Producto con id 3:', producto3);
console.log('Producto con id 5:', producto5);
console.log('buscarProducto(7):', buscarProducto(7));

// RETO 7: some(), every() y reduce().
const hayAgotados = productos.some(producto => producto.stock === 0);
const hayPrecioMayorMillon = productos.some(producto => producto.precio > 1000000);
const preciosValidos = productos.every(producto => producto.precio > 0);
const stocksValidos = productos.every(producto => producto.stock >= 0);
const valorInventario = productos.reduce(
  (total, producto) => total + producto.precio * producto.stock,
  0,
);

console.log('\nRETO 7: some(), every() y reduce()');
console.log('¿Existe algún producto agotado?:', hayAgotados);
console.log('¿Hay producto de más de $1.000.000?:', hayPrecioMayorMillon);
console.log('¿Todos tienen precio mayor que cero?:', preciosValidos);
console.log('¿Todos tienen stock válido?:', stocksValidos);
console.log('Valor total del inventario:', valorInventario);

// RETO 8: template literal, desestructuración, spread y operador ternario.
const { nombre, precio, stock } = productos[0];
const productoActualizado = {
  ...productos[0],
  precio: productos[0].precio + 5000,
  stock: productos[0].stock + 2,
};
const estado = productoActualizado.stock > 0 ? 'Disponible' : 'Agotado';

console.log('\nRETO 8: JavaScript moderno');
console.log(`El producto ${nombre} cuesta $${precio} y tiene stock ${stock}.`);
console.log('Copia actualizada:', productoActualizado);
console.log(`El producto ${productoActualizado.nombre} ahora cuesta $${productoActualizado.precio} y está ${estado}.`);
console.log('Producto original sin modificar:', productos[0]);
