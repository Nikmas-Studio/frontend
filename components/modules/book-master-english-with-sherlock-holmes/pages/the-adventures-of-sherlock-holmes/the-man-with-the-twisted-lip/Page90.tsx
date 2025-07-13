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

function Page90({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE MAN WITH&nbsp;THE&nbsp;TWISTED&nbsp;LIP'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Isa Whitney, brother of the late Elias Whitney, D.D., Principal of
              the Theological College of St. George's, was much addicted to
              opium. The habit grew upon him, as I understand, from some foolish
              freak when he was at college; for having read De Quincey's
              description of his dreams and sensations, he had drenched his
              tobacco with laudanum in an attempt to produce the same effects.
              He found, as so many more have done, that the practice is easier
              to attain than to get rid of, and for many years he continued to
              be a slave to the drug, an object of mingled horror and pity to
              his friends and relatives. I can see him now, with yellow, pasty
              face, drooping lids, and pin-point pupils, all huddled in a chair,
              the wreck and ruin of a noble man.
            </TextNode>

            <TextNode>
              One night—it was in June, '89—there came a ring to my bell, about
              the hour when a man gives his first yawn and glances at the clock.
              I sat up in my chair, and my wife laid her needle-work down in her
              lap and made a little face of disappointment.
            </TextNode>

            <TextNode>“A patient!” said she. “You'll have to go out.”</TextNode>

            <TextNode>
              I groaned, for I was newly come back from a weary day.
            </TextNode>

            <TextNode>
              We heard the door open, a few hurried words, and then quick steps
              upon the linoleum. Our own door flew open, and a lady, clad in
              some dark-coloured stuff, with a black veil, entered the room.
            </TextNode>

            <TextNode>
              “You will excuse my calling so late,” she began, and then,
              suddenly losing her self-control, she ran forward, threw her arms
              about my wife's neck, and sobbed upon her shoulder. “Oh, I'm in
              such trouble!” she cried; “I do so want a little help.”
            </TextNode>

            <TextNode>
              “Why,” said my wife, pulling up her veil, “it is Kate Whitney. How
              you startled me, Kate! I had not an idea who you were when you
              came in.”
            </TextNode>

            <TextNode>
              “I didn't know what to do, so I came straight to you.” That was
              always the way. Folk who were in grief came to my wife like birds
              to a light-house.
            </TextNode>

            <TextNode>
              “It was very sweet of you to come. Now, you must have some wine
              and water, and sit here comfortably and tell us all about it. Or
              should you rather that I sent James off to bed?”
            </TextNode>

            <TextNode>
              “Oh, no, no! I want the doctor's advice and help, too. It's about
              Isa. He has not been home for two days. I am so frightened about
              him!”
            </TextNode>

            <TextNode>
              It was not the first time that she had spoken to us of her
              husband's trouble, to me as a doctor, to my wife as an old friend
              and school companion. We soothed and comforted her by such words
              as we could find. Did she know where her husband was? Was it
              possible that we could bring him back to her?
            </TextNode>

            <TextNode>
              It seems that it was. She had the surest information that of late
              he had, when the fit was on him, made use of an opium den in the
              farthest east of the City. Hitherto his orgies had always been
              confined to one day, and he had come back, twitching and
              shattered, in the evening. But now the spell had been upon him
              eight-and-forty hours, and he lay there, doubtless among the dregs
              of the docks, breathing in the poison or sleeping off the effects.
              There he was to be found, she was sure of it, at the Bar of Gold,
              in Upper Swandam Lane. But what was she to do? How could she, a
              young and timid woman, make her way into such a place and pluck
              her husband out from among the ruffians who surrounded him?
            </TextNode>

            <TextNode>
              There was the case, and of course there was but one way out of it.
              Might I not escort her to this place? And then, as a second
              thought, why should she come at all? I was Isa Whitney's medical
              adviser, and as such I had influence over him. I could manage it
              better if I were alone. I promised her on my word that I would
              send him home in a cab within two hours if he were indeed at the
              address which she had given me. And so in ten minutes I had left
              my armchair and cheery sitting-room behind me, and was speeding
              eastward in a hansom on a strange errand, as it seemed to me at
              the time, though the future only could show how strange it was to
              be.
            </TextNode>

            <TextNode>
              But there was no great difficulty in the first stage of my
              adventure. Upper Swandam Lane is a vile alley lurking behind the
              high wharves which line the north side of the river to the east of
              London Bridge. Between a slop-shop and a gin-shop, approached by a
              steep flight of steps leading down to a black gap like the mouth
              of a cave, I found the den of which I was in search. Ordering my
              cab to wait, I passed down the steps, worn hollow in the centre by
              the ceaseless tread of drunken feet; and by the light of a
              flickering oil-lamp above the door I found the latch and made my
              way into a long, low room, thick and heavy with the brown opium
              smoke, and terraced with wooden berths, like the forecastle of an
              emigrant ship.
            </TextNode>

            <TextNode>
              Through the gloom one could dimly catch a glimpse of bodies lying
              in strange fantastic poses, bowed shoulders, bent knees, heads
              thrown back, and chins pointing upward, with here and there a
              dark, lack-lustre eye turned upon the newcomer. Out of the black
              shadows there glimmered little red circles of light, now bright,
              now faint, as the burning poison waxed or waned in the bowls of
              the metal pipes. The most lay silent, but some muttered to
              themselves, and others talked together in a strange, low,
              monotonous voice, their conversation coming in gushes, and then
              suddenly tailing off into silence, each mumbling out his own
              thoughts and paying little heed to the words of his neighbour. At
              the farther end was a small brazier of burning charcoal, beside
              which on a three-legged wooden stool there sat a tall, thin old
              man, with his jaw resting upon his two fists, and his elbows upon
              his knees, staring into the fire.
            </TextNode>

            <TextNode>
              As I entered, a sallow Malay attendant had hurried up with a pipe
              for me and a supply of the drug, beckoning me to an empty berth.
            </TextNode>

            <TextNode>
              “Thank you. I have not come to stay,” said I. “There is a friend
              of mine here, Mr. Isa Whitney, and I wish to speak with him.”
            </TextNode>

            <TextNode>
              There was a movement and an exclamation from my right, and peering
              through the gloom, I saw Whitney, pale, haggard, and unkempt,
              staring out at me.
            </TextNode>

            <TextNode>
              “My God! It's Watson,” said he. He was in a pitiable state of
              reaction, with every nerve in a twitter. “I say, Watson, what
              o'clock is it?”
            </TextNode>

            <TextNode>“Nearly eleven.”</TextNode>

            <TextNode>“Of what day?”</TextNode>

            <TextNode>“Of Friday, June 19th.”</TextNode>

            <TextNode>
              “Good heavens! I thought it was Wednesday. It is Wednesday. What
              d'you want to frighten a chap for?” He sank his face onto his arms
              and began to sob in a high treble key.
            </TextNode>

            <TextNode>
              “I tell you that it is Friday, man. Your wife has been waiting
              this two days for you. You should be ashamed of yourself!”
            </TextNode>

            <TextNode>
              “So I am. But you've got mixed, Watson, for I have only been here
              a few hours, three pipes, four pipes—I forget how many. But I'll
              go home with you. I wouldn't frighten Kate—poor little Kate. Give
              me your hand! Have you a cab?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Yes, I have one waiting.”</TextNode>

            <TextNode>
              “Then I shall go in it. But I must owe something. Find what I owe,
              Watson. I am all off colour. I can do nothing for myself.”
            </TextNode>

            <TextNode>
              I walked down the narrow passage between the double row of
              sleepers, holding my breath to keep out the vile, stupefying fumes
              of the drug, and looking about for the manager. As I passed the
              tall man who sat by the brazier I felt a sudden pluck at my skirt,
              and a low voice whispered, “Walk past me, and then look back at
              me.” The words fell quite distinctly upon my ear. I glanced down.
              They could only have come from the old man at my side, and yet he
              sat now as absorbed as ever, very thin, very wrinkled, bent with
              age, an opium pipe dangling down from between his knees, as though
              it had dropped in sheer lassitude from his fingers. I took two
              steps forward and looked back. It took all my self-control to
              prevent me from breaking out into a cry of astonishment. He had
              turned his back so that none could see him but I. His form had
              filled out, his wrinkles were gone, the dull eyes had regained
              their fire, and there, sitting by the fire and grinning at my
              surprise, was none other than Sherlock Holmes. He made a slight
              motion to me to approach him, and instantly, as he turned his face
              half round to the company once more, subsided into a doddering,
              loose-lipped senility.
            </TextNode>

            <TextNode>
              “Holmes!” I whispered, “what on earth are you doing in this den?”
            </TextNode>

            <TextNode>
              “As low as you can,” he answered; “I have excellent ears. If you
              would have the great kindness to get rid of that sottish friend of
              yours I should be exceedingly glad to have a little talk with
              you.”
            </TextNode>

            <TextNode>“I have a cab outside.”</TextNode>

            <TextNode>
              “Then pray send him home in it. You may safely trust him, for he
              appears to be too limp to get into any mischief. I should
              recommend you also to send a note by the cabman to your wife to
              say that you have thrown in your lot with me. If you will wait
              outside, I shall be with you in five minutes.”
            </TextNode>

            <TextNode>
              It was difficult to refuse any of Sherlock Holmes' requests, for
              they were always so exceedingly definite, and put forward with
              such a quiet air of mastery. I felt, however, that when Whitney
              was once confined in the cab my mission was practically
              accomplished; and for the rest, I could not wish anything better
              than to be associated with my friend in one of those singular
              adventures which were the normal condition of his existence. In a
              few minutes I had written my note, paid Whitney's bill, led him
              out to the cab, and seen him driven through the darkness. In a
              very short time a decrepit figure had emerged from the opium den,
              and I was walking down the street with Sherlock Holmes. For two
              streets he shuffled along with a bent back and an uncertain foot.
              Then, glancing quickly round, he straightened himself out and
              burst into a hearty fit of laughter.
            </TextNode>

            <TextNode>
              “I suppose, Watson,” said he, “that you imagine that I have added
              opium-smoking to cocaine injections, and all the other little
              weaknesses on which you have favoured me with your medical views.”
            </TextNode>

            <TextNode>“I was certainly surprised to find you there.”</TextNode>

            <TextNode>“But not more so than I to find you.”</TextNode>

            <TextNode>“I came to find a friend.”</TextNode>

            <TextNode>“And I to find an enemy.”</TextNode>

            <TextNode>“An enemy?”</TextNode>

            <TextNode>
              “Yes; one of my natural enemies, or, shall I say, my natural prey.
              Briefly, Watson, I am in the midst of a very remarkable inquiry,
              and I have hoped to find a clue in the incoherent ramblings of
              these sots, as I have done before now. Had I been recognised in
              that den my life would not have been worth an hour's purchase; for
              I have used it before now for my own purposes, and the rascally
              Lascar who runs it has sworn to have vengeance upon me. There is a
              trap-door at the back of that building, near the corner of Paul's
              Wharf, which could tell some strange tales of what has passed
              through it upon the moonless nights.”
            </TextNode>

            <TextNode>“What! You do not mean bodies?”</TextNode>

            <TextNode>
              “Ay, bodies, Watson. We should be rich men if we had £1000 for
              every poor devil who has been done to death in that den. It is the
              vilest murder-trap on the whole riverside, and I fear that Neville
              St. Clair has entered it never to leave it more. But our trap
              should be here.” He put his two forefingers between his teeth and
              whistled shrilly—a signal which was answered by a similar whistle
              from the distance, followed shortly by the rattle of wheels and
              the clink of horses' hoofs.
            </TextNode>

            <TextNode>
              “Now, Watson,” said Holmes, as a tall dog-cart dashed up through
              the gloom, throwing out two golden tunnels of yellow light from
              its side lanterns. “You'll come with me, won't you?”
            </TextNode>

            <TextNode>“If I can be of use.”</TextNode>

            <TextNode>
              “Oh, a trusty comrade is always of use; and a chronicler still
              more so. My room at The Cedars is a double-bedded one.”
            </TextNode>

            <TextNode>“The Cedars?”</TextNode>

            <TextNode>
              “Yes; that is Mr. St. Clair's house. I am staying there while I
              conduct the inquiry.”
            </TextNode>

            <TextNode>“Where is it, then?”</TextNode>

            <TextNode>
              “Near Lee, in Kent. We have a seven-mile drive before us.”
            </TextNode>

            <TextNode>“But I am all in the dark.”</TextNode>

            <TextNode>
              “Of course you are. You'll know all about it presently. Jump up
              here. All right, John; we shall not need you. Here's half a crown.
              Look out for me to-morrow, about eleven. Give her her head. So
              long, then!”
            </TextNode>

            <TextNode>
              He flicked the horse with his whip, and we dashed away through the
              endless succession of sombre and deserted streets, which widened
              gradually, until we were flying across a broad balustraded bridge,
              with the murky river flowing sluggishly beneath us. Beyond lay
              another dull wilderness of bricks and mortar, its silence broken
              only by the heavy, regular footfall of the policeman, or the songs
              and shouts of some belated party of revellers. A dull wrack was
              drifting slowly across the sky, and a star or two twinkled dimly
              here and there through the rifts of the clouds. Holmes drove in
              silence, with his head sunk upon his breast, and the air of a man
              who is lost in thought, while I sat beside him, curious to learn
              what this new quest might be which seemed to tax his powers so
              sorely, and yet afraid to break in upon the current of his
              thoughts. We had driven several miles, and were beginning to get
              to the fringe of the belt of suburban villas, when he shook
              himself, shrugged his shoulders, and lit up his pipe with the air
              of a man who has satisfied himself that he is acting for the best.
            </TextNode>

            <TextNode>
              “You have a grand gift of silence, Watson,” said he. “It makes you
              quite invaluable as a companion. 'Pon my word, it is a great thing
              for me to have someone to talk to, for my own thoughts are not
              over-pleasant. I was wondering what I should say to this dear
              little woman to-night when she meets me at the door.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page90;
