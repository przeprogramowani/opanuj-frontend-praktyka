import { handleSum, handleSubtract, handleMultiply, handleDivide } from '../utils/utils.ts'
import { OperationTypeProps } from '../types/types.ts';

export const operationTypes: Record<string, OperationTypeProps> = {
    sum: 'sum',
    substr: 'substr',
    multiply: 'multiply',
    divide: 'divide'
}

export const operations: Record<OperationTypeProps, (a: number, b: number) => number> = {
    sum: (a: number, b: number) => handleSum(a, b),
    substr: (a: number, b: number) => handleSubtract(a, b),
    multiply: (a: number, b: number) => handleMultiply(a, b),
    divide: (a: number, b: number) => handleDivide(a, b),
}

export const divideError: string = 'Cannot divide by zero'