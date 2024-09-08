function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const validationRules = [
      value => value !== '' || 'Input cannot be empty',
      value => !isNaN(value) || 'Input must be a number',
      value => Number.isInteger(Number(value)) || 'Input must be an integer',
      value => Number(value) > 0 || 'Number must be positive',
      value => Number(value) < 100 || 'Number must be less than 100',
      value => Number(value) % 2 === 0 || 'Number must be even',
  ]

  function validate(value) {
    for (let rule of validationRules) {
      const result = rule(value);
      if (result !== true) return result;
    }
    return "Valid";
  }

  function clearInput() {
    input.value = "";
    result.innerHTML = "";
  }

  button.addEventListener("click", () => {
    const validationResult = validate(input.value);
    result.innerHTML = validationResult;
  })

  button2.addEventListener('click', clearInput);
}

validator();