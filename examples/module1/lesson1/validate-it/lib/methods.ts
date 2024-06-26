type StringValidatorMethod = (input: string) => boolean;
export type NumberValidatorMethod = (range: number) => boolean;

export const isInteger: StringValidatorMethod = (input: string) =>
  input !== '' && Number.isInteger(Number(input));

export const isLessThan =
  (range: number): NumberValidatorMethod =>
  (input: number): boolean => {
    return input < range;
  };

export const isGreaterThan =
  (range: number): NumberValidatorMethod =>
  (input: number): boolean =>
    input > range;

export const isEven: NumberValidatorMethod = (input: number) => input % 2 === 0;

export const NUMBER_VALIDATORS = [isGreaterThan(0), isEven, isLessThan(100)];
