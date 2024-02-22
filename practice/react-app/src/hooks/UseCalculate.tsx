import { useState } from 'react';

export function useCalculate() {
  const [numA, setNumA] = useState<number>(0);
  const [numB, setNumB] = useState<number>(0);

  const [numC, setNumC] = useState<number | string>(0);

  const doWork = (func: (a: number, b: number) => number) => {
    setNumC(func(numA, numB));
  };

  return { numA, numB, numC, setNumA, setNumB, doWork };
}
