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

function Page237({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;HOUND OF&nbsp;THE&nbsp;BASKERVILLES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It is worth a mud bath,” said he. “It is our friend Sir Henry's
              missing boot.”
            </TextNode>

            <TextNode>“Thrown there by Stapleton in his flight.”</TextNode>

            <TextNode>
              “Exactly. He retained it in his hand after using it to set the
              hound upon the track. He fled when he knew the game was up, still
              clutching it. And he hurled it away at this point of his flight.
              We know at least that he came so far in safety.”
            </TextNode>

            <TextNode>
              But more than that we were never destined to know, though there
              was much which we might surmise. There was no chance of finding
              footsteps in the mire, for the rising mud oozed swiftly in upon
              them, but as we at last reached firmer ground beyond the morass we
              all looked eagerly for them. But no slightest sign of them ever
              met our eyes. If the earth told a true story, then Stapleton never
              reached that island of refuge towards which he struggled through
              the fog upon that last night. Somewhere in the heart of the great
              Grimpen Mire, down in the foul slime of the huge morass which had
              sucked him in, this cold and cruel-hearted man is forever buried.
            </TextNode>

            <TextNode>
              Many traces we found of him in the bog-girt island where he had
              hid his savage ally. A huge driving-wheel and a shaft half-filled
              with rubbish showed the position of an abandoned mine. Beside it
              were the crumbling remains of the cottages of the miners, driven
              away no doubt by the foul reek of the surrounding swamp. In one of
              these a staple and chain with a quantity of gnawed bones showed
              where the animal had been confined. A skeleton with a tangle of
              brown hair adhering to it lay among the debris.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “A dog!” said Holmes. “By Jove, a curly-haired spaniel. Poor
              Mortimer will never see his pet again. Well, I do not know that
              this place contains any secret which we have not already fathomed.
              He could hide his hound, but he could not hush its voice, and
              hence came those cries which even in daylight were not pleasant to
              hear. On an emergency he could keep the hound in the out-house at
              Merripit, but it was always a risk, and it was only on the supreme
              day, which he regarded as the end of all his efforts, that he
              dared do it. This paste in the tin is no doubt the luminous
              mixture with which the creature was daubed. It was suggested, of
              course, by the story of the family hell-hound, and by the desire
              to frighten old Sir Charles to death. No wonder the poor devil of
              a convict ran and screamed, even as our friend did, and as we
              ourselves might have done, when he saw such a creature bounding
              through the darkness of the moor upon his track. It was a cunning
              device, for, apart from the chance of driving your victim to his
              death, what peasant would venture to inquire too closely into such
              a creature should he get sight of it, as many have done, upon the
              moor? I said it in London, Watson, and I say it again now, that
              never yet have we helped to hunt down a more dangerous man than he
              who is lying yonder”—he swept his long arm towards the huge
              mottled expanse of green-splotched bog which stretched away until
              it merged into the russet slopes of the moor.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page237;
