function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const rules = [
    (value) => value !== '',
    (value) => !isNaN(value) && value >= 0 && value <= 100,
  ];

  const validateInput = () => {
    const inputValue = input.value;
    const isValid = rules.every((rule) => rule(inputValue));
    result.innerHTML = isValid ? 'Valid' : 'Invalid';
  };

  const clearInput = () => {
    input.value = '';
    result.innerHTML = '';
  };

  button.addEventListener('click', validateInput);
  button2.addEventListener('click', clearInput);
}

validator();