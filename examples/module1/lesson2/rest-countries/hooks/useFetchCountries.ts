import { useEffect, useState } from 'react';
import { Country } from '../models/country';
import { State } from '../models/state';
import { countryService } from '../services/country.service';

export type Filters = {
  name: string;
};

export type Details = {
  countriesNames: string[];
  currencies: string[];
  languages: string[];
  capitals: string[];
};

export const useFetchCountries = (filters: Filters) => {
  const [countries, setCountries] = useState<Country[]>([]);

  const [details, setDetails] = useState<Details>({
    countriesNames: [],
    currencies: [],
    languages: [],
    capitals: [],
  });

  const [state, setState] = useState<State>(State.Idle);

  const fetchCountries = async (url: string) => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setState(State.Loaded);
        return data;
      })
      .catch((error) => {
        console.error(error);
        setState(State.Error);
      });
  };

  const initData = () => {
    fetchCountries('https://restcountries.com/v3.1/all').then((countries) => {
      const countriesNames = countryService.getNames(countries);
      const currencies = countryService.getCurrencies(countries);
      const languages = countryService.getLanguages(countries);
      const capitals = countryService.getCapitals(countries);

      setDetails({ countriesNames, currencies, languages, capitals });
      setCountries(countries);
    });
  }

  useEffect(() => {
    initData();
  }, []);

  useEffect(() => {
    if (!filters.name) return;
    fetchCountries('https://restcountries.com/v3.1/name/' + filters.name).then(
      (data) => setCountries(data),
    );
  }, [filters.name]);

  const resetFilters = () => {
    initData();
  };

  return { countries, details, state, resetFilters };
};
