import { ChangeEvent } from 'react';
import { add, subtract, multiply, divide } from './functions';
import TextField from './components/TextField';
import { Result } from './components/Result';
import OperationButton from './components/OperationButton';
import OperationsContainer from './components/OperationsContainer';
import TextFieldsContainer from './components/TextFieldsContainer';
import { useCalculations } from './hooks/useCalculations';

const App = () => {
  const { value1, value2, result, error, setValue1, setValue2, calculate } =
    useCalculations();

  const setValue = (
    event: ChangeEvent<HTMLInputElement>,
    setter: (value: number) => void
  ) => {
    setter(parseFloat(event.target.value));
  };

  return (
    <div>
      <TextFieldsContainer>
        <TextField
          value={value1}
          onChange={(event) => setValue(event, setValue1)}
        />
        <TextField
          value={value2}
          onChange={(event) => setValue(event, setValue2)}
        />
      </TextFieldsContainer>
      <OperationsContainer>
        <OperationButton onClick={() => calculate(add)}>+</OperationButton>
        <OperationButton onClick={() => calculate(subtract)}>-</OperationButton>
        <OperationButton onClick={() => calculate(multiply)}>*</OperationButton>
        <OperationButton onClick={() => calculate(divide)}>/</OperationButton>
      </OperationsContainer>
      <Result result={result} error={error} />
    </div>
  );
};

export default App;
