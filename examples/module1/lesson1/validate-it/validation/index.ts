import { ResultMessage, Rule } from '../type';

export const loadElements = (window.onload = () => {
  const input = <HTMLInputElement>document.getElementById('input');
  const button = <HTMLButtonElement>document.getElementById('button');
  const button2 = <HTMLButtonElement>document.getElementById('button2');
  const result = <HTMLElement>document.getElementById('result');
  return { input, button, button2, result };
});

export const isExistValue = (value: string) => {
  return value ? Number.parseFloat(value) : null;
};

export const isValidCriteria = (value: number) => {
  const MIN = 0;
  const MAX = 100;
  if (value > MIN && value < MAX && value % 2 === 0) return !!value;
  return !value;
};

// sample second validation function
export const isGreaterThan50 = (value: number) => {
  const THRESHOLD = 50;
  if (value > THRESHOLD) return !!value;
  return !value;
};

export const basicValidation = (
  input: HTMLInputElement,
  result: HTMLElement
) => {
  const value = isExistValue(input.value);
  if (!value) setResult(result, 'Invalid');
  return value;
};

export const rulesValidation = (
  validatoRules: Rule[],
  value: number,
  result: HTMLElement
) => {
  const allStatus = validatoRules.map((rule) => rule(value));
  const allIsValid = allStatus.every((status) => status);
  if (allIsValid) return setResult(result, 'Valid');
  return setResult(result, 'Invalid');
};

export const setResult = (resultTag: HTMLElement, result: ResultMessage) => {
  return (resultTag.innerHTML = result);
};
