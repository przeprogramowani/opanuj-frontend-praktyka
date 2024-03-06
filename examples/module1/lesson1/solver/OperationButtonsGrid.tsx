import React from 'react';
import { add, divide, multiply, substract } from './functions';
import OperationButton from './OperationButton';

interface OperationButtonsGridProps {
  firstNumber: number;
  secondNumber: number;
  setResult: React.Dispatch<React.SetStateAction<number | string>>;
}

const OperationButtonsGrid: React.FC<OperationButtonsGridProps> = ({ firstNumber, secondNumber, setResult }) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      <OperationButton operation={add} label="+" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
      <OperationButton operation={substract} label="-" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
      <OperationButton operation={multiply} label="*" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
      <OperationButton operation={divide} label="/" firstNumber={firstNumber} secondNumber={secondNumber} result={setResult} />
    </div>
  );
};

export default OperationButtonsGrid;