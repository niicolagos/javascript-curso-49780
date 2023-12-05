//Array para almacenar las opciones ingresadas 
const registros = []

//Prompt para pedir nombre del usuario, monto, intereses y plazo
function getUserData(){
    const userName = prompt("Hola, Por favor, ingresa tu nombre: ");
    const loanAmountInput = prompt("Hola " + userName + " Por favor, ingresa el monto del prestamo");
    const interestInput = prompt(" Ingresa la tasa de interes (%): ");
    const deadlinesInput = prompt("Ahora ingresa el plazo del prestamo (en meses): ");

    const amount = parseFloat(loanAmountInput);
    const interestRate = parseFloat(interestInput);
    const deadlinesMonths = parseInt(deadlinesInput);

//Validaciones de datos solicitados
    if (isNaN(amount) || amount <= 0 || isNaN(interestRate) || interestRate <= 0  || isNaN(deadlinesMonths) || deadlinesMonths <= 0) {
      alert('Por favor, ingresa valores válidos para el monto, la tasa de interés y el plazo.');
      return;
    }
    if (interestRate <= 0 || interestRate > 100){
        alert("La tasa de interes debe estar entre 0 y 100");
        return;
    }

    if (deadlinesMonths <= 0 || deadlinesMonths > 360){
        alert("El plazo debe estar entre 1 y 360 meses");
        return;
    }

    //Objeto para almacenar la informacion de la entrada 
    const entradaUsuario = {
        Nombre : userName,
        Monto : amount,
        TasaInteres : interestRate,
        PlazoMeses : deadlinesMonths
    };

    //Agregar el objeto al array de registros
    registros.push(entradaUsuario);
  
    document.getElementById('loanAmount').value = amount; // Actualizar el valor del input con el monto
    document.getElementById('interest').value = interestRate; // Actualizar el valor del input con la tasa de interés
    document.getElementById('deadlines').value = deadlinesMonths; // Actualizar el valor del input con el plazo
  
    CalculateLoan(amount, interestRate, deadlinesMonths, userName); // Llama a la función para calcular el préstamo
  }
//Función Calculadora de prestamos
function CalculateLoan(amount, interestRate, deadlinesMonths, userName) {
    const MonthlyInterest = (interestRate / 100) / 12;
    const X = Math.pow(1 + MonthlyInterest, deadlinesMonths);
    const MonthlyPayment = (amount * X * MonthlyInterest) / (X - 1);

    const ResultElement = document.getElementById("result");
    ResultElement.innerHTML = `Hola ${userName}, el pago mensual sera de:  $${MonthlyPayment.toFixed(2)}`;
}

    function alert(message){
        const errorElement = document.getElementById("error");
        errorElement.style.display = "block"; //mostrar el elemento de error
        //Establecerr el mensaje de error recibido como parametro
        errorElement.innerHTML = message; 
        //Despues de 3 segundos , ocultamos el mensaje de error
        setTimeout(() =>{
            errorElement.style.display = "none"; //ocultar el elemento de error
        }, 3000); //3000 milisegundos (3 segundos)
    }

    getUserData();

