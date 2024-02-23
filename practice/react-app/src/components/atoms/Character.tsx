import { memo } from 'react';

export type Character = {
  id: number;
  name: string;
  image: string;
};

export const Character = memo<Character>(({ id, name, image }: Character) => {
  return (
    <li key={id} className="flex flex-col items-center">
      <h3>{name}</h3>
      <img src={image} alt={name} />
    </li>
  );
});
