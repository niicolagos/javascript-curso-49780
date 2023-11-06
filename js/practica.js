let continuar;

do {
    const num1 = parseFloat(prompt("Ingresa el primer numero: "));
    const num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    const operador = prompt("Ingresa la operacion, + - * o /");

    let resultado;

    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        default:
            alert("operacion no valida");
            resultado = "indefinido";
    }
    alert("El resultado : " + resultado);

    continuar = prompt("quiere hacer otro calculo ? si/no").toLowerCase;

} while (continuar === "si");


//FUNCIONES

function sumar() {
    let num1 = parseFloat(prompt("ingresa el primer numero"));
    let num2 = parseFloat(prompt("ingresa el segundo numero"));
    let sumo = num1 + num2;
    console.log("la suma es " + sumo);
}
sumar();

function pedirNombre() {
    let ingresaNombre = prompt("ingresa numer");
    console.log("ingresa el nombre " + ingresaNombre);
}

let numero = 0

while (numero < 3) {
    pedirNombre();
    numero++
}
pedirNombre();

//PARAMETROS

let nombreIngresado = prompt("ingresar nombre: ");
let apellidoIngresado = prompt("ingresar apellido: ");

function saludar(nombre, apellido) {
    console.log("bienvenido " + nombre + " " + apellido);
}

saludar(nombreIngresado, apellidoIngresado);

//CALCULADORA DE DESCUENTO

let IngreseTotal = prompt("ingresa total: ");
let numDescuento = prompt("ingresa descuento: ");

function calculadoraConDescuento(total, descuento) {
    let desc = (total * descuento) / 100;
    let totalConDes = total - desc;
    return totalConDes;
}

let totalConDescuento = calculadoraConDescuento(IngreseTotal, numDescuento);

console.log("el total con el descuento es : " + totalConDescuento);

//FUNCION FLECHA

const CALCULAR_AREA_RECTANGULO = (base, altura) => base * altura;

const REA = CALCULAR_AREA_RECTANGULO(4, 3);

console.log("el area del rectangulo es: " + AREA);

