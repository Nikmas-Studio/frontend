'use client';

import BasicTextNode from '@/components/elements/book-master-english-with-sherlock-holmes/BasicTextNode';
import BookNavigatorPage from '@/components/elements/book-master-english-with-sherlock-holmes/BookNavigatorPage';
import { DETAILED_BOOK_PART_PAGE_RANGES } from '@/constants/book-master-english-with-sherlock-holmes/main';
import {
  useBookNavigator,
  useBookNavigatorDispatch,
} from '@/context/book-navigator/Context';
import { useTouchDevice } from '@/context/touch-device/Context';
import { useTranslationTooltip } from '@/context/translation-tooltip/Context';
import { libreBaskerville } from '@/fonts';
import useOutsideClick from '@/hooks/use-outside-click';
import { Story } from '@/types/master-english-with-sherlock-holmes/book-navigator';
import { generateRangeArray } from '@/utils/generate-range-array';
import classNames from 'classnames';
import { ReactElement, useEffect, useRef, useState } from 'react';
import BookNavigatorPart from './BookNavigatorPart';
import BookNavigatorStory from './BookNavigatorStory';

function BookNavigator(): ReactElement {
  const { bookNavigatorIsOpened } = useBookNavigator();
  const { setBookNavigatorIsOpened } = useBookNavigatorDispatch();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { isTouchDevice } = useTouchDevice();
  const [selectedStory, setSelectedStory] = useState(Story.A_STUDY_IN_SCARLET);
  const { ref: tooltipRef } = useTranslationTooltip();

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
      z-[9999]  w-[calc(100vw-160px)]  rounded-t-[20px]  bg-[#F3F3F3]
      dark:bg-[#0F151D]  transition-transform  duration-[400ms] overflow-hidden
  `,
    {
      'translate-y-0': bookNavigatorIsOpened,
      'translate-y-[105vh]': !bookNavigatorIsOpened,
    },
  );

  useOutsideClick([containerRef, tooltipRef], () => {
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

        if (scrollY !== '') {
          document.body.style.position = '';
          document.body.style.top = '';

          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    }
  }, [bookNavigatorIsOpened, isTouchDevice]);

  return (
    <div>
      <div className={overlayClasses}></div>
      <div ref={containerRef} className={containerClasses}>
        <div className='flex'>
          <ul
            className='h-[calc(100vh-60px)]  overflow-y-scroll  border-r
                     border-[#E0E0E0]  py-6  dark:border-[#212932]'
          >
            <BookNavigatorStory
              selectedStory={selectedStory}
              setSelectedStory={setSelectedStory}
              title={Story.A_STUDY_IN_SCARLET}
            />
            <BookNavigatorStory
              className='mb-7'
              selectedStory={selectedStory}
              setSelectedStory={setSelectedStory}
              title={Story.THE_SIGN_OF_THE_FOUR}
            />
            <BookNavigatorPart
              onClick={() => setSelectedStory(Story.A_SCANDAL_IN_BOHEMIA)}
              title='THE ADVENTURES OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.A_SCANDAL_IN_BOHEMIA}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_RED_HEADED_LEAGUE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.A_CASE_OF_IDENTITY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_BOSCOMBE_VALLEY_MYSTERY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_FIVE_ORANGE_PIPS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_MAN_WITH_THE_TWISTED_LIP}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BLUE_CARBUNCLE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SPECKLED_BAND}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_ENGINEERS_THUMB}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_NOBLE_BACHELOR}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BERYL_CORONET}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_COPPER_BEECHES}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() => setSelectedStory(Story.SILVER_BLAZE)}
              title='THE MEMOIRS OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.SILVER_BLAZE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_YELLOW_FACE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_STOCK_BROKERS_CLERK}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_GLORIA_SCOTT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_MUSGRAVE_RITUAL}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_REIGATE_SQUIRES}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_CROOKED_MAN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_RESIDENT_PATIENT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_GREEK_INTERPRETER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_NAVAL_TREATY}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_FINAL_PROBLEM}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() =>
                setSelectedStory(Story.THE_ADVENTURE_OF_THE_EMPTY_HOUSE)
              }
              title='THE RETURN OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_EMPTY_HOUSE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_NORWOOD_BUILDER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DANCING_MEN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SOLITARY_CYCLIST}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_PRIORY_SCHOOL}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_BLACK_PETER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_CHARLES_AUGUSTUS_MILVERTON}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SIX_NAPOLEONS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_STUDENTS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_GOLDEN_PINCE_NEZ}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_MISSING_THREE_QUARTER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_ABBEY_GRANGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SECOND_STAIN}
              />
            </BookNavigatorPart>
            <BookNavigatorStory
              selectedStory={selectedStory}
              setSelectedStory={setSelectedStory}
              title={Story.THE_HOUND_OF_THE_BASKERVILLES}
            />
            <BookNavigatorStory
              className='mb-7'
              selectedStory={selectedStory}
              setSelectedStory={setSelectedStory}
              title={Story.THE_VALLEY_OF_FEAR}
            />
            <BookNavigatorPart
              onClick={() =>
                setSelectedStory(Story.THE_ADVENTURE_OF_WISTERIA_LODGE)
              }
              title='HIS LAST BOW'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_WISTERIA_LODGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_CARDBOARD_BOX}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_RED_CIRCLE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_BRUCE_PARTINGTON_PLANS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DYING_DETECTIVE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_DISAPPEARANCE_OF_LADY_FRANCES_CARFAX}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_DEVILS_FOOT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.HIS_LAST_BOW}
              />
            </BookNavigatorPart>
            <BookNavigatorPart
              onClick={() => setSelectedStory(Story.THE_ILLUSTRIOUS_CLIENT)}
              title='THE CASE-BOOK OF SHERLOCK HOLMES'
            >
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ILLUSTRIOUS_CLIENT}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_BLANCHED_SOLDIER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_MAZARIN_STONE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_GABLES}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_SUSSEX_VAMPIRE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_THREE_GARRIDEBS}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_PROBLEM_OF_THOR_BRIDGE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_CREEPING_MAN}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_LIONS_MANE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_VEILED_LODGER}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_SHOSCOMBE_OLD_PLACE}
              />
              <BookNavigatorStory
                selectedStory={selectedStory}
                setSelectedStory={setSelectedStory}
                title={Story.THE_ADVENTURE_OF_THE_RETIRED_COLOURMAN}
              />
            </BookNavigatorPart>
          </ul>
          <div
            className='h-[calc(100vh-60px)]  flex-1  overflow-y-scroll  
                       px-12  pb-[3.72rem]  pt-6'
          >
            <div>
              <BasicTextNode
                className={`mb-2  text-xl  font-bold  ${libreBaskerville.className}`}
              >
                A Study in Scarlet
              </BasicTextNode>
              <BasicTextNode
                className={`mb-2  text-xl  ${libreBaskerville.className}`}
              >
                Part I
              </BasicTextNode>
              <BasicTextNode
                className={`mb-5  text-xl  ${libreBaskerville.className}`}
              >
                Chapter I. Mr. Sherlock Holmes
              </BasicTextNode>
              <ul
                className='grid  gap-x-5  gap-y-4  
                            [grid-template-columns:repeat(auto-fit,minmax(165px,165px))]'
              >
                {generateRangeArray(
                  DETAILED_BOOK_PART_PAGE_RANGES.A_STUDY_IN_SCARLET_PART_1_CHAPTER_1,
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
