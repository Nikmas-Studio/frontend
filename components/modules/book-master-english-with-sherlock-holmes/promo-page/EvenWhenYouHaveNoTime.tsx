import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import { libreBaskerville } from '@/fonts';
import { ReactElement } from 'react';

function EvenWhenYouHaveNoTime(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer>
        <H2
          className={`max-w-[55rem]  lg:mx-auto  lg:text-center  ${libreBaskerville.className}  !leading-snug`}
        >
          Even when you
          <br className='sm:hidden' /> have no time.
          <br /> Read the book just&nbsp;10&nbsp;minutes a day — and advance
          toward your global success with&nbsp;joy&nbsp;and&nbsp;ease!
        </H2>
      </MainContainer>
    </section>
  );
}

export default EvenWhenYouHaveNoTime;
