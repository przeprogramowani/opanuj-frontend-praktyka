import { Validator } from './types/validator.ts';
import { isInteger } from './functions/is-integer.ts';
import { isHigherThan } from './functions/is-higher-than.ts';
import { isLowerThan } from './functions/is-lower-than.ts';

export const INPUT_VALIDATORS: Validator[] = [
  {isValid: isInteger(), text: "Value must be correct integer"},
  {isValid: isHigherThan(0), text: "Value must be greater than 0"},
  {isValid: isLowerThan(100), text: "Value must be lower than 100"}
];