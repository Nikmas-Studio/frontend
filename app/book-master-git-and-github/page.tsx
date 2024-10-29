import BasicTextNode from '@/components/elements/BasicTextNode';
import MainContainer from '@/components/elements/MainContainer';
import TextNode from '@/components/elements/TextNode';
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
            <h1 className='mb-3  mt-5  text-4xl  font-bold  leading-tight  lg:text-[2.7rem]  dark:text-white'>
              Master Git & Github: <br className='xl:hidden' />
              From&nbsp;Everyday Tasks to&nbsp;Deep Waters
            </h1>
            <h2 className='text-4xl  font-medium  lg:text-[2.7rem]  dark:text-white'>
              Interactive e-book
            </h2>
            <div className='flex  w-full  flex-col  sm:w-[378px]'>
              <div className='mb-10  mt-11'>
                <Image
                  src={bookCoverLight}
                  alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                  className='w-full  select-none  rounded-[14px]
                           [box-shadow:0px_0px_85px_20px_rgba(0,0,0,0.06)]  
                           dark:hidden'
                  sizes='(max-width: 639px) 100vw, 378px'
                  quality={100}
                  priority
                />
                <Image
                  src={bookCoverDark}
                  alt='Master Git & GitHub: From Everyday Tasks to Deep Waters'
                  className='hidden  w-full  select-none  rounded-[14px]
                             dark:inline-block'
                  sizes='(max-width: 639px) 100vw, 378px'
                  quality={100}
                  priority
                />
              </div>
              <Link
                href='/book-master-git-and-github/demo'
                className='inline-block  self-center  rounded-lg  bg-black  px-6  py-2  
                           text-lg  font-semibold  text-white 
                         hover:bg-git-blue  hover:transition-colors  xl:pb-[.60rem]  
                           dark:bg-white dark:text-black  
                           dark:hover:text-white'
              >
                Try demo
              </Link>
            </div>
            <div className='mt-16'>
              <BasicTextNode
                className='mb-7  text-[1.375rem]  font-semibold
                           leading-snug'
              >
                A&nbsp;next-gen, highly illustrative, and&nbsp;interactive
                e-book to&nbsp;master Git&nbsp;and&nbsp;Github. We&apos;ll start
                from&nbsp;the&nbsp;essential basics you need to&nbsp;know
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
                to&nbsp;learn those things. But,&nbsp;the&nbsp;popular resources
                on&nbsp;Git and&nbsp;Github I know are&nbsp;either highly
                illustrative and&nbsp;interactive but&nbsp;quite superficial,
                deep enough but&nbsp;static and&nbsp;dull, or&nbsp;they
                are&nbsp;videos.
              </TextNode>
              <TextNode>
                What I&nbsp;offer is&nbsp;an&nbsp;e-book that&nbsp;is
                at&nbsp;the&nbsp;same time highly illustrative, interactive,
                deep enough, up-to-date, and&nbsp;that&nbsp;will&nbsp;take you
                step by&nbsp;step from&nbsp;a&nbsp;point where you know nothing
                about&nbsp;Git and&nbsp;Github to&nbsp;a&nbsp;master level
                in&nbsp;those tools.
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
            <div></div>
          </MainContainer>
          <Footer />
        </div>
      </div>
    </DefaultLayout>
  );
}

export default MasterGitAndGithubBookPromo;
