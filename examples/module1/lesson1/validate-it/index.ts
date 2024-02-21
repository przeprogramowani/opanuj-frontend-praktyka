import { convertToNumber } from './convertToNumber';
import { isGreatherThan } from './isGreatherThan';
import { isSmallerThan } from './isSmallerThan';
import { validate } from './validate';

const validator = () => {
  const input = document.getElementById('input') as HTMLInputElement | null;
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const result = document.getElementById('result');

  validateButton?.addEventListener('click', () => {
    const { value } = input as HTMLInputElement;

    if (value) {
      const number = convertToNumber(value);
      const isValid = validate(number, [
        isGreatherThan,
        isSmallerThan,
        Number.isInteger,
      ]);

      if (isValid) {
        result && (result.innerHTML = 'Valid');
      } else {
        result && (result.innerHTML = 'Invalid');
      }
    } else {
      result && (result.innerHTML = 'The field was empty');
    }
  });

  clearButton?.addEventListener('click', () => {
    input && (input.value = '');
    result && (result.innerHTML = '');
  });
};

validator();
