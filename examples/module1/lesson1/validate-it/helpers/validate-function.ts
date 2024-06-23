import {INPUT_ELEMENT_VALIDATOR} from "../variables/variables";
import {MESSAGE_VALID, MESSAGE_INVALID, MESSAGE_NOT_A_NUMBER, displayMessage} from "../messages/messages";

export function validateInput() {
  const INPUT_VALUE: number = Number(INPUT_ELEMENT_VALIDATOR.value);
  if (INPUT_ELEMENT_VALIDATOR.value.trim() !=="") {
    if(Number.isInteger(INPUT_VALUE)) {
      if (INPUT_VALUE > 0 && INPUT_VALUE < 100 && INPUT_VALUE % 2 === 0) {
        displayMessage(MESSAGE_VALID);
      } else {
        displayMessage(MESSAGE_INVALID);
      }
    } else {
      displayMessage(MESSAGE_NOT_A_NUMBER);
    }    
  } else {
    displayMessage(MESSAGE_NOT_A_NUMBER);
  }
}