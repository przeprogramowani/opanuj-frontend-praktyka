export type ValidationMethod = (value: number) => boolean;

export const isGreaterThanZero: ValidationMethod = (value: number) => value > 0;
export const isLessThan100: ValidationMethod = (value: number) => value < 100;
export const isEven: ValidationMethod = (value: number) => value % 2 === 0;
