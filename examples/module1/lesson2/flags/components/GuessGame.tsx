import { useMemo, useState } from "react";
import SingleFlag from "./SingleFlag";
import { formatPopulation } from "../utils/utils";

function GuessGame({ character, fetchNewCharacter }: any) {
    const [name, setName ] = useState('');

    const handleChangeInput = useMemo(() => (e: React.ChangeEvent<HTMLInputElement>) => {
      setName(e.target.value);
  }, [name]);

  const handleCheckFlags = useMemo(() => () => {
      if(name === character.name.common){
        alert("Gratulacje! Zgadłeś flagę");
        fetchNewCharacter();
        setName('');
      }else{
        alert("Niestety, zła flaga");
      }
  },[character, name])


    return (
      <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Wpisz flage..." value={name} onChange={handleChangeInput} />
            <button onClick={handleCheckFlags}>Sprawdź</button>
            <button onClick={() => fetchNewCharacter()}>Wylosuj nową</button>
            <SingleFlag name={"******"} population={formatPopulation(character?.population)} flagImg={character.flags.png} />
      </div>
    );
  }
  
  export default GuessGame;
  