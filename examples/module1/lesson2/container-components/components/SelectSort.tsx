type SelectSortProps = {
  sortOption: '' | 'name' | 'created';
  setSortOption: (sortOption: '' | 'name' | 'created') => void;
};

export default function SelectSort({
  sortOption,
  setSortOption,
}: SelectSortProps) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) =>
          setSortOption(e.target.value as '' | 'name' | 'created')
        }
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value="name">Name</option>
        <option value="created">Created Date</option>
      </select>
    </label>
  );
}
