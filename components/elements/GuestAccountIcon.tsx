import { useBookSectionState } from '@/context/book-section/Context';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { forwardRef, ReactElement, useEffect, useRef } from 'react';

interface GuestAccountIconProps {
  className?: string;
}

const GuestAccountIcon = forwardRef<HTMLDivElement, GuestAccountIconProps>(
  function GuestAccountIcon(
    { className }: GuestAccountIconProps,
    ref,
  ): ReactElement {
    const { bookSectionInViewport } = useBookSectionState();
    const spineElementRef = useRef<HTMLDivElement | null>(null);
    const bookSectionInViewportStateRef = useRef(bookSectionInViewport);
    
    useEffect(() => {
      bookSectionInViewportStateRef.current = bookSectionInViewport;
    }, [bookSectionInViewport]);

    useGSAP(
      (_, contextSafe) => {
        const accountIconElement = (ref as React.RefObject<HTMLDivElement>)
          .current;

        const onMouseEnter = contextSafe!(() => {
          gsap.to(accountIconElement, {
            backgroundColor: bookSectionInViewportStateRef.current ? '#ff5013' : '#281AD2',
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
            backgroundColor: bookSectionInViewportStateRef.current ? 'white' : 'black',
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
      },
      []
    );

    const guestAccountIconClasses = classNames(
      `w-[1.9rem]  h-[1.9rem]  md:w-[2.1rem]  md:h-[2.1rem]  bg-black  rounded-full  flex  items-center  
    justify-center  hover:cursor-pointer`,
      className,
    );

    return (
      <div ref={ref} className={guestAccountIconClasses}>
        <div
          ref={spineElementRef}
          className='h-[1.1rem]  w-[0.234em]  translate-y-[-0.03rem]  rounded-[0.05rem]  bg-white'
        ></div>
      </div>
    );
  },
);

export default GuestAccountIcon;
