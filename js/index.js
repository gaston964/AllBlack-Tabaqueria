const productosIndex = [
    {id: 1, nombre: "Papel OCB Premium Negro", precio: 150, img: "./resources/Papel-OCB-Premium-Negro.jpg" },
    {id: 2, nombre: "Tabaco Achalay Vainilla", precio: 320, img: "./resources/tabaco-achalay-vainilla.jpg" },
    {id: 3, nombre: "Tabaco Cuatro Leguas", precio: 280, img: "./resources/tabaco-cuatro-leguas-50gr.jpg" },
    {id: 4, nombre: "Filtros Libella Slim Mint", precio: 200, img: "./resources/Filtros-Libella-slim-mint.jpg" },
];
productosIndex.forEach(item => {
    const {img, nombre, precio, id} = item;
    let productos = document.createElement("div");
    productos.className = "card-tabaco col-xs-12 col-md-4 col-lg-4 my-3 mx-2 ";
    productos.innerHTML = `
        <img src="${img}" class="img-fluid rounded-start img__tabaco" alt="...">
        <div class="card-body-tabaco">
            <h4 class="card-title">${nombre}</h4>
            <h5 class="card-title text-center price" >$${precio}</h5>
            <button id ="${id}" class="text agregar-al-carro">Comprar</button>
        </div>
    `
    contenedor.append(productos)
});