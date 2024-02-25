export type SortOptions = 'population' | 'name' | 'initial';

export type SortDataType<T> = {
  countries: T[] | undefined;
  sortOption: SortOptions;
};
