function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const isNotEmpty = (value) => !!value;
  const greaterThen = (value, then = 0) => value > then;
  const lessThen = (value, then = 100) => value < then;
  const checkEven = (value) => value % 2 === 0;

  const checkValidationRoles = (value, rules) => {
    const valueAsNumber = Number(value);
    return rules.every((rule) => rule(valueAsNumber));
  };
  const handleValidateIt = () => {
    const isValid = checkValidationRoles(input.value, [isNotEmpty, Number.isInteger, greaterThen, lessThen, checkEven]);
    result.innerHTML = isValid ? 'Valid' : 'Invalid';
  };

  const handleClear = () => {
    input.value = '';
    result.innerHTML = '';
  };

  button.addEventListener('click', handleValidateIt);
  button2.addEventListener('click', handleClear);
}

validator();
