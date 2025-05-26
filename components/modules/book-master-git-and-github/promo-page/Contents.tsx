import BuddhaSvg from '@/components/elements/BuddhaSvg';
import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import H4 from '@/components/elements/H4';
import MainContainer from '@/components/elements/MainContainer';
import { ReactElement } from 'react';

function Contents(): ReactElement {
  return (
    <section className='mt-[5.7rem]  lg:mt-24'>
      <MainContainer>
        <div className='relative'>
          <H2
            className='absolute  left-1/2  top-1/2  inline-block  
                             -translate-x-1/2  -translate-y-1/2  bg-white
                             px-5  sm:px-7  dark:bg-black'
          >
            Contents
          </H2>
          <hr className='border-gray-light  dark:border-gray-dark' />
        </div>
        <div
          className='mt-14  flex  flex-col  gap-16  md:flex-row  
                           md:justify-between  lg:justify-center  lg:gap-40'
        >
          <div className='basis-1/2  lg:basis-auto'>
            <div
              className='flex  flex-col  items-start  gap-2  
                                 2sm:flex-row  2sm:items-end  2sm:gap-3  
                                 md:flex-col  md:items-start  md:gap-2  
                                 lg:flex-row  lg:items-end  lg:gap-3'
            >
              <H3 className='font-bold  !text-orange'>
                Part 1. Everyday Tasks
              </H3>
              <p
                className='translate-y-[-0.24rem]  rounded-md  border  border-orange
                                 px-[0.65rem]  pb-[0.28rem]  pt-[0.2rem]  text-base  leading-[1.2]
                               text-orange  lg:pb-[0.23rem]  lg:pt-[0.15rem]'
              >
                In progress
              </p>
            </div>
            <div className='mt-8  2sm:mt-6'>
              <ul className='flex  flex-col  gap-4'>
                <H4>Introduction to Version Control</H4>
                <H4>Fundamental Concepts Overview</H4>
                <H4>Git Installation & Setup</H4>
                <H4>Git Basics</H4>
                <H4>Branching</H4>
                <H4>Stashing</H4>
                <H4>Time Traveling</H4>
                <H4>Comparing Changes</H4>
                <H4>Undoing Changes</H4>
                <H4>Remotes</H4>
                <H4>GitHub</H4>
                <H4>Rebasing</H4>
                <H4>Workflows</H4>
                <H4>Git Tags</H4>
                <H4>Git Aliases</H4>
              </ul>
            </div>
          </div>
          <div
            className='relative  flex  basis-1/2  flex-col  justify-between
                                 lg:basis-auto'
          >
            <div>
              <div
                className='flex  flex-col  items-start  gap-2  
                                 2sm:flex-row  2sm:items-end  2sm:gap-3  
                                 md:flex-col  md:items-start  md:gap-2  
                                 lg:flex-row  lg:items-end  lg:gap-3'
              >
                <H3 className='font-bold  !text-blue'>Part 2. Deep Waters</H3>
                <p
                  className='translate-y-[-0.24rem]  rounded-md  border
                                 border-blue  px-[0.65rem]  pb-[0.28rem]
                                  pt-[0.2rem]  text-base  leading-[1.2]
                                 text-blue  lg:pb-[0.23rem]  lg:pt-[0.15rem]'
                >
                  In progress
                </p>
              </div>
              <div className='mt-8  2sm:mt-6'>
                <ul className='flex  flex-col  gap-4'>
                  <H4>The Dark Magic of Reflogs</H4>
                  <H4>On Stranger Tides of Worktrees</H4>
                  <H4>A Song of Submodules</H4>
                  <H4>Catching Bugs with Git Bisect</H4>
                  <H4>GitHub, Again</H4>
                  <H4>Subtle Tools of Git Guru</H4>
                  <H4>Internal Mysteries of Git</H4>
                </ul>
              </div>
            </div>
            <BuddhaSvg
              className='buddha-firefox-shadow  mx-auto  mt-16  w-[70%]  
                               max-w-[270px]  
                               fill-white
                               will-change-transform
                               [filter:drop-shadow(0_0_120px_rgba(0,0,0,0.08))]  md:ml-0  md:mt-20  
                               md:w-4/5
                               md:max-w-[280px]  
                               md:[filter:drop-shadow(0_0_250px_rgba(0,0,0,0.22))]
                               dark:fill-black
                               dark:[filter:drop-shadow(0_0_120px_rgba(255,255,255,0.25))]
                               dark:md:[filter:drop-shadow(0_0_250px_rgba(255,255,255,0.68))]'
            />
          </div>
        </div>
      </MainContainer>
    </section>
  );
}

export default Contents;
