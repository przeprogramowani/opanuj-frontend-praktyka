import SearchInputForm from './SearchInputForm';
import SearchSelectForm from './SearchSelectForm';
import { SELECT_GENDER_OPTIONS, SELECT_SORT_BY_OPTIONS } from './consts';

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
      <SearchInputForm name={name} onChange={setName} />
      <SearchSelectForm 
        title='Gender'
        value={gender}
        options={SELECT_GENDER_OPTIONS}
        onChange={setGender}
      />
      <SearchSelectForm 
        title='Sort by'
        value={sortOption}
        options={SELECT_SORT_BY_OPTIONS}
        onChange={setSortOption}
      />
    </form>
  );
}

export default SearchForm;
