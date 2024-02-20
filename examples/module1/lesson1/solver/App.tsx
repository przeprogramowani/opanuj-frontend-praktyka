import { useState } from 'react';
import { sum, subtraction, multiplication, dividing } from './functions';
import { CustomButton } from './components';

const App = () => {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);

  const handleAction = (func: (a: number, b: number) => number) => {
    setResult(func(firstNumber, secondNumber));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={firstNumber}
          onChange={(e) => setFirstNumber(parseFloat(e.target.value))}
        />
        <input
          type="number"
          className="rounded-md shadow-md p-4"
          value={secondNumber}
          onChange={(e) => setSecondNumber(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <CustomButton text="+" handleClick={() => handleAction(sum)} />
        <CustomButton text="-" handleClick={() => handleAction(subtraction)} />
        <CustomButton
          text="*"
          handleClick={() => handleAction(multiplication)}
        />
        <CustomButton text="/" handleClick={() => handleAction(dividing)} />
      </div>
      <div>Result: {result}</div>
    </div>
  );
};

export default App;

/*
  // inferencja typow
  // zmiana nazwy funkcji
  // zmiana nazwy zmiennych
  // custom button component
*/
