import { Country } from '../types/Country';

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};
