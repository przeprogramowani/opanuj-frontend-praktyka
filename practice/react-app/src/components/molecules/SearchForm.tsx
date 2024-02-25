import { memo } from 'react';
import { FilterOptions, SortOptions } from '../../types/filter';
import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';

type SearchFormType = {
  sortOption: SortOptions;
  setSortOption: React.Dispatch<React.SetStateAction<SortOptions>>;
  filterOption: FilterOptions;
  setFiltetOption: React.Dispatch<React.SetStateAction<FilterOptions>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const SearchForm = memo<SearchFormType>(
  ({
    sortOption,
    setSortOption,
    filterOption,
    setFiltetOption,
    filter,
    setFilter,
  }) => {
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
            setOption={setFiltetOption}
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
  }
);
