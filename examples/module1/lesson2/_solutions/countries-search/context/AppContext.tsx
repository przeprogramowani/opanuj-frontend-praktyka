import React, { createContext, useContext, useEffect, useState } from 'react';
import useFetchCountries from '../hooks/useFetchCountries';
import { Country, FilterType, SortOrder } from '../types';

interface AppContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterType: FilterType;
  setFilterType: (type: FilterType) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  countries: Country[];
  isLoading: boolean;
  isError: boolean;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
  totalPages: number;
  errorMessage: string;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  let { countries, isLoading, isError, errorMessage } = useFetchCountries(
    searchTerm,
    filterType
  );

  const sortedCountries = React.useMemo(() => {
    if (!countries) return [];
    const sorted = [...countries];
    if (sortOrder === 'alphabetical') {
      sorted.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } else if (sortOrder === 'population') {
      sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
    }
    return sorted;
  }, [countries, sortOrder]);

  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterType, sortOrder]);

  return (
    <AppContext.Provider
      value={{
        searchTerm,
        setSearchTerm,
        filterType,
        setFilterType,
        sortOrder,
        setSortOrder,
        countries: sortedCountries,
        isLoading,
        isError,
        currentPage,
        setCurrentPage,
        itemsPerPage,
        totalPages,
        errorMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
