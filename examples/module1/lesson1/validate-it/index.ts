import { clearBtn, numberInput, numberValidateBtn, resultContainer } from './DOM-utils.ts';
import { numberIsValid, validateInputValue } from './validation-utils.ts';


const validator = (): void => {
  addListeners();
};

function addListeners(): void {
  numberValidateBtn.addEventListener('click', () => {
    const isInputValid = validateInputValue(numberInput, numberIsValid);

    setResultValue(isInputValid);
  });

  clearBtn.addEventListener('click', () => {
    resetForm();
  });
}

const setResultValue = (valid: boolean): void => {
  resultContainer.innerHTML = valid ? 'Valid' : 'Invalid';
};

const resetForm = (): void => {
  numberInput.value = '';
  resultContainer.innerHTML = '';
};


validator();
