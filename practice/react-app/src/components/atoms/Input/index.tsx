import { memo } from 'react';

type InputType = {
  label: string;
  name: string;
  placeholder: string;
  setName: (name: string) => void;
  type: 'text' | 'number';
};

export const Input = memo<InputType>(
  ({ type, name, label, placeholder, setName }) => {
    return (
      <label className="flex flex-col">
        {label}
        <input
          className="border h-7 mt-1 indent-2"
          type={type}
          placeholder={placeholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    );
  }
);
