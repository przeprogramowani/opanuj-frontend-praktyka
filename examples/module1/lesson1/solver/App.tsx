import React, { useState } from 'react';
import {
  sum,
  substract,
  multiply,
  divide,
  CalculationResult,
} from './functions';
import { Button } from './Button';

const App = () => {
  const [firstInput, setFirstInput] = useState<number>(0);
  const [secondInput, setSecondInput] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculate = (func: (a: number, b: number) => CalculationResult) => {
    const calcResult = func(firstInput, secondInput);

    setResult(calcResult.result ? calcResult.result : 0);
    setError(calcResult.error ? calcResult.error : '');
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4'>
        <input
          type='number'
          className='rounded-md shadow-md p-4'
          value={firstInput}
          onChange={(e) => setFirstInput(parseFloat(e.target.value))}
        />
        <input
          type='number'
          className='rounded-md shadow-md p-4'
          value={secondInput}
          onChange={(e) => setSecondInput(parseFloat(e.target.value))}
        />
      </div>
      <div className='grid grid-cols-4 gap-x-4 my-4'>
        <Button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => calculate(sum)}
        >
          +
        </Button>
        <Button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => calculate(substract)}
        >
          -
        </Button>
        <Button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => calculate(multiply)}
        >
          *
        </Button>
        <Button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => calculate(divide)}
        >
          /
        </Button>
      </div>
      <div>Result: {result}</div>
      {error && <div>{error}</div>}
    </div>
  );
};

export default App;
