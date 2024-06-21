const MAX_VALUE = 100;
const MIN_VALUE = 0;

const isEven = (number) => !(number % 2);
const isBigger = (number) => number > MIN_VALUE;
const isSmaller = (number) => number < MAX_VALUE;
const isInteger = (number) => Number.isInteger(number);

const methods = [isEven, isBigger, isSmaller, isInteger];

export { methods };