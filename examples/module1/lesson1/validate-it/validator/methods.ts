export type NumericValidationMethod = (input: number) => boolean;
export type StringValidationMethod = (input: string) => boolean;

const isEven = (input: number): boolean => input % 2 === 0;
const isGreaterThan = (min: number): NumericValidationMethod => (input: number) => input > min;
const isLessThan = (limit: number): NumericValidationMethod => (input: number) => input < limit;

export const isValidInteger: StringValidationMethod = (input: string): boolean => input != '' && Number.isInteger(Number(input));

export const VALIDATORS: NumericValidationMethod[] = [
  isEven,
  isGreaterThan(0),
  isLessThan(100),
] 