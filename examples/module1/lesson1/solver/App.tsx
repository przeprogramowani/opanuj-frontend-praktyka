import React, { useState } from 'react';
import { addNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from './functions';

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
          onClick={() => doWork(addNumbers)}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(subtractNumbers)}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(multiplyNumbers)}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => doWork(divideNumbers)}
        >
          /
        </button>
      </div>
      <div>Result: {numC}</div>
    </div>
  );
};

export default App;

// TODO: refactor, który można zrobić:
//  1. Dodać style które się powtarzają (np. button) w kilku miejscach
//  2. Dodać osobne, reużywalne komponenty np. ButtonComponent
//  3. Bardziej rozbudowane sprawdzanie błędów. Zobaczenie czy są robione operacje na liczbach itd.
// Adnotacja: bardziej wypisuje to co jest do zrobienia bo używam Angulara i nie chcę tego tutaj poprawiać w całości