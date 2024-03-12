type ButtonProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  val: number;
};

const Input = ({ val, onChange }: ButtonProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={val}
      onChange={(e) => onChange(e)}
    />
  );
};

export default Input;
