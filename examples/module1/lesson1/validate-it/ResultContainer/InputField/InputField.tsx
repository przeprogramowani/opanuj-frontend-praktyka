import React from 'react';

type InputFieldProps = {
  numberToValidate: string;
  setNumberToValidate: React.Dispatch<React.SetStateAction<string>>;
};

const InputField: React.FC<InputFieldProps> = ({ numberToValidate, setNumberToValidate }) => {
  return (
    <input
      className="rounded-md p-4 shadow-lg"
      type="text"
      id="input"
      placeholder="Enter a number between 0 and 100"
      value={numberToValidate}
      onChange={(e) => setNumberToValidate(e.target.value)}
    />
  );
};

export default InputField;