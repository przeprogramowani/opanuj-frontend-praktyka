const greaterThan = (value: number) => (input: string):boolean => Number(input) > value

const lessThan = (value: number) => (input: string):boolean => Number(input) < value

const isNumber = (input: string):boolean => !isNaN(Number(input));

const isEven = (input: string):boolean => Number(input) % 2 === 0;

export { greaterThan, lessThan, isNumber, isEven };
