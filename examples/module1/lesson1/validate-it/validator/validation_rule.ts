export type ValidationRule = (input: number) => boolean;

const isEven: ValidationRule = (input: number) => input % 2 === 0;
const isGreaterThan = (boundary: number): ValidationRule => {
  return (input: number) => input > boundary;
};
const isLessThan = (boundary: number): ValidationRule => {
  return (input: number) => input < boundary;
};

export const NUMBER_VALIDATORS: ValidationRule[] = [
  isEven,
  isGreaterThan(0),
  isLessThan(100),
];
