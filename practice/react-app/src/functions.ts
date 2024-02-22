export function f1(a: number, b: number) {
  return a + b;
}
export function f2(a: number, b: number) {
  const ERROR_MESSAGE =
    "You can't subtract the smaller count from the larger one";
  if (a < b) return ERROR_MESSAGE;
  return a - b;
}
export function f3(a: number, b: number) {
  return a * b;
}

export function f4(a: number, b: number) {
  return a / b;
}
