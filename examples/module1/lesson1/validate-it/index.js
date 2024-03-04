function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const isValidated = (value) => {
    if (!value) return false;
    if (!Number.isInteger(value)) return false;
    return (
      Number(value) > 0 &&
      Number(value) < 100 &&
      Number(value) % 2 === 0
    )
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
