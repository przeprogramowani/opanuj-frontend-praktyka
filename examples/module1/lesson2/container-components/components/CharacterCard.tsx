import { Character } from '../types/Character';

export const CharacterCard = ({ character }: { character: Character }) => (
  <section className="flex flex-col items-center">
    <h3>{character.name}</h3>
    <img src={character.image} alt={character.name} />
  </section>
);
