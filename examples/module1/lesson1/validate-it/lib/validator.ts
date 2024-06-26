import {
  MESSAGE_ERROR_INPUT_INT,
  MESSAGE_ERROR_INPUT_INVALID,
  MESSAGE_ERROR_INPUT_VALID,
} from './constants';
import { isInteger, NumberValidatorMethod } from './methods';

export const validate = (
  input: string,
  validators: NumberValidatorMethod[]
): string => {
  if (!isInteger(input)) {
    return MESSAGE_ERROR_INPUT_INT;
  }

  const isValidatedMethod = validators.every((validateFn) =>
    validateFn(Number(input))
  );

  if (!isValidatedMethod) {
    return MESSAGE_ERROR_INPUT_INVALID;
  }

  return MESSAGE_ERROR_INPUT_VALID;
};
