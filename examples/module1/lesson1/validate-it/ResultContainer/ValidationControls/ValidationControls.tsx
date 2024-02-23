import React from 'react';
import Button from './Button/Button.tsx';
import { validate } from './validator.ts';

type ValidationControlsProps = {
  numberToValidate: string;
  setNumberToValidate: React.Dispatch<React.SetStateAction<string>>;
  setResult: React.Dispatch<React.SetStateAction<string>>;
};

const ValidationControls: React.FC<ValidationControlsProps> = ({ numberToValidate, setNumberToValidate, setResult }) => {
  const doValidate = (func: (numberToValidate: number) => string) => {
    setResult(func(parseFloat(numberToValidate as string)));
  };

  const doClear = () => {
    setNumberToValidate('');
    setResult('');
  };

  return (
    <div className="grid grid-cols-2 gap-x-2">
      <Button
        id="validateButton"
        className="rounded-md text-lg bg-blue-200 hover:bg-blue-800 hover:text-white p-4 mt-4"
        text="Validate It!"
        onClick={() => doValidate(validate)}
      />
      <Button
        id="clearButton"
        className="rounded-md text-lg bg-red-200 hover:bg-red-800 hover:text-white p-4 mt-4"
        text="Clear!"
        onClick={() => doClear()}
      />
    </div>
  );
};

export default ValidationControls;