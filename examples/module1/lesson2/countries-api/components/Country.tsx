import { Country as CountryProps } from '../types/Country';

function Country({ name, flag, population }: CountryProps) {
  return (
    <div className="w-1/4">
      <img src={flag} alt={`${name} flag`} />
      <p className="text-center">Name: {name}</p>
      <p className="text-center">Population: {population}</p>
    </div>
  );
}

export default Country;
