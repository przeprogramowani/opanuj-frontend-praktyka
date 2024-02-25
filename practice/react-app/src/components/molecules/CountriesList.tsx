import { memo } from 'react';
import { Country } from '../Country';
import { CountryData } from '../../types/Country';

type CountriesListType = {
  countries: CountryData[];
};

export const CountriesList = memo<CountriesListType>(({ countries }) => {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => {
        const {
          idd,
          name: { official },
          flags: { svg },
        } = country;
        return <Country key={idd} name={official} flag={svg} />;
      })}
    </ol>
  );
});

export default CountriesList;
