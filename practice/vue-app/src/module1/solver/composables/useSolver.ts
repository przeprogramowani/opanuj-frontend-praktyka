import { ref } from 'vue';
import { add, divide, multiply, subtract } from './functions.ts';

export const useSolver = () => {
  const numA = ref(0);
  const numB = ref(0);
  let result = ref(0);

  const calculate = (func: (a: number, b: number) => number) => {
    result.value = func(numA.value, numB.value);
  };

  const handleAdd = () => calculate(add);
  const handleSubtract = () => calculate(subtract);
  const handleMultiply = () => calculate(multiply);
  const handleDivide = () => calculate(divide);

  return {
    numA, numB, result, handleAdd, handleSubtract, handleMultiply, handleDivide
  };
};
