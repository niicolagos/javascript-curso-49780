// Modifica la función calculateBudget en script.js
function calculateBudget() {
    // Obtener los valores de precio y cuotas
    const price = parseFloat(document.getElementById('price').value);
    const installments = parseInt(document.getElementById('installments').value);
  
    // Validar que la cantidad de cuotas sea mayor que cero
    if (installments <= 0) {
      alert('Por favor, ingrese una cantidad válida de cuotas.');
      return;
    }
  
    // Calcular el monto de cada cuota
    let installmentAmount = price / installments;
  
    // Mostrar el resultado
    let resultMessage = 'Total a Pagar: $' + price.toFixed(2) + '<br>' +
                        'Cuotas: ' + installments + '<br>' +
                        'Monto de cada Cuota: $' + installmentAmount.toFixed(2);
  
    document.getElementById('result').innerHTML = resultMessage;
    document.getElementById('result-container').style.display = 'block';
  }