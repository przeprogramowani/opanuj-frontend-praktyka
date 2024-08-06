import  { useState } from 'react';
import {addition,  multiplication, division, subtraction} from './functions';
import {Input} from "./components/Input.tsx";
import {Button} from "./components/Button.tsx";
import {Result} from "./types/result.ts";

const App = () => {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);
  const [calculation, setCalculation] = useState<Result>({result: 0});
  
  const inputClass = "rounded-md shadow-md p-4";
  const buttonClass = "bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md";

  const doWork = (func: (a: number, b: number) => Result) => {
    setCalculation(func(numA, numB));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <Input value={numA} className={inputClass} onChange={(e) => setNumA(parseFloat(e.target.value))}/>
        <Input value={numB} className={inputClass} onChange={(e) => setNumB(parseFloat(e.target.value))}/>
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <Button text="+" className={buttonClass} onClick={() =>doWork(addition)}/>
        <Button text="-" className={buttonClass} onClick={() =>doWork(subtraction)}/>
        <Button text="*" className={buttonClass} onClick={() =>doWork(multiplication)}/>
        <Button text="/" className={buttonClass} onClick={() =>doWork(division)}/>
      </div>
      <div>Result: { calculation.error ?? calculation.result }</div>
    </div>
  );
};

export default App;
