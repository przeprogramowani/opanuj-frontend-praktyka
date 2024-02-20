import { PropsWithChildren } from 'react';

export function TextFieldsContainer({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-2 gap-x-4">{children}</div>;
}

export default TextFieldsContainer;
