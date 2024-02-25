import React, { useState } from 'react';
import operations from './operations.ts'

const App = () => {
  const [x, setX] = useState<number>(0);
  const [y, setY] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={x}
          onChange={(e) => setX(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={y}
          onChange={(e) => setY(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {operations.map(({ execution, operator })=>{
          return (
            <button
              className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
              onClick={() => {
                setResult(execution(x, y));
              }}
            >
              {operator}
            </button>
          )
        })}
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
