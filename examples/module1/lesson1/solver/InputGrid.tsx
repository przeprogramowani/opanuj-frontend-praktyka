import React from 'react';
import Input from './Input';

interface InputGridProps {
  firstNumber: number;
  setFirstNumber: React.Dispatch<React.SetStateAction<number>>;
  secondNumber: number;
  setSecondNumber: React.Dispatch<React.SetStateAction<number>>;
}

const InputGrid: React.FC<InputGridProps> = ({ firstNumber, setFirstNumber, secondNumber, setSecondNumber }) => {
  return (
    <div className="grid grid-cols-2 gap-x-4">
      <Input value={firstNumber} onChange={(e) => setFirstNumber(parseFloat(e.target.value))} />
      <Input value={secondNumber} onChange={(e) => setSecondNumber(parseFloat(e.target.value))} />
    </div>
  );
};

export default InputGrid;