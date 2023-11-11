//Función calculateBudget
function calculateBudget() {
    // Obtener los valores de precio y cuotas
    let price = parseFloat(document.getElementById('price').value);
    let installments = parseInt(document.getElementById('installments').value);
    let interestRate = parseFloat(document.getElementById('interest').value);

    // Validar que la cantidad de cuotas y el precio sea mayor que cero
    if (installments <= 0 || price <= 0) {
        alert('Por favor, ingrese valores válidos para precio y cuotas.');
        return;
    }

    // Calcular el monto total y el monto de cada cuota
    let total, installmentAmount;

    if (interestRate > 0) {
        // Calcular con interés
        total = price * (1 + interestRate / 100);
        installmentAmount = total / installments;
    } else {
        // Calcular sin interés
        total = price;
        installmentAmount = price / installments;
    }

    // Mostrar el resultado
    let resultMessage = 'Total a Pagar: $' + price.toFixed(2) + '<br>' +
        'Cuotas: ' + installments + '<br>' +
        'Monto de cada cuota: $' + installmentAmount.toFixed(2);

    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('result-container').style.display = 'block';
}