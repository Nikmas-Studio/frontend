'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page15({
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
          Chapter V.
          <br />
          Our Advertisement Brings a Visitor
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Our morning's exertions had been too much for my weak health, and
              I was tired out in the afternoon. After Holmes' departure for the
              concert, I lay down upon the sofa and endeavoured to get a couple
              of hours' sleep. It was a useless attempt. My mind had been too
              much excited by all that had occurred, and the strangest fancies
              and surmises crowded into it. Every time that I closed my eyes I
              saw before me the distorted baboon-like countenance of the
              murdered man. So sinister was the impression which that face had
              produced upon me that I found it difficult to feel anything but
              gratitude for him who had removed its owner from the world. If
              ever human features bespoke vice of the most malignant type, they
              were certainly those of Enoch J. Drebber, of Cleveland. Still I
              recognized that justice must be done, and that the depravity of
              the victim was no condonement in the eyes of the law.
            </TextNode>

            <TextNode>
              The more I thought of it the more extraordinary did my companion's
              hypothesis, that the man had been poisoned, appear. I remembered
              how he had sniffed his lips, and had no doubt that he had detected
              something which had given rise to the idea. Then, again, if not
              poison, what had caused the man's death, since there was neither
              wound nor marks of strangulation? But, on the other hand, whose
              blood was that which lay so thickly upon the floor? There were no
              signs of a struggle, nor had the victim any weapon with which he
              might have wounded an antagonist. As long as all these questions
              were unsolved, I felt that sleep would be no easy matter, either
              for Holmes or myself. His quiet self-confident manner convinced me
              that he had already formed a theory which explained all the facts,
              though what it was I could not for an instant conjecture.
            </TextNode>

            <TextNode>
              He was very late in returning—so late, that I knew that the
              concert could not have detained him all the time. Dinner was on
              the table before he appeared.
            </TextNode>

            <TextNode>
              “It was magnificent,” he said, as he took his seat. “Do you
              remember what Darwin says about music? He claims that the power of
              producing and appreciating it existed among the human race long
              before the power of speech was arrived at. Perhaps that is why we
              are so subtly influenced by it. There are vague memories in our
              souls of those misty centuries when the world was in its
              childhood.”
            </TextNode>

            <TextNode>“That's rather a broad idea,” I remarked.</TextNode>

            <TextNode>
              “One's ideas must be as broad as Nature if they are to interpret
              Nature,” he answered. “What's the matter? You're not looking quite
              yourself. This Brixton Road affair has upset you.”
            </TextNode>

            <TextNode>
              “To tell the truth, it has,” I said. “I ought to be more
              case-hardened after my Afghan experiences. I saw my own comrades
              hacked to pieces at Maiwand without losing my nerve.”
            </TextNode>

            <TextNode>
              “I can understand. There is a mystery about this which stimulates
              the imagination; where there is no imagination there is no horror.
              Have you seen the evening paper?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “It gives a fairly good account of the affair. It does not mention
              the fact that when the man was raised up, a woman's wedding ring
              fell upon the floor. It is just as well it does not.”
            </TextNode>

            <TextNode>“Why?”</TextNode>

            <TextNode>
              “Look at this advertisement,” he answered. “I had one sent to
              every paper this morning immediately after the affair.”
            </TextNode>

            <TextNode>
              He threw the paper across to me and I glanced at the place
              indicated. It was the first announcement in the “Found” column.
              “In Brixton Road, this morning,” it ran, “a plain gold wedding
              ring, found in the roadway between the ‘White Hart’ Tavern and
              Holland Grove. Apply Dr. Watson, 221b, Baker Street, between eight
              and nine this evening.”
            </TextNode>

            <TextNode>
              “Excuse my using your name,” he said. “If I used my own some of
              these dunderheads would recognize it, and want to meddle in the
              affair.”
            </TextNode>

            <TextNode>
              “That is all right,” I answered. “But supposing anyone applies, I
              have no ring.”
            </TextNode>

            <TextNode>
              “Oh yes, you have,” said he, handing me one. “This will do very
              well. It is almost a facsimile.”
            </TextNode>

            <TextNode>
              “And who do you expect will answer this advertisement.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Why, the man in the brown coat—our florid friend with the square
              toes. If he does not come himself he will send an accomplice.”
            </TextNode>

            <TextNode>“Would he not consider it as too dangerous?”</TextNode>

            <TextNode>
              “Not at all. If my view of the case is correct, and I have every
              reason to believe that it is, this man would rather risk anything
              than lose the ring. According to my notion he dropped it while
              stooping over Drebber's body, and did not miss it at the time.
              After leaving the house he discovered his loss and hurried back,
              but found the police already in possession, owing to his own folly
              in leaving the candle burning. He had to pretend to be drunk in
              order to allay the suspicions which might have been aroused by his
              appearance at the gate. Now put yourself in that man's place. On
              thinking the matter over, it must have occurred to him that it was
              possible that he had lost the ring in the road after leaving the
              house. What would he do, then? He would eagerly look out for the
              evening papers in the hope of seeing it among the articles found.
              His eye, of course, would light upon this. He would be overjoyed.
              Why should he fear a trap? There would be no reason in his eyes
              why the finding of the ring should be connected with the murder.
              He would come. He will come. You shall see him within an hour.”
            </TextNode>

            <TextNode>“And then?” I asked.</TextNode>

            <TextNode>
              “Oh, you can leave me to deal with him then. Have you any arms?”
            </TextNode>

            <TextNode>
              “I have my old service revolver and a few cartridges.”
            </TextNode>

            <TextNode>
              “You had better clean it and load it. He will be a desperate man,
              and though I shall take him unawares, it is as well to be ready
              for anything.”
            </TextNode>

            <TextNode>
              I went to my bedroom and followed his advice. When I returned with
              the pistol the table had been cleared, and Holmes was engaged in
              his favourite occupation of scraping upon his violin.
            </TextNode>

            <TextNode>
              “The plot thickens,” he said, as I entered; “I have just had an
              answer to my American telegram. My view of the case is the correct
              one.”
            </TextNode>

            <TextNode>“And that is?” I asked eagerly.</TextNode>

            <TextNode>
              “My fiddle would be the better for new strings,” he remarked. “Put
              your pistol in your pocket. When the fellow comes speak to him in
              an ordinary way. Leave the rest to me. Don't frighten him by
              looking at him too hard.”
            </TextNode>

            <TextNode>
              “It is eight o'clock now,” I said, glancing at my watch.
            </TextNode>

            <TextNode>
              “Yes. He will probably be here in a few minutes. Open the door
              slightly. That will do. Now put the key on the inside. Thank you!
              This is a queer old book I picked up at a stall yesterday—De Jure
              inter Gentes—published in Latin at Liege in the Lowlands, in 1642.
              Charles' head was still firm on his shoulders when this little
              brown-backed volume was struck off.”
            </TextNode>

            <TextNode>“Who is the printer?”</TextNode>

            <TextNode>
              “Philippe de Croy, whoever he may have been. On the fly-leaf, in
              very faded ink, is written ‘Ex libris Guliolmi Whyte.’ I wonder
              who William Whyte was. Some pragmatical seventeenth century
              lawyer, I suppose. His writing has a legal twist about it. Here
              comes our man, I think.”
            </TextNode>

            <TextNode>
              As he spoke there was a sharp ring at the bell. Sherlock Holmes
              rose softly and moved his chair in the direction of the door. We
              heard the servant pass along the hall, and the sharp click of the
              latch as she opened it.
            </TextNode>

            <TextNode>
              “Does Dr. Watson live here?” asked a clear but rather harsh voice.
              We could not hear the servant's reply, but the door closed, and
              some one began to ascend the stairs. The footfall was an uncertain
              and shuffling one. A look of surprise passed over the face of my
              companion as he listened to it. It came slowly along the passage,
              and there was a feeble tap at the door.
            </TextNode>

            <TextNode>“Come in,” I cried.</TextNode>

            <TextNode>
              At my summons, instead of the man of violence whom we expected, a
              very old and wrinkled woman hobbled into the apartment. She
              appeared to be dazzled by the sudden blaze of light, and after
              dropping a curtsey, she stood blinking at us with her bleared eyes
              and fumbling in her pocket with nervous, shaky fingers. I glanced
              at my companion, and his face had assumed such a disconsolate
              expression that it was all I could do to keep my countenance.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page15;
