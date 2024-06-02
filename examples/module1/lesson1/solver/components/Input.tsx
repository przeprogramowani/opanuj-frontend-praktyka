import { useCalculator } from "../providers/CalculatorContext";
import { CALCULATOR_ACTIONS } from "../reducers/consts";

type InputProps = {
    field: 'firstNumber' | 'secondNumber';
};

export const Input: React.FC<InputProps> = ({ field }) => {
    const calculator = useCalculator()
    const value = calculator[field];

    const handleChange = (value: string) => {
        calculator.dispatch({
            type: CALCULATOR_ACTIONS.SET_NUMBER,
            payload: {
                field,
                value,
            }
        })
    }

    return (
        <input
            type="text"
            className="rounded-md shadow-md p-4"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
        />
    );
};
