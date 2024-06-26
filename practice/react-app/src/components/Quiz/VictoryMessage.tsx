import { QuizCountry } from '../../config/types';

export const VictoryMessage = ({
  firstRandomCountry,
  setStartOver,
  setVictory,
}: {
  firstRandomCountry: QuizCountry;
  setStartOver: React.Dispatch<React.SetStateAction<boolean>>;
  setVictory: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <div className="flex flex-col items-center justify-center gap-4">
    <h3 className="text-green-500 text-center pt-4 text-xl">
      Bravo! {firstRandomCountry?.name} is the winner!
    </h3>
    <img
      className="w-28 h-18 rounded-sm hover:cursor-pointer"
      src={firstRandomCountry.flag}
      alt={firstRandomCountry.name}
    />
    <button
      className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        setStartOver((state) => !state);
        setVictory(false);
      }}
    >
      Start over
    </button>
  </div>
);
