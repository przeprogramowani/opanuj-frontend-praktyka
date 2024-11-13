import React from 'react';
import { useAppContext } from '../context/AppContext';
import CountryCard from './CountryCard';

const CountryList = () => {
  const { countries, currentPage, itemsPerPage } = useAppContext();

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = countries.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {currentCountries.map((country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
