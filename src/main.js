// Forma 1
// function agregarAlCarrito(producto) {
//     carrito.push(producto);
// }

// Forma 2
const agregarAlCarrito = (producto) => {
    carrito.push(producto);
};

const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 999, stock:0 },
    { id: 2, titulo: "Remera Puma", precio: 222, stock:0 },
    { id: 3, titulo: "Pantalon Adidas", precio: 111, stock:0},
    { id: 4, titulo: "Airmax", precio: 1982, stock:56 },
    { id: 5, titulo: "Jagguar", precio: 321, stock:0 },
    { id: 6, titulo: "Chancla", precio: 733, stock:12 },
];

// Sumar total del carrito
const totalDelCarrito = productos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
console.log("Total del carrito:" + totalDelCarrito);

// Crear un array apartir de otro
const nuevoListadoProductos = productos.map((producto) => {
    if(producto.stock === 0){
        producto.stock = "No hay stock";
    }
    return producto;
})
console.log(nuevoListadoProductos);

// Codigo para filtrar por precio/caegoria/etc
const productosDeMayorPrecio = productos.filter((producto) => producto.precio > 750 );
console.log(productosDeMayorPrecio);
generarCards(productosDeMayorPrecio);


// Codigo para buscador
const valorDelBucador = "remera Puma"
const productoEncontrado = productos.find(
    (producto) => producto.titulo.toUpperCase().trim() === valorDelBucador.toUpperCase().trim());
// console.log(productoEncontrado);




















function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="card">
            <div class="card-header">
                ${elementoDelArray.titulo}
            </div>
            <div class="card-body">
                <h5 class="card-title">$ ${elementoDelArray.precio}</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary" onclick="agregarAlCarrito()">Go somewhere</a>
            </div>
        </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);

}

generarCards(productosEnOferta);

function mostrarCardsEnElHTML(cards) {
    document.write(cards);
};
// const mostrarCardsEnElHTML = (cards) => document.write(cards);














const arrayProductos = ["Zapa1", "Remera1", "Pantalon3"];


const indiceDelProducto = arrayProductos.indexOf("Remera1");
// console.log(indiceDelProducto);


arrayProductos.splice(indiceDelProducto, 1);
// console.log(arrayProductos);


// SPLICE -> BORRA
// SLICE -> COPIA
// SPLIT -> CREA UN ARRAY SEGUN UN CARACTER