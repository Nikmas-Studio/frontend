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

function Page320({
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
            <TextNode noIndent>
              Holmes had read carefully a note which the last post had brought
              him. Then, with the dry chuckle which was his nearest approach to
              a laugh, he tossed it over to me.
            </TextNode>

            <TextNode>
              “For a mixture of the modern and the mediaeval, of the practical
              and of the wildly fanciful, I think this is surely the limit,”
              said he. “What do you make of it, Watson?”
            </TextNode>

            <TextNode>I read as follows:</TextNode>

            <Indent>
              <TextNode noIndent className='text-right  italic'>
                46, Old Jewry,
              </TextNode>
              <TextNode noIndent className='text-right  italic'>
                Nov. 19th.
              </TextNode>
              <TextNode noIndent className='text-center  italic'>
                Re Vampires
              </TextNode>
              <TextNode noIndent className='italic'>
                Sir:
              </TextNode>
              <TextNode noIndent>
                Our client, Mr. Robert Ferguson, of Ferguson and Muirhead, tea
                brokers, of Mincing Lane, has made some inquiry from us in a
                communication of even date concerning vampires. As our firm
                specializes entirely upon the assessment of machinery the matter
                hardly comes within our purview, and we have therefore
                recommended Mr. Ferguson to call upon you and lay the matter
                before you. We have not forgotten your successful action in the
                case of Matilda Briggs.
              </TextNode>
              <TextNode>We are, sir,</TextNode>
              <TextNode noIndent className='italic'>
                Faithfully yours,
              </TextNode>
              <TextNode noIndent className='italic'>
                Morrison, Morrison, and Dodd.
              </TextNode>
              <TextNode noIndent className='italic'>
                per E. J. C.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Matilda Briggs was not the name of a young woman, Watson,” said
              Holmes in a reminiscent voice. “It was a ship which is associated
              with the giant rat of Sumatra, a story for which the world is not
              yet prepared. But what do we know about vampires? Does it come
              within our purview either? Anything is better than stagnation, but
              really we seem to have been switched on to a Grimms' fairy tale.
              Make a long arm, Watson, and see what V has to say.”
            </TextNode>

            <TextNode>
              I leaned back and took down the great index volume to which he
              referred. Holmes balanced it on his knee, and his eyes moved
              slowly and lovingly over the record of old cases, mixed with the
              accumulated information of a lifetime.
            </TextNode>

            <TextNode>
              “Voyage of the <span className='italic'>Gloria Scott</span>,” he
              read. “That was a bad business. I have some recollection that you
              made a record of it, Watson, though I was unable to congratulate
              you upon the result. Victor Lynch, the forger. Venomous lizard or
              gila. Remarkable case, that! Vittoria, the circus belle.
              Vanderbilt and the Yeggman. Vipers. Vigor, the Hammersmith wonder.
              Hullo! Hullo! Good old index. You can't beat it. Listen to this,
              Watson. Vampirism in Hungary. And again, Vampires in
              Transylvania.” He turned over the pages with eagerness, but after
              a short intent perusal he threw down the great book with a snarl
              of disappointment.
            </TextNode>

            <TextNode>
              “Rubbish, Watson, rubbish! What have we to do with walking corpses
              who can only be held in their grave by stakes driven through their
              hearts? It's pure lunacy.”
            </TextNode>

            <TextNode>
              “But surely,” said I, “the vampire was not necessarily a dead man?
              A living person might have the habit. I have read, for example, of
              the old sucking the blood of the young in order to retain their
              youth.”
            </TextNode>

            <TextNode>
              “You are right, Watson. It mentions the legend in one of these
              references. But are we to give serious attention to such things?
              This agency stands flat-footed upon the ground, and there it must
              remain. The world is big enough for us. No ghosts need apply. I
              fear that we cannot take Mr. Robert Ferguson very seriously.
              Possibly this note may be from him and may throw some light upon
              what is worrying him.”
            </TextNode>

            <TextNode>
              He took up a second letter which had lain unnoticed upon the table
              while he had been absorbed with the first. This he began to read
              with a smile of amusement upon his face which gradually faded away
              into an expression of intense interest and concentration. When he
              had finished he sat for some little time lost in thought with the
              letter dangling from his fingers. Finally, with a start, he
              aroused himself from his reverie.
            </TextNode>

            <TextNode>
              “Cheeseman's, Lamberley. Where is Lamberley, Watson?”
            </TextNode>

            <TextNode>“It is in Sussex, south of Horsham.”</TextNode>

            <TextNode>“Not very far, eh? And Cheeseman's?”</TextNode>

            <TextNode>
              “I know that country, Holmes. It is full of old houses which are
              named after the men who built them centuries ago. You get Odley's
              and Harvey's and Carriton's—the folk are forgotten but their names
              live in their houses.
            </TextNode>

            <TextNode>
              “Precisely,” said Holmes coldly. It was one of the peculiarities
              of his proud, self-contained nature that though he docketed any
              fresh information very quietly and accurately in his brain, he
              seldom made any acknowledgment to the giver. “I rather fancy we
              shall know a good deal more about Cheeseman's, Lamberley, before
              we are through. The letter is, as I had hoped, from Robert
              Ferguson. By the way, he claims acquaintance with you.”
            </TextNode>

            <TextNode>“With me!”</TextNode>

            <TextNode>“You had better read it.”</TextNode>

            <TextNode>
              He handed the letter across. It was headed with the address
              quoted.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                Dear Mr. Holmes [it said]:
              </TextNode>
              <TextNode noIndent>
                I have been recommended to you by my lawyers, but indeed the
                matter is so extraordinarily delicate that it is most difficult
                to discuss. It concerns a friend for whom I am acting. This
                gentleman married some five years ago a Peruvian lady, the
                daughter of a Peruvian merchant, whom he had met in connection
                with the importation of nitrates. The lady was very beautiful,
                but the fact of her foreign birth and of her alien religion
                always caused a separation of interests and of feelings between
                husband and wife, so that after a time his love may have cooled
                towards her and he may have come to regard their union as a
                mistake. He felt there were sides of her character which he
                could never explore or understand. This was the more painful as
                she was as loving a wife as a man could have—to all appearance
                absolutely devoted.
              </TextNode>
              <TextNode>
                Now for the point which I will make more plain when we meet.
                Indeed, this note is merely to give you a general idea of the
                situation and to ascertain whether you would care to interest
                yourself in the matter. The lady began to show some curious
                traits quite alien to her ordinarily sweet and gentle
                disposition. The gentleman had been married twice and he had one
                son by the first wife. This boy was now fifteen, a very charming
                and affectionate youth, though unhappily injured through an
                accident in childhood. Twice the wife was caught in the act of
                assaulting this poor lad in the most unprovoked way. Once she
                struck him with a stick and left a great weal on his arm.
              </TextNode>
              <TextNode>
                This was a small matter, however, compared with her conduct to
                her own child, a dear boy just under one year of age. On one
                occasion about a month ago this child had been left by its nurse
                for a few minutes. A loud cry from the baby, as of pain, called
                the nurse back. As she ran into the room she saw her employer,
                the lady, leaning over the baby and apparently biting his neck.
                There was a small wound in the neck from which a stream of blood
                had escaped. The nurse was so horrified that she wished to call
                the husband, but the lady implored her not to do so and actually
                gave her five pounds as a price for her silence. No explanation
                was ever given, and for the moment the matter was passed over.
              </TextNode>
              <TextNode>
                It left, however, a terrible impression upon the nurse's mind,
                and from that time she began to watch her mistress closely and
                to keep a closer guard upon the baby, whom she tenderly loved.
                It seemed to her that even as she watched the mother, so the
                mother watched her, and that every time she was compelled to
                leave the baby alone the mother was waiting to get at it. Day
                and night the nurse covered the child, and day and night the
                silent, watchful mother seemed to be lying in wait as a wolf
                waits for a lamb. It must read most incredible to you, and yet I
                beg you to take it seriously, for a child's life and a man's
                sanity may depend upon it.
              </TextNode>
              <TextNode>
                At last there came one dreadful day when the facts could no
                longer be concealed from the husband. The nurse's nerve had
                given way; she could stand the strain no longer, and she made a
                clean breast of it all to the man. To him it seemed as wild a
                tale as it may now seem to you. He knew his wife to be a loving
                wife, and, save for the assaults upon her stepson, a loving
                mother. Why, then, should she wound her own dear little baby? He
                told the nurse that she was dreaming, that her suspicions were
                those of a lunatic, and that such libels upon her mistress were
                not to be tolerated. While they were talking a sudden cry of
                pain was heard. Nurse and master rushed together to the nursery.
                Imagine his feelings, Mr. Holmes, as he saw his wife rise from a
                kneeling position beside the cot and saw blood upon the child's
                exposed neck and upon the sheet. With a cry of horror, he turned
                his wife's face to the light and saw blood all round her lips.
                It was she—she beyond all question—who had drunk the poor baby's
                blood.
              </TextNode>
              <TextNode>
                So the matter stands. She is now confined to her room. There has
                been no explanation. The husband is half demented. He knows, and
                I know, little of vampirism beyond the name. We had thought it
                was some wild tale of foreign parts. And yet here in the very
                heart of the English Sussex—well, all this can be discussed with
                you in the morning. Will you see me? Will you use your great
                powers in aiding a distracted man? If so, kindly wire to
                Ferguson, Cheeseman's, Lamberley, and I will be at your rooms by
                ten o'clock.
              </TextNode>
              <TextNode noIndent className='italic'>
                Yours faithfully,
              </TextNode>
              <TextNode noIndent className='italic'>
                Robert Ferguson.
              </TextNode>
              <TextNode noIndent>
                P. S. I believe your friend Watson played Rugby for Blackheath
                when I was three-quarter for Richmond. It is the only personal
                introduction which I can give.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Of course I remembered him,” said I as I laid down the letter.
              “Big Bob Ferguson, the finest three-quarter Richmond ever had. He
              was always a good-natured chap. It's like him to be so concerned
              over a friend's case.”
            </TextNode>

            <TextNode>
              Holmes looked at me thoughtfully and shook his head.
            </TextNode>

            <TextNode>
              “I never get your limits, Watson,” said he. “There are unexplored
              possibilities about you. Take a wire down, like a good fellow.
              ‘Will examine your case with pleasure.’”
            </TextNode>

            <TextNode>“Your case!”</TextNode>

            <TextNode>
              “We must not let him think that this agency is a home for the
              weak-minded. Of course it is his case. Send him that wire and let
              the matter rest till morning.”
            </TextNode>

            <TextNode>
              Promptly at ten o'clock next morning Ferguson strode into our
              room. I had remembered him as a long, slab-sided man with loose
              limbs and a fine turn of speed which had carried him round many an
              opposing back. There is surely nothing in life more painful than
              to meet the wreck of a fine athlete whom one has known in his
              prime. His great frame had fallen in, his flaxen hair was scanty,
              and his shoulders were bowed. I fear that I roused corresponding
              emotions in him.
            </TextNode>

            <TextNode>
              “Hullo, Watson,” said he, and his voice was still deep and hearty.
              “You don't look quite the man you did when I threw you over the
              ropes into the crowd at the Old Deer Park. I expect I have changed
              a bit also. But it's this last day or two that has aged me. I see
              by your telegram, Mr. Holmes, that it is no use my pretending to
              be anyone's deputy.”
            </TextNode>

            <TextNode>“It is simpler to deal direct,” said Holmes.</TextNode>

            <TextNode>
              “Of course it is. But you can imagine how difficult it is when you
              are speaking of the one woman whom you are bound to protect and
              help. What can I do? How am I to go to the police with such a
              story? And yet the kiddies have got to be protected. Is it
              madness, Mr. Holmes? Is it something in the blood? Have you any
              similar case in your experience? For God's sake, give me some
              advice, for I am at my wit's end.”
            </TextNode>

            <TextNode>
              “Very naturally, Mr. Ferguson. Now sit here and pull yourself
              together and give me a few clear answers. I can assure you that I
              am very far from being at my wit's end, and that I am confident we
              shall find some solution. First of all, tell me what steps you
              have taken. Is your wife still near the children?”
            </TextNode>

            <TextNode>
              “We had a dreadful scene. She is a most loving woman, Mr. Holmes.
              If ever a woman loved a man with all her heart and soul, she loves
              me. She was cut to the heart that I should have discovered this
              horrible, this incredible, secret. She would not even speak. She
              gave no answer to my reproaches, save to gaze at me with a sort of
              wild, despairing look in her eyes. Then she rushed to her room and
              locked herself in. Since then she has refused to see me. She has a
              maid who was with her before her marriage, Dolores by name—a
              friend rather than a servant. She takes her food to her.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Then the child is in no immediate danger?”
            </TextNode>

            <TextNode>
              “Mrs. Mason, the nurse, has sworn that she will not leave it night
              or day. I can absolutely trust her. I am more uneasy about poor
              little Jack, for, as I told you in my note, he has twice been
              assaulted by her.”
            </TextNode>

            <TextNode>“But never wounded?”</TextNode>
            <TextNode>
              “No, she struck him savagely. It is the more terrible as he is a
              poor little inoffensive cripple.” Ferguson's gaunt features
              softened as he spoke of his boy. “You would think that the dear
              lad's condition would soften anyone's heart. A fall in childhood
              and a twisted spine, Mr. Holmes. But the dearest, most loving
              heart within.”
            </TextNode>

            <TextNode>
              Holmes had picked up the letter of yesterday and was reading it
              over. “What other inmates are there in your house, Mr. Ferguson?”
            </TextNode>

            <TextNode>
              “Two servants who have not been long with us. One stable-hand,
              Michael, who sleeps in the house. My wife, myself, my boy Jack,
              baby, Dolores, and Mrs. Mason. That is all.”
            </TextNode>

            <TextNode>
              “I gather that you did not know your wife well at the time of your
              marriage?”
            </TextNode>

            <TextNode>“I had only known her a few weeks.”</TextNode>

            <TextNode>“How long had this maid Dolores been with her?”</TextNode>

            <TextNode>“Some years.”</TextNode>

            <TextNode>
              “Then your wife's character would really be better known by
              Dolores than by you?”
            </TextNode>

            <TextNode>“Yes, you may say so.”</TextNode>

            <TextNode>Holmes made a note.</TextNode>

            <TextNode>
              “I fancy,” said he, “that I may be of more use at Lamberley than
              here. It is eminently a case for personal investigation. If the
              lady remains in her room, our presence could not annoy or
              inconvenience her. Of course, we would stay at the inn.”
            </TextNode>
            <TextNode>Ferguson gave a gesture of relief.</TextNode>

            <TextNode>
              “It is what I hoped, Mr. Holmes. There is an excellent train at
              two from Victoria if you could come.”
            </TextNode>

            <TextNode>
              “Of course we could come. There is a lull at present. I can give
              you my undivided energies. Watson, of course, comes with us. But
              there are one or two points upon which I wish to be very sure
              before I start. This unhappy lady, as I understand it, has
              appeared to assault both the children, her own baby and your
              little son?”
            </TextNode>

            <TextNode>“That is so.”</TextNode>

            <TextNode>
              “But the assaults take different forms, do they not? She has
              beaten your son.”
            </TextNode>

            <TextNode>
              “Once with a stick and once very savagely with her hands.”
            </TextNode>

            <TextNode>
              “Did she give no explanation why she struck him?”
            </TextNode>

            <TextNode>
              “None save that she hated him. Again and again she said so.”
            </TextNode>

            <TextNode>
              “Well, that is not unknown among stepmothers. A posthumous
              jealousy, we will say. Is the lady jealous by nature?”
            </TextNode>

            <TextNode>
              “Yes, she is very jealous—jealous with all the strength of her
              fiery tropical love.”
            </TextNode>

            <TextNode>
              “But the boy—he is fifteen, I understand, and probably very
              developed in mind, since his body has been circumscribed in
              action. Did he give you no explanation of these assaults?”
            </TextNode>

            <TextNode>“No, he declared there was no reason.”</TextNode>

            <TextNode>“Were they good friends at other times?”</TextNode>

            <TextNode>“No, there was never any love between them.”</TextNode>

            <TextNode>“Yet you say he is affectionate?”</TextNode>

            <TextNode>
              “Never in the world could there be so devoted a son. My life is
              his life. He is absorbed in what I say or do.”
            </TextNode>

            <TextNode>
              Once again Holmes made a note. For some time he sat lost in
              thought.
            </TextNode>

            <TextNode>
              “No doubt you and the boy were great comrades before this second
              marriage. You were thrown very close together, were you not?”
            </TextNode>

            <TextNode>“Very much so.”</TextNode>

            <TextNode>
              “And the boy, having so affectionate a nature, was devoted, no
              doubt, to the memory of his mother?”
            </TextNode>

            <TextNode>“Most devoted.”</TextNode>

            <TextNode>
              “He would certainly seem to be a most interesting lad. There is
              one other point about these assaults. Were the strange attacks
              upon the baby and the assaults upon your son at the same period?”
            </TextNode>

            <TextNode>
              “In the first case it was so. It was as if some frenzy had seized
              her, and she had vented her rage upon both. In the second case it
              was only Jack who suffered. Mrs. Mason had no complaint to make
              about the baby.”
            </TextNode>

            <TextNode>“That certainly complicates matters.”</TextNode>

            <TextNode>“I don't quite follow you, Mr. Holmes.”</TextNode>

            <TextNode>
              “Possibly not. One forms provisional theories and waits for time
              or fuller knowledge to explode them. A bad habit, Mr. Ferguson,
              but human nature is weak. I fear that your old friend here has
              given an exaggerated view of my scientific methods. However, I
              will only say at the present stage that your problem does not
              appear to me to be insoluble, and that you may expect to find us
              at Victoria at two o'clock.”
            </TextNode>

            <TextNode>
              It was evening of a dull, foggy November day when, having left our
              bags at the Chequers, Lamberley, we drove through the Sussex clay
              of a long winding lane and finally reached the isolated and
              ancient farmhouse in which Ferguson dwelt. It was a large,
              straggling building, very old in the centre, very new at the wings
              with towering Tudor chimneys and a lichen-spotted, high-pitched
              roof of Horsham slabs. The doorsteps were worn into curves, and
              the ancient tiles which lined the porch were marked with the rebus
              of a cheese and a man after the original builder. Within, the
              ceilings were corrugated with heavy oaken beams, and the uneven
              floors sagged into sharp curves. An odour of age and decay
              pervaded the whole crumbling building.
            </TextNode>

            <TextNode>
              There was one very large central room into which Ferguson led us.
              Here, in a huge old-fashioned fireplace with an iron screen behind
              it dated 1670, there blazed and spluttered a splendid log fire.
            </TextNode>

            <TextNode>
              The room, as I gazed round, was a most singular mixture of dates
              and of places. The half-panelled walls may well have belonged to
              the original yeoman farmer of the seventeenth century. They were
              ornamented, however, on the lower part by a line of well-chosen
              modern water-colours; while above, where yellow plaster took the
              place of oak, there was hung a fine collection of South American
              utensils and weapons, which had been brought, no doubt, by the
              Peruvian lady upstairs. Holmes rose, with that quick curiosity
              which sprang from his eager mind, and examined them with some
              care. He returned with his eyes full of thought.
            </TextNode>

            <TextNode>“Hullo!” he cried. “Hullo!”</TextNode>

            <TextNode>
              A spaniel had lain in a basket in the corner. It came slowly
              forward towards its master, walking with difficulty. Its hind legs
              moved irregularly and its tail was on the ground. It licked
              Ferguson's hand.
            </TextNode>

            <TextNode>“What is it, Mr. Holmes?”</TextNode>

            <TextNode>“The dog. What's the matter with it?”</TextNode>

            <TextNode>
              “That's what puzzled the vet. A sort of paralysis. Spinal
              meningitis, he thought. But it is passing. He'll be all right
              soon—won't you, Carlo?”
            </TextNode>

            <TextNode>
              A shiver of assent passed through the drooping tail. The dog's
              mournful eyes passed from one of us to the other. He knew that we
              were discussing his case.
            </TextNode>

            <TextNode>“Did it come on suddenly?”</TextNode>

            <TextNode>“In a single night.”</TextNode>

            <TextNode>“How long ago?”</TextNode>

            <TextNode>“It may have been four months ago.”</TextNode>

            <TextNode>“Very remarkable. Very suggestive.”</TextNode>

            <TextNode>“What do you see in it, Mr. Holmes?”</TextNode>

            <TextNode>“A confirmation of what I had already thought.”</TextNode>

            <TextNode>
              “For God's sake, what do you think, Mr. Holmes? It may be a mere
              intellectual puzzle to you, but it is life and death to me! My
              wife a would-be murderer—my child in constant danger! Don't play
              with me, Mr. Holmes. It is too terribly serious.”
            </TextNode>

            <TextNode>
              The big Rugby three-quarter was trembling all over. Holmes put his
              hand soothingly upon his arm.
            </TextNode>

            <TextNode>
              “I fear that there is pain for you, Mr. Ferguson, whatever the
              solution may be,” said he. “I would spare you all I can. I cannot
              say more for the instant, but before I leave this house I hope I
              may have something definite.”
            </TextNode>

            <TextNode>
              “Please God you may! If you will excuse me, gentlemen, I will go
              up to my wife's room and see if there has been any change.”
            </TextNode>

            <TextNode>
              He was away some minutes, during which Holmes resumed his
              examination of the curiosities upon the wall. When our host
              returned it was clear from his downcast face that he had made no
              progress. He brought with him a tall, slim, brown-faced girl.
            </TextNode>

            <TextNode>
              “The tea is ready, Dolores,” said Ferguson. “See that your
              mistress has everything she can wish.”
            </TextNode>

            <TextNode>
              “She verra ill,” cried the girl, looking with indignant eyes at
              her master. “She no ask for food. She verra ill. She need doctor.
              I frightened stay alone with her without doctor.”
            </TextNode>

            <TextNode>
              Ferguson looked at me with a question in his eyes.
            </TextNode>

            <TextNode>“I should be so glad if I could be of use.”</TextNode>

            <TextNode>“Would your mistress see Dr. Watson?”</TextNode>

            <TextNode>“I take him. I no ask leave. She needs doctor.”</TextNode>

            <TextNode>“Then I'll come with you at once.”</TextNode>

            <TextNode>
              I followed the girl, who was quivering with strong emotion, up the
              staircase and down an ancient corridor. At the end was an
              iron-clamped and massive door. It struck me as I looked at it that
              if Ferguson tried to force his way to his wife he would find it no
              easy matter. The girl drew a key from her pocket, and the heavy
              oaken planks creaked upon their old hinges. I passed in and she
              swiftly followed, fastening the door behind her.
            </TextNode>

            <TextNode>
              On the bed a woman was lying who was clearly in a high fever. She
              was only half conscious, but as I entered she raised a pair of
              frightened but beautiful eyes and glared at me in apprehension.
              Seeing a stranger, she appeared to be relieved and sank back with
              a sigh upon the pillow. I stepped up to her with a few reassuring
              words, and she lay still while I took her pulse and temperature.
              Both were high, and yet my impression was that the condition was
              rather that of mental and nervous excitement than of any actual
              seizure.
            </TextNode>

            <TextNode>
              “She lie like that one day, two day. I 'fraid she die,” said the
              girl.
            </TextNode>

            <TextNode>
              The woman turned her flushed and handsome face towards me.
            </TextNode>

            <TextNode>“Where is my husband?”</TextNode>

            <TextNode>“He is below and would wish to see you.”</TextNode>

            <TextNode>
              “I will not see him. I will not see him.” Then she seemed to
              wander off into delirium. “A fiend! A fiend! Oh, what shall I do
              with this devil?”
            </TextNode>

            <TextNode>“Can I help you in any way?”</TextNode>

            <TextNode>
              “No. No one can help. It is finished. All is destroyed. Do what I
              will, all is destroyed.”
            </TextNode>

            <TextNode>
              The woman must have some strange delusion. I could not see honest
              Bob Ferguson in the character of fiend or devil.
            </TextNode>

            <TextNode>
              “Madame,” I said, “your husband loves you dearly. He is deeply
              grieved at this happening.”
            </TextNode>

            <TextNode>Again she turned on me those glorious eyes.</TextNode>

            <TextNode>
              “He loves me. Yes. But do I not love him? Do I not love him even
              to sacrifice myself rather than break his dear heart? That is how
              I love him. And yet he could think of me—he could speak of me so.”
            </TextNode>

            <TextNode>
              “He is full of grief, but he cannot understand.”
            </TextNode>

            <TextNode>
              “No, he cannot understand. But he should trust.”
            </TextNode>

            <TextNode>“Will you not see him?” I suggested.</TextNode>

            <TextNode>
              “No, no, I cannot forget those terrible words nor the look upon
              his face. I will not see him. Go now. You can do nothing for me.
              Tell him only one thing. I want my child. I have a right to my
              child. That is the only message I can send him.” She turned her
              face to the wall and would say no more.
            </TextNode>

            <TextNode>
              I returned to the room downstairs, where Ferguson and Holmes still
              sat by the fire. Ferguson listened moodily to my account of the
              interview.
            </TextNode>

            <TextNode>
              “How can I send her the child?” he said. “How do I know what
              strange impulse might come upon her? How can I ever forget how she
              rose from beside it with its blood upon her lips?” He shuddered at
              the recollection. “The child is safe with Mrs. Mason, and there he
              must remain.”
            </TextNode>

            <TextNode>
              A smart maid, the only modern thing which we had seen in the
              house, had brought in some tea. As she was serving it the door
              opened and a youth entered the room. He was a remarkable lad,
              pale-faced and fair-haired, with excitable light blue eyes which
              blazed into a sudden flame of emotion and joy as they rested upon
              his father. He rushed forward and threw his arms round his neck
              with the abandon of a loving girl.
            </TextNode>

            <TextNode>
              “Oh, daddy,” he cried, “I did not know that you were due yet. I
              should have been here to meet you. Oh, I am so glad to see you!”
            </TextNode>

            <TextNode>
              Ferguson gently disengaged himself from the embrace with some
              little show of embarrassment.
            </TextNode>

            <TextNode>
              “Dear old chap,” said he, patting the flaxen head with a very
              tender hand. “I came early because my friends, Mr. Holmes and Dr.
              Watson, have been persuaded to come down and spend an evening with
              us.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page320;
