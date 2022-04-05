
const listaProductos = [
    { id: 1,
      nombre: "Pachata", 
      precio: 600, 
      stock: 10,
      imagen: "https://images.deliveryhero.io/image/pedidosya/products/16480133-07c02758-51e5-48bc-848a-958de32372f0.jpeg?quality=90&width=248"
    },
    { id: 2, 
      nombre: "Lomo", 
      precio:800, 
      stock: 10,
      imagen: "https://www.circuitogastronomico.com/wp-content/uploads/2020/08/pizzar-lomo.jpg"
    },
    { id: 3, 
      nombre: "Hamburguesa", 
      precio: 400, 
      stock: 10,
      imagen: "https://okdiario.com/img/2021/05/28/hamburguesa-3-655x368.jpg"
    },
    { id: 4, 
      nombre: "Papas fritas", 
      precio: 250, 
      stock: 10,
      imagen: "http://c.files.bbci.co.uk/104B4/production/_103104766_gettyimages-957724442.jpg"
    },
    { id: 5, 
      nombre: "Pizza Peperoni", 
      precio: 950, 
      stock: 10,
      imagen: "https://www.saborusa.com/wp-content/uploads/2019/10/Animate-a-disfrutar-una-deliciosa-pizza-de-salchicha-Foto-destacada.png"
    },
    { id: 6, 
      nombre: "Barroluco", 
      precio: 1000, 
      stock: 10,
      imagen: "https://www.diariodecuyo.com.ar/export/sites/diariodecuyo/img/2021/02/05/barros_1.jpg"
    }
  
];


const agregarAlCarrito = (idProducto, cantidadAgregados = 1) =>{

    const indiceEncontradoProducto = listaProductos.findIndex((elemento) => {
        return elemento.id === idProducto;
    });
    const productoAgregado = listaProductos[indiceEncontradoProducto]
    
    const existeElProducto = carrito.findIndex((producto) => producto.id === productoAgregado.id);
    
    existeElProducto ? carrito[existeElProducto].cantidad += cantidadAgregados : carrito.push(productoAgregado);
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
    calcularTotalCarrito();
}

const calcularTotalCarrito = () => {
    const totalCarrito = carrito.reduce((accum, element) => accum + (element.precio * element.cantidad), 0);

    document.getElementById("cart-total").innerHTML = totalCarrito;
}


// Cart.html
const sumarCantidad = (idProducto) => {
    const indiceEncontradoProducto = carrito.findIndex((elemento) => {
        return elemento.id === idProducto;
    });
    carrito[indiceEncontradoProducto].cantidad += 1;
    // re-renderizar el html
}
