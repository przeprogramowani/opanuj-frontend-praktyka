export const recalculate = (a: number, b: number, operation: string) => {
  switch (operation) {
    case 'addition':
      return a + b;
    case 'subtraction':
      return a - b;
    case 'multiplication':
      return a * b;
    case 'division':
      return a / b;
    default:
      return 0
  }
}
