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

function Page314({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;MAZARIN&nbsp;STONE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was pleasant to Dr. Watson to find himself once more in the
              untidy room of the first floor in Baker Street which had been the
              starting-point of so many remarkable adventures. He looked round
              him at the scientific charts upon the wall, the acid-charred bench
              of chemicals, the violin-case leaning in the corner, the
              coal-scuttle, which contained of old the pipes and tobacco.
              Finally, his eyes came round to the fresh and smiling face of
              Billy, the young but very wise and tactful page, who had helped a
              little to fill up the gap of loneliness and isolation which
              surrounded the saturnine figure of the great detective.
            </TextNode>

            <TextNode>
              “It all seems very unchanged, Billy. You don't change, either. I
              hope the same can be said of him?”
            </TextNode>

            <TextNode>
              Billy glanced with some solicitude at the closed door of the
              bedroom.
            </TextNode>

            <TextNode>“I think he's in bed and asleep,” he said.</TextNode>

            <TextNode>
              It was seven in the evening of a lovely summer's day, but Dr.
              Watson was sufficiently familiar with the irregularity of his old
              friend's hours to feel no surprise at the idea.
            </TextNode>

            <TextNode>“That means a case, I suppose?”</TextNode>

            <TextNode>
              “Yes, sir, he is very hard at it just now. I'm frightened for his
              health. He gets paler and thinner, and he eats nothing. ‘When will
              you be pleased to dine, Mr. Holmes?’ Mrs. Hudson asked.
              ‘Seven-thirty, the day after to-morrow,’ said he. You know his way
              when he is keen on a case.”
            </TextNode>

            <TextNode>“Yes, Billy, I know.”</TextNode>

            <TextNode>
              “He's following someone. Yesterday he was out as a workman looking
              for a job. To-day he was an old woman. Fairly took me in, he did,
              and I ought to know his ways by now.” Billy pointed with a grin to
              a very baggy parasol which leaned against the sofa. “That's part
              of the old woman's outfit,” he said.
            </TextNode>

            <TextNode>“But what is it all about, Billy?”</TextNode>

            <TextNode>
              Billy sank his voice, as one who discusses great secrets of State.
              “I don't mind telling you, sir, but it should go no farther. It's
              this case of the Crown diamond.”
            </TextNode>

            <TextNode>“What—the hundred-thousand-pound burglary?”</TextNode>

            <TextNode>
              “Yes, sir. They must get it back, sir. Why, we had the Prime
              Minister and the Home Secretary both sitting on that very sofa.
              Mr. Holmes was very nice to them. He soon put them at their ease
              and promised he would do all he could. Then there is Lord
              Cantlemere—”
            </TextNode>

            <TextNode>“Ah!”</TextNode>

            <TextNode>
              “Yes, sir, you know what that means. He's a stiff 'un, sir, if I
              may say so. I can get along with the Prime Minister, and I've
              nothing against the Home Secretary, who seemed a civil, obliging
              sort of man, but I can't stand his Lordship. Neither can Mr.
              Holmes, sir. You see, he don't believe in Mr. Holmes and he was
              against employing him. He'd rather he failed.”
            </TextNode>

            <TextNode>“And Mr. Holmes knows it?”</TextNode>

            <TextNode>
              “Mr. Holmes always knows whatever there is to know.”
            </TextNode>

            <TextNode>
              “Well, we'll hope he won't fail and that Lord Cantlemere will be
              confounded. But I say, Billy, what is that curtain for across the
              window?”
            </TextNode>

            <TextNode>
              “Mr. Holmes had it put up there three days ago. We've got
              something funny behind it.”
            </TextNode>

            <TextNode>
              Billy advanced and drew away the drapery which screened the alcove
              of the bow window.
            </TextNode>

            <TextNode>
              Dr. Watson could not restrain a cry of amazement. There was a
              facsimile of his old friend, dressing-gown and all, the face
              turned three-quarters towards the window and downward, as though
              reading an invisible book, while the body was sunk deep in an
              armchair. Billy detached the head and held it in the air.
            </TextNode>

            <TextNode>
              “We put it at different angles, so that it may seem more lifelike.
              I wouldn't dare touch it if the blind were not down. But when it's
              up you can see this from across the way.”
            </TextNode>

            <TextNode>“We used something of the sort once before.”</TextNode>

            <TextNode>
              “Before my time,” said Billy. He drew the window curtains apart
              and looked out into the street. “There are folk who watch us from
              over yonder. I can see a fellow now at the window. Have a look for
              yourself.”
            </TextNode>

            <TextNode>
              Watson had taken a step forward when the bedroom door opened, and
              the long, thin form of Holmes emerged, his face pale and drawn,
              but his step and bearing as active as ever. With a single spring
              he was at the window, and had drawn the blind once more.
            </TextNode>

            <TextNode>
              “That will do, Billy,” said he. “You were in danger of your life
              then, my boy, and I can't do without you just yet. Well, Watson,
              it is good to see you in your old quarters once again. You come at
              a critical moment.”
            </TextNode>

            <TextNode>“So I gather.”</TextNode>

            <TextNode>
              “You can go, Billy. That boy is a problem, Watson. How far am I
              justified in allowing him to be in danger?”
            </TextNode>

            <TextNode>“Danger of what, Holmes?”</TextNode>

            <TextNode>
              “Of sudden death. I'm expecting something this evening.”
            </TextNode>

            <TextNode>“Expecting what?”</TextNode>

            <TextNode>“To be murdered, Watson.”</TextNode>

            <TextNode>“No, no, you are joking, Holmes!”</TextNode>

            <TextNode>
              “Even my limited sense of humour could evolve a better joke than
              that. But we may be comfortable in the meantime, may we not? Is
              alcohol permitted? The gasogene and cigars are in the old place.
              Let me see you once more in the customary armchair. You have not,
              I hope, learned to despise my pipe and my lamentable tobacco? It
              has to take the place of food these days.”
            </TextNode>

            <TextNode>“But why not eat?”</TextNode>

            <TextNode>
              “Because the faculties become refined when you starve them. Why,
              surely, as a doctor, my dear Watson, you must admit that what your
              digestion gains in the way of blood supply is so much lost to the
              brain. I am a brain, Watson. The rest of me is a mere appendix.
              Therefore, it is the brain I must consider.”
            </TextNode>

            <TextNode>“But this danger, Holmes?”</TextNode>

            <TextNode>
              “Ah, yes, in case it should come off, it would perhaps be as well
              that you should burden your memory with the name and address of
              the murderer. You can give it to Scotland Yard, with my love and a
              parting blessing. Sylvius is the name—Count Negretto Sylvius.
              Write it down, man, write it down! 136 Moorside Gardens, N. W. Got
              it?”
            </TextNode>

            <TextNode>
              Watson's honest face was twitching with anxiety. He knew only too
              well the immense risks taken by Holmes and was well aware that
              what he said was more likely to be under-statement than
              exaggeration. Watson was always the man of action, and he rose to
              the occasion.
            </TextNode>

            <TextNode>
              “Count me in, Holmes. I have nothing to do for a day or two.”
            </TextNode>

            <TextNode>
              “Your morals don't improve, Watson. You have added fibbing to your
              other vices. You bear every sign of the busy medical man, with
              calls on him every hour.”
            </TextNode>

            <TextNode>
              “Not such important ones. But can't you have this fellow
              arrested?”
            </TextNode>

            <TextNode>
              “Yes, Watson, I could. That's what worries him so.”
            </TextNode>

            <TextNode>“But why don't you?”</TextNode>

            <TextNode>“Because I don't know where the diamond is.”</TextNode>

            <TextNode>“Ah! Billy told me—the missing Crown jewel!”</TextNode>

            <TextNode>
              “Yes, the great yellow Mazarin stone. I've cast my net and I have
              my fish. But I have not got the stone. What is the use of taking
              them? We can make the world a better place by laying them by the
              heels. But that is not what I am out for. It's the stone I want.”
            </TextNode>

            <TextNode>“And is this Count Sylvius one of your fish?”</TextNode>

            <TextNode>
              “Yes, and he's a shark. He bites. The other is Sam Merton, the
              boxer. Not a bad fellow, Sam, but the Count has used him. Sam's
              not a shark. He is a great big silly bull-headed gudgeon. But he
              is flopping about in my net all the same.”
            </TextNode>

            <TextNode>“Where is this Count Sylvius?”</TextNode>

            <TextNode>
              “I've been at his very elbow all the morning. You've seen me as an
              old lady, Watson. I was never more convincing. He actually picked
              up my parasol for me once. ‘By your leave, madame,’ said
              he—half-Italian, you know, and with the Southern graces of manner
              when in the mood, but a devil incarnate in the other mood. Life is
              full of whimsical happenings, Watson.”
            </TextNode>

            <TextNode>“It might have been tragedy.”</TextNode>

            <TextNode>
              “Well, perhaps it might. I followed him to old Straubenzee's
              workshop in the Minories. Straubenzee made the air-gun—a very
              pretty bit of work, as I understand, and I rather fancy it is in
              the opposite window at the present moment. Have you seen the
              dummy? Of course, Billy showed it to you. Well, it may get a
              bullet through its beautiful head at any moment. Ah, Billy, what
              is it?”
            </TextNode>

            <TextNode>
              The boy had reappeared in the room with a card upon a tray. Holmes
              glanced at it with raised eyebrows and an amused smile.
            </TextNode>

            <TextNode>
              “The man himself. I had hardly expected this. Grasp the nettle,
              Watson! A man of nerve. Possibly you have heard of his reputation
              as a shooter of big game. It would indeed be a triumphant ending
              to his excellent sporting record if he added me to his bag. This
              is a proof that he feels my toe very close behind his heel.”
            </TextNode>

            <TextNode>“Send for the police.”</TextNode>

            <TextNode>
              “I probably shall. But not just yet. Would you glance carefully
              out of the window, Watson, and see if anyone is hanging about in
              the street?”
            </TextNode>

            <TextNode>
              Watson looked warily round the edge of the curtain.
            </TextNode>

            <TextNode>“Yes, there is one rough fellow near the door.”</TextNode>

            <TextNode>
              “That will be Sam Merton—the faithful but rather fatuous Sam.
              Where is this gentleman, Billy?”
            </TextNode>

            <TextNode>“In the waiting-room, sir.”</TextNode>

            <TextNode>“Show him up when I ring.”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “If I am not in the room, show him in all the same.”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              Watson waited until the door was closed, and then he turned
              earnestly to his companion.
            </TextNode>

            <TextNode>
              “Look here, Holmes, this is simply impossible. This is a desperate
              man, who sticks at nothing. He may have come to murder you.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“I should not be surprised.”</TextNode>

            <TextNode>“I insist upon staying with you.”</TextNode>

            <TextNode>“You would be horribly in the way.”</TextNode>

            <TextNode>“In his way?”</TextNode>

            <TextNode>“No, my dear fellow—in my way.”</TextNode>

            <TextNode>“Well, I can't possibly leave you.”</TextNode>

            <TextNode>
              “Yes, you can, Watson. And you will, for you have never failed to
              play the game. I am sure you will play it to the end. This man has
              come for his own purpose, but he may stay for mine.” Holmes took
              out his notebook and scribbled a few lines. “Take a cab to
              Scotland Yard and give this to Youghal of the C. I. D. Come back
              with the police. The fellow's arrest will follow.”
            </TextNode>

            <TextNode>“I'll do that with joy.”</TextNode>

            <TextNode>
              “Before you return I may have just time enough to find out where
              the stone is.” He touched the bell. “I think we will go out
              through the bedroom. This second exit is exceedingly useful. I
              rather want to see my shark without his seeing me, and I have, as
              you will remember, my own way of doing it.”
            </TextNode>

            <TextNode>
              It was, therefore, an empty room into which Billy, a minute later,
              ushered Count Sylvius. The famous game-shot, sportsman, and
              man-about-town was a big, swarthy fellow, with a formidable dark
              moustache shading a cruel, thin-lipped mouth, and surmounted by a
              long, curved nose like the beak of an eagle. He was well dressed,
              but his brilliant necktie, shining pin, and glittering rings were
              flamboyant in their effect. As the door closed behind him he
              looked round him with fierce, startled eyes, like one who suspects
              a trap at every turn. Then he gave a violent start as he saw the
              impassive head and the collar of the dressing-gown which projected
              above the armchair in the window. At first his expression was one
              of pure amazement. Then the light of a horrible hope gleamed in
              his dark, murderous eyes. He took one more glance round to see
              that there were no witnesses, and then, on tiptoe, his thick stick
              half raised, he approached the silent figure. He was crouching for
              his final spring and blow when a cool, sardonic voice greeted him
              from the open bedroom door:
            </TextNode>

            <TextNode>“Don't break it, Count! Don't break it!”</TextNode>

            <TextNode>
              The assassin staggered back, amazement in his convulsed face. For
              an instant he half raised his loaded cane once more, as if he
              would turn his violence from the effigy to the original; but there
              was something in that steady gray eye and mocking smile which
              caused his hand to sink to his side.
            </TextNode>

            <TextNode>
              “It's a pretty little thing,” said Holmes, advancing towards the
              image. “Tavernier, the French modeller, made it. He is as good at
              waxworks as your friend Straubenzee is at air-guns.”
            </TextNode>

            <TextNode>“Air-guns, sir! What do you mean?”</TextNode>

            <TextNode>
              “Put your hat and stick on the side-table. Thank you! Pray take a
              seat. Would you care to put your revolver out also? Oh, very good,
              if you prefer to sit upon it. Your visit is really most opportune,
              for I wanted badly to have a few minutes' chat with you.”
            </TextNode>

            <TextNode>
              The Count scowled, with heavy, threatening eyebrows.
            </TextNode>

            <TextNode>
              “I, too, wished to have some words with you, Holmes. That is why I
              am here. I won't deny that I intended to assault you just now.”
            </TextNode>

            <TextNode>Holmes swung his leg on the edge of the table.</TextNode>

            <TextNode>
              “I rather gathered that you had some idea of the sort in your
              head,” said he. “But why these personal attentions?”
            </TextNode>

            <TextNode>
              “Because you have gone out of your way to annoy me. Because you
              have put your creatures upon my track.”
            </TextNode>

            <TextNode>“My creatures! I assure you no!”</TextNode>

            <TextNode>
              “Nonsense! I have had them followed. Two can play at that game,
              Holmes.”
            </TextNode>

            <TextNode>
              “It is a small point, Count Sylvius, but perhaps you would kindly
              give me my prefix when you address me. You can understand that,
              with my routine of work, I should find myself on familiar terms
              with half the rogues' gallery, and you will agree that exceptions
              are invidious.”
            </TextNode>

            <TextNode>“Well, Mr. Holmes, then.”</TextNode>

            <TextNode>
              “Excellent! But I assure you you are mistaken about my alleged
              agents.”
            </TextNode>

            <TextNode>Count Sylvius laughed contemptuously.</TextNode>

            <TextNode>
              “Other people can observe as well as you. Yesterday there was an
              old sporting man. To-day it was an elderly woman. They held me in
              view all day.”
            </TextNode>

            <TextNode>
              “Really, sir, you compliment me. Old Baron Dowson said the night
              before he was hanged that in my case what the law had gained the
              stage had lost. And now you give my little impersonations your
              kindly praise?”
            </TextNode>

            <TextNode>“It was you—you yourself?”</TextNode>

            <TextNode>
              Holmes shrugged his shoulders. “You can see in the corner the
              parasol which you so politely handed to me in the Minories before
              you began to suspect.”
            </TextNode>

            <TextNode>“If I had known, you might never—”</TextNode>

            <TextNode>
              “Have seen this humble home again. I was well aware of it. We all
              have neglected opportunities to deplore. As it happens, you did
              not know, so here we are!”
            </TextNode>

            <TextNode>
              The Count's knotted brows gathered more heavily over his menacing
              eyes. “What you say only makes the matter worse. It was not your
              agents but your play-acting, busybody self! You admit that you
              have dogged me. Why?”
            </TextNode>

            <TextNode>
              “Come now, Count. You used to shoot lions in Algeria.”
            </TextNode>

            <TextNode>“Well?”</TextNode>

            <TextNode>“But why?”</TextNode>

            <TextNode>“Why? The sport—the excitement—the danger!”</TextNode>

            <TextNode>
              “And, no doubt, to free the country from a pest?”
            </TextNode>

            <TextNode>“Exactly!”</TextNode>

            <TextNode>“My reasons in a nutshell!”</TextNode>

            <TextNode>
              The Count sprang to his feet, and his hand involuntarily moved
              back to his hip-pocket.
            </TextNode>

            <TextNode>
              “Sit down, sir, sit down! There was another, more practical,
              reason. I want that yellow diamond!”
            </TextNode>

            <TextNode>
              Count Sylvius lay back in his chair with an evil smile.
            </TextNode>

            <TextNode>“Upon my word!” said he.</TextNode>

            <TextNode>
              “You knew that I was after you for that. The real reason why you
              are here to-night is to find out how much I know about the matter
              and how far my removal is absolutely essential. Well, I should say
              that, from your point of view, it is absolutely essential, for I
              know all about it, save only one thing, which you are about to
              tell me.”
            </TextNode>

            <TextNode>
              “Oh, indeed! And pray, what is this missing fact?”
            </TextNode>

            <TextNode>“Where the Crown diamond now is.”</TextNode>

            <TextNode>
              The Count looked sharply at his companion. “Oh, you want to know
              that, do you? How the devil should I be able to tell you where it
              is?”
            </TextNode>

            <TextNode>“You can, and you will.”</TextNode>

            <TextNode>“Indeed!”</TextNode>

            <TextNode>
              “You can't bluff me, Count Sylvius.” Holmes's eyes, as he gazed at
              him, contracted and lightened until they were like two menacing
              points of steel. “You are absolute plate-glass. I see to the very
              back of your mind.”
            </TextNode>

            <TextNode>
              “Then, of course, you see where the diamond is!”
            </TextNode>

            <TextNode>
              Holmes clapped his hands with amusement, and then pointed a
              derisive finger. “Then you do know. You have admitted it!”
            </TextNode>

            <TextNode>“I admit nothing.”</TextNode>

            <TextNode>
              “Now, Count, if you will be reasonable we can do business. If not,
              you will get hurt.”
            </TextNode>

            <TextNode>
              Count Sylvius threw up his eyes to the ceiling. “And you talk
              about bluff!” said he.
            </TextNode>

            <TextNode>
              Holmes looked at him thoughtfully like a master chess-player who
              meditates his crowning move. Then he threw open the table drawer
              and drew out a squat notebook.
            </TextNode>

            <TextNode>“Do you know what I keep in this book?”</TextNode>

            <TextNode>“No, sir, I do not!”</TextNode>

            <TextNode>“You!”</TextNode>

            <TextNode>“Me!”</TextNode>

            <TextNode>
              “Yes, sir, you! You are all here—every action of your vile and
              dangerous life.”
            </TextNode>

            <TextNode>
              “Damn you, Holmes!” cried the Count with blazing eyes. “There are
              limits to my patience!”
            </TextNode>

            <TextNode>
              “It's all here, Count. The real facts as to the death of old Mrs.
              Harold, who left you the Blymer estate, which you so rapidly
              gambled away.”
            </TextNode>

            <TextNode>“You are dreaming!”</TextNode>

            <TextNode>
              “And the complete life history of Miss Minnie Warrender.”
            </TextNode>

            <TextNode>“Tut! You will make nothing of that!”</TextNode>

            <TextNode>
              “Plenty more here, Count. Here is the robbery in the train de-luxe
              to the Riviera on February 13, 1892. Here is the forged check in
              the same year on the Credit Lyonnais.”
            </TextNode>

            <TextNode>“No; you're wrong there.”</TextNode>

            <TextNode>
              “Then I am right on the others! Now, Count, you are a card-player.
              When the other fellow has all the trumps, it saves time to throw
              down your hand.”
            </TextNode>

            <TextNode>
              “What has all this talk to do with the jewel of which you spoke?”
            </TextNode>

            <TextNode>
              “Gently, Count. Restrain that eager mind! Let me get to the points
              in my own humdrum fashion. I have all this against you; but, above
              all, I have a clear case against both you and your fighting bully
              in the case of the Crown diamond.”
            </TextNode>

            <TextNode>“Indeed!”</TextNode>

            <TextNode>
              “I have the cabman who took you to Whitehall and the cabman who
              brought you away. I have the commissionaire who saw you near the
              case. I have Ikey Sanders, who refused to cut it up for you. Ikey
              has peached, and the game is up.”
            </TextNode>

            <TextNode>
              The veins stood out on the Count's forehead. His dark, hairy hands
              were clenched in a convulsion of restrained emotion. He tried to
              speak, but the words would not shape themselves.
            </TextNode>

            <TextNode>
              “That's the hand I play from,” said Holmes. “I put it all upon the
              table. But one card is missing. It's the king of diamonds. I don't
              know where the stone is.”
            </TextNode>

            <TextNode>“You never shall know.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page314;
