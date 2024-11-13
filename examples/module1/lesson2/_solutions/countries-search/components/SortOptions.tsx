import React from 'react';
import { SortOrder } from '../types';

interface SortOptionsProps {
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
}

const SortOptions: React.FC<SortOptionsProps> = ({
  sortOrder,
  setSortOrder,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  };

  return (
    <div className="mb-4">
      <label htmlFor="sort" className="mr-2">
        Sort By:
      </label>
      <select
        id="sort"
        value={sortOrder}
        onChange={handleChange}
        className="border p-2"
      >
        <option value="alphabetical">Alphabetical</option>
        <option value="population">Population</option>
      </select>
    </div>
  );
};

export default SortOptions;
