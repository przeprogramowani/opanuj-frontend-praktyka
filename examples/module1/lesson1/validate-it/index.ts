function validator() {
  const input = document.getElementById('input') as HTMLInputElement;
  const button = document.getElementById('button') as HTMLButtonElement;
  const button2 = document.getElementById('button2') as HTMLButtonElement;
  const result = document.getElementById('result') as HTMLDivElement;
  const MAX_VALUE = 100;
  const MIN_VALUE = 0;

  button.addEventListener('click', () => {
    const inputNumber = Number(input.value);

    if (
      inputNumber > MIN_VALUE &&
      inputNumber < MAX_VALUE &&
      inputNumber % 2 === 0
    ) {
      result.innerHTML = 'Valid';
      return;
    }

    result.innerHTML = 'Invalid';
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
