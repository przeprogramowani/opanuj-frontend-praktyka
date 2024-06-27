export const add = (operandLeft: number, operandRight: number) => {
  return operandLeft + operandRight;
};
export const sub = (operandLeft: number, operandRight: number) => {
  return operandLeft - operandRight;
};
export const multi = (operandLeft: number, operandRight: number) => {
  return operandLeft * operandRight;
};

export const div = (operandLeft: number, operandRight: number) => {
  return operandLeft / operandRight;
};

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
