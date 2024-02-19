import { useState } from 'react';
import { validate } from '../validate';
import ClearButton from './ClearButton';
import { TextField } from './TextField';
import { ValidateButton } from './ValidateButton';
import { ValidationMessage } from './ValidationMessage';
import { evenNumber } from '../validationMethods/evenNumber';
import { greaterThan0 } from '../validationMethods/greaterThan0';
import { smallerThan100 } from '../validationMethods/smallerThan100';

export function Main() {
  const [value, setValue] = useState<string | number | undefined>();
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);

  const handleValidate = () => {
    const valid = validate(value, [evenNumber, greaterThan0, smallerThan100]);
    setIsValid(valid);
    setIsEmpty(false);
  };

  const handleClear = () => {
    setValue('');
    setIsEmpty(true);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col">
        <TextField
          value={value}
          placeholder="Enter a number between 0 and 100"
          onChange={handleValueChange}
        />
        <div className="grid grid-cols-2 gap-x-2">
          <ValidateButton onClick={handleValidate}>Validate</ValidateButton>
          <ClearButton onClick={handleClear}>Clear</ClearButton>
        </div>
        <ValidationMessage isValid={isValid} isEmpty={isEmpty} />
      </div>
    </div>
  );
}

export default Main;
