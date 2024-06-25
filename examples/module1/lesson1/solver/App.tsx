import { useState } from 'react';
import { sum, sub, mul, div } from './calculator/functions';
import NumberInput from './components/NumberInput';
import OperationButton from './components/OperationButton';

const App = () => {
  const [firstOperand, setFirstOperand] = useState<number>(0);
  const [secondOperand, setSecondOperand] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculate = (func: (a: number, b: number) => number) => {
    setResult(func(firstOperand, secondOperand));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumberInput onChange={setFirstOperand} />
        <NumberInput onChange={setSecondOperand} />
      </div>
      <div className="grid grid-cols-4 my-4 gap-x-4">
        <OperationButton onClick={() => calculate(sum)}>+</OperationButton>
        <OperationButton onClick={() => calculate(sub)}>-</OperationButton>
        <OperationButton onClick={() => calculate(mul)}>*</OperationButton>
        <OperationButton
          onClick={() => {
            if (secondOperand === 0) {
              setResult('Cannot divide by zero');
              return;
            }
            calculate(div);
          }}
        >
          /
        </OperationButton>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
