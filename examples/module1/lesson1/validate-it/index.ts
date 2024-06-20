import { validate } from './validation/validate';

function validatorApp() {
  const input: HTMLInputElement = document.querySelector('#input')!;
  const validateButton: HTMLElement = document.querySelector(
    '#validateButton'
  )!;
  const resetButton: HTMLElement = document.querySelector('#resetButton')!;
  const result: HTMLElement = document.querySelector('#result')!;

  validateButton.addEventListener('click', () => {
    const resultMesaage = validate(input.value);

    return result.innerHTML = resultMesaage;
  });

  resetButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validatorApp();
