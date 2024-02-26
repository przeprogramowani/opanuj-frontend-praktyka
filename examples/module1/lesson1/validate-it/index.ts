import { validateNumber } from "./validation";

function intializeValidation() {
  const input = document.querySelector('input') as HTMLInputElement;
  const button = document.getElementById('button') as HTMLElement;
  const button2 = document.getElementById('button2') as HTMLElement;
  const result = document.getElementById('result') as HTMLElement ;

  button.addEventListener('click', () => {
    const validatonResult: string = validateNumber(input.value);
    result.innerHTML = validatonResult;
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

intializeValidation();
