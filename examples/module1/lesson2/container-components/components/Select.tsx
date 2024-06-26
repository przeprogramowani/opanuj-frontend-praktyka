import { SelectOptions } from '../lib/selectOptions';

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: SelectOptions;
}

function Select({ value, onChange, options, label }: SelectProps) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border h-7 mt-1"
      >
        {options.map(({ label, value }) => (
          <option key={`${label}-${value}`} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Select;
