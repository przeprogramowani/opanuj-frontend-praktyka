<<<<<<< HEAD
import main from './index.ts';

main();
=======
const useStatus = (result) => {
  const status = { invalid: 'Invalid', valid: 'Valid', clear: '' };
  const setStatus = (status) => (result.innerHTML = status);

  return [status, setStatus];
};

const getValidators = () => {
  const isNumber = (value) => Number.isNaN(value);
  const isScope = (value) => value > 0 && value < 100 && value % 2 === 0;

  return [isNumber, isScope];
};

function validator() {
  const input = document.getElementById('input');
  const result = document.getElementById('result');
  const buttonValidate = document.getElementById('button');
  const buttonClear = document.getElementById('button2');

  const [{ valid, invalid, clear }, setStatus] = useStatus(result);

  const validate = () => {
    const value = Number(input.value);

    getValidators().forEach((validator) => {
      validator(value) ? setStatus(valid) : setStatus(invalid);
    });
  };

  const clearResult = () => {
    input.value = clear;
    setStatus(clear);
  };

  buttonValidate.addEventListener('click', validate);
  buttonClear.addEventListener('click', clearResult);
}

validator();
>>>>>>> 853f81b8ada8477963fc786bcaade7a8410c916e
