type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
};

function SearchForm({
  name,
  setName,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <label className="flex flex-col">
        Name
        <input
          className="border h-7 mt-1 indent-2"
          type="text"
          placeholder="Wpisz flage..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  );
}

export default SearchForm;
