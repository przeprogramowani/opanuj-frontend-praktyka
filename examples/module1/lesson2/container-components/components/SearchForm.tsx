import { SelectInput } from './SelectInput';
import { TextInput } from './TextInput';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

export const SearchForm = ({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) => {
  return (
    <form className="flex items-end justify-center space-x-4">
      <TextInput
        label="Name"
        value={name}
        onChange={setName}
        placeholder="Rick Sanchez..."
      />
      <SelectInput
        label="Gender"
        value={gender}
        onChange={setGender}
        options={[
          { value: '', label: 'Any Gender' },
          { value: 'female', label: 'Female' },
          { value: 'male', label: 'Male' },
          { value: 'genderless', label: 'Genderless' },
          { value: 'unknown', label: 'Unknown' },
        ]}
      />
      <SelectInput
        label="Sort by"
        value={sortOption}
        onChange={setSortOption}
        options={[
          { value: '', label: 'Initial' },
          { value: 'name', label: 'Name' },
          { value: 'created', label: 'Created Date' },
        ]}
      />
    </form>
  );
};
