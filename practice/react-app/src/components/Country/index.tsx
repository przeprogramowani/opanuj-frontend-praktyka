import { memo } from 'react';
import { FlagData } from '../../types/country';

export type CountryType = {
  name: string;
  flagData: FlagData;
};

export const Country = memo<CountryType>(({ name, flagData }) => {
  return (
    <li className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={flagData.flag} alt={flagData.alt} />
    </li>
  );
});
