import React from 'react';

type CountriesSortSelectProps = {
  sortOption: string;
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
};

const CountriesSortSelect = ({
  sortOption,
  setSortOption,
}: CountriesSortSelectProps) => {
  return (
    <label className='flex flex-col'>
      Sort by
      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option value=''>Sort by</option>
        <option value='name'>Name</option>
        <option value='population'>Population</option>
      </select>
    </label>
  );
};

export default CountriesSortSelect;
