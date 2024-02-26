import { CountryType } from '../types/country';
import { memo } from 'react';
import { GuessForm } from '../components/molecules/GuessForm';
import { UseCountriesContext } from '../context/CountriesApiContext';

type ContainerType = {
  viewFn: (country: CountryType) => JSX.Element;
};

export const CountriesGuessContainer = memo<ContainerType>(({ viewFn }) => {
  const { countries } = UseCountriesContext();
  const [country] = countries ?? null;

  return (
    <div className="flex flex-col mt-10">
      <GuessForm />
      <div className="pt-12" />
      {country && viewFn(country)}
      <div className="pt-16" />
    </div>
  );
});
