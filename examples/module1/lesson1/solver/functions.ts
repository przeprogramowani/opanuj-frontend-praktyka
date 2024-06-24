export function add(a: number, b: number) {
  return a + b;
}
export function sub(a: number, b: number) {
  return a - b;
}
export function multi(a: number, b: number) {
  return a * b;
}

export function div(a: number, b: number) {
  return a / b;
}

export const calculate = (
  setResult: (a: number) => void,
  setError: (a: boolean) => void,
  mathOperationFunction: (a: number, b: number) => number,
  operandLeft: number,
  operandRight: number
) => {
  if (operandRight === 0 && mathOperationFunction.name === 'div') {
    setError(true);
  } else {
    setError(false);
    setResult(mathOperationFunction(operandLeft, operandRight));
  }
};
