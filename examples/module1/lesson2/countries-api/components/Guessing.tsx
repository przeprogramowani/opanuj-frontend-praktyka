import { useEffect, useState } from 'react';

function Guessing({ countryName }: { countryName: string }) {
  const [userGuess, setUserGuess] = useState('');
  const [hasGuessed, setHasGuessed] = useState(false);
  const [guessResult, setGuessResult] = useState('');

  function checkGuess() {
    setHasGuessed(true);
    const transformedGuess = userGuess.toLowerCase();
    const transformedName = countryName.toLowerCase();
    if (transformedGuess === transformedName) {
      setGuessResult('Correct!');
      setUserGuess('');
    } else {
      setGuessResult('Try again');
    }
  }

  useEffect(() => {
    setUserGuess('');
    setHasGuessed(false);
  }, [countryName]);

  return (
    <>
      <input
        className="border border-black"
        placeholder="Guess..."
        type="text"
        onChange={(e) => setUserGuess(e.target.value)}
        value={userGuess}
      />
      <button onClick={checkGuess}>Guess</button>
      <span className="block">
        {hasGuessed && <p className="text-center">{guessResult}</p>}
      </span>
    </>
  );
}

export default Guessing;
