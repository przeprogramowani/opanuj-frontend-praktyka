import React from 'react';
import { useAppContext } from '../context/AppContext';

const SortOptions = () => {
  const { sortOrder, setSortOrder } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value as SortOrder);
  };

  return (
    <select
      value={sortOrder}
      onChange={handleChange}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="alphabetical">Alphabetical</option>
      <option value="population">Population Size</option>
    </select>
  );
};

export default SortOptions;

type SortOrder = 'alphabetical' | 'population';
