'use client';

import Logo from '@/components/elements/Logo';
import MainContainer from '@/components/elements/MainContainer';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';
import HeaderButtonsDefault from '../header-buttons/HeaderButtonsDefault';

interface HeaderBasicProps {
  onHeaderIsScrolledChange?: (headerIsScrolled: boolean) => void;
}

function HeaderDefault({
  onHeaderIsScrolledChange,
}: HeaderBasicProps): ReactElement {
  function pageIsScrolled(): boolean {
    return window.scrollY > 0;
  }

  const [headerIsScrolled, setHeaderIsScrolled] = useState(false);
  const headerWasScrolled = useRef(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const headerLogoRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP((_, contextSafe) => {
    const handleScrollAndResize = contextSafe!(() => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.offsetHeight;
      const windowHeight = window.innerHeight;
      const bottomOffset = 200;

      if (window.innerWidth < 1280) {
        if (scrollPosition + windowHeight >= pageHeight - bottomOffset) {
          const currentTransform = headerRef.current!.style.transform;

          if (currentTransform !== 'translateY(-150%)') {
            headerRef.current!.style.transform = 'translateY(-150%)';
          }
        } else {
          const currentTransform = headerRef.current!.style.transform;

          if (
            currentTransform !== 'translateY(0%)' &&
            currentTransform !== ''
          ) {
            headerRef.current!.style.transform = 'translateY(0%)';
          }
        }
      } else {
        const currentTransform = headerRef.current!.style.transform;

        if (currentTransform !== 'translateY(0%)' && currentTransform !== '') {
          headerRef.current!.style.transform = 'translateY(0%)';
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

  useEffect(() => {
    const onScroll = (): void => {
      const isScrolled = pageIsScrolled();

      if (isScrolled) {
        headerWasScrolled.current = true;
      }

      setHeaderIsScrolled(isScrolled);
      onHeaderIsScrolledChange?.(isScrolled);
    };

    onScroll();

    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, [onHeaderIsScrolledChange]);

  const headerClasses = classNames(
    `pt-4  pb-6  md:pt-5  md:pb-7  fixed  left-0  right-0  top-0  border-b
     header-transition z-50
     [background-image:linear-gradient(135deg,var(--headerLightModeBgFirstColor),var(--headerLightModeBgSecondColor))]
     dark:[background-image:linear-gradient(135deg,var(--headerDarkModeBgFirstColor),var(--headerDarkModeBgSecondColor))]`,
    {
      'border-b-[#EBEBEB]  dark:border-b-[#414141]': headerIsScrolled,
      'border-b-white  dark:border-b-black': !headerIsScrolled,
    },
  );

  return (
    <header id='main-header' ref={headerRef} className={headerClasses}>
      <MainContainer className='flex  items-center  justify-between  gap-x-7'>
        <Logo
          ref={headerLogoRef}
          className='flex-none  translate-y-[0.187rem]'
        />
        <HeaderButtonsDefault />
      </MainContainer>
    </header>
  );
}

export default HeaderDefault;
