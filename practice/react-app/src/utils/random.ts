import { ModeType } from '../types/filter';
import { APIData, agregateCountriesData } from './data';

export const getRandomIndex = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const selectingDataMode = (data: APIData, mode: ModeType) => {
  const countriesData = agregateCountriesData(data);
  if (mode === 'SEARCH') return countriesData;
  const index = getRandomIndex(0, countriesData.length);
  return [countriesData[index]];
};
