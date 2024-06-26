interface CharacterCardProps {
  name: string;
  image: string;
}

function CharacterCard({ image, name }: CharacterCardProps) {
  return (
    <>
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </>
  );
}

export default CharacterCard;
