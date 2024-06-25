import { Validator } from './Validator.js';

const isInteger = (input) => Number.isInteger(input);
const isGreaterThanZero = (input) => input > 0;
const isLessThanHundred = (input) => input < 100;
const isEven = (input) => input % 2 === 0;

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const validator = new Validator({
      rules: [isInteger, isGreaterThanZero, isLessThanHundred, isEven],
    });
    const parsedInput = parseInt(input.value);

    result.innerHTML = validator.validate(parsedInput) ? 'Valid' : 'Invalid';
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
