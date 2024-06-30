import { Country } from '../types/Country';

export const filterCountries = (countries: Country[], name: string): Country[] => {
  if (name) {
    return countries.filter((country) =>
      country.name.common.toLowerCase().includes(name.toLowerCase())
    );
  }

  return countries;
}
