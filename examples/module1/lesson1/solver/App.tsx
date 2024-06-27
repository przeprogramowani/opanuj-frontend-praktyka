import { useState } from 'react';
import { CalculationResult, buttons } from './helpers';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<CalculationResult | null>(null);

  const calculate = (
    operation: (a: number, b: number) => CalculationResult
  ) => {
    setResult(operation(firstNumber, secondNumber));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value) || 0)}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value) || 0)}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {buttons.map(({ sign, operation }) => (
          <button
            key={`${sign}-${operation}`}
            className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
            onClick={() => calculate(operation)}
          >
            {sign}
          </button>
        ))}
      </div>
      <div>Result: {result?.error ?? result?.total}</div>
    </div>
  );
};

export default App;
