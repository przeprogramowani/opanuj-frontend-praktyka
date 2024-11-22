import React, { useState } from 'react';
import { addition, subtraction, multiplication, division } from './calculations';
import Button from './components/Button';
import Input from './components/Input';

const Calculator = () => {
    const [numA, setNumA] = useState<number>(0);
    const [numB, setNumB] = useState<number>(0);
    const [resultNumber, setResultNumber] = useState<number | string>(0);

    const doWork = (func: (a: number, b: number) => number | string) => {
        setResultNumber(func(convertToNumber(numA), convertToNumber(numB)));
    };

    const convertToNumber = (value: number) => {
        return isNaN(value) ? 0 : value;
    }

    return (
        <div>
            <div className="grid grid-cols-2 gap-x-4">
                <Input value={numA} onChange={(e) => setNumA(parseFloat(e.target.value))} />
                <Input value={numB} onChange={(e) => setNumB(parseFloat(e.target.value))} />
            </div>
            <div className="grid grid-cols-4 gap-x-4 my-4">
                <Button callback={() => doWork(addition)}>+</Button>
                <Button callback={() => doWork(subtraction)}>-</Button>
                <Button callback={() => doWork(multiplication)}>*</Button>
                <Button callback={() => doWork(division)}>/</Button>
            </div>
            <div>{typeof resultNumber === "string" ? resultNumber : `Result: ${resultNumber}`}</div>
        </div>
    )
}

export default Calculator;