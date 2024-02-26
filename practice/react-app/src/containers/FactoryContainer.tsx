import { CountryType } from '../types/country';

import { CountriesSearchContainer } from './CountriesSearchContainer';
import { CountriesList } from '../components/molecules/CountriesList';
import { CountriesGuessContainer } from './CountriesGuessContainer';
import { Country } from '../components/atoms/Country';
import { UseCountriesContext } from '../context/CountriesApiContext';

export const FactoryContainer = () => {
  const { mode } = UseCountriesContext();

  switch (mode) {
    case 'SEARCH':
      return (
        <CountriesSearchContainer
          viewFn={(countries: CountryType[]) => (
            <CountriesList countries={countries} />
          )}
        />
      );
    case 'GUESS':
      return (
        <CountriesGuessContainer
          viewFn={({ flagsData }: CountryType) => (
            <Country name="" flagData={flagsData} />
          )}
        />
      );

    default:
      return <></>;
  }
};
