import { PropsWithChildren } from 'react';
import Button from './Button';

interface ClearButtonProps {
  id?: string;
  onClick: () => void;
}

export function ClearButton({
  id = 'button2',
  children,
  onClick,
}: ClearButtonProps & PropsWithChildren) {
  return (
    <Button id={id} className="bg-red-200 hover:bg-red-800" onClick={onClick}>
      {children}
    </Button>
  );
}

export default ClearButton;
