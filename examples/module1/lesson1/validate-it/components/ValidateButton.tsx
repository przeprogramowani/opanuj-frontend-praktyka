import { PropsWithChildren } from 'react';
import Button from './Button';

interface ValidateButtonProps {
  id?: string;
  onClick: () => void;
}

export function ValidateButton({
  id = 'button',
  children,
  onClick,
}: ValidateButtonProps & PropsWithChildren) {
  return (
    <Button id={id} className="bg-blue-200 hover:bg-blue-800" onClick={onClick}>
      {children}
    </Button>
  );
}

export default ValidateButton;
