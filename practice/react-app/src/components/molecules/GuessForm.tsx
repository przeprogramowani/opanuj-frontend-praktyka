import { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { UseCountriesContext } from '../../context/CountriesApiContext';
import Title from '../atoms/Title';
import { fetchCountryData } from '../../utils/api';
import { API_URL } from '../../static/url';

// type SearchFormType = {};

export const GuessForm = () => {
  const [answer, setAnswer] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const { countries, setCountries } = UseCountriesContext();

  const checkUserAnswer = (answer: string) => {
    const [country] = countries;
    const res = country.name.toLowerCase() === answer.toLowerCase();
    setIsSuccess(res);
    setShowMessage(true);
    return;
  };

  const drawNewCountry = async () => {
    setAnswer('');
    setCountries(await fetchCountryData(`${API_URL}/all`, 'GUESS'));
  };

  const message = isSuccess ? 'Congratulation' : 'Try Again';
  return (
    <div className="flex flex-col items-center align-items justify-center border-2 ">
      <Input
        label="What is your answer ?"
        type="text"
        placeholder="Country"
        name={answer}
        setName={setAnswer}
      />
      <Button name="Check" onClick={() => checkUserAnswer(answer)} />
      <Button name="Draw again" onClick={async () => drawNewCountry()} />
      <Title
        title={showMessage ? message : 'What is the name of the country ?'}
      />
    </div>
  );
};
