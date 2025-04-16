async function calculate(operation) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers');
        return;
    }

    try {
        const response = await fetch('/calculate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                num1: num1,
                num2: num2,
                operation: operation
            })
        });

        const data = await response.json();
        document.getElementById('result').textContent = data.result;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while calculating');
    }
} 