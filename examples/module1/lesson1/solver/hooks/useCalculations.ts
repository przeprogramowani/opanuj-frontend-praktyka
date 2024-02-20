import { useState } from 'react';

export function useCalculations() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculate = (
    func: (a: number, b: number) => number | [boolean, string | number]
  ) => {
    const result = func(value1, value2);
    if (Array.isArray(result) && !result[0]) {
      setError(result[1] as string);
      setResult('');
      return;
    }
    setResult(Array.isArray(result) ? result[1] : result);
    setError('');
  };

  return {
    value1,
    value2,
    result,
    error,
    setValue1,
    setValue2,
    calculate,
  };
}
