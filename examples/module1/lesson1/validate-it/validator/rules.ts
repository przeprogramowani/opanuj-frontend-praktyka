import { VALIDATION_INFO } from './consts';

function checkIfInteger(value: number) {
    const result = Number.isInteger(Number(value));

    return {
        result,
        output: result ? VALIDATION_INFO.VALID : VALIDATION_INFO.INVALID_EMPTY,
    };
}

function checkIfIsNotEmpty(value: number | string) {
    const result = value !== '';
    
    return {
        result,
        output: result ? VALIDATION_INFO.VALID : VALIDATION_INFO.INVALID_EMPTY,
    }
}

function checkIfIsInRange(value: number) {
    const result = Number(value) >= 0 && Number(value) <= 100;

    return {
        result,
        output: result ? VALIDATION_INFO.VALID : VALIDATION_INFO.INVALID_NUMBER,
    }
}

function checkIfIsEven(value: number) {
    const result = Number(value) % 2 === 0;

    return {
        result,
        output: result ? VALIDATION_INFO.VALID : VALIDATION_INFO.INVALID_NUMBER,
    }
}

export const validationMethods = [
    checkIfInteger,
    checkIfIsNotEmpty,
    checkIfIsInRange,
    checkIfIsEven,
]