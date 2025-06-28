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

function Page248({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “And yet when they arrived they found that the candle was out and
              that the lamp had been lighted. That seems very remarkable.”
            </TextNode>

            <TextNode>
              Again Barker showed some signs of indecision. “I don't see that it
              was remarkable, Mr. Holmes,” he answered after a pause. “The
              candle threw a very bad light. My first thought was to get a
              better one. The lamp was on the table; so I lit it.”
            </TextNode>

            <TextNode>“And blew out the candle?”</TextNode>

            <TextNode>“Exactly.”</TextNode>

            <TextNode>
              Holmes asked no further question, and Barker, with a deliberate
              look from one to the other of us, which had, as it seemed to me,
              something of defiance in it, turned and left the room.
            </TextNode>

            <TextNode>
              Inspector MacDonald had sent up a note to the effect that he would
              wait upon Mrs. Douglas in her room; but she had replied that she
              would meet us in the dining room. She entered now, a tall and
              beautiful woman of thirty, reserved and self-possessed to a
              remarkable degree, very different from the tragic and distracted
              figure I had pictured. It is true that her face was pale and
              drawn, like that of one who has endured a great shock; but her
              manner was composed, and the finely moulded hand which she rested
              upon the edge of the table was as steady as my own. Her sad,
              appealing eyes travelled from one to the other of us with a
              curiously inquisitive expression. That questioning gaze
              transformed itself suddenly into abrupt speech.
            </TextNode>

            <TextNode>“Have you found anything out yet?” she asked.</TextNode>

            <TextNode>
              Was it my imagination that there was an undertone of fear rather
              than of hope in the question?
            </TextNode>

            <TextNode>
              “We have taken every possible step, Mrs. Douglas,” said the
              inspector. “You may rest assured that nothing will be neglected.”
            </TextNode>

            <TextNode>
              “Spare no money,” she said in a dead, even tone. “It is my desire
              that every possible effort should be made.”
            </TextNode>

            <TextNode>
              “Perhaps you can tell us something which may throw some light upon
              the matter.”
            </TextNode>

            <TextNode>
              “I fear not; but all I know is at your service.”
            </TextNode>

            <TextNode>
              “We have heard from Mr. Cecil Barker that you did not actually
              see—that you were never in the room where the tragedy occurred?”
            </TextNode>

            <TextNode>
              “No, he turned me back upon the stairs. He begged me to return to
              my room.”
            </TextNode>

            <TextNode>
              “Quite so. You had heard the shot, and you had at once come down.”
            </TextNode>

            <TextNode>“I put on my dressing gown and then came down.”</TextNode>

            <TextNode>
              “How long was it after hearing the shot that you were stopped on
              the stair by Mr. Barker?”
            </TextNode>

            <TextNode>
              “It may have been a couple of minutes. It is so hard to reckon
              time at such a moment. He implored me not to go on. He assured me
              that I could do nothing. Then Mrs. Allen, the housekeeper, led me
              upstairs again. It was all like some dreadful dream.”
            </TextNode>

            <TextNode>
              “Can you give us any idea how long your husband had been
              downstairs before you heard the shot?”
            </TextNode>

            <TextNode>
              “No, I cannot say. He went from his dressing room, and I did not
              hear him go. He did the round of the house every night, for he was
              nervous of fire. It is the only thing that I have ever known him
              nervous of.”
            </TextNode>

            <TextNode>
              “That is just the point which I want to come to, Mrs. Douglas. You
              have known your husband only in England, have you not?”
            </TextNode>

            <TextNode>“Yes, we have been married five years.”</TextNode>

            <TextNode>
              “Have you heard him speak of anything which occurred in America
              and might bring some danger upon him?”
            </TextNode>

            <TextNode>
              Mrs. Douglas thought earnestly before she answered. “Yes.” she
              said at last, “I have always felt that there was a danger hanging
              over him. He refused to discuss it with me. It was not from want
              of confidence in me—there was the most complete love and
              confidence between us—but it was out of his desire to keep all
              alarm away from me. He thought I should brood over it if I knew
              all, and so he was silent.”
            </TextNode>

            <TextNode>“How did you know it, then?”</TextNode>

            <TextNode>
              Mrs. Douglas's face lit with a quick smile. “Can a husband ever
              carry about a secret all his life and a woman who loves him have
              no suspicion of it? I knew it by his refusal to talk about some
              episodes in his American life. I knew it by certain precautions he
              took. I knew it by certain words he let fall. I knew it by the way
              he looked at unexpected strangers. I was perfectly certain that he
              had some powerful enemies, that he believed they were on his
              track, and that he was always on his guard against them. I was so
              sure of it that for years I have been terrified if ever he came
              home later than was expected.”
            </TextNode>

            <TextNode>
              “Might I ask,” asked Holmes, “what the words were which attracted
              your attention?”
            </TextNode>

            <TextNode>
              “The Valley of Fear,” the lady answered. “That was an expression
              he has used when I questioned him. ‘I have been in the Valley of
              Fear. I am not out of it yet.’—‘Are we never to get out of the
              Valley of Fear?’ I have asked him when I have seen him more
              serious than usual. ‘Sometimes I think that we never shall,’ he
              has answered.”
            </TextNode>

            <TextNode>
              “Surely you asked him what he meant by the Valley of Fear?”
            </TextNode>

            <TextNode>
              “I did; but his face would become very grave and he would shake
              his head. ‘It is bad enough that one of us should have been in its
              shadow,’ he said. ‘Please God it shall never fall upon you!’ It
              was some real valley in which he had lived and in which something
              terrible had occurred to him, of that I am certain; but I can tell
              you no more.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“And he never mentioned any names?”</TextNode>

            <TextNode>
              “Yes, he was delirious with fever once when he had his hunting
              accident three years ago. Then I remember that there was a name
              that came continually to his lips. He spoke it with anger and a
              sort of horror. McGinty was the name—Bodymaster McGinty. I asked
              him when he recovered who Bodymaster McGinty was, and whose body
              he was master of. ‘Never of mine, thank God!’ he answered with a
              laugh, and that was all I could get from him. But there is a
              connection between Bodymaster McGinty and the Valley of Fear.”
            </TextNode>

            <TextNode>
              “There is one other point,” said Inspector MacDonald. “You met Mr.
              Douglas in a boarding house in London, did you not, and became
              engaged to him there? Was there any romance, anything secret or
              mysterious, about the wedding?”
            </TextNode>

            <TextNode>
              “There was romance. There is always romance. There was nothing
              mysterious.”
            </TextNode>

            <TextNode>“He had no rival?”</TextNode>

            <TextNode>“No, I was quite free.”</TextNode>
            <TextNode>
              “You have heard, no doubt, that his wedding ring has been taken.
              Does that suggest anything to you? Suppose that some enemy of his
              old life had tracked him down and committed this crime, what
              possible reason could he have for taking his wedding ring?”
            </TextNode>

            <TextNode>
              For an instant I could have sworn that the faintest shadow of a
              smile flickered over the woman's lips.
            </TextNode>

            <TextNode>
              “I really cannot tell,” she answered. “It is certainly a most
              extraordinary thing.”
            </TextNode>

            <TextNode>
              “Well, we will not detain you any longer, and we are sorry to have
              put you to this trouble at such a time,” said the inspector.
              “There are some other points, no doubt; but we can refer to you as
              they arise.”
            </TextNode>

            <TextNode>
              She rose, and I was again conscious of that quick, questioning
              glance with which she had just surveyed us. “What impression has
              my evidence made upon you?” The question might as well have been
              spoken. Then, with a bow, she swept from the room.
            </TextNode>

            <TextNode>
              “She's a beautiful woman—a very beautiful woman,” said MacDonald
              thoughtfully, after the door had closed behind her. “This man
              Barker has certainly been down here a good deal. He is a man who
              might be attractive to a woman. He admits that the dead man was
              jealous, and maybe he knew best himself what cause he had for
              jealousy. Then there's that wedding ring. You can't get past that.
              The man who tears a wedding ring off a dead man's—What do you say
              to it, Mr. Holmes?”
            </TextNode>

            <TextNode>
              My friend had sat with his head upon his hands, sunk in the
              deepest thought. Now he rose and rang the bell. “Ames,” he said,
              when the butler entered, “where is Mr. Cecil Barker now?”
            </TextNode>

            <TextNode>“I'll see, sir.”</TextNode>

            <TextNode>
              He came back in a moment to say that Barker was in the garden.
            </TextNode>

            <TextNode>
              “Can you remember, Ames, what Mr. Barker had on his feet last
              night when you joined him in the study?”
            </TextNode>

            <TextNode>
              “Yes, Mr. Holmes. He had a pair of bedroom slippers. I brought him
              his boots when he went for the police.”
            </TextNode>

            <TextNode>“Where are the slippers now?”</TextNode>

            <TextNode>“They are still under the chair in the hall.”</TextNode>

            <TextNode>
              “Very good, Ames. It is, of course, important for us to know which
              tracks may be Mr. Barker's and which from outside.”
            </TextNode>

            <TextNode>
              “Yes, sir. I may say that I noticed that the slippers were stained
              with blood—so indeed were my own.”
            </TextNode>

            <TextNode>
              “That is natural enough, considering the condition of the room.
              Very good, Ames. We will ring if we want you.”
            </TextNode>

            <TextNode>
              A few minutes later we were in the study. Holmes had brought with
              him the carpet slippers from the hall. As Ames had observed, the
              soles of both were dark with blood.
            </TextNode>

            <TextNode>
              “Strange!” murmured Holmes, as he stood in the light of the window
              and examined them minutely. “Very strange indeed!”
            </TextNode>

            <TextNode>
              Stooping with one of his quick feline pounces, he placed the
              slipper upon the blood mark on the sill. It exactly corresponded.
              He smiled in silence at his colleagues.
            </TextNode>

            <TextNode>
              The inspector was transfigured with excitement. His native accent
              rattled like a stick upon railings.
            </TextNode>

            <TextNode>
              “Man,” he cried, “there's not a doubt of it! Barker has just
              marked the window himself. It's a good deal broader than any
              bootmark. I mind that you said it was a splay-foot, and here's the
              explanation. But what's the game, Mr. Holmes—what's the game?”
            </TextNode>

            <TextNode>
              “Ay, what's the game?” my friend repeated thoughtfully.
            </TextNode>

            <TextNode>
              White Mason chuckled and rubbed his fat hands together in his
              professional satisfaction. “I said it was a snorter!” he cried.
              “And a real snorter it is!”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page248;
