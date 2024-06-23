import React from 'react';
import { Country } from '../types/Country';
import CountryItem from './CountryItem';

type CountriesListProps = {
  countries: Country[];
};

const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <ol className='grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6'>
      {countries.map((country) => (
        <CountryItem
          key={country.name!.common}
          name={country.name}
          flags={country.flags}
        />
      ))}
    </ol>
  );
};

export default CountriesList;
