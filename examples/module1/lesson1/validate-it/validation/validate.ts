import { MESSAGE_ERROR_INVALID, MESSAGE_ERROR_INVALID_INPUT, MESSAGE_SUCCESS_VALID } from './messages';
import { isValid, isValidInteger } from './methods'

export const validate = (input: string): string => {
  if(!isValidInteger(input)) {
    return MESSAGE_ERROR_INVALID_INPUT
  }

  if (!isValid(Number(input))) {
    return MESSAGE_ERROR_INVALID
  }

  return MESSAGE_SUCCESS_VALID
}