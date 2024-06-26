import React from 'react';
import { calculate } from '../functions';

interface ButtonProps {
  setResult: (a: number) => void;
  setError: (a: boolean) => void;
  mathOperationFunction: (a: number, b: number) => number;
  setOperandLeft: number;
  setOperandRight: number;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  setResult,
  setError,
  mathOperationFunction,
  setOperandLeft,
  setOperandRight,
  children,
}) => {
  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() =>
        calculate(
          setResult,
          setError,
          mathOperationFunction,
          setOperandLeft,
          setOperandRight
        )
      }
    >
      {children}
    </button>
  );
};

export default Button;
