type SortSelectProps = {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  sortOption: string;
};

const SortSelect = ({ onChange, sortOption }: SortSelectProps) => {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={onChange}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
};

export default SortSelect;
