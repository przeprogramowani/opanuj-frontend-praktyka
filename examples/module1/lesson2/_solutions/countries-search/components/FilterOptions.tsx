import React from 'react';
import { FilterType } from '../types';

interface FilterOptionsProps {
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
}

const FilterOptions = ({ filterType, setFilterType }: FilterOptionsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterType(e.target.value as FilterType);
  };

  return (
    <div className="mb-4">
      <label className="mr-2">
        Filter By:
        <select
          id="filter"
          value={filterType}
          onChange={handleChange}
          className="border p-2"
        >
          <option value="name">Name</option>
          <option value="language">Language</option>
          <option value="currency">Currency</option>
          <option value="capital">Capital</option>
        </select>
      </label>
    </div>
  );
};

export default FilterOptions;
