let contenedor = document.getElementById("contenedor");
let contenedorCarrito = document.getElementById("contenedorCarrito");
let botonCompra = document.getElementById("carritoCompra");
let botonVaciar = document.getElementById("vaciar-carrito");
let contadorCarrito = document.getElementById("contador-carrito");
let precioTotal = document.getElementById("precio-total");
let carrito = [];
const productosIndex = [
    {id: 1, nombre: "Papel OCB Premium Negro", precio: 150, img: "./resources/Papel-OCB-Premium-Negro.jpg" },
    {id: 2, nombre: "Tabaco Achalay Vainilla", precio: 320, img: "./resources/tabaco-achalay-vainilla.jpg" },
    {id: 3, nombre: "Tabaco Cuatro Leguas", precio: 280, img: "./resources/tabaco-cuatro-leguas-50gr.jpg" },
    {id: 4, nombre: "Filtros Libella Slim Mint", precio: 200, img: "./resources/Filtros-Libella-slim-mint.jpg" },
]
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
productosIndex.forEach(item => {
    const {img, nombre, precio, id} = item;
    let productos = document.createElement("div");
    productos.className = "card-tabaco col-xs-12 col-md-4 col-lg-4 my-3 mx-2 ";
    productos.innerHTML = `
        <img src="${img}" class="img-fluid rounded-start img__tabaco" alt="...">
        <div class="card-body-tabaco">
            <h5 class="card-title">${nombre}</h5>
            <h5 class="card-title text-center" >$${precio}</h5>
            <button id ="${id}" class="text">Comprar</button>
        </div>
    `
    contenedor.append(productos)
    let boton = document.getElementById(item.id);
    boton.addEventListener("click", () => {
        agregarAlCarrito(item.id);
        Toastify({
            text: `${item.nombre}`,
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            }).showToast();
    })
});
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
        let item = productosIndex.find((prod) => prod.id === prodId);
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

