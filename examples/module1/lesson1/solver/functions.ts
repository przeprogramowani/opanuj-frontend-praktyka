export function sum(a: number, b: number): number {
  return a + b;
}
export function sub(a: number, b: number): number {
  return a - b;
}
export function multiply(a: number, b: number): number {
  return a * b;
}

export function divide(a: number, b: number): number | string {
  if (b === 0) return 'Cannot divide by zero';
  return a / b;
}
