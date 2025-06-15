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

function Page5({
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
              Young Stamford looked rather strangely at me over his wine-glass.
              “You don’t know Sherlock Holmes yet,” he said; “perhaps you would
              not care for him as a constant companion.”
            </TextNode>
            <TextNode>“Why, what is there against him?”</TextNode>
            <TextNode>
              “Oh, I didn’t say there was anything against him. He is a little
              queer in his ideas—an enthusiast in some branches of science. As
              far as I know he is a decent fellow enough.”
            </TextNode>
            <TextNode>“A medical student, I suppose?” said I.</TextNode>
            <TextNode>
              “No—I have no idea what he intends to go in for. I believe he is
              well up in anatomy, and he is a first-class chemist; but, as far
              as I know, he has never taken out any systematic medical classes.
              His studies are very desultory and eccentric, but he has amassed a
              lot of out-of-the way knowledge which would astonish his
              professors.”
            </TextNode>
            <TextNode>
              “Did you never ask him what he was going in for?” I asked.
            </TextNode>
            <TextNode>
              “No; he is not a man that it is easy to draw out, though he can be
              communicative enough when the fancy seizes him.”
            </TextNode>
            <TextNode>
              “I should like to meet him,” I said. “If I am to lodge with
              anyone, I should prefer a man of studious and quiet habits. I am
              not strong enough yet to stand much noise or excitement. I had
              enough of both in Afghanistan to last me for the remainder of my
              natural existence. How could I meet this friend of yours?”
            </TextNode>
            <TextNode>
              “He is sure to be at the laboratory,” returned my companion. “He
              either avoids the place for weeks, or else he works there from
              morning to night. If you like, we shall drive round together after
              luncheon.”
            </TextNode>
            <TextNode>
              “Certainly,” I answered, and the conversation drifted away into
              other channels.
            </TextNode>
            <TextNode>
              As we made our way to the hospital after leaving the Holborn,
              Stamford gave me a few more particulars about the gentleman whom I
              proposed to take as a fellow-lodger.
            </TextNode>
            <TextNode>
              “You mustn’t blame me if you don’t get on with him,” he said; “I
              know nothing more of him than I have learned from meeting him
              occasionally in the laboratory. You proposed this arrangement, so
              you must not hold me responsible.”
            </TextNode>
            <TextNode>
              “If we don’t get on it will be easy to part company,” I answered.
              “It seems to me, Stamford,” I added, looking hard at my companion,
              “that you have some reason for washing your hands of the matter.
              Is this fellow’s temper so formidable, or what is it? Don’t be
              mealy-mouthed about it.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It is not easy to express the inexpressible,” he answered with a
              laugh. “Holmes is a little too scientific for my tastes—it
              approaches to coldbloodedness. I could imagine his giving a friend
              a little pinch of the latest vegetable alkaloid, not out of
              malevolence, you understand, but simply out of a spirit of inquiry
              in order to have an accurate idea of the effects. To do him
              justice, I think that he would take it himself with the same
              readiness. He appears to have a passion for definite and exact
              knowledge.”
            </TextNode>
            <TextNode>“Very right too.”</TextNode>
            <TextNode>
              “Yes, but it may be pushed to excess. When it comes to beating the
              subjects in the dissectingrooms with a stick, it is certainly
              taking rather a bizarre shape.”
            </TextNode>
            <TextNode>“Beating the subjects!”</TextNode>
            <TextNode>
              “Yes, to verify how far bruises may be produced after death. I saw
              him at it with my own eyes.”
            </TextNode>
            <TextNode>“And yet you say he is not a medical student?”</TextNode>
            <TextNode>
              “No. Heaven knows what the objects of his studies are. But here we
              are, and you must form your own impressions about him.” As he
              spoke, we turned down a narrow lane and passed through a small
              side-door, which opened into a wing of the great hospital. It was
              familiar ground to me, and I needed no guiding as we ascended the
              bleak stone staircase and made our way down the long corridor with
              its vista of whitewashed wall and dun-coloured doors. Near the
              further end a low arched passage branched away from it and led to
              the chemical laboratory.
            </TextNode>
            <TextNode>
              This was a lofty chamber, lined and littered with countless
              bottles. Broad, low tables were scattered about, which bristled
              with retorts, test-tubes, and little Bunsen lamps, with their blue
              flickering flames. There was only one student in the room, who was
              bending over a distant table absorbed in his work. At the sound of
              our steps he glanced round and sprang to his feet with a cry of
              pleasure. “I’ve found it! I’ve found it,” he shouted to my
              companion, running towards us with a test-tube in his hand. “I
              have found a re-agent which is precipitated by hœmoglobin, and by
              nothing else.” Had he discovered a gold mine, greater delight
              could not have shone upon his features.
            </TextNode>
            <TextNode>
              “Dr. Watson, Mr. Sherlock Holmes,” said Stamford, introducing us.
            </TextNode>
            <TextNode>
              “How are you?” he said cordially, gripping my hand with a strength
              for which I should hardly have given him credit. “You have been in
              Afghanistan, I perceive.”
            </TextNode>
            <TextNode>
              “How on earth did you know that?” I asked in astonishment.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page5;
