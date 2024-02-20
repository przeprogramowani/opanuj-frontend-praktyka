import React, { useState } from 'react';
import { addNums, divideNums, subtractNums, multiplyNums } from './functions';

const App = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const mathOperations = [
    { operation: addNums, symbol: '+' },
    { operation: divideNums, symbol: '/' },
    { operation: subtractNums, symbol: '-' },
    { operation: multiplyNums, symbol: '*' },
  ];

  const calculate = (func: (a: number, b: number) => number) => {
    setResult(func(num1, num2));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={num1}
          onChange={(e) => setNum1(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={num2}
          onChange={(e) => setNum2(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {mathOperations.map((mathOperation) => {
          const { operation, symbol } = mathOperation;
          return (
            <button
              className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
              onClick={() => calculate(operation)}
            >
              {symbol}
            </button>
          );
        })}
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
