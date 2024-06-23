import React, { useState } from 'react';
import useCountriesSearch from '../hooks/useCountriesSearch';
import NameCountryField from '../components/NameCountryField';
import CountriesList from '../components/CountriesList';
import useCountriesSort from '../hooks/useCountriesSort';
import CountriesSortSelect from '../components/CountriesSortSelect';
import CountriesView from '../components/CountriesView';
import CountryQuiz from '../components/CountryQuiz';

const CountriesSearchContainer = () => {
  const [name, setName] = React.useState('');
  const [sortOption, setSortOption] = useState('');
  const [countryView, setCountryView] = useState('Search');
  const { countries = [] } = useCountriesSearch(name);
  const { sortedCountries } = useCountriesSort({ countries, sortOption });

  return (
    <>
      <form className='space-x-4 flex items-end justify-center mb-10'>
        <NameCountryField name={name} setName={setName} />
        <CountriesSortSelect
          sortOption={sortOption}
          setSortOption={setSortOption}
        />
        <CountriesView
          countryView={countryView}
          setCountryView={setCountryView}
        />
      </form>
      {countryView === 'Search' ? (
        <CountriesList countries={sortedCountries} />
      ) : (
        <CountryQuiz />
      )}
    </>
  );
};

export default CountriesSearchContainer;
