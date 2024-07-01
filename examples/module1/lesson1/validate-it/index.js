// CONSTANTS
const validateSuccessMessage = 'Valid';
const validateErrorMessage = 'Invalid';
const minVal = 0;
const maxVal = 100;

// VALIDATE METHODS
const isNumber = (num) => !!Number(num);
const isBetween = (num) => num > minVal && num < maxVal
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
      result.innerHTML = validateSuccessMessage;
      return;
    }

    result.innerHTML = validateErrorMessage;
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
});
