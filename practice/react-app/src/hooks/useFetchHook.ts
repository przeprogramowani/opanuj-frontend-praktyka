import axios from 'axios';
import { useEffect, useState } from 'react';
import { CountryType } from '../config/types';

export const useFetchHook = (
  countryName: string | undefined = undefined,
  sortByPopulation: boolean = false,
  sortAlphabetically: boolean = false
) => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!countryName) {
          setLoading(true);
          setError(null);
          const response = await axios.get(
            `https://restcountries.com/v3.1/all?status=true&fields=name,languages,capital,currencies,population,flag,flags`
          );
          setCountries(response.data);
          setLoading(false);
        } else {
          setLoading(true);
          setError(null);
          const response = await axios.get(
            `https://restcountries.com/v3.1/name/${countryName}?status=true&fields=name,languages,capital,currencies,population,flag`
          );
          setCountries(response.data);
          setLoading(false);
        }
      } catch (error: any) {
        if (error.response) {
          if (error.response.status === 404) {
            setError('Nie znaleziono kraju o podanej nazwie.');
          } else {
            setError(`Błąd serwera: ${error.response.status}`);
          }
        } else if (error.request) {
          setError('Brak odpowiedzi od serwera. Spróbuj ponownie później.');
        } else {
          setError('Błąd podczas tworzenia żądania.');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [countryName, sortByPopulation, sortAlphabetically]);

  if (sortByPopulation && !sortAlphabetically) {
    countries.sort((a, b) => b.population - a.population);
  }

  if (sortAlphabetically && !sortByPopulation) {
    countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  }

  return { countries, error, loading };
};
