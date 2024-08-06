import { ValidatorFn } from './validator-fn.ts';

export type Validator = {
  isValid: ValidatorFn
  text: string
}