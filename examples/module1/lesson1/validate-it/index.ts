enum ValidationMessage {
  SUCCESS_VALIDATION = 'Valid',
  FAIL_VALIDATION = 'Invalid',
}

function validator() {
  const validationInput = document.getElementById('input') as HTMLInputElement;
  const validationButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const validationResult = document.getElementById('result');

  if (validationButton && clearButton && validationInput && validationResult) {
    validationButton.addEventListener('click', () => {
      if (validationInput.value) {
        if (Number.isInteger(validationInput.value)) {
          if (
            Number(validationInput.value) > 0 &&
            Number(validationInput.value) < 100 &&
            Number(validationInput.value) % 2 === 0
          ) {
            validationResult.innerHTML = ValidationMessage.SUCCESS_VALIDATION;
          } else {
            validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
          }
          validationResult.innerHTML = ValidationMessage.SUCCESS_VALIDATION;
        } else {
          validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
        }
      } else {
        validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
      }
    });

    clearButton.addEventListener('click', () => {
      validationInput.value = '';
      validationResult.innerHTML = '';
    });
  }
}

validator();
