import { Country } from '../types/Country';
import { SortOptions } from '../types/SortOptions';

export function sortCountries(
  sortOption: SortOptions | string,
  countries: Country[]
) {
  switch (sortOption) {
    case SortOptions.NAME:
      return countries.sort((a, b) => a.name.localeCompare(b.name));
    case SortOptions.POPULATION:
      return countries.sort((a, b) => b.population - a.population);
    default:
      return countries;
  }
}
