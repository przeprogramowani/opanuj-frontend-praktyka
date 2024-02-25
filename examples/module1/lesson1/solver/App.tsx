import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './functions';

type Operation = {
  symbol: string;
  func: (a: number, b: number) => number;
};

type OperationButtonProps = {
  operation: Operation;
  onExecute: (func: (a: number, b: number) => number, operationSymbol: string) => void;
};

const operations: Operation[] = [
  { symbol: '+', func: add },
  { symbol: '-', func: subtract },
  { symbol: '*', func: multiply },
  { symbol: '/', func: divide },
];

const OperationButton: React.FC<OperationButtonProps> = ({ operation, onExecute }) => (
  <button
    className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
    onClick={() => onExecute(operation.func, operation.symbol)}
    aria-label={`Calculate ${operation.symbol}`}
  >
    {operation.symbol}
  </button>
);

const App = () => {
  const [state, setState] = useState({
    numA: 0,
    numB: 0,
    numC: 0,
    errorMessage: '',
  });

  const handleInputChange = (name: 'numA' | 'numB') => (e) => {
    setState((prevState) => ({
      ...prevState,
      [name]: parseFloat(e.target.value),
    }));
  };

  const doWork = (func: (a: number, b: number) => number, operationSymbol: string) => {
    setState((prevState) => {
      if (operationSymbol === '/' && prevState.numB === 0) {
        return { ...prevState, errorMessage: 'Cannot divide by zero xdd' };
      } else {
        const result = func(prevState.numA, prevState.numB);
        return { ...prevState, numC: result, errorMessage: '' };
      }
    });
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={state.numA}
          onChange={handleInputChange('numA')}
          aria-label="Input A"
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={state.numB}
          onChange={handleInputChange('numB')}
          aria-label="Input B"
        />
      </div>

      <div className="grid grid-cols-4 gap-x-4 my-4">
        {operations.map((operation, index) => (
          <OperationButton key={index} operation={operation} onExecute={doWork} />
        ))}
      </div>
      <div>Result: {state.errorMessage || state.numC}</div>
    </div>
  );
};

export default App;
