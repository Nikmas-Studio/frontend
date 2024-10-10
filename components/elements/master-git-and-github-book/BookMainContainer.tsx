import { ReactElement, ReactNode } from 'react';

function BookMainContainer({
  children,
}: {
  children?: ReactNode;
}): ReactElement {
  return (
    <div className='px-[8.4vw]  pb-40  pt-20  max-md:px-[4.2vw]  max-md:pb-24  max-md:pt-14'>
      {children}
    </div>
  );
}

export default BookMainContainer;
