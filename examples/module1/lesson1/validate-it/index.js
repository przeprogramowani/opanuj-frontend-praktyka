function validator() {
  const input = document.getElementById('input');
  const validateButton = document.getElementById('validateButton');
  const clearButton = document.getElementById('clearButton');
  const result = document.getElementById('result');

  validateButton.addEventListener('click', () => {
    const MAX_VALUE = 100;
    const MIN_VALUE = 0;
    const inputValue = Number(input.value);

    if(!Number.isInteger(inputValue)){
      result.innerHTML = 'INVALID';
      return;
    }

    if(inputValue > MIN_VALUE && inputValue < MAX_VALUE && inputValue % 2 === 0){
      result.innerHTML = "VALID";
      return;
    }

    result.innerHTML = "INVALID";
    return;
  });

  clearButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
