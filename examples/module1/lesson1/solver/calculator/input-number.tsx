import React from 'react';

interface InputProps {
  value: number;
  onChange: (value: number) => void;
}

export const InputNumber = ({ onChange, value }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
    />
  );
};
