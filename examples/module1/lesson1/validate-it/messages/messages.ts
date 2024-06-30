import {RESULT} from "../variables/variables";

export const MESSAGE_VALID = "Valid! The number is divisible by two! ";
export const MESSAGE_INVALID = "Invalid number!";
export const MESSAGE_NOT_A_NUMBER = "Type a number, not a letter, symbol or anything else!";

export function displayMessage(text: string) {
  RESULT.innerHTML = text;
}

