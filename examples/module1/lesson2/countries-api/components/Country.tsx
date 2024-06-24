import { Country as CountryProps } from '../types/Country';

export enum CountryComponentType {
  PRESENTATION = 'presentation',
  GUESSING = 'guessing',
}

interface CountryComponentProps extends CountryProps {
  type?: CountryComponentType;
}

function Country({
  name,
  flag,
  population,
  type = CountryComponentType.PRESENTATION,
}: CountryComponentProps) {
  return (
    <div className="w-1/4">
      <img src={flag} alt={`${name} flag`} />
      {type === CountryComponentType.PRESENTATION && (
        <>
          <p className="text-center">Name: {name}</p>
          <p className="text-center">Population: {population}</p>{' '}
        </>
      )}
    </div>
  );
}

export default Country;
