import { ValidatorFn } from '../types/validator-fn.ts';

export const isLowerThan = (maxValue: number): ValidatorFn => (value: number | string) => +value < maxValue