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

function Page8({
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
              When I had got so far in my list I threw it into the fire in
              despair. “If I can only find what the fellow is driving at by
              reconciling all these accomplishments, and discovering a calling
              which needs them all,” I said to myself, “I may as well give up
              the attempt at once.”
            </TextNode>

            <TextNode>
              I see that I have alluded above to his powers upon the violin.
              These were very remarkable, but as eccentric as all his other
              accomplishments. That he could play pieces, and difficult pieces,
              I knew well, because at my request he has played me some of
              Mendelssohn&apos;s Lieder, and other favourites. When left to
              himself, however, he would seldom produce any music or attempt any
              recognized air. Leaning back in his arm-chair of an evening, he
              would close his eyes and scrape carelessly at the fiddle which was
              thrown across his knee. Sometimes the chords were sonorous and
              melancholy. Occasionally they were fantastic and cheerful. Clearly
              they reflected the thoughts which possessed him, but whether the
              music aided those thoughts, or whether the playing was simply the
              result of a whim or fancy was more than I could determine. I might
              have rebelled against these exasperating solos had it not been
              that he usually terminated them by playing in quick succession a
              whole series of my favourite airs as a slight compensation for the
              trial upon my patience.
            </TextNode>

            <TextNode>
              During the first week or so we had no callers, and I had begun to
              think that my companion was as friendless a man as I was myself.
              Presently, however, I found that he had many acquaintances, and
              those in the most different classes of society. There was one
              little sallow rat-faced, dark-eyed fellow who was introduced to me
              as Mr. Lestrade, and who came three or four times in a single
              week. One morning a young girl called, fashionably dressed, and
              stayed for half an hour or more. The same afternoon brought a
              grey-headed, seedy visitor, looking like a Jew pedlar, who
              appeared to me to be much excited, and who was closely followed by
              a slipshod elderly woman. On another occasion an old white-haired
              gentleman had an interview with my companion; and on another a
              railway porter in his velveteen uniform. When any of these
              nondescript individuals put in an appearance, Sherlock Holmes used
              to beg for the use of the sitting-room, and I would retire to my
              bed-room. He always apologized to me for putting me to this
              inconvenience. “I have to use this room as a place of business,”
              he said, “and these people are my clients.” Again I had an
              opportunity of asking him a point blank question, and again my
              delicacy prevented me from forcing another man to confide in me. I
              imagined at the time that he had some strong reason for not
              alluding to it, but he soon dispelled the idea by coming round to
              the subject of his own accord.
            </TextNode>

            <TextNode>
              It was upon the 4th of March, as I have good reason to remember,
              that I rose somewhat earlier than usual, and found that Sherlock
              Holmes had not yet finished his breakfast. The landlady had become
              so accustomed to my late habits that my place had not been laid
              nor my coffee prepared. With the unreasonable petulance of mankind
              I rang the bell and gave a curt intimation that I was ready. Then
              I picked up a magazine from the table and attempted to while away
              the time with it, while my companion munched silently at his
              toast. One of the articles had a pencil mark at the heading, and I
              naturally began to run my eye through it.
            </TextNode>

            <TextNode>
              Its somewhat ambitious title was “The Book of Life,” and it
              attempted to show how much an observant man might learn by an
              accurate and systematic examination of all that came in his way.
              It struck me as being a remarkable mixture of shrewdness and of
              absurdity. The reasoning was close and intense, but the deductions
              appeared to me to be far-fetched and exaggerated. The writer
              claimed by a momentary expression, a twitch of a muscle or a
              glance of an eye, to fathom a man&apos;s inmost thoughts. Deceit,
              according to him, was an impossibility in the case of one trained
              to observation and analysis. His conclusions were as infallible as
              so many propositions of Euclid. So startling would his results
              appear to the uninitiated that until they learned the processes by
              which he had arrived at them they might well consider him as a
              necromancer.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “From a drop of water,” said the writer, “a logician could infer
              the possibility of an Atlantic or a Niagara without having seen or
              heard of one or the other. So all life is a great chain, the
              nature of which is known whenever we are shown a single link of
              it. Like all other arts, the Science of Deduction and Analysis is
              one which can only be acquired by long and patient study nor is
              life long enough to allow any mortal to attain the highest
              possible perfection in it. Before turning to those moral and
              mental aspects of the matter which present the greatest
              difficulties, let the enquirer begin by mastering more elementary
              problems. Let him, on meeting a fellow-mortal, learn at a glance
              to distinguish the history of the man, and the trade or profession
              to which he belongs. Puerile as such an exercise may seem, it
              sharpens the faculties of observation, and teaches one where to
              look and what to look for. By a man&apos;s finger nails, by his
              coat-sleeve, by his boot, by his trouser knees, by the callosities
              of his forefinger and thumb, by his expression, by his shirt
              cuffs—by each of these things a man&apos;s calling is plainly
              revealed. That all united should fail to enlighten the competent
              enquirer in any case is almost inconceivable.”
            </TextNode>
            <TextNode>
              “What ineffable twaddle!” I cried, slapping the magazine down on
              the table, “I never read such rubbish in my life.”
            </TextNode>

            <TextNode>“What is it?” asked Sherlock Holmes.</TextNode>

            <TextNode>
              “Why, this article,” I said, pointing at it with my egg spoon as I
              sat down to my breakfast. “I see that you have read it since you
              have marked it. I don&apos;t deny that it is smartly written. It
              irritates me though. It is evidently the theory of some arm-chair
              lounger who evolves all these neat little paradoxes in the
              seclusion of his own study. It is not practical. I should like to
              see him clapped down in a third class carriage on the Underground,
              and asked to give the trades of all his fellow-travellers. I would
              lay a thousand to one against him.”
            </TextNode>

            <TextNode>
              “You would lose your money,” Sherlock Holmes remarked calmly. “As
              for the article I wrote it myself.”
            </TextNode>

            <TextNode>“You!”</TextNode>

            <TextNode>
              “Yes, I have a turn both for observation and for deduction. The
              theories which I have expressed there, and which appear to you to
              be so chimerical are really extremely practical—so practical that
              I depend upon them for my bread and cheese.”
            </TextNode>

            <TextNode>“And how?” I asked involuntarily.</TextNode>

            <TextNode>
              “Well, I have a trade of my own. I suppose I am the only one in
              the world. I&apos;m a consulting detective, if you can understand
              what that is. Here in London we have lots of Government detectives
              and lots of private ones. When these fellows are at fault they
              come to me, and I manage to put them on the right scent. They lay
              all the evidence before me, and I am generally able, by the help
              of my knowledge of the history of crime, to set them straight.
              There is a strong family resemblance about misdeeds, and if you
              have all the details of a thousand at your finger ends, it is odd
              if you can&apos;t unravel the thousand and first. Lestrade is a
              well-known detective. He got himself into a fog recently over a
              forgery case, and that was what brought him here.”
            </TextNode>

            <TextNode>“And these other people?”</TextNode>

            <TextNode>
              “They are mostly sent on by private inquiry agencies. They are all
              people who are in trouble about something, and want a little
              enlightening. I listen to their story, they listen to my comments,
              and then I pocket my fee.”
            </TextNode>

            <TextNode>
              “But do you mean to say,” I said, “that without leaving your room
              you can unravel some knot which other men can make nothing of,
              although they have seen every detail for themselves?”
            </TextNode>

            <TextNode>
              “Quite so. I have a kind of intuition that way. Now and again a
              case turns up which is a little more complex. Then I have to
              bustle about and see things with my own eyes. You see I have a lot
              of special knowledge which I apply to the problem, and which
              facilitates matters wonderfully. Those rules of deduction laid
              down in that article which aroused your scorn, are invaluable to
              me in practical work. Observation with me is second nature. You
              appeared to be surprised when I told you, on our first meeting,
              that you had come from Afghanistan.”
            </TextNode>

            <TextNode>“You were told, no doubt.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page8;
