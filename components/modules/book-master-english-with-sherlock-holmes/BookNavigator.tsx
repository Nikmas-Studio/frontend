'use client';

import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import BookNavigatorPage from '@/components/elements/book-master-english-with-sherlock-holmes/BookNavigatorPage';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
  BOOK_PARTS,
  DETAILED_BOOK_PART_PAGE_RANGES,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import {
  NAVIGATOR_PAGE_CARD_ID_PREFIX,
  NAVIGATOR_PART_ID_PREFIX,
  NAVIGATOR_TITLE_ID_PREFIX,
  RESIZE_THRESHOLD,
} from '@/constants/general';
import {
  useActivePage,
  useActivePageDispatch,
} from '@/context/active-page/Context';
import {
  useBookNavigator,
  useBookNavigatorDispatch,
} from '@/context/book-navigator/Context';
import { useBookVersion } from '@/context/book-version/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { useTranslationTooltip } from '@/context/translation-tooltip/Context';
import { libreBaskerville } from '@/fonts';
import useGsapResizeUpdate from '@/hooks/use-gsap-resize-update';
import useOutsideClick from '@/hooks/use-outside-click';
import { BookVersion } from '@/types/book-version';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';
import { getBookPartByPage } from '@/utils/book-master-english-with-sherlock-holmes/get-book-part-by-page';
import { getFirstPageOfStory } from '@/utils/book-master-english-with-sherlock-holmes/get-first-page-of-story';
import { getPreviousStory } from '@/utils/book-master-english-with-sherlock-holmes/get-previous-story';
import { generateRangeArray } from '@/utils/generate-range-array';
import { isInViewportWithinContainer } from '@/utils/is-in-viewport-within-container';
import { useGSAP } from '@gsap/react';
import classNames from 'classnames';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ReactElement, useEffect, useRef, useState } from 'react';
import BookNavigatorPart from './BookNavigatorPart';
import BookNavigatorStory from './BookNavigatorStory';

enum BookNavigatorTab {
  CONTENTS = 'contents',
  CARDS = 'cards',
}

gsap.registerPlugin(ScrollTrigger);

function BookNavigator(): ReactElement {
  const { bookNavigatorIsOpened } = useBookNavigator();
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsComponentRef = useRef<HTMLDivElement | null>(null);
  const contentsComponentRef = useRef<HTMLUListElement | null>(null);
  const { isTouchDevice } = useTouchDevice();
  const [selectedStory, setSelectedStory] = useState(Story.A_STUDY_IN_SCARLET);
  const { ref: tooltipRef } = useTranslationTooltip();
  const [activeTab, setActiveTab] = useState(BookNavigatorTab.CONTENTS);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const { activePage } = useActivePage();
  const { setActivePage } = useActivePageDispatch();
  const { gsapShouldUpdate } = useGsapResizeUpdate();
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;
  const isScrollingToStory = useRef(false);

  useEffect(() => {
    let initialHeight = window.innerHeight;
    let initialWidth = window.innerWidth;

    function handleResize(): void {
      const currentHeight = window.innerHeight;
      const currentWidth = window.innerWidth;

      const heightChanged =
        Math.abs(currentHeight - initialHeight) > RESIZE_THRESHOLD;
      const widthChanged =
        Math.abs(currentWidth - initialWidth) > RESIZE_THRESHOLD;

      if (heightChanged || widthChanged) {
        initialHeight = currentHeight;
        initialWidth = currentWidth;
        setViewportHeight(window.innerHeight);
      }
    }

    window.addEventListener('resize', handleResize);

    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === 'Escape') {
        if (bookNavigatorIsOpened) {
          setBookNavigatorIsOpened(false);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bookNavigatorIsOpened, setBookNavigatorIsOpened]);

  const cardsComponentClasses = classNames(
    `bg-[#F3F3F3]  dark:bg-[#0F151D]  flex-1  overflow-y-scroll  px-12  
     pb-[3.72rem]  pt-[1.6rem]  max-1.5lg:px-[4.2vw]  max-1.5lg:w-full
     max-1.5lg:h-[calc(100vh-5rem)]`,
    {
      'max-1.5lg:hidden': activeTab !== BookNavigatorTab.CARDS,
      'h-screen  border-b  border-b-[#E0E0E0]  dark:border-b-[#212932]':
        isTouchDevice,
      'h-[calc(100vh-60px)]': !isTouchDevice,
    },
  );

  const cardsButtonClasses = classNames(
    `mb-1  h-10  rounded-r-md  border-y  border-r  border-black  px-8
     pb-1.5  pt-1  dark:border-smooth-white  select-none`,
    {
      'bg-black  dark:bg-smooth-white  !border-none':
        activeTab === BookNavigatorTab.CARDS,
    },
  );

  const cardsIconRectClasses = classNames(
    `size-2  border-[1.5px]  border-black  dark:border-smooth-white`,
    {
      '!border-smooth-white  dark:!border-black':
        activeTab === BookNavigatorTab.CARDS,
    },
  );

  const contentsComponentClasses = classNames(
    `bg-[#F3F3F3]  dark:bg-[#0F151D]  overflow-y-scroll  border-r  border-[#E0E0E0]  
     py-6  dark:border-[#212932]  max-1.5lg:w-full  max-1.5lg:h-[calc(100vh-5rem)]
     max-1.5lg:border-r-none`,
    {
      'max-1.5lg:hidden': activeTab !== BookNavigatorTab.CONTENTS,
      'h-screen  border-b  border-b-[#E0E0E0]  dark:border-b-[#212932]':
        isTouchDevice,
      'h-[calc(100vh-60px)]': !isTouchDevice,
    },
  );

  const contentsButtonClasses = classNames(
    `mb-1  h-10  rounded-l-md  border  border-black  
     px-4  pb-1.5  pt-1  dark:border-smooth-white  select-none`,
    {
      'bg-black  dark:bg-smooth-white  !border-none':
        activeTab === BookNavigatorTab.CONTENTS,
    },
  );

  const contentsTextClasses = classNames(
    'text-lg',
    libreBaskerville.className,
    {
      'text-white  dark:text-black': activeTab === BookNavigatorTab.CONTENTS,
      'text-black  dark:text-smooth-white':
        activeTab !== BookNavigatorTab.CONTENTS,
    },
  );

  const overlayClasses = classNames(
    'fixed  inset-0  z-[9999]  bg-black  transition-opacity  duration-[400ms]',
    {
      'opacity-60': bookNavigatorIsOpened,
      'opacity-0  pointer-events-none': !bookNavigatorIsOpened,
    },
  );

  const containerClasses = classNames(
    ` 
      h-[calc(100vh-60px)]]  fixed  bottom-0  left-[80px]  top-[60px]
      z-[9999]  w-[calc(100vw-160px)]  rounded-t-[20px]  bg-white
      dark:bg-black  transition-transform  duration-[400ms]  overflow-hidden
      max-1.5lg:w-screen  max-1.5lg:h-[150vh]  max-1.5lg:left-0
      max-1.5lg:top-0  max-1.5lg:rounded-none
  `,
    {
      '!h-[150vh]  !top-0  !left-0  !w-screen  !rounded-none': isTouchDevice,
    },
  );

  useOutsideClick([containerRef, tooltipRef], () => {
    setBookNavigatorIsOpened(false);
  });

  // keep active page card in viewport when opening book navigator
  useEffect(() => {
    const activePageCard = document.getElementById(
      `${NAVIGATOR_PAGE_CARD_ID_PREFIX}${activePage}`,
    );

    if (cardsComponentRef.current !== null && activePageCard !== null) {
      const container = cardsComponentRef.current;
      const containerRect = cardsComponentRef.current.getBoundingClientRect();
      const targetRect = activePageCard.getBoundingClientRect();
      const offset = 17;

      const scrollTop =
        container.scrollTop + (targetRect.top - containerRect.top) - offset;

      if (bookNavigatorIsOpened) {
        container.scrollTo({
          top: scrollTop,
          behavior: 'instant',
        });
      }
    }
  }, [activePage, bookNavigatorIsOpened, activeTab]);

  useEffect(() => {
    if (bookNavigatorIsOpened) {
      document.documentElement.style.overflow = 'hidden';
      setActiveTab(BookNavigatorTab.CONTENTS);
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [
    bookNavigatorIsOpened,
    isTouchDevice,
    setActivePage,
    activePage,
    basePath,
  ]);

  // select story based on activePage when opening book navigator
  useEffect(() => {
    try {
      let activeStory: Story;

      if (activePage === '') {
        activeStory = BOOK_PARTS.at(0)!;
      } else if (activePage === 'end') {
        activeStory = BOOK_PARTS.at(-1)!;
      } else {
        let bookPart = JSON.parse(getBookPartByPage(activePage as number)!);
        switch (Object.keys(bookPart)[0]) {
          case 'THE_ADVENTURES_OF_SHERLOCK_HOLMES':
          case 'THE_MEMOIRS_OF_SHERLOCK_HOLMES':
          case 'THE_RETURN_OF_SHERLOCK_HOLMES':
          case 'HIS_LAST_BOW':
          case 'THE_CASE_BOOK_OF_SHERLOCK_HOLMES':
            bookPart = Object.keys(bookPart[Object.keys(bookPart)[0]])[0];
            break;
          default:
            bookPart = Object.keys(bookPart)[0];
        }

        activeStory = BOOK_PARTS.find((part) => {
          return (
            part.replaceAll(' ', '_').replaceAll('’', '').toLowerCase() ===
            bookPart.toLowerCase()
          );
        })!;
      }

      setSelectedStory(activeStory);
      const storyTitleComponent = document.getElementById(
        `${NAVIGATOR_TITLE_ID_PREFIX}${activeStory.replaceAll(' ', '_')}`,
      );
      if (bookNavigatorIsOpened) {
        storyTitleComponent?.scrollIntoView({
          behavior: 'instant',
          block: 'center',
        });
      }
    } catch (error) {}
  }, [activePage, activeTab, bookNavigatorIsOpened]);

  // keep active story in viewport when scrolling
  useGSAP(
    () => {
      if (window.innerWidth > 1120) {
        const storyBoundaries = document.querySelectorAll(
          `[id^="${NAVIGATOR_PART_ID_PREFIX}"]`,
        );
        for (const storyBoundary of storyBoundaries) {
          const story = storyBoundary.id
            .replace(`${NAVIGATOR_PART_ID_PREFIX}`, '')
            .replaceAll('_', ' ') as Story;

          const previousStory =
            getPreviousStory(story as Story) ?? Story.A_STUDY_IN_SCARLET;

          ScrollTrigger.create({
            trigger: storyBoundary,
            scroller: cardsComponentRef.current,
            start: `top 120px`,
            end: '+=0',
            onEnter: () => {
              if (isScrollingToStory.current) {
                return;
              }

              setSelectedStory(story);
              updateStoryTitleVisibility(story);
            },
            onEnterBack: () => {
              if (isScrollingToStory.current) {
                return;
              }

              setSelectedStory(previousStory);
              updateStoryTitleVisibility(previousStory);
            },
          });

          function updateStoryTitleVisibility(activeStory: Story): void {
            const storyTitleComponent = document.getElementById(
              `${NAVIGATOR_TITLE_ID_PREFIX}${activeStory.replaceAll(' ', '_')}`,
            );

            if (
              storyTitleComponent !== null &&
              contentsComponentRef.current !== null
            ) {
              console.log('storyTitleComponent', storyTitleComponent);
              if (
                !isInViewportWithinContainer(
                  storyTitleComponent,
                  contentsComponentRef.current,
                )
              ) {
                storyTitleComponent.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center',
                });
              }
            }
          }
        }
      }
    },
    {
      dependencies: [gsapShouldUpdate],
      revertOnUpdate: true,
    },
  );

  function updateSelectedStory(newStory: Story): void {
    setSelectedStory(newStory);
    if (window.innerWidth > 1120) {
      const storyCardComponent = document.getElementById(
        `${NAVIGATOR_PART_ID_PREFIX}${newStory.replaceAll(' ', '_')}`,
      );
      storyCardComponent?.scrollIntoView({
        behavior: 'smooth',
      });

      if (cardsComponentRef.current !== null && storyCardComponent !== null) {
        const container = cardsComponentRef.current;
        const containerRect = cardsComponentRef.current.getBoundingClientRect();
        const targetRect = storyCardComponent.getBoundingClientRect();
        const offset = 25;

        const scrollTop =
          container.scrollTop + (targetRect.top - containerRect.top) - offset;

        isScrollingToStory.current = true;
        container.scrollTo({
          top: scrollTop,
          behavior: 'smooth',
        });
        setTimeout(() => {
          isScrollingToStory.current = false;
        }, 1000);
      }
    } else {
      setBookNavigatorIsOpened(false);
      let storyFirstPage = getFirstPageOfStory(newStory)!;

      switch (newStory) {
        case Story.A_SCANDAL_IN_BOHEMIA:
        case Story.SILVER_BLAZE:
        case Story.THE_ADVENTURE_OF_THE_EMPTY_HOUSE:
          storyFirstPage += 1;
          break;
        case Story.THE_ADVENTURE_OF_WISTERIA_LODGE:
        case Story.THE_ILLUSTRIOUS_CLIENT:
          storyFirstPage += 2;
      }

      const page = document.getElementById(`page-${storyFirstPage}`);
      setTimeout(() => {
        page?.scrollIntoView({
          behavior: 'instant',
        });
      }, 200);
    }
  }

  const crossClasses = classNames(
    'absolute  right-5  top-4  size-[21px]  cursor-pointer  max-1.5lg:hidden',
    {
      block: isTouchDevice,
      hidden: !isTouchDevice,
    },
  );

  return (
    <div>
      <div className={overlayClasses}></div>
      <div
        ref={containerRef}
        style={{
          transform: bookNavigatorIsOpened
            ? 'translateY(0)'
            : `translateY(${viewportHeight + 200}px)`,
        }}
        className={containerClasses}
      >
        <div
          onClick={() => {
            setBookNavigatorIsOpened(false);
          }}
          className={crossClasses}
        >
          <div
            className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  rotate-45  bg-black  dark:bg-smooth-white'
          ></div>
          <div
            className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  -rotate-45  bg-black  dark:bg-smooth-white'
          ></div>
        </div>
        <div
          className='hidden  h-20  w-full  items-center  justify-between  border-b  
                   border-[#E0E0E0]  bg-white  px-[4.2vw]  max-1.5lg:flex  
                   dark:border-[#212932]  dark:bg-[#171E27]'
        >
          <div className='flex  items-center'>
            <button
              onClick={() => setActiveTab(BookNavigatorTab.CONTENTS)}
              className={contentsButtonClasses}
            >
              <span className={contentsTextClasses}>Contents</span>
            </button>
            <button
              onClick={() => setActiveTab(BookNavigatorTab.CARDS)}
              className={cardsButtonClasses}
            >
              <div className='grid  grid-cols-2  grid-rows-2  gap-[3px]'>
                <div className={cardsIconRectClasses}></div>
                <div className={cardsIconRectClasses}></div>
                <div className={cardsIconRectClasses}></div>
                <div className={cardsIconRectClasses}></div>
              </div>
            </button>
          </div>

          <div
            onClick={() => {
              setBookNavigatorIsOpened(false);
            }}
            className='relative  mb-1.5  size-[21px]  cursor-pointer'
          >
            <div
              className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  rotate-45  bg-black  dark:bg-smooth-white'
            ></div>
            <div
              className='absolute  left-1/2  top-1/2  h-[2px]  w-[27px]  -translate-x-1/2
                       -translate-y-1/2  -rotate-45  bg-black  dark:bg-smooth-white'
            ></div>
          </div>
        </div>
        <div className='flex'>
          <ul ref={contentsComponentRef} className={contentsComponentClasses}>
            <BookNavigatorStory
              selectedStory={selectedStory}
              udpateSelectedStory={updateSelectedStory}
              title={Story.A_STUDY_IN_SCARLET}
            />
            <BookNavigatorStory
              className='mb-7'
              selectedStory={selectedStory}
              udpateSelectedStory={updateSelectedStory}
              title={Story.THE_SIGN_OF_THE_FOUR}
            />
            <BookNavigatorPart
              onClick={() => updateSelectedStory(Story.A_SCANDAL_IN_BOHEMIA)}
              title='THE ADVENTURES OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.A_SCANDAL_IN_BOHEMIA}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_RED_HEADED_LEAGUE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.A_CASE_OF_IDENTITY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_BOSCOMBE_VALLEY_MYSTERY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_FIVE_ORANGE_PIPS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_MAN_WITH_THE_TWISTED_LIP}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BLUE_CARBUNCLE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SPECKLED_BAND}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_ENGINEERS_THUMB}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_NOBLE_BACHELOR}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BERYL_CORONET}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_COPPER_BEECHES}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() => updateSelectedStory(Story.SILVER_BLAZE)}
              title='THE MEMOIRS OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.SILVER_BLAZE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_YELLOW_FACE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_STOCK_BROKERS_CLERK}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_GLORIA_SCOTT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_MUSGRAVE_RITUAL}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_REIGATE_SQUIRES}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_CROOKED_MAN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_RESIDENT_PATIENT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_GREEK_INTERPRETER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_NAVAL_TREATY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_FINAL_PROBLEM}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() =>
                updateSelectedStory(Story.THE_ADVENTURE_OF_THE_EMPTY_HOUSE)
              }
              title='THE RETURN OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_EMPTY_HOUSE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_NORWOOD_BUILDER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DANCING_MEN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SOLITARY_CYCLIST}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_PRIORY_SCHOOL}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_BLACK_PETER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_CHARLES_AUGUSTUS_MILVERTON}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SIX_NAPOLEONS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_STUDENTS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_GOLDEN_PINCE_NEZ}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_MISSING_THREE_QUARTER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_ABBEY_GRANGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SECOND_STAIN}
              />
            </BookNavigatorPart>
            <BookNavigatorStory
              selectedStory={selectedStory}
              udpateSelectedStory={updateSelectedStory}
              title={Story.THE_HOUND_OF_THE_BASKERVILLES}
            />
            <BookNavigatorStory
              className='mb-7'
              selectedStory={selectedStory}
              udpateSelectedStory={updateSelectedStory}
              title={Story.THE_VALLEY_OF_FEAR}
            />
            <BookNavigatorPart
              onClick={() =>
                updateSelectedStory(Story.THE_ADVENTURE_OF_WISTERIA_LODGE)
              }
              title='HIS LAST BOW'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_WISTERIA_LODGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_CARDBOARD_BOX}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_RED_CIRCLE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BRUCE_PARTINGTON_PLANS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DYING_DETECTIVE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_DISAPPEARANCE_OF_LADY_FRANCES_CARFAX}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DEVILS_FOOT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.HIS_LAST_BOW}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() => updateSelectedStory(Story.THE_ILLUSTRIOUS_CLIENT)}
              title='THE CASE-BOOK OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ILLUSTRIOUS_CLIENT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_BLANCHED_SOLDIER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_MAZARIN_STONE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_GABLES}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SUSSEX_VAMPIRE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_GARRIDEBS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_PROBLEM_OF_THOR_BRIDGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_CREEPING_MAN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_LIONS_MANE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_VEILED_LODGER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_SHOSCOMBE_OLD_PLACE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                udpateSelectedStory={updateSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_RETIRED_COLOURMAN}
              />
            </BookNavigatorPart>
          </ul>
          <div ref={cardsComponentRef} className={cardsComponentClasses}>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.A_STUDY_IN_SCARLET.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-1.5  text-xl  font-bold  ${libreBaskerville.className}`}
              >
                A Study in Scarlet
              </BasicTextNode>
              <BasicTextNode
                className={`mb-1.5  text-xl  ${libreBaskerville.className}`}
              >
                Part I
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter I. Mr. Sherlock Holmes
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_1_MR_SHERLOCK_HOLMES,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter II. The Science of Deduction
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_2_THE_SCIENCE_OF_DEDUCTION,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter III. The Lauriston Garden Mystery
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_3_THE_LAURISTON_GARDEN_MYSTERY,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter IV. What John Rance Had to Tell
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_4_WHAT_JOHN_RANCE_HAD_TO_TELL,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter V. Our Advertisement Brings a Visitor
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_5_OUR_ADVERTISEMENT_BRINGS_A_VISITOR,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VI. Tobias Gregson Shows What He Can Do
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_6_TOBIAS_GREGSON_SHOWS_WHAT_HE_CAN_DO,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VII. Light In The Darkness
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_1
                    .CHAPTER_7_LIGHT_IN_THE_DARKNESS,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-1.5  text-xl  ${libreBaskerville.className}`}
              >
                Part II
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter I. On the Great Alkali Plain
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_1_ON_THE_GREAT_ALKALI_PLAIN,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter II. The Flower of Utah
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_2_THE_FLOWER_OF_UTAH,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter III. John Ferrier Talks with the Prophet
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_3_JOHN_FERRIER_TALKS_WITH_THE_PROPHET,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter IV. A Flight for Life
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_4_A_FLIGHT_FOR_LIFE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter V. The Avenging Angels
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_5_THE_AVENGING_ANGELS,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VI. A Continuation of the Reminiscences of John Watson,
                M.D.
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_6_A_CONTINUATION_OF_THE_REMINISCENCES_OF_JOHN_WATSON_M_D,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-12'>
              <BasicTextNode
                className={`mb-4  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VII. The Conclusion
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET.PART_2
                    .CHAPTER_7_THE_CONCLUSION,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_SIGN_OF_THE_FOUR.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-1.5  text-xl  font-bold  ${libreBaskerville.className}`}
              >
                The Sign of the Four
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter I. The Science of Deduction
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_1_THE_SCIENCE_OF_DEDUCTION,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter II. The Statement of the Case
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_2_THE_STATEMENT_OF_THE_CASE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter III. In Quest of a Solution
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_3_IN_QUEST_OF_A_SOLUTION,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter IV. The Story of the Bald-Headed Man
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_4_THE_STORY_OF_THE_BALD_HEADED_MAN,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter V. The Tragedy of Pondicherry Lodge
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_5_THE_TRAGEDY_OF_PONDICHERRY_LODGE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VI. Sherlock Holmes Gives a Demonstration
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_6_SHERLOCK_HOLMES_GIVES_A_DEMONSTRATION,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VII. The Episode of the Barrel
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_7_THE_EPISODE_OF_THE_BARREL,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter VIII. The Baker Street Irregulars
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_8_THE_BAKER_STREET_IRREGULARS,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter IX. A Break in the Chain
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_9_A_BREAK_IN_THE_CHAIN,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter X. The End of the Islander
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_10_THE_END_OF_THE_ISLANDER,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter XI. The Great Agra Treasure
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_11_THE_GREAT_AGRA_TREASURE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-12'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter XII. The Strange Story of Jonathan Small
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_SIGN_OF_THE_FOUR
                    .CHAPTER_12_THE_STRANGE_STORY_OF_JONATHAN_SMALL,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.A_SCANDAL_IN_BOHEMIA.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-1.5  text-xl  font-bold  ${libreBaskerville.className}`}
              >
                The Adventures of Sherlock Holmes
              </BasicTextNode>
              <BasicTextNode
                className={`mb-1.5  text-xl  ${libreBaskerville.className}`}
              >
                A Scandal in Bohemia
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter I
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.A_SCANDAL_IN_BOHEMIA
                    .CHAPTER_1,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter II
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.A_SCANDAL_IN_BOHEMIA
                    .CHAPTER_2,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div className='mb-7'>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter III
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.A_SCANDAL_IN_BOHEMIA
                    .CHAPTER_3,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_RED_HEADED_LEAGUE.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Red-Headed League
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.THE_RED_HEADED_LEAGUE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.A_CASE_OF_IDENTITY.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                A Case of Identity
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.A_CASE_OF_IDENTITY,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_BOSCOMBE_VALLEY_MYSTERY.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Boscombe Valley Mystery
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_BOSCOMBE_VALLEY_MYSTERY,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_FIVE_ORANGE_PIPS.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Five Orange Pips
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES.THE_FIVE_ORANGE_PIPS,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_MAN_WITH_THE_TWISTED_LIP.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Man with the Twisted Lip
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_MAN_WITH_THE_TWISTED_LIP,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_BLUE_CARBUNCLE.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Blue Carbuncle
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_BLUE_CARBUNCLE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_SPECKLED_BAND.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Speckled Band
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_SPECKLED_BAND,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_ENGINEERS_THUMB.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Engineer's Thumb
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_ENGINEERS_THUMB,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_NOBLE_BACHELOR.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Noble Bachelor
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_NOBLE_BACHELOR,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_BERYL_CORONET.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Beryl Coronet
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_BERYL_CORONET,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_ADVENTURE_OF_THE_COPPER_BEECHES.replaceAll(' ', '_')}`}
              className='mb-12'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Adventure of the Copper Beeches
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES
                    .THE_ADVENTURES_OF_SHERLOCK_HOLMES
                    .THE_ADVENTURE_OF_THE_COPPER_BEECHES,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.SILVER_BLAZE.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-1.5  text-xl  font-bold  ${libreBaskerville.className}`}
              >
                The Memoirs of Sherlock Holmes
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Silver Blaze
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_MEMOIRS_OF_SHERLOCK_HOLMES
                    .SILVER_BLAZE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
            <div
              id={`${NAVIGATOR_PART_ID_PREFIX}${Story.THE_YELLOW_FACE.replaceAll(' ', '_')}`}
              className='mb-7'
            >
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                The Yellow Face
              </BasicTextNode>
              <ul className='grid  gap-3  [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'>
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.THE_MEMOIRS_OF_SHERLOCK_HOLMES
                    .THE_YELLOW_FACE,
                ).map((pageNumber) => {
                  return (
                    <BookNavigatorPage
                      pageNumber={pageNumber}
                      key={pageNumber}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookNavigator;
