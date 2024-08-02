import { useState } from 'react';
import { sum, sub, multiply, divide } from './functions';
import Button from './components/Button';
import Input from './components/Input';

const App = () => {
  const [firstDigit, setFirstDigit] = useState<number>(0);
  const [secondDigit, setSecondDigit] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setResult(func(firstDigit, secondDigit));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input
          value={firstDigit}
          onChange={(e) => setFirstDigit(parseFloat(e.target.value))}
        />
        <Input
          value={secondDigit}
          onChange={(e) => setSecondDigit(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button onClick={() => doWork(sum)}> + </Button>
        <Button onClick={() => doWork(sub)}> - </Button>
        <Button onClick={() => doWork(multiply)}> * </Button>
        <Button onClick={() => doWork(divide)}> / </Button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;
