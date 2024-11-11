import H2 from '@/components/elements/H2';
import MainContainer from '@/components/elements/MainContainer';
import exercisePreviewDark from '@/public/images/exercise-preview-dark.jpg';
import exercisePreviewLight from '@/public/images/exercise-preview-light.jpg';
import quizPreviewDark from '@/public/images/quiz-preview-dark.jpg';
import quizPreviewLight from '@/public/images/quiz-preview-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';

function QuizzesAndExercises(): ReactElement {
  return (
    <section className='mt-20  lg:mt-[6.8rem]'>
      <MainContainer>
        <H2 className='mb-12  lg:mb-14  2lg:mb-12'>
          Test and&nbsp;reinforce your knowledge with&nbsp;quizzes
          and&nbsp;exercises
          <br className='2lg:hidden' />
          <span
            className='mt-[1.2rem] inline-block  translate-y-[-0.26rem]  rounded-[10px]
                       border  border-blue  px-4
                       py-2  text-2xl  font-normal  leading-none
                       text-blue  2lg:ml-4  2lg:mt-0'
          >
            Soon
          </span>
        </H2>
        <div
          className='relative  flex  flex-col  gap-11  lg:flex-row  lg:justify-between
                        lg:gap-14'
        >
          <div>
            <Image
              className='rounded-[14px]  border  border-gray-light
                       lg:rounded-[20px]  dark:hidden'
              src={quizPreviewLight}
              alt='Quiz preview'
            />
            <Image
              className='hidden  rounded-[14px]  border  
                       border-gray-dark  lg:rounded-[20px]  dark:inline-block'
              src={quizPreviewDark}
              alt='Quiz preview'
            />
          </div>
          <div>
            <Image
              className='rounded-[14px]  border  border-gray-light
                       lg:rounded-[20px]  dark:hidden'
              src={exercisePreviewLight}
              alt='Quiz preview'
            />
            <Image
              className='hidden  rounded-[14px]  border  
                       border-gray-dark  lg:rounded-[20px]  dark:inline-block'
              src={exercisePreviewDark}
              alt='Quiz preview'
            />
          </div>
          <p
            className='absolute  left-1/2  top-[44%]  -translate-x-1/2
                        rotate-[-15deg]  text-6xl  font-bold  text-subscription
                        lg:top-[38%]  xl:text-7xl'
          >
            Approved
          </p>
        </div>
      </MainContainer>
    </section>
  );
}

export default QuizzesAndExercises;
