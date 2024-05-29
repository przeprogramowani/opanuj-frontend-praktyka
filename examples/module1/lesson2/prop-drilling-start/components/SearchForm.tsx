import GenderSelect from './GenderSelect';
import { NameField } from './NameField';
import SortSelect from './SortSelect';

type SearchFormProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  gender: string;
  setGender: React.Dispatch<React.SetStateAction<string>>;
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
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
      <NameField name={name} setName={setName} />
      <GenderSelect gender={gender} setGender={setGender} />
      <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
