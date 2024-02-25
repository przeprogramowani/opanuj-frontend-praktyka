import { useEffect, useState } from 'react';
import { APIData, agregateCountriesData } from '../utils/data';
import { CountryType } from '../types/Country';
import { FilterOptions } from '../types/filter';

type FetchDataType = {
  filterOption: FilterOptions;
  filter: string;
};

export const useFetchData = ({ filterOption, filter }: FetchDataType) => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const API_URL = `https://restcountries.com/v3.1`;

  const API_COUNTRY = `${API_URL}/${filterOption}/${filter.toLowerCase()}`;
  useEffect(() => {
    if (!filter) return;

    console.log('Elegancko');
    fetch(API_COUNTRY)
      .then((response) => response.json())
      .then((data: APIData) => setCountries(agregateCountriesData(data)))
      .catch((error) => {
        throw new Error(error);
      });
  }, [API_COUNTRY, filter]);

  return { countries };
};
