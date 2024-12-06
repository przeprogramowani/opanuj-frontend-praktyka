interface ISearchSelectForm {
    title: string;
    value: string;
    options: {value: string, label: string}[];
    onChange: (value: string) => void;
}

const SearchSelectForm = ({ title, value, options, onChange }: ISearchSelectForm) => {
  return (
    <label>
        {title}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border h-7 mt-1 ml-2"
        >
            {options.map((option, i) => 
                <option key={i} value={option.value}>{option.label}</option>
            )}
        </select>
      </label>
  );
}

export default SearchSelectForm;