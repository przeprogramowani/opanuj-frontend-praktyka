import React from 'react';

type SortSelectProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

const SortSelect: React.FC<SortSelectProps> = ({
  sortOption,
  setSortOption,
}) => {
  return (
    <label className="flex flex-col">
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
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
