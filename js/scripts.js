const carrito = [];

const productos = [
    { id: 1, titulo: "Zapa niky", precio: 999, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
    { id: 2, titulo: "Remera Puma", precio: 222, stock:32, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg' },
    { id: 3, titulo: "Pantalon Adidas", precio: 111, stock:0, imagen: 'https://estaticos-cdn.prensaiberica.es/clip/a5ee7a2a-6f63-4ab9-8986-ba83113aca56_16-9-discover-aspect-ratio_default_0.jpg'},
    { id: 4, titulo: "Airmax", precio: 1982, stock: 56 },
];

const agregarAlCarrito = (idProducto) => {
    const productoAgregado = productos.find(producto => producto.id === idProducto);
    carrito.push(productoAgregado);
    document.getElementById("cantidad-prod").innerHTML = carrito.length;
    // productoAgregado.stock--;
    // actualizarStock(productoAgregado)
};


generarCards(productos);

function generarCards(productosAMostrar){
    let acumuladorDeCards = ``;
    productosAMostrar.forEach((elementoDelArray) => {
        acumuladorDeCards += `<div class="col mb-5">
        <div class="card h-100">
            <!-- Sale badge-->
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
                ${(elementoDelArray.stock > 0) ? 'Esta en venta' : 'Out stock'}
            </div>
            <!-- Product image-->
            <img class="card-img-top" src="${elementoDelArray.imagen}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${elementoDelArray.titulo}</h5>
                    <!-- Product price-->
                    <span class="text-muted text-decoration-line-through">$20.00</span>
                    $${elementoDelArray.precio}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent" >
                <div class="text-center">
                    <button 
                        onclick="agregarAlCarrito(${elementoDelArray.id})"
                        class="btn btn-outline-dark mt-auto" href="#">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>`;
    });
    mostrarCardsEnElHTML(acumuladorDeCards);
}

function mostrarCardsEnElHTML(cards) {
    document.getElementById("listado-productos").innerHTML = cards;
};


function buscarProducto() {
    console.log("Hola!")
    const nombreProductoBuscado = document.getElementById("producto-buscado").value.toUpperCase().trim();

    const productosEncontrados = productos.filter((producto) => {
        return producto.titulo.toUpperCase().match(nombreProductoBuscado);
    });

    generarCards(productosEncontrados);
}


//Forma 2 de escuchar un evento
const boton = document.getElementById("boton-buscar");

// boton.addEventListener('click', buscarProducto);

// boton.onclick = buscarProducto;

// $("#boton-buscar").click(() => {})

function tomarValor(event){
    console.log(event.target.value);    
    // const input = document.getElementById("texto-prueba").value;
    // console.log(input);
}