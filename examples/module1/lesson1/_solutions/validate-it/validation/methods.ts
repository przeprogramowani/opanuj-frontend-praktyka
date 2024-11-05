// Validation methods and method factories in separate module

export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven: NumericValidationMethod = (input: number) => input % 2 === 0;

const isGreaterThan = (boundary: number): NumericValidationMethod => {
  return (input: number) => input > boundary;
};

const isLessThan = (boundary: number): NumericValidationMethod => {
  return (input: number) => input < boundary;
};

export const isValidInteger: StringValidationMethod = (
  value: string
): boolean => {
  return value != '' && Number.isInteger(Number(value));
};

export const NUMBER_VALIDATORS: NumericValidationMethod[] = [
  isEven,
  isGreaterThan(0),
  isLessThan(100),
];
