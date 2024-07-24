type NameFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

const NameField = ({ onChange, name }: NameFieldProps) => {
  return (
    <label className="flex flex-col">
      Name
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={onChange}
      />
    </label>
  );
};

export default NameField;
