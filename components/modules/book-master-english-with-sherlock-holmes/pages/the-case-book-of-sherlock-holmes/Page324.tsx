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

function Page324({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;THREE&nbsp;GARRIDEBS'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “None at all. You are most welcome. The place will, of course, be
              shut up, but Mrs. Saunders is in the basement up to four o'clock
              and would let you in with her key.”
            </TextNode>

            <TextNode>
              Well, I happen to be clear to-morrow afternoon. If you would say a
              word to Mrs. Saunders it would be quite in order. By the way, who
              is your house-agent?”
            </TextNode>

            <TextNode>Our client was amazed at the sudden question.</TextNode>

            <TextNode>
              “Holloway and Steele, in the Edgware Road. But why?”
            </TextNode>

            <TextNode>
              “I am a bit of an archaeologist myself when it comes to houses,”
              said Holmes, laughing. “I was wondering if this was Queen Anne or
              Georgian.”
            </TextNode>

            <TextNode>“Georgian, beyond doubt.”</TextNode>

            <TextNode>
              “Really. I should have thought a little earlier. However, it is
              easily ascertained. Well, good-bye, Mr. Garrideb, and may you have
              every success in your Birmingham journey.”
            </TextNode>

            <TextNode>
              The house-agent's was close by, but we found that it was closed
              for the day, so we made our way back to Baker Street. It was not
              till after dinner that Holmes reverted to the subject.
            </TextNode>

            <TextNode>
              “Our little problem draws to a close,” said he. “No doubt you have
              outlined the solution in your own mind.”
            </TextNode>

            <TextNode>“I can make neither head nor tail of it.”</TextNode>

            <TextNode>
              “The head is surely clear enough and the tail we should see
              to-morrow. Did you notice nothing curious about that
              advertisement?”
            </TextNode>

            <TextNode>“I saw that the word ‘plough’ was misspelt.”</TextNode>

            <TextNode>
              “Oh, you did notice that, did you? Come, Watson, you improve all
              the time. Yes, it was bad English but good American. The printer
              had set it up as received. Then the buckboards. That is American
              also. And artesian wells are commoner with them than with us. It
              was a typical American advertisement, but purporting to be from an
              English firm. What do you make of that?”
            </TextNode>

            <TextNode>
              “I can only suppose that this American lawyer put it in himself.
              What his object was I fail to understand.”
            </TextNode>

            <TextNode>
              “Well, there are alternative explanations. Anyhow, he wanted to
              get this good old fossil up to Birmingham. That is very clear. I
              might have told him that he was clearly going on a wild-goose
              chase, but, on second thoughts, it seemed better to clear the
              stage by letting him go. To-morrow, Watson—well, to-morrow will
              speak for itself.”
            </TextNode>

            <TextNode>
              Holmes was up and out early. When he returned at lunchtime I
              noticed that his face was very grave.
            </TextNode>

            <TextNode>
              “This is a more serious matter than I had expected, Watson,” said
              he. “It is fair to tell you so, though I know it will only be an
              additional reason to you for running your head into danger. I
              should know my Watson by now. But there is danger, and you should
              know it.”
            </TextNode>

            <TextNode>
              “Well, it is not the first we have shared, Holmes. I hope it may
              not be the last. What is the particular danger this time?”
            </TextNode>

            <TextNode>
              “We are up against a very hard case. I have identified Mr. John
              Garrideb, Counsellor at Law. He is none other than ‘Killer’ Evans,
              of sinister and murderous reputation.”
            </TextNode>

            <TextNode>“I fear I am none the wiser.”</TextNode>

            <TextNode>
              “Ah, it is not part of your profession to carry about a portable
              Newgate Calendar in your memory. I have been down to see friend
              Lestrade at the Yard. There may be an occasional want of
              imaginative intuition down there, but they lead the world for
              thoroughness and method. I had an idea that we might get on the
              track of our American friend in their records. Sure enough, I
              found his chubby face smiling up at me from the rogues' portrait
              gallery. ‘James Winter, alias Morecroft, alias Killer Evans,’ was
              the inscription below.” Holmes drew an envelope from his pocket.
              “I scribbled down a few points from his dossier: Aged forty-four.
              Native of Chicago. Known to have shot three men in the States.
              Escaped from penitentiary through political influence. Came to
              London in 1893. Shot a man over cards in a night-club in the
              Waterloo Road in January, 1895. Man died, but he was shown to have
              been the aggressor in the row. Dead man was identified as Rodger
              Prescott, famous as forger and coiner in Chicago. Killer Evans
              released in 1901. Has been under police supervision since, but so
              far as known has led an honest life. Very dangerous man, usually
              carries arms and is prepared to use them. That is our bird,
              Watson—a sporting bird, as you must admit.”
            </TextNode>

            <TextNode>“But what is his game?”</TextNode>

            <TextNode>
              “Well, it begins to define itself. I have been to the
              house-agent's. Our client, as he told us, has been there five
              years. It was unlet for a year before then. The previous tenant
              was a gentleman at large named Waldron. Waldron's appearance was
              well remembered at the office. He had suddenly vanished and
              nothing more been heard of him. He was a tall, bearded man with
              very dark features. Now, Prescott, the man whom Killer Evans had
              shot, was, according to Scotland Yard, a tall, dark man with a
              beard. As a working hypothesis, I think we may take it that
              Prescott, the American criminal, used to live in the very room
              which our innocent friend now devotes to his museum. So at last we
              get a link, you see.”
            </TextNode>

            <TextNode>“And the next link?”</TextNode>

            <TextNode>“Well, we must go now and look for that.”</TextNode>

            <TextNode>
              He took a revolver from the drawer and handed it to me.
            </TextNode>

            <TextNode>
              “I have my old favourite with me. If our Wild West friend tries to
              live up to his nickname, we must be ready for him. I'll give you
              an hour for a siesta, Watson, and then I think it will be time for
              our Ryder Street adventure.”
            </TextNode>

            <TextNode>
              It was just four o'clock when we reached the curious apartment of
              Nathan Garrideb. Mrs. Saunders, the caretaker, was about to leave,
              but she had no hesitation in admitting us, for the door shut with
              a spring lock, and Holmes promised to see that all was safe before
              we left. Shortly afterwards the outer door closed, her bonnet
              passed the bow window, and we knew that we were alone in the lower
              floor of the house. Holmes made a rapid examination of the
              premises. There was one cupboard in a dark corner which stood out
              a little from the wall. It was behind this that we eventually
              crouched while Holmes in a whisper outlined his intentions.
            </TextNode>

            <TextNode>
              “He wanted to get our amiable friend out of his room—that is very
              clear, and, as the collector never went out, it took some planning
              to do it. The whole of this Garrideb invention was apparently for
              no other end. I must say, Watson, that there is a certain devilish
              ingenuity about it, even if the queer name of the tenant did give
              him an opening which he could hardly have expected. He wove his
              plot with remarkable cunning.”
            </TextNode>

            <TextNode>“But what did he want?”</TextNode>

            <TextNode>
              “Well, that is what we are here to find out. It has nothing
              whatever to do with our client, so far as I can read the
              situation. It is something connected with the man he murdered—the
              man who may have been his confederate in crime. There is some
              guilty secret in the room. That is how I read it. At first I
              thought our friend might have something in his collection more
              valuable than he knew—something worth the attention of a big
              criminal. But the fact that Rodger Prescott of evil memory
              inhabited these rooms points to some deeper reason. Well, Watson,
              we can but possess our souls in patience and see what the hour may
              bring.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              That hour was not long in striking. We crouched closer in the
              shadow as we heard the outer door open and shut. Then came the
              sharp, metallic snap of a key, and the American was in the room.
              He closed the door softly behind him, took a sharp glance around
              him to see that all was safe, threw off his overcoat, and walked
              up to the central table with the brisk manner of one who knows
              exactly what he has to do and how to do it. He pushed the table to
              one side, tore up the square of carpet on which it rested, rolled
              it completely back, and then, drawing a jemmy from his inside
              pocket, he knelt down and worked vigorously upon the floor.
              Presently we heard the sound of sliding boards, and an instant
              later a square had opened in the planks. Killer Evans struck a
              match, lit a stump of candle, and vanished from our view.
            </TextNode>

            <TextNode>
              Clearly our moment had come. Holmes touched my wrist as a signal,
              and together we stole across to the open trap-door. Gently as we
              moved, however, the old floor must have creaked under our feet,
              for the head of our American, peering anxiously round, emerged
              suddenly from the open space. His face turned upon us with a glare
              of baffled rage, which gradually softened into a rather shamefaced
              grin as he realized that two pistols were pointed at his head.
            </TextNode>

            <TextNode>
              “Well, well!” said he coolly as he scrambled to the surface. “I
              guess you have been one too many for me, Mr. Holmes. Saw through
              my game, I suppose, and played me for a sucker from the first.
              Well, sir, I hand it to you; you have me beat and—”
            </TextNode>

            <TextNode>
              In an instant he had whisked out a revolver from his breast and
              had fired two shots. I felt a sudden hot sear as if a red-hot iron
              had been pressed to my thigh. There was a crash as Holmes's pistol
              came down on the man's head. I had a vision of him sprawling upon
              the floor with blood running down his face while Holmes rummaged
              him for weapons. Then my friend's wiry arms were round me, and he
              was leading me to a chair.
            </TextNode>

            <TextNode>
              “You're not hurt, Watson? For God's sake, say that you are not
              hurt!”
            </TextNode>

            <TextNode>
              It was worth a wound—it was worth many wounds—to know the depth of
              loyalty and love which lay behind that cold mask. The clear, hard
              eyes were dimmed for a moment, and the firm lips were shaking. For
              the one and only time I caught a glimpse of a great heart as well
              as of a great brain. All my years of humble but single-minded
              service culminated in that moment of revelation.
            </TextNode>

            <TextNode>“It's nothing, Holmes. It's a mere scratch.”</TextNode>

            <TextNode>
              He had ripped up my trousers with his pocket-knife.
            </TextNode>

            <TextNode>
              “You are right,” he cried with an immense sigh of relief. “It is
              quite superficial.” His face set like flint as he glared at our
              prisoner, who was sitting up with a dazed face. “By the Lord, it
              is as well for you. If you had killed Watson, you would not have
              got out of this room alive. Now, sir, what have you to say for
              yourself?”
            </TextNode>

            <TextNode>
              He had nothing to say for himself. He only sat and scowled. I
              leaned on Holmes's arm, and together we looked down into the small
              cellar which had been disclosed by the secret flap. It was still
              illuminated by the candle which Evans had taken down with him. Our
              eyes fell upon a mass of rusted machinery, great rolls of paper, a
              litter of bottles, and, neatly arranged upon a small table, a
              number of neat little bundles.
            </TextNode>

            <TextNode>
              “A printing press—a counterfeiter's outfit,” said Holmes.
            </TextNode>

            <TextNode>
              “Yes, sir,” said our prisoner, staggering slowly to his feet and
              then sinking into the chair. “The greatest counterfeiter London
              ever saw. That's Prescott's machine, and those bundles on the
              table are two thousand of Prescott's notes worth a hundred each
              and fit to pass anywhere. Help yourselves, gentlemen. Call it a
              deal and let me beat it.”
            </TextNode>

            <TextNode>Holmes laughed.</TextNode>

            <TextNode>
              “We don't do things like that, Mr. Evans. There is no bolt-hole
              for you in this country. You shot this man Prescott, did you not?”
            </TextNode>

            <TextNode>
              “Yes, sir, and got five years for it, though it was he who pulled
              on me. Five years—when I should have had a medal the size of a
              soup plate. No living man could tell a Prescott from a Bank of
              England, and if I hadn't put him out he would have flooded London
              with them. I was the only one in the world who knew where he made
              them. Can you wonder that I wanted to get to the place? And can
              you wonder that when I found this crazy boob of a bug-hunter with
              the queer name squatting right on the top of it, and never
              quitting his room, I had to do the best I could to shift him?
              Maybe I would have been wiser if I had put him away. It would have
              been easy enough, but I'm a soft-hearted guy that can't begin
              shooting unless the other man has a gun also. But say, Mr. Holmes,
              what have I done wrong, anyhow? I've not used this plant. I've not
              hurt this old stiff. Where do you get me?”
            </TextNode>

            <TextNode>
              “Only attempted murder, so far as I can see,” said Holmes. “But
              that's not our job. They take that at the next stage. What we
              wanted at present was just your sweet self. Please give the Yard a
              call, Watson. It won't be entirely unexpected.”
            </TextNode>

            <TextNode>
              So those were the facts about Killer Evans and his remarkable
              invention of the three Garridebs. We heard later that our poor old
              friend never got over the shock of his dissipated dreams. When his
              castle in the air fell down, it buried him beneath the ruins. He
              was last heard of at a nursing-home in Brixton. It was a glad day
              at the Yard when the Prescott outfit was discovered, for, though
              they knew that it existed, they had never been able, after the
              death of the man, to find out where it was. Evans had indeed done
              great service and caused several worthy C. I. D. men to sleep the
              sounder, for the counterfeiter stands in a class by himself as a
              public danger. They would willingly have subscribed to that
              soup-plate medal of which the criminal had spoken, but an
              unappreciative bench took a less favourable view, and the Killer
              returned to those shades from which he had just emerged.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page324;
