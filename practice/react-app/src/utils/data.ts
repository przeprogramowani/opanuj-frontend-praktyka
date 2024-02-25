import { CountryType } from '../types/Country';
import { CountryApiData } from '../types/apiData';

export type APIData = CountryApiData[] | { status: number; message: string };

export const agregateCountriesData = (countires: APIData): CountryType[] => {
  if (Array.isArray(countires) && countires.length) {
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
  }
  return [];
};
