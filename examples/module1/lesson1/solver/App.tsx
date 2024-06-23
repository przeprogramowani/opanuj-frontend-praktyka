import React, { useState } from 'react';
import { addNumbers, subtractNumbers, multiplicationNumbers, dividingNumbers, clearAll } from './functions';

const App = () => {
  const [firstNumber, setFirstNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [operator, setOperator] = useState<string>("Here comes your choose operator!");
  const [result, setResult] = useState<number | string>(0);

  const calculateNumbers = (func: (firstNumber: number, secondNumber: number) => number) => {
    if (func === dividingNumbers && secondNumber === 0) {
      setResult("Do not divide by zero!");
    } else {
      setResult(func(firstNumber, secondNumber));
    }
  };

  const PLUS_OPERATOR = "+";
  const MINUS_OPERATOR = "-";
  const MULTIPLY_OPERATOR = "*";
  const DIVIDE_OPERATOR = "/";

  return (
    <React.Fragment>
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
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => {
            calculateNumbers(addNumbers)
            setOperator(PLUS_OPERATOR)
          }}
        >
          {PLUS_OPERATOR}
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => {
            calculateNumbers(subtractNumbers)
            setOperator(MINUS_OPERATOR)
          }}
        >
          {MINUS_OPERATOR}
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => {
            calculateNumbers(multiplicationNumbers)
            setOperator(MULTIPLY_OPERATOR)
          }}
        >
          {MULTIPLY_OPERATOR}
        </button>
        <button

          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => {
            calculateNumbers(dividingNumbers)
            setOperator(DIVIDE_OPERATOR)
          }}
        >
          {DIVIDE_OPERATOR}
        </button>
      </div>
      <div>First number: {firstNumber}</div>
      <div>Operator: {operator}</div>
      <div>Second number: {secondNumber}</div>
      <div>-----------------------------------</div>
      <div>Result: {result}</div>
      <button 
      className="bg-red-300 my-2 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
      onClick={() => {clearAll(setFirstNumber, setSecondNumber, setResult, setOperator)}}
      >
        Clear All!
        </button>
    </React.Fragment>
  );
};

export default App;
