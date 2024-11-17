import React from 'react';
import { Country } from '../types';
import CountryCard from './CountryCard';

interface CountryListProps {
  countries: Country[];
}

const CountryList = ({ countries }: CountryListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
