import { VALIDATOR_NUMBER } from './validator/methods';
import { validator } from './validator/validator';

export default function main() {
  const input = document.querySelector<HTMLInputElement>('#validate-input');
  const buttonValidate = document.querySelector('#validate-button');
  const buttonClear = document.querySelector('#clear-button');
  const result = document.querySelector<HTMLElement>('#result');

  if (!input || !buttonValidate || !buttonClear || !result) {
    throw new Error('ne or more elements are missing in the DOM');
  }

  const validateInput = () => {
    result.innerText = validator(VALIDATOR_NUMBER, input.value);
  };

  const clearInput = () => {
    input.value = '';
    result.innerText = '';
  };

  buttonValidate.addEventListener('click', validateInput);
  buttonClear.addEventListener('click', clearInput);
}
main();
