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


//COTIZADOR DE IVA, METODOS Y OPERACIONES CON OBJETOS

const IVA = 1.21;

function Producto(nombre, precio, stock) {
    this.nombre = nombre,
        this.precio = precio,
        this.stock = stock,
        this.precioIVA = function () {
            let precioFinal = this.precio * IVA;
            return "$" + precioFinal
        }
}
let producto1 = new Producto("pepas", 39, 2);

console.log(producto1.precioIva());

//CLASES

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre,
            this.edad = edad
    }

    saludar() {
        console.log("Hola gente mi nombre es" + this.nombre + "y tengo " + this.edad);
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
        this.vendido = false
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
        numeroPokemon: 1
    },
    {
        pokemon: "charmander",
        numeroPokemon: 2
    }
]

// metodo lenght aplicado a un array

let estudiantes = ["juan", "soledad", "paulina", "nicolas"];

let cantidadEstudiantes = estudiantes.length;
//metodo lenght cuenta la cantidad de elementos que tiene el array
console.log("la cantidad de estudiantes que posee la clase es : " + cantidadEstudiantes);

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
        precio: 10
    },
    {
        producto: "zapatilla",
        precio: 20
    },
    {
        producto: "chaleco",
        precio: 30
    },
]
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
            return numero1 + numero2
        }
    } else if (operacion == "resta") {
        return (numero1, numero2) => numero1 - numero2
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
        fn(elemento)
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
})

//otro ejemplo forEach

const ESTUDIANTES = [
    {
        nombre: "ana",
        edad: 20
    },
    {
        nombre: "pepe",
        edad: 30
    },
    {
        nombre: "gina",
        edad: 10
    },
]

function saludarEstudiante(estudiantes) {
    console.log(`hola ${estudiantes.nombre}, edad ${estudiantes.edad}`)
}

ESTUDIANTES.forEach(saludarEstudiante);

//ejemplo productos

const PRODUCTOS = [
    {
        articulo: "laptop", precio: 1000
    },
    {
        articulo: "mother", precio: 500
    },
    {
        articulo: "mouse", precio: 20
    },
    {
        articulo: "teclado", precio: 30
    }
]

//funcion aplicar descuento

function aplicarDescuento(producto){
    const DESCUENTO = 0.1;
    const PRECIO_CON_DESCUENTO = producto.precio * (1 - DESCUENTO);
    console.log(`producto ${producto.articulo}, precio con descuento: ${PRECIO_CON_DESCUENTO}`);
}

PRODUCTOS.forEach(aplicarDescuento);

//FIND 
//nos dice que va a encontrar el primer elemento del array que cumpla con la condicion
//retorna un valor solo, el primero que cumpla con la condicion
const USUARIO_MAYOR_EDAD = ESTUDIANTES.find(function (estudiante) {
    return estudiante.edad > 25;
})
console.log(USUARIO_MAYOR_EDAD);

//FILTER se utiliza para crear arrays nuevos con los elementos que cumplan una condicion

const PRECIO_MINIMO_USUARIO = parseFloat(prompt("ingrese el precio minimo"));

if (isNaN(PRECIO_MINIMO_USUARIO)) {
    console.log("por favor ingresa un numero");
} else {
    const PRODUCTO_FILTRADO = PRODUCTOS.filter(function (producto) {
        return producto.precio >= PRECIO_MINIMO_USUARIO;
    });
    console.log("productos que cumplan con la condicion", PRODUCTO_FILTRADO)
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
})
console.log(nombreEnMayus);


let porcentajeAumentado = 0.5;

let precioAumentado = PRODUCTOS.map(function (producto) {
    return {
        articulo: producto.articulo,
        precio: producto.precio * (1 + porcentajeAumentado)
    }
})

console.log(precioAumentado);

//reduce => metodo de array que nos sirve para reducir los datos de un array a unico.

// variable = array.reduce(fuction(acumulador,arrayrecoriddo){
// return acumulador + arrayrecorrido
// }, valorinicialacumulador);

//ejemplo

let nummeros = [1,2,3,4,5];

let suma = nummeros.reduce(function(acumulador,nummeros){
    return acumulador + nummeros
},0); //el 0 significa desde donde va a comenzar a contar el acumulador
//osea desde el indice 0
//si se pone un 1 o otro numero, se le suma a toda la suma
console.log(suma);

//sort => nos va a servir par ordenar los elementos de un array
//no crea un nuevo array, trabaja sobre el original y lo ordena

//variable sort = array.sort(fucntion(comparableA, comparableB){)
// return comparableA - comparableB;
//}

const CARRITTO = [
    {producto: "camiseta", precio:20},
    {producto: "pantalon", precio:10},
    {producto: "remera", precio:30}
]

let productosOrdenados = CARRITTO.sort((a,b) => a.precio - b.precio);

//de esta manera tenemos los arrays de manera creciente
console.log("productos ordenados"+ productosOrdenados);

//objeto math
//nos va a proporcionar propiedades matematicas y metodos
//para la realizacion de oepraciones matematicas

//propiedades

//metodo min y max

//math.min => nos devuelve el valor mas pequeño entre los numeros
//que se proporcionan en un listado

let minimo = Math.min(75,44,23);
console.log("minimo" + minimo);

//math.max => devuelve el valor mas grande entra numeros de un listado

let maximo = Math.max(75,54,22);
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

let fechaEspecifica = new Date (2023, 11 ,15 ,0o3 , 0o1, 12);
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

