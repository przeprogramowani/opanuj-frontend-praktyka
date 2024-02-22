import { useState } from 'react';

type CalcFuncType = (a: number, b: number) => number | string;

export function useCalculate() {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);

  const [numC, setNumC] = useState<number | string>(0);

  const calcResult = (func: CalcFuncType) => setNumC(func(numA, numB));

  return { numA, numB, numC, setNumA, setNumB, calcResult };
}
