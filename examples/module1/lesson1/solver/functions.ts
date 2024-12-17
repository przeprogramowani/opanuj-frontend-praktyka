import type { OperationSign, OperationType } from './types';

type CalculationMethod = (a: number, b: number ) => number;
export interface CalculationStrategy {
  type: OperationType;
  calculate: CalculationMethod;
}
export const MAP_OPERATION_SIGN: Record<OperationType, OperationSign> = {
  'add': '+', 
  'divide': '/', 
  'multiply': '*', 
  'subtract': '-', 
}

export const calculations: Record<OperationType, CalculationStrategy> = {
  add: { type: "add", calculate: (a, b) => a + b, },
  subtract: { type: "subtract", calculate: (a, b) => a - b, },
  multiply: { type: "multiply", calculate: (a, b) => a * b, },
  divide: { type: "divide", calculate: (a, b) => a / b, }
}

export function calculate(type: OperationType, a: number, b: number):number {
  return calculations[type].calculate(a, b);
}
