const PRODUCTO = new Producto('Zapas niky', 900, 'zapatillas');

PRODUCTO.agregarAlCarrito('Totito');
PRODUCTO.titulo;
PRODUCTO.categoria = "aloha";

function Producto(titulo, precio, categoria){
    this.titulo = titulo;
    this.precio = precio;
    this.categoria = categoria;
    this.agregarAlCarrito = function(nombreDelCliente) { 
        console.log("me agregaste al carrito" + nombreDelCliente);
    }
}

// class Producto {
//     static titulo = "Totito";

//     constructor(titulo, precio, categoria){
//         this.titulo = titulo;
//         this.precio = precio;
//         this.categoria = categoria;
//     };

//     agregarAlCarrito(){

//     }
// };

for(let i = 0; i<10; i++){
    console.log(i);
}