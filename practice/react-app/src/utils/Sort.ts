import { SortDataType, SortOptionValue } from '../types/Sort';

export const sortData = <T extends SortOptionValue>({
  characters,
  sortOption,
}: SortDataType<T>) => {
  if (!characters) return;
  return [...characters].sort((a, b) => {
    if (sortOption === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'created') {
      return new Date(a.created).getTime() - new Date(b.created).getTime();
    }
    return 0;
  });
};
