import { validator } from './validator';

const isDivisibleBy2 = (value: number) => value % 2 === 0;
// other example
const isDivisibleBy3 = (value: number) => value % 3 === 0;

validator([isDivisibleBy2, isDivisibleBy3, () => true]);
