import { CountryType } from '../types/country';
import { CountryApiData } from '../types/apiData';

export const agregateCountriesData = (
  countires: CountryApiData[]
): CountryType[] => {
  return countires.map((country) => {
    return {
      name: country.name.common,
      flagsData: {
        flag: country.flags.svg ? country.flags.svg : country.flags.png,
        alt: country.flags.alt,
      },
      currencies: country.currencies,
      languanges: country.languages,
      capital: country.capital,
      population: country.population,
    };
  });
};
