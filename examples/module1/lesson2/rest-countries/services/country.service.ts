import { Country } from '../models/country';
import { removeDuplicates, sortAlphabetically } from '../utils/utils';

export const countryService = {
  getNames: (countries: Country[]): string[] => {
    return countries
      .map((country) => country.name.common)
      .sort(sortAlphabetically);
  },

  getCurrencies: (countries: Country[]): string[] => {
    return removeDuplicates<string>(
      countries.flatMap((country) => {
        if (country.currencies) {
          return Object.keys(country.currencies);
        }
        return [];
      }),
    )
      .filter((currency) => Boolean(currency))
      .sort(sortAlphabetically);
  },

  getLanguages: (countries: Country[]): string[] => {
    return removeDuplicates(
      countries.flatMap((country) => {
        if (country.languages) {
          return Object.values(country.languages);
        }
        return [];
      }),
    ).sort(sortAlphabetically);
  },

  getCapitals: (countries: Country[]): string[] => {
    return removeDuplicates(
      countries.flatMap((country) => country.capital).filter(Boolean),
    ).sort(sortAlphabetically);
  }
};
