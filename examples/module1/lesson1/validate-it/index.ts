import {INPUT_ELEMENT_VALIDATOR, BUTTON_VALIDATE, BUTTON_CLEAR, RESULT} from "./variables/variables";
import {validateInput} from "./helpers/validate-function";

function validatorApp(): void {
  BUTTON_VALIDATE.addEventListener('click', () => {
    validateInput();
  });

  BUTTON_CLEAR.addEventListener('click', () => {
    INPUT_ELEMENT_VALIDATOR.value = '';
    RESULT.innerHTML = '';
  });
}

validatorApp();
