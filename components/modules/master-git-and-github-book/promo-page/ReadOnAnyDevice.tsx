import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function ReadOnAnyDevice(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2 className='mb-7  lg:mb-9'>Read on any device</H2>
      </MainContainer>
    </section>
  );
}

export default ReadOnAnyDevice;
