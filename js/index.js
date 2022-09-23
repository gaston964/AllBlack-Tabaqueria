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

let contenedor = document.getElementById("contenedor");
const papeles = [
    { id: 1, nombre: "Papel de Celulosa Sativa Club Tradicional", precio: 350, img: "../resources/Papel-Celulosa-Sativa-Club-tradicional.png" },
    { id: 2, nombre: "Papel OCB Blanco", precio: 220, img: "../resources/Papel-OCB-Blanco.png" },
    { id: 3, nombre: "Papel OCB Organico", precio: 290, img: "../resources/Papel-OCB-organico.png" },
    { id: 4, nombre: "Papel OCB Premium Negro", precio: 250, img: "../resources/Papel-OCB-Premium-Negro.jpg" },
    { id: 5, nombre: "Papel OCB Ultimate", precio: 275, img: "../resources/Papel-OCB-ultimate_1.png" },
];
papeles.forEach(producto => {
    let item = document.createElement("div");
    item.className = "div"
    item.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <h3>Producto: ${producto.nombre}</h3>
        <h4>$${producto.precio}</h4>
    `;
    contenedor.append(item)
});

/* function respuesta(nombre){
    console.log("Click", nombre);
}
let boton = document.getElementById("boton");
  // boton.onclick = respuesta;
boton.addEventListener("click", () => respuesta("gaston")); */