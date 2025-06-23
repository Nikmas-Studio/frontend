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

function Page151({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE CROOKED MAN'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The man leaned over and pulled up the front of a kind of hutch in
              the corner. In an instant out there slipped a beautiful
              reddish-brown creature, thin and lithe, with the legs of a stoat,
              a long, thin nose, and a pair of the finest red eyes that ever I
              saw in an animal's head.
            </TextNode>

            <TextNode>“It's a mongoose,” I cried.</TextNode>

            <TextNode>
              “Well, some call them that, and some call them ichneumon,” said
              the man. “Snake-catcher is what I call them, and Teddy is amazing
              quick on cobras. I have one here without the fangs, and Teddy
              catches it every night to please the folk in the canteen.
            </TextNode>

            <TextNode>“Any other point, sir?”</TextNode>

            <TextNode>
              “Well, we may have to apply to you again if Mrs. Barclay should
              prove to be in serious trouble.”
            </TextNode>

            <TextNode>“In that case, of course, I'd come forward.”</TextNode>

            <TextNode>
              “But if not, there is no object in raking up this scandal against
              a dead man, foully as he has acted. You have at least the
              satisfaction of knowing that for thirty years of his life his
              conscience bitterly reproached him for this wicked deed. Ah, there
              goes Major Murphy on the other side of the street. Good-bye, Wood.
              I want to learn if anything has happened since yesterday.”
            </TextNode>

            <TextNode>
              We were in time to overtake the major before he reached the
              corner.
            </TextNode>

            <TextNode>
              “Ah, Holmes,” he said: “I suppose you have heard that all this
              fuss has come to nothing?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“What then?”</TextNode>

            <TextNode>
              “The inquest is just over. The medical evidence showed
              conclusively that death was due to apoplexy. You see it was quite
              a simple case after all.”
            </TextNode>

            <TextNode>
              “Oh, remarkably superficial,” said Holmes, smiling. “Come, Watson,
              I don't think we shall be wanted in Aldershot any more.”
            </TextNode>

            <TextNode>
              “There's one thing,” said I, as we walked down to the station. “If
              the husband's name was James, and the other was Henry, what was
              this talk about David?”
            </TextNode>

            <TextNode>
              “That one word, my dear Watson, should have told me the whole
              story had I been the ideal reasoner which you are so fond of
              depicting. It was evidently a term of reproach.”
            </TextNode>

            <TextNode>“Of reproach?”</TextNode>

            <TextNode>
              “Yes; David strayed a little occasionally, you know, and on one
              occasion in the same direction as Sergeant James Barclay. You
              remember the small affair of Uriah and Bathsheba? My biblical
              knowledge is a trifle rusty, I fear, but you will find the story
              in the first or second of Samuel.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page151;
