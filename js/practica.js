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

let numero = 0;

while (numero < 3) {
    pedirNombre();
    numero++;
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

//COTIZADOR DE IVA, METODOS Y OPERACIONES CON OBJETOS

const IVA = 1.21;

function Producto(nombre, precio, stock) {
    (this.nombre = nombre),
        (this.precio = precio),
        (this.stock = stock),
        (this.precioIVA = function () {
            let precioFinal = this.precio * IVA;
            return "$" + precioFinal;
        });
}
let producto1 = new Producto("pepas", 39, 2);

console.log(producto1.precioIva());

//CLASES

class Persona {
    constructor(nombre, edad) {
        (this.nombre = nombre), (this.edad = edad);
    }

    saludar() {
        console.log(
            "Hola gente mi nombre es" + this.nombre + "y tengo " + this.edad
        );
    }
}

const PERSONA1 = new Persona("Juan", 45);

console.log(PERSONA1);

PERSONA1.saludar();

//EJEMPLO CLASES

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }

    sumaIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        this.vendido = true;
    }
}

const PRODUCTO1 = new Producto("arroz", 125);
const PRODUCTO2 = new Producto("fideos", 50);
PRODUCTO1.sumaIva();
PRODUCTO2.sumaIva();
PRODUCTO1.vender();

// EJEMPLO ARRAYS-arreglos-matriz

let productos = ["royal", "Dog Chow", "pedigree", "sabrocitos"];
let numeros = [1, 2, 3, 4, 5, 6];
let boolean = [true, false, true];

//acceder de manera general
console.log(productos);

//bucle for para que muestre cada dato del array, es por conteo ya que sabemos la cantidad de datos que tiene el array

for (let i = 0; i < 4; i++) {
    console.log(productos[i]);
}
//acceder dato por dato

console.log(productos[2]);

//constructor de objetos de array

const POKEMONES = [
    {
        pokemon: "pikachu",
        numeroPokemon: 1,
    },
    {
        pokemon: "charmander",
        numeroPokemon: 2,
    },
];

// metodo lenght aplicado a un array

let estudiantes = ["juan", "soledad", "paulina", "nicolas"];

let cantidadEstudiantes = estudiantes.length;
//metodo lenght cuenta la cantidad de elementos que tiene el array
console.log(
    "la cantidad de estudiantes que posee la clase es : " + cantidadEstudiantes
);

//ej cadenas de texto

const texto = "hola, chicos";
const longitudTexto = texto.length;
console.log(longitudTexto);

//push : agregamos uno o mas elementos al final de un array

let numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

// metodo pop: elimina el ultimo elemento que posee un array

let perritos = ["caniche", "pequines", "dogo", "boxer"];

let sacoPerrito = perrito.pop;

console.log(perritos);
console.log("elemento eliminado" + sacoPerrito);

//metodo shift , elimina el primer elemento dentro de un array

let fila = ["primero", "segundo", "tercero"];

let ElementoEliminado = fola.shift();
console.log("elemento eliminado" + ElementoEliminado);
console.log(fila);

//metodo splice elimina mas de un elemento

let colores = ["rojo", "verde", "azul", "amarillo"];

colores.splice(1, 1, "violeta");
//si yo dejo solo un valor (1) por ej, va a mantener los elementos que se mantienen por debajo de el
//el primer valor(1) es el que va a eliminar
//el segundo valor es el que va a reemplazaar
//el tercer valor es el elemento que lo va a reemplazar
console.log(colores);

//join , conveirte los elementos del array en una cadena de texto y los une utilizando un separador especifico

let palabras = ["hola", "mundo", "chicos"];

let oracion = palabras.join(" ");

console.log(oracion);

//metodo split, nos convierte una cadena de caracteres en un array

const CADENA = "chicos estan aburridos ?";
//si yo no pongo espacio entre las comillas en split, los va a contar por letra, por eso es necesario el espacio
//con los numeros hay que colocar un guion -
let array = CADENA.split(" ");
console.log(array);

//metodo concat, combinamos dos o mas arrays en uno nuevo

let number = [1, 2];

let nombre = numero.concat(["pedro", "pablo"]);

console.log(nombre);

//slice : nos genera un subconjunto de ellemtnso de un array que ya existe

let original = [1, 2, 3, 4, 5];

let copia = original.slice(3, 5);

console.log(copia);

//indexOf : nos permite obtener el indice de un elemento en un array.
//si no existe nos retorna -1

let frutas = ["manzana", "platano", "naranja", "kiwi"];

let indice = frutas.indexOf("manzana");

console.log("el indice de la fruta es: " + indice);

//metodo includes similar a indexOf, me permite saber si un elemento que recibo por parametro existe o no dentro de un array
//retorna valor booleano

let estaLaFruta = frutas.includes("mandarina");
console.log(estaLaFruta);

//reverse , invierte el orden de la array

frutas.reverse();
console.log(frutas);

let frutasForOf = ["manzana", "frutilla", "pera"];

for (const frutaForOf of frutasForOf) {
    console.log(frutaForOf);
}
//for.. of, estructura de control de flujo
// permite recorrer un array ejecutando unbloque de codigo por cada elemento del objeto

//VARIABLE DE PRECIO, EJE FOR OF

const CARRITO = [
    {
        producto: "camiseta",
        precio: 10,
    },
    {
        producto: "zapatilla",
        precio: 20,
    },
    {
        producto: "chaleco",
        precio: 30,
    },
];
let precioTotal = 0;

for (const item of CARRITO) {
    precioTotal += item.precio;
}
console.log("el precio total del carrito es: $" + precioTotal);

//RETORNAR FUNSIONES

function mayorQue(n) {
    return (num) => num > n;
}

const MAYOR_QUE_DIEZ = mayorQue(10);

console.log(MAYOR_QUE_DIEZ(9));

//EJEMPLO SUMAR Y RESTAR

function asignarOperacion(operacion) {
    if (operacion === "sumar") {
        return function (numero1, numero2) {
            return numero1 + numero2;
        };
    } else if (operacion == "resta") {
        return (numero1, numero2) => numero1 - numero2;
    }
}

let sumar = asignarOperacion("sumar");

console.log(sumar(4, 6));

let restar = asignarOperacion("restar");

console.log(restar(6, 3));

//recibir funciones por parametros
// arr(array) fn (funcion)
function porCadaUno(arr, fn) {
    for (const elemento of arr) {
        fn(elemento);
    }
}

const NUMEROS = [0, 1, 2, 3, 4, 5];

porCadaUno(NUMEROS, console.log);

function crearSumador(numero) {
    // Esta es la función interna que será retornada
    function sumar(valor) {
        return numero + valor;
    }

    return sumar; // Retornamos la función interna
}

// Ejemplo de uso:
const sumar5 = crearSumador(5); // Creamos una función que suma 5 a su argumento
const resultado = sumar5(10); // Llamamos a la función y le pasamos 10 como argumento
console.log(resultado); // Esto imprimirá 15, ya que 5 + 10 = 15

//forEach nos permite iterar de manera rapida un array
const NUMERITOS = [1, 2, 3, 4, 5];

NUMERITOS.forEach(function (numero) {
    const RESULTADO = numero * 2;
    console.log(RESULTADO);
});

//otro ejemplo forEach

const ESTUDIANTES = [
    {
        nombre: "ana",
        edad: 20,
    },
    {
        nombre: "pepe",
        edad: 30,
    },
    {
        nombre: "gina",
        edad: 10,
    },
];

function saludarEstudiante(estudiantes) {
    console.log(`hola ${estudiantes.nombre}, edad ${estudiantes.edad}`);
}

ESTUDIANTES.forEach(saludarEstudiante);

//ejemplo productos

const PRODUCTOS = [
    {
        articulo: "laptop",
        precio: 1000,
    },
    {
        articulo: "mother",
        precio: 500,
    },
    {
        articulo: "mouse",
        precio: 20,
    },
    {
        articulo: "teclado",
        precio: 30,
    },
];

//funcion aplicar descuento

function aplicarDescuento(producto) {
    const DESCUENTO = 0.1;
    const PRECIO_CON_DESCUENTO = producto.precio * (1 - DESCUENTO);
    console.log(
        `producto ${producto.articulo}, precio con descuento: ${PRECIO_CON_DESCUENTO}`
    );
}

PRODUCTOS.forEach(aplicarDescuento);

//FIND
//nos dice que va a encontrar el primer elemento del array que cumpla con la condicion
//retorna un valor solo, el primero que cumpla con la condicion
const USUARIO_MAYOR_EDAD = ESTUDIANTES.find(function (estudiante) {
    return estudiante.edad > 25;
});
console.log(USUARIO_MAYOR_EDAD);

//FILTER se utiliza para crear arrays nuevos con los elementos que cumplan una condicion

const PRECIO_MINIMO_USUARIO = parseFloat(prompt("ingrese el precio minimo"));

if (isNaN(PRECIO_MINIMO_USUARIO)) {
    console.log("por favor ingresa un numero");
} else {
    const PRODUCTO_FILTRADO = PRODUCTOS.filter(function (producto) {
        return producto.precio >= PRECIO_MINIMO_USUARIO;
    });
    console.log("productos que cumplan con la condicion", PRODUCTO_FILTRADO);
}

//SOME verifica si al menos un elemento cumple del array con alguna condicion
//devuelve booleano true or false

const NUMERITO = [1, 10, 2, 3, 4];

let hayNumeroMayoa10 = NUMERITO.some(function (numero) {
    return numero > 10;
});

console.log(hayNumeroMayoa10);

//MAPS
//agarra un array ya hecho y cambia sus elementos originales por otros segun la funcion que se le envie.
//usamos array de productos hecho mas arriba

let nombreEnMayus = PRODUCTOS.map(function (producto) {
    return producto.articulo.toUpperCase();
});
console.log(nombreEnMayus);

let porcentajeAumentado = 0.5;

let precioAumentado = PRODUCTOS.map(function (producto) {
    return {
        articulo: producto.articulo,
        precio: producto.precio * (1 + porcentajeAumentado),
    };
});

console.log(precioAumentado);

//reduce => metodo de array que nos sirve para reducir los datos de un array a unico.

// variable = array.reduce(fuction(acumulador,arrayrecoriddo){
// return acumulador + arrayrecorrido
// }, valorinicialacumulador);

//ejemplo

let nummeros = [1, 2, 3, 4, 5];

let suma = nummeros.reduce(function (acumulador, nummeros) {
    return acumulador + nummeros;
}, 0); //el 0 significa desde donde va a comenzar a contar el acumulador
//osea desde el indice 0
//si se pone un 1 o otro numero, se le suma a toda la suma
console.log(suma);

//sort => nos va a servir par ordenar los elementos de un array
//no crea un nuevo array, trabaja sobre el original y lo ordena

//variable sort = array.sort(fucntion(comparableA, comparableB){)
// return comparableA - comparableB;
//}

const CARRITTO = [
    { producto: "camiseta", precio: 20 },
    { producto: "pantalon", precio: 10 },
    { producto: "remera", precio: 30 },
];

let productosOrdenados = CARRITTO.sort((a, b) => a.precio - b.precio);

//de esta manera tenemos los arrays de manera creciente
console.log("productos ordenados" + productosOrdenados);

//objeto math
//nos va a proporcionar propiedades matematicas y metodos
//para la realizacion de oepraciones matematicas

//propiedades

//metodo min y max

//math.min => nos devuelve el valor mas pequeño entre los numeros
//que se proporcionan en un listado

let minimo = Math.min(75, 44, 23);
console.log("minimo" + minimo);

//math.max => devuelve el valor mas grande entra numeros de un listado

let maximo = Math.max(75, 54, 22);
console.log("Maximo" + maximo);

//ceil,floor,round => metodos para redondear numeros o valores

//ceil => retornar un numero que indiquemos y lo redondea para arriba

let decimal = Math.ceil(1.45);
console.log(decimal);

//floor => retorna u numero y lo lleva hacia abajo, redondea hacia abajo

let floor = Math.floor(1.25);
console.log(floor);

//round => redondear u numero al entero mas cercano

let round = Math.rounde(1.45);
console.log(round);

//metodos para raiz y potencias

let raiz = Math.sqrt(18);
console.log(raiz);

let potencia = Math.pow(2, 4);
console.log(potencia);

//metodo random
// retorna numero aleatorio que se va a comprender entre 0 y 1

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

console.log(Math.round(Math.random() * 10));
// multiplica por 10 y va intercalando del 0 al 10, el metodo round
// lo redondea

//-------------

//los numeros esten entre un intervalo de 10 y 50

console.log(Math.round(Math.random() * 40 + 10));

/************************** */

//CLASS DATE
//date => , es un objeto ,me sirve para trabajar con fechas y horas

let fechaActual = new Date();
console.log(fechaActual);

// date informacion , => año - mes - dia - hora- min - seg

let fechaEspecifica = new Date(2023, 11, 15, 0o3, 0o1, 12);
console.log(fechaEspecifica);

//si quiero sacar el año es

let anio = fechaEspecifica.getFullYear();
console.log(anio);

let mes = fechaEspecifica.getMonth();
console.log(mes);

let dia = fechaEspecifica.getDate();
console.log(dia);

let horario = fechaEspecifica.getHours();
console.log(horario);

//minutos es getMinutes y segundos getSeconds
//getMilliSeconds saca los milisegundos

//establecer componenets de fecha y hora
//si queremos aplicar un valor usamos set

fechaActual.setFullYear(2021);
console.log(fechaActual);
// lo mismo con el dia el mes y el horario

// pedido de datos toDate

console.log(fechaActual.toDateString()); // te da los datos del dia mes y año
console.log(fechaActual.toLocaleString()); //
console.log(fechaActual.toLocaleDateString()); // fecha ej 12/11/2021
console.log(fechaActual.toLocaleTimeString()); //te da el horario segundos y ,inutos

//Existen varias formas de acceder al DOM pero se utilizan 5 que son importantes

//ID = getElementById("nombre del ID")=> metodo del objeto del documento que se utiliza para selecionn y recuperar un elemento del HTML del DOM

//ej
const TITULO = document.getElementById("tituloPrincipal");
console.log(TITULO);

//CLASES = getElementsByClassName("")=> metodo que se utiliza para captar los elementos de HTML que posean clases

const NOMBRES = document.getElementsByClassName("nombres");
console.log(NOMBRES);

//TAG = getElementsByTagName("") => metodo que se utiliza para captar las etiquetas

let etiqueta = document.getElementsByTagName("eti");
console.log(etiqueta);

//querySelector => nos permite sleccionar nodos con la misma sintaxis que CSS
//toma el primer elemento que encuentra en HTML que tenga la clase nombres
let queryNombres = document.querySelector(".nombres");
console.log(queryNombres);

//querySelectorAll => es lo mismo qu queryselector solo que trae todos los elementos que tengan la misma clase
let queryNombreAll = document.querySelectorAll(".nombres");
console.log(queryNombreAll);

//Modificar nodos

//innerText => no es mas que una propiedad, en la cual nosotros vamos a poder acceder
//a texto visible dentro de un elemento, omitiendo cualquier contenido de HTML

//Ej
TITULO.innerText = " estoy jugando con innterText";
//modifica todo el texto atraves de javascript

//innerHTML => se utiliza para obtener o establecer contenido HTML interno de un elemento.
//incluye todas las etiquetas de HTML.
//lo ucal nos permite HTML desde JS.

const DIV_NUEVO = document.getElementById("divContenedor");

// DIV_NUEVO.innerHTML = '<div>
//<p><p>
//<div>
//<button>agregar carro <button>
//se pueden modificar las etiquetas html directo desde js

//Agregar nodos desde JS
//se hacve atraves del metodo createelement("")
// crea nuevos elementos directamente

//variable = document.createElement("nombre del elemento");

let parrafo = document.createElement("p"); //creamos el tipo de etiqueta

//textocontent, inyectamos el contenido a la etiqueta
parrafo.textContent = "hola, este parrafo lo cree desde Js";

//ubicamos la etiqueta parrafo en el body , se usa appendChild
//indica que parrafo va a ser hija del body por el metodo appendChild
document.body.appendChild(parrafo);

//eventos

//los eventos son la manera que tenemos en JS de controlar, las acciones de
//usuarios y definir un comportamiento cuando se produzca

//los eventos para que funcionen usamos una herramienta llamada manejador de enventos

//existen 3 formas de realizar la escucha de un evento

//1ero: vincular la etiqueta con el ID

const BTN = document.getElementById("btn");

//vamos a utilizar un metodo de js addEventListener = se utiliza paar registrar
//un controlador de eventos en un objeto especifico
//el emento que va a controlar es un elemento del DOM

//sintaxis basica de addEventListener

// elemento.addEventListener(evento,function)
//el evento hace referencia a la accion que se ejecuta sobre el elemento
//funcion va a ejecutar lo que queremos que se produzca

BTN.addEventListener('click', function () {
    alert("se hizo click en el boton");
})

//2do metodo : utilizamos las propiedades del NODO.

const BTN_DOS = document.getElementById("btnDos");

BTN_DOS.onclick = () => {
    alert("estamos usando la segunda forma");
}

//3er metodo : escribiendo funciones en el HTML

function jsEnHtml() {
    alert("estamos llamando una funcion desde HTML");
}

//en HTML la etiqueta estaria asi

// <button onclick = "jsEnHtml()" > js en HTML </button>


// eventos de mouse => se producen cuando el usuario interactue con el mouse

//onmouseover => el puntero del mouse se mueve sobre el elemento

CAJA.onmouseover = () => {
    console.log("esta pasando el mouse sobre la caja");
}

//onmouseout => detecta cuando el mouse sale del elemento

CAJA.onmouseout = () => {
    console.log("esta saliendo el mouse sobre la caja");
}

//mousemove => determinar el movimiento del mouse sobre un elemento

CAJA.onmousemove = () => {
    console.log("paso el mouse sobre la caja");
}

// mousedown / mouseup => cuando se oprime o se suelta el elemento con el click del raton

CAJA.onmousedown = () => {
    console.log("mousedown");
}

CAJA.onmouseup = () => {
    console.log("mouseup");
}

//eventos de teclado

//keydown => nos va a informar cuando se preciona una tecla
//keyup => nos dice cuando se suelta una tecla

const CAMPO_TEXTO = document.getElementById("campoTexto");

CAMPO_TEXTO.onkeydown = () => {
    console.log("tecla presionada");
}
CAMPO_TEXTO.onkeyup = () => {
    console.log("quitamos la tecla presionada");
}

//change => se activa cuando se detecta un cambio en el valor del elemento

CAMPO_TEXTO.addEventListener('change', function () {
    console.log("valor cambiado: " + CAMPO_TEXTO.value);
})

//input => permitir ejecutar una funcion cada vez que el usuario ingrese texto en el campo

CAMPO_TEXTO.addEventListener('input', () => {
    console.log(CAMPO_TEXTO.value);
})

//submit => se activa cuando un formulario es enviado

class cliente {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

const arrayClientes = [];

const formulario = document.getElementById("formulario");

formulario.addEventListener('submit', (e) => {
    e.preventDefault(); //

    const nombre = document.getElementById("nombre");
    const apellido = document.getElementById("apellido");

    //verificar por consola que capte los datos
    console.log("el nombre ingresado es: " + nombre.value);
    console.log("el apellido ingresado es: " + apellido.value);

    //creamos el objeto cliente

    const cliente = new Cliente(nombre.value, apellido.value);
    arrayClientes.push(cliente);

    //verificamos por consola el array

    console.log(arrayClientes);

    formulario.reset(); //una vez que se envia el formulario se resetea
})


// STORAGE Y JSON

//storage nos permite guardar datos de manera local en el navegador
//2 maneras de guardar datos en el navegador
//sessionStorage : va a almacenar los datos de forma temporal, a diferencia de local, se pierden los datos si se cierra el navegador
//los datos almacenados solamente van a estar disponibles mientras dura la sesion en el navegador
//localStorage : los datos se van a almacenar de manera indefinida , por mas que cierres el navegador apagues la compu, van a seguir ahi, se almacena de manera local

//setItem : es un metodo que proporciona el objeto localStorage
//ccon esta manera almacenamos los datos de manera local

//LocalStorage : 
//string
localStorage.setItem("saludos", "hola chicos"); //primer parametro lo que se quiere guardar, y segundo su valor

//almacenar numeros
localStorage.setItem("numero", 1234);

//booleanos
localStorage.setItem("boolean", true);

//como recuperamos lo que seteamos

//getItem : es el metodo por el cual nosotros recuperamos los valores de las llaves almacenadas en el navegador

//seteo o setear : estamos guardando un valor

let valor = localStorage.getItem("saludo");// se coloca la key, que siempre es el primer parametro que se pasa en setitem

console.log(valor);

//almacenar un numero como una cadena en el localstorage

localStorage.setItem("numeros", 42);

let numeroComoCadena = localStorage.getItem("numeros");
let numeroComoNumber = parseInt(numeroComoCadena);

console.log(numeroComoNumber);

//SessionStorage : funciona similar a localstorage

sessionStorage.setItem("nombres", "emilio");

let nombresDos = sessionStorage.getItem("nombres");
console.log(nombresDos);

//removeItems : es un metodo de localstorage que nos permite eliminar o remover un elemento

localStorage.setItem("eliminar", "frase a eliminar");

let valorEliminado = localStorage.getItem("eliminar");

//este elimina de manera global todo los datos almacenados
localStorage.clear()

localStorage.removeItem("eliminar"); //elimina los datos del elemento eliminar

//recorrer el localstorage.setItem()

localStorage.setItem("nombre", "juan");
localStorage.setItem("edad", 25);
localStorage.setItem("ciudad", "MDQ");

//obtener todas las claves almacenadas en el localstorage

let todasLasClaves = Object.keys(localStorage);
//devuelve un arreglo con todos los nombres de propiedades enumerables(claves)

//recorrer las claves

for (let i = 0; i < todasLasClaves.length; i++) {
    let clave = todasLasClaves[i];
    let valor = localStorage.getItem(clave);

    console.log(clave, valor);
}

//JSON

//javaScript object notation
//notacion de objetos de javascript
// es un formato de intercambio de datos
//ligero y facil de leer , Json es un formato independiente de lenguaje
//lo vamos a estar utilizando para representar datos estructurados

//objeto de personas

let persona = {
    nombre: "juan",
    edad: 25,
    ciudad: "mar del plata"
};

//stringify = es una funcion que convierte cualquier objeto en una cadena de Json
//va a tomar un objeto como argumento y devuelve una cadena de texto

let jsonPersona = JSON.stringify(persona);

console.log(jsonPersona);

//modo oscuro - modo claro

//1 - crear un boton que cambie el metodo de la pagina

//2 almacenar el modo seleccionado en el storage
//3 al recargar la pagina , recuperamos el modo
//4 cambiamos el modo de la pagina

const botonModo = document.getElementById("botonModo");

botonModo.addEventListener("click", () => {
    document.body.classList.toggle("dark"); //es una propiedad que proporciona acceso a la lista de clases aplicadas al elemento body
    //toggle añadir si no esta presente, quitar si esta presente
    if (document.body.classList.contains("darks")) { // hacer algo si la clase esta presente
        localStorage.setItem("modo", "dark");
    } else {
        localStorage.setItem("modo", "claro");
    }

});


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

const product1 = new Producto("camisa", 500);
const product2 = new Producto("jean", 300);
const product3 = new Producto("remera", 400);

const carrito = [];

carrito.push(product1);
carrito.push(product2);
carrito.push(product3);

console.log(carrito);

const carritoJSON = JSON.stringify(carrito);

//almacenando el carrito en el localStorage

localStorage.setItem("carrito", carritoJSON);

//recuperamos el carrito de localStorage

const carritoRecuperado = localStorage.getItem("carrito");

//convertir el json en un objeto

const carritoObjeto = JSON.parse(carritoRecuperado);

//imprimir todo en HTML

const contenedorCarrito = document.getElementById("contenedorCarrito")

carritoObjeto.forEach(producto => {
    contenedorCarrito.innerHTML += `
    <p> ${producto.nombre} - ${producto.precio} </p>
    `;
});


//operadores avanzados

//operador ++
//aumentar el valor de la variable en 1

//operador ternario
//es una manera resumida de escribir o de hacer un if else
//nos va a permitir realizar una evaluacion de condicion y devolver un valor en vbase a eso

//posee 3 partes:
//condicion booleana ? valor_si_es_verdadero : valor_si_es_falso;

let mayorEdad1 = 18;

if (mayorEdad1 >= 18) {
    console.log("es mayor");
} else {
    console.log("es menor");
}
//los operadores ternarios poseen return implicito.
let resultado2 = mayorEdad1 >= 19 ? console.log("es mayor ternario") : console.log("es menor ternario");

//operador logico and && => podemos nosotros simplificar la condicion if e una sola linea de codigo

let nombreCliente = "maxi";

nombreCliente === "maxi" && alert("hola maxi");

//operador logico or  => revisa una de las 2 condiciones se cumpla.
//lo vamos a utilizar para almacenar datos en variables

//concepto de falsy=> hace referencia a aquellos valores que se evaluan como falsos.

//false es parte de la condicion booleana.
//existen tipos de datos que nacen por defectos falsos
//1 => false de booleanos => el primer valor que esta dentro de los falsy
//2 => 0 tambien se considera falsy.
//3 => null tambien se considera falsy, significa nulo
//4 => undefined el valor indefinido tambien es falsy
//5 => naN not a number tambien es falsy
//6 => "" cadena vacia tambien se considera falsy

// ejemplo de pedir dato al usuario

let name = prompt("ingrese el nombre");

console.log(name || "invitado"); //si en la consola se pone cancelar y no pone nombre 
/// va a saltar como null osea falsso, ponemos el operador or para que salga como invitado
//ya que null es falso

//operador nullish coalescing
// operador fusion nula, se representa a traves de  ??
//nos ayuda a proporcionar una forma de evaluar y devolver un valor predeterminado.
//funciona igual que or con la diferencia que admite mas valores como verdaderos.
// const resultado = valorIzquierdo ?? valorPredeterminado;

const x = null;
const y = "valor predeterminado";

const result1 = x ?? y;

console.log(result1);

//acceso condicional a un objeto

//caracteristica de js que utilizamos para acceder a propiedades de un objeto
//sin generar error si el objeto o la propiedad no existen.

const usuario = null;

console.log(usuario.nombre || "el usuario no existe");
//error : " no se pueden leer propiedadees de null"
//el operador ? busca en usuario la parte nombre y si existe lo imprime, sino salta el usuario no existe
console.log(usuario?.nombre || "el usuario no existe");

//destructuring o desestructuracion.
//expresion de js las cuales nos permiten descomponer estructuras de datos, objetos o los arrays
//esto lo vamos a convertir en variables pequeñas y manejables.
//nos va ahacer mas facil la vida cuando trabajamos con datos estructurados y vamos a tener variables mas consisas.

//destructuracion de objetos

const PERSONA = {
    nombre3: "nico",
    edad: 30,
    provincia: "cordoba"
};

const { nombre3: nombre3PERSONA2, edad: edadPERSONA2, provincia: provinciaPERSONA2 } = PERSONA;

console.log(nombre);
console.log(edad);
console.log(provincia);
//para que la desestructuracion funcione debe haber coincidencai con los nombres de las propiedades
// del objeto. 
//sin embargo a veces puede que los nombres de las propiedades no sean muy descriptivos
//para el uso que queremos darle, y por ellos podemos desestructurarlas
//con un alias, es decir declarar la variable con un nombre alternativo tras haber desestructurado el objeto
const PERSONA2 = {
    nombre3: "roberto",
    edad: 12,
    provincia: "bs as"
};

const { nombre3, edad, provincia } = PERSONA2;

//desestructuracion de parametros

const alumno = {
    nombre: "juan",
    edad: 30
};

function mostrarDatos(objeto) {
    console.log(`hola mi nombre es ${objeto.nombre} y tengo ${objeto.edad}`)
}

mostrarDatos(alumno);

//desestructurar seria
function mostrarDatos({ nombre, edad }) {
    console.log(`hola mi nombre es ${nombre} y tengo ${edad}`)
}

//desestructuracion de array

const frutas2 = ["manzanas", "naranja", "frutilla", "mandarina"];

const [fruta1, fruta2, , fruta3] = frutas2;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
//al imprimir va a saltear el espacio blanco y va aimprimir manddarina ya que array tiene indices


//podemos asignar valores

const alumno4 = {
    nombre5: "juan",
    edad3: 30
};

const { nombre5, edad3, ciudad = "mar del plata" } = alumno4;

console.log(ciudad);


/// SPREAD OPERADOR se declara (...)
//Operador de propagacion , utilizamos estos para desempaquetar elementos de un array o propiedades de un objeto

//arrays 
//copiar arrays

let arrayOriginal = [1, 2, 3, 4];

let copiaArray = [...arrayOriginal];

console.log(copiaArray);

// podemos concatenar arrays

let arrayDos = [5, 6, 7];

let arrayConcat = [...arrayOriginal, ...arrayDos];

console.log(arrayConcat);

//añadir elementos al array

let nuevoArray = [...arrayOriginal, 5, 6, 7];

console.log(nuevoArray);

//ejemplo 

const nombres1 = ["juan", "julieta"];
const nombres2 = ["carlos", "mariela"];

//spread de los dos arrays dentro de otro

const nombresSpread = [...nombres1, ...nombres2];

console.log(nombresSpread);

//spread del array en un objeto

const nombresObj = {
    ...nombresSpread
}

console.log(nombresObj);

//spread de objetos

const objetoOriginal = {
    a: 1,
    b: 2
}
const objetoDos = {
    a: 1,
    b: 2
}
//copia de objeto spread
const copiaObjeto = { ...objetoOriginal };

console.log(copiaObjeto);

//concatenar los objetos
const concatObjeto = { ...objetoOriginal, ...objetoDos };

console.log(concatObjeto);

//modificar objetos

const modificarObjeto = { ...concatObjeto, pepe: "string" }

console.log(modificarObjeto);

//cambiar datos de un objeto

const OriginalPersona = {
    nombre: "juan",
    edad: 20,
    direccion: {
        ciudad: "mar del plata"
    }
};
const copiaPersona = {
    ...OriginalPersona,
    direccion: {
        ...OriginalPersona.direccion,
        ciudad: " santa clara"
    }
};

console.log(copiaPersona);

//clonar y modificar arrays

const usuarios1 = [
    {id:1, nombre:"carlos"},
    {id:2, nombre : "pepe"},
    {id:3, nombre:"antonella"}
]

const actualizarUsuario = usuarios1.map(usuarios1 => usuarios1.id === 2 ? {...usuarios1, name:"roberto"}: usuarios1);

console.log(actualizarUsuario);

//REST PARAMETERS
//nos permite representar un numero indefinido de argumentos con un array
//utilizamos (...)el nombre del parametro.
//util cuando no sabemos cuantos argumentos pasar a una funcion

function sumar1(...numeros){
    let = resultado = 0;
    for(let numero of numeros){
        resultado += numero;
    }
    return resultado;
}

console.log(sumar(2,3,1)); // le pasamos mas argumentos a la funcion sin saber cuantos argumentos vamos a apsar

//se puede pasar un objeto a un array ejm

let objeto1 = { a: 1, b: 2 }

let miArray = Object.keys(objeto1).map(function (clave) {
    return objeto1[clave];
})

console.log(miArray);

//otra forma mas rapida de pasar un objeto a array

let miArray1 = Object.values(objeto1);

console.log(miArray1);

//trim VER que hace 




