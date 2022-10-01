let contenedor = document.getElementById("contenedor");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let botonCompra = document.getElementById("carritoCompra");
let botonVaciar = document.getElementById("vaciar-carrito");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("carrito")){
        carrito = JSON.parse(localStorage.getItem("carrito"))
        actualizarCarrito();
    }
})
botonVaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito();
    carrito = JSON.parse(localStorage.getItem("carrito"));
    localStorage.clear("carrito");
});
const filtros = [
    { id: 1, nombre: "Filtros Gizeh Slim ", precio: 100, img: "../resources/Filtros-Gizeh-Slim-2.jpg" },
    { id: 2, nombre: "Filtros Libella Extra Slim ", precio: 100, img: "../resources/Filtros-Libella-Extra-Slim.jpg" },
    { id: 3, nombre: "Filtros Libella Regulares", precio: 100, img: "../resources/Filtros-Libella-Regulares.jpg" },
    { id: 4, nombre: "Filtros Libella Slim Mint", precio: 100, img: "../resources/Filtros-Libella-slim-mint.jpg" },
    { id: 5, nombre: "Filtros Libella Organicos", precio: 100, img: "../resources/Filtros-Libella-Slim-Orgánicos.jpg" },
    { id: 6, nombre: "Filtros Libella Slim", precio: 100, img: "../resources/Filtros-Libella-Slim.png" },
    { id: 7, nombre: "Filtros OCB Carton No Blanqueado", precio: 100, img: "../resources/Filtros-OCB-Carton-No-Blanqueado.png" },
    { id: 8, nombre: "Filtros OCB Carton Regular", precio: 100, img: "../resources/Filtros-OCB-Carton-Regular.jpg" },
    { id: 9, nombre: "Filtros OCB Extra Slim", precio: 100, img: "../resources/Filtros-OCB-Extra-Slim.jpg" },
    { id: 10, nombre: "Filtros OCB Regulares", precio: 100, img: "../resources/Filtros-OCB-Regulares.png" },
    { id: 11, nombre: "Filtros OCB Slim Eco", precio: 100, img: "../resources/ocb-filtros-slim-eco.jpg" },
];
filtros.forEach(item => {
    let productos = document.createElement("div");
    productos.className = "container-card col-xs-12 col-md-6 col-lg-4 my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="Avatar" class="image img__index" style="width:100%">
        <h4 class="card-titulo text-center">${item.nombre} </h4>
        <h4 class="card-titulo">$${item.precio} </h4>
        <div class="middle">
        <button id="${item.id}" class="text">Comprar</button>
        </div>
    `
    contenedor.append(productos);
    contenedor.append(productos);
    let boton = document.getElementById(item.id);
    boton.addEventListener("click", () => {
        agregarAlCarrito(item.id);
    })
})
const agregarAlCarrito = (prodId) => {
    const existe = carrito.some( prod => prod.id === prodId)
    if(existe){
        const prod = carrito.map(prod => {
            if(prod.id === prodId){
                prod.cantidad++
                prod.precio += prod.precio
            }
        })
    }else{
        let item = filtros.find((prod) => prod.id === prodId);
        carrito.push({
            id: item.id,
            nombre: item.nombre,
            precio: item.precio,
            cantidad : 1
        });
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


