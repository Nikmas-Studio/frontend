'use client';

import ScrollHintMouse from '@/components/elements/ScrollHintMouse';
import bookCoverDark from '@/public/images/git-and-github-book-cover-dark.jpg';
import bookCoverLight from '@/public/images/git-and-github-book-cover-light.jpg';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { ReactElement, useEffect, useRef, useState } from 'react';
import ThemeToggleDefault from '../../header/theme-toggle/ThemeToggleDefault';

gsap.registerPlugin(ScrollTrigger);

function CoverPage(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const spineRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    function handleScale(): void {
      const scale = Number(
        (window.innerWidth / spineRef.current!.offsetWidth + 1).toFixed(1),
      );
      setScale(scale);
    }

    handleScale();

    window.addEventListener('resize', handleScale);

    return () => {
      window.removeEventListener('resize', handleScale);
    };
  }, []);

  useGSAP(
    () => {
      gsap.to(spineRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: true,
          end: '+=800',
        },
        scale,
        ease: 'power1.inOut',
      });
    },
    { revertOnUpdate: true, dependencies: [scale] },
  );

  return (
    <section
      ref={sectionRef}
      className='grid  h-lvh  w-lvw  place-content-center  overflow-hidden 
                      [background:linear-gradient(135deg,#ff5013,#271ad3)]'
    >
      <div
        className='relative  translate-x-[-0.11vw]
        px-[10vw]  max-xl:translate-y-[-40px]  max-sm:translate-y-[-60px]
        '
      >
        <div
          className='relative   h-[70svh]  w-auto
                       max-sm:h-auto  max-sm:w-full'
        >
          <div className='absolute  right-[6.7%]  top-9  z-30  max-sm:right-[5vw]'>
            <ThemeToggleDefault />
          </div>
          <Image
            src={bookCoverLight}
            alt='Git and Github book cover'
            className='h-full max-h-[70svh]  w-auto
                       rounded-[1.61svh]  dark:hidden'
            priority
          />
          <Image
            src={bookCoverDark}
            alt='Git and Github book cover'
            className='hidden  h-full  max-h-[70svh]  w-auto
                     rounded-[1.61svh]  dark:inline-block'
            priority
          />
          <div
            ref={spineRef}
            className='absolute left-1/2  max-sm:left-[49.71%]  top-[45.1%]  z-50
                       h-[29.5%]  w-[9%]  max-sm:w-[9.4%]  origin-center  -translate-x-1/2  
                       rounded-[0.8svh] bg-white  max-sm:rounded-[1.3vw]
                        dark:bg-[#00040a]  will-change-transform'
          ></div>
        </div>
        <ScrollHintMouse
          wrapperClassName='mt-10  border-white  
                                           dark:border-[#00040a]'
          wheelClassName='bg-white  dark:bg-[#00040a]'
        />
      </div>
    </section>
  );
}

export default CoverPage;
