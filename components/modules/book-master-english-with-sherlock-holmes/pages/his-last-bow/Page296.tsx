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

function Page296({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;LADY&nbsp;FRANCES&nbsp;CARFAX'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“We have him! We have him!” he cried.</TextNode>

            <TextNode>
              He was incoherent in his agitation. Holmes soothed him with a few
              words and thrust him into an armchair.
            </TextNode>

            <TextNode>
              “Come, now, give us the order of events,” said he.
            </TextNode>

            <TextNode>
              “She came only an hour ago. It was the wife, this time, but the
              pendant she brought was the fellow of the other. She is a tall,
              pale woman, with ferret eyes.”
            </TextNode>

            <TextNode>“That is the lady,” said Holmes.</TextNode>

            <TextNode>
              “She left the office and I followed her. She walked up the
              Kennington Road, and I kept behind her. Presently she went into a
              shop. Mr. Holmes, it was an undertaker's.”
            </TextNode>

            <TextNode>
              My companion started. “Well?” he asked in that vibrant voice which
              told of the fiery soul behind the cold gray face.
            </TextNode>

            <TextNode>
              “She was talking to the woman behind the counter. I entered as
              well. ‘It is late,’ I heard her say, or words to that effect. The
              woman was excusing herself. ‘It should be there before now,’ she
              answered. ‘It took longer, being out of the ordinary.’ They both
              stopped and looked at me, so I asked some questions and then left
              the shop.”
            </TextNode>

            <TextNode>“You did excellently well. What happened next?”</TextNode>

            <TextNode>
              “The woman came out, but I had hid myself in a doorway. Her
              suspicions had been aroused, I think, for she looked round her.
              Then she called a cab and got in. I was lucky enough to get
              another and so to follow her. She got down at last at No. 36,
              Poultney Square, Brixton. I drove past, left my cab at the corner
              of the square, and watched the house.”
            </TextNode>

            <TextNode>“Did you see anyone?”</TextNode>

            <TextNode>
              “The windows were all in darkness save one on the lower floor. The
              blind was down, and I could not see in. I was standing there,
              wondering what I should do next, when a covered van drove up with
              two men in it. They descended, took something out of the van, and
              carried it up the steps to the hall door. Mr. Holmes, it was a
              coffin.”
            </TextNode>

            <TextNode>“Ah!”</TextNode>

            <TextNode>
              “For an instant I was on the point of rushing in. The door had
              been opened to admit the men and their burden. It was the woman
              who had opened it. But as I stood there she caught a glimpse of
              me, and I think that she recognized me. I saw her start, and she
              hastily closed the door. I remembered my promise to you, and here
              I am.”
            </TextNode>

            <TextNode>
              “You have done excellent work,” said Holmes, scribbling a few
              words upon a half-sheet of paper. “We can do nothing legal without
              a warrant, and you can serve the cause best by taking this note
              down to the authorities and getting one. There may be some
              difficulty, but I should think that the sale of the jewellery
              should be sufficient. Lestrade will see to all details.”
            </TextNode>

            <TextNode>
              “But they may murder her in the meanwhile. What could the coffin
              mean, and for whom could it be but for her?”
            </TextNode>

            <TextNode>
              “We will do all that can be done, Mr. Green. Not a moment will be
              lost. Leave it in our hands. Now Watson,” he added as our client
              hurried away, “he will set the regular forces on the move. We are,
              as usual, the irregulars, and we must take our own line of action.
              The situation strikes me as so desperate that the most extreme
              measures are justified. Not a moment is to be lost in getting to
              Poultney Square.
            </TextNode>

            <TextNode>
              “Let us try to reconstruct the situation,” said he as we drove
              swiftly past the Houses of Parliament and over Westminster Bridge.
              “These villains have coaxed this unhappy lady to London, after
              first alienating her from her faithful maid. If she has written
              any letters they have been intercepted. Through some confederate
              they have engaged a furnished house. Once inside it, they have
              made her a prisoner, and they have become possessed of the
              valuable jewellery which has been their object from the first.
              Already they have begun to sell part of it, which seems safe
              enough to them, since they have no reason to think that anyone is
              interested in the lady's fate. When she is released she will, of
              course, denounce them. Therefore, she must not be released. But
              they cannot keep her under lock and key forever. So murder is
              their only solution.”
            </TextNode>

            <TextNode>“That seems very clear.”</TextNode>

            <TextNode>
              “Now we will take another line of reasoning. When you follow two
              separate chains of thought, Watson, you will find some point of
              intersection which should approximate to the truth. We will start
              now, not from the lady but from the coffin and argue backward.
              That incident proves, I fear, beyond all doubt that the lady is
              dead. It points also to an orthodox burial with proper
              accompaniment of medical certificate and official sanction. Had
              the lady been obviously murdered, they would have buried her in a
              hole in the back garden. But here all is open and regular. What
              does this mean? Surely that they have done her to death in some
              way which has deceived the doctor and simulated a natural
              end—poisoning, perhaps. And yet how strange that they should ever
              let a doctor approach her unless he were a confederate, which is
              hardly a credible proposition.”
            </TextNode>

            <TextNode>“Could they have forged a medical certificate?”</TextNode>

            <TextNode>
              “Dangerous, Watson, very dangerous. No, I hardly see them doing
              that. Pull up, cabby! This is evidently the undertaker's, for we
              have just passed the pawnbroker's. Would go in, Watson? Your
              appearance inspires confidence. Ask what hour the Poultney Square
              funeral takes place to-morrow.”
            </TextNode>

            <TextNode>
              The woman in the shop answered me without hesitation that it was
              to be at eight o'clock in the morning. “You see, Watson, no
              mystery; everything above-board! In some way the legal forms have
              undoubtedly been complied with, and they think that they have
              little to fear. Well, there's nothing for it now but a direct
              frontal attack. Are you armed?”
            </TextNode>

            <TextNode>“My stick!”</TextNode>

            <TextNode>
              “Well, well, we shall be strong enough. ‘Thrice is he armed who
              hath his quarrel just.’ We simply can't afford to wait for the
              police or to keep within the four corners of the law. You can
              drive off, cabby. Now, Watson, we'll just take our luck together,
              as we have occasionally in the past.”
            </TextNode>

            <TextNode>
              He had rung loudly at the door of a great dark house in the centre
              of Poultney Square. It was opened immediately, and the figure of a
              tall woman was outlined against the dim-lit hall.
            </TextNode>

            <TextNode>
              “Well, what do you want?” she asked sharply, peering at us through
              the darkness.
            </TextNode>

            <TextNode>
              “I want to speak to Dr. Shlessinger,” said Holmes.
            </TextNode>

            <TextNode>
              “There is no such person here,” she answered, and tried to close
              the door, but Holmes had jammed it with his foot.
            </TextNode>

            <TextNode>
              “Well, I want to see the man who lives here, whatever he may call
              himself,” said Holmes firmly.
            </TextNode>

            <TextNode>
              She hesitated. Then she threw open the door. “Well, come in!” said
              she. “My husband is not afraid to face any man in the world.” She
              closed the door behind us and showed us into a sitting-room on the
              right side of the hall, turning up the gas as she left us. “Mr.
              Peters will be with you in an instant,” she said.
            </TextNode>

            <TextNode>
              Her words were literally true, for we had hardly time to look
              around the dusty and moth-eaten apartment in which we found
              ourselves before the door opened and a big, clean-shaven
              bald-headed man stepped lightly into the room. He had a large red
              face, with pendulous cheeks, and a general air of superficial
              benevolence which was marred by a cruel, vicious mouth.
            </TextNode>

            <TextNode>
              “There is surely some mistake here, gentlemen,” he said in an
              unctuous, make-everything-easy voice. “I fancy that you have been
              misdirected. Possibly if you tried farther down the street—”
            </TextNode>

            <TextNode>
              “That will do; we have no time to waste,” said my companion
              firmly. “You are Henry Peters, of Adelaide, late the Rev. Dr.
              Shlessinger, of Baden and South America. I am as sure of that as
              that my own name is Sherlock Holmes.”
            </TextNode>

            <TextNode>
              Peters, as I will now call him, started and stared hard at his
              formidable pursuer. “I guess your name does not frighten me, Mr.
              Holmes,” said he coolly. “When a man's conscience is easy you
              can't rattle him. What is your business in my house?”
            </TextNode>

            <TextNode>
              “I want to know what you have done with the Lady Frances Carfax,
              whom you brought away with you from Baden.”
            </TextNode>

            <TextNode>
              “I'd be very glad if you could tell me where that lady may be,”
              Peters answered coolly. “I've a bill against her for a nearly a
              hundred pounds, and nothing to show for it but a couple of
              trumpery pendants that the dealer would hardly look at. She
              attached herself to Mrs. Peters and me at Baden—it is a fact that
              I was using another name at the time—and she stuck on to us until
              we came to London. I paid her bill and her ticket. Once in London,
              she gave us the slip, and, as I say, left these out-of-date jewels
              to pay her bills. You find her, Mr. Holmes, and I'm your debtor.”
            </TextNode>

            <TextNode>
              In mean to find her,“ said Sherlock Holmes. ”I'm going through
              this house till I do find her.“
            </TextNode>

            <TextNode>“Where is your warrant?”</TextNode>

            <TextNode>
              Holmes half drew a revolver from his pocket. “This will have to
              serve till a better one comes.”
            </TextNode>

            <TextNode>“Why, you're a common burglar.”</TextNode>

            <TextNode>
              “So you might describe me,” said Holmes cheerfully. “My companion
              is also a dangerous ruffian. And together we are going through
              your house.”
            </TextNode>

            <TextNode>Our opponent opened the door.</TextNode>

            <TextNode>
              “Fetch a policeman, Annie!” said he. There was a whisk of feminine
              skirts down the passage, and the hall door was opened and shut.
            </TextNode>

            <TextNode>
              “Our time is limited, Watson,” said Holmes. “If you try to stop
              us, Peters, you will most certainly get hurt. Where is that coffin
              which was brought into your house?”
            </TextNode>

            <TextNode>
              “What do you want with the coffin? It is in use. There is a body
              in it.”
            </TextNode>

            <TextNode>“I must see the body.”</TextNode>

            <TextNode>“Never with my consent.”</TextNode>

            <TextNode>
              “Then without it.” With a quick movement Holmes pushed the fellow
              to one side and passed into the hall. A door half opened stood
              immediately before us. We entered. It was the dining-room. On the
              table, under a half-lit chandelier, the coffin was lying. Holmes
              turned up the gas and raised the lid. Deep down in the recesses of
              the coffin lay an emaciated figure. The glare from the lights
              above beat down upon an aged and withered face. By no possible
              process of cruelty, starvation, or disease could this wornout
              wreck be the still beautiful Lady Frances. Holmes's face showed
              his amazement, and also his relief.
            </TextNode>

            <TextNode>“Thank God!” he muttered. “It's someone else.”</TextNode>

            <TextNode>
              “Ah, you've blundered badly for once, Mr. Sherlock Holmes,” said
              Peters, who had followed us into the room.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Who is the dead woman?”</TextNode>

            <TextNode>
              “Well, if you really must know, she is an old nurse of my wife's,
              Rose Spender by name, whom we found in the Brixton Workhouse
              Infirmary. We brought her round here, called in Dr. Horsom, of 13
              Firbank Villas—mind you take the address, Mr. Holmes—and had her
              carefully tended, as Christian folk should. On the third day she
              died—certificate says senile decay—but that's only the doctor's
              opinion, and of course you know better. We ordered her funeral to
              be carried out by Stimson and Co., of the Kennington Road, who
              will bury her at eight o'clock to-morrow morning. Can you pick any
              hole in that, Mr. Holmes? You've made a silly blunder, and you may
              as well own up to it. I'd give something for a photograph of your
              gaping, staring face when you pulled aside that lid expecting to
              see the Lady Frances Carfax and only found a poor old woman of
              ninety.”
            </TextNode>

            <TextNode>
              Holmes's expression was as impassive as ever under the jeers of
              his antagonist, but his clenched hands betrayed his acute
              annoyance.
            </TextNode>

            <TextNode>“I am going through your house,” said he.</TextNode>

            <TextNode>
              “Are you, though!” cried Peters as a woman's voice and heavy steps
              sounded in the passage. “We'll soon see about that. This way,
              officers, if you please. These men have forced their way into my
              house, and I cannot get rid of them. Help me to put them out.”
            </TextNode>

            <TextNode>
              A sergeant and a constable stood in the doorway. Holmes drew his
              card from his case.
            </TextNode>

            <TextNode>
              “This is my name and address. This is my friend, Dr. Watson.”
            </TextNode>

            <TextNode>
              “Bless you, sir, we know you very well,” said the sergeant, “but
              you can't stay here without a warrant.”
            </TextNode>

            <TextNode>“Of course not. I quite understand that.”</TextNode>

            <TextNode>“Arrest him!” cried Peters.</TextNode>

            <TextNode>
              “We know where to lay our hands on this gentleman if he is
              wanted,” said the sergeant majestically, “but you'll have to go,
              Mr. Holmes.”
            </TextNode>

            <TextNode>“Yes, Watson, we shall have to go.”</TextNode>

            <TextNode>
              A minute later we were in the street once more. Holmes was as cool
              as ever, but I was hot with anger and humiliation. The sergeant
              had followed us.
            </TextNode>

            <TextNode>“Sorry, Mr. Holmes, but that's the law.”</TextNode>

            <TextNode>
              “Exactly, Sergeant, you could not do otherwise.”
            </TextNode>

            <TextNode>
              “I expect there was good reason for your presence there. If there
              is anything I can do—”
            </TextNode>

            <TextNode>
              “It's a missing lady, Sergeant, and we think she is in that house.
              I expect a warrant presently.”
            </TextNode>

            <TextNode>
              “Then I'll keep my eye on the parties, Mr. Holmes. If anything
              comes along, I will surely let you know.”
            </TextNode>

            <TextNode>
              It was only nine o'clock, and we were off full cry upon the trail
              at once. First we drove to Brixton Workhoused Infirmary, where we
              found that it was indeed the truth that a charitable couple had
              called some days before, that they had claimed an imbecile old
              woman as a former servant, and that they had obtained permission
              to take her away with them. No surprise was expressed at the news
              that she had since died.
            </TextNode>

            <TextNode>
              The doctor was our next goal. He had been called in, had found the
              woman dying of pure senility, had actually seen her pass away, and
              had signed the certificate in due form. “I assure you that
              everything was perfectly normal and there was no room for foul
              play in the matter,” said he. Nothing in the house had struck him
              as suspicious save that for people of their class it was
              remarkable that they should have no servant. So far and no further
              went the doctor.
            </TextNode>

            <TextNode>
              Finally we found our way to Scotland Yard. There had been
              difficulties of procedure in regard to the warrant. Some delay was
              inevitable. The magistrate's signature might not be obtained until
              next morning. If Holmes would call about nine he could go down
              with Lestrade and see it acted upon. So ended the day, save that
              near midnight our friend, the sergeant, called to say that he had
              seen flickering lights here and there in the windows of the great
              dark house, but that no one had left it and none had entered. We
              could but pray for patience and wait for the morrow.
            </TextNode>

            <TextNode>
              Sherlock Holmes was too irritable for conversation and too
              restless for sleep. I left him smoking hard, with his heavy, dark
              brows knotted together, and his long, nervous fingers tapping upon
              the arms of his chair, as he turned over in his mind every
              possible solution of the mystery. Several times in the course of
              the night I heard him prowling about the house. Finally, just
              after I had been called in the morning, he rushed into my room. He
              was in his dressing-gown, but his pale, hollow-eyed face told me
              that his night had been a sleepless one.
            </TextNode>

            <TextNode>
              “What time was the funeral? Eight, was it not?” he asked eagerly.
              “Well, it is 7.20 now. Good heavens, Watson, what has become of
              any brains that God has given me? Quick, man, quick! It's life or
              death—a hundred chances on death to one on life. I'll never
              forgive myself, never, if we are too late!”
            </TextNode>

            <TextNode>
              Five minutes had not passed before we were flying in a hansom down
              Baker Street. But even so it was twenty-five to eight as we passed
              Big Ben, and eight struck as we tore down the Brixton Road. But
              others were late as well as we. Ten minutes after the hour the
              hearse was still standing at the door of the house, and even as
              our foaming horse came to a halt the coffin, supported by three
              men, appeared on the threshold. Holmes darted forward and barred
              their way.
            </TextNode>

            <TextNode>
              “Take it back!” he cried, laying his hand on the breast of the
              foremost. “Take it back this instant!”
            </TextNode>

            <TextNode>
              “What the devil do you mean? Once again I ask you, where is your
              warrant?” shouted the furious Peters, his big red face glaring
              over the farther end of the coffin.
            </TextNode>

            <TextNode>
              “The warrant is on its way. The coffin shall remain in the house
              until it comes.”
            </TextNode>

            <TextNode>
              The authority in Holmes's voice had its effect upon the bearers.
              Peters had suddenly vanished into the house, and they obeyed these
              new orders. “Quick, Watson, quick! Here is a screw-driver!” he
              shouted as the coffin was replaced upon the table. “Here's one for
              you, my man! A sovreign if the lid comes off in a minute! Ask no
              questions—work away! That's good! Another! And another! Now pull
              all together! It's giving! It's giving! Ah, that does it at last.”
            </TextNode>

            <TextNode>
              With a united effort we tore off the coffin-lid. As we did so
              there came from the inside a stupefying and overpowering smell of
              chloroform. A body lay within, its head all wreathed in
              cotton-wool, which had been soaked in the narcotic. Holmes plucked
              it off and disclosed the statuesque face of a handsome and
              spiritual woman of middle age. In an instant he had passed his arm
              round the figure and raised her to a sitting position.
            </TextNode>

            <TextNode>
              “Is she gone, Watson? Is there a spark left? Surely we are not too
              late!”
            </TextNode>

            <TextNode>
              For half an hour it seemed that we were. What with actual
              suffocation, and what with the poisonous fumes of the chloroform,
              the Lady Frances seemed to have passed the last point of recall.
              And then, at last, with artificial respiration, with injected
              ether, and with every device that science could suggest, some
              flutter of life, some quiver of the eyelids, some dimming of a
              mirror, spoke of the slowly returning life. A cab had driven up,
              and Holmes, parting the blind, looked out at it. “Here is Lestrade
              with his warrant,” said he. “He will find that his birds have
              flown. And here,” he added as a heavy step hurried along the
              passage, “is someone who has a better right to nurse this lady
              than we have. Good morning, Mr. Green; I think that the sooner we
              can move the Lady Frances the better. Meanwhile, the funeral may
              proceed, and the poor old woman who still lies in that coffin may
              go to her last resting-place alone.”
            </TextNode>

            <TextNode>
              “Should you care to add the case to your annals, my dear Watson,”
              said Holmes that evening, “it can only be as an example of that
              temporary eclipse to which even the best-balanced mind may be
              exposed. Such slips are common to all mortals, and the greatest is
              he who can recognize and repair them. To this modified credit I
              may, perhaps, make some claim. My night was haunted by the thought
              that somewhere a clue, a strange sentence, a curious observation,
              had come under my notice and had been too easily dismissed. Then,
              suddenly, in the gray of the morning, the words came back to me.
              It was the remark of the undertaker's wife, as reported by Philip
              Green. She had said, ‘It should be there before now. It took
              longer, being out of the ordinary.’ It was the coffin of which she
              spoke. It had been out of the ordinary. That could only mean that
              it had been made to some special measurement. But why? Why? Then
              in an instant I remembered the deep sides, and the little wasted
              figure at the bottom. Why so large a coffin for so small a body?
              To leave room for another body. Both would be buried under the one
              certificate. It had all been so clear, if only my own sight had
              not been dimmed. At eight the Lady Frances would be buried. Our
              one chance was to stop the coffin before it left the house.
            </TextNode>

            <TextNode>
              “It was a desperate chance that we might find her alive, but it
              was a chance, as the result showed. These people had never, to my
              knowledge, done a murder. They might shrink from actual violence
              at the last. The could bury her with no sign of how she met her
              end, and even if she were exhumed there was a chance for them. I
              hoped that such considerations might prevail with them. You can
              reconstruct the scene well enough. You saw the horrible den
              upstairs, where the poor lady had been kept so long. They rushed
              in and overpowered her with their chloroform, carried her down,
              poured more into the coffin to insure against her waking, and then
              screwed down the lid. A clever device, Watson. It is new to me in
              the annals of crime. If our ex-missionary friends escape the
              clutches of Lestrade, I shall expect to hear of some brilliant
              incidents in their future career.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page296;
