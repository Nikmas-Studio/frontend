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

function Page9({
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
              “Nothing of the sort. I knew you came from Afghanistan. From long
              habit the train of thoughts ran so swiftly through my mind, that I
              arrived at the conclusion without being conscious of intermediate
              steps. There were such steps, however. The train of reasoning ran,
              ‘Here is a gentleman of a medical type, but with the air of a
              military man. Clearly an army doctor, then. He has just come from
              the tropics, for his face is dark, and that is not the natural
              tint of his skin, for his wrists are fair. He has undergone
              hardship and sickness, as his haggard face says clearly. His left
              arm has been injured. He holds it in a stiff and unnatural manner.
              Where in the tropics could an English army doctor have seen much
              hardship and got his arm wounded? Clearly in Afghanistan.’ The
              whole train of thought did not occupy a second. I then remarked
              that you came from Afghanistan, and you were astonished.”
            </TextNode>

            <TextNode>
              “It is simple enough as you explain it,” I said, smiling. “You
              remind me of Edgar Allen Poe’s Dupin. I had no idea that such
              individuals did exist outside of stories.”
            </TextNode>

            <TextNode>
              Sherlock Holmes rose and lit his pipe. “No doubt you think that
              you are complimenting me in comparing me to Dupin,” he observed.
              “Now, in my opinion, Dupin was a very inferior fellow. That trick
              of his of breaking in on his friends’ thoughts with an apropos
              remark after a quarter of an hour’s silence is really very showy
              and superficial. He had some analytical genius, no doubt; but he
              was by no means such a phenomenon as Poe appeared to imagine.”
            </TextNode>

            <TextNode>
              “Have you read Gaboriau’s works?” I asked. “Does Lecoq come up to
              your idea of a detective?”
            </TextNode>

            <TextNode>
              Sherlock Holmes sniffed sardonically. “Lecoq was a miserable
              bungler,” he said, in an angry voice; “he had only one thing to
              recommend him, and that was his energy. That book made me
              positively ill. The question was how to identify an unknown
              prisoner. I could have done it in twenty-four hours. Lecoq took
              six months or so. It might be made a text-book for detectives to
              teach them what to avoid.”
            </TextNode>

            <TextNode>
              I felt rather indignant at having two characters whom I had
              admired treated in this cavalier style. I walked over to the
              window, and stood looking out into the busy street. “This fellow
              may be very clever,” I said to myself, “but he is certainly very
              conceited.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There are no crimes and no criminals in these days,” he said,
              querulously. “What is the use of having brains in our profession?
              I know well that I have it in me to make my name famous. No man
              lives or has ever lived who has brought the same amount of study
              and of natural talent to the detection of crime which I have done.
              And what is the result? There is no crime to detect, or, at most,
              some bungling villany with a motive so transparent that even a
              Scotland Yard official can see through it.”
            </TextNode>

            <TextNode>
              I was still annoyed at his bumptious style of conversation. I
              thought it best to change the topic.
            </TextNode>

            <TextNode>
              “I wonder what that fellow is looking for?” I asked, pointing to a
              stalwart, plainly-dressed individual who was walking slowly down
              the other side of the street, looking anxiously at the numbers. He
              had a large blue envelope in his hand, and was evidently the
              bearer of a message.
            </TextNode>

            <TextNode>
              “You mean the retired sergeant of Marines,” said Sherlock Holmes.
            </TextNode>

            <TextNode>
              “Brag and bounce!” thought I to myself. “He knows that I cannot
              verify his guess.”
            </TextNode>

            <TextNode>
              The thought had hardly passed through my mind when the man whom we
              were watching caught sight of the number on our door, and ran
              rapidly across the roadway. We heard a loud knock, a deep voice
              below, and heavy steps ascending the stair.
            </TextNode>

            <TextNode>
              “For Mr. Sherlock Holmes,” he said, stepping into the room and
              handing my friend the letter.
            </TextNode>

            <TextNode>
              Here was an opportunity of taking the conceit out of him. He
              little thought of this when he made that random shot. “May I ask,
              my lad,” I said, in the blandest voice, “what your trade may be?”
            </TextNode>

            <TextNode>
              “Commissionaire, sir,” he said, gruffly. “Uniform away for
              repairs.”
            </TextNode>

            <TextNode>
              “And you were?” I asked, with a slightly malicious glance at my
              companion.
            </TextNode>

            <TextNode>
              “A sergeant, sir, Royal Marine Light Infantry, sir. No answer?
              Right, sir.”
            </TextNode>

            <TextNode>
              He clicked his heels together, raised his hand in a salute, and
              was gone.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page9;
