import { useMemo } from 'react';
import { SelectOptions } from '../lib/selectOptions';
import Select from './Select';

type GenderSelectProps = {
  gender: string;
  setGender: (gender: string) => void;
};

function GenderSelect({ gender, setGender }: GenderSelectProps) {
  const genderOptions: SelectOptions = useMemo(
    () => [
      { label: 'Any Gender', value: '' },
      { label: 'Female', value: 'female' },
      { label: 'Male', value: 'male' },
      { label: 'Genderless', value: 'genderless' },
      { label: 'Unknown', value: 'unknown' },
    ],
    []
  );

  return (
    <Select
      label="Gender"
      value={gender}
      onChange={setGender}
      options={genderOptions}
    />
  );
}

export default GenderSelect;
