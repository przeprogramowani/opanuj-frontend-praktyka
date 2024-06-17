function getChecksValidation(value, checks) {
  const checksResults = checks.map((check) => check(value));

  if (checksResults.every((item) => item == true)) {
    return 'Valid';
  }

  return 'Invalid';
}

const isInRange = (value) => value > 0 && value < 100;
const isOdd = (value) => value % 2 === 0;

const checksArray = [isInRange, isOdd];

function handleClearInputAndResult(input, result) {
  input.value = '';
  result.innerHTML = '';
}
function handleValidateInput(input) {
  if (!input.value) {
    return 'Invalid';
  } else {
    const value = Number(input.value);
    return getChecksValidation(value, checksArray);
  }
}

function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  button.addEventListener(
    'click',
    () => (result.innerHTML = handleValidateInput(input))
  );

  button2.addEventListener('click', () =>
    handleClearInputAndResult(input, result)
  );
}

validator();
