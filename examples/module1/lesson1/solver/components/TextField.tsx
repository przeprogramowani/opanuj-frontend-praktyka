interface TextFieldProps {
  type?: string;
  value: number | string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TextField({
  type = 'number',
  value,
  onChange,
}: TextFieldProps) {
  return (
    <input
      type={type}
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={onChange}
    />
  );
}

export default TextField;
