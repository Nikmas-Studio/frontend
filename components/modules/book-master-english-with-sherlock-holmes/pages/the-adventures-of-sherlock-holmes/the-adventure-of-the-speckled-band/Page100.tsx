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

function Page100({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SPECKLED&nbsp;BAND'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “ ‘No, I have not. It must be those wretched gipsies in the
              plantation.’
            </TextNode>

            <TextNode>
              “ ‘Very likely. And yet if it were on the lawn, I wonder that you
              did not hear it also.’
            </TextNode>

            <TextNode>“ ‘Ah, but I sleep more heavily than you.’</TextNode>

            <TextNode>
              “ ‘Well, it is of no great consequence, at any rate.’ She smiled
              back at me, closed my door, and a few moments later I heard her
              key turn in the lock.”
            </TextNode>

            <TextNode>
              “Indeed,” said Holmes. “Was it your custom always to lock
              yourselves in at night?”
            </TextNode>

            <TextNode>“Always.”</TextNode>

            <TextNode>“And why?”</TextNode>

            <TextNode>
              “I think that I mentioned to you that the doctor kept a cheetah
              and a baboon. We had no feeling of security unless our doors were
              locked.”
            </TextNode>

            <TextNode>“Quite so. Pray proceed with your statement.”</TextNode>

            <TextNode>
              “I could not sleep that night. A vague feeling of impending
              misfortune impressed me. My sister and I, you will recollect, were
              twins, and you know how subtle are the links which bind two souls
              which are so closely allied. It was a wild night. The wind was
              howling outside, and the rain was beating and splashing against
              the windows. Suddenly, amid all the hubbub of the gale, there
              burst forth the wild scream of a terrified woman. I knew that it
              was my sister's voice. I sprang from my bed, wrapped a shawl round
              me, and rushed into the corridor. As I opened my door I seemed to
              hear a low whistle, such as my sister described, and a few moments
              later a clanging sound, as if a mass of metal had fallen. As I ran
              down the passage, my sister's door was unlocked, and revolved
              slowly upon its hinges. I stared at it horror-stricken, not
              knowing what was about to issue from it. By the light of the
              corridor-lamp I saw my sister appear at the opening, her face
              blanched with terror, her hands groping for help, her whole figure
              swaying to and fro like that of a drunkard. I ran to her and threw
              my arms round her, but at that moment her knees seemed to give way
              and she fell to the ground. She writhed as one who is in terrible
              pain, and her limbs were dreadfully convulsed. At first I thought
              that she had not recognised me, but as I bent over her she
              suddenly shrieked out in a voice which I shall never forget, ‘Oh,
              my God! Helen! It was the band! The speckled band!’ There was
              something else which she would fain have said, and she stabbed
              with her finger into the air in the direction of the doctor's
              room, but a fresh convulsion seized her and choked her words. I
              rushed out, calling loudly for my stepfather, and I met him
              hastening from his room in his dressing-gown. When he reached my
              sister's side she was unconscious, and though he poured brandy
              down her throat and sent for medical aid from the village, all
              efforts were in vain, for she slowly sank and died without having
              recovered her consciousness. Such was the dreadful end of my
              beloved sister.”
            </TextNode>

            <TextNode>
              “One moment,” said Holmes, “are you sure about this whistle and
              metallic sound? Could you swear to it?”
            </TextNode>

            <TextNode>
              “That was what the county coroner asked me at the inquiry. It is
              my strong impression that I heard it, and yet, among the crash of
              the gale and the creaking of an old house, I may possibly have
              been deceived.”
            </TextNode>

            <TextNode>“Was your sister dressed?”</TextNode>

            <TextNode>
              “No, she was in her night-dress. In her right hand was found the
              charred stump of a match, and in her left a match-box.”
            </TextNode>

            <TextNode>
              “Showing that she had struck a light and looked about her when the
              alarm took place. That is important. And what conclusions did the
              coroner come to?”
            </TextNode>

            <TextNode>
              “He investigated the case with great care, for Dr. Roylott's
              conduct had long been notorious in the county, but he was unable
              to find any satisfactory cause of death. My evidence showed that
              the door had been fastened upon the inner side, and the windows
              were blocked by old-fashioned shutters with broad iron bars, which
              were secured every night. The walls were carefully sounded, and
              were shown to be quite solid all round, and the flooring was also
              thoroughly examined, with the same result. The chimney is wide,
              but is barred up by four large staples. It is certain, therefore,
              that my sister was quite alone when she met her end. Besides,
              there were no marks of any violence upon her.”
            </TextNode>

            <TextNode>“How about poison?”</TextNode>

            <TextNode>
              “The doctors examined her for it, but without success.”
            </TextNode>

            <TextNode>
              “What do you think that this unfortunate lady died of, then?”
            </TextNode>

            <TextNode>
              “It is my belief that she died of pure fear and nervous shock,
              though what it was that frightened her I cannot imagine.”
            </TextNode>

            <TextNode>
              “Were there gipsies in the plantation at the time?”
            </TextNode>

            <TextNode>“Yes, there are nearly always some there.”</TextNode>

            <TextNode>
              “Ah, and what did you gather from this allusion to a band—a
              speckled band?”
            </TextNode>

            <TextNode>
              “Sometimes I have thought that it was merely the wild talk of
              delirium, sometimes that it may have referred to some band of
              people, perhaps to these very gipsies in the plantation. I do not
              know whether the spotted handkerchiefs which so many of them wear
              over their heads might have suggested the strange adjective which
              she used.”
            </TextNode>

            <TextNode>
              Holmes shook his head like a man who is far from being satisfied.
            </TextNode>

            <TextNode>
              “These are very deep waters,” said he; “pray go on with your
              narrative.”
            </TextNode>

            <TextNode>
              “Two years have passed since then, and my life has been until
              lately lonelier than ever. A month ago, however, a dear friend,
              whom I have known for many years, has done me the honour to ask my
              hand in marriage. His name is Armitage—Percy Armitage—the second
              son of Mr. Armitage, of Crane Water, near Reading. My stepfather
              has offered no opposition to the match, and we are to be married
              in the course of the spring. Two days ago some repairs were
              started in the west wing of the building, and my bedroom wall has
              been pierced, so that I have had to move into the chamber in which
              my sister died, and to sleep in the very bed in which she slept.
              Imagine, then, my thrill of terror when last night, as I lay
              awake, thinking over her terrible fate, I suddenly heard in the
              silence of the night the low whistle which had been the herald of
              her own death. I sprang up and lit the lamp, but nothing was to be
              seen in the room. I was too shaken to go to bed again, however, so
              I dressed, and as soon as it was daylight I slipped down, got a
              dog-cart at the Crown Inn, which is opposite, and drove to
              Leatherhead, from whence I have come on this morning with the one
              object of seeing you and asking your advice.”
            </TextNode>

            <TextNode>
              “You have done wisely,” said my friend. “But have you told me
              all?”
            </TextNode>

            <TextNode>“Yes, all.”</TextNode>

            <TextNode>
              “Miss Roylott, you have not. You are screening your stepfather.”
            </TextNode>

            <TextNode>“Why, what do you mean?”</TextNode>

            <TextNode>
              For answer Holmes pushed back the frill of black lace which
              fringed the hand that lay upon our visitor's knee. Five little
              livid spots, the marks of four fingers and a thumb, were printed
              upon the white wrist.
            </TextNode>

            <TextNode>“You have been cruelly used,” said Holmes.</TextNode>

            <TextNode>
              The lady coloured deeply and covered over her injured wrist. “He
              is a hard man,” she said, “and perhaps he hardly knows his own
              strength.”
            </TextNode>

            <TextNode>
              There was a long silence, during which Holmes leaned his chin upon
              his hands and stared into the crackling fire.
            </TextNode>

            <TextNode>
              “This is a very deep business,” he said at last. “There are a
              thousand details which I should desire to know before I decide
              upon our course of action. Yet we have not a moment to lose. If we
              were to come to Stoke Moran to-day, would it be possible for us to
              see over these rooms without the knowledge of your stepfather?”
            </TextNode>

            <TextNode>
              “As it happens, he spoke of coming into town to-day upon some most
              important business. It is probable that he will be away all day,
              and that there would be nothing to disturb you. We have a
              housekeeper now, but she is old and foolish, and I could easily
              get her out of the way.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Excellent. You are not averse to this trip, Watson?”
            </TextNode>

            <TextNode>“By no means.”</TextNode>

            <TextNode>
              “Then we shall both come. What are you going to do yourself?”
            </TextNode>

            <TextNode>
              “I have one or two things which I would wish to do now that I am
              in town. But I shall return by the twelve o'clock train, so as to
              be there in time for your coming.”
            </TextNode>

            <TextNode>
              “And you may expect us early in the afternoon. I have myself some
              small business matters to attend to. Will you not wait and
              breakfast?”
            </TextNode>

            <TextNode>
              “No, I must go. My heart is lightened already since I have
              confided my trouble to you. I shall look forward to seeing you
              again this afternoon.” She dropped her thick black veil over her
              face and glided from the room.
            </TextNode>

            <TextNode>
              “And what do you think of it all, Watson?” asked Sherlock Holmes,
              leaning back in his chair.
            </TextNode>

            <TextNode>
              “It seems to me to be a most dark and sinister business.”
            </TextNode>

            <TextNode>“Dark enough and sinister enough.”</TextNode>

            <TextNode>
              “Yet if the lady is correct in saying that the flooring and walls
              are sound, and that the door, window, and chimney are impassable,
              then her sister must have been undoubtedly alone when she met her
              mysterious end.”
            </TextNode>

            <TextNode>
              “What becomes, then, of these nocturnal whistles, and what of the
              very peculiar words of the dying woman?”
            </TextNode>

            <TextNode>“I cannot think.”</TextNode>

            <TextNode>
              “When you combine the ideas of whistles at night, the presence of
              a band of gipsies who are on intimate terms with this old doctor,
              the fact that we have every reason to believe that the doctor has
              an interest in preventing his stepdaughter's marriage, the dying
              allusion to a band, and, finally, the fact that Miss Helen Stoner
              heard a metallic clang, which might have been caused by one of
              those metal bars that secured the shutters falling back into its
              place, I think that there is good ground to think that the mystery
              may be cleared along those lines.”
            </TextNode>

            <TextNode>“But what, then, did the gipsies do?”</TextNode>

            <TextNode>“I cannot imagine.”</TextNode>

            <TextNode>“I see many objections to any such theory.”</TextNode>

            <TextNode>
              “And so do I. It is precisely for that reason that we are going to
              Stoke Moran this day. I want to see whether the objections are
              fatal, or if they may be explained away. But what in the name of
              the devil!”
            </TextNode>

            <TextNode>
              The ejaculation had been drawn from my companion by the fact that
              our door had been suddenly dashed open, and that a huge man had
              framed himself in the aperture. His costume was a peculiar mixture
              of the professional and of the agricultural, having a black
              top-hat, a long frock-coat, and a pair of high gaiters, with a
              hunting-crop swinging in his hand. So tall was he that his hat
              actually brushed the cross bar of the doorway, and his breadth
              seemed to span it across from side to side. A large face, seared
              with a thousand wrinkles, burned yellow with the sun, and marked
              with every evil passion, was turned from one to the other of us,
              while his deep-set, bile-shot eyes, and his high, thin, fleshless
              nose, gave him somewhat the resemblance to a fierce old bird of
              prey.
            </TextNode>

            <TextNode>
              “Which of you is Holmes?” asked this apparition.
            </TextNode>

            <TextNode>
              “My name, sir; but you have the advantage of me,” said my
              companion quietly.
            </TextNode>

            <TextNode>“I am Dr. Grimesby Roylott, of Stoke Moran.”</TextNode>

            <TextNode>
              “Indeed, Doctor,” said Holmes blandly. “Pray take a seat.”
            </TextNode>

            <TextNode>
              “I will do nothing of the kind. My stepdaughter has been here. I
              have traced her. What has she been saying to you?”
            </TextNode>

            <TextNode>
              “It is a little cold for the time of the year,” said Holmes.
            </TextNode>

            <TextNode>
              “What has she been saying to you?” screamed the old man furiously.
            </TextNode>

            <TextNode>
              “But I have heard that the crocuses promise well,” continued my
              companion imperturbably.
            </TextNode>

            <TextNode>
              “Ha! You put me off, do you?” said our new visitor, taking a step
              forward and shaking his hunting-crop. “I know you, you scoundrel!
              I have heard of you before. You are Holmes, the meddler.”
            </TextNode>

            <TextNode>My friend smiled.</TextNode>

            <TextNode>“Holmes, the busybody!”</TextNode>

            <TextNode>His smile broadened.</TextNode>

            <TextNode>“Holmes, the Scotland Yard Jack-in-office!”</TextNode>

            <TextNode>
              Holmes chuckled heartily. “Your conversation is most
              entertaining,” said he. “When you go out close the door, for there
              is a decided draught.”
            </TextNode>

            <TextNode>
              “I will go when I have said my say. Don't you dare to meddle with
              my affairs. I know that Miss Stoner has been here. I traced her! I
              am a dangerous man to fall foul of! See here.” He stepped swiftly
              forward, seized the poker, and bent it into a curve with his huge
              brown hands.
            </TextNode>

            <TextNode>
              “See that you keep yourself out of my grip,” he snarled, and
              hurling the twisted poker into the fireplace he strode out of the
              room.
            </TextNode>

            <TextNode>
              “He seems a very amiable person,” said Holmes, laughing. “I am not
              quite so bulky, but if he had remained I might have shown him that
              my grip was not much more feeble than his own.” As he spoke he
              picked up the steel poker and, with a sudden effort, straightened
              it out again.
            </TextNode>

            <TextNode>
              “Fancy his having the insolence to confound me with the official
              detective force! This incident gives zest to our investigation,
              however, and I only trust that our little friend will not suffer
              from her imprudence in allowing this brute to trace her. And now,
              Watson, we shall order breakfast, and afterwards I shall walk down
              to Doctors' Commons, where I hope to get some data which may help
              us in this matter.”
            </TextNode>

            <TextNode>
              It was nearly one o'clock when Sherlock Holmes returned from his
              excursion. He held in his hand a sheet of blue paper, scrawled
              over with notes and figures.
            </TextNode>

            <TextNode>
              “I have seen the will of the deceased wife,” said he. “To
              determine its exact meaning I have been obliged to work out the
              present prices of the investments with which it is concerned. The
              total income, which at the time of the wife's death was little
              short of £1100, is now, through the fall in agricultural prices,
              not more than £750. Each daughter can claim an income of £250, in
              case of marriage. It is evident, therefore, that if both girls had
              married, this beauty would have had a mere pittance, while even
              one of them would cripple him to a very serious extent. My
              morning's work has not been wasted, since it has proved that he
              has the very strongest motives for standing in the way of anything
              of the sort. And now, Watson, this is too serious for dawdling,
              especially as the old man is aware that we are interesting
              ourselves in his affairs; so if you are ready, we shall call a cab
              and drive to Waterloo. I should be very much obliged if you would
              slip your revolver into your pocket. An Eley's No. 2 is an
              excellent argument with gentlemen who can twist steel pokers into
              knots. That and a tooth-brush are, I think, all that we need.”
            </TextNode>

            <TextNode>
              At Waterloo we were fortunate in catching a train for Leatherhead,
              where we hired a trap at the station inn and drove for four or
              five miles through the lovely Surrey lanes. It was a perfect day,
              with a bright sun and a few fleecy clouds in the heavens. The
              trees and wayside hedges were just throwing out their first green
              shoots, and the air was full of the pleasant smell of the moist
              earth. To me at least there was a strange contrast between the
              sweet promise of the spring and this sinister quest upon which we
              were engaged. My companion sat in the front of the trap, his arms
              folded, his hat pulled down over his eyes, and his chin sunk upon
              his breast, buried in the deepest thought. Suddenly, however, he
              started, tapped me on the shoulder, and pointed over the meadows.
            </TextNode>

            <TextNode>“Look there!” said he.</TextNode>

            <TextNode>
              A heavily timbered park stretched up in a gentle slope, thickening
              into a grove at the highest point. From amid the branches there
              jutted out the grey gables and high roof-tree of a very old
              mansion.
            </TextNode>

            <TextNode>“Stoke Moran?” said he.</TextNode>

            <TextNode>
              “Yes, sir, that be the house of Dr. Grimesby Roylott,” remarked
              the driver.
            </TextNode>

            <TextNode>
              “There is some building going on there,” said Holmes; “that is
              where we are going.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page100;
