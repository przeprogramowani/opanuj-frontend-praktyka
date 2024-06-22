export type CalculationResult = {
  result: number;
  error?: string;
};

export function sum(firstInput: number, secondInput: number): CalculationResult {
  return {
    result: firstInput + secondInput
  };
}
export function substract(firstInput: number, secondInput: number): CalculationResult {
  return {
    result: firstInput - secondInput
  };
}
export function multiply(firstInput: number, secondInput: number): CalculationResult {
  return {
    result: firstInput * secondInput
  }
}

export function divide(firstInput: number, secondInput: number): CalculationResult {
  return {
    result: secondInput !== 0 ? firstInput / secondInput: 0,
    error: secondInput === 0 ? 'Cannot divide by zero' : ''
  };
}
