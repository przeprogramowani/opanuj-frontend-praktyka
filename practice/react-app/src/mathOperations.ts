export type MathOperation = (a: number, b: number) => number;
export type OperationType = {
  sign: '+' | '-' | '*' | '/';
  method: MathOperation;
};

const add: MathOperation = (a, b) => {
  return a + b;
};
const substract: MathOperation = (a, b) => {
  return a - b;
};
const multiply: MathOperation = (a, b) => {
  return a * b;
};

const divide: MathOperation = (a, b) => {
  return a / b;
};

export const operations: OperationType[] = [
  { sign: '+', method: add },
  { sign: '-', method: substract },
  { sign: '*', method: multiply },
  { sign: '/', method: divide },
];
