import { useCharacterRandom } from '../hooks/useCharcterSearch';
import GuessGame from '../components/GuessGame';

function GuessGameContainer() {
  const { character, fetchNewCharacter } = useCharacterRandom();

  return (
    <>  
      <div className="pt-20" />
      {character && (
        <div>
          <GuessGame
            character={character}
            fetchNewCharacter={fetchNewCharacter}
          />
        </div>
      )}
    </>
  );
}

export default GuessGameContainer;
