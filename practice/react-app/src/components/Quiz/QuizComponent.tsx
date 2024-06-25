import { useState } from 'react';
import { QuizCountry, StartQuiz } from '../../config/types';
import { initState } from '../../config/vars';
import { useFetchHook } from '../../hooks/useFetchHook';
import { useStartOverHook } from '../../hooks/useStartOverHook';
import CountriesFlags from './CountriesFlags';
import { ErrorMessage } from './ErrorMessage';
import { FailureMessage } from './FaliureMessage';
import { LoadingMessage } from './LoadingMessage';
import { VictoryMessage } from './VictoryMessage';

const QuizComponent = () => {
  const { countries, error, loading } = useFetchHook();
  const [firstRandomCountry, setFirstRandomCountry] =
    useState<QuizCountry>(initState);
  const [quizCountries, setQuizCountries] = useState<QuizCountry[]>([]);
  const [victory, setVictory] = useState(false);
  const [startOvert, setStartOver] = useState(false);

  const startQuiz: StartQuiz = {
    countries,
    startOvert,
    setQuizCountries,
    setFirstRandomCountry,
  };

  useStartOverHook({ startQuiz });

  const onClickHandler = (country: QuizCountry) => {
    if (country.name === firstRandomCountry.name) {
      setVictory(true);
    } else {
      setVictory(false);
    }
  };

  return (
    <section className="w-[80rem] bg-gray-200 p-4 rounded-lg">
      <h1 className="text-center mb-4">{firstRandomCountry?.name}</h1>
      {loading ? (
        <LoadingMessage />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {!victory && (
            <div className="flex flex-row items-center justify-center gap-4">
              <CountriesFlags
                onClickHandler={onClickHandler}
                quizCountries={quizCountries}
              />
            </div>
          )}
          {victory ? (
            <VictoryMessage
              firstRandomCountry={firstRandomCountry}
              setStartOver={setStartOver}
              setVictory={setVictory}
            />
          ) : (
            <FailureMessage />
          )}
        </>
      )}
    </section>
  );
};

export default QuizComponent;
