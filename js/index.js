//Prompt para pedir nombre del usuario y el monto de su prestamo
function getUserData(){
    let userName = prompt("Hola, Por favor, ingresa tu nombre: ");
    let loanAmount = prompt("Hola" + userName + "Por favor, ingresa el monto del prestamo");

    const AMOUNT = parseFloat(loanAmount);

    if (isNaN(AMOUNT) || AMOUNT <= 0 ) {
        alert("Por favor, ingresa un monto valido mayor que 0");
        return;
    }

    CalculateLoan(AMOUNT);
}
//Función Calculadora de prestamos
function CalculateLoan() {
    // Obtener los valores de precio, intereses y cuotas
    let interest = parseFloat(document.getElementById('interest').value);
    let deadlines = parseInt(document.getElementById('deadlines').value);
    
    //Validar que los valores ingresados sean numericos

    if (isNaN(interest) || isNaN(deadlines)){
        alert("Por favor, ingrese valores numericos validos");
        return;
    }

    if (interest <= 0 || interest > 100){
        alert("La tasa de interes debe estar entre 0 y 100");
        return;
    }

    if (deadlines <= 0 || deadlines > 360){
        alert("El plazo debe estar entre 1 y 360 meses");
        return;
    }


    const MonthlyInterest = (interest / 100) / 12;
    const X = Math.pow(1 + MonthlyInterest, deadlines);
    const MonthlyPayment = (AMOUNT * X * MonthlyInterest) / (X - 1);

    const ResultElement = document.getElementById("result");
    ResultElement.innerHTML = `Hola ${userName}, el pago mensual sera de:  $${MonthlyPayment.toFixed(2)}`;
}

    function alert(message){
        const errorElement = document.getElementById("error");
        errorElement.style.display = "block"; //mostrar el elemento de error
        //Establecer el mensaje de error recibido como parametro
        errorElement.innerHTML = message; 
        //Despues de 3 segundos , ocultamos el mensaje de error
        setTimeout(() =>{
            errorElement.style.display = "none"; //ocultar el elemento de error
        }, 3000); //3000 milisegundos (3 segundos)
    }

    getUserData();

