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

function Page199({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;THREE&nbsp;STUDENTS'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“Very good, Mr. Holmes.”</TextNode>

            <TextNode>
              “You can be perfectly easy in your mind. We shall certainly find
              some way out of your difficulties. I will take the black clay with
              me, also the pencil cuttings. Good-bye.”
            </TextNode>

            <TextNode>
              When we were out in the darkness of the quadrangle we again looked
              up at the windows. The Indian still paced his room. The others
              were invisible.
            </TextNode>

            <TextNode>
              “Well, Watson, what do you think of it?” Holmes asked, as we came
              out into the main street. “Quite a little parlour game—sort of
              three-card trick, is it not? There are your three men. It must be
              one of them. You take your choice. Which is yours?”
            </TextNode>

            <TextNode>
              “The foul-mouthed fellow at the top. He is the one with the worst
              record. And yet that Indian was a sly fellow also. Why should he
              be pacing his room all the time?”
            </TextNode>

            <TextNode>
              “There is nothing in that. Many men do it when they are trying to
              learn anything by heart.”
            </TextNode>

            <TextNode>“He looked at us in a queer way.”</TextNode>

            <TextNode>
              “So would you if a flock of strangers came in on you when you were
              preparing for an examination next day, and every moment was of
              value. No, I see nothing in that. Pencils, too, and knives—all was
              satisfactory. But that fellow does puzzle me.”
            </TextNode>

            <TextNode>“Who?”</TextNode>

            <TextNode>
              “Why, Bannister, the servant. What's his game in the matter?”
            </TextNode>

            <TextNode>
              “He impressed me as being a perfectly honest man.”
            </TextNode>

            <TextNode>
              “So he did me. That's the puzzling part. Why should a perfectly
              honest man—well, well, here's a large stationer's. We shall begin
              our researches here.”
            </TextNode>

            <TextNode>
              There were only four stationers of any consequence in the town,
              and at each Holmes produced his pencil chips and bid high for a
              duplicate. All were agreed that one could be ordered, but that it
              was not a usual size of pencil and that it was seldom kept in
              stock. My friend did not appear to be depressed by his failure,
              but shrugged his shoulders in half-humorous resignation.
            </TextNode>

            <TextNode>
              “No good, my dear Watson. This, the best and only final clue, has
              run to nothing. But, indeed, I have little doubt that we can build
              up a sufficient case without it. By Jove! my dear fellow, it is
              nearly nine, and the landlady babbled of green peas at
              seven-thirty. What with your eternal tobacco, Watson, and your
              irregularity at meals, I expect that you will get notice to quit
              and that I shall share your downfall—not, however, before we have
              solved the problem of the nervous tutor, the careless servant, and
              the three enterprising students.”
            </TextNode>

            <TextNode>
              Holmes made no further allusion to the matter that day, though he
              sat lost in thought for a long time after our belated dinner. At
              eight in the morning he came into my room just as I finished my
              toilet.
            </TextNode>

            <TextNode>
              “Well, Watson,” said he, “it is time we went down to St. Luke's.
              Can you do without breakfast?”
            </TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>
              “Soames will be in a dreadful fidget until we are able to tell him
              something positive.”
            </TextNode>

            <TextNode>“Have you anything positive to tell him?”</TextNode>

            <TextNode>“I think so.”</TextNode>

            <TextNode>“You have formed a conclusion?”</TextNode>

            <TextNode>
              “Yes, my dear Watson; I have solved the mystery.”
            </TextNode>

            <TextNode>“But what fresh evidence could you have got?”</TextNode>

            <TextNode>
              “Aha! It is not for nothing that I have turned myself out of bed
              at the untimely hour of six. I have put in two hours' hard work
              and covered at least five miles, with something to show for it.
              Look at that!”
            </TextNode>

            <TextNode>
              He held out his hand. On the palm were three little pyramids of
              black, doughy clay.
            </TextNode>

            <TextNode>“Why, Holmes, you had only two yesterday!”</TextNode>

            <TextNode>
              “And one more this morning. It is a fair argument that wherever
              No. 3 came from is also the source of Nos. 1 and 2. Eh, Watson?
              Well, come along and put friend Soames out of his pain.”
            </TextNode>

            <TextNode>
              The unfortunate tutor was certainly in a state of pitiable
              agitation when we found him in his chambers. In a few hours the
              examination would commence, and he was still in the dilemma
              between making the facts public and allowing the culprit to
              compete for the valuable scholarship. He could hardly stand still,
              so great was his mental agitation, and he ran towards Holmes with
              two eager hands outstretched.
            </TextNode>

            <TextNode>
              “Thank Heaven that you have come! I feared that you had given it
              up in despair. What am I to do? Shall the examination proceed?”
            </TextNode>

            <TextNode>“Yes; let it proceed by all means.”</TextNode>

            <TextNode>“But this rascal—?”</TextNode>

            <TextNode>“He shall not compete.”</TextNode>

            <TextNode>“You know him?”</TextNode>

            <TextNode>
              “I think so. If this matter is not to become public we must give
              ourselves certain powers, and resolve ourselves into a small
              private court-martial. You there, if you please, Soames! Watson,
              you here! I'll take the arm-chair in the middle. I think that we
              are now sufficiently imposing to strike terror into a guilty
              breast. Kindly ring the bell!”
            </TextNode>

            <TextNode>
              Bannister entered, and shrunk back in evident surprise and fear at
              our judicial appearance.
            </TextNode>

            <TextNode>
              “You will kindly close the door,” said Holmes. “Now, Bannister,
              will you please tell us the truth about yesterday's incident?”
            </TextNode>

            <TextNode>The man turned white to the roots of his hair.</TextNode>

            <TextNode>“I have told you everything, sir.”</TextNode>

            <TextNode>“Nothing to add?”</TextNode>

            <TextNode>“Nothing at all, sir.”</TextNode>

            <TextNode>
              “Well, then, I must make some suggestions to you. When you sat
              down on that chair yesterday, did you do so in order to conceal
              some object which would have shown who had been in the room?”
            </TextNode>

            <TextNode>Bannister's face was ghastly.</TextNode>

            <TextNode>“No, sir; certainly not.”</TextNode>

            <TextNode>
              “It is only a suggestion,” said Holmes, suavely. “I frankly admit
              that I am unable to prove it. But it seems probable enough, since
              the moment that Mr. Soames's back was turned you released the man
              who was hiding in that bedroom.”
            </TextNode>

            <TextNode>Bannister licked his dry lips.</TextNode>

            <TextNode>“There was no man, sir.”</TextNode>

            <TextNode>
              “Ah, that's a pity, Bannister. Up to now you may have spoken the
              truth, but now I know that you have lied.”
            </TextNode>

            <TextNode>The man's face set in sullen defiance.</TextNode>

            <TextNode>“There was no man, sir.”</TextNode>

            <TextNode>“Come, come, Bannister!”</TextNode>

            <TextNode>“No, sir; there was no one.”</TextNode>

            <TextNode>
              “In that case you can give us no further information. Would you
              please remain in the room? Stand over there near the bedroom door.
              Now, Soames, I am going to ask you to have the great kindness to
              go up to the room of young Gilchrist, and to ask him to step down
              into yours.”
            </TextNode>

            <TextNode>
              An instant later the tutor returned, bringing with him the
              student. He was a fine figure of a man, tall, lithe, and agile,
              with a springy step and a pleasant, open face. His troubled blue
              eyes glanced at each of us, and finally rested with an expression
              of blank dismay upon Bannister in the farther corner.
            </TextNode>

            <TextNode>
              “Just close the door,” said Holmes. “Now, Mr. Gilchrist, we are
              all quite alone here, and no one need ever know one word of what
              passes between us. We can be perfectly frank with each other. We
              want to know, Mr. Gilchrist, how you, an honourable man, ever came
              to commit such an action as that of yesterday?”
            </TextNode>

            <TextNode>
              The unfortunate young man staggered back and cast a look full of
              horror and reproach at Bannister.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “No, no, Mr. Gilchrist, sir; I never said a word—never one word!”
              cried the servant.
            </TextNode>

            <TextNode>
              “No, but you have now,” said Holmes. “Now, sir, you must see that
              after Bannister's words your position is hopeless, and that your
              only chance lies in a frank confession.”
            </TextNode>

            <TextNode>
              For a moment Gilchrist, with upraised hand, tried to control his
              writhing features. The next he had thrown himself on his knees
              beside the table and, burying his face in his hands, he had burst
              into a storm of passionate sobbing.
            </TextNode>
            <TextNode>
              “Come, come,” said Holmes, kindly; “it is human to err, and at
              least no one can accuse you of being a callous criminal. Perhaps
              it would be easier for you if I were to tell Mr. Soames what
              occurred, and you can check me where I am wrong. Shall I do so?
              Well, well, don't trouble to answer. Listen, and see that I do you
              no injustice.
            </TextNode>

            <TextNode>
              “From the moment, Mr. Soames, that you said to me that no one, not
              even Bannister, could have told that the papers were in your room,
              the case began to take a definite shape in my mind. The printer
              one could, of course, dismiss. He could examine the papers in his
              own office. The Indian I also thought nothing of. If the proofs
              were in a roll he could not possibly know what they were. On the
              other hand, it seemed an unthinkable coincidence that a man should
              dare to enter the room, and that by chance on that very day the
              papers were on the table. I dismissed that. The man who entered
              knew that the papers were there. How did he know?
            </TextNode>

            <TextNode>
              “When I approached your room I examined the window. You amused me
              by supposing that I was contemplating the possibility of someone
              having in broad daylight, under the eyes of all these opposite
              rooms, forced himself through it. Such an idea was absurd. I was
              measuring how tall a man would need to be in order to see as he
              passed what papers were on the central table. I am six feet high,
              and I could do it with an effort. No one less than that would have
              a chance. Already you see I had reason to think that if one of
              your three students was a man of unusual height he was the most
              worth watching of the three.
            </TextNode>

            <TextNode>
              “I entered and I took you into my confidence as to the suggestions
              of the side table. Of the centre table I could make nothing, until
              in your description of Gilchrist you mentioned that he was a
              long-distance jumper. Then the whole thing came to me in an
              instant, and I only needed certain corroborative proofs, which I
              speedily obtained.
            </TextNode>

            <TextNode>
              “What happened was this. This young fellow had employed his
              afternoon at the athletic grounds, where he had been practising
              the jump. He returned carrying his jumping shoes, which are
              provided, as you are aware, with several sharp spikes. As he
              passed your window he saw, by means of his great height, these
              proofs upon your table, and conjectured what they were. No harm
              would have been done had it not been that as he passed your door
              he perceived the key which had been left by the carelessness of
              your servant. A sudden impulse came over him to enter and see if
              they were indeed the proofs. It was not a dangerous exploit, for
              he could always pretend that he had simply looked in to ask a
              question.
            </TextNode>

            <TextNode>
              “Well, when he saw that they were indeed the proofs, it was then
              that he yielded to temptation. He put his shoes on the table. What
              was it you put on that chair near the window?”
            </TextNode>

            <TextNode>“Gloves,” said the young man.</TextNode>

            <TextNode>
              Holmes looked triumphantly at Bannister. “He put his gloves on the
              chair, and he took the proofs, sheet by sheet, to copy them. He
              thought the tutor must return by the main gate, and that he would
              see him. As we know, he came back by the side gate. Suddenly he
              heard him at the very door. There was no possible escape. He
              forgot his gloves, but he caught up his shoes and darted into the
              bedroom. You observe that the scratch on that table is slight at
              one side, but deepens in the direction of the bedroom door. That
              in itself is enough to show us that the shoe had been drawn in
              that direction and that the culprit had taken refuge there. The
              earth round the spike had been left on the table, and a second
              sample was loosened and fell in the bedroom. I may add that I
              walked out to the athletic grounds this morning, saw that
              tenacious black clay is used in the jumping-pit, and carried away
              a specimen of it, together with some of the fine tan or sawdust
              which is strewn over it to prevent the athlete from slipping. Have
              I told the truth, Mr. Gilchrist?”
            </TextNode>

            <TextNode>The student had drawn himself erect.</TextNode>

            <TextNode>“Yes, sir, it is true,” said he.</TextNode>

            <TextNode>
              “Good heavens, have you nothing to add?” cried Soames.
            </TextNode>

            <TextNode>
              “Yes, sir, I have, but the shock of this disgraceful exposure has
              bewildered me. I have a letter here, Mr. Soames, which I wrote to
              you early this morning in the middle of a restless night. It was
              before I knew that my sin had found me out. Here it is, sir. You
              will see that I have said, ‘I have determined not to go in for the
              examination. I have been offered a commission in the Rhodesian
              Police, and I am going out to South Africa at once.’”
            </TextNode>

            <TextNode>
              “I am indeed pleased to hear that you did not intend to profit by
              your unfair advantage,” said Soames. “But why did you change your
              purpose?”
            </TextNode>

            <TextNode>Gilchrist pointed to Bannister.</TextNode>

            <TextNode>
              “There is the man who set me in the right path,” said he.
            </TextNode>

            <TextNode>
              “Come now, Bannister,” said Holmes. “It will be clear to you from
              what I have said that only you could have let this young man out,
              since you were left in the room, and must have locked the door
              when you went out. As to his escaping by that window, it was
              incredible. Can you not clear up the last point in this mystery,
              and tell us the reasons for your action?”
            </TextNode>

            <TextNode>
              “It was simple enough, sir, if you only had known; but with all
              your cleverness it was impossible that you could know. Time was,
              sir, when I was butler to old Sir Jabez Gilchrist, this young
              gentleman's father. When he was ruined I came to the college as
              servant, but I never forgot my old employer because he was down in
              the world. I watched his son all I could for the sake of the old
              days. Well, sir, when I came into this room yesterday when the
              alarm was given, the very first thing I saw was Mr. Gilchrist's
              tan gloves a-lying in that chair. I knew those gloves well, and I
              understood their message. If Mr. Soames saw them the game was up.
              I flopped down into that chair, and nothing would budge me until
              Mr. Soames he went for you. Then out came my poor young master,
              whom I had dandled on my knee, and confessed it all to me. Wasn't
              it natural, sir, that I should save him, and wasn't it natural
              also that I should try to speak to him as his dead father would
              have done, and make him understand that he could not profit by
              such a deed? Could you blame me, sir?”
            </TextNode>

            <TextNode>
              “No, indeed,” said Holmes, heartily, springing to his feet. “Well,
              Soames, I think we have cleared your little problem up, and our
              breakfast awaits us at home. Come, Watson! As to you, sir, I trust
              that a bright future awaits you in Rhodesia. For once you have
              fallen low. Let us see in the future how high you can rise.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page199;
