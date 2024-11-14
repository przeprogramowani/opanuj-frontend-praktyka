import { debounce } from 'es-toolkit';
import React, { useCallback, useState } from 'react';
import { FilterType } from '../types';

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
}

const SearchBar = ({
  searchTerm: externalSearchTerm,
  setSearchTerm,
  filterType,
}: SearchBarProps) => {
  const [localSearchTerm, setLocalSearchTerm] = useState(externalSearchTerm);

  const debouncedSetSearchTerm = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
    }, 500),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setLocalSearchTerm(newValue);
    debouncedSetSearchTerm(newValue);
  };

  React.useEffect(() => {
    setLocalSearchTerm(externalSearchTerm);
  }, [externalSearchTerm]);

  return (
    <div className="mb-4">
      <input
        type="text"
        value={localSearchTerm}
        onChange={handleChange}
        placeholder={`Search by country's ${filterType}...`}
        className="w-full p-2 border"
      />
    </div>
  );
};

export default SearchBar;
