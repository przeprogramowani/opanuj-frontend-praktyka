export const validateInputValue = (input: HTMLInputElement, validFunction: (...args: any) => boolean) => {
  if (!input.value) return false;

  return validFunction(input.value);
};

export const numberIsValid = (number: number): boolean => {
  const MIN_VALUE = 1;
  const MAX_VALUE = 99;

  if (Number.isNaN(number)) return false;

  return isNumberInRange(number,MIN_VALUE,MAX_VALUE) && number % 2 === 0;
};

const isNumberInRange = (number: number, min: number, max: number): boolean => {
  return number >= min && number <= max;
};
