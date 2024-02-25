import { SortDataType, SortCountryOptions } from '../types/Sort';

export const sortData = <T>({ countries, sortOption }: SortDataType<T>) => {
  if (!countries) return;
  return [...countries].sort((a, b) => {
    if (sortOption === 'capital') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'countryName') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 1;
  });
};
