// for simplicity we assume that the value is a string

export function isFilled(value: string) {
  return value !== '';
}

export function isInteger(value: string) {
  return value !== null && Number.isInteger(+value);
}

export function isGreatherThan(value: string, min: number) {
  return +value > min;
}

export function isLessThan(value: string, max: number) {
  return +value < max;
}

export function isEven(value: string) {
  return +value % 2 === 0;
}
