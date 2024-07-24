import GenderSelect from './GenderSelect';
import NameField from './NameField';
import SortSelect from './SortSelect';

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
      <NameField name={name} onChange={(e) => setName(e.target.value)} />
      <GenderSelect
        onChange={(e) => setGender(e.target.value)}
        gender={gender}
      />
      <SortSelect
        onChange={(e) => setSortOption(e.target.value)}
        sortOption={sortOption}
      />
    </form>
  );
}

export default SearchForm;
