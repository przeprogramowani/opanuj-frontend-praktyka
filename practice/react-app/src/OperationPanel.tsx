import { Fragment } from 'react';
import { OperationType } from './mathOperations';

type OperationsPanelProps = {
  viewFn: (operation: OperationType) => JSX.Element;
  operations: OperationType[];
};

export const OperationsPanel = ({
  viewFn,
  operations,
}: OperationsPanelProps) => {
  return (
    <div className="grid grid-cols-4 gap-x-4 my-4">
      {operations.map((operation) => (
        <Fragment key={operation.sign}>{viewFn(operation)}</Fragment>
      ))}
    </div>
  );
};
