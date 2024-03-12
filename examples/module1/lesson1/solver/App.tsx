import { useState } from 'react';
import {
  addition,
  subtraction,
  multiplication,
  division,
  type CalculateMethods,
} from './calculator/functions';
import Button from './calculator/Button';
import Input from './calculator/Input';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculate = (func: CalculateMethods) => {
    setResult(func(firstNumber, secondNumber));
    setFirstNumber(0);
    setSecondNumber(0);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          val={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <Input
          val={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => calculate(addition)}>+</Button>
        <Button onClick={() => calculate(subtraction)}>-</Button>
        <Button onClick={() => calculate(multiplication)}>*</Button>
        <Button onClick={() => calculate(division)}>/</Button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
