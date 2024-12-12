'use client';

import ExternalLink from '@/components/elements/ExternalLink';
import BasicTextNode from '@/components/elements/master-git-and-github-book/BasicTextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/master-git-and-github-book';
import { useActiveBackgroundDispatch } from '@/context/background-master-git-and-github-book/Context';
import { useBookVersion } from '@/context/book-version/Context';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import { useUrlUpdate } from '@/hooks/use-url-update';
import facebookLogo from '@/public/images/facebook-logo.svg';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark-no-spine.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light-no-spine.jpg';
import instagramLogo from '@/public/images/instagram-logo.png';
import linkedinLogo from '@/public/images/linkedin-logo.png';
import telegramLogo from '@/public/images/telegram-logo.png';
import { BookVersion } from '@/types/book-version';
import { ActiveBackground } from '@/types/master-git-and-github-book/active-background';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

function EndPageRead(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const innerContentRef = useRef<HTMLDivElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const afterwordRef = useRef<HTMLDivElement | null>(null);
  const { setActiveBackground } = useActiveBackgroundDispatch();
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useGSAP(
    () => {
      function getScale(): number {
        return Number(
          (window.innerWidth / spineRef.current!.offsetWidth + 2).toFixed(1),
        );
      }

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          anticipatePin: 1,
          scrub: true,
          start: 'top top',
          end: '+=800',
        },
      });

      timeline.fromTo(
        spineRef.current,
        {
          scale: getScale,
        },
        {
          scale: 1,
          ease: 'power1.inOut',
        },
        0,
      );

      timeline.to(
        afterwordRef.current,
        {
          opacity: 1,
          pointerEvents: 'auto',
        },
        '-=0.3',
      );

      document.documentElement.classList.remove('overflow-hidden');
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=120',
        onLeave: () => {
          setActiveBackground(ActiveBackground.DARK);
          document.documentElement.classList.add('!bg-black');
        },
        onEnterBack: () => {
          setActiveBackground(ActiveBackground.DEFAULT);
          document.documentElement.classList.remove('!bg-black');
        },
      });
    },
    { dependencies: [gsapShouldUpdate], revertOnUpdate: true },
  );

  useUrlUpdate({
    pageRef: sectionRef,
    basePath,
    end: {
      previousPage: 8,
    },
  });

  return (
    <section
      id='page-end'
      ref={sectionRef}
      className='relative  z-30  grid  h-lvh  
     w-lvw  place-content-center  overflow-hidden 
     [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <div
        ref={innerContentRef}
        className='relative 
        translate-y-[-20px]  px-[10vw]  [transition:opacity_1s_ease-out]  
        max-xl:translate-y-[-40px]  max-sm:translate-y-[-30px]
        h-2md:translate-y-[-20px]  h-sm:translate-y-0'
      >
        <div
          className='relative   h-[70svh]  w-auto
                       max-sm:h-auto  max-sm:w-full'
        >
          <Image
            src={bookCoverLight}
            alt='Git and Github book cover'
            className='h-full max-h-[70svh]  w-auto
                       rounded-[1.61svh]  dark:hidden'
            placeholder='blur'
            priority
          />
          <Image
            src={bookCoverDark}
            alt='Git and Github book cover'
            className='hidden  h-full  max-h-[70svh]  w-auto
                       rounded-[1.61svh]  dark:inline-block'
            placeholder='blur'
            priority
          />
          <div
            ref={spineRef}
            className='absolute  left-1/2  top-[45.1%]  z-50  h-[29.5%]  w-[9%]
                       origin-center  translate-x-[calc(-50%-1px)] 
                       rounded-[0.8svh]  bg-white [-webkit-font-smoothing:subpixel-antialiased]
                       max-sm:translate-x-[calc(-50%-0.5vw)]  
                       max-sm:rounded-[1.3vw]  dark:bg-git-black'
          ></div>
        </div>
      </div>
      <div
        ref={afterwordRef}
        className='pointer-events-none  absolute  h-lvh  w-screen opacity-0
                    [background-color:rgba(0,0,0,0.8)]'
      >
        <div
          className='absolute  left-1/2  top-[43%]  -translate-x-1/2  -translate-y-1/2
                        max-sm:top-[41%]'
        >
          <p
            className='
                    text-center  text-[8vw]  font-bold  leading-none
                    text-white  max-sm:text-[12vw]'
          >
            To&nbsp;Be Continued...
          </p>
          <p
            className='text-center  text-[2vw]  text-white  max-lg:text-[2.5vw]  
                        max-md:text-[4vw]  max-sm:text-[5vw]  max-sm:leading-[1.3]'
          >
            Follow our social media for&nbsp;updates:
          </p>
          <ul className='mt-4  flex  justify-center  gap-5  max-lg:mt-3  max-sm:mt-2'>
            <li>
              <ExternalLink href='https://t.me/nikmas_studio'>
                <Image
                  src={telegramLogo}
                  alt='Telegram logo'
                  width={50}
                  height={50}
                  className='transition-all  hover:scale-[1.2]'
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.instagram.com/nikmas.studio/'>
                <Image
                  src={instagramLogo}
                  alt='Instagram logo'
                  width={50}
                  height={50}
                  className='transition-all  hover:scale-[1.2]'
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.facebook.com/nikmas.studio'>
                <Image
                  src={facebookLogo}
                  alt='Facebook logo'
                  width={50}
                  height={50}
                  className='transition-all  hover:scale-[1.2]'
                />
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.linkedin.com/company/nikmas-studio'>
                <Image
                  src={linkedinLogo}
                  alt='LinkedIn logo'
                  width={50}
                  height={50}
                  className='transition-all  hover:scale-[1.2]'
                />
              </ExternalLink>
            </li>
          </ul>
          <div className='mt-7 flex  justify-center'>
            <Link href='/'>
              <BasicTextNode
                className='inline-block  border-b  border-transparent  
                           pb-[0.07rem]  text-lg  !text-white  transition-colors
                           hover:border-white'
              >
                Go to Homepage
              </BasicTextNode>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EndPageRead;
