const MIN_RANGE = 0;
const MAX_RANGE = 100;

function checkIsInteger(num) {
  return Number.isInteger(num);
}

function checkIsNumWithinRange(num) {
  return MIN_RANGE < num && num < MAX_RANGE ? true : false;
}

function checkIsNumEven(num) {
  return num % 2 === 0;
}

const validationMethods = [
  checkIsInteger,
  checkIsNumWithinRange,
  checkIsNumEven,
];

function validator(validationMethods) {
  const input = document.getElementById('input');
  const validationButton = document.getElementById('button');
  const resetButton = document.getElementById('button2');
  const validationResult = document.getElementById('result');

  validationButton.addEventListener('click', () => {
    const numberToValidate = Number(input.value);

    const isNumMeetingConditions = validationMethods.every((method) =>
      method(numberToValidate)
    );

    !!numberToValidate && isNumMeetingConditions
      ? (validationResult.innerHTML = 'Valid')
      : (validationResult.innerHTML = 'Invalid');
  });

  resetButton.addEventListener('click', () => {
    input.value = '';
    validationResult.innerHTML = '';
  });
}

validator(validationMethods);
