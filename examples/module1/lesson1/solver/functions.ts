import {Result} from "./types/result.ts";

export function addition(a: number, b: number): Result {
  return {result: a + b};
}
export function subtraction(a: number, b: number): Result {
  return {result: a - b};
}
export function multiplication(a: number, b: number): Result {
  return {result: a * b};
}

export function division(a: number, b: number): Result {
  return {result: a / b, error: b === 0 ? "Cannot divide by 0" : undefined  };
}
