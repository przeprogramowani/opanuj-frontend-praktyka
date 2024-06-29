import { validateInput } from './validator';

const input = document.querySelector<HTMLInputElement>('#input')!;
const validateButton =
  document.querySelector<HTMLButtonElement>('#validateButton');
const resetButton: HTMLButtonElement =
  document.querySelector<HTMLButtonElement>('#resetButton')!;
const result = document.querySelector<HTMLElement>('#result')!;

const reset = () => {
  input.value = '';
  result.innerHTML = '';
};

function main() {
  validateButton?.addEventListener('click', () => {
    const status = validateInput(input.value);
    result.innerHTML = status;
  });

  resetButton.addEventListener('click', () => {
    reset();
  });
}

main();
