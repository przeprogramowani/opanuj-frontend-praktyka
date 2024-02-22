import { useState } from 'react';
import { NumberInput } from './NumberInput';
import {
  add,
  substract,
  multiply,
  divide,
} from '../utils/mathematicalOperations';
import { CalculatingButton } from './CalculatingButton';
import { InputsContainer } from './InputsContainer';
import { ButtonsContainer } from './ButtonsContainer';
import { Result } from './Result';

export const Calculator = () => {
  const [numberA, setNumA] = useState<number>(0);
  const [numberB, setNumB] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<string>('');

  const doTheMath = (calculate: (a: number, b: number) => number) => {
    setError('');
    setResult(calculate(numberA, numberB));
  };

  return (
    <div>
      <InputsContainer>
        <NumberInput
          value={numberA}
          handleChange={(e) => setNumA(parseFloat(e.target.value))}
        />
        <NumberInput
          value={numberB}
          handleChange={(e) => setNumB(parseFloat(e.target.value))}
        />
      </InputsContainer>
      <ButtonsContainer>
        <CalculatingButton handleClick={() => doTheMath(add)}>
          +
        </CalculatingButton>
        <CalculatingButton handleClick={() => doTheMath(substract)}>
          -
        </CalculatingButton>
        <CalculatingButton
          handleClick={() =>
            numberA === 0 || numberB === 0
              ? setError('Multiplying by 0 always results in 0')
              : doTheMath(multiply)
          }
        >
          *
        </CalculatingButton>
        <CalculatingButton
          handleClick={() =>
            numberB === 0
              ? setError(`You can't divide by zero`)
              : doTheMath(divide)
          }
        >
          /
        </CalculatingButton>
      </ButtonsContainer>
      {error ? <p>{error}</p> : <Result result={result} />}
    </div>
  );
};
