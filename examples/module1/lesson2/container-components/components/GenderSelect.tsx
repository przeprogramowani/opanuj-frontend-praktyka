type GenderSelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  gender: string;
};

const GenderSelect = ({ onChange, gender }: GenderSelectProps) => {
  return (
    <label className="flex flex-col">
      Gender
      <select value={gender} onChange={onChange} className="border h-7 mt-1">
        <option value="">Any Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="genderless">Genderless</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  );
};

export default GenderSelect;
