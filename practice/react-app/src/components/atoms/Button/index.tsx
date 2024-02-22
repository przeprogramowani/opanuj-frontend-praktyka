import { memo } from 'react';
import { Operation } from '../../../types/calculatorType';
import { MouseEventHandler } from 'react';

type ButtonProps = {
  operation: Operation;
  calcResult: (func: (a: number, b: number) => number) => void;
};

export const Button = memo<ButtonProps>(
  ({ operation, calcResult }: ButtonProps) => {
    return (
      <button
        className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
        onClick={calcResult as unknown as MouseEventHandler<HTMLButtonElement>}
      >
        {operation}
      </button>
    );
  }
);
