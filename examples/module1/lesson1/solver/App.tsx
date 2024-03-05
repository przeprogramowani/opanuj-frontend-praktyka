import React, { useState } from 'react';
import { add, subtract, divide, multiply } from './functions';
import Input from './components/Input';
import Button from './components/Button';
import Operations from './components/Operations';
import Inputs from './components/Inputs';

const App = () => {
  const [param1, setParam1] = useState<number>(0);
  const [param2, setParam2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const calculate = (func: (a: number, b: number) => number) => {
    try {
      setResult(func(param1, param2));
    } catch (e) {
      setResult('Error');
    }
  };

  return (
    <div>
      <Inputs>
        <Input value={param1} onChange={setParam1} />
        <Input value={param2} onChange={setParam2} />
      </Inputs>
      <Operations>
        <Button onClick={() => calculate(add)}>+</Button>
        <Button onClick={() => calculate(subtract)}>-</Button>
        <Button onClick={() => calculate(multiply)}>*</Button>
        <Button onClick={() => calculate(divide)}>/</Button>
      </Operations>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
