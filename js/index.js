//Función Calculadora de prestamos
function CalculateLoan() {
    // Obtener los valores de precio, intereses y cuotas
    let amount = parseFloat(document.getElementById('amount').value);
    let interest = parseFloat(document.getElementById('interest').value);
    let deadlines = parseInt(document.getElementById('deadlines').value);
    
    //Validar que los valores ingresados sean numericos

    if (isNaN(amount) || isNaN(interest) || isNaN(deadlines)){
        alert("Por favor, ingrese valores numericos validos");
        return;
    }

    if (amount <= 0){
        alert("El monto del prestamo debe ser mayor que cero");
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
    const MonthlyPayment = (amount * X * MonthlyInterest) / (X - 1);

    const ResultElement = document.getElementById("result");
    ResultElement.innerHTML = `El pago mensual es : $${MonthlyPayment.toFixed(2)}`;
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

