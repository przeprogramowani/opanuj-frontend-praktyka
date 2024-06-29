type SelectInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
};

export const SelectInput = ({
  label,
  value,
  onChange,
  options,
}: SelectInputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 border h-7"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};
