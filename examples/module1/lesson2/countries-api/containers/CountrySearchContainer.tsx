import { useState } from 'react';
import { SortOptions } from '../types/SortOptions';
import { useCountries } from '../hooks/useCountries';
import { sortCountries } from '../helpers/sortCountries';
import { CurrencyInput } from '../components/CurrencyInput';
import SortSelect from '../components/SortSelect';
import Country from '../components/Country';

function CountrySearchContainer() {
  const [sortOption, setSortOption] = useState<SortOptions | string>('');
  const [currency, setCurrency] = useState('');
  const countries = useCountries(currency);

  const sortedCountries = sortCountries(sortOption, countries);

  return (
    <>
      <form>
        <CurrencyInput currency={currency} setCurrency={setCurrency} />
        <SortSelect sortOption={sortOption} setSortOption={setSortOption} />
      </form>
      <div className="flex flex-wrap justify-center gap-3">
        {sortedCountries.map(({ name, flag, population }) => (
          <Country name={name} flag={flag} population={population} />
        ))}
      </div>
    </>
  );
}

export default CountrySearchContainer;
