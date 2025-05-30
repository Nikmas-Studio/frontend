'use client';

import {
  useBookNavigator,
  useBookNavigatorDispatch,
} from '@/context/book-navigator/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import useOutsideClick from '@/hooks/use-outside-click';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef } from 'react';
import BookNavigatorPart from './BookNavigatorPart';
import BookNavigatorStory from './BookNavigatorStory';

function BookNavigator(): ReactElement {
  const { bookNavigatorIsOpened } = useBookNavigator();
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isTouchDevice } = useTouchDevice();

  const overlayClasses = classNames(
    'fixed  inset-0  z-[9999]  bg-black  transition-opacity  duration-300',
    {
      'opacity-60': bookNavigatorIsOpened,
      'opacity-0  pointer-events-none': !bookNavigatorIsOpened,
    },
  );

  const containerClasses = classNames(
    ` 
      h-[calc(100vh-60px)]]  fixed  bottom-0  left-[80px]  top-[60px]
      z-[9999]  w-[calc(100vw-160px)]  rounded-t-[20px]  bg-[#F3F3F3]
      transition-transform  duration-300
  `,
    {
      'translate-y-0': bookNavigatorIsOpened,
      'translate-y-[105vh]': !bookNavigatorIsOpened,
    },
  );

  useOutsideClick([containerRef], () => {
    setBookNavigatorIsOpened(false);
  });

  useEffect(() => {
    if (bookNavigatorIsOpened) {
      document.documentElement.style.overflowY = 'hidden';

      if (isTouchDevice) {
        document.body.style.top = `-${window.scrollY}px`;
        document.body.style.position = 'fixed';
      }
    } else {
      document.documentElement.style.overflowY = '';

      if (isTouchDevice) {
        const scrollY = document.body.style.top;
        document.body.style.position = '';
        document.body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }
  }, [bookNavigatorIsOpened, isTouchDevice]);

  return (
    <div>
      <div className={overlayClasses}></div>
      <div ref={containerRef} className={containerClasses}>
        <div className='flex'>
          <ul className='h-[calc(100vh-60px)]  overflow-y-scroll'>
            <BookNavigatorStory title='A Study In Scarlet' />
            <BookNavigatorStory title='The Sign of the Four' />
            <BookNavigatorPart title='THE ADVENTURES OF SHERLOCK HOLMES'>
              <BookNavigatorStory title='A Scandal in Bohemia' />
              <BookNavigatorStory title='The Red-Headed League' />
              <BookNavigatorStory title='A Case of Identity' />
              <BookNavigatorStory title='The Boscombe Valley Mystery' />
              <BookNavigatorStory title='The Five Orange Pips' />
              <BookNavigatorStory title='The Man with the Twisted Lip' />
              <BookNavigatorStory title='The Adventure of the Blue Carbuncle' />
              <BookNavigatorStory title='The Adventure of the Speckled Band' />
              <BookNavigatorStory title='The Adventure of the Engineer’s Thumb' />
              <BookNavigatorStory title='The Adventure of the Noble Bachelor' />
              <BookNavigatorStory title='The Adventure of the Beryl Coronet' />
              <BookNavigatorStory title='The Adventure of the Copper Beeches' />
            </BookNavigatorPart>
            <BookNavigatorPart title='THE MEMOIRS OF SHERLOCK HOLMES'>
              <BookNavigatorStory title='Silver Blaze' />
              <BookNavigatorStory title='The Yellow Face' />
              <BookNavigatorStory title='The Stock-Broker’s Clerk' />
              <BookNavigatorStory title='The “Gloria Scott”' />
              <BookNavigatorStory title='The Musgrave Ritual' />
              <BookNavigatorStory title='The Reigate Squires' />
              <BookNavigatorStory title='The Crooked Man' />
              <BookNavigatorStory title='The Resident Patient' />
              <BookNavigatorStory title='The Greek Interpreter' />
              <BookNavigatorStory title='The Naval Treaty' />
              <BookNavigatorStory title='The Final Problem' />
            </BookNavigatorPart>
            <BookNavigatorPart title='THE RETURN OF SHERLOCK HOLMES'>
              <BookNavigatorStory title='The Adventure of the Empty House' />
              <BookNavigatorStory title='The Adventure of the Norwood Builder' />
              <BookNavigatorStory title='The Adventure of the Dancing Men' />
              <BookNavigatorStory title='The Adventure of the Solitary Cyclist' />
              <BookNavigatorStory title='The Adventure of the Priory School' />
              <BookNavigatorStory title='The Adventure of Black Peter' />
              <BookNavigatorStory title='The Adventure of Charles Augustus Milverton' />
              <BookNavigatorStory title='The Adventure of the Six Napoleons' />
              <BookNavigatorStory title='The Adventure of the Three Students' />
              <BookNavigatorStory title='The Adventure of the Golden Pince-Nez' />
              <BookNavigatorStory title='The Adventure of the Missing Three-Quarter' />
              <BookNavigatorStory title='The Adventure of the Abbey Grange' />
              <BookNavigatorStory title='The Adventure of the Second Stain' />
            </BookNavigatorPart>
            <BookNavigatorStory title='The Hound of the Baskervilles' />
            <BookNavigatorStory title='The Valley of Fear' />
            <BookNavigatorPart title='HIS LAST BOW'>
              <BookNavigatorStory title='The Adventure of Wisteria Lodge' />
              <BookNavigatorStory title='The Adventure of the Cardboard Box' />
              <BookNavigatorStory title='The Adventure of the Red Circle' />
              <BookNavigatorStory title='The Adventure of the Bruce-Partington Plans' />
              <BookNavigatorStory title='The Adventure of the Dying Detective' />
              <BookNavigatorStory title='The Disappearance of Lady Frances Carfax' />
              <BookNavigatorStory title='The Adventure of the Devil’s Foot' />
              <BookNavigatorStory title='His Last Bow' />
            </BookNavigatorPart>
            <BookNavigatorPart title='THE CASE-BOOK OF SHERLOCK HOLMES'>
              <BookNavigatorStory title='The Illustrious Client' />
              <BookNavigatorStory title='The Blanched Soldier' />
              <BookNavigatorStory title='The Adventure Of The Mazarin Stone' />
              <BookNavigatorStory title='The Adventure of the Three Gables' />
              <BookNavigatorStory title='The Adventure of the Sussex Vampire ' />
              <BookNavigatorStory title='The Adventure of the Three Garridebs' />
              <BookNavigatorStory title='The Problem of Thor Bridge' />
              <BookNavigatorStory title='The Adventure of the Creeping Man' />
              <BookNavigatorStory title='The Adventure of the Lion’s Mane' />
              <BookNavigatorStory title='The Adventure of the Veiled Lodger' />
              <BookNavigatorStory title='The Adventure of Shoscombe Old Place' />
              <BookNavigatorStory title='The Adventure of the Retired Colourman' />
            </BookNavigatorPart>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default BookNavigator;
