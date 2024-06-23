type NameCountryFieldProps = {
  name: string;
  setName: (name: string) => void;
};

const NameCountryField = ({ name, setName }: NameCountryFieldProps) => {
  return (
    <label className='flex flex-col'>
      Name
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder='Country name'
        type='text'
        value={name}
      />
    </label>
  );
};

export default NameCountryField;
