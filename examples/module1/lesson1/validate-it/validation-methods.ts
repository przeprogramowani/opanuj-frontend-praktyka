function greaterThan(value: number, minValue: number = 0): boolean {
  return value >= minValue;
}

function smallerThan(value: number, maxValue: number = 100): boolean {
  return value <= maxValue;
}

function isEven(value: number): boolean {
  return value % 2 === 0;
}

export const validationMethods = [greaterThan, smallerThan, isEven];
