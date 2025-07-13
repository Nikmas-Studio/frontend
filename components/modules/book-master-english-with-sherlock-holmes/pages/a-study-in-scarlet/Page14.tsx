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

function Page14({
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
              “You stopped, and then walked back to the garden gate,” my
              companion interrupted. “What did you do that for?”
            </TextNode>

            <TextNode>
              Rance gave a violent jump, and stared at Sherlock Holmes with the
              utmost amazement upon his features.
            </TextNode>

            <TextNode>
              “Why, that's true, sir,” he said; “though how you come to know it,
              Heaven only knows. Ye see, when I got up to the door it was so
              still and so lonesome, that I thought I'd be none the worse for
              some one with me. I ain't afeared of anything on this side o' the
              grave; but I thought that maybe it was him that died o' the
              typhoid inspecting the drains what killed him. The thought gave me
              a kind o' turn, and I walked back to the gate to see if I could
              see Murcher's lantern, but there wasn't no sign of him nor of
              anyone else.”
            </TextNode>

            <TextNode>“There was no one in the street?”</TextNode>

            <TextNode>
              “Not a livin' soul, sir, nor as much as a dog. Then I pulled
              myself together and went back and pushed the door open. All was
              quiet inside, so I went into the room where the light was
              a-burnin'. There was a candle flickerin' on the mantelpiece—a red
              wax one—and by its light I saw—”
            </TextNode>

            <TextNode>
              “Yes, I know all that you saw. You walked round the room several
              times, and you knelt down by the body, and then you walked through
              and tried the kitchen door, and then—”
            </TextNode>

            <TextNode>
              John Rance sprang to his feet with a frightened face and suspicion
              in his eyes. “Where was you hid to see all that?” he cried. “It
              seems to me that you knows a deal more than you should.”
            </TextNode>

            <TextNode>
              Holmes laughed and threw his card across the table to the
              constable. “Don't get arresting me for the murder,” he said. “I am
              one of the hounds and not the wolf; Mr. Gregson or Mr. Lestrade
              will answer for that. Go on, though. What did you do next?”
            </TextNode>

            <TextNode>
              Rance resumed his seat, without however losing his mystified
              expression. “I went back to the gate and sounded my whistle. That
              brought Murcher and two more to the spot.”
            </TextNode>

            <TextNode>“Was the street empty then?”</TextNode>

            <TextNode>
              “Well, it was, as far as anybody that could be of any good goes.”
            </TextNode>

            <TextNode>“What do you mean?”</TextNode>

            <TextNode>
              The constable's features broadened into a grin. “I've seen many a
              drunk chap in my time,” he said, “but never anyone so cryin' drunk
              as that cove. He was at the gate when I came out, a-leanin' up
              ag'in the railings, and a-singin' at the pitch o' his lungs about
              Columbine's New-fangled Banner, or some such stuff. He couldn't
              stand, far less help.”
            </TextNode>

            <TextNode>
              “What sort of a man was he?” asked Sherlock Holmes.
            </TextNode>

            <TextNode>
              John Rance appeared to be somewhat irritated at this digression.
              “He was an uncommon drunk sort o' man,” he said. “He'd ha' found
              hisself in the station if we hadn't been so took up.”
            </TextNode>

            <TextNode>
              “His face—his dress—didn't you notice them?” Holmes broke in
              impatiently.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I should think I did notice them, seeing that I had to prop him
              up—me and Murcher between us. He was a long chap, with a red face,
              the lower part muffled round—”
            </TextNode>

            <TextNode>
              “That will do,” cried Holmes. “What became of him?”
            </TextNode>

            <TextNode>
              “We'd enough to do without lookin' after him,” the policeman said,
              in an aggrieved voice. “I'll wager he found his way home all
              right.”
            </TextNode>

            <TextNode>“How was he dressed?”</TextNode>

            <TextNode>“A brown overcoat.”</TextNode>

            <TextNode>“Had he a whip in his hand?”</TextNode>

            <TextNode>“A whip—no.”</TextNode>

            <TextNode>
              “He must have left it behind,” muttered my companion. “You didn't
              happen to see or hear a cab after that?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “There's a half-sovereign for you,” my companion said, standing up
              and taking his hat. “I am afraid, Rance, that you will never rise
              in the force. That head of yours should be for use as well as
              ornament. You might have gained your sergeant's stripes last
              night. The man whom you held in your hands is the man who holds
              the clue of this mystery, and whom we are seeking. There is no use
              of arguing about it now; I tell you that it is so. Come along,
              Doctor.”
            </TextNode>

            <TextNode>
              We started off for the cab together, leaving our informant
              incredulous, but obviously uncomfortable.
            </TextNode>

            <TextNode>
              “The blundering fool,” Holmes said, bitterly, as we drove back to
              our lodgings. “Just to think of his having such an incomparable
              bit of good luck, and not taking advantage of it.”
            </TextNode>

            <TextNode>
              “I am rather in the dark still. It is true that the description of
              this man tallies with your idea of the second party in this
              mystery. But why should he come back to the house after leaving
              it? That is not the way of criminals.”
            </TextNode>

            <TextNode>
              “The ring, man, the ring: that was what he came back for. If we
              have no other way of catching him, we can always bait our line
              with the ring. I shall have him, Doctor—I'll lay you two to one
              that I have him. I must thank you for it all. I might not have
              gone but for you, and so have missed the finest study I ever came
              across: a study in scarlet, eh? Why shouldn't we use a little art
              jargon. There's the scarlet thread of murder running through the
              colourless skein of life, and our duty is to unravel it, and
              isolate it, and expose every inch of it. And now for lunch, and
              then for Norman Neruda. Her attack and her bowing are splendid.
              What's that little thing of Chopin's she plays so magnificently:
              Tra-la-la-lira-lira-lay.”
            </TextNode>

            <TextNode>
              Leaning back in the cab, this amateur bloodhound carolled away
              like a lark while I meditated upon the many-sidedness of the human
              mind.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page14;
