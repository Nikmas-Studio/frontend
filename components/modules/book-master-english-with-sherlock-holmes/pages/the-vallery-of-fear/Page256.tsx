import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page255({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I thank you,” said McMurdo, and shaking hands with his new
              acquaintance he plodded, gripsack in hand, up the path which led
              to the dwelling house, at the door of which he gave a resounding
              knock.
            </TextNode>

            <TextNode>
              It was opened at once by someone very different from what he had
              expected. It was a woman, young and singularly beautiful. She was
              of the German type, blonde and fair-haired, with the piquant
              contrast of a pair of beautiful dark eyes with which she surveyed
              the stranger with surprise and a pleasing embarrassment which
              brought a wave of colour over her pale face. Framed in the bright
              light of the open doorway, it seemed to McMurdo that he had never
              seen a more beautiful picture; the more attractive for its
              contrast with the sordid and gloomy surroundings. A lovely violet
              growing upon one of those black slag-heaps of the mines would not
              have seemed more surprising. So entranced was he that he stood
              staring without a word, and it was she who broke the silence.
            </TextNode>

            <TextNode>
              “I thought it was father,” said she with a pleasing little touch
              of a German accent. “Did you come to see him? He is downtown. I
              expect him back every minute.”
            </TextNode>

            <TextNode>
              McMurdo continued to gaze at her in open admiration until her eyes
              dropped in confusion before this masterful visitor.
            </TextNode>

            <TextNode>
              “No, miss,” he said at last, “I'm in no hurry to see him. But your
              house was recommended to me for board. I thought it might suit
              me—and now I know it will.”
            </TextNode>

            <TextNode>
              “You are quick to make up your mind,” said she with a smile.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Anyone but a blind man could do as much,” the other answered.
            </TextNode>

            <TextNode>
              She laughed at the compliment. “Come right in, sir,” she said.
              “I'm Miss Ettie Shafter, Mr. Shafter's daughter. My mother's dead,
              and I run the house. You can sit down by the stove in the front
              room until father comes along—Ah, here he is! So you can fix
              things with him right away.”
            </TextNode>

            <TextNode>
              A heavy, elderly man came plodding up the path. In a few words
              McMurdo explained his business. A man of the name of Murphy had
              given him the address in Chicago. He in turn had had it from
              someone else. Old Shafter was quite ready. The stranger made no
              bones about terms, agreed at once to every condition, and was
              apparently fairly flush of money. For seven dollars a week paid in
              advance he was to have board and lodging.
            </TextNode>

            <TextNode>
              So it was that McMurdo, the self-confessed fugitive from justice,
              took up his abode under the roof of the Shafters, the first step
              which was to lead to so long and dark a train of events, ending in
              a far distant land.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page255;
