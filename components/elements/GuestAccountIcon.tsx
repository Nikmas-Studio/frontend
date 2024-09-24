import { useBookSectionState } from '@/context/book-section/Context';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ReactElement, useEffect, useRef } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

function GuestAccountIcon({ className }: GuestAccountIconProps): ReactElement {
  const { bookSectionInViewport } = useBookSectionState();
  const accountIconElementRef = useRef<HTMLDivElement | null>(null);
  const spineElementRef = useRef<HTMLDivElement | null>(null);
  const bookSectionInViewportStateRef = useRef(bookSectionInViewport);

  useEffect(() => {
    bookSectionInViewportStateRef.current = bookSectionInViewport;
  }, [bookSectionInViewport]);

  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to(
      accountIconElementRef.current,
      {
        backgroundColor: bookSectionInViewport ? 'white' : 'black',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );

    timeline.to(
      spineElementRef.current,
      {
        backgroundColor: bookSectionInViewport ? 'black' : 'white',
        duration: 0.3,
        ease: 'linear',
      },
      0,
    );
  }, [bookSectionInViewport]);

  useGSAP((_, contextSafe) => {
    const accountIconElement = accountIconElementRef.current;

    const onMouseEnter = contextSafe!(() => {
      gsap.to(accountIconElement, {
        backgroundColor: bookSectionInViewportStateRef.current
          ? '#ff5013'
          : '#281AD2',
        duration: 0.15,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });

      if (bookSectionInViewportStateRef.current) {
        gsap.to(spineElementRef.current, {
          backgroundColor: 'white',
          duration: 0.15,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
      }
    });

    const onMouseLeave = contextSafe!(() => {
      gsap.to(accountIconElement, {
        backgroundColor: bookSectionInViewportStateRef.current
          ? 'white'
          : 'black',
        duration: 0.15,
        ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      });

      if (bookSectionInViewportStateRef.current) {
        gsap.to(spineElementRef.current, {
          backgroundColor: 'black',
          duration: 0.15,
          ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
        });
      }
    });

    accountIconElement?.addEventListener('mouseenter', onMouseEnter);
    accountIconElement?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      accountIconElement?.removeEventListener('mouseenter', onMouseEnter);
      accountIconElement?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  const guestAccountIconClasses = classNames(
    `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black  rounded-full  flex  items-center  
  justify-center  hover:cursor-pointer`,
    className,
  );

  return (
    <div ref={accountIconElementRef} className={guestAccountIconClasses}>
      <div
        ref={spineElementRef}
        className='h-[1.1rem]  w-[0.234em]  translate-y-[-0.03rem]  rounded-[0.05rem]  bg-white'
      ></div>
    </div>
  );
}

export default GuestAccountIcon;
