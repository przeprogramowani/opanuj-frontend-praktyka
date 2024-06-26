import { FC } from 'react';
import { QuizCountry } from '../../config/types';
import { shuffleArray } from '../../utils/shuffleArray';

interface IPropsTypes {
  onClickHandler: (country: QuizCountry) => void;
  quizCountries: QuizCountry[];
}

const CountriesFlags: FC<IPropsTypes> = ({
  onClickHandler,
  quizCountries,
}: IPropsTypes) => {
  return (
    <>
      {shuffleArray(quizCountries).map((country) => {
        return (
          <div key={country.name} className="w-[14rem] h-[10rem] rounded-lg">
            <img
              className="w-full h-full rounded-lg hover:cursor-pointer"
              src={country.flag}
              alt={country.name}
              onClick={() => onClickHandler(country)}
            />
          </div>
        );
      })}
    </>
  );
};

export default CountriesFlags;
