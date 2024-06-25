const numberInput = document.getElementById('numberInput');
const validateButton = document.getElementById('validateButton');
const clearButton = document.getElementById('clearButton');
const result = document.getElementById('result');

const setResultText = (text) => {
  result.textContent = text;
};

const clearResult = () => {
  numberInput.value = '';
  result.textContent = '';
};

const validator = () => {
  validateButton.addEventListener('click', () => {
    if (!numberInput.value) {
      setResultText('Value should not be empty');
      return;
    }

    if (Number(numberInput.value) >= 0 && Number(numberInput.value) <= 100) {
      setResultText('Value is in range 0-100');
      return;
    }

    setResultText('Value should be in range 0-100');
  });

  clearButton.addEventListener('click', clearResult());
};

validator();
