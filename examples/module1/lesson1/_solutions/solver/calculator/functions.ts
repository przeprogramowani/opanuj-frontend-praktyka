import { CalculationResult } from './CalculationResult';

export function add(addend1: number, addend2: number): CalculationResult {
  return { result: addend1 + addend2 };
}

export function subtract(
  minuend: number,
  subtrahend: number
): CalculationResult {
  return { result: minuend - subtrahend };
}

export function multiply(factor1: number, factor2: number): CalculationResult {
  return { result: factor1 * factor2 };
}

export function divide(dividend: number, divisor: number): CalculationResult {
  return {
    result: dividend / divisor,
    error: divisor === 0 ? 'Cannot divide by zero' : undefined,
  };
}
