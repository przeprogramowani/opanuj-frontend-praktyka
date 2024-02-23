export type SortType = 'name' | 'created' | '';

export type SortOptionValue = { name: string; created: string };

export type SortDataType<T> = {
  characters: T[] | undefined;
  sortOption: SortType;
};
