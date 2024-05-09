import React from 'react';

const PasswordHintImage: React.FC = () => {
  return (
    <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
      <img
        className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
        src="./../assets/pickle-rick.jpg"
        alt="Kreskówkowy wizerunek antropomorficznego zielonego ogórka z twarzą, leżącego na szarej powierzchni ze zdziwionym wyrazem twarzy. Postać ma dwoje dużych oczu z niebieskimi tęczówkami, szeroko otwarte usta z widocznymi zębami i jest podkreślona jaśniejszymi odcieniami zieleni i plamami."
      />
    </div>
  );
};

export default PasswordHintImage;
