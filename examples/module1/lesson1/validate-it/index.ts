import { validate } from './validation/validator';

const validator = () => {
  const numberInput = document.getElementById('numberInput') as HTMLInputElement;
  const validateButton = document.getElementById('validateButton') as HTMLButtonElement;
  const clearButton = document.getElementById('clearButton') as HTMLButtonElement;
  const result = document.getElementById('result') as HTMLDivElement;

  validateButton.addEventListener('click', () => 
    result.textContent = validate(numberInput.value)
  );

  clearButton.addEventListener('click', () => {
    numberInput.value = '';
    result.textContent = '';
  });
};

validator();
