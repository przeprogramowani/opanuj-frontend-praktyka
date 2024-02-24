import { ACTION } from './utils.ts';

export function addition(a: number, b: number): number {
  return a + b;
}
export function subtraction(a: number, b: number): number {
  return a - b;
}
export function multiplication(a: number, b: number): number {
  return a * b;
}
export function division(a: number, b: number): number {
  return a / b;
}

export const initialState = {
  result: 0,
  error: ''
};

export const reducer = (state: typeof initialState, action: {
  type: string,
  payload: { firstNumber: number, secondNumber: number }
  error?: string
}) => {
  switch (action.type) {
    case ACTION.ADD:
      return {
        ...state,
        result: addition(action.payload.firstNumber, action.payload.secondNumber),
        error: ''
      };
    case ACTION.SUB:
      return {
        ...state,
        result: subtraction(action.payload.firstNumber, action.payload.secondNumber),
        error: ''
      };
    case ACTION.MUL:
      return {
        ...state,
        result: multiplication(action.payload.firstNumber, action.payload.secondNumber),
        error: ''

      };
    case ACTION.DIV:
      if (action.payload.secondNumber === 0) {
        return {
          ...state,
          error: 'Cannot divide by zero!'
        };
      } else {
        return {
          ...state,
          result: division(action.payload.firstNumber, action.payload.secondNumber),
          error: ''
        };
      }
    default:
      return state;
  }
};
