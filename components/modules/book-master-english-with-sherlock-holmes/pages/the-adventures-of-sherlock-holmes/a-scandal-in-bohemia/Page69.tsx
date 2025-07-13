import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page68({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A SCANDAL IN BOHEMIA'
      />
      <BookMainContainer>
        <H4>Chapter III</H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I slept at Baker Street that night, and we were engaged upon our
              toast and coffee in the morning when the King of Bohemia rushed
              into the room.
            </TextNode>

            <TextNode>
              “You have really got it!” he cried, grasping Sherlock Holmes by
              either shoulder and looking eagerly into his face.
            </TextNode>

            <TextNode>“Not yet.”</TextNode>

            <TextNode>“But you have hopes?”</TextNode>

            <TextNode>“I have hopes.”</TextNode>

            <TextNode>“Then, come. I am all impatience to be gone.”</TextNode>

            <TextNode>“We must have a cab.”</TextNode>

            <TextNode>“No, my brougham is waiting.”</TextNode>

            <TextNode>
              “Then that will simplify matters.” We descended and started off
              once more for Briony Lodge.
            </TextNode>

            <TextNode>“Irene Adler is married,” remarked Holmes.</TextNode>

            <TextNode>“Married! When?”</TextNode>

            <TextNode>“Yesterday.”</TextNode>

            <TextNode>“But to whom?”</TextNode>

            <TextNode>“To an English lawyer named Norton.”</TextNode>

            <TextNode>“But she could not love him.”</TextNode>

            <TextNode>“I am in hopes that she does.”</TextNode>

            <TextNode>“And why in hopes?”</TextNode>

            <TextNode>
              “Because it would spare your Majesty all fear of future annoyance.
              If the lady loves her husband, she does not love your Majesty. If
              she does not love your Majesty, there is no reason why she should
              interfere with your Majesty's plan.”
            </TextNode>

            <TextNode>
              “It is true. And yet—Well! I wish she had been of my own station!
              What a queen she would have made!” He relapsed into a moody
              silence, which was not broken until we drew up in Serpentine
              Avenue.
            </TextNode>

            <TextNode>
              The door of Briony Lodge was open, and an elderly woman stood upon
              the steps. She watched us with a sardonic eye as we stepped from
              the brougham.
            </TextNode>

            <TextNode>“Mr. Sherlock Holmes, I believe?” said she.</TextNode>

            <TextNode>
              “I am Mr. Holmes,” answered my companion, looking at her with a
              questioning and rather startled gaze.
            </TextNode>

            <TextNode>
              “Indeed! My mistress told me that you were likely to call. She
              left this morning with her husband by the 5.15 train from Charing
              Cross for the Continent.”
            </TextNode>

            <TextNode>
              “What!” Sherlock Holmes staggered back, white with chagrin and
              surprise. “Do you mean that she has left England?”
            </TextNode>

            <TextNode>“Never to return.”</TextNode>

            <TextNode>
              “And the papers?” asked the King hoarsely. “All is lost.”
            </TextNode>

            <TextNode>
              “We shall see.” He pushed past the servant and rushed into the
              drawing-room, followed by the King and myself. The furniture was
              scattered about in every direction, with dismantled shelves and
              open drawers, as if the lady had hurriedly ransacked them before
              her flight. Holmes rushed at the bell-pull, tore back a small
              sliding shutter, and, plunging in his hand, pulled out a
              photograph and a letter. The photograph was of Irene Adler herself
              in evening dress, the letter was superscribed to “Sherlock Holmes,
              Esq. To be left till called for.” My friend tore it open and we
              all three read it together. It was dated at midnight of the
              preceding night and ran in this way:
            </TextNode>

            <Indent>
              <TextNode className='italic' noIndent>
                “My dear Mr. Sherlock Holmes:
              </TextNode>

              <TextNode noIndent>
                “You really did it very well. You took me in completely. Until
                after the alarm of fire, I had not a suspicion. But then, when I
                found how I had betrayed myself, I began to think. I had been
                warned against you months ago. I had been told that if the King
                employed an agent it would certainly be you. And your address
                had been given me. Yet, with all this, you made me reveal what
                you wanted to know. Even after I became suspicious, I found it
                hard to think evil of such a dear, kind old clergyman. But, you
                know, I have been trained as an actress myself. Male costume is
                nothing new to me. I often take advantage of the freedom which
                it gives. I sent John, the coachman, to watch you, ran up
                stairs, got into my walking-clothes, as I call them, and came
                down just as you departed.
              </TextNode>

              <TextNode>
                “Well, I followed you to your door, and so made sure that I was
                really an object of interest to the celebrated Mr. Sherlock
                Holmes. Then I, rather imprudently, wished you good-night, and
                started for the Temple to see my husband.
              </TextNode>

              <TextNode>
                “We both thought the best resource was flight, when pursued by
                so formidable an antagonist; so you will find the nest empty
                when you call to-morrow. As to the photograph, your client may
                rest in peace. I love and am loved by a better man than he. The
                King may do what he will without hindrance from one whom he has
                cruelly wronged. I keep it only to safeguard myself, and to
                preserve a weapon which will always secure me from any steps
                which he might take in the future. I leave a photograph which he
                might care to possess; and I remain, dear Mr. Sherlock Holmes,
              </TextNode>

              <TextNode noIndent className='italic'>
                “Very truly yours,
                <br /> “Irene Norton, née Adler.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “What a woman—oh, what a woman!” cried the King of Bohemia, when
              we had all three read this epistle. “Did I not tell you how quick
              and resolute she was? Would she not have made an admirable queen?
              Is it not a pity that she was not on my level?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “From what I have seen of the lady she seems indeed to be on a
              very different level to your Majesty,” said Holmes coldly. “I am
              sorry that I have not been able to bring your Majesty's business
              to a more successful conclusion.”
            </TextNode>

            <TextNode>
              “On the contrary, my dear sir,” cried the King; “nothing could be
              more successful. I know that her word is inviolate. The photograph
              is now as safe as if it were in the fire.”
            </TextNode>

            <TextNode>“I am glad to hear your Majesty say so.”</TextNode>

            <TextNode>
              “I am immensely indebted to you. Pray tell me in what way I can
              reward you. This ring—” He slipped an emerald snake ring from his
              finger and held it out upon the palm of his hand.
            </TextNode>

            <TextNode>
              “Your Majesty has something which I should value even more
              highly,” said Holmes.
            </TextNode>

            <TextNode>“You have but to name it.”</TextNode>

            <TextNode>“This photograph!”</TextNode>

            <TextNode>The King stared at him in amazement.</TextNode>

            <TextNode>
              “Irene's photograph!” he cried. “Certainly, if you wish it.”
            </TextNode>

            <TextNode>
              “I thank your Majesty. Then there is no more to be done in the
              matter. I have the honour to wish you a very good-morning.” He
              bowed, and, turning away without observing the hand which the King
              had stretched out to him, he set off in my company for his
              chambers.
            </TextNode>

            <TextNode>
              And that was how a great scandal threatened to affect the kingdom
              of Bohemia, and how the best plans of Mr. Sherlock Holmes were
              beaten by a woman's wit. He used to make merry over the cleverness
              of women, but I have not heard him do it of late. And when he
              speaks of Irene Adler, or when he refers to her photograph, it is
              always under the honourable title of&nbsp;
              <span className='italic'>the</span>&nbsp;woman.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page68;
