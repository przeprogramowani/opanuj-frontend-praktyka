type NumericValidationMethod = (value: number) => boolean;
type StringValidationMethod = (value: string) => boolean;

const isValidInteger = (value: string) => {
  return value !== '' && Number.isInteger(Number(value));
};

export const isGreaterThan = (boundary: number): NumericValidationMethod => {
  return (value: number) => value > boundary;
};

export const isLesserThan = (boundary: number): NumericValidationMethod => {
  return (value: number) => value < boundary;
};

export const isEven: NumericValidationMethod = (input: number) =>
  input % 2 === 0;

export const validateMasturbate = (
  input: string,
  rules: NumericValidationMethod[]
): string => {
  if (!isValidInteger(input)) {
    return 'Invalid';
  }

  const isValid = rules.every((rule) => rule(Number(input)));
  console.log('🚀 ~ isValid:', isValid);

  if (!isValid) {
    return 'Invalid';
  }

  return 'Valid';
};
