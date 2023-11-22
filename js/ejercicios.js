/*const NAME_USUARIO= prompt("Ingrese su nombre de usuario");
const PASSWORD= prompt("Ingrese su contraseña");

if(NAME_USUARIO === "admin" && (PASSWORD === "123456" || PASSWORD === "secreta")){
    console.log("Estas adentro");
}else {
    console.log("Datos incorrectos, por favor verifique");
}

//ciclo for

for (let i = 0; i < 21; i++){
    console.log("iternacion Nro", i);
}

//tabla multiplicar

const NUMBER = 6;

for (let i =1; i <= 10; i++){
    let RESULTADO = NUMBER * i;
    console.log(NUMBER + "X" + i + "=" + RESULTADO);
}*/

//proyecto alquilar peliculas

class cliente {
    constructor(nombre, edad, membresia){
        this.nombre = nombre;
        this.edad = edad;
        this.membresia = membresia;
    }
}

class alquiler { 
    constructor( pelicula, cliente, costo, fecha){
        this.pelicula = pelicula;
        this.cliente = cliente;
        this.costo = Math.round(costo);
        this.fecha = fecha || new Date ();
    }
}

class pelicula{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
}

let clienteUno = new Cliente("emiliano", 20, "premium");
let clienteDos = new Cliente("sebastian", 25, "free");

let peliculaUno = new Pelicula("50 sombras de grey", "fantasia");
let peliculaDos = new Pelicula("mingo y anibal en la mansion embrujada", "accion");

let alquilerUno = new Alquiler(peliculaUno,clienteUno,40.5);
let alquilerDos = new Alquiler(peliculaDos,clienteDos,new Date("june 6, 2023 10:00"));

function diasAlquilerMembresia(cliente){
    if(cliente.membresia == "premium"){
        return 3;
    } else {
        return 2;
    }
}

function devolverPeliculaHoy(alquiler){
    let fechaAlquiler = alquiler.fecha;
    let fechaActual = new Date();
    let diaAlquiler = diasAlquilerMembresia(alquiler.cliente);

    fechaAlquiler.setDate(fechaAlquiler.getDate() + diaAlquiler);

    if (fechaAlquiler < fechaActual){
        return `la pelicula ${alquiler.pelicula.nombre} debe devolverse hoy, el costo de alquiler es ${alquiler.costo}`
    } else {
        return  `la pelicula ${alquiler.pelicula.nombre} no debe devolverse hoy, el costo de alquiler es ${alquiler.costo}`
    }
}

console.log(devolverPeliculaHoy(alquilerUno));
console.log(devolverPeliculaHoy(alquilerDos));