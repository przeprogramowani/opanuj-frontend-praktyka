import { memo } from 'react';
import SearchTitle from '../components/atoms/SearchTitle';

import { SearchForm } from '../components/molecules/SearchForm';
import { CountryType } from '../types/country';
import { GuessForm } from '../components/molecules/GuessForm';
import { UseCountriesContext } from '../context/CountriesApiContext';

type ContainerType = {
  viewFn: (countries: CountryType[]) => JSX.Element;
};

export const CountriesContainer = memo<ContainerType>(({ viewFn }) => {
  const { mode, countries } = UseCountriesContext();
  return (
    <>
      <div className="flex flex-col mt-10 border-[1px] border-blue-500">
        <SearchTitle title="Countries Search" />
        <div className="flex w-full align-center justify-center min-h-[200px] pt-8">
          {mode == 'SEARCH' && <SearchForm />}
          {mode == 'GUESS' && <GuessForm />}
        </div>
        <div className="pt-12" />
        {viewFn(countries)}
        <div className="pt-16" />
      </div>
    </>
  );
});
