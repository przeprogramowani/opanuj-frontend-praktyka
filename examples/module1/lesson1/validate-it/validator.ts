import { MGS_NUMBER_NOT_EVEN, MSG_INVALID_INPUT, MSG_NUMBER_NOT_IN_RANGE, MSG_VALID_INPUT } from "./messages";
import { Validators, isEven, isInRange, isValidInteger } from "./methods";

const validators: Validators = [
  {
    validator: isValidInteger,
    message: MSG_INVALID_INPUT,
  },
  {
    validator: isInRange,
    message: MSG_NUMBER_NOT_IN_RANGE,
  },
  {
    validator: isEven,
    message: MGS_NUMBER_NOT_EVEN,
  },
];

export function validateInput(input: string): string {
  const failedValidator = validators.find(({ validator }) => !validator(input));
  return failedValidator ? failedValidator.message : MSG_VALID_INPUT
}
