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
const papeles =[
    {id: 1, nombre: "Papel de Celulosa Sativa Club Tradicional", precio: 250, img: "../resources/Papel-Celulosa-Sativa-Club-tradicional.png", descr: "Papel transparente de celulosa. El sobre trae 40 papeles. La caja trae  22 sobres.", cantidad: 1, xmayor: 22},
    {id: 2, nombre: "Papel OCB Blanco", precio: 220, img: "../resources/Papel-OCB-Blanco.png", descr: "Papel 1¼ - 77mm x 44mm. Combustión media, 50 papeles por librito. El display trae 25 libritos.", cantidad: 1, xmayor: 25},
    {id: 3, nombre: "Papel OCB Organico", precio: 292, img: "../resources/Papel-OCB-organico.png", descr: "Papel 77mm x 44mm. No blanqueado - orgánico. Combustión lenta. 50 papeles por librito. El display trae 25 libritos", cantidad: 1, xmayor: 25},
    {id: 4, nombre: "Papel OCB Premium Negro", precio: 250, img: "../resources/Papel-OCB-Premium-Negro.jpg", descr: "OCB Negro Clásico. Papel 1¼  - 77mm x 44mm. Combustión lenta. 50 papeles por librito . El display trae 25 libritos", cantidad: 1, xmayor: 25},
    {id: 5, nombre: "Papel OCB Ultimate", precio: 275, img: "../resources/Papel-OCB-ultimate_1.png", descr: "Papel 1¼  - 77mm x 44mm. Combustión lenta. 50 papeles por librito . El display trae 25 libritos.", cantidad: 1, xmayor: 25}
    ];
console.log(papeles);

papeles.forEach(producto => {
    let item = document.createElement("div");
    item.className = "card col-xs-12 col-md-4 col-lg-4 my-3 mx-2"
    item.innerHTML = `
    <div class="row g-0">
        <div class="col-md-4">
            <img src="${producto.img}" class="img-fluid rounded-start img__index" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <h5 class="card-title">$${producto.precio}</h5>
                <p class="card-text">${producto.descr} </p>
                <div class="">
                <input type="checkbox" name="" id="">x1
                <input type="checkbox" name="" id="">x${producto.xmayor}
                </div>
                <button id = "${producto.id}" class="text">Comprar</button>
            </div>
        </div>
    `;
    contenedor.append(item)
    const boton = document.getElementById(producto.id)
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
            cantidad: item.cantidad
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
