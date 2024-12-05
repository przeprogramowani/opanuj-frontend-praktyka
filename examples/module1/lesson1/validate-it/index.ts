import { VALIDATORS } from "./validator/methods";
import { validate } from "./validator/validator";

function validator() {
  const input: HTMLInputElement = document.getElementById('input')!;
  const button: HTMLElement = document.getElementById('validation-btn')!;
  const button2: HTMLElement = document.getElementById('cleanup-btn')!;
  const result: HTMLElement = document.getElementById('result')!;

  button.addEventListener('click', () => {
    const validationResult = validate(input.value, VALIDATORS);
    result.innerHTML = validationResult;
  });

  
  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator()
