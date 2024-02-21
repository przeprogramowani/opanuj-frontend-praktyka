function validator() {
  const input = document.getElementById('input');
  const validButton = document.getElementById('validButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  function validateInput(input) {
    let num = Number(input.value);
    let isValid = false;

    if (input.value && Number.isInteger(num)) {
      isValid = num >= 0 && num <= 100 && num % 2 === 0;
    }

    return isValid ? 'Valid' : 'Invalid';
  }

  validButton.addEventListener('click', () => {
    result.innerHTML = validateInput(input);
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
