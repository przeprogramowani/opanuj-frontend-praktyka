import React, { useEffect, useState } from 'react';
import CountryList from '../components/CountryList';
import ErrorBoundary from '../components/ErrorBoundary';
import FilterOptions from '../components/FilterOptions';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import SortOptions from '../components/SortOptions';
import useFetchCountries from '../hooks/useFetchCountries';
import { Country, FilterType, SortOrder } from '../types';

const CountriesSearchContainer = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<FilterType>('name');
  const [sortOrder, setSortOrder] = useState<SortOrder>('alphabetical');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 20;

  const { countries, isLoading, error } = useFetchCountries(
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
    if (currentPage !== 1) setCurrentPage(1);
  }, [searchTerm, filterType, sortOrder]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = sortedCountries.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const renderContent = () => {
    if (error) return <div className="text-red-500">{error}</div>;
    if (isLoading) return <Loader />;

    return (
      <>
        <CountryList countries={currentCountries} />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </>
    );
  };

  return (
    <main className="container mx-auto py-4">
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterType={filterType}
      />
      <div className="flex flex-row gap-4">
        <FilterOptions filterType={filterType} setFilterType={setFilterType} />
        <SortOptions sortOrder={sortOrder} setSortOrder={setSortOrder} />
      </div>
      <ErrorBoundary>{renderContent()}</ErrorBoundary>
    </main>
  );
};

export default CountriesSearchContainer;
