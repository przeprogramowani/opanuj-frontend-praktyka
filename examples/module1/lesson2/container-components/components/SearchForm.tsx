import InputName from './InputName';
import SelectGender from './SelectGender';
import SelectSort from './SelectSort';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: '' | 'name' | 'created';
  setSortOption: (sortOption: '' | 'name' | 'created') => void;
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
      <InputName name={name} setName={setName} />
      <SelectGender gender={gender} setGender={setGender} />
      <SelectSort sortOption={sortOption} setSortOption={setSortOption} />
    </form>
  );
}

export default SearchForm;
