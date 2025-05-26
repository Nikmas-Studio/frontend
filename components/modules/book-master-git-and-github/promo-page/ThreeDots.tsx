import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function ThreeDots(): ReactElement {
  return (
    <section>
      <MainContainer>
        <p
          className='mb-52  mt-12  text-center  text-[11rem]
                   leading-none  text-[#D9D9D9]  md:mb-72'
        >
          ...
        </p>
      </MainContainer>
    </section>
  );
}

export default ThreeDots;
