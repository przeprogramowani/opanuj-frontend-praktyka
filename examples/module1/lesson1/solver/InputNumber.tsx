const InputNumber = ({ value, onChange }: { value: number, onChange: (value: number) => void }) => (
  <input
    type="number"
    className="rounded-md shadow-md p-4"
    value={value}
    onChange={(e) => onChange(Number(e.target.value))}
  />
);

export default InputNumber;