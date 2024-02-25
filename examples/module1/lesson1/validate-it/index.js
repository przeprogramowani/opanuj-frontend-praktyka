function validator() {
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');
  const input = document.getElementById('input');

  const isValid = (value) => {
    return (
      value &&
      Number.isInteger(Number(value)) &&
      Number(value) > 0 &&
      Number(value) < 100
    )
  }

  button.addEventListener('click', () => {
    if (isValid(input.value)) {
      result.innerHTML = 'Valid'
    } else {
      result.innerHTML = 'Invalid'
    }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();