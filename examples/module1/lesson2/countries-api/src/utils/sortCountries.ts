import { Country } from '../types/Country';

export const sortCountries = (countries: Country[], sortOption: string): Country[] => {
  return countries.sort((a, b) => {
    if (sortOption === 'alphabetical') {
      return a.name.common.localeCompare(b.name.common);
    } else if (sortOption === 'population') {
      return b.population - a.population;
    }
    return 0;
  });
}
