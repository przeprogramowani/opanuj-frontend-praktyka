import { memo } from 'react';

export type CountryType = {
  name: string;
  flag: string;
};

export const Country = memo<CountryType>(({ name, flag }) => {
  return (
    <li className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={flag} alt={name} />
    </li>
  );
});
