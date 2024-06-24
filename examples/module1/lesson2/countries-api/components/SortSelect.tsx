import { SortOptions } from '../types/SortOptions';

type SortSelectProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<SortOptions | string>>;
};

function SortSelect({ sortOption, setSortOption }: SortSelectProps) {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="border h-7 mt-1"
      >
        <option value="">Initial</option>
        <option value={SortOptions.NAME}>Name</option>
        <option value={SortOptions.POPULATION}>Population</option>
      </select>
    </label>
  );
}

export default SortSelect;
