export function isValid(inputValue: number) {
  // const number = parseInt(inputValue, 10);

  return (
    !isNaN(inputValue) &&
    inputValue > 0 &&
    inputValue < 100);
}

export function validate(inputValue: number) {
  return isValid(inputValue) ? 'Valid' : 'Invalid';


  // const input = document.getElementById('input');
  // const validateButton = document.getElementById('validateButton');
  // const clearButton = document.getElementById('clearButton');
  // const result = document.getElementById('result');
//
//   validateButton.addEventListener('click', () => {
//     result.textContent = isValid(input.value) ? 'Valid' : 'Invalid';
//   });
//
//   clearButton.addEventListener('click', () => {
//     input.value = '';
//     result.textContent = '';
//   });
}

// validator();
