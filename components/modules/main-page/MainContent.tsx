'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useRef } from 'react';
import Book from './Book';
import Combo from './Combo';
import Contest from './Contest';
import Eleven from './Eleven';
gsap.registerPlugin(ScrollTrigger);

function MainContent(): ReactElement {
  const mainContentBlockRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1280px)', () => {
      ScrollTrigger.create({
        trigger: mainContentBlockRef.current,
        start: 'top 750',
        onEnter: () => {
          gsap.set(mainContentBlockRef.current, {
            opacity: 1,
          });
        },
      });
    });

    mm.add('(max-width: 1279px)', () => {
      ScrollTrigger.create({
        trigger: mainContentBlockRef.current,
        start: 'top 390',
        onEnter: () => {
          gsap.set(mainContentBlockRef.current, {
            opacity: 1,
          });
        },
      });
    });
  }, []);

  return (
    <div
      ref={mainContentBlockRef}
      className='opacity-0  [transition:opacity_1s_ease-out]'
    >
      <Eleven />
      <Combo />
      <Book />
      <Contest />
    </div>
  );
}

export default MainContent;
