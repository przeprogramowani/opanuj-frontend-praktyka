const NumberInput = ({ onChange }: { onChange: (value: number) => void }) => (
  <input
    type="number"
    className="p-4 rounded-md shadow-md"
    onChange={(e) => onChange(Number(e.target.value))}
    placeholder="0"
  />
);

export default NumberInput;
