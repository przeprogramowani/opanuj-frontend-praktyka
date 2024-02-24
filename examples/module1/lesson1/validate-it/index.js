import { validate } from './validate';
import {
  isEven,
  isFilled,
  isGreatherThan,
  isInteger,
  isLessThan,
} from './validators';

function validator() {
  const numberInput = document.getElementById('numberInput');
  const submitButton = document.getElementById('submitButton');
  const clearButton = document.getElementById('clearButton');
  const formResult = document.getElementById('formResult');

  submitButton.addEventListener('click', () => {
    const isValueCorrect = validate(
      isFilled,
      isInteger,
      (value) => isGreatherThan(value, 0),
      (value) => isLessThan(value, 100),
      isEven
    )(numberInput.value);

    formResult.innerHTML = isValueCorrect ? 'Valid' : 'Invalid';
  });

  clearButton.addEventListener('click', () => {
    numberInput.value = '';
    formResult.innerHTML = '';
  });
}

validator();
