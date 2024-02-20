document.addEventListener('DOMContentLoaded', function () {
  validator();
});

function validator() {
  const input = document.getElementById('input');
  const validButton = document.getElementById('validButton');
  const clearButton = document.getElementById('clearButton');
  const validMessage = document.getElementById('validMessage');

  const MESSAGE_VALID_EMPTY = 'Your field is empty, please enter a number!';
  const MESSAGE_VALID_NO_NUMBER = 'Please enter a valid number!';

  validButton.addEventListener('click', validateInput);

  input.addEventListener('keypress', function(event) {
    // Check if the Enter key is pressed
    if (event.key === 'Enter' || event.keyCode === 13) {
      validateInput(); // Call the validation function
    }
  });

  clearButton.addEventListener('click', () => {
    // clear valid message
    validMessage.innerHTML = '';
    input.value = '';
  });

  function validateInput() {
    // check if input is not empty
    if (input.value) {
      //check if input is a number and return message
      validMessage.innerHTML = !isNaN(input.value) ? validNumberValueBetween(Number(input.value)) : MESSAGE_VALID_NO_NUMBER;
      return;
    }

    validMessage.innerHTML = MESSAGE_VALID_EMPTY;
  }
}

// helper function
function validNumberValueBetween(validNumber) {
  const FROM_VALUE = 0;
  const TO_VALUE = 100;
  const VALID_MESSAGE = 'valid';
  const INVALID_MESSAGE = 'invalid';

  // Adjusted to include FROM_VALUE and TO_VALUE in the valid range
  return validNumber > FROM_VALUE && validNumber < TO_VALUE ? VALID_MESSAGE : INVALID_MESSAGE;
}
