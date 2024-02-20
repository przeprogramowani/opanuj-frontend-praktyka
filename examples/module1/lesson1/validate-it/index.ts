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
            validationResult.innerHTML = 'Valid';
          } else {
            validationResult.innerHTML = 'Invalid';
          }
          validationResult.innerHTML = 'Valid';
        } else {
          validationResult.innerHTML = 'Invalid';
        }
      } else {
        validationResult.innerHTML = 'Invalid';
      }
    });

    clearButton.addEventListener('click', () => {
      validationInput.value = '';
      validationResult.innerHTML = '';
    });
  }
}

validator();
