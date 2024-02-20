enum ValidationMessage {
  SUCCESS_VALIDATION = 'Valid',
  FAIL_VALIDATION = 'Invalid',
}

export function validator() {
  const validationInput = document.getElementById(
    'input'
  ) as HTMLInputElement | null;
  const validationButton = document.getElementById('button');
  const clearButton = document.getElementById('button2');
  const validationResult = document.getElementById('result');

  if (
    !validationButton ||
    !clearButton ||
    !validationInput ||
    !validationResult
  ) {
    throw new Error('Some html element not found');
  }

  validationButton.addEventListener('click', () => {
    if (!validationInput.value) {
      validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
    }

    const valueToValidate = Number(validationInput.value);

    if (Number.isNaN(valueToValidate) && Number.isInteger(valueToValidate)) {
      validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
    }

    if (
      valueToValidate > 0 &&
      valueToValidate < 100 &&
      valueToValidate % 2 === 0
    ) {
      validationResult.innerHTML = ValidationMessage.SUCCESS_VALIDATION;
    } else {
      validationResult.innerHTML = ValidationMessage.FAIL_VALIDATION;
    }
  });

  clearButton.addEventListener('click', () => {
    validationInput.value = '';
    validationResult.innerHTML = '';
  });
}
