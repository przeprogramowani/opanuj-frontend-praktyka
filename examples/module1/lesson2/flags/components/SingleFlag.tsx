function SingleFlag({
  name,
  population,
  flagImg,
}: {
  name: string;
  population: string;
  flagImg: string;
}) {
  return (
    <div className="grid grid-cols-1">
      <div className="flex flex-col items-center">
        <h3>
          {name}, populacja {population}
        </h3>
        <img src={flagImg} alt={name} />
      </div>
    </div>
  );
}

export default SingleFlag;
