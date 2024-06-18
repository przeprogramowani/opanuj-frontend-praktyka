const isIntValidator = {
  validate: (value) => Number.isInteger(Number(value))
}

const isInRangeValidator = {
  validate: (value) => Number(value) > 0 && Number(value) < 100
}

const canBeDividedBy2Validator = {
  validate: (value) => Number(value) % 2 === 0
}

function validator(validators) {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if(!input.value) return;

    const isValid = validators.every(validator => validator.validate(input.value));

    if(isValid) {
      result.innerHTML = "Valid"
    } else {
      result.innerHTML = "Invalid"
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator([isIntValidator, isInRangeValidator, canBeDividedBy2Validator]);
