import { useState } from 'react';
import Result from './Result';
import InputGrid from './InputGrid';
import OperationButtonsGrid from './OperationButtonsGrid';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  return (
    <div>
      <InputGrid firstNumber={firstNumber} setFirstNumber={setFirstNumber} secondNumber={secondNumber}
                 setSecondNumber={setSecondNumber} />
      <OperationButtonsGrid firstNumber={firstNumber} secondNumber={secondNumber} setResult={setResult} />
      <Result result={result} />
    </div>
  );
};

export default App;