import { useState } from 'react';
import { Button } from './calculator/Button';
import { type CalculationResult } from './calculator/CalculationResult';
import { add, divide, multiply, subtract } from './calculator/functions';

// Could be split into separate components
const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const calculateResult = (
    func: (a: number, b: number) => CalculationResult
  ) => {
    const calcResult = func(firstInput, secondInput);
    setResult(calcResult.error ? 0 : calcResult.result);
    setError(calcResult.error || '');
  };

  const parseInputValue = (value: string): number => {
    return value === '' ? 0 : parseFloat(value);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstInput || ''}
          onChange={(e) =>
            setFirstInput(parseInputValue(e.currentTarget.value))
          }
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondInput || ''}
          onChange={(e) =>
            setSecondInput(parseInputValue(e.currentTarget.value))
          }
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculateResult(add)}>+</Button>
        <Button onClick={() => calculateResult(subtract)}>-</Button>
        <Button onClick={() => calculateResult(multiply)}>*</Button>
        <Button onClick={() => calculateResult(divide)}>/</Button>
      </div>
      <div>Result: {result}</div>
      <p>{error}</p>
    </div>
  );
};

export default App;
