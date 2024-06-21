import { INVALID_MESSAGE, VALID_MESSAGE } from "./validation/messages.js";
import { validate } from "./validation/validator.js";

function main() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const inputValue = Number(input.value);
    result.innerHTML = validate(inputValue) ? VALID_MESSAGE : INVALID_MESSAGE;
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
