import { memo } from 'react';
import { FilterOptions, SortOptions } from '../../types/filter';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';
import { UseCountriesContext } from '../../context/CountriesApiContext';

export const SearchForm = memo(() => {
  const {
    sortOption,
    setSortOption,
    filterOption,
    setFilterOption,
    filter,
    setFilter,
  } = UseCountriesContext();

  return (
    <form className="flex items-center justify-center">
      <Select<SortOptions>
        value={sortOption}
        label="Sort by"
        setOption={setSortOption}
        options={['initial', 'population', 'name']}
      />
      <div className="mx-8 flex flex-col border-2 min-w-[250px]">
        <Select<FilterOptions>
          value={filterOption}
          label="Filter by"
          setOption={setFilterOption}
          options={['capital', 'name', 'currency', 'lang', 'initial']}
        />
        <Input
          label={
            filterOption !== 'initial'
              ? `Please write your Country: ${filterOption}`
              : 'Choose filter'
          }
          type="text"
          placeholder="Country"
          name={filter}
          setName={setFilter}
        />
      </div>
    </form>
  );
});
