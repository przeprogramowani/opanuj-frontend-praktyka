import { useEffect, useState } from 'react';
import {
  fetchAllCountries,
  fetchCountriesByCapital,
  fetchCountriesByCurrency,
  fetchCountriesByLanguage,
  fetchCountriesByName,
} from '../api/apiClient';
import { Country, FilterType } from '../types';

const useFetchCountries = (searchTerm: string, filterType: FilterType) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setErrorMessage('');
      try {
        let data: Country[] = [];
        if (searchTerm === '') {
          data = await fetchAllCountries();
        } else {
          switch (filterType) {
            case 'name':
              data = await fetchCountriesByName(searchTerm);
              break;
            case 'currency':
              data = await fetchCountriesByCurrency(searchTerm);
              break;
            case 'language':
              data = await fetchCountriesByLanguage(searchTerm);
              break;
            case 'capital':
              data = await fetchCountriesByCapital(searchTerm);
              break;
            default:
              data = await fetchAllCountries();
          }
        }
        setCountries(data);
      } catch (error) {
        console.log('🚀 ~ fetchData ~ error:', error);
        console.error('Error fetching countries:', error);
        if (error instanceof Error) {
          setErrorMessage(error.message);
          console.log('🚀 ~ fetchData ~ error.message:', error.message);
        } else {
          setErrorMessage('An unexpected error occurred.');
        }
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchTerm, filterType]);

  return { countries, isLoading, isError, errorMessage };
};

export default useFetchCountries;
