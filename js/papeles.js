let contenedor = document.getElementById("contenedor");
let carritoCompra = document.getElementById("carritoCompra")
let botonBuscar = document.getElementById("botonBuscar")
let inputBuscar = document.getElementById("inputBuscar")
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
    item.className = "container-card col-xs-12  my-3"
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
    boton.addEventListener("click", () => comprarProd(producto))
});
const carrito = [];
const comprarProd = (producto) => {
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
carritoCompra.addEventListener("click", () => console.log(carrito))

const buscarProducto = (entrada) => {
	console.log(entrada);
	let productoBuscado = papeles.find((producto) => producto.nombre.toUpperCase().includes(entrada));
	console.log(productoBuscado);
	inputBuscar.value = '';
};

botonBuscar.addEventListener('click', () => buscarProducto(inputBuscar.value.toUpperCase()));