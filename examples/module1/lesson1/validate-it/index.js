const input = document.getElementById('input');
const validateInputButton = document.getElementById('validate-input-btn');
const clearInputButton = document.getElementById('clear-input-btn');
const result = document.getElementById('result');

function validator() {
  validateInputButton.addEventListener('click', () => {
    const parsedInput = parseInt(input.value);
    const validator = new Validator(parsedInput);
    result.innerHTML = validator.isInputValid();
  })

  clearInputButton.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();

class Validator{
  constructor(input){
    this.input = input;
  }

  LOWER_LIMIT = 0;
  UPPER_LIMIT = 100;
  SUCCESS_MESSAGE = 'Valid';
  FAILURE_MESSAGE = 'Invalid';

  isInputNumber(){
    return Number.isFinite(this.input);
  }

  isInputInRange(){
    return  this.input > this.LOWER_LIMIT && this.input < this.UPPER_LIMIT;
  }

  isInputEven(){
    return this.input % 2 === 0;
  }

  isInputValid(){
    return this.isInputNumber()
      && this.isInputInRange()
      && this.isInputEven() ? this.SUCCESS_MESSAGE : this.FAILURE_MESSAGE;
  }
}