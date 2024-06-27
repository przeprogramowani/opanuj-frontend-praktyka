// CONSTANTS
const VALIDATE_SUCCESS_MESSAGE = 'Valid';
const VALIDATE_ERROR_MESSAGE = 'Invalid';
const MIN_VAL = 0;
const MAX_VAL = 100;

// VALIDATE METHODS
const isNumber = (num) => !!Number(num);
const isBetween = (num) => num > MIN_VAL && num < MAX_VAL
const isEven = (num) => num % 2 === 0;
const validate = (num) => isNumber(num) && isBetween(num) && isEven(num);

document.addEventListener('DOMContentLoaded', (event) => {
  // HTML ELEMENTS
  const input  = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  // EVENTS
  validateButton.addEventListener('click', () => {
    const inputValue = input.value;

    if (validate(inputValue)) {
      result.innerHTML = VALIDATE_SUCCESS_MESSAGE;
      return;
    }

    result.innerHTML = VALIDATE_ERROR_MESSAGE;
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
});
