import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import travelTheWorldComfortablyAndConfidently from '@/public/images/travel-with-comfort-and-confidence.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function TravelWithComfortAndConfidence(): ReactElement {
  return (
    <section className='mt-[4.5rem]  lg:mt-24'>
      <MainContainer className='xl:flex  xl:flex-row-reverse  xl:gap-10'>
        <div className='mb-10  xl:mb-0  xl:w-1/2'>
          <Image
            className='rounded-[14px]  lg:rounded-[20px]'
            src={travelTheWorldComfortablyAndConfidently}
            alt='Travel the World Comfortably and Confidently'
          />
        </div>
        <div className='xl:w-1/2  1.5xl:mt-7'>
          <H2
            className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
          >
            Travel the world comfortably and confidently
          </H2>
          <TextNode className='max-w-[45rem]'>
            Proficiency in English gives you the freedom to travel all around
            the world comfortably and confidently — because you can speak
            fluently with anyone you meet.
          </TextNode>
          <TextNode className='max-w-[45rem]'>
            And we’re here to help you achieve that freedom, that confidence,
            and the comfort of traveling anywhere — with the most effective and
            engaging English-boosting tool out there, verified and recommended
            by the world’s best English teachers.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default TravelWithComfortAndConfidence;
