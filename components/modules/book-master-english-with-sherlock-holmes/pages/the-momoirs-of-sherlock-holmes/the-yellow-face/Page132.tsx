import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
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

function Page132({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;YELLOW&nbsp;FACE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“And if it is still empty?”</TextNode>

            <TextNode>
              “In that case I shall come out to-morrow and talk it over with
              you. Good-bye, and, above all, do not fret until you know that you
              really have a cause for it.”
            </TextNode>

            <TextNode>
              “I am afraid that this is a bad business, Watson,” said my
              companion, as he returned after accompanying Mr. Grant Munro to
              the door. “What do you make of it?”
            </TextNode>

            <TextNode>“It had an ugly sound,” I answered.</TextNode>

            <TextNode>
              “Yes. There's blackmail in it, or I am much mistaken.”
            </TextNode>

            <TextNode>“And who is the blackmailer?”</TextNode>

            <TextNode>
              “Well, it must be the creature who lives in the only comfortable
              room in the place, and has her photograph above his fireplace.
              Upon my word, Watson, there is something very attractive about
              that livid face at the window, and I would not have missed the
              case for worlds.”
            </TextNode>

            <TextNode>“You have a theory?”</TextNode>

            <TextNode>
              “Yes, a provisional one. But I shall be surprised if it does not
              turn out to be correct. This woman's first husband is in that
              cottage.”
            </TextNode>

            <TextNode>“Why do you think so?”</TextNode>

            <TextNode>
              “How else can we explain her frenzied anxiety that her second one
              should not enter it? The facts, as I read them, are something like
              this: This woman was married in America. Her husband developed
              some hateful qualities; or shall we say that he contracted some
              loathsome disease, and became a leper or an imbecile? She flies
              from him at last, returns to England, changes her name, and starts
              her life, as she thinks, afresh. She has been married three years,
              and believes that her position is quite secure, having shown her
              husband the death certificate of some man whose name she has
              assumed, when suddenly her whereabouts is discovered by her first
              husband; or, we may suppose, by some unscrupulous woman who has
              attached herself to the invalid. They write to the wife, and
              threaten to come and expose her. She asks for a hundred pounds,
              and endeavors to buy them off. They come in spite of it, and when
              the husband mentions casually to the wife that there are
              new-comers in the cottage, she knows in some way that they are her
              pursuers. She waits until her husband is asleep, and then she
              rushes down to endeavor to persuade them to leave her in peace.
              Having no success, she goes again next morning, and her husband
              meets her, as he has told us, as she comes out. She promises him
              then not to go there again, but two days afterwards the hope of
              getting rid of those dreadful neighbors was too strong for her,
              and she made another attempt, taking down with her the photograph
              which had probably been demanded from her. In the midst of this
              interview the maid rushed in to say that the master had come home,
              on which the wife, knowing that he would come straight down to the
              cottage, hurried the inmates out at the back door, into the grove
              of fir-trees, probably, which was mentioned as standing near. In
              this way he found the place deserted. I shall be very much
              surprised, however, if it still so when he reconnoitres it this
              evening. What do you think of my theory?”
            </TextNode>

            <TextNode>“It is all surmise.”</TextNode>

            <TextNode>
              “But at least it covers all the facts. When new facts come to our
              knowledge which cannot be covered by it, it will be time enough to
              reconsider it. We can do nothing more until we have a message from
              our friend at Norbury.”
            </TextNode>

            <TextNode>
              But we had not a very long time to wait for that. It came just as
              we had finished our tea.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “The cottage is still tenanted,” it said. “Have seen the face
                again at the window. Will meet the seven o'clock train, and will
                take no steps until you arrive.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              He was waiting on the platform when we stepped out, and we could
              see in the light of the station lamps that he was very pale, and
              quivering with agitation.
            </TextNode>

            <TextNode>
              “They are still there, Mr. Holmes,” said he, laying his hand hard
              upon my friend's sleeve. “I saw lights in the cottage as I came
              down. We shall settle it now once and for all.”
            </TextNode>

            <TextNode>
              “What is your plan, then?” asked Holmes, as he walked down the
              dark tree-lined road.
            </TextNode>

            <TextNode>
              “I am going to force my way in and see for myself who is in the
              house. I wish you both to be there as witnesses.”
            </TextNode>

            <TextNode>
              “You are quite determined to do this, in spite of your wife's
              warning that it is better that you should not solve the mystery?”
            </TextNode>

            <TextNode>“Yes, I am determined.”</TextNode>

            <TextNode>
              “Well, I think that you are in the right. Any truth is better than
              indefinite doubt. We had better go up at once. Of course, legally,
              we are putting ourselves hopelessly in the wrong; but I think that
              it is worth it.”
            </TextNode>

            <TextNode>
              It was a very dark night, and a thin rain began to fall as we
              turned from the high road into a narrow lane, deeply rutted, with
              hedges on either side. Mr. Grant Munro pushed impatiently forward,
              however, and we stumbled after him as best we could.
            </TextNode>

            <TextNode>
              “There are the lights of my house,” he murmured, pointing to a
              glimmer among the trees. “And here is the cottage which I am going
              to enter.”
            </TextNode>

            <TextNode>
              We turned a corner in the lane as he spoke, and there was the
              building close beside us. A yellow bar falling across the black
              foreground showed that the door was not quite closed, and one
              window in the upper story was brightly illuminated. As we looked,
              we saw a dark blur moving across the blind.
            </TextNode>

            <TextNode>
              “There is that creature!” cried Grant Munro. “You can see for
              yourselves that some one is there. Now follow me, and we shall
              soon know all.”
            </TextNode>

            <TextNode>
              We approached the door; but suddenly a woman appeared out of the
              shadow and stood in the golden track of the lamp-light. I could
              not see her face in the darkness, but her arms were thrown out in
              an attitude of entreaty.
            </TextNode>

            <TextNode>
              “For God's sake, don't Jack!” she cried. “I had a presentiment
              that you would come this evening. Think better of it, dear! Trust
              me again, and you will never have cause to regret it.”
            </TextNode>

            <TextNode>
              “I have trusted you too long, Effie,” he cried, sternly. “Leave go
              of me! I must pass you. My friends and I are going to settle this
              matter once and forever!” He pushed her to one side, and we
              followed closely after him. As he threw the door open an old woman
              ran out in front of him and tried to bar his passage, but he
              thrust her back, and an instant afterwards we were all upon the
              stairs. Grant Munro rushed into the lighted room at the top, and
              we entered at his heels.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              It was a cosy, well-furnished apartment, with two candles burning
              upon the table and two upon the mantelpiece. In the corner,
              stooping over a desk, there sat what appeared to be a little girl.
              Her face was turned away as we entered, but we could see that she
              was dressed in a red frock, and that she had long white gloves on.
              As she whisked round to us, I gave a cry of surprise and horror.
              The face which she turned towards us was of the strangest livid
              tint, and the features were absolutely devoid of any expression.
              An instant later the mystery was explained. Holmes, with a laugh,
              passed his hand behind the child's ear, a mask peeled off from her
              countenance, an there was a little coal black negress, with all
              her white teeth flashing in amusement at our amazed faces. I burst
              out laughing, out of sympathy with her merriment; but Grant Munro
              stood staring, with his hand clutching his throat.
            </TextNode>

            <TextNode>
              “My God!” he cried. “What can be the meaning of this?”
            </TextNode>

            <TextNode>
              “I will tell you the meaning of it,” cried the lady, sweeping into
              the room with a proud, set face. “You have forced me, against my
              own judgment, to tell you, and now we must both make the best of
              it. My husband died at Atlanta. My child survived.”
            </TextNode>

            <TextNode>“Your child?”</TextNode>

            <TextNode>
              She drew a large silver locket from her bosom. “You have never
              seen this open.”
            </TextNode>

            <TextNode>“I understood that it did not open.”</TextNode>

            <TextNode>
              She touched a spring, and the front hinged back. There was a
              portrait within of a man strikingly handsome and
              intelligent-looking, but bearing unmistakable signs upon his
              features of his African descent.
            </TextNode>

            <TextNode>
              “That is John Hebron, of Atlanta,” said the lady, “and a nobler
              man never walked the earth. I cut myself off from my race in order
              to wed him, but never once while he lived did I for an instant
              regret it. It was our misfortune that our only child took after
              his people rather than mine. It is often so in such matches, and
              little Lucy is darker far than ever her father was. But dark or
              fair, she is my own dear little girlie, and her mother's pet.” The
              little creature ran across at the words and nestled up against the
              lady's dress. “When I left her in America,” she continued, “it was
              only because her health was weak, and the change might have done
              her harm. She was given to the care of a faithful Scotch woman who
              had once been our servant. Never for an instant did I dream of
              disowning her as my child. But when chance threw you in my way,
              Jack, and I learned to love you, I feared to tell you about my
              child. God forgive me, I feared that I should lose you, and I had
              not the courage to tell you. I had to choose between you, and in
              my weakness I turned away from my own little girl. For three years
              I have kept her existence a secret from you, but I heard from the
              nurse, and I knew that all was well with her. At last, however,
              there came an overwhelming desire to see the child once more. I
              struggled against it, but in vain. Though I knew the danger, I
              determined to have the child over, if it were but for a few weeks.
              I sent a hundred pounds to the nurse, and I gave her instructions
              about this cottage, so that she might come as a neighbor, without
              my appearing to be in any way connected with her. I pushed my
              precautions so far as to order her to keep the child in the house
              during the daytime, and to cover up her little face and hands so
              that even those who might see her at the window should not gossip
              about there being a black child in the neighborhood. If I had been
              less cautious I might have been more wise, but I was half crazy
              with fear that you should learn the truth.
            </TextNode>

            <TextNode>
              “It was you who told me first that the cottage was occupied. I
              should have waited for the morning, but I could not sleep for
              excitement, and so at last I slipped out, knowing how difficult it
              is to awake you. But you saw me go, and that was the beginning of
              my troubles. Next day you had my secret at your mercy, but you
              nobly refrained from pursuing your advantage. Three days later,
              however, the nurse and child only just escaped from the back door
              as you rushed in at the front one. And now to-night you at last
              know all, and I ask you what is to become of us, my child and me?”
              She clasped her hands and waited for an answer.
            </TextNode>

            <TextNode>
              It was a long ten minutes before Grant Munro broke the silence,
              and when his answer came it was one of which I love to think. He
              lifted the little child, kissed her, and then, still carrying her,
              he held his other hand out to his wife and turned towards the
              door.
            </TextNode>

            <TextNode>
              “We can talk it over more comfortably at home,” said he. “I am not
              a very good man, Effie, but I think that I am a better one than
              you have given me credit for being.”
            </TextNode>

            <TextNode>
              Holmes and I followed them down the lane, and my friend plucked at
              my sleeve as we came out.
            </TextNode>

            <TextNode>
              “I think,” said he, “that we shall be of more use in London than
              in Norbury.”
            </TextNode>

            <TextNode>
              Not another word did he say of the case until late that night,
              when he was turning away, with his lighted candle, for his
              bedroom.
            </TextNode>

            <TextNode>
              “Watson,” said he, “if it should ever strike you that I am getting
              a little over-confident in my powers, or giving less pains to a
              case than it deserves, kindly whisper ‘Norbury’ in my ear, and I
              shall be infinitely obliged to you.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page132;
