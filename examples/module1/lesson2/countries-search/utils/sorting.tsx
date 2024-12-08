import type { ICountry } from '../types/Country';

export const sortByName = (countries: ICountry[]) => {
    return [...countries].sort((a, b) => a.name.common.localeCompare(b.name.common));
}

export const sortByPopulation = (countries: ICountry[]) => {
    return [...countries].sort((a, b) => a.population - b.population);
}