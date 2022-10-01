let contenedor = document.getElementById("contenedor");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let botonCompra = document.getElementById("carritoCompra");
let botonVaciar = document.getElementById("vaciar-carrito");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let botonBuscar = document.getElementById("botonBuscar");
let inputBuscar = document.getElementById("inputBuscar");
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito();
    }
});
botonVaciar.addEventListener("click", () => {
    carrito.length = 0;
    actualizarCarrito();
    carrito = JSON.parse(localStorage.getItem("carrito"));
    localStorage.clear("carrito");
})
class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
    }
}
const papeles = []
papeles.push(new Producto(1, "Papel de Celulosa Sativa Club Tradicional", 250, "../resources/Papel-Celulosa-Sativa-Club-tradicional.png"))
papeles.push(new Producto(2, "Papel OCB Blanco", 220, "../resources/Papel-OCB-Blanco.png"))
papeles.push(new Producto(3, "Papel OCB Organico", 292, "../resources/Papel-OCB-organico.png"))
papeles.push(new Producto(4, "Papel OCB Premium Negro", 250, "../resources/Papel-OCB-Premium-Negro.jpg"))
papeles.push(new Producto(5, "Papel OCB Ultimate", 275, "../resources/Papel-OCB-ultimate_1.png"))
console.log(papeles);

papeles.forEach(producto => {
    let item = document.createElement("div");
    item.className = "container-card col-xs-12 col-md-6 col-lg-4  my-3"
    item.innerHTML = `
            <img src="${producto.img}" alt="Avatar" class="image img__index" style="width:100%">
            <h4 class="card-titulo text-center">${producto.nombre}</h4>
            <h4 class="card-titulo">$${producto.precio}</h4>
            <div class="middle">
                <button id = "${producto.id}" class="text">Comprar</button>
            </div>
    `;
    contenedor.append(item)
    const boton = document.getElementById(producto.id)
    /*     boton.addEventListener("click", () => comprarProd(producto)) */
    boton.addEventListener("click", () => {
        agregarAlCarrito(producto.id);
    })
});
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some(prod => prod.id === prodId);
    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
                prod.precio += prod.precio
            }
        })
    } else {
        let item = papeles.find((prod) => prod.id === prodId);
        carrito.push({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad: 1
        })
    }
    actualizarCarrito();
}
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        let div = document.createElement("div");
        div.className = "";
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${prod.id})" class="btn btn-outline-danger">Elminar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
        `
        contenedorCarrito.append(div);
        localStorage.setItem("carrito", JSON.stringify(carrito));
    });
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}












const buscarProducto = (entrada) => {
    console.log(entrada);
    let productoBuscado = papeles.find((producto) => producto.nombre.toUpperCase().includes(entrada));
    console.log(productoBuscado);
    inputBuscar.value = '';
};

botonBuscar.addEventListener('click', () => buscarProducto(inputBuscar.value.toUpperCase()));
/* const comprarProd = (producto) => {
    let productoExiste = carrito.find(item => item.id === producto.id)
    if (productoExiste === undefined) {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,

            cantidad: 1
        })
    } else {
        productoExiste.precio += productoExiste.precio;
        productoExiste.cantidad = productoExiste.cantidad + 1;
    }
};
botonCompra.addEventListener("click", () => console.log(carrito)) */