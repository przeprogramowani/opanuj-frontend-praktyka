import { CountryType } from '../types/country';
import { SortCountryOptions } from '../types/sort';

type SortCountriesType = {
  countries?: CountryType[];
  sortOption: SortCountryOptions;
};

export const sortData = ({ countries, sortOption }: SortCountriesType) => {
  if (!countries) return null;
  return [...countries].sort((a, b) => {
    if (sortOption === 'population') return b.population - a.population;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 1;
  });
};
