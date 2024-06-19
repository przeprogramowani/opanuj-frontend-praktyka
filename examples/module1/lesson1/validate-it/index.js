function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    //value of input converted to Number and assigned to inputValue
    const inputValue = Number(input.value);
    if (inputValue) {
      if (Number.isInteger(inputValue)) {
        if (inputValue > 0 && inputValue < 100 && inputValue % 2 === 0) {
          result.innerHTML = 'Valid';
        } else {
          result.innerHTML = 'Invalid';
        } // removed else condition with condition overwrite validation result
      } else {
        result.innerHTML = 'Invalid';
      }
    } else {
      result.innerHTML = 'Invalid';
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
