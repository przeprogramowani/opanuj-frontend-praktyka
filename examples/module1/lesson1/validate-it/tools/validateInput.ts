import { rules } from './rulers';

export const validateInput = (
  input: HTMLInputElement,
  result: HTMLDivElement
) => {
  for (const rule of rules) {
    if (!rule.test(input.value)) {
      result.innerHTML = rule.message;
      return;
    }
  }
  result.innerHTML = 'Valid, great job!';
};
