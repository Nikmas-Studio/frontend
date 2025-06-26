import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page187({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;PRIORY&nbsp;SCHOOL'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I understand that, Mr. Holmes, and it is already settled that he
              shall leave me for ever and go to seek his fortune in Australia.”
            </TextNode>

            <TextNode>
              “In that case, your Grace, since you have yourself stated that any
              unhappiness in your married life was caused by his presence, I
              would suggest that you make such amends as you can to the Duchess,
              and that you try to resume those relations which have been so
              unhappily interrupted.”
            </TextNode>

            <TextNode>
              “That also I have arranged, Mr. Holmes. I wrote to the Duchess
              this morning.”
            </TextNode>

            <TextNode>
              “In that case,” said Holmes, rising, “I think that my friend and I
              can congratulate ourselves upon several most happy results from
              our little visit to the North. There is one other small point upon
              which I desire some light. This fellow Hayes had shod his horses
              with shoes which counterfeited the tracks of cows. Was it from Mr.
              Wilder that he learned so extraordinary a device?”
            </TextNode>

            <TextNode>
              The Duke stood in thought for a moment, with a look of intense
              surprise on his face. Then he opened a door and showed us into a
              large room furnished as a museum. He led the way to a glass case
              in a corner, and pointed to the inscription.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “These shoes,” it ran, “were dug up in the moat of Holdernesse
              Hall. They are for the use of horses; but they are shaped below
              with a cloven foot of iron, so as to throw pursuers off the track.
              They are supposed to have belonged to some of the marauding Barons
              of Holdernesse in the Middle Ages.“
            </TextNode>

            <TextNode>
              Holmes opened the case, and moistening his finger he passed it
              along the shoe. A thin film of recent mud was left upon his skin.
            </TextNode>

            <TextNode>
              “Thank you,” said he, as he replaced the glass. “It is the second
              most interesting object that I have seen in the North.”
            </TextNode>

            <TextNode>“And the first?”</TextNode>

            <TextNode>
              Holmes folded up his cheque and placed it carefully in his
              note-book. “I am a poor man,” said he, as he patted it
              affectionately and thrust it into the depths of his inner pocket.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page187;
