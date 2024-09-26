'use client';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import {
  getBackgroundImage,
  getHeaderLogoColor,
} from '@/utils/get-header-properties';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef, useState } from 'react';
import Logo from '../elements/Logo';
import MainContainer from '../elements/MainContainer';
import HeaderButtons from './HeaderButtons';

function Header(): ReactElement {
  function pageIsScrolled(): boolean {
    return window.scrollY > 0;
  }

  const [headerIsScrolled, setHeaderIsScrolled] = useState(false);
  const headerElementRef = useRef<HTMLElement | null>(null);
  const headerLogoElementRef = useRef<HTMLParagraphElement | null>(null);
  const { selectedTheme } = useTheme();

  const { bookSectionInViewport } = useBookSectionState();
  const bookSectionWasInViewport = useRef(false);

  useGSAP(
    () => {
      if (bookSectionInViewport) {
        bookSectionWasInViewport.current = true;
      }

      if (bookSectionWasInViewport.current) {
        gsap.to(headerElementRef.current, {
          backgroundImage: () =>
            getBackgroundImage(bookSectionInViewport, selectedTheme),
          duration: 0.3,
          ease: 'linear',
        });

        gsap.to(headerLogoElementRef.current, {
          color: () => getHeaderLogoColor(bookSectionInViewport, selectedTheme),
          duration: 0.3,
          ease: 'linear',
        });
      }
    },
    {
      dependencies: [bookSectionInViewport],
    },
  );

  useEffect(() => {
    const onScroll = (): void => {
      setHeaderIsScrolled(pageIsScrolled());
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = classNames(
    `pt-4  pb-6  md:pt-5  md:pb-7  fixed  left-0  right-0  top-0  border-b  
     [transition:background-image_0.3s_ease]
     z-50  [background-image:linear-gradient(135deg,#ffffff,#ffffff)]
     dark:[background-image:linear-gradient(135deg,#000000,#000000)]`,
    {
      'border-b-[#EBEBEB]  dark:border-b-[#414141]':
        headerIsScrolled && !bookSectionInViewport,
      'border-b-[#EBEBEB]  dark:border-b-[#EBEBEB]': bookSectionInViewport,
      'border-b-white  dark:border-b-black': !headerIsScrolled,
    },
  );

  return (
    <header id='main-header' ref={headerElementRef} className={headerClasses}>
      <MainContainer className='flex  items-center  justify-between  gap-x-7'>
        <Logo
          ref={headerLogoElementRef}
          className='flex-none  translate-y-[0.187rem]'
        />
        <HeaderButtons
          animationElements={{
            header: headerElementRef,
            headerLogo: headerLogoElementRef,
          }}
        />
      </MainContainer>
    </header>
  );
}

export default Header;
