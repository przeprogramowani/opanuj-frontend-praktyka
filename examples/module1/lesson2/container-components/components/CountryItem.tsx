import React from 'react';
import { Country } from '../types/Country';

type CountryProps = Country;

const CountryItem = ({ name, flags, quizMode }: CountryProps) => {
  return (
    <figure className='flex flex-col gap-2 object-cover'>
      <img className='w-full h-24' src={flags.svg} alt={name.common} />
      {!quizMode && name.common && <figcaption>{name.common}</figcaption>}
    </figure>
  );
};

export default CountryItem;
