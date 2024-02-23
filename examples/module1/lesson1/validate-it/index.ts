const loadElements = (window.onload = () => {
  const input = <HTMLInputElement>document.getElementById('input');
  const button = <HTMLButtonElement>document.getElementById('button');
  const button2 = <HTMLButtonElement>document.getElementById('button2');
  const result = <HTMLElement>document.getElementById('result');
  return { input, button, button2, result };
});

const isExistValue = (value: string) => {
  return value ? Number.parseFloat(value) : null;
};

const isValidCriteria = (value: number) => {
  const MIN = 0;
  const MAX = 100;
  if (value > MIN && value < MAX && value % 2 === 0) return !!value;
  return !value;
};

const isGreaterThan50 = (value: number) => {
  const THRESHOLD = 50;
  if (value > THRESHOLD) return !!value;
  return !value;
};

type Rule = (value: number) => boolean;

type ValidatorRules = Rule[];
function validator(validatoRules: Rule[]) {
  const { input, button, button2, result } = loadElements();

  button.addEventListener('click', () => {
    const value = isExistValue(input.value);
    if (!value) return (result.innerHTML = 'invalid');
    const allStatus = validatoRules.map((rule) => rule(value));
    const allIsValid = allStatus.every((status) => status);
    if (allStatus) return (result.innerHTML = 'valid');
    return (result.innerHTML = 'invalid');
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator([isValidCriteria, isGreaterThan50]);
