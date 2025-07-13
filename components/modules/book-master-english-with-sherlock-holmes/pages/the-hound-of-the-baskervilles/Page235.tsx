import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page235({
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
            <TextNode noIndent>“Any orders, sir?”</TextNode>

            <TextNode>
              “You will take this train to town, Cartwright. The moment you
              arrive you will send a wire to Sir Henry Baskerville, in my name,
              to say that if he finds the pocket-book which I have dropped he is
              to send it by registered post to Baker Street.”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “And ask at the station office if there is a message for me.”
            </TextNode>

            <TextNode>
              The boy returned with a telegram, which Holmes handed to me. It
              ran:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                Wire received. Coming down with unsigned warrant. Arrive
                five-forty.
              </TextNode>

              <TextNode noIndent className='italic'>
                — Lestrade.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “That is in answer to mine of this morning. He is the best of the
              professionals, I think, and we may need his assistance. Now,
              Watson, I think that we cannot employ our time better than by
              calling upon your acquaintance, Mrs. Laura Lyons.”
            </TextNode>

            <TextNode>
              His plan of campaign was beginning to be evident. He would use the
              baronet in order to convince the Stapletons that we were really
              gone, while we should actually return at the instant when we were
              likely to be needed. That telegram from London, if mentioned by
              Sir Henry to the Stapletons, must remove the last suspicions from
              their minds. Already I seemed to see our nets drawing closer
              around that lean-jawed pike.
            </TextNode>

            <TextNode>
              Mrs. Laura Lyons was in her office, and Sherlock Holmes opened his
              interview with a frankness and directness which considerably
              amazed her.
            </TextNode>

            <TextNode>
              “I am investigating the circumstances which attended the death of
              the late Sir Charles Baskerville,” said he. “My friend here, Dr.
              Watson, has informed me of what you have communicated, and also of
              what you have withheld in connection with that matter.”
            </TextNode>

            <TextNode>“What have I withheld?” she asked defiantly.</TextNode>

            <TextNode>
              “You have confessed that you asked Sir Charles to be at the gate
              at ten o'clock. We know that that was the place and hour of his
              death. You have withheld what the connection is between these
              events.”
            </TextNode>

            <TextNode>“There is no connection.”</TextNode>

            <TextNode>
              “In that case the coincidence must indeed be an extraordinary one.
              But I think that we shall succeed in establishing a connection
              after all. I wish to be perfectly frank with you, Mrs. Lyons. We
              regard this case as one of murder, and the evidence may implicate
              not only your friend Mr. Stapleton, but his wife as well.”
            </TextNode>

            <TextNode>The lady sprang from her chair.</TextNode>

            <TextNode>“His wife!” she cried.</TextNode>

            <TextNode>
              “The fact is no longer a secret. The person who has passed for his
              sister is really his wife.”
            </TextNode>

            <TextNode>
              Mrs. Lyons had resumed her seat. Her hands were grasping the arms
              of her chair, and I saw that the pink nails had turned white with
              the pressure of her grip.
            </TextNode>

            <TextNode>
              “His wife!” she said again. “His wife! He is not a married man.”
            </TextNode>

            <TextNode>Sherlock Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “Prove it to me! Prove it to me! And if you can do so—!” The
              fierce flash of her eyes said more than any words.
            </TextNode>

            <TextNode>
              “I have come prepared to do so,” said Holmes, drawing several
              papers from his pocket. “Here is a photograph of the couple taken
              in York four years ago. It is indorsed ‘Mr. and Mrs. Vandeleur,’
              but you will have no difficulty in recognizing him, and her also,
              if you know her by sight. Here are three written descriptions by
              trustworthy witnesses of Mr. and Mrs. Vandeleur, who at that time
              kept St. Oliver's private school. Read them and see if you can
              doubt the identity of these people.”
            </TextNode>

            <TextNode>
              She glanced at them, and then looked up at us with the set, rigid
              face of a desperate woman.
            </TextNode>

            <TextNode>
              “Mr. Holmes,” she said, “this man had offered me marriage on
              condition that I could get a divorce from my husband. He has lied
              to me, the villain, in every conceivable way. Not one word of
              truth has he ever told me. And why—why? I imagined that all was
              for my own sake. But now I see that I was never anything but a
              tool in his hands. Why should I preserve faith with him who never
              kept any with me? Why should I try to shield him from the
              consequences of his own wicked acts? Ask me what you like, and
              there is nothing which I shall hold back. One thing I swear to
              you, and that is that when I wrote the letter I never dreamed of
              any harm to the old gentleman, who had been my kindest friend.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I entirely believe you, madam,” said Sherlock Holmes. “The
              recital of these events must be very painful to you, and perhaps
              it will make it easier if I tell you what occurred, and you can
              check me if I make any material mistake. The sending of this
              letter was suggested to you by Stapleton?”
            </TextNode>

            <TextNode>“He dictated it.”</TextNode>

            <TextNode>
              “I presume that the reason he gave was that you would receive help
              from Sir Charles for the legal expenses connected with your
              divorce?”
            </TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              “And then after you had sent the letter he dissuaded you from
              keeping the appointment?”
            </TextNode>
            <TextNode>
              “He told me that it would hurt his self-respect that any other man
              should find the money for such an object, and that though he was a
              poor man himself he would devote his last penny to removing the
              obstacles which divided us.”
            </TextNode>

            <TextNode>
              “He appears to be a very consistent character. And then you heard
              nothing until you read the reports of the death in the paper?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “And he made you swear to say nothing about your appointment with
              Sir Charles?”
            </TextNode>

            <TextNode>
              “He did. He said that the death was a very mysterious one, and
              that I should certainly be suspected if the facts came out. He
              frightened me into remaining silent.”
            </TextNode>

            <TextNode>“Quite so. But you had your suspicions?”</TextNode>

            <TextNode>She hesitated and looked down.</TextNode>

            <TextNode>
              “I knew him,” she said. “But if he had kept faith with me I should
              always have done so with him.”
            </TextNode>

            <TextNode>
              “I think that on the whole you have had a fortunate escape,” said
              Sherlock Holmes. “You have had him in your power and he knew it,
              and yet you are alive. You have been walking for some months very
              near to the edge of a precipice. We must wish you good-morning
              now, Mrs. Lyons, and it is probable that you will very shortly
              hear from us again.”
            </TextNode>

            <TextNode>
              “Our case becomes rounded off, and difficulty after difficulty
              thins away in front of us,” said Holmes as we stood waiting for
              the arrival of the express from town. “I shall soon be in the
              position of being able to put into a single connected narrative
              one of the most singular and sensational crimes of modern times.
              Students of criminology will remember the analogous incidents in
              Godno, in Little Russia, in the year '66, and of course there are
              the Anderson murders in North Carolina, but this case possesses
              some features which are entirely its own. Even now we have no
              clear case against this very wily man. But I shall be very much
              surprised if it is not clear enough before we go to bed this
              night.”
            </TextNode>

            <TextNode>
              The London express came roaring into the station, and a small,
              wiry bulldog of a man had sprung from a first-class carriage. We
              all three shook hands, and I saw at once from the reverential way
              in which Lestrade gazed at my companion that he had learned a good
              deal since the days when they had first worked together. I could
              well remember the scorn which the theories of the reasoner used
              then to excite in the practical man.
            </TextNode>

            <TextNode>“Anything good?” he asked.</TextNode>

            <TextNode>
              “The biggest thing for years,” said Holmes. “We have two hours
              before we need think of starting. I think we might employ it in
              getting some dinner and then, Lestrade, we will take the London
              fog out of your throat by giving you a breath of the pure night
              air of Dartmoor. Never been there? Ah, well, I don't suppose you
              will forget your first visit.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page235;
