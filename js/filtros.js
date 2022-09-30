let contenedor = document.getElementById("contenedor");
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
    productos.className = "container-card col my-3";
    productos.innerHTML = `
        <img src="${item.img}" alt="Avatar" class="image img__index" style="width:100%">
        <h4 class="card-titulo text-center">${item.nombre} </h4>
        <h4 class="card-titulo">$${item.precio} </h4>
        <div class="middle">
        <button id="${item.id}" class="text">Comprar</button>
        </div>
    `
    contenedor.append(productos);
})



