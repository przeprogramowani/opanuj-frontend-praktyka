import React, { useState } from 'react';
import { add, subtract, divide, multiply } from './functions';
import Input from './Input';
import Button from './Button.tsx';

const App = () => {
  const [param1, setParam1] = useState<number>(0);
  const [param2, setParam2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setResult(func(param1, param2));
  };

  return (
    <div>
      <div className='grid grid-cols-2 gap-x-4'>
        <Input value={param1} onChange={setParam1} />
        <Input value={param2} onChange={setParam2} />
      </div>
      <div className='grid grid-cols-4 gap-x-4 my-4'>
        <Button onClick={() => doWork(add)}>+</Button>
        <Button onClick={() => doWork(subtract)}>-</Button>
        <Button onClick={() => doWork(divide)}>*</Button>
        <Button onClick={() => doWork(multiply)}>/</Button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
