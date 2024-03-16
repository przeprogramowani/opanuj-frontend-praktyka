<<<<<<< HEAD
type MethodsNumber = (value: number) => boolean;

const isNumber: MethodsNumber = (value) => Number.isNaN(value);
=======
export type MethodsNumber = (value: number) => boolean;

const isNumber: MethodsNumber = (value) => !Number.isNaN(value);
>>>>>>> 31f6bf41b0578c69292bbccaec743843f891d41b
const isIntegerValue: MethodsNumber = (value) => Number.isInteger(value);
const isLessThan: MethodsNumber = (value) => value < 100;
const isMoreThan: MethodsNumber = (value) => value > 0;
const isEven: MethodsNumber = (value) => value % 2 === 0;

<<<<<<< HEAD
const VALIDATOR_NUMBER = [
=======
export const VALIDATOR_NUMBER = [
>>>>>>> 31f6bf41b0578c69292bbccaec743843f891d41b
  isNumber,
  isIntegerValue,
  isLessThan,
  isMoreThan,
  isEven,
];
