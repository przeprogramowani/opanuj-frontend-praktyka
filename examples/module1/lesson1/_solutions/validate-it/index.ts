import { NUMBER_VALIDATORS } from './validation/methods';
import { validate } from './validation/validator';

// Only reference to view layer with DOM elements - could be replaced by one or many components
function main() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateButton: HTMLElement =
    document.querySelector('#validation-btn')!;
  const clearInputButton: HTMLElement = document.querySelector('#cleanup-btn')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validateButton.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
