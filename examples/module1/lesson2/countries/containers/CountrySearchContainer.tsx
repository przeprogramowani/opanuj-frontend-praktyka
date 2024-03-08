import { useEffect, useState } from 'react';
import { CountriesList } from '../components/CountriesList';
import { Countries } from '../types/Countries';
import { CapitalField } from '../components/CapitalField';
import { SortSelect } from '../components/SortSelect';
interface Error {
  status: 404;
  message: string;
}
function CountrySearchContainer() {
  const [capital, setCapital] = useState('');
  const [countries, setCountries] = useState<Countries[]>([]);
  const [sortOption, setSortOption] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  function isError(data: Countries[] | Error): data is Error {
    return 'status' in data && data.status === 404;
  }
  useEffect(() => {
    setError(null);
    if (capital) {
      fetch(`https://restcountries.com/v3.1/capital/${capital}`)
        .then((response) => response.json())
        .then((data: Countries[] | Error) => {
          if (isError(data)) {
            setError(data.message);
          } else {
            setCountries(data || []);
          }
        })
        .catch((error) => {
          setError(error.message);
          console.error('Error fetching data:', error);
        });
    }
  }, [capital]);

  const sortedCountries = [...countries].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.common.localeCompare(b.name.common);
    } else if (sortOption === 'population') {
      return a.population < b.population ? 1 : -1;
    }
    return 0;
  });
  return (
    <>
      <div className="pt-20" />
      <form className="space-x-4 flex items-end justify-center">
        <CapitalField setCapital={setCapital} />
        <SortSelect setSortOption={setSortOption} sortOption={sortOption} />
      </form>
      <div className="pt-16" />
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <CountriesList countries={sortedCountries} />
      )}
    </>
  );
}

export default CountrySearchContainer;
