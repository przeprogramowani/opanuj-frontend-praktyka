import React, { useState } from 'react';
import { add, subtract, divide, multiply } from './functions';

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
        <input
          type='number'
          className='rounded-md shadow-md p-4'
          value={param1}
          onChange={(e) => setParam1(parseFloat(e.target.value))}
        />
        <input
          type='number'
          className='rounded-md shadow-md p-4'
          value={param2}
          onChange={(e) => setParam2(parseFloat(e.target.value))}
        />
      </div>
      <div className='grid grid-cols-4 gap-x-4 my-4'>
        <button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => doWork(add)}
        >
          +
        </button>
        <button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => doWork(subtract)}
        >
          -
        </button>
        <button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => doWork(divide)}
        >
          *
        </button>
        <button
          className='bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md'
          onClick={() => doWork(multiply)}
        >
          /
        </button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
