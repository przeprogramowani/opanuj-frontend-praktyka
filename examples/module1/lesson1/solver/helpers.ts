export interface CalculationResult {
  total: number;
  error?: string;
}

function add(a: number, b: number): CalculationResult {
  return { total: a + b };
}

function subtract(a: number, b: number): CalculationResult {
  return { total: a - b };
}

function multiply(a: number, b: number): CalculationResult {
  return { total: a * b };
}

function divide(a: number, b: number): CalculationResult {
  return { total: a / b, error: b === 0 ? 'Division by zero' : undefined };
}

export const buttons = [
  { sign: '+', operation: add },
  { sign: '-', operation: subtract },
  { sign: '*', operation: multiply },
  { sign: '/', operation: divide },
];
