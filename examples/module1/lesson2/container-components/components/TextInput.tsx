type TextInputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="mt-1 border h-7 indent-2"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
};
