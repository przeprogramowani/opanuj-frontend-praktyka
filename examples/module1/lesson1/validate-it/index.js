import { validationMethods } from './validation-methods';

function validator() {
  const MESSAGE_VALID = 'Valid';
  const MESSAGE_INVALID = 'Invalid';
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validate-button');
  const clearButton = document.getElementById('clear-button');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    if (input.value) {
      const inputValueAsNumber = Number(input.value);
      if (validationMethods.every((method) => method(inputValueAsNumber))) {
        result.innerHTML = MESSAGE_VALID;
      } else {
        result.innerHTML = MESSAGE_INVALID;
      }
    }
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
