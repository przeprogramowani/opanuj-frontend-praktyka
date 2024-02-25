import { useState } from 'react';
import SearchTitle from '../components/atoms/SearchTitle';
import { useFetchData } from '../hooks/useFetchData';
import { SortOptions } from '../types/Sort';
import { Input } from '../components/atoms/Input';
import { Select } from '../components/atoms/Select';
import CountriesList from '../components/molecules/CountriesList';
import { sortData } from '../utils/Sort';
import { FilterOptions } from '../types/filter';

function CountriesSearchContainer() {
  const [filter, setFilter] = useState('');

  const [sortOption, setSortOption] = useState<SortOptions>('initial');
  const [filterOption, setFiltetOption] = useState<FilterOptions>('initial');

  const { countries } = useFetchData({ filterOption, filter });
  const sortedCountry = sortData({ countries, sortOption });

  console.log('sortedCountry', sortedCountry);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka kraju" />
      <div className="pt-8" />
      <form className="space-x-12 flex items-center justify-center">
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
      <div className="pt-12" />
      {sortedCountry && <CountriesList countries={sortedCountry} />}
      <div className="pt-16" />
    </>
  );
}

export default CountriesSearchContainer;
