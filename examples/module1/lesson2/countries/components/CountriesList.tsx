import { Countries } from '../types/Countries';
interface CountriesListProps {
  countries: Countries[];
}

export const CountriesList = ({ countries }: CountriesListProps) => {
  return (
    <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {countries.map((country) => (
        <li key={country.id} className="flex flex-col items-center">
          <img src={country.flags.png} alt={country.flags.alt} />
          <h2>{country.name.common}</h2>
        </li>
      ))}
    </ol>
  );
};
