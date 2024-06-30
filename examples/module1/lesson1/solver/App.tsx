import React, { useState } from 'react';
import { Button } from './components/Button.tsx';
import { Input } from './components/Input.tsx';
import { operations, operationTypes, divideError } from './consts/consts.ts';
import { OperationTypeProps } from './types/types.ts';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string | null>(null)

  const handleCalculate = (operationType: OperationTypeProps) => () => {
    if (operationType === operationTypes.divide && secondNumber === 0) {
      setResult(0)
      setError(divideError)

    } else {
      setResult(operations[operationType](firstNumber, secondNumber));
      setError(null);
    }
  };

  const handleFirstNumber = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setFirstNumber(parseFloat(e.target.value))
  }

  const handleSecondNumber = (e: React.ChangeEvent<HTMLInputElement>) =>  {
    setSecondNumber(parseFloat(e.target.value))
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input value={firstNumber} onChange={handleFirstNumber}/>
        <Input value={secondNumber} onChange={handleSecondNumber}/>
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {Object.values(operationTypes).map(type => (
            <Button onClick={handleCalculate(type)}>+</Button>
        ))}
      </div>
      <div>Result: {result}</div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
