'use client';

import { useBookSectionState } from '@/context/book-section/Context';
import { useTheme } from '@/context/theme/Context';
import { darkThemeIsSelected } from '@/utils/check-selected-theme';
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
  const headerWasScrolled = useRef(false);
  const headerElementRef = useRef<HTMLElement | null>(null);
  const headerLogoElementRef = useRef<HTMLParagraphElement | null>(null);
  const { selectedTheme, isManualThemeChange } = useTheme();

  const { bookSectionInViewport } = useBookSectionState();
  const bookSectionWasInViewport = useRef(false);

  function setHeaderBackground(): void {
    const [headerFirstColor, headerSecondColor] = getBackgroundImageColors();

    if (darkThemeIsSelected(selectedTheme)) {
      headerElementRef.current!.style.setProperty(
        '--headerDarkModeBgFirstColor',
        headerFirstColor,
      );
      headerElementRef.current!.style.setProperty(
        '--headerDarkModeBgSecondColor',
        headerSecondColor,
      );
    } else {
      headerElementRef.current!.style.setProperty(
        '--headerLightModeBgFirstColor',
        headerFirstColor,
      );
      headerElementRef.current!.style.setProperty(
        '--headerLightModeBgSecondColor',
        headerSecondColor,
      );
    }
  }

  function getBackgroundImageColors(): [string, string] {
    if (bookSectionInViewport) {
      return ['#ff5013', '#271ad3'];
    }

    if (darkThemeIsSelected(selectedTheme)) {
      return ['#000000', '#000000'];
    } else {
      return ['#ffffff', '#ffffff'];
    }
  }

  function getHeaderLogoColor(): string {
    if (bookSectionInViewport) {
      return 'white';
    }

    if (darkThemeIsSelected(selectedTheme)) {
      return 'white';
    } else {
      return 'black';
    }
  }

  useGSAP((_, contextSafe) => {
    const handleScrollAndResize = contextSafe!(() => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const bottomOffset = 200;

      if (window.innerWidth < 1280) {
        if (scrollPosition + windowHeight >= pageHeight - bottomOffset) {
          const currentTransform = headerElementRef.current!.style.transform;

          if (currentTransform !== 'translateY(-150%)') {
            headerElementRef.current!.style.transform = 'translateY(-150%)';
          }
        } else {
          const currentTransform = headerElementRef.current!.style.transform;

          if (
            currentTransform !== 'translateY(0%)' &&
            currentTransform !== ''
          ) {
            headerElementRef.current!.style.transform = 'translateY(0%)';
          }
        }
      } else {
        const currentTransform = headerElementRef.current!.style.transform;

        if (currentTransform !== 'translateY(0%)' && currentTransform !== '') {
          headerElementRef.current!.style.transform = 'translateY(0%)';
        }
      }
    });

    window.addEventListener('scroll', handleScrollAndResize);
    window.addEventListener('resize', handleScrollAndResize);

    return () => {
      window.removeEventListener('scroll', handleScrollAndResize);
      window.removeEventListener('resize', handleScrollAndResize);
    };
  }, []);

  useGSAP(() => {
    if (isManualThemeChange) {
      setHeaderBackground();

      gsap.set(headerLogoElementRef.current, {
        color: getHeaderLogoColor(),
      });
    }
  }, [selectedTheme]);

  useGSAP(
    () => {
      if (bookSectionInViewport) {
        bookSectionWasInViewport.current = true;
      }

      if (bookSectionWasInViewport.current) {
        setHeaderBackground();

        gsap.to(headerLogoElementRef.current, {
          color: () => getHeaderLogoColor(),
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
      const isScrolled = pageIsScrolled();

      if (isScrolled) {
        headerWasScrolled.current = true;
      }

      setHeaderIsScrolled(isScrolled);
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = classNames(
    `pt-4  pb-6  md:pt-5  md:pb-7  fixed  left-0  right-0  top-0  border-b
     header-transition z-50
     [background-image:linear-gradient(135deg,var(--headerLightModeBgFirstColor),var(--headerLightModeBgSecondColor))]
     dark:[background-image:linear-gradient(135deg,var(--headerDarkModeBgFirstColor),var(--headerDarkModeBgSecondColor))]`,
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
        <HeaderButtons />
      </MainContainer>
    </header>
  );
}

export default Header;
