import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import { libreBaskerville } from '@/fonts';
import ellenRecomendation1 from '@/public/images/ellen-recommendation-1.jpg';
import ellenRecomendation2 from '@/public/images/ellen-recommendation-2.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function Reviews(): ReactElement {
  return (
    <section className='mt-16  lg:mt-24'>
      <MainContainer>
        <H2
          className={`mb-7  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
        >
          Verified and recommended by the world's best English teachers
        </H2>
        <div className='flex  flex-col  gap-11  lg:flex-row  lg:justify-between'>
          <div>
            <Image
              className='rounded-[14px]  lg:rounded-[20px]'
              src={ellenRecomendation1}
              alt='Ellen Recommendation 1'
            />
          </div>
          <div>
            <Image
              className='rounded-[14px]  lg:rounded-[20px]'
              src={ellenRecomendation2}
              alt='Ellen Recommendation 2'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Reviews;
