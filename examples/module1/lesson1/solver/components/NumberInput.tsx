import { ChangeEvent } from 'react';

interface Props {
  value: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const NumberInput = ({ value, handleChange }: Props) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={handleChange}
    />
  );
};
