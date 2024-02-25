import { useEffect, useState } from 'react';
import { CountryApiData } from '../types/apiData';
import { agregateCountriesData } from '../utils/data';
import { CountryType } from '../types/country';

// type FetchDataType = {
//   name: string;
// };

export const useFetchData = () => {
  const [countries, setCountries] = useState<CountryType[]>();

  const API_ALL_COUNTRIES = 'https://restcountries.com/v3.1/all';
  // const API_COUNTRY = `https://restcountries.com/v3.1/name/${name}`;

  useEffect(() => {
    console.log('FETCH DATA');
    fetch(API_ALL_COUNTRIES)
      .then((response) => response.json())
      .then((data: CountryApiData[]) => {
        setCountries(agregateCountriesData(data.slice(0, 20)));
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return { countries };
};
