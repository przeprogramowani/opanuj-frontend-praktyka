function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    const value = input.value;

    function isValid(value) {
      return Number(value) > 0 && Number(value) < 100 && Number(value) % 2 == 0;
    }

    if (isValid(value)) {
      result.innerHTML = 'Valid';
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
