import { ChangeEvent } from 'react';

interface Props {
  name: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  children: string;
}

export const SearchInput = ({ name, handleChange, children }: Props) => {
  return (
    <label className="flex flex-col">
      {children}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={handleChange}
      />
    </label>
  );
};
