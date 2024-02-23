type InputProps = {
  value: number;
  validateValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input = ({ value, validateValue }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={validateValue}
      min={0}
      max={100}
    />
  );
};
