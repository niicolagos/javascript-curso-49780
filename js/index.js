//Array para almacenar las opciones ingresadas 
const registros = []

function guardarDatosEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, JSON.stringify(valor));
}

function obtenerDatosDeLocalStorage(clave) {
    const valor = localStorage.getItem(clave); // Obtener el valor del localStorage asociado a la clave
    return valor ? JSON.parse(valor) : null; // Devolver el valor si existe, convirtiéndolo de vuelta a un objeto o devuelve null si no hay nada
}

function calcularPrestamo() {
    const userName = document.getElementById(`userName`).value;
    const amount = parseFloat(document.getElementById(`loanAmount`).value);
    const interestRate = parseFloat(document.getElementById(`interest`).value);
    const deadlinesMonth = parseInt(document.getElementById(`deadlines`).value);

    //Validaciones de datos solicitados
    if (isNaN(amount) || amount <= 0 || isNaN(interestRate) || interestRate <= 0 || isNaN(deadlinesMonth) || deadlinesMonth <= 0) {
        mostrarError('Por favor, ingresa valores válidos para el monto, la tasa de interés y el plazo.');
        return;
    }
    if (interestRate <= 0 || interestRate > 100) {
        mostrarError("La tasa de interes debe estar entre 0 y 100");
        return;
    }

    if (deadlinesMonth <= 0 || deadlinesMonth > 360) {
        mostrarError("El plazo debe estar entre 1 y 360 meses");
        return;
    }

    //Objeto para almacenar la informacion de la entrada 
    const entradaUsuario = {
        Nombre: userName,
        Monto: amount,
        TasaInteres: interestRate,
        PlazoMeses: deadlinesMonth
    };

    //Agregar el objeto al array de registros
    registros.push(entradaUsuario);
    guardarDatosEnLocalStorage(`registros`, registros);

    calcularYmostrarElResultrado(amount, interestRate, deadlinesMonth, userName);// Llama a la función para calcular el préstamo

    // Crearr un nuevo elemento para mostrar un mensaje adicional
    const adicionalMessage = document.createElement(`p`);
    adicionalMessage.textContent = `Cálculo realizado con éxito!!`;
    document.body.appendChild(adicionalMessage);
}
//Función Calculadora de prestamos
function calcularYmostrarElResultrado(amount, interestRate, deadlinesMonth, userName) {
    const MonthlyInterest = (interestRate / 100) / 12;
    const X = Math.pow(1 + MonthlyInterest, deadlinesMonth);
    const MonthlyPayment = (amount * X * MonthlyInterest) / (X - 1);

    const ResultElement = document.getElementById("result");
    ResultElement.innerHTML = `Hola ${userName}, el pago mensual sera de:  $${MonthlyPayment.toFixed(2)}`;

    //Mostrar las entradas del usuario

    const EntradasUsuario = document.getElementById(`UsuarioEntrada`);
    EntradasUsuario.innerHTML = ``;

    registros.forEach(entry => {
        const entryElement = document.createElement(`div`);
        entryElement.classList.add(`entry`);
        entryElement.innerHTML = `
    <p>Nombre: ${entry.Nombre}</p>
    <p>Monto: ${entry.Monto}</p>
    <p>Tasa de Interés: ${entry.TasaInteres}</p>
    <p>Plazo en Meses: ${entry.PlazoMeses}</p>
    `;
        EntradasUsuario.appendChild(entryElement);
    });
}

function mostrarError(message) {
    const errorElement = document.getElementById('error');
    errorElement.style.display = 'block';
    errorElement.innerHTML = message;

    setTimeout(() => {
        errorElement.style.display = 'none';
    }, 3000);
}

//verifica si existen datos previamente guardados en localStorage bajo la clave 'registros' y, en caso afirmativo, los añade al array registros.
document.addEventListener(`DOMContentLoaded`, function () {
    const registrosGuardados = obtenerDatosDeLocalStorage(`registros`);
    if (registrosGuardados) {
        registros.push(...registrosGuardados);
    }
});


document.getElementById(`calculateButton`).addEventListener(`click`, calcularPrestamo);



