import {
  VALIDATOR_NUMBER_MESSAGE_INVALID,
  VALIDATOR_NUMBER_MESSAGE_VALID,
} from './messages';
import { MethodsNumber } from './methods';

export const validator = <T extends MethodsNumber[]>(
  validators: T,
  value: string
) => {
  const validateNumbers = validators.every((fn) => fn(Number(value)));

  if (!validateNumbers) {
    return VALIDATOR_NUMBER_MESSAGE_INVALID;
  }

  return VALIDATOR_NUMBER_MESSAGE_VALID;
};
