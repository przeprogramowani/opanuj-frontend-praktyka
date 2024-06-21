import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import { calculate } from './calculate';
import { Operations } from './operations';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCalculation = (operation: Operations) => () => {
    try {
      const calcResult: number | string = calculate({
        firstNumber,
        secondNumber,
        operation,
      });
      setResult(calcResult);
      setError(null); // Clear previous errors
    } catch (err) {
      setError((err as Error).message);
      setResult(null); // Clear previous result
    }
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          type="number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <Input
          type="number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={handleCalculation(Operations.ADDITION)}>+</Button>
        <Button onClick={handleCalculation(Operations.DIVISION)}>-</Button>
        <Button onClick={handleCalculation(Operations.MULTIPLICATION)}>
          *
        </Button>
        <Button onClick={handleCalculation(Operations.SUBTRACTION)}>/</Button>
      </div>
      <div>{result && `Result: ${result}`}</div>
      <div>{error && `Error: ${error}`}</div>
    </div>
  );
};

export default App;
