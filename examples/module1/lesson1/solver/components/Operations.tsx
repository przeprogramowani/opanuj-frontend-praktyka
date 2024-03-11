import React, { FC, ReactElement } from 'react';

type OperationsProps = {
  children: ReactElement[]
};

const Operations: FC<OperationsProps> = ({  children }): ReactElement => {
  return <div className='grid grid-cols-4 gap-x-4 my-4'>{children}</div>;
};

export default Operations;