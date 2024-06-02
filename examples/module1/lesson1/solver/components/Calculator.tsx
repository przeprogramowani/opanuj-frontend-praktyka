
import { useCalculator } from "../providers/CalculatorContext";
import { CALCULATOR_OPERATIONS } from "../reducers/consts";
import { CalculatorButton } from "./CalculatorButton";
import { Input } from "./Input"

export const Calculator = () => {
    const { result, errorMsg } = useCalculator()
    const calculatorButtons = [
        { icon: '+', operation: CALCULATOR_OPERATIONS.ADD },
        { icon: '-', operation: CALCULATOR_OPERATIONS.SUBSTRACT },
        { icon: '*', operation: CALCULATOR_OPERATIONS.MULTIPLY },
        { icon: '/', operation: CALCULATOR_OPERATIONS.DIVIDE },
    ];

    return (
        <>
            <div className="grid grid-cols-2 gap-x-4">
                <Input field={'firstNumber'} />
                <Input field={'secondNumber'} />
            </div>
            <div className="grid grid-cols-4 gap-x-4 my-4">
                {calculatorButtons.map((btn, index) =>
                    <CalculatorButton
                        key={index}
                        icon={btn.icon}
                        operation={btn.operation}
                    />

                )}
            </div>
            <span className="text-red-500">{errorMsg}</span>
            <div>Result: {result}</div>
        </>
    )
}