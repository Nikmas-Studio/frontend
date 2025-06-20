import { ReactElement, ReactNode } from 'react';

function Indent({ children }: { children: ReactNode }): ReactElement {
  return <div className='pl-14'>{children}</div>;
}

export default Indent;
