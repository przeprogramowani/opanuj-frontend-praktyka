
export const isValidInteger = (value: string): boolean => value !== '' && Number.isInteger(Number(value)) 
export const isGreaterThan = (value: number, boundary = 0): boolean => value > boundary
export const isLessThan = (value: number, boundary = 100): boolean => value < boundary
export const isEven = (value: number): boolean => value % 2 === 0
export const isValid = (value: number):boolean => isEven(value) && isLessThan(value) && isGreaterThan(value)