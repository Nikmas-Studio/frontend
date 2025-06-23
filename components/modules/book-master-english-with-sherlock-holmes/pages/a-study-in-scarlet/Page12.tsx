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

function Page12({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I have said all I have to say,” said Gregson, in an offended
              voice.
            </TextNode>

            <TextNode>
              Sherlock Holmes chuckled to himself, and appeared to be about to
              make some remark, when Lestrade, who had been in the front room
              while we were holding this conversation in the hall, reappeared
              upon the scene, rubbing his hands in a pompous and self-satisfied
              manner.
            </TextNode>

            <TextNode>
              “Mr. Gregson,” he said, “I have just made a discovery of the
              highest importance, and one which would have been overlooked had I
              not made a careful examination of the walls.”
            </TextNode>

            <TextNode>
              The little man's eyes sparkled as he spoke, and he was evidently
              in a state of suppressed exultation at having scored a point
              against his colleague.
            </TextNode>

            <TextNode>
              “Come here,” he said, bustling back into the room, the atmosphere
              of which felt clearer since the removal of its ghastly inmate.
              “Now, stand there!”
            </TextNode>

            <TextNode>
              He struck a match on his boot and held it up against the wall.
            </TextNode>

            <TextNode>“Look at that!” he said, triumphantly.</TextNode>

            <TextNode>
              I have remarked that the paper had fallen away in parts. In this
              particular corner of the room a large piece had peeled off,
              leaving a yellow square of coarse plastering. Across this bare
              space there was scrawled in blood-red letters a single word—
            </TextNode>

            <TextNode className='text-center  italic'>RACHE.</TextNode>

            <TextNode>
              “What do you think of that?” cried the detective, with the air of
              a showman exhibiting his show. “This was overlooked because it was
              in the darkest corner of the room, and no one thought of looking
              there. The murderer has written it with his or her own blood. See
              this smear where it has trickled down the wall! That disposes of
              the idea of suicide anyhow. Why was that corner chosen to write it
              on? I will tell you. See that candle on the mantelpiece. It was
              lit at the time, and if it was lit this corner would be the
              brightest instead of the darkest portion of the wall.”
            </TextNode>

            <TextNode>
              “And what does it mean now that you have found it?” asked Gregson
              in a depreciatory voice.
            </TextNode>

            <TextNode>
              “Mean? Why, it means that the writer was going to put the female
              name Rachel, but was disturbed before he or she had time to
              finish. You mark my words, when this case comes to be cleared up
              you will find that a woman named Rachel has something to do with
              it. It's all very well for you to laugh, Mr. Sherlock Holmes. You
              may be very smart and clever, but the old hound is the best, when
              all is said and done.”
            </TextNode>

            <TextNode>
              “I really beg your pardon!” said my companion, who had ruffled the
              little man's temper by bursting into an explosion of laughter.
              “You certainly have the credit of being the first of us to find
              this out, and, as you say, it bears every mark of having been
              written by the other participant in last night's mystery. I have
              not had time to examine this room yet, but with your permission I
              shall do so now.”
            </TextNode>

            <TextNode>
              As he spoke, he whipped a tape measure and a large round
              magnifying glass from his pocket. With these two implements he
              trotted noiselessly about the room, sometimes stopping,
              occasionally kneeling, and once lying flat upon his face. So
              engrossed was he with his occupation that he appeared to have
              forgotten our presence, for he chattered away to himself under his
              breath the whole time, keeping up a running fire of exclamations,
              groans, whistles, and little cries suggestive of encouragement and
              of hope. As I watched him I was irresistibly reminded of a
              pure-blooded well-trained foxhound as it dashes backwards and
              forwards through the covert, whining in its eagerness, until it
              comes across the lost scent. For twenty minutes or more he
              continued his researches, measuring with the most exact care the
              distance between marks which were entirely invisible to me, and
              occasionally applying his tape to the walls in an equally
              incomprehensible manner. In one place he gathered up very
              carefully a little pile of grey dust from the floor, and packed it
              away in an envelope. Finally, he examined with his glass the word
              upon the wall, going over every letter of it with the most minute
              exactness. This done, he appeared to be satisfied, for he replaced
              his tape and his glass in his pocket.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “They say that genius is an infinite capacity for taking pains,”
              he remarked with a smile. “It's a very bad definition, but it does
              apply to detective work.”
            </TextNode>

            <TextNode>
              Gregson and Lestrade had watched the manœuvres of their amateur
              companion with considerable curiosity and some contempt. They
              evidently failed to appreciate the fact, which I had begun to
              realize, that Sherlock Holmes' smallest actions were all directed
              towards some definite and practical end.
            </TextNode>

            <TextNode>
              “What do you think of it, sir?” they both asked.
            </TextNode>

            <TextNode>
              “It would be robbing you of the credit of the case if I was to
              presume to help you,” remarked my friend. “You are doing so well
              now that it would be a pity for anyone to interfere.” There was a
              world of sarcasm in his voice as he spoke. “If you will let me
              know how your investigations go,” he continued, “I shall be happy
              to give you any help I can. In the meantime I should like to speak
              to the constable who found the body. Can you give me his name and
              address?”
            </TextNode>
            <TextNode>
              Lestrade glanced at his note-book. “John Rance,” he said. “He is
              off duty now. You will find him at 46, Audley Court, Kennington
              Park Gate.”
            </TextNode>

            <TextNode>Holmes took a note of the address.</TextNode>

            <TextNode>
              “Come along, Doctor,” he said; “we shall go and look him up. I'll
              tell you one thing which may help you in the case,” he continued,
              turning to the two detectives. “There has been murder done, and
              the murderer was a man. He was more than six feet high, was in the
              prime of life, had small feet for his height, wore coarse,
              square-toed boots and smoked a Trichinopoly cigar. He came here
              with his victim in a four-wheeled cab, which was drawn by a horse
              with three old shoes and one new one on his off fore leg. In all
              probability the murderer had a florid face, and the finger-nails
              of his right hand were remarkably long. These are only a few
              indications, but they may assist you.”
            </TextNode>

            <TextNode>
              Lestrade and Gregson glanced at each other with an incredulous
              smile.
            </TextNode>

            <TextNode>
              “If this man was murdered, how was it done?” asked the former.
            </TextNode>

            <TextNode>
              “Poison,” said Sherlock Holmes curtly, and strode off. “One other
              thing, Lestrade,” he added, turning round at the door: “ ‘Rache,’
              is the German for ‘revenge;’ so don't lose your time looking for
              Miss Rachel.”
            </TextNode>

            <TextNode>
              With which Parthian shot he walked away, leaving the two rivals
              open-mouthed behind him.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page12;
