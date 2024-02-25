import { FilterOptions, ModeType } from '../types/filter';

export const buildApiUrl = (
  filterOption: FilterOptions,
  filter: string,
  mode: ModeType
) => {
  const API_URL = `https://restcountries.com/v3.1/`;
  const API_SEARCH = `${API_URL}/${filterOption}/${filter.toLowerCase()}`;
  const API = mode === 'SEARCH' ? API_SEARCH : `${API_URL}/all`;
  return { API };
};
