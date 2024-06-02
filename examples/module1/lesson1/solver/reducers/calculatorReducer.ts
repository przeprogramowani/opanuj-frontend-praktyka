import { add, substract, multiply, divide } from '../helpers/mathOperations';
import { CALCULATOR_ACTIONS, CALCULATOR_OPERATIONS } from './consts';
import { CalculatorPayload, CalculatorState } from './types';

export const initialState: CalculatorState = {
    firstNumber: '',
    result: 0,
    secondNumber: '',
};

const calculatorReducer = (state: CalculatorState, action: CalculatorPayload) => {
    switch (action.type) {
        case CALCULATOR_ACTIONS.ERROR:
            return {
                ...state,
                errorMsg: action.payload,
            };
        case CALCULATOR_ACTIONS.SET_NUMBER:
            return {
                ...state,
                errorMsg: '',
                [action.payload.field]: action.payload.value,
            };
        case CALCULATOR_ACTIONS.CALCULATE:
            const firstNumber = parseFloat(state.firstNumber.toString());
            const secondNumber = parseFloat(state.secondNumber.toString());

            let result;
            switch (action.payload) {
                case CALCULATOR_OPERATIONS.ADD:
                    result = add(firstNumber, secondNumber);
                    break;
                case CALCULATOR_OPERATIONS.SUBSTRACT:
                    result = substract(firstNumber, secondNumber);
                    break;
                case CALCULATOR_OPERATIONS.MULTIPLY:
                    result = multiply(firstNumber, secondNumber);
                    break;
                case CALCULATOR_OPERATIONS.DIVIDE:
                    result = divide(firstNumber, secondNumber);
                    break;
                default:
                    result = 0;
            }

            return {
                ...state,
                result,
            };
        default:
            return state;
    }
};

export default calculatorReducer;
