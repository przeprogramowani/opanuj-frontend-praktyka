import { useEffect, useState } from 'react';
import { APIData } from '../utils/data';
import { CountryType } from '../types/country';
import { FilterOptions, ModeType } from '../types/filter';
import { buildApiUrl } from '../utils/api';
import { selectingDataMode } from '../utils/random';

type FetchDataType = {
  filterOption: FilterOptions;
  filter: string;
  mode: ModeType;
};

export const useFetchData = ({
  filterOption,
  filter,
  mode = 'SEARCH',
}: FetchDataType) => {
  const [countries, setCountries] = useState<CountryType[]>([]);

  const { API } = buildApiUrl(filterOption, filter, mode);

  useEffect(() => {
    if (mode === 'SEARCH' && filter.length <= 2) {
      return setCountries([]);
    }
    fetch(API)
      .then((response) => response.json())
      .then((data: APIData) => {
        const res = selectingDataMode(data, mode);
        return setCountries(res);
      })
      .catch((error) => {
        throw new Error(error);
      });
  }, [API, mode, filter.length]);

  return { countries };
};
