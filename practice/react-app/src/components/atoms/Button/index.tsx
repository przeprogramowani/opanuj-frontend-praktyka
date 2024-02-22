import { memo } from 'react';
import { Operation } from '../../../types/calculatorType';

type ButtonProps = {
  operation: Operation;
  doWork: (func: (a: number, b: number) => number) => void;
};

export const Button = memo<ButtonProps>(
  ({ operation, doWork }: ButtonProps) => {
    return (
      <button
        className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
        onClick={doWork}
      >
        {operation}
      </button>
    );
  }
);
