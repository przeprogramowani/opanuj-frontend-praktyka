
import { validate } from './functions/validate.ts';
import { INPUT_VALIDATORS} from './validators.ts';

function main() {
  const validationInput = <HTMLInputElement>document.getElementById('validationInput');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = <HTMLDivElement>document.getElementById('result');
  
  validateButton?.addEventListener('click', () => {
    result.innerHTML = validate(validationInput, INPUT_VALIDATORS);
  });

  clearButton?.addEventListener('click', () => {
    validationInput.value = '';
    result.innerHTML = '';
  });
}

main();
