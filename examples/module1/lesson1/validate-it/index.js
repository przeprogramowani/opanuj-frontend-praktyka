function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener('click', () => {
    if (input.value) {
      const number = Number(input.value)
      if (Number.isInteger(number)) {
        if (
          number > 0 &&
          number < 100
        ) {
          result.innerHTML = 'Valid';
        } else {
          result.innerHTML = 'Invalid';
        }
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
