import { CountryType } from '../../config/types';

const Country = ({ country }: { country: CountryType }) => {
  return (
    <li className="p-2 bg-green-300 rounded-lg my-2">
      <h2>{country.name.official}</h2>
      <h3 className="text-lg">
        {country.flag} {country.name.common}
      </h3>
      <p>Capital: {country.capital}</p>
      <p>
        Language:{' '}
        {country.languages
          ? Object.values(country.languages)[0]
          : 'No languages available'}
      </p>
      <p>
        Currency:{' '}
        {country.currencies
          ? Object.values(country.currencies)[0]?.name
          : 'No currency available'}
      </p>
      <p>Population: {country.population}</p>
    </li>
  );
};

export default Country;
