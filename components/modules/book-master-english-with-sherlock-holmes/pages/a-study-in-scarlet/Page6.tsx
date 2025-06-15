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

function Page6({
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
              “Never mind,” said he, chuckling to himself. “The question now is
              about hœmoglobin. No doubt you see the significance of this
              discovery of mine?”
            </TextNode>

            <TextNode>
              “It is interesting, chemically, no doubt,” I answered, “but
              practically—”
            </TextNode>

            <TextNode>
              “Why, man, it is the most practical medico-legal discovery for
              years. Don’t you see that it gives us an infallible test for blood
              stains. Come over here now!” He seized me by the coat-sleeve in
              his eagerness, and drew me over to the table at which he had been
              working. “Let us have some fresh blood,” he said, digging a long
              bodkin into his finger, and drawing off the resulting drop of
              blood in a chemical pipette. “Now, I add this small quantity of
              blood to a litre of water. You perceive that the resulting mixture
              has the appearance of pure water. The proportion of blood cannot
              be more than one in a million. I have no doubt, however, that we
              shall be able to obtain the characteristic reaction.” As he spoke,
              he threw into the vessel a few white crystals, and then added some
              drops of a transparent fluid. In an instant the contents assumed a
              dull mahogany colour, and a brownish dust was precipitated to the
              bottom of the glass jar.
            </TextNode>

            <TextNode>
              “Ha! ha!” he cried, clapping his hands, and looking as delighted
              as a child with a new toy. “What do you think of that?”
            </TextNode>

            <TextNode>
              “It seems to be a very delicate test,” I remarked.
            </TextNode>

            <TextNode>
              “Beautiful! beautiful! The old Guiacum test was very clumsy and
              uncertain. So is the microscopic examination for blood corpuscles.
              The latter is valueless if the stains are a few hours old. Now,
              this appears to act as well whether the blood is old or new. Had
              this test been invented, there are hundreds of men now walking the
              earth who would long ago have paid the penalty of their crimes.”
            </TextNode>

            <TextNode>“Indeed!” I murmured.</TextNode>

            <TextNode>
              “Criminal cases are continually hinging upon that one point. A man
              is suspected of a crime months perhaps after it has been
              committed. His linen or clothes are examined, and brownish stains
              discovered upon them. Are they blood stains, or mud stains, or
              rust stains, or fruit stains, or what are they? That is a question
              which has puzzled many an expert, and why? Because there was no
              reliable test. Now we have the Sherlock Holmes’ test, and there
              will no longer be any difficulty.”
            </TextNode>

            <TextNode>
              His eyes fairly glittered as he spoke, and he put his hand over
              his heart and bowed as if to some applauding crowd conjured up by
              his imagination.
            </TextNode>

            <TextNode>
              “You are to be congratulated,” I remarked, considerably surprised
              at his enthusiasm.
            </TextNode>

            <TextNode>
              “There was the case of Von Bischoff at Frankfort last year. He
              would certainly have been hung had this test been in existence.
              Then there was Mason of Bradford, and the notorious Muller, and
              Lefevre of Montpellier, and Samson of new Orleans. I could name a
              score of cases in which it would have been decisive.”
            </TextNode>

            <TextNode>
              “You seem to be a walking calendar of crime,” said Stamford with a
              laugh. “You might start a paper on those lines. Call it the
              ‘Police News of the Past.’ ”
            </TextNode>
            <TextNode>
              “Very interesting reading it might be made, too,” remarked
              Sherlock Holmes, sticking a small piece of plaster over the prick
              on his finger. “I have to be careful,” he continued, turning to me
              with a smile, “for I dabble with poisons a good deal.” He held out
              his hand as he spoke, and I noticed that it was all mottled over
              with similar pieces of plaster, and discoloured with strong acids.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “We came here on business,” said Stamford, sitting down on a high
              three-legged stool, and pushing another one in my direction with
              his foot. “My friend here wants to take diggings, and as you were
              complaining that you could get no one to go halves with you, I
              thought that I had better bring you together.”
            </TextNode>

            <TextNode>
              Sherlock Holmes seemed delighted at the idea of sharing his rooms
              with me. “I have my eye on a suite in Baker Street,” he said,
              “which would suit us down to the ground. You don’t mind the smell
              of strong tobacco, I hope?”
            </TextNode>

            <TextNode>
              “I always smoke ‘ship’s’ myself,” I answered. “That’s good enough.
              I generally have chemicals about, and occasionally do experiments.
              Would that annoy you?”
            </TextNode>

            <TextNode>“By no means.”</TextNode>

            <TextNode>
              “Let me see—what are my other shortcomings. I get in the dumps at
              times, and don’t open my mouth for days on end. You must not think
              I am sulky when I do that. Just let me alone, and I’ll soon be
              right. What have you to confess now? It’s just as well for two
              fellows to know the worst of one another before they begin to live
              together.”
            </TextNode>

            <TextNode>
              I laughed at this cross-examination. “I keep a bull pup,” I said,
              “and I object to rows because my nerves are shaken, and I get up
              at all sorts of ungodly hours, and I am extremely lazy. I have
              another set of vices when I’m well, but those are the principal
              ones at present.”
            </TextNode>

            <TextNode>
              “Do you include violin-playing in your category of rows?” he
              asked, anxiously.
            </TextNode>

            <TextNode>
              “It depends on the player,” I answered. “A wellplayed violin is a
              treat for the gods—a badly-played one—”
            </TextNode>

            <TextNode>
              “Oh, that’s all right,” he cried, with a merry laugh. “I think we
              may consider the thing as settled—that is, if the rooms are
              agreeable to you.”
            </TextNode>

            <TextNode>“When shall we see them?”</TextNode>

            <TextNode>
              “Call for me here at noon to-morrow, and we’ll go together and
              settle everything,” he answered.
            </TextNode>

            <TextNode>
              “All right—noon exactly,” said I, shaking his hand.
            </TextNode>

            <TextNode>
              We left him working among his chemicals, and we walked together
              towards my hotel.
            </TextNode>

            <TextNode>
              “By the way,” I asked suddenly, stopping and turning upon
              Stamford, “how the deuce did he know that I had come from
              Afghanistan?”
            </TextNode>

            <TextNode>
              My companion smiled an enigmatical smile. “That’s just his little
              peculiarity,” he said. “A good many people have wanted to know how
              he finds things out.”
            </TextNode>

            <TextNode>
              “Oh! a mystery is it?” I cried, rubbing my hands. “This is very
              piquant. I am much obliged to you for bringing us together. ‘The
              proper study of mankind is man,’ you know.”
            </TextNode>

            <TextNode>
              “You must study him, then,” Stamford said, as he bade me good-bye.
              “You’ll find him a knotty problem, though. I’ll wager he learns
              more about you than you about him. Good-bye.”
            </TextNode>

            <TextNode>
              “Good-bye,” I answered, and strolled on to my hotel, considerably
              interested in my new acquaintance.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page6;
