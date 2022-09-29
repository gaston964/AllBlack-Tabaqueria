let contenedor = document.getElementById("contenedor");
const productosIndex = [
    {id: 1, nombre: "Papel OCB Premium Negro", precio: 150, img: "./resources/Papel-OCB-Premium-Negro.jpg" },
    {id: 2, nombre: "Tabaco Achalay Vainilla", precio: 320, img: "./resources/tabaco-achalay-vainilla.jpg" },
    {id: 3, nombre: "Tabaco Cuatro Leguas", precio: 280, img: "./resources/tabaco-cuatro-leguas-50gr.jpg" },
    {id: 4, nombre: "Filtros Libella Slim Mint", precio: 200, img: "./resources/Filtros-Libella-slim-mint.jpg" },
]
productosIndex.forEach(item => {
    let producto = document.createElement("div");
    producto.className = "container-card my-3";
    producto.innerHTML = `
        <img src="${item.img}" alt="Avatar" class="image img__index"
            style="width:100%">
        <h4 class="card-titulo text-center">${item.nombre}</h4>
        <h4 class="card-titulo">${item.precio}</h4>
        <div class="middle">
            <button id="${item.id}" class="text">Comprar</button>
        </div>
    `
    contenedor.append(producto)
});



/* localStorage.setItem("nombre", "Gaston");
localStorage.setItem("arreglo", [1, 2, 3]);
localStorage.setItem("valor", "true");
let mensaje = localStorage.getItem("nombre");
console.log(mensaje); */