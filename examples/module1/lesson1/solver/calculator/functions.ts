export type CalculateMethods = (a: number, b: number) => number;

export const addition: CalculateMethods = (a, b) => {
  return a + b;
};
export const subtraction: CalculateMethods = (a, b) => {
  return a - b;
};

export const multiplication: CalculateMethods = (a, b) => {
  return a * b;
};

export const division: CalculateMethods = (a, b) => {
  return a / b;
};
