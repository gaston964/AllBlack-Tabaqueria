/* let numeroUno = parseInt(prompt("Ingrese un numero ")) ;
let numeroDos = parseInt(prompt("Ingrese otro")) ;
let suma = (numeroUno + numeroDos);
let salida = "El resultado de la suma de los numeros es " + suma;
alert(salida);

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
let edad = parseInt(prompt("Ingrese su edad"))

alert(`Su nombre es ${nombre} ${apellido} y tiene ${edad} años`)
 */

/* let numero = parseInt(prompt("Ingrese un numero"));
if (numero % 2 == 0 ) {
    alert("Es numero par");
}
else{
    alert("No es par")
}; */

/* let cambio = parseInt(prompt("Ingrese los pesos a cambiar"));
let pesos = cambio / 300;
alert(`Serian ${pesos} dolares`); */

/* let precios = parseFloat(prompt("Ingrese el precio del producto"));
let descuento = precios - (precios * 0.2);
alert ("El precio con el descuento del 20% es " + descuento); */

/* let nombre = prompt("Ingrese un nombre");
let nombreDos = "bart";
if(nombre == nombreDos) {
    alert("Fui yo");
} else {
    alert("No fui yo");
}; */

/* let entrada = prompt("Ingrese una letra");
if (entrada === "y" || entrada === "Y") {
    alert("Correcto");
} else {
    alert("Incorrecto");
}; */

/* let entrada = parseInt(prompt("Ingrese un numero del 1 al 4"));
if (entrada === 1){
    alert("Elegiste a Homero");
} else if (entrada === 2) {
    alert("Elegiste a Marge");
} else if (entrada === 3) {
    alert("Elegiste a Bart");
} else if (entrada === 4) {
    alert("Elegiste a Lisa");
} else {
    alert("Error");
}; */

/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
 */
/* let entrada = parseInt(prompt("Ingrese un presupuesto:"));
if(entrada >= 0 && entrada <= 1000) {
    alert("Presupuesto Bajo");
} else if (entrada > 1000 && entrada <= 3000) {
    alert("Presupuesto Medio");
} else {
    alert("Presupuesto Alto");
}; */

/* 
Solicitar al usuario cuatro (4) productos de almacén. Si todos los elementos fueron cargados, 
realizar una única salida compuesta por el listado de productos. Caso contrario, la salida será “Error: Es necesario cargar todos los productos”.
 */

/* let entrada = alert("Ingrese 4 productos de almacen: ");
let productoUno = prompt("Producto 1");
let productoDos = prompt("Producto 2");
let productoTres = prompt("Producto 3");
let productoCuatro = prompt("Producto 4");
if ((productoUno =! "") && (productoDos =! "") && (productoTres =! "") && (productoCuatro =! "") ) {
    let carrito= "1) " + productoUno + " " +
        "2) " + productoDos + " " +
        "3) " + productoTres + " " +
        "4) " + productoCuatro;
    console.log(carrito);
} else {
    alert("Error: Es necesario cargar todos los productos");
}; */
/* let producto1 = prompt('INGRESAR 1er PRODUCTO');
let producto2 = prompt('INGRESAR 2do PRODUCTO');
let producto3 = prompt('INGRESAR 3er PRODUCTO');
let producto4 = prompt('INGRESAR 4to PRODUCTO');

if ((producto1 != "") && (producto2 != "") && (producto3 != "") && (producto4 != "")) {
    let heladera = "1) " + producto1 + " " +
        "2) " + producto2 + " " +
        "3) " + producto3 + " " +
        "4) " + producto4;
    console.log(heladera);
} else {
    console.log("ERROR: ES NECESARIO CARGAR TODOS LOS PRODUCTOS");
} */
/* let entrada = "Y"
while (entrada === "Y") {
    let numero = parseInt(prompt("Ingrese el numero a sumar:"));
    let numero2 = parseInt(prompt("Ingrese el segundo numero"));
    let suma = numero + numero2;
    alert(`La suma de los numeros ingresados es ${suma}`);
    entrada= prompt("Desea hacer otra suma? Y o N");
}; */

/* const notas = (a, b, c, d) => {
    let resultado = a + b + c + d;
    let promedio = resultado / 4;
    return promedio
};
let entrada = "Y";
while (entrada === "Y") {
    alert("Ingrese la nota de los alumnos:");
    let nota1 = parseInt(prompt("Ingrese la 1er nota: "));
    let nota2 = parseInt(prompt("Ingrese la 2da nota: "));
    let nota3 = parseInt(prompt("Ingrese la 3er nota: "));
    let nota4 = parseInt(prompt("Ingrese la 4ta nota: "));
    console.log(notas(nota1, nota2, nota3, nota4));
    alert(`El promedio de las notas ingresadas es ${notas(nota1, nota2, nota3, nota4)}`);
    entrada = prompt("Desea ingresar las notas de otro almuno? Y o N");
}; */

const notas = (a, b, c, d) => {
    let resultado = a + b + c + d;
    let promedio = resultado / 4;
    return promedio
};
const ingresarNotas = () =>{
    alert("Ingrese las notas del alumno")
    let entrada = "S"
    while (entrada === "S") {
        let nota1 = Number(prompt("Ingrese la 1er nota: "));
        let nota2 = Number(prompt("Ingrese la 2da nota: "));
        let nota3 = Number(prompt("Ingrese la 3er nota: "));
        let nota4 = Number(prompt("Ingrese la 4ta nota: "));
        alert(`El promedio de las notas ingresadas es ${notas(nota1, nota2, nota3, nota4)}`);
        if (notas(nota1, nota2, nota3, nota4) >= 7) {
            alert("El alumno pasa la asignatura");
        } else {
            alert("El alumno reprueba la asignatura");
        };
        entrada = toUpperCase(prompt("Desea ingresar las notas de otro almuno? S o N"));
    }
};
alert("Vamos a sumar las notas y calcular el promedio del alumno.")
ingresarNotas();
