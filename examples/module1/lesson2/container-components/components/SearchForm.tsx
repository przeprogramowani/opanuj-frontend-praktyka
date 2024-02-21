import { genderOptions } from '../const/genderOptions';
import { sortOptions } from '../const/sortOptions';
import Select from './Select';
import TextField from './TextField';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
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
      <TextField
        label="Name"
        placeholder="Rick Sanchez..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Select
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        options={genderOptions}
      />
      <Select
        label="Sort by"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        options={sortOptions}
      />
    </form>
  );
}

export default SearchForm;
