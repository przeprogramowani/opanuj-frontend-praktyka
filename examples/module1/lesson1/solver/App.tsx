import React, { useState } from 'react';
import Button from './components/Button';
import { add, div, multi, sub } from './functions';

const App = () => {
  const [operandLeft, setOperandLeft] = useState<number>(0);
  const [operandRight, setOperandRight] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<boolean>(false);

  const operations = [
    { operationSign: '+', mathOperationFunction: add },
    { operationSign: '-', mathOperationFunction: sub },
    { operationSign: '*', mathOperationFunction: multi },
    { operationSign: '/', mathOperationFunction: div },
  ];

  const handleInputChange = (
    setOperand: React.Dispatch<React.SetStateAction<number>>,
    input: string
  ) => {
    setError(false);
    setOperand(parseFloat(input));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={operandLeft}
          onChange={(e) => handleInputChange(setOperandLeft, e.target.value)}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={operandRight}
          onChange={(e) => handleInputChange(setOperandRight, e.target.value)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {operations.map((operation, index) => (
          <Button
            key={index}
            setResult={setResult}
            setError={setError}
            mathOperationFunction={operation.mathOperationFunction}
            setOperandLeft={operandLeft}
            setOperandRight={operandRight}
          >
            {operation.operationSign}
          </Button>
        ))}
      </div>
      {!error && <div>Result: {result}</div>}
      {error && <div className="text-red-500">Nie dzielimy przez zero</div>}
    </div>
  );
};

export default App;
