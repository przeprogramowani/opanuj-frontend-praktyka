import { CountryType } from '../types/Country';
import { SortOptions } from '../types/Sort';

type SortCountriesType = {
  countries: CountryType[];
  sortOption: SortOptions;
};

export const sortData = ({ countries, sortOption }: SortCountriesType) => {
  if (sortOption == 'initial') return countries;
  return [...countries].sort((a, b) => {
    if (sortOption === 'population') return b.population - a.population;
    if (sortOption === 'name') return a.name.localeCompare(b.name);
    return 1;
  });
};
