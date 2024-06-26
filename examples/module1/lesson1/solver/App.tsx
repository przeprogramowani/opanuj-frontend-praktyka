import React, { useState } from 'react';
import {
  add,
  CalculationResult,
  divide,
  multiply,
  subtract,
} from './functions';
import { Button } from './calculator/button';
import { InputNumber } from './calculator/input-number';

const App = () => {
  const [firstValue, setFirstValue] = useState<number>(0);
  const [secondValue, setSecondValue] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculate = (
    func: (a: number, b: number) => CalculationResult
  ): void => {
    const calcResult = func(firstValue, secondValue);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <InputNumber value={firstValue} onChange={setFirstValue} />
        <InputNumber value={secondValue} onChange={setSecondValue} />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(add)}>+</Button>
        <Button onClick={() => calculate(subtract)}>-</Button>
        <Button onClick={() => calculate(multiply)}>*</Button>
        <Button onClick={() => calculate(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      {error && <p>{error}</p>}
    </div>
  );
};

export default App;
