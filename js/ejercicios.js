const NAME_USUARIO= prompt("Ingrese su nombre de usuario");
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
}