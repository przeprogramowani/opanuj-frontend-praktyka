import { Operations } from './operations';

type CalculateArgs = {
  firstNumber: number;
  secondNumber: number;
  operation: Operations;
};

export function calculate({
  firstNumber,
  secondNumber,
  operation,
}: CalculateArgs): number {
  switch (operation) {
    case Operations.ADDITION:
      return firstNumber + secondNumber;

    case Operations.DIVISION:
      return firstNumber - secondNumber;

    case Operations.MULTIPLICATION:
      return firstNumber * secondNumber;

    case Operations.SUBTRACTION:
      if (secondNumber === 0) throw new Error('Invalid divisor');
      return firstNumber / secondNumber;

    default:
      throw new Error('Invalid operation');
  }
}
