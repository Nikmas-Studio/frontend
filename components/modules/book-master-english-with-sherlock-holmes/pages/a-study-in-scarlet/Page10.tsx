'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
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

function Page10({
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
        <H4>
          Chapter III.
          <br />
          The Lauriston Garden Mystery
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I confess that I was considerably startled by this fresh proof of
              the practical nature of my companion&apos;s theories. My respect
              for his powers of analysis increased wondrously. There still
              remained some lurking suspicion in my mind, however, that the
              whole thing was a pre-arranged episode, intended to dazzle me,
              though what earthly object he could have in taking me in was past
              my comprehension. When I looked at him he had finished reading the
              note, and his eyes had assumed the vacant, lack-lustre expression
              which showed mental abstraction.
            </TextNode>

            <TextNode>
              “How in the world did you deduce that?” I asked.
            </TextNode>

            <TextNode>“Deduce what?” said he, petulantly.</TextNode>

            <TextNode>
              “Why, that he was a retired sergeant of Marines.”
            </TextNode>

            <TextNode>
              “I have no time for trifles,” he answered, brusquely; then with a
              smile, “Excuse my rudeness. You broke the thread of my thoughts;
              but perhaps it is as well. So you actually were not able to see
              that that man was a sergeant of Marines?”
            </TextNode>

            <TextNode>“No, indeed.”</TextNode>

            <TextNode>
              “It was easier to know it than to explain why I knew it. If you
              were asked to prove that two and two made four, you might find
              some difficulty, and yet you are quite sure of the fact. Even
              across the street I could see a great blue anchor tattooed on the
              back of the fellow&apos;s hand. That smacked of the sea. He had a
              military carriage, however, and regulation side whiskers. There we
              have the marine. He was a man with some amount of self-importance
              and a certain air of command. You must have observed the way in
              which he held his head and swung his cane. A steady, respectable,
              middle-aged man, too, on the face of him—all facts which led me to
              believe that he had been a sergeant.”
            </TextNode>

            <TextNode>“Wonderful!” I ejaculated.</TextNode>

            <TextNode>
              “Commonplace,” said Holmes, though I thought from his expression
              that he was pleased at my evident surprise and admiration. “I said
              just now that there were no criminals. It appears that I am
              wrong—look at this!” He threw me over the note which the
              commissionaire had brought.
            </TextNode>

            <TextNode>
              “Why,” I cried, as I cast my eye over it, “this is terrible!”
            </TextNode>

            <TextNode>
              “It does seem to be a little out of the common,” he remarked,
              calmly. “Would you mind reading it to me aloud?”
            </TextNode>

            <TextNode>This is the letter which I read to him—</TextNode>

            <Indent>
              <TextNode noIndent>
                <span className='italic'>“My dear Mr. Sherlock Holmes:</span>
                <br /> “There has been a bad business during the night at 3,
                Lauriston Gardens, off the Brixton Road. Our man on the beat saw
                a light there about two in the morning, and as the house was an
                empty one, suspected that something was amiss. He found the door
                open, and in the front room, which is bare of furniture,
                discovered the body of a gentleman, well dressed, and having
                cards in his pocket bearing the name of ‘Enoch J. Drebber,
                Cleveland, Ohio, U.S.A.’ There had been no robbery, nor is there
                any evidence as to how the man met his death. There are marks of
                blood in the room, but there is no wound upon his person. We are
                at a loss as to how he came into the empty house; indeed, the
                whole affair is a puzzler. If you can come round to the house
                any time before twelve, you will find me there. I have left
                everything in statu quo until I hear from you. If you are unable
                to come I shall give you fuller details, and would esteem it a
                great kindness if you would favour me with your opinion.
                <br />
                <span className='italic'>
                  “Yours faithfully,
                  <br />
                  “Tobias Gregson.”
                </span>
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Gregson is the smartest of the Scotland Yarders,” my friend
              remarked; “he and Lestrade are the pick of a bad lot. They are
              both quick and energetic, but conventional—shockingly so. They
              have their knives into one another, too. They are as jealous as a
              pair of professional beauties. There will be some fun over this
              case if they are both put upon the scent.”
            </TextNode>

            <TextNode>
              I was amazed at the calm way in which he rippled on. “Surely there
              is not a moment to be lost,” I cried, “shall I go and order you a
              cab?”
            </TextNode>

            <TextNode>
              “I&apos;m not sure about whether I shall go. I am the most
              incurably lazy devil that ever stood in shoe leather—that is, when
              the fit is on me, for I can be spry enough at times.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Why, it is just such a chance as you have been longing for.”
            </TextNode>

            <TextNode>
              “My dear fellow, what does it matter to me. Supposing I unravel
              the whole matter, you may be sure that Gregson, Lestrade, and Co.
              will pocket all the credit. That comes of being an unofficial
              personage.”
            </TextNode>

            <TextNode>“But he begs you to help him.”</TextNode>

            <TextNode>
              “Yes. He knows that I am his superior, and acknowledges it to me;
              but he would cut his tongue out before he would own it to any
              third person. However, we may as well go and have a look. I shall
              work it out on my own hook. I may have a laugh at them if I have
              nothing else. Come on!”
            </TextNode>

            <TextNode>
              He hustled on his overcoat, and bustled about in a way that showed
              that an energetic fit had superseded the apathetic one.
            </TextNode>

            <TextNode>“Get your hat,” he said.</TextNode>

            <TextNode>“You wish me to come?”</TextNode>

            <TextNode>
              “Yes, if you have nothing better to do.” A minute later we were
              both in a hansom, driving furiously for the Brixton Road.
            </TextNode>

            <TextNode>
              It was a foggy, cloudy morning, and a dun-coloured veil hung over
              the house-tops, looking like the reflection of the mud-coloured
              streets beneath. My companion was in the best of spirits, and
              prattled away about Cremona fiddles, and the difference between a
              Stradivarius and an Amati. As for myself, I was silent, for the
              dull weather and the melancholy business upon which we were
              engaged, depressed my spirits.
            </TextNode>

            <TextNode>
              “You don&apos;t seem to give much thought to the matter in hand,”
              I said at last, interrupting Holmes&apos; musical disquisition.
            </TextNode>

            <TextNode>
              “No data yet,” he answered. “It is a capital mistake to theorize
              before you have all the evidence. It biases the judgment.”
            </TextNode>

            <TextNode>
              “You will have your data soon,” I remarked, pointing with my
              finger; “this is the Brixton Road, and that is the house, if I am
              not very much mistaken.”
            </TextNode>

            <TextNode>
              “So it is. Stop, driver, stop!” We were still a hundred yards or
              so from it, but he insisted upon our alighting, and we finished
              our journey upon foot.
            </TextNode>

            <TextNode>
              Number 3, Lauriston Gardens wore an ill-omened and minatory look.
              It was one of four which stood back some little way from the
              street, two being occupied and two empty. The latter looked out
              with three tiers of vacant melancholy windows, which were blank
              and dreary, save that here and there a “To Let” card had developed
              like a cataract upon the bleared panes. A small garden sprinkled
              over with a scattered eruption of sickly plants separated each of
              these houses from the street, and was traversed by a narrow
              pathway, yellowish in colour, and consisting apparently of a
              mixture of clay and of gravel. The whole place was very sloppy
              from the rain which had fallen through the night. The garden was
              bounded by a three-foot brick wall with a fringe of wood rails
              upon the top, and against this wall was leaning a stalwart police
              constable, surrounded by a small knot of loafers, who craned their
              necks and strained their eyes in the vain hope of catching some
              glimpse of the proceedings within.
            </TextNode>

            <TextNode>
              I had imagined that Sherlock Holmes would at once have hurried
              into the house and plunged into a study of the mystery. Nothing
              appeared to be further from his intention. With an air of
              nonchalance which, under the circumstances, seemed to me to border
              upon affectation, he lounged up and down the pavement, and gazed
              vacantly at the ground, the sky, the opposite houses and the line
              of railings. Having finished his scrutiny, he proceeded slowly
              down the path, or rather down the fringe of grass which flanked
              the path, keeping his eyes riveted upon the ground. Twice he
              stopped, and once I saw him smile, and heard him utter an
              exclamation of satisfaction. There were many marks of footsteps
              upon the wet clayey soil, but since the police had been coming and
              going over it, I was unable to see how my companion could hope to
              learn anything from it. Still I had had such extraordinary
              evidence of the quickness of his perceptive faculties, that I had
              no doubt that he could see a great deal which was hidden from me.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page10;
