import { ChangeEvent } from 'react';

interface Option {
  value: string | '';
  title: string;
}

interface Props {
  value: string;
  children: string;
  handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

export const SearchSelect = ({
  value,
  handleChange,
  children,
  options,
}: Props) => {
  return (
    <label className="flex flex-col">
      {children}
      <select value={value} onChange={handleChange} className="border h-7 mt-1">
        {options.map((option) => {
          const { value, title } = option;
          return (
            <option key={title} value={value}>
              {title}
            </option>
          );
        })}
      </select>
    </label>
  );
};
