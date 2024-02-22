type InputProps = {
  value: number;
  parseFunck: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input = ({ value, parseFunck }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={parseFunck}
    />
  );
};
