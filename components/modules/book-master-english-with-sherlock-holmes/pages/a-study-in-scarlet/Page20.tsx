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

function Page20({
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
          Chapter VII.
          <br />
          Light In The Darkness
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              The intelligence with which Lestrade greeted us was so momentous
              and so unexpected, that we were all three fairly dumbfounded.
              Gregson sprang out of his chair and upset the remainder of his
              whiskey and water. I stared in silence at Sherlock Holmes, whose
              lips were compressed and his brows drawn down over his eyes.
            </TextNode>

            <TextNode>
              “Stangerson too!” he muttered. “The plot thickens.”
            </TextNode>

            <TextNode>
              “It was quite thick enough before,” grumbled Lestrade, taking a
              chair. “I seem to have dropped into a sort of council of war.”
            </TextNode>

            <TextNode>
              “Are you—are you sure of this piece of intelligence?” stammered
              Gregson.
            </TextNode>

            <TextNode>
              “I have just come from his room,” said Lestrade. “I was the first
              to discover what had occurred.”
            </TextNode>

            <TextNode>
              “We have been hearing Gregson's view of the matter,” Holmes
              observed. “Would you mind letting us know what you have seen and
              done?”
            </TextNode>

            <TextNode>
              “I have no objection,” Lestrade answered, seating himself. “I
              freely confess that I was of the opinion that Stangerson was
              concerned in the death of Drebber. This fresh development has
              shown me that I was completely mistaken. Full of the one idea, I
              set myself to find out what had become of the Secretary. They had
              been seen together at Euston Station about half-past eight on the
              evening of the third. At two in the morning Drebber had been found
              in the Brixton Road. The question which confronted me was to find
              out how Stangerson had been employed between 8.30 and the time of
              the crime, and what had become of him afterwards. I telegraphed to
              Liverpool, giving a description of the man, and warning them to
              keep a watch upon the American boats. I then set to work calling
              upon all the hotels and lodging-houses in the vicinity of Euston.
              You see, I argued that if Drebber and his companion had become
              separated, the natural course for the latter would be to put up
              somewhere in the vicinity for the night, and then to hang about
              the station again next morning.”
            </TextNode>

            <TextNode>
              “They would be likely to agree on some meeting-place beforehand,”
              remarked Holmes.
            </TextNode>

            <TextNode>
              “So it proved. I spent the whole of yesterday evening in making
              enquiries entirely without avail. This morning I began very early,
              and at eight o'clock I reached Halliday's Private Hotel, in Little
              George Street. On my enquiry as to whether a Mr. Stangerson was
              living there, they at once answered me in the affirmative.
            </TextNode>

            <TextNode>
              “ ‘No doubt you are the gentleman whom he was expecting,’ they
              said. ‘He has been waiting for a gentleman for two days.’
            </TextNode>

            <TextNode>“ ‘Where is he now?’ I asked.</TextNode>

            <TextNode>
              “ ‘He is upstairs in bed. He wished to be called at nine.’
            </TextNode>

            <TextNode>“ ‘I will go up and see him at once,’ I said.</TextNode>

            <TextNode>
              “It seemed to me that my sudden appearance might shake his nerves
              and lead him to say something unguarded. The Boots volunteered to
              show me the room: it was on the second floor, and there was a
              small corridor leading up to it. The Boots pointed out the door to
              me, and was about to go downstairs again when I saw something that
              made me feel sickish, in spite of my twenty years' experience.
              From under the door there curled a little red ribbon of blood,
              which had meandered across the passage and formed a little pool
              along the skirting at the other side. I gave a cry, which brought
              the Boots back. He nearly fainted when he saw it. The door was
              locked on the inside, but we put our shoulders to it, and knocked
              it in. The window of the room was open, and beside the window, all
              huddled up, lay the body of a man in his nightdress. He was quite
              dead, and had been for some time, for his limbs were rigid and
              cold. When we turned him over, the Boots recognized him at once as
              being the same gentleman who had engaged the room under the name
              of Joseph Stangerson. The cause of death was a deep stab in the
              left side, which must have penetrated the heart. And now comes the
              strangest part of the affair. What do you suppose was above the
              murdered man?”
            </TextNode>

            <TextNode>
              I felt a creeping of the flesh, and a presentiment of coming
              horror, even before Sherlock Holmes answered.
            </TextNode>

            <TextNode>
              “The word RACHE, written in letters of blood,” he said.
            </TextNode>

            <TextNode>
              “That was it,” said Lestrade, in an awe-struck voice; and we were
              all silent for a while.
            </TextNode>

            <TextNode>
              There was something so methodical and so incomprehensible about
              the deeds of this unknown assassin, that it imparted a fresh
              ghastliness to his crimes. My nerves, which were steady enough on
              the field of battle tingled as I thought of it.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “The man was seen,” continued Lestrade. “A milk boy, passing on
              his way to the dairy, happened to walk down the lane which leads
              from the mews at the back of the hotel. He noticed that a ladder,
              which usually lay there, was raised against one of the windows of
              the second floor, which was wide open. After passing, he looked
              back and saw a man descend the ladder. He came down so quietly and
              openly that the boy imagined him to be some carpenter or joiner at
              work in the hotel. He took no particular notice of him, beyond
              thinking in his own mind that it was early for him to be at work.
              He has an impression that the man was tall, had a reddish face,
              and was dressed in a long, brownish coat. He must have stayed in
              the room some little time after the murder, for we found
              blood-stained water in the basin, where he had washed his hands,
              and marks on the sheets where he had deliberately wiped his
              knife.”
            </TextNode>

            <TextNode>
              I glanced at Holmes on hearing the description of the murderer,
              which tallied so exactly with his own. There was, however, no
              trace of exultation or satisfaction upon his face.
            </TextNode>

            <TextNode>
              “Did you find nothing in the room which could furnish a clue to
              the murderer?” he asked.
            </TextNode>

            <TextNode>
              “Nothing. Stangerson had Drebber's purse in his pocket, but it
              seems that this was usual, as he did all the paying. There was
              eighty odd pounds in it, but nothing had been taken. Whatever the
              motives of these extraordinary crimes, robbery is certainly not
              one of them. There were no papers or memoranda in the murdered
              man's pocket, except a single telegram, dated from Cleveland about
              a month ago, and containing the words, ‘J. H. is in Europe.’ There
              was no name appended to this message.”
            </TextNode>

            <TextNode>“And there was nothing else?” Holmes asked.</TextNode>

            <TextNode>
              “Nothing of any importance. The man's novel, with which he had
              read himself to sleep was lying upon the bed, and his pipe was on
              a chair beside him. There was a glass of water on the table, and
              on the window-sill a small chip ointment box containing a couple
              of pills.”
            </TextNode>

            <TextNode>
              Sherlock Holmes sprang from his chair with an exclamation of
              delight.
            </TextNode>

            <TextNode>
              “The last link,” he cried, exultantly. “My case is complete.”
            </TextNode>

            <TextNode>The two detectives stared at him in amazement.</TextNode>

            <TextNode>
              “I have now in my hands,” my companion said, confidently, “all the
              threads which have formed such a tangle. There are, of course,
              details to be filled in, but I am as certain of all the main
              facts, from the time that Drebber parted from Stangerson at the
              station, up to the discovery of the body of the latter, as if I
              had seen them with my own eyes. I will give you a proof of my
              knowledge. Could you lay your hand upon those pills?”
            </TextNode>

            <TextNode>
              “I have them,” said Lestrade, producing a small white box; “I took
              them and the purse and the telegram, intending to have them put in
              a place of safety at the Police Station. It was the merest chance
              my taking these pills, for I am bound to say that I do not attach
              any importance to them.”
            </TextNode>

            <TextNode>
              “Give them here,” said Holmes. “Now, Doctor,” turning to me, “are
              those ordinary pills?”
            </TextNode>

            <TextNode>
              They certainly were not. They were of a pearly grey colour, small,
              round, and almost transparent against the light. “From their
              lightness and transparency, I should imagine that they are soluble
              in water,” I remarked.
            </TextNode>

            <TextNode>
              “Precisely so,” answered Holmes. “Now would you mind going down
              and fetching that poor little devil of a terrier which has been
              bad so long, and which the landlady wanted you to put out of its
              pain yesterday.”
            </TextNode>

            <TextNode>
              I went downstairs and carried the dog upstair in my arms. It's
              laboured breathing and glazing eye showed that it was not far from
              its end. Indeed, its snow-white muzzle proclaimed that it had
              already exceeded the usual term of canine existence. I placed it
              upon a cushion on the rug.
            </TextNode>

            <TextNode>
              “I will now cut one of these pills in two,” said Holmes, and
              drawing his penknife he suited the action to the word. “One half
              we return into the box for future purposes. The other half I will
              place in this wine glass, in which is a teaspoonful of water. You
              perceive that our friend, the Doctor, is right, and that it
              readily dissolves.”
            </TextNode>

            <TextNode>
              “This may be very interesting,” said Lestrade, in the injured tone
              of one who suspects that he is being laughed at, “I cannot see,
              however, what it has to do with the death of Mr. Joseph
              Stangerson.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page20;
