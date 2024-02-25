import { useState } from 'react';
import SearchTitle from '../components/atoms/SearchTitle';
import { useFetchData } from '../hooks/useFetchData';
import { sortData } from '../utils/Sort';
import { SortCountryOptions } from '../types/sort';
import { Input } from '../components/atoms/Input';
import { Select } from '../components/atoms/Select';
import CountriesList from '../components/molecules/CountriesList';

function CountriesSearchContainer() {
  const [name, setName] = useState('');
  const [sortOption, setSortOption] = useState<SortCountryOptions>('initial');

  const { countries } = useFetchData();

  const sortedCountry = sortData({ countries, sortOption });

  console.log('sortedCountry', sortedCountry);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka kraju" />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <Input
          label="Name"
          type="text"
          placeholder="Poland..."
          name={name}
          setName={setName}
        />
        <Select<SortCountryOptions>
          value={sortOption}
          label="Sort by"
          setOption={setSortOption}
          options={['initial', 'population', 'name']}
        />
      </form>
      <div className="pt-12" />
      {sortedCountry && <CountriesList countries={sortedCountry} />}
      <div className="pt-16" />
    </>
  );
}

export default CountriesSearchContainer;
