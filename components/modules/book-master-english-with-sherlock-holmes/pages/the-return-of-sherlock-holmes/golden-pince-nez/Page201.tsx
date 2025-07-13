import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import chartDark from '@/public/images/sherlock-golden-pince-nez-dark.jpg';
import chartLight from '@/public/images/sherlock-golden-pince-nez-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page201({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;GOLDEN&nbsp;PINCE&#8209;NEZ'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              When I look at the three massive manuscript volumes which contain
              our work for the year 1894 I confess that it is very difficult for
              me, out of such a wealth of material, to select the cases which
              are most interesting in themselves and at the same time most
              conducive to a display of those peculiar powers for which my
              friend was famous. As I turn over the pages I see my notes upon
              the repulsive story of the red leech and the terrible death of
              Crosby the banker. Here also I find an account of the Addleton
              tragedy and the singular contents of the ancient British barrow.
              The famous Smith-Mortimer succession case comes also within this
              period, and so does the tracking and arrest of Huret, the
              Boulevard assassin—an exploit which won for Holmes an autograph
              letter of thanks from the French President and the Order of the
              Legion of Honour. Each of these would furnish a narrative, but on
              the whole I am of opinion that none of them unite so many singular
              points of interest as the episode of Yoxley Old Place, which
              includes not only the lamentable death of young Willoughby Smith,
              but also those subsequent developments which threw so curious a
              light upon the causes of the crime.
            </TextNode>

            <TextNode>
              It was a wild, tempestuous night towards the close of November.
              Holmes and I sat together in silence all the evening, he engaged
              with a powerful lens deciphering the remains of the original
              inscription upon a palimpsest, I deep in a recent treatise upon
              surgery. Outside the wind howled down Baker Street, while the rain
              beat fiercely against the windows. It was strange there in the
              very depths of the town, with ten miles of man's handiwork on
              every side of us, to feel the iron grip of Nature, and to be
              conscious that to the huge elemental forces all London was no more
              than the molehills that dot the fields. I walked to the window and
              looked out on the deserted street. The occasional lamps gleamed on
              the expanse of muddy road and shining pavement. A single cab was
              splashing its way from the Oxford Street end.
            </TextNode>

            <TextNode>
              “Well, Watson, it's as well we have not to turn out to-night,”
              said Holmes, laying aside his lens and rolling up the palimpsest.
              “I've done enough for one sitting. It is trying work for the eyes.
              So far as I can make out it is nothing more exciting than an
              Abbey's accounts dating from the second half of the fifteenth
              century. Halloa! halloa! halloa! What's this?”
            </TextNode>

            <TextNode>
              Amid the droning of the wind there had come the stamping of a
              horse's hoofs and the long grind of a wheel as it rasped against
              the kerb. The cab which I had seen had pulled up at our door.
            </TextNode>

            <TextNode>
              “What can he want?” I ejaculated, as a man stepped out of it.
            </TextNode>

            <TextNode>
              “Want! He wants us. And we, my poor Watson, want overcoats and
              cravats and galoshes, and every aid that man ever invented to
              fight the weather. Wait a bit, though! There's the cab off again!
              There's hope yet. He'd have kept it if he had wanted us to come.
              Run down, my dear fellow, and open the door, for all virtuous folk
              have been long in bed.”
            </TextNode>

            <TextNode>
              When the light of the hall lamp fell upon our midnight visitor I
              had no difficulty in recognising him. It was young Stanley
              Hopkins, a promising detective, in whose career Holmes had several
              times shown a very practical interest.
            </TextNode>

            <TextNode>“Is he in?” he asked, eagerly.</TextNode>

            <TextNode>
              “Come up, my dear sir,” said Holmes's voice from above. “I hope
              you have no designs upon us on such a night as this.”
            </TextNode>

            <TextNode>
              The detective mounted the stairs, and our lamp gleamed upon his
              shining waterproof. I helped him out of it while Holmes knocked a
              blaze out of the logs in the grate.
            </TextNode>

            <TextNode>
              “Now, my dear Hopkins, draw up and warm your toes,” said he.
              “Here's a cigar, and the doctor has a prescription containing hot
              water and a lemon which is good medicine on a night like this. It
              must be something important which has brought you out in such a
              gale.”
            </TextNode>

            <TextNode>
              “It is indeed, Mr. Holmes. I've had a bustling afternoon, I
              promise you. Did you see anything of the Yoxley case in the latest
              editions?”
            </TextNode>

            <TextNode>
              “I've seen nothing later than the fifteenth century to-day.”
            </TextNode>

            <TextNode>
              “Well, it was only a paragraph, and all wrong at that, so you have
              not missed anything. I haven't let the grass grow under my feet.
              It's down in Kent, seven miles from Chatham and three from the
              railway line. I was wired for at three-fifteen, reached Yoxley Old
              Place at five, conducted my investigation, was back at Charing
              Cross by the last train, and straight to you by cab.”
            </TextNode>

            <TextNode>
              “Which means, I suppose, that you are not quite clear about your
              case?”
            </TextNode>

            <TextNode>
              “It means that I can make neither head nor tail of it. So far as I
              can see it is just as tangled a business as ever I handled, and
              yet at first it seemed so simple that one couldn't go wrong.
              There's no motive, Mr. Holmes. That's what bothers me—I can't put
              my hand on a motive. Here's a man dead—there's no denying
              that—but, so far as I can see, no reason on earth why anyone
              should wish him harm.”
            </TextNode>

            <TextNode>
              Holmes lit his cigar and leaned back in his chair.
            </TextNode>

            <TextNode>“Let us hear about it,” said he.</TextNode>

            <TextNode>
              “I've got my facts pretty clear,” said Stanley Hopkins. “All I
              want now is to know what they all mean. The story, so far as I can
              make it out, is like this. Some years ago this country house,
              Yoxley Old Place, was taken by an elderly man, who gave the name
              of Professor Coram. He was an invalid, keeping his bed half the
              time, and the other half hobbling round the house with a stick or
              being pushed about the grounds by the gardener in a bath-chair. He
              was well liked by the few neighbours who called upon him, and he
              has the reputation down there of being a very learned man. His
              household used to consist of an elderly housekeeper, Mrs. Marker,
              and of a maid, Susan Tarlton. These have both been with him since
              his arrival, and they seem to be women of excellent character. The
              Professor is writing a learned book, and he found it necessary
              about a year ago to engage a secretary. The first two that he
              tried were not successes; but the third, Mr. Willoughby Smith, a
              very young man straight from the University, seems to have been
              just what his employer wanted. His work consisted in writing all
              the morning to the Professor's dictation, and he usually spent the
              evening in hunting up references and passages which bore upon the
              next day's work. This Willoughby Smith has nothing against him
              either as a boy at Uppingham or as a young man at Cambridge. I
              have seen his testimonials, and from the first he was a decent,
              quiet, hardworking fellow, with no weak spot in him at all. And
              yet this is the lad who has met his death this morning in the
              Professor's study under circumstances which can point only to
              murder.”
            </TextNode>

            <TextNode>
              The wind howled and screamed at the windows. Holmes and I drew
              closer to the fire while the young inspector slowly and point by
              point developed his singular narrative.
            </TextNode>

            <TextNode>
              “If you were to search all England,” said he, “I don't suppose you
              could find a household more self-contained or free from outside
              influences. Whole weeks would pass and not one of them go past the
              garden gate. The Professor was buried in his work and existed for
              nothing else. Young Smith knew nobody in the neighbourhood, and
              lived very much as his employer did. The two women had nothing to
              take them from the house. Mortimer the gardener, who wheels the
              bath-chair, is an Army pensioner—an old Crimean man of excellent
              character. He does not live in the house, but in a three-roomed
              cottage at the other end of the garden. Those are the only people
              that you would find within the grounds of Yoxley Old Place. At the
              same time, the gate of the garden is a hundred yards from the main
              London to Chatham road. It opens with a latch, and there is
              nothing to prevent anyone from walking in.
            </TextNode>

            <TextNode>
              “Now I will give you the evidence of Susan Tarlton, who is the
              only person who can say anything positive about the matter. It was
              in the forenoon, between eleven and twelve. She was engaged at the
              moment in hanging some curtains in the upstairs front bedroom.
              Professor Coram was still in bed, for when the weather is bad he
              seldom rises before midday. The housekeeper was busied with some
              work in the back of the house. Willoughby Smith had been in his
              bedroom, which he uses as a sitting-room; but the maid heard him
              at that moment pass along the passage and descend to the study
              immediately below her. She did not see him, but she says that she
              could not be mistaken in his quick, firm tread. She did not hear
              the study door close, but a minute or so later there was a
              dreadful cry in the room below. It was a wild, hoarse scream, so
              strange and unnatural that it might have come either from a man or
              a woman. At the same instant there was a heavy thud, which shook
              the old house, and then all was silence. The maid stood petrified
              for a moment, and then, recovering her courage, she ran
              downstairs. The study door was shut, and she opened it. Inside
              young Mr. Willoughby Smith was stretched upon the floor. At first
              she could see no injury, but as she tried to raise him she saw
              that blood was pouring from the underside of his neck. It was
              pierced by a very small but very deep wound, which had divided the
              carotid artery. The instrument with which the injury had been
              inflicted lay upon the carpet beside him. It was one of those
              small sealing-wax knives to be found on old-fashioned
              writing-tables, with an ivory handle and a stiff blade. It was
              part of the fittings of the Professor's own&nbsp;desk.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “At first the maid thought that young Smith was already dead, but
              on pouring some water from the carafe over his forehead he opened
              his eyes for an instant. ‘The Professor,’ he murmured—‘it was
              she.’ The maid is prepared to swear that those were the exact
              words. He tried desperately to say something else, and he held his
              right hand up in the air. Then he fell back dead.
            </TextNode>

            <TextNode>
              “In the meantime the housekeeper had also arrived upon the scene,
              but she was just too late to catch the young man's dying words.
              Leaving Susan with the body, she hurried to the Professor's room.
              He was sitting up in bed horribly agitated, for he had heard
              enough to convince him that something terrible had occurred. Mrs.
              Marker is prepared to swear that the Professor was still in his
              night-clothes, and, indeed, it was impossible for him to dress
              without the help of Mortimer, whose orders were to come at twelve
              o'clock. The Professor declares that he heard the distant cry, but
              that he knows nothing more. He can give no explanation of the
              young man's last words, ‘The Professor—it was she,’ but imagines
              that they were the outcome of delirium. He believes that
              Willoughby Smith had not an enemy in the world, and can give no
              reason for the crime. His first action was to send Mortimer the
              gardener for the local police. A little later the chief constable
              sent for me. Nothing was moved before I got there, and strict
              orders were given that no one should walk upon the paths leading
              to the house. It was a splendid chance of putting your theories
              into practice, Mr. Sherlock Holmes. There was really nothing
              wanting.”
            </TextNode>

            <TextNode>
              “Except Mr. Sherlock Holmes,” said my companion, with a somewhat
              bitter smile. “Well, let us hear about it. What sort of job did
              you make of it?”
            </TextNode>

            <TextNode>
              “I must ask you first, Mr. Holmes, to glance at this rough plan,
              which will give you a general idea of the position of the
              Professor's study and the various points of the case. It will help
              you in following my investigation.”
            </TextNode>

            <TextNode>
              He unfolded the rough chart, which I here reproduce, and he laid
              it across Holmes's knee. I rose, and, standing behind Holmes, I
              studied it over his shoulder.
            </TextNode>

            <Image
              className='h-[23.75rem]  w-auto  max-2md:h-auto
                         dark:hidden'
              src={chartLight}
              alt='chart'
            />
            <Image
              className='hidden  h-[23.75rem]  w-auto
                         max-2md:h-auto  dark:block'
              src={chartDark}
              alt='chart'
            />
            <TextNode noIndent className='mt-3'>
              “It is very rough, of course, and it only deals with the points
              which seem to me to be essential. All the rest you will see later
              for yourself. Now, first of all, presuming that the assassin
              entered the house, how did he or she come in? Undoubtedly by the
              garden path and the back door, from which there is direct access
              to the study. Any other way would have been exceedingly
              complicated. The escape must have also been made along that line,
              for of the two other exits from the room one was blocked by Susan
              as she ran downstairs and the other leads straight to the
              Professor's bedroom. I therefore directed my attention at once to
              the garden path, which was saturated with recent rain and would
              certainly show any footmarks.
            </TextNode>
            <TextNode>
              “My examination showed me that I was dealing with a cautious and
              expert criminal. No footmarks were to be found on the path. There
              could be no question, however, that someone had passed along the
              grass border which lines the path, and that he had done so in
              order to avoid leaving a track. I could not find anything in the
              nature of a distinct impression, but the grass was trodden down
              and someone had undoubtedly passed. It could only have been the
              murderer, since neither the gardener nor anyone else had been
              there that morning and the rain had only begun during the night.”
            </TextNode>

            <TextNode>
              “One moment,” said Holmes. “Where does this path lead to?”
            </TextNode>

            <TextNode>“To the road.”</TextNode>

            <TextNode>“How long is it?”</TextNode>

            <TextNode>“A hundred yards or so.”</TextNode>

            <TextNode>
              “At the point where the path passes through the gate you could
              surely pick up the tracks?”
            </TextNode>

            <TextNode>
              “Unfortunately, the path was tiled at that point.”
            </TextNode>

            <TextNode>“Well, on the road itself?”</TextNode>

            <TextNode>“No; it was all trodden into mire.”</TextNode>

            <TextNode>
              “Tut-tut! Well, then, these tracks upon the grass, were they
              coming or going?”
            </TextNode>

            <TextNode>
              “It was impossible to say. There was never any outline.”
            </TextNode>

            <TextNode>“A large foot or a small?”</TextNode>

            <TextNode>“You could not distinguish.”</TextNode>

            <TextNode>Holmes gave an ejaculation of impatience.</TextNode>

            <TextNode>
              “It has been pouring rain and blowing a hurricane ever since,”
              said he. “It will be harder to read now than that palimpsest.
              Well, well, it can't be helped. What did you do, Hopkins, after
              you had made certain that you had made certain of nothing?”
            </TextNode>

            <TextNode>
              “I think I made certain of a good deal, Mr. Holmes. I knew that
              someone had entered the house cautiously from without. I next
              examined the corridor. It is lined with cocoanut matting and had
              taken no impression of any kind. This brought me into the study
              itself. It is a scantily-furnished room. The main article is a
              large writing-table with a fixed bureau. This bureau consists of a
              double column of drawers with a central small cupboard between
              them. The drawers were open, the cupboard locked. The drawers, it
              seems, were always open, and nothing of value was kept in them.
              There were some papers of importance in the cupboard, but there
              were no signs that this had been tampered with, and the Professor
              assures me that nothing was missing. It is certain that no robbery
              has been committed.
            </TextNode>

            <TextNode>
              “I come now to the body of the young man. It was found near the
              bureau, and just to the left of it, as marked upon that chart. The
              stab was on the right side of the neck and from behind forwards,
              so that it is almost impossible that it could have been
              self-inflicted.”
            </TextNode>

            <TextNode>“Unless he fell upon the knife,” said Holmes.</TextNode>

            <TextNode>
              “Exactly. The idea crossed my mind. But we found the knife some
              feet away from the body, so that seems impossible. Then, of
              course, there are the man's own dying words. And, finally, there
              was this very important piece of evidence which was found clasped
              in the dead man's right hand.”
            </TextNode>

            <TextNode>
              From his pocket Stanley Hopkins drew a small paper packet. He
              unfolded it and disclosed a golden pince-nez, with two broken ends
              of black silk cord dangling from the end of it. “Willoughby Smith
              had excellent sight,” he added. “There can be no question that
              this was snatched from the face or the person of the assassin.”
            </TextNode>

            <TextNode>
              Sherlock Holmes took the glasses into his hand and examined them
              with the utmost attention and interest. He held them on his nose,
              endeavoured to read through them, went to the window and stared up
              the street with them, looked at them most minutely in the full
              light of the lamp, and finally, with a chuckle, seated himself at
              the table and wrote a few lines upon a sheet of paper, which he
              tossed across to Stanley Hopkins.
            </TextNode>

            <TextNode>
              “That's the best I can do for you,” said he. “It may prove to be
              of some use.”
            </TextNode>

            <TextNode>
              The astonished detective read the note aloud. It ran as follows:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Wanted, a woman of good address, attired like a lady. She has a
                remarkably thick nose, with eyes which are set close upon either
                side of it. She has a puckered forehead, a peering expression,
                and probably rounded shoulders. There are indications that she
                has had recourse to an optician at least twice during the last
                few months. As her glasses are of remarkable strength and as
                opticians are not very numerous, there should be no difficulty
                in tracing her.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Holmes smiled at the astonishment of Hopkins, which must have been
              reflected upon my features.
            </TextNode>

            <TextNode>
              “Surely my deductions are simplicity itself,” said he. “It would
              be difficult to name any articles which afford a finer field for
              inference than a pair of glasses, especially so remarkable a pair
              as these. That they belong to a woman I infer from their delicacy,
              and also, of course, from the last words of the dying man. As to
              her being a person of refinement and well dressed, they are, as
              you perceive, handsomely mounted in solid gold, and it is
              inconceivable that anyone who wore such glasses could be
              slatternly in other respects. You will find that the clips are too
              wide for your nose, showing that the lady's nose was very broad at
              the base. This sort of nose is usually a short and coarse one, but
              there are a sufficient number of exceptions to prevent me from
              being dogmatic or from insisting upon this point in my
              description. My own face is a narrow one, and yet I find that I
              cannot get my eyes into the centre, or near the centre, of these
              glasses. Therefore the lady's eyes are set very near to the sides
              of the nose. You will perceive, Watson, that the glasses are
              concave and of unusual strength. A lady whose vision has been so
              extremely contracted all her life is sure to have the physical
              characteristics of such vision, which are seen in the forehead,
              the eyelids, and the shoulders.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page201;
