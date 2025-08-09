import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import { libreBaskerville } from '@/fonts';
import yourKeyToGlobalSuccess from '@/public/images/your-key-to-global-success.jpeg';
import Image from 'next/image';
import { ReactElement } from 'react';

function YourKeyToGlobalSuccess(): ReactElement {
  return (
    <section className='mt-16  lg:mt-24'>
      <MainContainer className='xl:flex  xl:gap-10'>
        <div className='mb-9  xl:mb-0  xl:w-1/2'>
          <Image
            className='rounded-[14px]  lg:rounded-[20px]'
            src={yourKeyToGlobalSuccess}
            alt='Your Key to Global Success'
          />
        </div>
        <div className='xl:w-1/2  1.5xl:mt-4'>
          <H2
            className={`mb-7  max-w-[55rem]  lg:mb-9  ${libreBaskerville.className}  !leading-snug`}
          >
            This is the key <br className='hidden  xl:inline' /> to your global
            success!
          </H2>
          <TextNode className='max-w-[45rem]'>
            Roles in IT, design, marketing, sales, and beyond often pay 2x–5x
            more when operating in global markets. Platforms like Upwork,
            Toptal, and LinkedIn are dominated by English-language jobs.
            Leadership positions frequently require proficiency in English.
          </TextNode>
          <TextNode className='max-w-[45rem]'>
            By mastering English, you directly multiply your income and open the
            path to top-level roles. And we’re here to help you become
            proficient in English in record time — with the most effective and
            engaging tool out there, verified and recommended by the world’s
            best English teachers.
          </TextNode>
        </div>
      </MainContainer>
    </section>
  );
}

export default YourKeyToGlobalSuccess;
