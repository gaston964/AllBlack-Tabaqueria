let contenedor = document.getElementById("contenedor");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let botonCompra = document.getElementById("carritoCompra");
let botonVaciar = document.getElementById("vaciar-carrito");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let carrito = [];
document.addEventListener("DOMContentLoaded", () => {
        localStorage.getItem("carrito") ? carrito = JSON.parse(localStorage.getItem("carrito")): [];
        actualizarCarrito();
})
botonVaciar.addEventListener("click", () =>{
    carrito.length = 0;
    actualizarCarrito();
    carrito = JSON.parse(localStorage.getItem("carrito"));
    localStorage.clear("carrito");
    Swal.fire(
        'Vaciaste el carrito',
        '',
        'success'
    )
});
const filtros = [
    { id: 1, nombre: "Filtros Gizeh Slim ", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Gizeh-Slim-2.jpg", descr: "Filtros slim (6mm). La bolsita trae 120 filtros. La caja trae 20 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 20 },
    { id: 2, nombre: "Filtros Libella Extra Slim ", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Libella-Extra-Slim.jpg", descr: "Filtros extra slim.5.3mm x 15mm. Bolsa con cierre hermético. La bolsa contiene 200 filtros. La caja trae 26 bolsitas", cantidad: 1, xmayor: 26 },
    { id: 3, nombre: "Filtros Libella Regulares", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Libella-Regulares.jpg", descr: "Filtros slim (8mm). La bolsita trae 200 filtros. La caja trae 15 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 15 },
    { id: 4, nombre: "Filtros Libella Slim Mint", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Libella-slim-mint.jpg", descr: "Filtros slim mentolados. La bolsita trae 200 filtros. La caja trae 20 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 20 },
    { id: 5, nombre: "Filtros Libella Organicos", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Libella-Slim-Orgánicos.jpg", descr: "Filtros slim (6mm). Orgánicos. La bolsita trae 200 filtros. La caja trae 20 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 20 },
    { id: 6, nombre: "Filtros Libella Slim", precio: 100, preciomayor: 1250, img: "../resources/Filtros-Libella-Slim.png", descr: "Filtros slim (6mm). La bolsita trae 200 filtros. La caja trae 20 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 20 },
    { id: 7, nombre: "Filtros OCB Carton No Blanqueado", precio: 100, preciomayor: 1250, img: "../resources/Filtros-OCB-Carton-No-Blanqueado.png", descr: "Filtros de carton. No blanqueado. Cada librito trae 50 filtro. La caja trae 25 libritos", cantidad: 1, xmayor: 25 },
    { id: 8, nombre: "Filtros OCB Carton Regular", precio: 100, preciomayor: 1250, img: "../resources/Filtros-OCB-Carton-Regular.jpg", descr: "Filtros de carton . Cada librito trae 50 filtros. La caja trae 25 libritos", cantidad: 1, xmayor: 25 },
    { id: 9, nombre: "Filtros OCB Extra Slim", precio: 100, preciomayor: 1250, img: "../resources/Filtros-OCB-Extra-Slim.jpg", descr: "Filtros extra slim (5mm). La bolsita trae 150 filtros. La caja trae 10 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 10 },
    { id: 10, nombre: "Filtros OCB Regulares", precio: 100, preciomayor: 1250, img: "../resources/Filtros-OCB-Regulares.png", descr: "Filtros regulares (8mm). La bolsita trae 100 filtros. La caja trae 30 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 30 },
    { id: 11, nombre: "Filtros OCB Slim Eco", precio: 100, preciomayor: 1250, img: "../resources/ocb-filtros-slim-eco.jpg", descr: "Filtros slim (6mm). Orgánicos. La bolsita trae 120 filtros. La caja trae 10 bolsitas. Bolsitas con cierre hermético", cantidad: 1, xmayor: 10 },
];
filtros.forEach(item => {
    const {img, nombre, precio, descr, xmayor, id} = item;
    let productos = document.createElement("div");
    productos.className = "card col-xs-12 col-md-4 col-lg-3 my-3 mx-2";
    productos.innerHTML = `
    <div class="row g-0">
    <div class="col-md-4">
        <img src="${img}" class="img-fluid rounded-start img__index" alt="...">
    </div>
    <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${nombre}</h5>
            <h5 class="card-title" >$${precio}</h5>
            <p class="card-text">${descr} </p>
            <form class="">
            <input type="radio" name="tipo" value="almenor" checked id="">x1
            <input type="radio" name="tipo" value="pormayor" >x${xmayor}
            </form>
            <button id = "${id}" class="text">Comprar</button>
        </div>
    </div>
    `
    contenedor.append(productos);
    const boton = document.getElementById(id)
    boton.addEventListener("click", () => {
        agregarAlCarrito(id);
        Toastify({
            text: `${nombre}`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            }).showToast();
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
            cantidad : item.cantidad
        });
    }
    actualizarCarrito();
}
const eliminarDelCarrito = (prodId) => {
    console.log((prodId));
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
}
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((prod) => {
        const {nombre, precio, cantidad, id} = prod;
        let div = document.createElement("div");
        div.className = "";
        div.innerHTML = `
        <p>${nombre}</p>
        <p>$${precio}</p>
        <p>Cantidad: <span id="cantidad">${cantidad}</span></p>
        <button onclick = "eliminarDelCarrito(${id})" id="${id}" class="btn btn-outline-danger">Elminar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
        </svg></button>
        `
        contenedorCarrito.append(div);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        let boton = document.getElementById(id);
        boton.addEventListener("click", () =>{
            Toastify({
                text: `${nombre}`,
                duration: 3000,
                style: {
                    background: "rgb(136, 12, 12)",
                },
                }).showToast();
        })
    });
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.precio, 0);
}


