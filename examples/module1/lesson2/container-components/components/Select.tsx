type OptionType = {
  value: string;
  label: string;
};

interface SelectProps {
  label: string;
  value: string;
  options: OptionType[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <label className="flex flex-col">
      {label}
      <select value={value} onChange={onChange} className="border h-7 mt-1">
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
