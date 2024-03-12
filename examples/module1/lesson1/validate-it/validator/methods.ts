export type MethodsNumber = (value: number) => boolean;

const isNumber: MethodsNumber = (value) => !Number.isNaN(value);
const isIntegerValue: MethodsNumber = (value) => Number.isInteger(value);
const isLessThan: MethodsNumber = (value) => value < 100;
const isMoreThan: MethodsNumber = (value) => value > 0;
const isEven: MethodsNumber = (value) => value % 2 === 0;

export const VALIDATOR_NUMBER = [
  isNumber,
  isIntegerValue,
  isLessThan,
  isMoreThan,
  isEven,
];
