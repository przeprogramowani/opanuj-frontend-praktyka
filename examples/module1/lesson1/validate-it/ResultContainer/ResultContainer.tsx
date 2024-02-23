import React from 'react';
import InputField from './InputField/InputField.tsx';
import ValidationControls from './ValidationControls/ValidationControls.tsx';

interface ResultContainerProps {
  numToVal: string,
  setNumToVal: React.Dispatch<React.SetStateAction<string>>,
  result: string,
  setResult: React.Dispatch<React.SetStateAction<string>>
}

const ResultContainer: React.FC<ResultContainerProps> = ({ numToVal, setNumToVal, result, setResult }) => (
  <div className="max-w-4xl mx-auto">
    <div className="flex flex-col">
      <InputField numberToValidate={numToVal} setNumberToValidate={setNumToVal} />
      <ValidationControls numberToValidate={numToVal} setNumberToValidate={setNumToVal} setResult={setResult} />
      <div className="text-lg mt-4">Result: {result}</div>
    </div>
  </div>
);

export default ResultContainer;