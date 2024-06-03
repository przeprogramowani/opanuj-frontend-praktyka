import { Calculator } from './components/Calculator';
import { CalculatorProvider } from './providers/CalculatorContext';

const App = () => {
    return (
        <CalculatorProvider>
            <Calculator />
        </CalculatorProvider>
    );
};

export default App;
