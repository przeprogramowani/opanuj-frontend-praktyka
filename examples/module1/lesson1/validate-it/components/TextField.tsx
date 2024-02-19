interface TextFieldProps {
  type?: string;
  id?: string;
  placeholder: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number | undefined;
}

export function TextField({
  type = 'text',
  id = 'input',
  placeholder,
  value,
  onChange,
}: TextFieldProps) {
  return (
    <input
      className="rounded-md p-4 shadow-lg"
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default TextField;
