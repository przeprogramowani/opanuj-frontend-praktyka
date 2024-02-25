import { useState } from 'react';
import SearchTitle from '../components/atoms/SearchTitle';
import { useFetchData } from '../hooks/useFetchData';
import { sortData } from '../utils/Sort';
import { SortCountryOptions } from '../types/Sort';
import { Input } from '../components/atoms/Input';
import { Select } from '../components/atoms/Select';
import { CountryData } from '../types/Country';
import CountriesList from '../components/molecules/CountriesList';

function CountriesSearchContainer() {
  const [name, setName] = useState('');
  const [sortOption, setSortOption] =
    useState<SortCountryOptions>('countryName');

  const { countries } = useFetchData<CountryData[]>();

  // const sortedCountry = sortData<CountryData>({ countries, sortOption });

  console.log('country', countries);

  return (
    <>
      <div className="pt-20" />
      <SearchTitle title="Wyszukiwarka kraju" />
      <div className="pt-8" />
      <form className="space-x-4 flex items-end justify-center">
        <Input
          label="Name"
          type="text"
          placeholder="Rick Sanchez..."
          name={name}
          setName={setName}
        />
        <Select<SortCountryOptions>
          value={sortOption}
          label="Sort by"
          setOption={setSortOption}
          options={['capital', 'countryName', 'currency', 'language']}
        />
      </form>
      <div className="pt-12" />
      {countries && <CountriesList countries={countries.slice(0, 20)} />}
      <div className="pt-16" />
    </>
  );
}

export default CountriesSearchContainer;
