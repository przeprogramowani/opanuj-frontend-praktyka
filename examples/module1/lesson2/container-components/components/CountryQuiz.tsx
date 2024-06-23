import React, { useEffect } from 'react';
import useCountries from '../hooks/useCountries';
import CountryItem from './CountryItem';

const CountryQuiz = () => {
  const { countries } = useCountries();
  const random = (): number => Math.floor(Math.random() * countries.length);
  const [randomCountry, setRandomCountry] = React.useState(0);
  const [searchValue, setSearchValue] = React.useState('');

  const handleCheck = () => {
    if (countries[randomCountry]?.name.common === searchValue) {
      alert('Dobrze!');
    } else {
      alert('Źle!');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setSearchValue(target.value);
  };

  useEffect(() => {
    setRandomCountry(random());
  }, []);

  return (
    countries.length > 0 && (
      <>
        <CountryItem
          name={countries[randomCountry].name}
          flags={countries[randomCountry].flags}
          quizMode={true}
        />
        <form className='mt-8' onSubmit={(e) => e.preventDefault()}>
          <input
            className='w-full'
            type='text'
            placeholder='Zgadnij jaki to kraj'
            onChange={handleInputChange}
            value={searchValue}
          />
          <div className='flex gap-5 mt-4'>
            <button className='flex flex-1' type='button' onClick={handleCheck}>
              Sprawdź
            </button>
            <button
              className='flex flex-1'
              type='button'
              onClick={() => {
                setRandomCountry(random());
                setSearchValue('');
              }}
            >
              Wylosuj ponownie
            </button>
          </div>
        </form>
      </>
    )
  );
};

export default CountryQuiz;
