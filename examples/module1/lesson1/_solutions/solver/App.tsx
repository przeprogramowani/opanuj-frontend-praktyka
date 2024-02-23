import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './calculator/functions';
import { Button } from './calculator/Button';
import { CalculationResult } from './calculator/CalculationResult';

// Could be split into separate components
const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calulateResult = (
    func: (a: number, b: number) => CalculationResult
  ) => {
    const calcResult = func(firstInput, secondInput);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstInput}
          onChange={(e) => setFirstInput(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInput}
          onChange={(e) => setSecondInput(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calulateResult(add)}>+</Button>
        <Button onClick={() => calulateResult(subtract)}>-</Button>
        <Button onClick={() => calulateResult(multiply)}>*</Button>
        <Button onClick={() => calulateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <p>{error}</p>
    </div>
  );
};

export default App;
