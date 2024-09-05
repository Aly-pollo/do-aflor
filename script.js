const productosDestacados = [
  {
    nombre: "Empanada tradicional",
    descripcion: "Carne picada, cebolla, aceituna y huevo.",
    precio: "$2.500",
  },
  {
    nombre: "Empanada de queso",
    descripcion: "Queso de vacas felices del sur de Chile.",
    precio: "$3.000",
  },
  {
    nombre: "Empanada internacional",
    descripcion: "Napolitana: Queso, albahaca, oregano, salame y salsa de tomate.",
    precio: "$2.999",
  },
  {
    nombre: "Empanada de mariscos",
    descripcion: "Queso curado,cebolla caramelizada, camarones del sur de Chile extraídos por pescadores artesanales.",
    precio: "$3.500",
  },
];

const productosAdicionales = [
  {
    nombre: "Alfajores de maicena",
    descripcion: "Relleno de manjar o crema y cubiertos de azúcar flor o chocolate.",
    cantidad: "Caja contiene 12 unidades.",
    precio: "$7.500",
  },
  {
    nombre: "Berlines",
    descripcion: "Rellenos de Manjar, Crema pastelera o Crema especial de la casa.",
    cantidad: "Caja contiene 6 unidades.",
    precio: "$6.000",
  },
  {
    nombre: "Galletitas delicias",
    descripcion: "Galletitas especiales para cocktel y ocasiones especiales.",
    cantidad: "Caja contiene 24 unidades.",
    precio: "$8.999",
  },
  {
    nombre: "Bombones y Malvas",
    descripcion: "Dulces variados rellenos y blandos como malvaviscos de anís.",
    cantidad: "Caja contiene 12 unidades.",
    precio: "$4.500",
  },
];

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const carrito = [];

function agregarProducto(nombre, precio) {
  const producto = new Producto(nombre, precio);
  carrito.push(producto);
  console.log(carrito);
  Swal.fire({
    title: "Confirmación",
    html: "Su producto se agrego con exito",
    confirmButtonText: "Aceptar",
  });
}

function openCarrito() {
  let html = "<ul>";

  carrito.forEach((producto) => {
    html += `<li clase="mostrarProducto"> <strong>${producto.nombre}</strong> <br> precio: <strong>$${producto.precio}</strong></li>`;
    console.log(html);
  });

  html += "</ul>";
  console.log(html);

  Swal.fire({
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: "Imegen de banderas de fechas patrias",
    imageUrl: "assets/img/bandera-fechas-patrias.png",
    title: "Resumen de tu carrito",
    html: html,
    confirmButtonText: "Aceptar",
  });
}
