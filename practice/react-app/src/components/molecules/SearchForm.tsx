import { GenderType } from '../../types/Character';
import { SortSearchOptions } from '../../types/Sort';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: GenderType;
  setGender: (gender: GenderType) => void;
  sortOption: SortSearchOptions;
  setSortOption: (sortOption: SortSearchOptions) => void;
};

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input
        label="Name"
        type="text"
        placeholder="Rick Sanchez..."
        name={name}
        setName={setName}
      />
      <Select<GenderType>
        value={gender}
        label="Gender"
        setGender={setGender}
        options={['female', 'genderless', 'male', 'unknown']}
      />
      <Select<SortSearchOptions>
        value={sortOption}
        label="Sort by"
        setGender={setSortOption}
        options={['created', 'name']}
      />
    </form>
  );
}

export default SearchForm;
