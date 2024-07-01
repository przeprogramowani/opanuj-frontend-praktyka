import React, { useState } from 'react';
import { sum, subtraction, divide, multiply, Result } from './functions';
import Button from './components/Button';
import {validateEmptyNumbers} from './utils/utils';
import {ERROR_NULL_NUMBER} from './utils/errorName';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const mathOperation = (func: (a: number, b: number) => Result ) => {

    if (!validateEmptyNumbers(numA, numB)) {
        setError(ERROR_NULL_NUMBER);
        return;
    }
    const result = func(numA, numB);
    if(!result.error) {
      setError('');
      setResult(result.result);
    } else {
      setError(result.error);
    }
   
    
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => mathOperation(sum)}>+</Button>
        <Button onClick={() => mathOperation(subtraction)}>-</Button>
        <Button onClick={() => mathOperation(multiply)}>*</Button>
        <Button onClick={() => mathOperation(divide)} >/</Button>
      </div>
      <div>Result: {result}</div>
      {error && <div>Error: {error}</div>}
    </div>
  );
};

export default App;
