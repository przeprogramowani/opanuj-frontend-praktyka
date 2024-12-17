import React, { useState } from 'react';
import { calculate, calculations } from './functions';
import type { OperationType } from './types';
import OperationButton from './components/OperationButton';
import { validate } from './validation/validation';

const App: React.FC = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [numC, setNumC] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const handleCalculation = (type: OperationType) => {
    const validationError = validate(type, numA, numB);
    
    if (validationError) {
      setError(validationError);
      return;
    }

    setNumC(calculate(type, numA, numB));
    setError('')
  };

  const parseValue = (value: string):number => value === '' ? 0 : parseFloat(value);

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numA}
          onChange={(e) => setNumA(parseValue(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={numB}
          onChange={(e) => setNumB(parseValue(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        {Object.keys(calculations).length > 0 && Object.keys(calculations).map((type) => (
          <OperationButton 
            key={type} 
            type={type as OperationType}
            onClickFn={() => handleCalculation(type as OperationType)} />
        ))}
      </div>
      {error && <div>{error}</div>}
      {!error && <div>Result: {numC}</div>}
    </div>
  );
};

export default App;
