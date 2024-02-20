function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const ERROR_MESSAGE = 'Invalid number. Please enter a number between 0 and 100';
    const SUCCESS_MESSAGE = 'Valid number. Thank you!';

    const inputValue = +input.value;

    if(!inputValue) {
      result.innerHTML = ERROR_MESSAGE;
      return;
    }

    if (inputValue > 0 && inputValue < 100 && inputValue % 2 === 0) {
      result.innerHTML = SUCCESS_MESSAGE;
      return;
    }

    result.innerHTML = ERROR_MESSAGE;
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
