import { useState } from 'react';
import { operations, MathOperation } from './mathOperations';
import { Button } from './OperationButton';
import { OperationsPanel } from './OperationPanel';
import { NumericInput } from './NumericInput';

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const setNumber = (
    func: React.Dispatch<React.SetStateAction<number>>,
    value: number
  ) => {
    func(value);
  };

  const doWork = (func: MathOperation) => {
    setResult(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <NumericInput
          value={numA}
          onChange={(e) => setNumber(setNumA, parseFloat(e.target.value))}
        />
        <NumericInput
          value={numB}
          onChange={(e) => setNumber(setNumB, parseFloat(e.target.value))}
        />
      </div>
      <OperationsPanel
        operations={operations}
        viewFn={(op) => (
          <Button operationSign={op.sign} onClick={() => doWork(op.method)} />
        )}
      />
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
