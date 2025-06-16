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

function Page49({
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
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Fairly so. I worked back to him through Carlyle.”
            </TextNode>

            <TextNode>
              “That was like following the brook to the parent lake. He makes
              one curious but profound remark. It is that the chief proof of
              man's real greatness lies in his perception of his own smallness.
              It argues, you see, a power of comparison and of appreciation
              which is in itself a proof of nobility. There is much food for
              thought in Richter. You have not a pistol, have you?”
            </TextNode>

            <TextNode>“I have my stick.”</TextNode>

            <TextNode>
              “It is just possible that we may need something of the sort if we
              get to their lair. Jonathan I shall leave to you, but if the other
              turns nasty I shall shoot him dead.” He took out his revolver as
              he spoke, and, having loaded two of the chambers, he put it back
              into the right-hand pocket of his jacket.
            </TextNode>

            <TextNode>
              We had during this time been following the guidance of Toby down
              the half-rural villa-lined roads which lead to the metropolis.
              Now, however, we were beginning to come among continuous streets,
              where laborers and dockmen were already astir, and slatternly
              women were taking down shutters and brushing door-steps. At the
              square-topped corner public houses business was just beginning,
              and rough-looking men were emerging, rubbing their sleeves across
              their beards after their morning wet. Strange dogs sauntered up
              and stared wonderingly at us as we passed, but our inimitable Toby
              looked neither to the right nor to the left, but trotted onwards
              with his nose to the ground and an occasional eager whine which
              spoke of a hot scent.
            </TextNode>

            <TextNode>
              We had traversed Streatham, Brixton, Camberwell, and now found
              ourselves in Kennington Lane, having borne away through the
              side-streets to the east of the Oval. The men whom we pursued
              seemed to have taken a curiously zigzag road, with the idea
              probably of escaping observation. They had never kept to the main
              road if a parallel side-street would serve their turn. At the foot
              of Kennington Lane they had edged away to the left through Bond
              Street and Miles Street. Where the latter street turns into
              Knight's Place, Toby ceased to advance, but began to run backwards
              and forwards with one ear cocked and the other drooping, the very
              picture of canine indecision. Then he waddled round in circles,
              looking up to us from time to time, as if to ask for sympathy in
              his embarrassment.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “What the deuce is the matter with the dog?” growled Holmes. “They
              surely would not take a cab, or go off in a balloon.”
            </TextNode>

            <TextNode>
              “Perhaps they stood here for some time,” I suggested.
            </TextNode>

            <TextNode>
              “Ah! it's all right. He's off again,” said my companion, in a tone
              of relief.
            </TextNode>

            <TextNode>
              He was indeed off, for after sniffing round again he suddenly made
              up his mind, and darted away with an energy and determination such
              as he had not yet shown. The scent appeared to be much hotter than
              before, for he had not even to put his nose on the ground, but
              tugged at his leash and tried to break into a run. I cold see by
              the gleam in Holmes's eyes that he thought we were nearing the end
              of our journey.
            </TextNode>

            <TextNode>
              Our course now ran down Nine Elms until we came to Broderick and
              Nelson's large timber-yard, just past the White Eagle tavern. Here
              the dog, frantic with excitement, turned down through the
              side-gate into the enclosure, where the sawyers were already at
              work. On the dog raced through sawdust and shavings, down an
              alley, round a passage, between two wood-piles, and finally, with
              a triumphant yelp, sprang upon a large barrel which still stood
              upon the hand-trolley on which it had been brought. With lolling
              tongue and blinking eyes, Toby stood upon the cask, looking from
              one to the other of us for some sign of appreciation. The staves
              of the barrel and the wheels of the trolley were smeared with a
              dark liquid, and the whole air was heavy with the smell of
              creasote.
            </TextNode>

            <TextNode>
              Sherlock Holmes and I looked blankly at each other, and then burst
              simultaneously into an uncontrollable fit of laughter.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page49;
