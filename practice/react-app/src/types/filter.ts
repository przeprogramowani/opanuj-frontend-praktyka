export type FilterOptions =
  | 'name'
  | 'currency'
  | 'capital'
  | 'lang'
  | 'initial';

export type SortOptions = 'population' | 'name' | 'initial';

export type SortDataType<T> = {
  countries: T[] | undefined;
  sortOption: SortOptions;
};

export type ModeType = 'SEARCH' | 'GUESS';
