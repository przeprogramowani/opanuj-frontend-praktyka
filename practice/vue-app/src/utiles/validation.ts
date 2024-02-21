export const greaterThan = (min: number) => (value: string | number): boolean => Number(value) > min;

export const lessThan = (max: number) => (value: string | number): boolean => Number(value) < max;

export const isEven = (value: string | number): boolean => Number(value) % 2 === 0;

export const isNumber = (value: string | number): boolean => !isNaN(Number(value));