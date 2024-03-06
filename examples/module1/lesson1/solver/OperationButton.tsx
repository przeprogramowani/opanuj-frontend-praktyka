import React from 'react';

interface OperationButtonProps {
  operation: (a: number, b: number) => number;
  label: string;
  firstNumber: number;
  secondNumber: number;
  result: React.Dispatch<React.SetStateAction<number | string>>;
}

const OperationButton: React.FC<OperationButtonProps> = ({ operation, label, firstNumber, secondNumber, result }) => {
  const doWork = () => {
    result(operation(firstNumber, secondNumber));
  };

  return (
    <button
      className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={doWork}
    >
      {label}
    </button>
  );
};

export default OperationButton;