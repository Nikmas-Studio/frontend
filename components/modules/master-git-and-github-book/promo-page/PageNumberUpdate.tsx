import H2 from '@/components/elements/H2';
import { ReactElement } from 'react';

function PageNumberUpdate(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <H2 className='mb-7  lg:mb-9'>Page numbers update as you scroll</H2>
    </section>
  );
}

export default PageNumberUpdate;
