document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value) / 100;
    const weight = parseFloat(document.getElementById('weight').value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        let result = `Your BMI is ${bmi.toFixed(2)} - `;

        if (bmi < 18.5) {
            result += 'Underweight';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += 'Normal weight';
        } else if (bmi >= 25 && bmi < 29.9) {
            result += 'Overweight';
        } else {
            result += 'Obesity';
        }

        document.getElementById('result').innerText = result;
    } else {
        document.getElementById('result').innerText = 'Please enter valid values';
    }
});
