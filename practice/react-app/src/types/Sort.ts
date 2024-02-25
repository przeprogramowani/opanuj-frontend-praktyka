export type SortCountryOptions = 'population' | 'name' | 'initial';

export type SortDataType<T> = {
  countries: T[] | undefined;
  sortOption: SortCountryOptions;
};
