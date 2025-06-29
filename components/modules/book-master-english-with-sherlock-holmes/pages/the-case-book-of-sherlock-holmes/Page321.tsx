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

function Page321({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SUSSEX&nbsp;VAMPIRE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Is that Mr. Holmes, the detective?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              The youth looked at us with a very penetrating and, as it seemed
              to me, unfriendly gaze.
            </TextNode>

            <TextNode>
              “What about your other child, Mr. Ferguson?” asked Holmes. “Might
              we make the acquaintance of the baby?”
            </TextNode>

            <TextNode>
              “Ask Mrs. Mason to bring baby down,” said Ferguson. The boy went
              off with a curious, shambling gait which told my surgical eyes
              that he was suffering from a weak spine. Presently he returned,
              and behind him came a tall, gaunt woman bearing in her arms a very
              beautiful child, dark-eyed, golden-haired, a wonderful mixture of
              the Saxon and the Latin. Ferguson was evidently devoted to it, for
              he took it into his arms and fondled it most tenderly.
            </TextNode>

            <TextNode>
              “Fancy anyone having the heart to hurt him,” he muttered as he
              glanced down at the small, angry red pucker upon the cherub
              throat.
            </TextNode>

            <TextNode>
              It was at this moment that I chanced to glance at Holmes and saw a
              most singular intentness in his expression. His face was as set as
              if it had been carved out of old ivory, and his eyes, which had
              glanced for a moment at father and child, were now fixed with
              eager curiosity upon something at the other side of the room.
              Following his gaze I could only guess that he was looking out
              through the window at the melancholy, dripping garden. It is true
              that a shutter had half closed outside and obstructed the view,
              but none the less it was certainly at the window that Holmes was
              fixing his concentrated attention. Then he smiled, and his eyes
              came back to the baby. On its chubby neck there was this small
              puckered mark. Without speaking, Holmes examined it with care.
              Finally he shook one of the dimpled fists which waved in front of
              him.
            </TextNode>

            <TextNode>
              “Good-bye, little man. You have made a strange start in life.
              Nurse, I should wish to have a word with you in private.”
            </TextNode>

            <TextNode>
              He took her aside and spoke earnestly for a few minutes. I only
              heard the last words, which were: “Your anxiety will soon, I hope,
              be set at rest.” The woman, who seemed to be a sour, silent kind
              of creature, withdrew with the child.
            </TextNode>

            <TextNode>“What is Mrs. Mason like?” asked Holmes.</TextNode>

            <TextNode>
              “Not very prepossessing externally, as you can see, but a heart of
              gold, and devoted to the child.”
            </TextNode>

            <TextNode>
              “Do you like her, Jack?” Holmes turned suddenly upon the boy. His
              expressive mobile face shadowed over, and he shook his head.
            </TextNode>

            <TextNode>
              “Jacky has very strong likes and dislikes,” said Ferguson, putting
              his arm round the boy. “Luckily I am one of his likes.”
            </TextNode>

            <TextNode>
              The boy cooed and nestled his head upon his father's breast.
              Ferguson gently disengaged him.
            </TextNode>

            <TextNode>
              “Run away, little Jacky,” said he, and he watched his son with
              loving eyes until he disappeared. “Now, Mr. Holmes,” he continued
              when the boy was gone, “I really feel that I have brought you on a
              fool's errand, for what can you possibly do save give me your
              sympathy? It must be an exceedingly delicate and complex affair
              from your point of view.”
            </TextNode>

            <TextNode>
              “It is certainly delicate,” said my friend with an amused smile,
              “but I have not been struck up to now with its complexity. It has
              been a case for intellectual deduction, but when this original
              intellectual deduction is confirmed point by point by quite a
              number of independent incidents, then the subjective becomes
              objective and we can say confidently that we have reached our
              goal. I had, in fact, reached it before we left Baker Street, and
              the rest has merely been observation and confirmation.”
            </TextNode>

            <TextNode>
              Ferguson put his big hand to his furrowed forehead.
            </TextNode>

            <TextNode>
              “For heaven's sake, Holmes,” he said hoarsely; “if you can see the
              truth in this matter, do not keep me in suspense. How do I stand?
              What shall I do? I care nothing as to how you have found your
              facts so long as you have really got them.”
            </TextNode>

            <TextNode>
              “Certainly I owe you an explanation, and you shall have it. But
              you will permit me to handle the matter in my own way? Is the lady
              capable of seeing us, Watson?”
            </TextNode>

            <TextNode>“She is ill, but she is quite rational.”</TextNode>

            <TextNode>
              “Very good. It is only in her presence that we can clear the
              matter up. Let us go up to her.”
            </TextNode>

            <TextNode>“She will not see me,” cried Ferguson.</TextNode>

            <TextNode>
              “Oh, yes, she will,” said Holmes. He scribbled a few lines upon a
              sheet of paper. “You at least have the entree, Watson. Will you
              have the goodness to give the lady this note?”
            </TextNode>

            <TextNode>
              I ascended again and handed the note to Dolores, who cautiously
              opened the door. A minute later I heard a cry from within, a cry
              in which joy and surprise seemed to be blended. Dolores looked
              out.
            </TextNode>

            <TextNode>
              “She will see them. She will leesten,” said she.
            </TextNode>

            <TextNode>
              At my summons Ferguson and Holmes came up. As we entered the room
              Ferguson took a step or two towards his wife, who had raised
              herself in the bed, but she held out her hand to repulse him. He
              sank into an armchair, while Holmes seated himself beside him,
              after bowing to the lady, who looked at him with wide-eyed
              amazement.
            </TextNode>

            <TextNode>
              “I think we can dispense with Dolores,” said Holmes. “Oh, very
              well, madame, if you would rather she stayed I can see no
              objection. Now, Mr. Ferguson, I am a busy man with many calls, and
              my methods have to be short and direct. The swiftest surgery is
              the least painful. Let me first say what will ease your mind. Your
              wife is a very good, a very loving, and a very ill-used woman.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>Ferguson sat up with a cry of joy.</TextNode>

            <TextNode>
              “Prove that, Mr. Holmes, and I am your debtor forever.”
            </TextNode>

            <TextNode>
              “I will do so, but in doing so I must wound you deeply in another
              direction.”
            </TextNode>

            <TextNode>
              “I care nothing so long as you clear my wife. Everything on earth
              is insignificant compared to that.”
            </TextNode>
            <TextNode>
              “Let me tell you, then, the train of reasoning which passed
              through my mind in Baker Street. The idea of a vampire was to me
              absurd. Such things do not happen in criminal practice in England.
              And yet your observation was precise. You had seen the lady rise
              from beside the child's cot with the blood upon her lips.”
            </TextNode>

            <TextNode>“I did.”</TextNode>

            <TextNode>
              “Did it not occur to you that a bleeding wound may be sucked for
              some other purpose than to draw the blood from it? Was there not a
              queen in English history who sucked such a wound to draw poison
              from it?”
            </TextNode>

            <TextNode>“Poison!”</TextNode>

            <TextNode>
              “A South American household. My instinct felt the presence of
              those weapons upon the wall before my eyes ever saw them. It might
              have been other poison, but that was what occurred to me. When I
              saw that little empty quiver beside the small bird-bow, it was
              just what I expected to see. If the child were pricked with one of
              those arrows dipped in curare or some other devilish drug, it
              would mean death if the venom were not sucked out.
            </TextNode>

            <TextNode>
              “And the dog! If one were to use such a poison, would one not try
              it first in order to see that it had not lost its power? I did not
              foresee the dog, but at least I understand him and he fitted into
              my reconstruction.
            </TextNode>

            <TextNode>
              “Now do you understand? Your wife feared such an attack. She saw
              it made and saved the child's life, and yet she shrank from
              telling you all the truth, for she knew how you loved the boy and
              feared lest it break your heart.”
            </TextNode>

            <TextNode>“Jacky!”</TextNode>

            <TextNode>
              “I watched him as you fondled the child just now. His face was
              clearly reflected in the glass of the window where the shutter
              formed a background. I saw such jealousy, such cruel hatred, as I
              have seldom seen in a human face.”
            </TextNode>

            <TextNode>“My Jacky!”</TextNode>

            <TextNode>
              “You have to face it, Mr. Ferguson. It is the more painful because
              it is a distorted love, a maniacal exaggerated love for you, and
              possibly for his dead mother, which has prompted his action. His
              very soul is consumed with hatred for this splendid child, whose
              health and beauty are a contrast to his own weakness.”
            </TextNode>

            <TextNode>“Good God! It is incredible!”</TextNode>

            <TextNode>“Have I spoken the truth, madame?”</TextNode>

            <TextNode>
              The lady was sobbing, with her face buried in the pillows. Now she
              turned to her husband.
            </TextNode>

            <TextNode>
              “How could I tell you, Bob? I felt the blow it would be to you. It
              was better that I should wait and that it should come from some
              other lips than mine. When this gentleman, who seems to have
              powers of magic, wrote that he knew all, I was glad.”
            </TextNode>

            <TextNode>
              “I think a year at sea would be my prescription for Master Jacky,”
              said Holmes, rising from his chair. “Only one thing is still
              clouded, madame. We can quite understand your attacks upon Master
              Jacky. There is a limit to a mother's patience. But how did you
              dare to leave the child these last two days?”
            </TextNode>

            <TextNode>“I had told Mrs. Mason. She knew.”</TextNode>

            <TextNode>“Exactly. So I imagined.”</TextNode>

            <TextNode>
              Ferguson was standing by the bed, choking, his hands outstretched
              and quivering.
            </TextNode>

            <TextNode>
              “This, I fancy, is the time for our exit, Watson,” said Holmes in
              a whisper. “If you will take one elbow of the too faithful
              Dolores, I will take the other. There, now,” he added as he closed
              the door behind him, “I think we may leave them to settle the rest
              among themselves.”
            </TextNode>

            <TextNode>
              I have only one further note of this case. It is the letter which
              Holmes wrote in final answer to that with which the narrative
              begins. It ran thus:
            </TextNode>

            <Indent>
              <TextNode noIndent className='text-right  italic'>
                Baker Street,
              </TextNode>
              <TextNode noIndent className='text-right  italic'>
                Nov. 21st.
              </TextNode>
              <TextNode noIndent className='text-center  italic'>
                Re Vampires
              </TextNode>
              <TextNode noIndent className='italic'>
                Sir:
              </TextNode>
              <TextNode noIndent>
                Referring to your letter of the 19th, I beg to state that I have
                looked into the inquiry of your client, Mr. Robert Ferguson, of
                Ferguson and Muirhead, tea brokers, of Mincing Lane, and that
                the matter has been brought to a satisfactory conclusion. With
                thanks for your recommendation, I am, sir,
              </TextNode>
              <TextNode noIndent className='italic'>
                Faithfully yours,
              </TextNode>
              <TextNode noIndent className='italic'>
                Sherlock Holmes.
              </TextNode>
            </Indent>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page321;
