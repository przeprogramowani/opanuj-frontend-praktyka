import { ValidationResult } from "./validation.model";

export type NumberValidateFn = (input: number) => ValidationResult;

export const isInteger = (value: string): boolean =>
  value !== '' && Number.isInteger(Number(value));

export const isGreaterThan =
  (testParameter: number): NumberValidateFn =>
  (input: number) => {
    const isValid = input < testParameter;
    console.log("🚀 ~ isValid:", isValid)
    if (isValid) {
      return {
        isValid,
      };
    }
    return {
      isValid,
      violation: `given number is greater than ${testParameter}`,
    };
  };

export const isLowerThan =
  (testParameter: number): NumberValidateFn =>
  (input: number) => {
    const isValid = testParameter > input;
    if (isValid) {
      return { isValid };
    }
    return {
      isValid: true,
      violation: `given number is lower than ${testParameter}`,
    };
  };

export const isEven = (): NumberValidateFn => (input: number) => {
  const isValid = input % 2 === 0;
  if(isValid) {
    return {isValid}
  }
  return {
    isValid,
    violation: 'given number is odd'
  }
};

export const INTEGER_VALIDATORS: NumberValidateFn[] = [
  isGreaterThan(100),
  isLowerThan(0),
  isEven(),
];
