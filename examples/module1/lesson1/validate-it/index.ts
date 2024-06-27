import {
  isEven,
  isGreaterThan,
  isLesserThan,
  validateMasturbate,
} from './validator';

function validator() {
  const input = document.getElementById('input') as HTMLInputElement;
  const button = document.getElementById('button') as HTMLButtonElement;
  const button2 = document.getElementById('button2') as HTMLButtonElement;
  const result = document.getElementById('result') as HTMLDivElement;

  button.addEventListener('click', () => {
    const validationMessage = validateMasturbate(input.value, [
      isGreaterThan(0),
      isLesserThan(100),
      isEven,
    ]);

    result.innerHTML = validationMessage;
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
