'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page143({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE MUSGRAVE RITUAL'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Here was the secret of her blanched face, her shaken nerves, her
              peals of hysterical laughter on the next morning. But what had
              been in the box? What had she done with that? Of course, it must
              have been the old metal and pebbles which my client had dragged
              from the mere. She had thrown them in there at the first
              opportunity to remove the last trace of her crime.
            </TextNode>

            <TextNode>
              “For twenty minutes I had sat motionless, thinking the matter out.
              Musgrave still stood with a very pale face, swinging his lantern
              and peering down into the hole.
            </TextNode>

            <TextNode>
              “‘These are coins of Charles the First,’ said he, holding out the
              few which had been in the box; ‘you see we were right in fixing
              our date for the Ritual.’
            </TextNode>

            <TextNode>
              “‘We may find something else of Charles the First,’ I cried, as
              the probable meaning of the first two question of the Ritual broke
              suddenly upon me. ‘Let me see the contents of the bag which you
              fished from the mere.’
            </TextNode>

            <TextNode>
              “We ascended to his study, and he laid the debris before me. I
              could understand his regarding it as of small importance when I
              looked at it, for the metal was almost black and the stones
              lustreless and dull. I rubbed one of them on my sleeve, however,
              and it glowed afterwards like a spark in the dark hollow of my
              hand. The metal work was in the form of a double ring, but it had
              been bent and twisted out of its original shape.
            </TextNode>

            <TextNode>
              “‘You must bear in mind,’ said I, ‘that the royal party made head
              in England even after the death of the King, and that when they at
              last fled they probably left many of their most precious
              possessions buried behind them, with the intention of returning
              for them in more peaceful times.’
            </TextNode>

            <TextNode>
              “‘My ancestor, Sir Ralph Musgrave, was a prominent Cavalier and
              the right-hand man of Charles the Second in his wanderings,’ said
              my friend.
            </TextNode>

            <TextNode>
              “‘Ah, indeed!’ I answered. ‘Well now, I think that really should
              give us the last link that we wanted. I must congratulate you on
              coming into the possession, though in rather a tragic manner, of a
              relic which is of great intrinsic value, but of even greater
              importance as an historical curiosity.’
            </TextNode>

            <TextNode>“‘What is it, then?’ he gasped in astonishment.</TextNode>

            <TextNode>
              “‘It is nothing less than the ancient crown of the kings of
              England.’
            </TextNode>

            <TextNode>“‘The crown!’</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “‘Precisely. Consider what the Ritual says: How does it run?
              “Whose was it?” “His who is gone.” That was after the execution of
              Charles. Then, “Who shall have it?” “He who will come.” That was
              Charles the Second, whose advent was already foreseen. There can,
              I think, be no doubt that this battered and shapeless diadem once
              encircled the brows of the royal Stuarts.’
            </TextNode>

            <TextNode>“‘And how came it in the pond?’</TextNode>

            <TextNode>
              “‘Ah, that is a question that will take some time to answer.’ And
              with that I sketched out to him the whole long chain of surmise
              and of proof which I had constructed. The twilight had closed in
              and the moon was shining brightly in the sky before my narrative
              was finished.
            </TextNode>

            <TextNode>
              “‘And how was it then that Charles did not get his crown when he
              returned?’ asked Musgrave, pushing back the relic into its linen
              bag.
            </TextNode>

            <TextNode>
              “‘Ah, there you lay your finger upon the one point which we shall
              probably never be able to clear up. It is likely that the Musgrave
              who held the secret died in the interval, and by some oversight
              left this guide to his descendant without explaining the meaning
              of it. From that day to this it has been handed down from father
              to son, until at last it came within reach of a man who tore its
              secret out of it and lost his life in the venture.’
            </TextNode>

            <TextNode>
              “And that's the story of the Musgrave Ritual, Watson. They have
              the crown down at Hurlstone—though they had some legal bother and
              a considerable sum to pay before they were allowed to retain it. I
              am sure that if you mentioned my name they would be happy to show
              it to you. Of the woman nothing was ever heard, and the
              probability is that she got away out of England and carried
              herself and the memory of her crime to some land beyond the seas.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page143;
