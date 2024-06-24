import { DIVISIBLE_BY_VALUE, MAX_VALUE, MIN_VALUE } from './variables/rules.variables';
import { setResult } from './helpers/number-validator.helper';

function validator() {
  const numberValueInput = document.getElementById('input');
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const resultInput = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const numberValue = Number(numberValueInput.value);
    const isValidValue = numberValue > MIN_VALUE && numberValue < MAX_VALUE && numberValue % DIVISIBLE_BY_VALUE === 0;

    resultInput.innerHTML = setResult(isValidValue);
  });

  clearButton.addEventListener('click', () => {
    numberValueInput.value = '';
    resultInput.innerHTML = '';
  });
}

validator();
