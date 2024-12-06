import type { ICountry } from '../types/Country';

export const filterByCurrency = (countries: ICountry[], currency: string) => {
    if (!(countries || currency)) { return []; }

    const filteredCountries = countries?.filter((country) => {
        return country.currencies?.[currency.toUpperCase()]; 
    });
    return filteredCountries;
};

export const filterByLanguage = (countries: ICountry[], language: string) => {
    if (!countries || !language) { return []; }
    
    const filteredCountries = countries?.filter((country) => {
        return Object.entries(country.languages).some(([_, value]) => value.toLowerCase() === language.toLowerCase());
    });
    return filteredCountries;
};

export const filterByCapital = (countries: ICountry[], capital: string) => {
    if (!countries || !capital) { return []; }
    
    const filteredCountries = countries?.filter((country) => {
        return country.capital?.[0].toLowerCase().includes(capital.toLowerCase());
    });
    return filteredCountries;
}