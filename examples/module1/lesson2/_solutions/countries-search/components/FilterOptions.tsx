import React from 'react';
import { useAppContext } from '../context/AppContext';

const FilterOptions = () => {
  const { filterType, setFilterType } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as FilterType);
  };

  return (
    <select
      value={filterType}
      onChange={handleChange}
      className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="name">Country Name</option>
      <option value="currency">Currency</option>
      <option value="language">Language</option>
      <option value="capital">Capital City</option>
    </select>
  );
};

export default FilterOptions;

type FilterType = 'name' | 'currency' | 'language' | 'capital';
