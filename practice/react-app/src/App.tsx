import { useState } from 'react';
import QuizComponent from './components/Quiz/QuizComponent';
import SearchComponent from './components/Search/SearchComponent';

const HomePage = () => {
  const [quiz, setQuiz] = useState<boolean>(false);
  const [search, setSearch] = useState<boolean>(true);

  const quizHandler = () => {
    setQuiz(true);
    setSearch(false);
  };
  const searchHandler = () => {
    setQuiz(false);
    setSearch(true);
  };

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="py-8 text-xl font-semibold">Search Countries</h1>

      <label htmlFor="quiz" className="mb-4">
        <input
          className="mr-2"
          type="radio"
          name="quiz"
          id="quiz"
          checked={quiz}
          onChange={quizHandler}
        />
        Quiz
      </label>
      <label htmlFor="quiz" className="mb-4">
        <input
          className="mr-2"
          type="radio"
          name="search"
          id="search"
          checked={search}
          onChange={searchHandler}
        />
        Search
      </label>

      {!quiz && search && <SearchComponent />}
      {quiz && !search && <QuizComponent />}
    </main>
  );
};

export default HomePage;
