import { PropsWithChildren } from 'react';

export function OperationsContainer({ children }: PropsWithChildren) {
  return <div className="grid grid-cols-4 gap-x-4 my-4">{children}</div>;
}
export default OperationsContainer;
