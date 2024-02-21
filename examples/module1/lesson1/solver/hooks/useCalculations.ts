import { useState } from 'react';

export function useCalculations() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [result, setResult] = useState<number | string>(0);
  const [error, setError] = useState<string>('');

  const calculate = (
    func: (a: number, b: number) => [string | number, string | string]
  ) => {
    const [result, error] = func(value1, value2);
    setError(error as string);
    setResult(result as string);
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
