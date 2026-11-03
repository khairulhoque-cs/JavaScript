const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const height = parseFloat(document.querySelector('#height').value)
    const weight = parseFloat(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height ${height}`;
    } else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight ${weight}`;
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)

        if(bmi < 18.6) {
            results.innerHTML = `Your BMI Category is <span style="color:red">Underweight</span> <span>${bmi}</span>`;
        }
        else if(bmi <= 24.9) {
            results.innerHTML = `Your BMI Category is <span style="color:green">Normal</span> <span>${bmi}</span>`;
        }
        else {
            results.innerHTML = `Your BMI Category is <span style="color:yellow">Overweight</span> <span>${bmi}</span>`;
        }
    }
});

form.addEventListener('reset', function() {
    document.querySelector('#results').innerHTML = '';
});