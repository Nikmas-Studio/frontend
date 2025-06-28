import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page274({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;WISTERIA&nbsp;LODGE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“And the message?”</TextNode>
            <TextNode>
              “How did it run? ‘Our own colours, green and white.’ Sounds like
              racing. ‘Green open, white shut.’ That is clearly a signal. ‘Main
              stair, first corridor, seventh right, green baize.’ This is an
              assignation. We may find a jealous husband at the bottom of it
              all. It was clearly a dangerous quest. She would not have said
              ‘Godspeed’ had it not been so. ‘D’—that should be a guide.”
            </TextNode>
            <TextNode>
              “The man was a Spaniard. I suggest that ‘D’ stands for Dolores, a
              common female name in Spain.”
            </TextNode>
            <TextNode>
              “Good, Watson, very good—but quite inadmissable. A Spaniard would
              write to a Spaniard in Spanish. The writer of this note is
              certainly English. Well, we can only possess our soul in patience
              until this excellent inspector come back for us. Meanwhile we can
              thank our lucky fate which has rescued us for a few short hours
              from the insufferable fatigues of idleness.”
            </TextNode>
            <TextNode>
              An answer had arrived to Holmes's telegram before our Surrey
              officer had returned. Holmes read it and was about to place it in
              his notebook when he caught a glimpse of my expectant face. He
              tossed it across with a laugh.
            </TextNode>
            <TextNode>“We are moving in exalted circles,” said he.</TextNode>
            <TextNode>The telegram was a list of names and addresses:</TextNode>

            <Indent>
              <TextNode noIndent>
                Lord Harringby, The Dingle; Sir George Ffolliott, Oxshott
                Towers; Mr. Hynes Hynes, J.P., Purdley Place; Mr. James Baker
                Williams, Forton Old Hall; Mr. Henderson, High Gable; Rev.
                Joshua Stone, Nether Walsling.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “This is a very obvious way of limiting our field of operations,”
              said Holmes. “No doubt Baynes, with his methodical mind, has
              already adopted some similar plan.”
            </TextNode>

            <TextNode>“I don't quite understand.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, my dear fellow, we have already arrived at the conclusion
              that the massage received by Garcia at dinner was an appointment
              or an assignation. Now, if the obvious reading of it is correct,
              and in order to keep the tryst one has to ascend a main stair and
              seek the seventh door in a corridor, it is perfectly clear that
              the house is a very large one. It is equally certain that this
              house cannot be more than a mile or two from Oxshott, since Garcia
              was walking in that direction and hoped, according to my reading
              of the facts, to be back in Wisteria Lodge in time to avail
              himself of an alibi, which would only be valid up to one o'clock.
              As the number of large houses close to Oxshott must be limited, I
              adopted the obvious method of sending to the agents mentioned by
              Scott Eccles and obtaining a list of them. Here they are in this
              telegram, and the other end of our tangled skein must lie among
              them.”
            </TextNode>

            <TextNode>
              It was nearly six o'clock before we found ourselves in the pretty
              Surrey village of Esher, with Inspector Baynes as our companion.
            </TextNode>

            <TextNode>
              Holmes and I had taken things for the night, and found comfortable
              quarters at the Bull. Finally we set out in the company of the
              detective on our visit to Wisteria Lodge. It was a cold, dark
              March evening, with a sharp wind and a fine rain beating upon our
              faces, a fit setting for the wild common over which our road
              passed and the tragic goal to which it led us.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page274;
