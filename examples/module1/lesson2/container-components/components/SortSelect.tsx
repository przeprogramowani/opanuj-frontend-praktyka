import { useMemo } from 'react';
import { SelectOptions } from '../lib/selectOptions';
import Select from './Select';

type SortSelectProps = {
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

function SortSelect({ sortOption, setSortOption }: SortSelectProps) {
  const sortOptions: SelectOptions = useMemo(
    () => [
      { label: 'Initial', value: '' },
      { label: 'Name', value: 'name' },
      { label: 'Created Date', value: 'created' },
    ],
    []
  );

  return (
    <Select
      label="Sort By"
      value={sortOption}
      onChange={setSortOption}
      options={sortOptions}
    />
  );
}

export default SortSelect;
