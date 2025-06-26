import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page213({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SECOND&nbsp;STAIN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I am sorry for you, Lady Hilda. I have done my best for you; I
              can see that it is all in vain.”
            </TextNode>

            <TextNode>He rang the bell. The butler entered.</TextNode>

            <TextNode>“Is Mr. Trelawney Hope at home?”</TextNode>

            <TextNode>“He will be home, sir, at a quarter to one.”</TextNode>

            <TextNode>Holmes glanced at his watch.</TextNode>

            <TextNode>
              “Still a quarter of an hour,” said he. “Very good, I shall wait.”
            </TextNode>

            <TextNode>
              The butler had hardly closed the door behind him when Lady Hilda
              was down on her knees at Holmes's feet, her hands out-stretched,
              her beautiful face upturned and wet with her tears.
            </TextNode>

            <TextNode>
              “Oh, spare me, Mr. Holmes! Spare me!” she pleaded, in a frenzy of
              supplication. “For Heaven's sake, don't tell him! I love him so! I
              would not bring one shadow on his life, and this I know would
              break his noble heart.”
            </TextNode>

            <TextNode>
              Holmes raised the lady. “I am thankful, madam, that you have come
              to your senses even at this last moment! There is not an instant
              to lose. Where is the letter?”
            </TextNode>

            <TextNode>
              She darted across to a writing-desk, unlocked it, and drew out a
              long blue envelope.
            </TextNode>

            <TextNode>
              “Here it is, Mr. Holmes. Would to Heaven I had never seen it!”
            </TextNode>

            <TextNode>
              “How can we return it?” Holmes muttered. “Quick, quick, we must
              think of some way! Where is the despatch-box?”
            </TextNode>

            <TextNode>“Still in his bedroom.”</TextNode>

            <TextNode>
              “What a stroke of luck! Quick, madam, bring it here!”
            </TextNode>

            <TextNode>
              A moment later she had appeared with a red flat box in her hand.
            </TextNode>

            <TextNode>
              “How did you open it before? You have a duplicate key? Yes, of
              course you have. Open it!”
            </TextNode>

            <TextNode>
              From out of her bosom Lady Hilda had drawn a small key. The box
              flew open. It was stuffed with papers. Holmes thrust the blue
              envelope deep down into the heart of them, between the leaves of
              some other document. The box was shut, locked, and returned to the
              bedroom.
            </TextNode>

            <TextNode>
              “Now we are ready for him,” said Holmes; “we have still ten
              minutes. I am going far to screen you, Lady Hilda. In return you
              will spend the time in telling me frankly the real meaning of this
              extraordinary affair.”
            </TextNode>

            <TextNode>
              “Mr. Holmes, I will tell you everything,” cried the lady. “Oh, Mr.
              Holmes, I would cut off my right hand before I gave him a moment
              of sorrow! There is no woman in all London who loves her husband
              as I do, and yet if he knew how I have acted—how I have been
              compelled to act—he would never forgive me. For his own honour
              stands so high that he could not forget or pardon a lapse in
              another. Help me, Mr. Holmes! My happiness, his happiness, our
              very lives are at stake!”
            </TextNode>

            <TextNode>“Quick, madam, the time grows short!”</TextNode>

            <TextNode>
              “It was a letter of mine, Mr. Holmes, an indiscreet letter written
              before my marriage—a foolish letter, a letter of an impulsive,
              loving girl. I meant no harm, and yet he would have thought it
              criminal. Had he read that letter his confidence would have been
              for ever destroyed. It is years since I wrote it. I had thought
              that the whole matter was forgotten. Then at last I heard from
              this man, Lucas, that it had passed into his hands, and that he
              would lay it before my husband. I implored his mercy. He said that
              he would return my letter if I would bring him a certain document
              which he described in my husband's despatch-box. He had some spy
              in the office who had told him of its existence. He assured me
              that no harm could come to my husband. Put yourself in my
              position, Mr. Holmes! What was I to do?”
            </TextNode>

            <TextNode>“Take your husband into your confidence.”</TextNode>

            <TextNode>
              “I could not, Mr. Holmes, I could not! On the one side seemed
              certain ruin; on the other, terrible as it seemed to take my
              husband's paper, still in a matter of politics I could not
              understand the consequences, while in a matter of love and trust
              they were only too clear to me. I did it, Mr. Holmes! I took an
              impression of his key; this man Lucas furnished a duplicate. I
              opened his despatch-box, took the paper, and conveyed it to
              Godolphin Street.”
            </TextNode>

            <TextNode>“What happened there, madam?”</TextNode>

            <TextNode>
              “I tapped at the door as agreed. Lucas opened it. I followed him
              into his room, leaving the hall door ajar behind me, for I feared
              to be alone with the man. I remember that there was a woman
              outside as I entered. Our business was soon done. He had my letter
              on his desk; I handed him the document. He gave me the letter. At
              this instant there was a sound at the door. There were steps in
              the passage. Lucas quickly turned back the drugget, thrust the
              document into some hiding-place there, and covered it over.
            </TextNode>

            <TextNode>
              “What happened after that is like some fearful dream. I have a
              vision of a dark, frantic face, of a woman's voice, which screamed
              in French, ‘My waiting is not in vain. At last, at last I have
              found you with her!’ There was a savage struggle. I saw him with a
              chair in his hand, a knife gleamed in hers. I rushed from the
              horrible scene, ran from the house, and only next morning in the
              paper did I learn the dreadful result. That night I was happy, for
              I had my letter, and I had not seen yet what the future would
              bring.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It was the next morning that I realized that I had only exchanged
              one trouble for another. My husband's anguish at the loss of his
              paper went to my heart. I could hardly prevent myself from there
              and then kneeling down at his feet and telling him what I had
              done. But that again would mean a confession of the past. I came
              to you that morning in order to understand the full enormity of my
              offence. From the instant that I grasped it my whole mind was
              turned to the one thought of getting back my husband's paper. It
              must still be where Lucas had placed it, for it was concealed
              before this dreadful woman entered the room. If it had not been
              for her coming, I should not have known where his hiding-place
              was. How was I to get into the room? For two days I watched the
              place, but the door was never left open. Last night I made a last
              attempt. What I did and how I succeeded, you have already learned.
              I brought the paper back with me, and thought of destroying it
              since I could see no way of returning it, without confessing my
              guilt to my husband. Heavens, I hear his step upon the stair!”
            </TextNode>

            <TextNode>
              The European Secretary burst excitedly into the room.
            </TextNode>

            <TextNode>“Any news, Mr. Holmes, any news?” he cried.</TextNode>

            <TextNode>“I have some hopes.”</TextNode>
            <TextNode>
              “Ah, thank heaven!” His face became radiant. “The Prime Minister
              is lunching with me. May he share your hopes? He has nerves of
              steel, and yet I know that he has hardly slept since this terrible
              event. Jacobs, will you ask the Prime Minister to come up? As to
              you, dear, I fear that this is a matter of politics. We will join
              you in a few minutes in the dining-room.”
            </TextNode>

            <TextNode>
              The Prime Minister's manner was subdued, but I could see by the
              gleam of his eyes and the twitchings of his bony hands that he
              shared the excitement of his young colleague.
            </TextNode>

            <TextNode>
              “I understand that you have something to report, Mr. Holmes?”
            </TextNode>

            <TextNode>
              “Purely negative as yet,” my friend answered. “I have inquired at
              every point where it might be, and I am sure that there is no
              danger to be apprehended.”
            </TextNode>

            <TextNode>
              “But that is not enough, Mr. Holmes. We cannot live for ever on
              such a volcano. We must have something definite.”
            </TextNode>

            <TextNode>
              “I am in hopes of getting it. That is why I am here. The more I
              think of the matter the more convinced I am that the letter has
              never left this house.”
            </TextNode>

            <TextNode>“Mr. Holmes!”</TextNode>

            <TextNode>
              “If it had it would certainly have been public by now.”
            </TextNode>

            <TextNode>
              “But why should anyone take it in order to keep it in his house?”
            </TextNode>

            <TextNode>“I am not convinced that anyone did take it.”</TextNode>

            <TextNode>“Then how could it leave the despatch-box?”</TextNode>

            <TextNode>
              “I am not convinced that it ever did leave the despatch-box.”
            </TextNode>

            <TextNode>
              “Mr. Holmes, this joking is very ill-timed. You have my assurance
              that it left the box.”
            </TextNode>
            <TextNode>
              “Have you examined the box since Tuesday morning?”
            </TextNode>

            <TextNode>“No; it was not necessary.”</TextNode>

            <TextNode>“You may conceivably have overlooked it.”</TextNode>

            <TextNode>“Impossible, I say.”</TextNode>

            <TextNode>
              “But I am not convinced of it; I have known such things to happen.
              I presume there are other papers there. Well, it may have got
              mixed with them.”
            </TextNode>

            <TextNode>“It was on the top.”</TextNode>

            <TextNode>
              “Someone may have shaken the box and displaced it.”
            </TextNode>

            <TextNode>“No, no; I had everything out.”</TextNode>

            <TextNode>
              “Surely it is easily decided, Hope,” said the Premier. “Let us
              have the despatch-box brought in.”
            </TextNode>

            <TextNode>The Secretary rang the bell.</TextNode>

            <TextNode>
              “Jacobs, bring down my despatch-box. This is a farcical waste of
              time, but still, if nothing else will satisfy you, it shall be
              done. Thank you, Jacobs; put it here. I have always had the key on
              my watch-chain. Here are the papers, you see. Letter from Lord
              Merrow, report from Sir Charles Hardy, memorandum from Belgrade,
              note on the Russo-German grain taxes, letter from Madrid, note
              from Lord Flowers—good heavens! what is this? Lord Bellinger! Lord
              Bellinger!”
            </TextNode>

            <TextNode>
              The Premier snatched the blue envelope from his hand.
            </TextNode>

            <TextNode>
              “Yes, it is it—and the letter is intact. Hope, I congratulate
              you.”
            </TextNode>

            <TextNode>
              “Thank you! Thank you! What a weight from my heart. But this is
              inconceivable—impossible. Mr. Holmes, you are a wizard, a
              sorcerer! How did you know it was there?”
            </TextNode>

            <TextNode>“Because I knew it was nowhere else.”</TextNode>

            <TextNode>
              “I cannot believe my eyes!” He ran wildly to the door. “Where is
              my wife? I must tell her that all is well. Hilda! Hilda!” we heard
              his voice on the stairs.
            </TextNode>

            <TextNode>
              The Premier looked at Holmes with twinkling eyes.
            </TextNode>

            <TextNode>
              “Come, sir,” said he. “There is more in this than meets the eye.
              How came the letter back in the box?”
            </TextNode>

            <TextNode>
              Holmes turned away smiling from the keen scrutiny of those
              wonderful eyes.
            </TextNode>

            <TextNode>
              “We also have our diplomatic secrets,” said he, and picking up his
              hat he turned to the door.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page213;
