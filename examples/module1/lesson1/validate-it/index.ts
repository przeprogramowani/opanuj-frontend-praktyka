import { Rule } from './type';
import {
  basicValidation,
  isGreaterThan50,
  isValidCriteria,
  loadElements,
  rulesValidation,
} from './validation';

function validator(validatoRules: Rule[]) {
  const { input, button, button2, result } = loadElements();

  button.addEventListener('click', () => {
    const value = basicValidation(input, result);
    if (value) rulesValidation(validatoRules, value, result);
  });
  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator([isValidCriteria, isGreaterThan50]);
