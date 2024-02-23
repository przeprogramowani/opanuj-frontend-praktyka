type SelectType<T extends string> = {
  value: T;
  label: string;
  setGender: (name: T) => void;
  options: T[];
};

export function Select<T extends string>({
  value,
  label,
  setGender,
  options,
}: SelectType<T>) {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => setGender(e.target.value as T)}
        className="border h-7 mt-1"
      >
        {options &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
    </label>
  );
}
