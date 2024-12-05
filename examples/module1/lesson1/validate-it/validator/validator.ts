import { isValidInteger, type NumericValidationMethod } from "./methods"
import {MESSAGE_VALID, MESSAGE_INVALID_INTEGER, MESSAGE_INVALID_NUMBER} from './messages'

const validate = (input: string, validators: NumericValidationMethod[]): string => {
  if (!isValidInteger(input)) {
    return MESSAGE_INVALID_INTEGER;
  }

  const isValidRange = validators.every(validatorFn => validatorFn(Number(input)))

  if (!isValidRange) {
    return MESSAGE_INVALID_NUMBER;
  }

  return MESSAGE_VALID
}

export {
  validate,
}