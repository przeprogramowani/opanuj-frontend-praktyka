import { ValidatorFn } from '../types/validator-fn.ts';

export const isHigherThan  = (minValue: number | string): ValidatorFn => (value: number | string) => +value > +minValue;

