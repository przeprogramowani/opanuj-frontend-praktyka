import { HTMLInputTypeAttribute } from 'react';

interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type: HTMLInputTypeAttribute;
}

function Input({
  label,
  placeholder,
  onChange,
  value,
  type = 'text',
}: InputProps) {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border h-7 mt-1 indent-2"
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}

export default Input;
