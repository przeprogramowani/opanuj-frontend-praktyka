import { FC, ReactNode, createContext, useReducer, useContext, useCallback, useMemo } from 'react';
import calculatorReducer, { initialState } from '../reducers/calculatorReducer';
import { CalculatorPayload, CalculatorState } from '../reducers/types';

type CalculatorContextProps = {
    children: ReactNode;
};

type CalculatorContextValue = CalculatorState & { dispatch: React.Dispatch<CalculatorPayload> };

const CalculatorContext = createContext<CalculatorContextValue>({ ...initialState, dispatch: () => {} });

export function useCalculator() {
    return useContext(CalculatorContext);
}

export const CalculatorProvider: FC<CalculatorContextProps> = ({ children }) => {
    const [calculator, dispatch] = useReducer(calculatorReducer, initialState);

    const optimizedDispatch = useCallback(dispatch, []);

    const contextValue = useMemo(
        () => ({
            ...calculator,
            dispatch: optimizedDispatch,
        }),
        [calculator, dispatch]
    );

    return <CalculatorContext.Provider value={contextValue}>{children}</CalculatorContext.Provider>;
};
