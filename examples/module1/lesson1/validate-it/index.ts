import { NUMBER_VALIDATORS } from './validator/validation_rule';
import { validate } from './validator/validator';

function main() {
  const input: HTMLInputElement = document.getElementById('input')!;
  const onValidate: HTMLElement = document.getElementById('onValidateButton')!;
  const onCancel: HTMLElement = document.getElementById('onCancelButton')!;
  const result: HTMLElement = document.getElementById('result')!;

  onValidate.addEventListener('click', () => {
    const validationMessage = validate(input.value, NUMBER_VALIDATORS);
    result.innerHTML = validationMessage;
  });

  onCancel.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

main();
