import { formatPopulation } from '../utils/utils';
import SingleFlag from './SingleFlag';

function CharacterList({ characters }: { characters: any }) {
  return (
    <div className="grid grid-cols-1 gap-4 list-none md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {characters?.map((character: any, index: number) => (
        <SingleFlag
          key={index}
          name={character.name.common}
          population={formatPopulation(character.population)}
          flagImg={character.flags.png}
        />
      ))}
    </div>
  );
}

export default CharacterList;
