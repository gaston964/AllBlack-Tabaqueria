const productos = [
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
