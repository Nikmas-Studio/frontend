'use client';

import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';
import Logo from '../elements/Logo';
import MainContainer from '../elements/MainContainer';
import HeaderButtons from './HeaderButtons';

function Header(): ReactElement {
  function pageIsScrolled(): boolean {
    return window.scrollY > 0;
  }

  const [headerIsScrolled, setHeaderIsScrolled] = useState(pageIsScrolled);
  const headerElement = useRef<HTMLHeadElement | null>(null);

  useEffect(() => {
    const onScroll = (): void => {
      setHeaderIsScrolled(pageIsScrolled());
    };

    window.addEventListener('scroll', onScroll);

    return (): void => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = classNames(
    'pt-4  pb-6  md:pt-5  md:pb-7  fixed  left-0  right-0  top-0  border-b  transition  bg-white  z-50',
    {
      'border-b-grey-200': headerIsScrolled,
      'border-b-white': !headerIsScrolled,
    },
  );

  return (
    <header id='main-header' ref={headerElement} className={headerClasses}>
      <MainContainer className='flex  items-center  justify-between  gap-x-7'>
        <Logo className='flex-none  translate-y-[0.187rem]' />
        <HeaderButtons />
      </MainContainer>
    </header>
  );
}

export default Header;
