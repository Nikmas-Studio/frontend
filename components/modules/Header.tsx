'use client';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Logo from '../elements/Logo';
import MainContainer from '../elements/MainContainer';
import HeaderButtons from './HeaderButtons';

function Header() {
  const [headerIsScrolled, setHeaderIsScrolled] = useState(false);
  const headerElement = useRef<HTMLElement>(null);

  useEffect(() => {
    if (headerElement.current === null) {
      throw new Error('Header element is null');
    }

    const headerOffsetTop = headerElement.current.offsetTop;

    const onScroll = () => {
      if (window.scrollY > headerOffsetTop) {
        setHeaderIsScrolled(true);
      } else {
        setHeaderIsScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const headerClasses = classNames(
    'pt-5  pb-7  fixed  left-0  right-0  top-0  border-b  transition',
    {
      'border-b-grey-200': headerIsScrolled,
      'border-b-white': !headerIsScrolled,
    },
  );

  return (
    <header ref={headerElement} className={headerClasses}>
      <MainContainer className='flex  justify-between  items-center  gap-x-7'>
        <Logo className='translate-y-[0.187rem]' />
        <HeaderButtons />
      </MainContainer>
    </header>
  );
}

export default Header;
