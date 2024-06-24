import React, { useState } from 'react';
import { recalculate } from './functions';

const App = () => {
  const [firstNumberValue, setFirstNumberValue] = useState<number>(0);
  const [secondNumberValue, setSecondNumberValue] = useState<number>(0);
  const [resultNumberValue, setResultNumberValue] = useState<number | string>(0);

  const setResult = (operation: string) => {
    setResultNumberValue(recalculate(Number(firstNumberValue || 0), Number(secondNumberValue || 0), operation))
  }

  const operationButtons = [
    { label: '+', onClick: () => setResult( 'addition') },
    { label: '-', onClick: () => setResult( 'subtraction') },
    { label: '*', onClick: () => setResult( 'multiplication') },
    { label: '/', onClick: () => setResult( 'division') }
  ];

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumberValue}
          onChange={(e) => setFirstNumberValue(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumberValue}
          onChange={(e) => setSecondNumberValue(parseFloat(e.target.value))}
        />
      </div>

      <div className="grid grid-cols-4 gap-x-4 my-4">
        {operationButtons.map((button, index) => (
          <button
            key={index}
            className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>

      <div>Result: {resultNumberValue}</div>
    </div>
  );
};

export default App;
