import { NOT_A_NUMBER, NUMBER_MISSING_ERROR } from '../consts/errorMessages';
import { useCalculator } from '../providers/CalculatorContext';
import { CALCULATOR_ACTIONS } from '../reducers/consts';
import { CalculatorOperations } from '../reducers/types';

type CalculatorButtonProps = {
    icon: string;
    operation: CalculatorOperations;
};
export const CalculatorButton = ({ icon, operation }: CalculatorButtonProps) => {
    const { firstNumber, secondNumber, dispatch } = useCalculator();

    const isInteger = (value: string | number) => {
        const isInteger = value != '' && Number.isInteger(Number(value));
        return isInteger;
    };

    const handleClick = () => {
        if (!firstNumber || !secondNumber) {
            dispatch({
                type: CALCULATOR_ACTIONS.ERROR,
                payload: NUMBER_MISSING_ERROR,
            });
        } else if (!isInteger(firstNumber) || !isInteger(secondNumber)) {
            dispatch({
                type: CALCULATOR_ACTIONS.ERROR,
                payload: NOT_A_NUMBER,
            });
        } else {
            dispatch({
                type: CALCULATOR_ACTIONS.CALCULATE,
                payload: operation,
            });
        }
    };

    return (
        <button
            className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
            onClick={handleClick}
        >
            {icon}
        </button>
    );
};
