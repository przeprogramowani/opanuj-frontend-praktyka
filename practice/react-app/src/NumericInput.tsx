import { ChangeEvent } from 'react';

type NumericInputProps = {
  value: number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const NumericInput = ({ value, onChange }: NumericInputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
};
