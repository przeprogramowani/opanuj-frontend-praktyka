import { NUMBER_VALIDATORS } from './lib/methods';
import { validate } from './lib/validator';

function main() {
  const input: HTMLInputElement = document.querySelector('input')!;
  const validateBtn: HTMLButtonElement =
    document.querySelector('#btn-validate')!;
  const cleanUpBtn: HTMLButtonElement =
    document.querySelector('#btn-clean-up')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validateBtn.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);

    result.innerHTML = validationMessage;
  });

  cleanUpBtn.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
