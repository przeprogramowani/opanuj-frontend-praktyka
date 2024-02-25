import { CountryType } from '../types/country';
import { FilterOptions } from '../types/filter';

export const getFilteredData = (
  option: FilterOptions,
  countries?: CountryType[]
) => {
  if (!countries) return;
  return countries?.filter(
    (country) => country[option as keyof CountryType] === option
  );
};
