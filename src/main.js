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
    { id: 1, titulo: "Zapa niky", precio: 999 },
    { id: 2, titulo: "Remera Puma", precio: 222 },
    { id: 3, titulo: "Pantalon Adidas", precio: 111 },
    { id: 4, titulo: "Airmax", precio: 1982 },
    { id: 5, titulo: "Jagguar", precio: 321 },
    { id: 6, titulo: "Chancla", precio: 733 },
];

const productosEnOferta = [
    { id: 1, titulo: "Zapa niky", precio: 1 },
    { id: 2, titulo: "Remera Puma", precio: 1 },
    { id: 3, titulo: "Pantalon Adidas", precio: 1 },
];

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach(elementoDelArray => {
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
    return acumuladorDeCards;
}

const cardsGeneradas = generarCards(productosEnOferta);
document.write(cardsGeneradas);













const arrayProductos = ["Zapa1", "Remera1", "Pantalon3"];


const indiceDelProducto = arrayProductos.indexOf("Remera1");
// console.log(indiceDelProducto);


arrayProductos.splice(indiceDelProducto, 1);
// console.log(arrayProductos);


// SPLICE -> BORRA
// SLICE -> COPIA
// SPLIT -> CREA UN ARRAY SEGUN UN CARACTER