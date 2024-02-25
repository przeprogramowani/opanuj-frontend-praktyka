import { CountryType } from '../types/country';
import { CountryApiData } from '../types/apiData';

export type APIData = CountryApiData[] | { status: number; message: string };

const mapCountryApiData = (country: CountryApiData) => {
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
};

export const agregateCountriesData = (countires: APIData): CountryType[] => {
  if (Array.isArray(countires) && countires.length) {
    return countires.map((country) => {
      return mapCountryApiData(country);
    });
  }
  return [];
};
