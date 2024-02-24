function validator(validateConditions) {
    const input = document.getElementById('input');
    const validateBtn = document.getElementById('button');
    const clearBtn = document.getElementById('button2');
    const result = document.getElementById('result');

    const validateNumber = () => {
        const value = Number(input.value);
        const isValid = value > 0 && value < 100 && validateConditions.every(condition => condition(value));
        result.innerHTML = isValid ? 'Valid' : 'Invalid';
    };

    const clearInput = () => {
        input.value = '';
        result.innerHTML = '';
    };

    validateBtn.addEventListener('click', validateNumber);
    clearBtn.addEventListener('click', clearInput);
}

const isDivisibleBy2 = value => value % 2 === 0;

validator([isDivisibleBy2]);
