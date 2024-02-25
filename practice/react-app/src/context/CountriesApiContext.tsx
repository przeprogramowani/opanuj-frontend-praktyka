import { createContext, useContext, useState } from 'react';
import { sortData } from '../utils/sort';
import { CountryType } from '../types/country';
import { useFetchCountryData } from '../hooks/useFetchData';
import { FilterOptions, ModeType, SortOptions } from '../types/filter';

interface CountriesContextValues {
  mode: ModeType;
  setMode: React.Dispatch<React.SetStateAction<ModeType>>;
  countries: CountryType[];
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  sortOption: SortOptions;
  filterOption: FilterOptions;
  setSortOption: React.Dispatch<React.SetStateAction<SortOptions>>;
  setFilterOption: React.Dispatch<React.SetStateAction<FilterOptions>>;
  setCountries: React.Dispatch<React.SetStateAction<CountryType[]>>;
}

const defaultValues: CountriesContextValues = {
  mode: 'SEARCH',
  countries: [],
  filter: '',
  filterOption: 'initial',
  sortOption: 'initial',
  setCountries: () => {},
  setSortOption: () => {},
  setFilterOption: () => {},
  setMode: () => {},
  setFilter: () => {},
};

const CountriesContext = createContext<CountriesContextValues>(defaultValues);

export const CountriesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = useState<ModeType>('SEARCH');
  const [filter, setFilter] = useState('');

  const [sortOption, setSortOption] = useState<SortOptions>('initial');
  const [filterOption, setFilterOption] = useState<FilterOptions>('initial');

  const { countries, setCountries } = useFetchCountryData({
    filterOption,
    filter,
    mode,
  });

  const value = {
    mode,
    setMode,
    filter,
    setFilter,
    sortOption,
    filterOption,
    setSortOption,
    setFilterOption,
    setCountries,
    countries: sortData({ countries, sortOption }),
  };

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  );
};

export const UseCountriesContext = () => {
  const context = useContext(CountriesContext);
  if (!context) throw new Error('You have some Error with Context');
  return context;
};
