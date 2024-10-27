import MainContainer from '@/components/elements/MainContainer';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Nikmas Studio',
  description:
    'Next-gen publishing studio that specializes in creating interactive e-books.',
};

function MasterGitAndGithubBookPromo(): ReactElement {
  return (
    <DefaultLayout>
      <div>
        <div className='pt-[5.118rem]'>
          <HeaderDefault />
          <MainContainer className='mb-[800px]'>
            <h1 className='mb-3  mt-2  text-4xl  font-bold  leading-tight  lg:text-[2.7rem]  dark:text-white'>
              Master Git & Github: <br className='xl:hidden' />
              From&nbsp;Everyday Tasks to&nbsp;Deep Waters
            </h1>
            <h2 className='text-4xl  font-medium  lg:text-[2.7rem]  dark:text-white'>
              Interactive e-book
            </h2>
            <div className='mb-16  mt-10'>
              <Image
                src={bookCoverLight}
                alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                className='w-full  select-none  rounded-3xl  [box-shadow:0px_0px_85px_20px_rgba(0,0,0,0.04)]  
                           sm:h-[570px]  sm:w-auto  dark:hidden'
                priority
              />
              <Image
                src={bookCoverDark}
                alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                className='hidden  w-full  select-none  rounded-3xl 
                         sm:h-[570px]  sm:w-auto  dark:inline-block'
                priority
              />
            </div>
            <div className='mb-5'>
              <Link
                href='/book-master-git-and-github/demo'
                className='inline-block  rounded-lg  bg-black  px-6  pb-[.58rem]  pt-2  text-lg 
                           font-semibold  text-white  hover:bg-git-blue  
                           hover:transition-colors dark:bg-white  
                           dark:text-black  dark:hover:text-white'
              >
                Try demo
              </Link>
            </div>
          </MainContainer>
          <Footer />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MasterGitAndGithubBookPromo;
