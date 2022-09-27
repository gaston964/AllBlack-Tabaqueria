/* const productos = [
    { nombre: "Tabaco Achalay", precio: 250 },
    { nombre: "Tabaco Achalay Vainilla", precio: 320 },
    { nombre: "Tabaco Achalay Menta", precio: 280 },
    { nombre: "Tabaco Las Hojas", precio: 250 },
    { nombre: "Tabaco Las Hojas Natural", precio: 350 },
]
const compra = []
alert("Bienvenidos a Tabaqueria AllBlack! \n Nuestros productos son:")
let mensaje = ""
productos.forEach(item => {
    mensaje += `${item.nombre} ${item.precio}, \n`;
});
alert(mensaje);
let salida = "S"
while (salida === "S") {
    alert("Que producto desea agregar al carrito?")
    let opcion = Number(prompt("1- Tabaco Achalay \n 2- Tabaco Achalay Vainilla \n 3- Tabaco Achalay Menta \n 4- Tabaco Las Hojas \n 5- Tabaco Las Hojas Natural"))
    switch (opcion) {
        case 1:
            compra.push(productos[0])
            break;
        case 2:
            compra.push(productos[1])
            break;
        case 3:
            compra.push(productos[2])
            break;
        case 4:
            compra.push(productos[3])
            break;
        case 5:
            compra.push(productos[4])
            break;
        default:
            alert("Debe ingresar un producto válido.")
            break;
    }
    salida = prompt("Desea agregar otro producto al carrito? S o N").toUpperCase();
}
alert(`Usted agrego ${compra.length} productos a su carrito.`)
const total = compra.reduce((acc, item) => acc + item.precio, 0)
alert(`El total de los productos agregados es ${total} pesos`)
 */

/* let contenedor = document.getElementById("contenedor");
const papeles = [
    { id: 1, nombre: "Papel de Celulosa Sativa Club Tradicional", precio: 350, img: "../resources/Papel-Celulosa-Sativa-Club-tradicional.png" },
    { id: 2, nombre: "Papel OCB Blanco", precio: 220, img: "../resources/Papel-OCB-Blanco.png" },
    { id: 3, nombre: "Papel OCB Organico", precio: 290, img: "../resources/Papel-OCB-organico.png" },
    { id: 4, nombre: "Papel OCB Premium Negro", precio: 250, img: "../resources/Papel-OCB-Premium-Negro.jpg" },
    { id: 5, nombre: "Papel OCB Ultimate", precio: 275, img: "../resources/Papel-OCB-ultimate_1.png" },
]; */
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
    item.className = "col-xs-12  my-3"
    item.innerHTML = `
        <div class="container-card">
            <img src="${producto.img}" alt="Avatar" class="image img__index" style="width:100%">
            <h4 class="card-titulo">${producto.nombre}</h4>
            <h4 class="card-titulo">$${producto.precio}</h4>
            <div class="middle">
                <button id = "${producto.id}" class="text">Comprar</button>
            </div>
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
    let productoBuscado = papeles.find(producto => producto.nombre.includes(entrada))
    console.log(productoBuscado);
    inputBuscar.value = ""
}

botonBuscar.addEventListener("click", () => buscarProducto(inputBuscar.value))