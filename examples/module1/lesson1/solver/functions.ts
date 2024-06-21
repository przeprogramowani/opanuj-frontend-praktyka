export type CalculationResult = {
  result: number;
  error?: string;
};

export function add(a: number, b: number): CalculationResult {
  return { result: a + b };
}
export function subtract(a: number, b: number): CalculationResult {
  return { result: a - b };
}
export function multiply(a: number, b: number): CalculationResult {
  return { result: a * b };
}

export function divide(a: number, b: number): CalculationResult {
  return { result: a / b, error: b === 0 ? 'Divide by 0 is imposible' : '' };
}
