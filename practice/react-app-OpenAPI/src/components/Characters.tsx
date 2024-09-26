import { useEffect, useState } from 'react';
import { Character } from '../api/api-client-generated';
import { DefaultApi } from '../api/api-client-generated';
import CharacterItem from './CharacterItem';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const api = new DefaultApi();
    api
      .getCharacter()
      .then((response) => {
        setCharacters(response.results!);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="p-10 m-10">
      <ol className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {characters.map((character) => (
          <CharacterItem character={character} />
        ))}
      </ol>
    </div>
  );
};

export default Characters;
