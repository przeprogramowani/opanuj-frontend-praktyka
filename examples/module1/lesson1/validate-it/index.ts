import { clearInput } from './tools/clearInput';
import { validateInput } from './tools/validateInput';

const validator = () => {
  const input = document.getElementById('input') as HTMLInputElement;
  const validateButton = document.getElementById(
    'validateButton'
  ) as HTMLButtonElement;
  const clearButton = document.getElementById(
    'clearButton'
  ) as HTMLButtonElement;
  const result = document.getElementById('result') as HTMLDivElement;

  validateButton.addEventListener('click', () => validateInput(input, result));
  clearButton.addEventListener('click', () => clearInput(input, result));
};

validator();
