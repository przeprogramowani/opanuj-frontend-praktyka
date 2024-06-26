import { useEffect } from 'react';
import { QuizCountry, StartQuiz } from '../config/types';
import { shuffleArray } from '../utils/shuffleArray';

export const useStartOverHook = ({ startQuiz }: { startQuiz: StartQuiz }) => {
  const { countries, startOvert, setQuizCountries, setFirstRandomCountry } =
    startQuiz;

  useEffect(() => {
    if (countries.length > 0) {
      let selectedCountries: QuizCountry[] = [];
      while (selectedCountries.length < 4) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];
        if (
          !selectedCountries.some(
            (country) => country.name === randomCountry.name.common
          )
        ) {
          selectedCountries.push({
            name: randomCountry.name.common,
            flag: randomCountry.flags.png,
          });
        }
      }

      setQuizCountries(shuffleArray(selectedCountries));
      setFirstRandomCountry(selectedCountries[0]);
    }
  }, [countries, startOvert]);
};
