import { MouseEventHandler, memo } from 'react';

type InputType = {
  name: string;
  onClick: (answer: string) => void;
};

export const Button = memo<InputType>(({ name, onClick }) => {
  return (
    <button
      className="flex mt-4"
      onClick={onClick as unknown as MouseEventHandler<HTMLButtonElement>}
    >
      {name}
    </button>
  );
});
