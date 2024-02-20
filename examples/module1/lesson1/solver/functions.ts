export function add(addend1: number, addend2: number) {
  return addend1 + addend2;
}
export function subtract(minued: number, subtrahend: number) {
  return minued - subtrahend;
}
export function multiply(multiplier: number, multiplicand: number) {
  return multiplier * multiplicand;
}
export function divide(
  dividend: number,
  divisor: number
): [boolean, string | number] {
  if (divisor === 0) {
    return [false, 'Divisor cannot be 0'];
  }
  return [true, dividend / divisor];
}
