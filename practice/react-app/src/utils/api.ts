import { API_URL } from '../static/url';
import { FilterOptions, ModeType } from '../types/filter';
import { APIData } from './data';
import { selectingDataMode } from './random';

export const buildApiUrl = (
  filterOption: FilterOptions,
  filter: string,
  mode: ModeType
) => {
  const API_SEARCH = `${API_URL}/${filterOption}/${filter.toLowerCase()}`;
  const API = mode === 'SEARCH' ? API_SEARCH : `${API_URL}/all`;
  return { API };
};

export const fetchCountryData = async (API: string, mode: ModeType) => {
  return fetch(API)
    .then((response) => response.json())
    .then((data: APIData) => {
      return selectingDataMode(data, mode);
    })
    .catch((error) => {
      throw new Error(error);
    });
};
