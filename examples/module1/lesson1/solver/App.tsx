import React, { useState } from 'react';
import { add, subtract, multiply, divide } from './functions';
import { Button } from './components/Button';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const setFirstNumberValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNumber(parseFloat(event.target.value));
  }

  const setSecondNumberValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondNumber(parseFloat(event.target.value));
  }

  const addNumbers = () => {
    setResultValue(add(firstNumber, secondNumber));
  }

  const subtractNumbers = () => {
    setResultValue(subtract(firstNumber, secondNumber));
  }

  const multiplyNumbers = () => {
    setResultValue(multiply(firstNumber, secondNumber));
  }

  const divideNumbers = () => {
    if (secondNumber === 0) return;
    setResultValue(divide(firstNumber, secondNumber));
  }

  const setResultValue = (value: number) => {
    setResult(value.toFixed(2));
  }

  return (
    <main>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={setFirstNumberValue}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={setSecondNumberValue}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button
          onClick={addNumbers}
        >
          +
        </Button>
        <Button
          onClick={subtractNumbers}
        >
          -
        </Button>
        <Button
          onClick={multiplyNumbers}
        >
          *
        </Button>
        <Button
          onClick={divideNumbers}
        >
          /
        </Button>
      </div>
      <span>Result: {result}</span>
    </main>
  );
};

export default App;
