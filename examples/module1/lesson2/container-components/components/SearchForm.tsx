import { SearchInput } from './SearchInput';
import { SearchSelect } from './SearchSelect';

interface Props {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
}

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: Props) {
  const genderOptions = [
    {
      title: 'Any Gender',
      value: ' ',
    },
    {
      title: 'Female',
      value: 'female',
    },
    {
      title: 'Male',
      value: 'male',
    },
    {
      title: 'Genderless',
      value: 'genderless',
    },
    {
      title: 'Unknown',
      value: 'unknown',
    },
  ];

  const sortOptions = [
    {
      title: 'Initial',
      value: ' ',
    },
    {
      title: 'Name',
      value: 'name',
    },
    {
      title: 'Created Date',
      value: 'created',
    },
  ];

  return (
    <form className="space-x-4 flex items-end justify-center">
      <SearchInput name={name} handleChange={(e) => setName(e.target.value)}>
        Name
      </SearchInput>
      <SearchSelect
        options={genderOptions}
        value={gender}
        handleChange={(e) => setGender(e.target.value)}
      >
        Gender
      </SearchSelect>
      <SearchSelect
        value={sortOption}
        handleChange={(e) => setSortOption(e.target.value)}
        options={sortOptions}
      >
        Sort by
      </SearchSelect>
    </form>
  );
}

export default SearchForm;
