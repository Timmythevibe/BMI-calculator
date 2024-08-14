document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();


    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const age = parseInt(document.getElementById('age').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    const resultDiv = document.getElementById('result');
    resultDiv.className = 'result'; // Reset any previous class

    if (firstName && lastName && age > 0 && height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let result = `${firstName} ${lastName}, age ${age}, your BMI is ${bmi.toFixed(2)} - `;

        if (bmi < 18.5) {
            result += 'Underweight';
            resultDiv.classList.add('yellow');
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += 'Normal weight';
            resultDiv.classList.add('green');
        } else if (bmi >= 25 && bmi < 29.9) {
            result += 'Overweight';
            resultDiv.classList.add('red');
        } else {
            result += 'Obesity';
            resultDiv.classList.add('red');
        }

        resultDiv.innerText = result;
    } else {
        resultDiv.innerText = 'Please enter valid values';
    }
});
