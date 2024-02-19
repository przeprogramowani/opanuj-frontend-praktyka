import React, { useState } from 'react';
import { f1, f2, f3, f4 } from './functions';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(f1)}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(f2)}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(f3)}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(f4)}
        >
          /
        </button>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;
