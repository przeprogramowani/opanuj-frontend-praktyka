const greaterThan = (value: number) => (input: string | number):boolean => Number(input) > value

const lessThan = (value: number) => (input: string | number):boolean => Number(input) < value

const isNumber = (input: string | number ):boolean => !isNaN(Number(input));

const isEven = (input: string | number ):boolean => Number(input) % 2 === 0;

export { greaterThan, lessThan, isNumber, isEven };
