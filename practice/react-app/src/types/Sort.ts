export type SortSearchOptions = 'name' | 'created' | 'initial';

export type SortOptionValue = { name: string; created: string };

export type SortDataType<T> = {
  characters: T[] | undefined;
  sortOption: SortSearchOptions;
};
