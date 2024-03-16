<<<<<<< HEAD
export default function main() {
  const input = document.getElementById('input');
  const buttonValidate = document.getElementById('button');
  const buttonClear = document.getElementById('button2');
  const result = document.getElementById('result');

  const status = { invalid: 'Invalid', valid: 'Valid', clear: '' };
  const setStatus = (status) => (result.innerHTML = status);
  const isValid = (value) => value > 0 && value < 100 && value % 2 === 0;

  const main = () => {
    const value = Number(input.value);

    if (Number.isNaN(value)) {
      setStatus(status.invalid);
      return;
    }

    isValid(value) ? setStatus(status.valid) : setStatus(status.invalid);
  };

  const clear = () => {
    input.value = '';
    setStatus(status.clear);
  };

  buttonValidate.addEventListener('click', main);
  buttonClear.addEventListener('click', clear);
}
=======
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
>>>>>>> 31f6bf41b0578c69292bbccaec743843f891d41b
