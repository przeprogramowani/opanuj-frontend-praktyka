import { ValidatorFn } from '../types/validator-fn.ts';

export const isInteger= (): ValidatorFn  => (value: string | number) => {
  return value !== '' && Number.isInteger(Number(value))
}