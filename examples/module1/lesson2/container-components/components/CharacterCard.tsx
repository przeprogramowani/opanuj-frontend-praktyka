type CharacterCardProps = {
  name: string;
  image: string;
};

const CharacterCard = (character: CharacterCardProps) => (
  <section className="flex flex-col items-center">
    <h3>{character.name}</h3>
    <img src={character.image} alt={character.name} />
  </section>
);

export default CharacterCard;
