export function addNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber + secondNumber;
}
export function subtractNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber - secondNumber;
}
export function multiplicationNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber * secondNumber;
}

export function dividingNumbers(firstNumber: number, secondNumber: number) {
  return firstNumber / secondNumber;
}

export function clearAll(
  setFirstNumber: React.Dispatch<React.SetStateAction<number>>, 
  setSecondNumber: React.Dispatch<React.SetStateAction<number>>, 
  setResult: React.Dispatch<React.SetStateAction<number | string>>, 
  setOperator: React.Dispatch<React.SetStateAction<string>>
) {
  setFirstNumber(0);
  setSecondNumber(0);
  setResult(0);
  setOperator("Here comes your choose operator!");
}