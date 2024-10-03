import MainContainer from '@/components/elements/MainContainer';
import Footer from '@/components/modules/Footer';
import HeaderDefault from '@/components/modules/header/header-element/HeaderDefault';
import Link from 'next/link';
import { ReactElement } from 'react';

function MasterGitAndGithubBookPromo(): ReactElement {
  return (
    <body className='dark:bg-black'>
      <div className='pt-[5.118rem]  md:pt-[6.0625rem]'>
        <HeaderDefault />
        <MainContainer className='mb-[800px]'>
          <h1 className='mb-7  mt-10  text-5xl  font-bold  dark:text-white'>
            Master Git & GitHub Book Promo
          </h1>
          <div className='mb-5'>
            <Link
              href='/master-git-and-github-book/demo'
              className='inline-block  rounded-md  bg-black  px-4  py-2  
                       font-semibold  text-white  hover:bg-[#271ad3]  
                       hover:transition-colors dark:bg-white  
                       dark:text-black  dark:hover:text-white'
            >
              Demo
            </Link>
          </div>
          <div>
            <Link
              href='/master-git-and-github-book/read'
              className='inline-block  rounded-md  bg-black  px-4  py-2  
                       font-semibold  text-white  hover:bg-[#271ad3]  
                       hover:transition-colors dark:bg-white  
                       dark:text-black  dark:hover:text-white'
            >
              Read
            </Link>
          </div>
        </MainContainer>
        <Footer />
      </div>
    </body>
  );
}

export default MasterGitAndGithubBookPromo;
