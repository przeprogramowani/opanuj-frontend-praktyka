interface SearchSelectFormProps {
    title: string;
    value: string;
    options: {value: string, label: string}[];
    onChange: (value: string) => void;
}

function SearchSelectForm({ title, value, options, onChange }: SearchSelectFormProps) {
  return (
    <label className="flex flex-col">
        {title}
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border h-7 mt-1"
        >
            {options.map((option, i) => 
                <option key={i} value={option.value}>{option.label}</option>
            )}
        </select>
      </label>
  );
}

export default SearchSelectForm;