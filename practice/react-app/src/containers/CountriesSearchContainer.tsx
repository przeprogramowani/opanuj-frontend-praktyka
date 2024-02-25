import { useState } from 'react';
import SearchTitle from '../components/atoms/SearchTitle';
import { useFetchData } from '../hooks/useFetchData';
import CountriesList from '../components/molecules/CountriesList';
import { FilterOptions, ModeType, SortOptions } from '../types/filter';
import Radio from '../components/atoms/Radio';
import { sortData } from '../utils/sort';
import { SearchForm } from '../components/molecules/SearchForm';

function CountriesSearchContainer() {
  const [mode, setMode] = useState<ModeType>('SEARCH');

  const [filter, setFilter] = useState('');

  const [sortOption, setSortOption] = useState<SortOptions>('initial');
  const [filterOption, setFiltetOption] = useState<FilterOptions>('initial');

  const { countries } = useFetchData({ filterOption, filter, mode });
  const sortedCountry = sortData({ countries, sortOption });

  console.log('mode', mode);

  return (
    <>
      <div className="flex flex-col mt-10 border-[1px] border-blue-500">
        <SearchTitle title="Countries Search" />
        <div className="flex ml-auto mr-32">
          <Radio<ModeType>
            label="Search Mode"
            value="SEARCH"
            stateValue={mode}
            setStateValue={setMode}
          />
          <Radio<ModeType>
            label="Guess Mode"
            value="GUESS"
            stateValue={mode}
            setStateValue={setMode}
          />
        </div>
        <div className="flex w-full align-center justify-center min-h-[200px] pt-8">
          {mode === 'SEARCH' && (
            <SearchForm
              setFilter={setFilter}
              filter={filter}
              filterOption={filterOption}
              setFiltetOption={setFiltetOption}
              setSortOption={setSortOption}
              sortOption={sortOption}
            />
          )}
        </div>
        <div className="pt-12" />
        {sortedCountry && <CountriesList countries={sortedCountry} />}
        <div className="pt-16" />
      </div>
    </>
  );
}

export default CountriesSearchContainer;
