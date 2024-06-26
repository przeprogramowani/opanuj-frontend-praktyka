import Input from './Input';

type NameFieldProps = {
  name: string;
  setName: (name: string) => void;
};

function NameField({ name, setName }: NameFieldProps) {
  return (
    <Input
      label="Name"
      type="text"
      placeholder="Rick Sanchez..."
      value={name}
      onChange={setName}
    />
  );
}

export default NameField;
