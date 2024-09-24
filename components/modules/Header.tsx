'use client';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import { Theme } from '@/types/theme';
import getSystemTheme from '@/utils/getSystemTheme';
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

  const [headerIsScrolled, setHeaderIsScrolled] = useState(pageIsScrolled);
  const headerElementRef = useRef<HTMLHeadElement | null>(null);
  const headerLogoElementRef = useRef<HTMLParagraphElement | null>(null);
  const { selectedTheme } = useTheme();

  const { bookSectionInViewport } = useBookSectionState();
  const previousTheme = useRef(selectedTheme);

  useGSAP(() => {
    const themeChanged = previousTheme.current !== selectedTheme;

    const timeline = gsap.timeline();

    function getBackgroundImage(): string {
      if (bookSectionInViewport) {
        return 'linear-gradient(135deg,#ff5013,#271ad3)';
      }

      if (
        selectedTheme === Theme.Dark ||
        (selectedTheme === Theme.System && getSystemTheme() === Theme.Dark)
      ) {
        return 'linear-gradient(135deg,#000000,#000000)';
      } else {
        return 'linear-gradient(135deg,#ffffff,#ffffff)';
      }
    }

    function getHeaderLogoColor(): string {
      if (bookSectionInViewport) {
        return 'white';
      }

      if (
        selectedTheme === Theme.Dark ||
        (selectedTheme === Theme.System && getSystemTheme() === Theme.Dark)
      ) {
        return 'white';
      } else {
        return 'black';
      }
    }

    timeline.to(
      headerElementRef.current,
      {
        backgroundImage: getBackgroundImage(),
        duration: themeChanged ? 0 : 0.3,
        ease: 'linear',
      },
      0,
    );

    timeline.to(
      headerLogoElementRef.current,
      {
        color: getHeaderLogoColor(),
        duration: themeChanged ? 0 : 0.3,
        ease: 'linear',
      },
      0,
    );

    previousTheme.current = selectedTheme;
  }, [bookSectionInViewport, selectedTheme]);

  useEffect(() => {
    const onScroll = (): void => {
      setHeaderIsScrolled(pageIsScrolled());
    };

    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = classNames(
    'pt-4  pb-6  md:pt-5  md:pb-7  fixed  left-0  right-0  top-0  border-b  bg-white  z-50  [background-image:linear-gradient(135deg,#ffffff,#ffffff)]  dark:[background-image:linear-gradient(135deg,#000000,#000000)]',
    {
      'border-b-grey-200': headerIsScrolled,
      'border-b-white': !headerIsScrolled,
    },
  );

  return (
    <header id='main-header' ref={headerElementRef} className={headerClasses}>
      <MainContainer className='flex  items-center  justify-between  gap-x-7'>
        <Logo
          ref={headerLogoElementRef}
          className='flex-none  translate-y-[0.187rem]'
        />
        <HeaderButtons />
      </MainContainer>
    </header>
  );
}

export default Header;
