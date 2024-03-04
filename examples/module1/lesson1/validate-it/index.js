function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const isValidated = (value) => {
    if (value) {
      if (Number.isInteger(value)) {
        if (
          Number(value) > 0 &&
          Number(value) < 100 &&
          Number(value) % 2 === 0
        ) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  const handleValidateIt = () => {
      result.innerHTML = isValidated(input.value) ? 'Valid' : 'Invalid';
  }

  const handleClear = () => {
    input.value = '';
    result.innerHTML = '';
  }

  button.addEventListener('click', handleValidateIt);
  button2.addEventListener('click', handleClear);
}

validator();
