import { useState } from 'react';
import { CountryType, FilterContextType } from '../../config/types';
import { useDebounce } from '../../hooks/useDebounce';
import { useFetchHook } from '../../hooks/useFetchHook';
import Country from './CountryComponent';
import FilterFormComponent from './FiilterComponent';

const SearchComponent = () => {
  const [countryName, setCountryName] = useState<string>('');
  const [sortByPopulation, setSortByPopulation] = useState<boolean>(false);
  const [sortAlphabetically, setSortAlphabetically] = useState<boolean>(false);

  const countryNameDebounced = useDebounce(countryName);
  const { countries, error, loading } = useFetchHook(
    countryNameDebounced,
    sortByPopulation,
    sortAlphabetically
  );

  const filterProps: FilterContextType = {
    countryName,
    setCountryName,
    sortByPopulation,
    setSortByPopulation,
    sortAlphabetically,
    setSortAlphabetically,
  };
  return (
    <>
      <FilterFormComponent filterProps={filterProps} />

      {loading && <p className="text-gray-500">Loading...</p>}
      {!loading && !error && countries.length === 0 && (
        <p className="text-gray-500">No countries found.</p>
      )}
      {error && <h3 className="text-red-500">{error}</h3>}

      <ul className="w-[40rem] bg-gray-200 p-4 rounded-lg">
        {countries.map((country: CountryType) => (
          <Country country={country} key={country.name.official} />
        ))}
      </ul>
    </>
  );
};

export default SearchComponent;
