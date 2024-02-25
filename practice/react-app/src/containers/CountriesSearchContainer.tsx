import { memo } from 'react';
import Title from '../components/atoms/Title';
import { SearchForm } from '../components/molecules/SearchForm';
import { CountryType } from '../types/country';
import { UseCountriesContext } from '../context/CountriesApiContext';

type ContainerType = {
  viewFn: (countries: CountryType[]) => JSX.Element;
};

export const CountriesSearchContainer = memo<ContainerType>(({ viewFn }) => {
  const { countries } = UseCountriesContext();
  return (
    <>
      <div className="flex flex-col mt-10 border-[1px] border-blue-500">
        <Title title="Countries Search" />
        <div className="flex w-full align-center justify-center min-h-[200px] pt-8">
          <SearchForm />
        </div>
        <div className="pt-12" />
        {viewFn(countries)}
        <div className="pt-16" />
      </div>
    </>
  );
});
