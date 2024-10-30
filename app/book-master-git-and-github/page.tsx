import BasicTextNode from '@/components/elements/BasicTextNode';
import BuddhaSvg from '@/components/elements/BuddhaSvg';
import H2 from '@/components/elements/H2';
import H3 from '@/components/elements/H3';
import H4 from '@/components/elements/H4';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import authorPhoto from '@/public/images/Nick_Maslov.jpg';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Master Git & Github: From Everyday Tasks to Deep Waters',
  description:
    'A next-gen, highly illustrative, and interactive e-book to master Git and Github and make you a version control guru.',
};

function MasterGitAndGithubBookPromo(): ReactElement {
  return (
    <DefaultLayout>
      <div>
        <div className='pt-[5.118rem]'>
          <HeaderDefault />
          <MainContainer>
            <h1
              className='mb-3  mt-5  text-4xl  font-bold  leading-tight  
                           lg:text-[2.7rem]  dark:text-white'
            >
              Master Git&nbsp;& Github: <br className='xl:hidden' />
              From&nbsp;Everyday Tasks to&nbsp;Deep Waters
            </h1>
            <h2 className='text-4xl  font-medium  lg:text-[2.7rem]  dark:text-white'>
              Interactive e&#8209;book
            </h2>
            <section
              className='mt-11  lg:flex  lg:flex-row  lg:justify-between  
                            lg:gap-8  xl:gap-0'
            >
              <div
                className='top-[6.2rem]  flex  w-full  flex-none  flex-col  
                           self-start  sm:w-[400px]  lg:sticky  lg:w-[30vw]
                           xl:w-[400px]'
              >
                <div className='mb-10'>
                  <Image
                    src={bookCoverLight}
                    alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                    className='w-full  select-none  rounded-[14px]
                           [box-shadow:0px_0px_85px_20px_rgba(0,0,0,0.06)]  
                           dark:hidden'
                    sizes='(max-width: 639px) 100vw, (max-width: 1023px) 400px, (max-width: 1279px) 30vw, 400px'
                    quality={100}
                    priority
                  />
                  <Image
                    src={bookCoverDark}
                    alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                    className='hidden  w-full  select-none  rounded-[14px]
                             dark:inline-block'
                    sizes='(max-width: 639px) 100vw, (max-width: 1023px) 400px, (max-width: 1279px) 30vw, 400px'
                    quality={100}
                    priority
                  />
                </div>
                <Link
                  href='/book-master-git-and-github/demo'
                  className='mb-1  inline-block  self-center  rounded-lg  bg-black  px-6  
                           py-2  text-lg  font-semibold 
                         text-white  hover:bg-git-blue  hover:transition-colors  
                           xl:pb-[.60rem] dark:bg-white  
                           dark:text-black  dark:hover:text-white'
                >
                  Try demo
                </Link>
              </div>
              <div className='mt-14  lg:mt-0  xl:pl-14  xl:pr-16'>
                <BasicTextNode
                  className='mb-7  text-[1.375rem]  font-semibold
                           leading-snug'
                >
                  This is a&nbsp;next&#8209;gen, highly illustrative,
                  and&nbsp;interactive e&#8209;book to&nbsp;master
                  Git&nbsp;and&nbsp;Github. We&apos;ll start
                  from&nbsp;the&nbsp;essentials you need to&nbsp;know
                  to&nbsp;complete everyday tasks seamlessly,
                  and&nbsp;then&nbsp;dive deep into&nbsp;advanced topics
                  and&nbsp;internal details to&nbsp;make you a&nbsp;version
                  control guru.
                </BasicTextNode>
                <TextNode>
                  Git and&nbsp;Github are&nbsp;the&nbsp;version control tools.
                  They&apos;re the&nbsp;tools that&nbsp;every software developer
                  should know. And&nbsp;they&apos;re the&nbsp;tools
                  that&nbsp;every person who&nbsp;works with&nbsp;files can
                  benefit from. And&nbsp;there&nbsp;are&nbsp;many resources
                  to&nbsp;learn those things. But,&nbsp;the&nbsp;popular
                  resources on&nbsp;Git and&nbsp;Github I know are&nbsp;either
                  highly illustrative and&nbsp;interactive but&nbsp;quite
                  superficial, deep enough but&nbsp;static and&nbsp;dull,
                  or&nbsp;they are&nbsp;videos.
                </TextNode>
                <TextNode>
                  What I&nbsp;offer is&nbsp;an&nbsp;e&#8209;book that&nbsp;is
                  at&nbsp;the&nbsp;same time highly illustrative, interactive,
                  deep enough, up-to-date, and&nbsp;that&nbsp;will&nbsp;take you
                  step by&nbsp;step from&nbsp;a&nbsp;point where you know
                  nothing about&nbsp;Git and&nbsp;Github to&nbsp;a&nbsp;master
                  level in&nbsp;those tools.
                </TextNode>
                <TextNode>
                  And&nbsp;unlike video format, it&apos;ll&nbsp;be
                  very&nbsp;convenient to&nbsp;use this&nbsp;book
                  as&nbsp;a&nbsp;reference. You&apos;ll
                  be&nbsp;able&nbsp;to&nbsp;find the&nbsp;necessary piece
                  of&nbsp;information instantly with&nbsp;special search tools
                  that&nbsp;are&nbsp;coming soon.
                </TextNode>
                <TextNode>Enjoy the&nbsp;book!</TextNode>
              </div>
              <div className='mt-10  flex-none  lg:mt-0  lg:w-[235px]'>
                <Image
                  src={authorPhoto}
                  alt='Author: Nick Maslov'
                  className='w-[275px]  rounded-[14px]  lg:w-[215px]'
                  quality={100}
                  priority
                />
                <BasicTextNode
                  className='mb-1  mt-5  w-[275px]  text-[1.28rem]
                             font-bold  lg:w-[225px]  lg:text-[1.2rem]'
                >
                  Author:&nbsp;Nick&nbsp;Maslov
                </BasicTextNode>
                <TextNode className='w-[275px]  !text-base  lg:w-auto'>
                  CEO, Enterprise Architect, and&nbsp;Creative Producer
                  at&nbsp;Nikmas&nbsp;Studio
                </TextNode>
                <BasicTextNode
                  className='mt-11  text-6xl  font-medium  
                             leading-[1.1]  lg:mt-9  lg:text-4xl'
                >
                  It&apos;s time
                  <br />
                  to make
                  <br />
                  e&#8209;books
                  <br />
                  alive
                </BasicTextNode>
                <TextNode className='mt-7  lg:mt-5  lg:text-[1.0625rem]  lg:leading-normal'>
                  We got so&nbsp;many tools to&nbsp;make the&nbsp;reading
                  process dynamic, interactive, and&nbsp;thus
                  more&nbsp;immersive, but&nbsp;our e&#8209;books are&nbsp;still
                  static canvases of&nbsp;text. It&apos;s&nbsp;time
                  to&nbsp;change this.
                </TextNode>
              </div>
            </section>
            <section className='mt-[5.7rem]  lg:mt-24'>
              <div className='relative'>
                <H2
                  className='absolute  left-1/2  top-1/2  inline-block  
                             -translate-x-1/2  -translate-y-1/2  bg-white
                             px-5  sm:px-7  dark:bg-black'
                >
                  Contents
                </H2>
                <hr className='border-[#EBEBEB]  dark:border-[#414141]' />
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
                    <H3 className='!text-git-orange'>Part 1. Everyday Tasks</H3>
                    <p
                      className='translate-y-[-0.24rem]  rounded-md  border  border-git-orange
                                 px-[0.65rem]  pb-[0.28rem]  pt-[0.2rem]  text-base  leading-[1.2]
                               text-git-orange  lg:pb-[0.23rem]  lg:pt-[0.15rem]'
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
                <div className='flex  basis-1/2  flex-col  justify-between  lg:basis-auto'>
                  <div>
                    <div
                      className='flex  flex-col  items-start  gap-2  
                                 2sm:flex-row  2sm:items-end  2sm:gap-3  
                                 md:flex-col  md:items-start  md:gap-2  
                                 lg:flex-row  lg:items-end  lg:gap-3'
                    >
                      <H3 className='!text-git-blue'>Part 2. Deep Waters</H3>
                      <p
                        className='translate-y-[-0.24rem]  rounded-md  border
                                 border-git-blue  px-[0.65rem]  pb-[0.28rem]
                                  pt-[0.2rem]  text-base  leading-[1.2]
                                 text-git-blue  lg:pb-[0.23rem]  lg:pt-[0.15rem]'
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
                        <H4>Github, Again</H4>
                        <H4>Subtle Tools of Git Guru</H4>
                        <H4>Internal Mysteries of Git</H4>
                      </ul>
                    </div>
                  </div>
                  <BuddhaSvg
                    className='mx-auto  mt-[4.8rem]  w-[70%]  max-w-[270px]  
                               fill-white  
                               [filter:drop-shadow(0_0_250px_rgba(0,0,0,0.20))]
                               md:ml-0  md:mt-12  md:max-w-[245px]  
                               md:[filter:drop-shadow(0_0_250px_rgba(0,0,0,0.22))]  
                               dark:fill-black  
                               dark:[filter:drop-shadow(0_0_250px_rgba(255,255,255,0.45))]'
                  />
                </div>
              </div>
            </section>
          </MainContainer>
          <Footer />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MasterGitAndGithubBookPromo;
