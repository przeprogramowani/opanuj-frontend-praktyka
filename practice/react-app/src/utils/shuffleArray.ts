import { QuizCountry } from '../config/types';

export const shuffleArray = (array: QuizCountry[]): QuizCountry[] => {
  return array.reduceRight(
    (shuffledArray, _, i) => {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
      return shuffledArray;
    },
    [...array]
  );
};
