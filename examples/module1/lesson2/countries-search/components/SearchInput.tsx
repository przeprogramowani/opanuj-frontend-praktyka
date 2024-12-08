interface ISearchForm {
    label: string;
    name: string;
    value: string;
    placeholder: string;
    setValue: (name: string) => void;
}

const SearchInput = ({label, name, value, setValue, placeholder }: ISearchForm) => {
    return (
        <label className="mt-6">
            {label}:
            <input className="m-2 p-2 w-64" type="text" name={name} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
        </label>
    );
}

export default SearchInput;