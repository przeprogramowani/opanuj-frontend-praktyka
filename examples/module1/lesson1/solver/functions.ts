
import { ERROR_DIVIDE_BY_ZERO } from "./utils/errorName";

export type Result = {
  result: number;
  error?: string;
};

export function sum(a: number, b: number): Result {
  return {result: a + b};
}
export function subtraction(a: number, b: number): Result {
  return {result: a - b};
}
export function multiply(a: number, b: number): Result {
  return {result: a * b};
}

export function divide(a: number, b: number): Result {
  return { result: a / b, error: b === 0 ? ERROR_DIVIDE_BY_ZERO : "" };
}
