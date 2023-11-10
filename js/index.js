function calculateBudget() {
    // Obtener los valores de ingresos y gastos
    const ingreso = parseFloat(document.getElementById('ingreso').value);
    const expensas = parseFloat(document.getElementById('expensas').value);

    // Calcular el presupuesto restante
    let budget = ingreso - expensas;

    // Determinar el mensaje del resultado
    let resultMessage = '';
    if (budget > 0) {
        resultMessage = '¡Felicidades! Tienes un excedente de $' + budget.toFixed(2) + ' al mes.';
    } else if (budget === 0) {
        resultMessage = 'Estás equilibrado. No tienes excedente ni deuda.';
    } else {
        resultMessage = '¡Cuidado! Tienes un déficit de $' + Math.abs(budget).toFixed(2) + ' al mes.';
    }

    // Mostrar el resultado
    document.getElementById('result').innerText = resultMessage;
    document.getElementById('result-container').style.display = 'block';
}