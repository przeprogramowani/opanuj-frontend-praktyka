type InputValidator = (value: string) => boolean;

type ValidatorWithMessage = {
  validator: InputValidator;
  message: string;
};

export type Validators = Array<ValidatorWithMessage>;

export const isInRange: InputValidator = (input: string): boolean => {
  const value = Number(input);
  return value > 0 && value < 100;
};

export const isEven: InputValidator = (input: string): boolean => {
  const value = Number(input);
  return value % 2 === 0;
};

export const isValidInteger: InputValidator = (value: string): boolean => {
  return (
    value !== '' && !isNaN(Number(value)) && Number.isInteger(Number(value))
  );
};
