import { failingDivision } from './errors';

export function addition(a: number, b: number) {
  return a + b;
}
export function subtraction(a: number, b: number) {
  return a - b;
}
export function multiplication(a: number, b: number) {
  return a * b;
}

export function division(a: number, b: number): number | string {
  if (b === 0) {
    return failingDivision;
  }
  return a / b;
}
