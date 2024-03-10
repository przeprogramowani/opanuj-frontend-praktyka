function validator() {
  const input = document.getElementById('input');
  const buttonValidate = document.getElementById('button');
  const buttonClear = document.getElementById('button2');
  const result = document.getElementById('result');

  const status = { invalid: 'Invalid', valid: 'Valid', clear: '' };
  const setStatus = (status) => (result.innerHTML = status);
  const isValid = (value) => value > 0 && value < 100 && value % 2 === 0;

  const validate = () => {
    const value = Number(input.value);

    if (Number.isNaN(value)) {
      setStatus(status.invalid);
      return;
    }

    isValid(value) ? setStatus(status.valid) : setStatus(status.invalid);
  };

  const clear = () => {
    input.value = '';
    setStatus(status.clear);
  };

  buttonValidate.addEventListener('click', validate);
  buttonClear.addEventListener('click', clear);
}

validator();
