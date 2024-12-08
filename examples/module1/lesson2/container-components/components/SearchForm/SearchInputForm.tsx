interface SearchInputFormProps {
    name: string;
    onChange: (value: string) => void;
}

function SearchInputForm({ name, onChange }: SearchInputFormProps) {
    return (
        <label className="flex flex-col">
            Name
            <input
                className="border h-7 mt-1 indent-2"
                type="text"
                placeholder="Rick Sanchez..."
                value={name}
                onChange={(e) => onChange(e.target.value)}
            />
      </label>
    );
}

export default SearchInputForm;