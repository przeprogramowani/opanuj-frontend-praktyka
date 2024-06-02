import { FC, ReactNode, createContext, useReducer, useContext } from 'react'
import calculatorReducer, { initialState } from '../reducers/calculatorReducer';
import { CalculatorPayload, CalculatorState } from '../reducers/types';

type CalculatorContextProps = {
    children: ReactNode;
}

type CalculatorContextValue = CalculatorState & { dispatch: React.Dispatch<CalculatorPayload> };

const CalculatorContext = createContext<CalculatorContextValue>({ ...initialState, dispatch: () => { } });

export function useCalculator() {
    return useContext(CalculatorContext);
}

export const CalculatorProvider: FC<CalculatorContextProps> = ({ children }) => {
    const [calculator, dispatch] = useReducer(calculatorReducer, initialState)

    return (
        <CalculatorContext.Provider value={{ ...calculator, dispatch }}>
            {children}
        </CalculatorContext.Provider>
    )
}

