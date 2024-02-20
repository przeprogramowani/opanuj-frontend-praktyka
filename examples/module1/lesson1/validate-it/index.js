import { Results } from './variants';
import { MessageError, MessageSuccess } from './enums';

function validator() {
  const inputNumber = document.getElementById('input');
  const validateButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    if (!inputNumber.value) return Results(result, MessageError.EMPTY_FIELD);

    const value = Number(input.value);

    if (!Number.isInteger(value))
      return Results(result, MessageError.INVALID_TYPE);

    if (value > 0 && value < 100 && value % 2 === 0) {
      return Results(result, MessageSuccess.VALID);
    }
    return Results(result, MessageError.INVALID_NUMBER);
  });

  clearButton.addEventListener('click', () => {
    inputNumber.value = '';
    result.innerHTML = '';
  });
}

validator();
