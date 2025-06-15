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
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page16({
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
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The old crone drew out an evening paper, and pointed at our
              advertisement. “It's this as has brought me, good gentlemen,” she
              said, dropping another curtsey; “a gold wedding ring in the
              Brixton Road. It belongs to my girl Sally, as was married only
              this time twelvemonth, which her husband is steward aboard a Union
              boat, and what he'd say if he comes 'ome and found her without her
              ring is more than I can think, he being short enough at the best
              o' times, but more especially when he has the drink. If it please
              you, she went to the circus last night along with—”
            </TextNode>

            <TextNode>“Is that her ring?” I asked.</TextNode>

            <TextNode>
              “The Lord be thanked!” cried the old woman; “Sally will be a glad
              woman this night. That's the ring.”
            </TextNode>

            <TextNode>
              “And what may your address be?” I inquired, taking up a pencil.
            </TextNode>

            <TextNode>
              “13, Duncan Street, Houndsditch. A weary way from here.”
            </TextNode>

            <TextNode>
              “The Brixton Road does not lie between any circus and
              Houndsditch,” said Sherlock Holmes sharply.
            </TextNode>

            <TextNode>
              The old woman faced round and looked keenly at him from her little
              red-rimmed eyes. “The gentleman asked me for my address,” she
              said. “Sally lives in lodgings at 3, Mayfield Place, Peckham.”
            </TextNode>

            <TextNode>“And your name is—?”</TextNode>

            <TextNode>
              “My name is Sawyer—her's is Dennis, which Tom Dennis married
              her—and a smart, clean lad, too, as long as he's at sea, and no
              steward in the company more thought of; but when on shore, what
              with the women and what with liquor shops—”
            </TextNode>

            <TextNode>
              “Here is your ring, Mrs. Sawyer,” I interrupted, in obedience to a
              sign from my companion; “it clearly belongs to your daughter, and
              I am glad to be able to restore it to the rightful owner.”
            </TextNode>

            <TextNode>
              With many mumbled blessings and protestations of gratitude the old
              crone packed it away in her pocket, and shuffled off down the
              stairs. Sherlock Holmes sprang to his feet the moment that she was
              gone and rushed into his room. He returned in a few seconds
              enveloped in an ulster and a cravat. “I'll follow her,” he said,
              hurriedly; “she must be an accomplice, and will lead me to him.
              Wait up for me.” The hall door had hardly slammed behind our
              visitor before Holmes had descended the stair. Looking through the
              window I could see her walking feebly along the other side, while
              her pursuer dogged her some little distance behind. “Either his
              whole theory is incorrect,” I thought to myself, “or else he will
              be led now to the heart of the mystery.” There was no need for him
              to ask me to wait up for him, for I felt that sleep was impossible
              until I heard the result of his adventure.
            </TextNode>

            <TextNode>
              It was close upon nine when he set out. I had no idea how long he
              might be, but I sat stolidly puffing at my pipe and skipping over
              the pages of Henri Murger's Vie de Bohème. Ten o'clock passed, and
              I heard the footsteps of the maid as they pattered off to bed.
              Eleven, and the more stately tread of the landlady passed my door,
              bound for the same destination. It was close upon twelve before I
              heard the sharp sound of his latch-key. The instant he entered I
              saw by his face that he had not been successful. Amusement and
              chagrin seemed to be struggling for the mastery, until the former
              suddenly carried the day, and he burst into a hearty laugh.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode>
              “I wouldn't have the Scotland Yarders know it for the world,” he
              cried, dropping into his chair; “I have chaffed them so much that
              they would never have let me hear the end of it. I can afford to
              laugh, because I know that I will be even with them in the long
              run.”
            </TextNode>

            <TextNode>“What is it then?” I asked.</TextNode>

            <TextNode>
              “Oh, I don't mind telling a story against myself. That creature
              had gone a little way when she began to limp and show every sign
              of being foot-sore. Presently she came to a halt, and hailed a
              four-wheeler which was passing. I managed to be close to her so as
              to hear the address, but I need not have been so anxious, for she
              sang it out loud enough to be heard at the other side of the
              street, ‘Drive to 13, Duncan Street, Houndsditch,’ she cried. This
              begins to look genuine, I thought, and having seen her safely
              inside, I perched myself behind. That's an art which every
              detective should be an expert at. Well, away we rattled, and never
              drew rein until we reached the street in question. I hopped off
              before we came to the door, and strolled down the street in an
              easy, lounging way. I saw the cab pull up. The driver jumped down,
              and I saw him open the door and stand expectantly. Nothing came
              out though. When I reached him he was groping about frantically in
              the empty cab, and giving vent to the finest assorted collection
              of oaths that ever I listened to. There was no sign or trace of
              his passenger, and I fear it will be some time before he gets his
              fare. On inquiring at Number 13 we found that the house belonged
              to a respectable paperhanger, named Keswick, and that no one of
              the name either of Sawyer or Dennis had ever been heard of there.”
            </TextNode>
            <TextNode>
              “You don't mean to say,” I cried, in amazement, “that that
              tottering, feeble old woman was able to get out of the cab while
              it was in motion, without either you or the driver seeing her?”
            </TextNode>

            <TextNode>
              “Old woman be damned!” said Sherlock Holmes, sharply. “We were the
              old women to be so taken in. It must have been a young man, and an
              active one, too, besides being an incomparable actor. The get-up
              was inimitable. He saw that he was followed, no doubt, and used
              this means of giving me the slip. It shows that the man we are
              after is not as lonely as I imagined he was, but has friends who
              are ready to risk something for him. Now, Doctor, you are looking
              done-up. Take my advice and turn in.”
            </TextNode>

            <TextNode>
              I was certainly feeling very weary, so I obeyed his injunction. I
              left Holmes seated in front of the smouldering fire, and long into
              the watches of the night I heard the low, melancholy wailings of
              his violin, and knew that he was still pondering over the strange
              problem which he had set himself to unravel.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page16;
