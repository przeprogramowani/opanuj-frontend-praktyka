type InputProps = {
  value: number;
  setValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input = ({ value, setValue }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={setValue}
      min={0}
      max={100}
    />
  );
};
