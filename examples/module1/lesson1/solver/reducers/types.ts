import { CALCULATOR_ACTIONS } from './consts';

export type CalculatorState = {
    errorMsg?: string;
    firstNumber: string | number;
    result: number;
    secondNumber: string | number;
};

export type CalculatorOperations = 'ADD' | 'SUBSTRACT' | 'MULTIPLY' | 'DIVIDE';

type SetNumberAction = {
    type: typeof CALCULATOR_ACTIONS.SET_NUMBER;
    payload: {
        value: string | number;
        field: 'firstNumber' | 'secondNumber';
    };
};

type CalculateAction = {
    type: typeof CALCULATOR_ACTIONS.CALCULATE;
    payload: CalculatorOperations;
};

type SetErrorAction = {
    type: typeof CALCULATOR_ACTIONS.ERROR;
    payload: string;
};

export type CalculatorPayload = SetNumberAction | CalculateAction | SetErrorAction;
