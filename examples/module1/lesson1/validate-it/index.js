import {isUpperThan, isLowerThan} from './utils/utils.js';
import { STATUS } from './constants/statusConstant.js';

function validate(input, array) {
   const checkAllValidate = array.every((fn) => fn(Number(input)));

   if(checkAllValidate) {
    return STATUS.VALID;
   }

   return STATUS.INVALID;
}

const validators = () => [isUpperThan(0), isLowerThan(100)];

function main() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
      result.innerHTML = validate(input.value, validators);
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
