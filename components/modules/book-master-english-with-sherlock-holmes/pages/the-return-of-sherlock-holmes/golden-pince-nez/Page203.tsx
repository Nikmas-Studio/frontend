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

function Page203({
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
            <TextNode noIndent>“Yes,” said he, “I have solved it.”</TextNode>

            <TextNode>
              Stanley Hopkins and I stared in amazement. Something like a sneer
              quivered over the gaunt features of the old Professor.
            </TextNode>

            <TextNode>“Indeed! In the garden?”</TextNode>

            <TextNode>“No, here.”</TextNode>

            <TextNode>“Here! When?”</TextNode>

            <TextNode>“This instant.”</TextNode>

            <TextNode>
              “You are surely joking, Mr. Sherlock Holmes. You compel me to tell
              you that this is too serious a matter to be treated in such a
              fashion.”
            </TextNode>

            <TextNode>
              “I have forged and tested every link of my chain, Professor Coram,
              and I am sure that it is sound. What your motives are or what
              exact part you play in this strange business I am not yet able to
              say. In a few minutes I shall probably hear it from your own lips.
              Meanwhile I will reconstruct what is past for your benefit, so
              that you may know the information which I still require.
            </TextNode>

            <TextNode>
              “A lady yesterday entered your study. She came with the intention
              of possessing herself of certain documents which were in your
              bureau. She had a key of her own. I have had an opportunity of
              examining yours, and I do not find that slight discolouration
              which the scratch made upon the varnish would have produced. You
              were not an accessory, therefore, and she came, so far as I can
              read the evidence, without your knowledge to rob you.”
            </TextNode>

            <TextNode>
              The Professor blew a cloud from his lips. “This is most
              interesting and instructive,” said he. “Have you no more to add?
              Surely, having traced this lady so far, you can also say what has
              become of her.”
            </TextNode>

            <TextNode>
              “I will endeavour to do so. In the first place she was seized by
              your secretary, and stabbed him in order to escape. This
              catastrophe I am inclined to regard as an unhappy accident, for I
              am convinced that the lady had no intention of inflicting so
              grievous an injury. An assassin does not come unarmed. Horrified
              by what she had done she rushed wildly away from the scene of the
              tragedy. Unfortunately for her she had lost her glasses in the
              scuffle, and as she was extremely short-sighted she was really
              helpless without them. She ran down a corridor, which she imagined
              to be that by which she had come—both were lined with cocoanut
              matting—and it was only when it was too late that she understood
              that she had taken the wrong passage and that her retreat was cut
              off behind her. What was she to do? She could not go back. She
              could not remain where she was. She must go on. She went on. She
              mounted a stair, pushed open a door, and found herself in your
              room.”
            </TextNode>

            <TextNode>
              The old man sat with his mouth open staring wildly at Holmes.
              Amazement and fear were stamped upon his expressive features. Now,
              with an effort, he shrugged his shoulders and burst into insincere
              laughter.
            </TextNode>

            <TextNode>
              “All very fine, Mr. Holmes,” said he. “But there is one little
              flaw in your splendid theory. I was myself in my room, and I never
              left it during the day.”
            </TextNode>

            <TextNode>“I am aware of that, Professor Coram.”</TextNode>

            <TextNode>
              “And you mean to say that I could lie upon that bed and not be
              aware that a woman had entered my room?”
            </TextNode>

            <TextNode>
              “I never said so. You were aware of it. You spoke with her. You
              recognised her. You aided her to escape.”
            </TextNode>

            <TextNode>
              Again the Professor burst into high-keyed laughter. He had risen
              to his feet and his eyes glowed like embers.
            </TextNode>

            <TextNode>
              “You are mad!” he cried. “You are talking insanely. I helped her
              to escape? Where is she now?”
            </TextNode>

            <TextNode>
              “She is there,” said Holmes, and he pointed to a high bookcase in
              the corner of the room.
            </TextNode>

            <TextNode>
              I saw the old man throw up his arms, a terrible convulsion passed
              over his grim face, and he fell back in his chair. At the same
              instant the bookcase at which Holmes pointed swung round upon a
              hinge, and a woman rushed out into the room. “You are right!” she
              cried, in a strange foreign voice. “You are right! I am here.”
            </TextNode>

            <TextNode>
              She was brown with the dust and draped with the cobwebs which had
              come from the walls of her hiding-place. Her face, too, was
              streaked with grime, and at the best she could never have been
              handsome, for she had the exact physical characteristics which
              Holmes had divined, with, in addition, a long and obstinate chin.
              What with her natural blindness, and what with the change from
              dark to light, she stood as one dazed, blinking about her to see
              where and who we were. And yet, in spite of all these
              disadvantages, there was a certain nobility in the woman's
              bearing, a gallantry in the defiant chin and in the upraised head,
              which compelled something of respect and admiration. Stanley
              Hopkins had laid his hand upon her arm and claimed her as his
              prisoner, but she waved him aside gently, and yet with an
              overmastering dignity which compelled obedience. The old man lay
              back in his chair, with a twitching face, and stared at her with
              brooding eyes.
            </TextNode>

            <TextNode>
              “Yes, sir, I am your prisoner,” she said. “From where I stood I
              could hear everything, and I know that you have learned the truth.
              I confess it all. It was I who killed the young man. But you are
              right, you who say it was an accident. I did not even know that it
              was a knife which I held in my hand, for in my despair I snatched
              anything from the table and struck at him to make him let me go.
              It is the truth that I tell.”
            </TextNode>

            <TextNode>
              “Madam,” said Holmes, “I am sure that it is the truth. I fear that
              you are far from well.”
            </TextNode>

            <TextNode>
              She had turned a dreadful colour, the more ghastly under the dark
              dust-streaks upon her face. She seated herself on the side of the
              bed; then she resumed.
            </TextNode>

            <TextNode>
              “I have only a little time here,” she said, “but I would have you
              to know the whole truth. I am this man's wife. He is not an
              Englishman. He is a Russian. His name I will not tell.”
            </TextNode>

            <TextNode>
              For the first time the old man stirred. “God bless you, Anna!” he
              cried. “God bless you!”
            </TextNode>

            <TextNode>
              She cast a look of the deepest disdain in his direction. “Why
              should you cling so hard to that wretched life of yours, Sergius?”
              said she. “It has done harm to many and good to none—not even to
              yourself. However, it is not for me to cause the frail thread to
              be snapped before God's time. I have enough already upon my soul
              since I crossed the threshold of this cursed house. But I must
              speak or I shall be too late.
            </TextNode>

            <TextNode>
              “I have said, gentlemen, that I am this man's wife. He was fifty
              and I a foolish girl of twenty when we married. It was in a city
              of Russia, a University—I will not name the place.”
            </TextNode>

            <TextNode>
              “God bless you, Anna!” murmured the old man again.
            </TextNode>

            <TextNode>
              “We were reformers—revolutionists—Nihilists, you understand. He
              and I and many more. Then there came a time of trouble, a police
              officer was killed, many were arrested, evidence was wanted, and
              in order to save his own life and to earn a great reward my
              husband betrayed his own wife and his companions. Yes, we were all
              arrested upon his confession. Some of us found our way to the
              gallows and some to Siberia. I was among these last, but my term
              was not for life. My husband came to England with his ill-gotten
              gains, and has lived in quiet ever since, knowing well that if the
              Brotherhood knew where he was not a week would pass before justice
              would be done.”
            </TextNode>

            <TextNode>
              The old man reached out a trembling hand and helped himself to a
              cigarette. “I am in your hands, Anna,” said he. “You were always
              good to me.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I have not yet told you the height of his villainy,” said she.
              “Among our comrades of the Order there was one who was the friend
              of my heart. He was noble, unselfish, loving—all that my husband
              was not. He hated violence. We were all guilty—if that is
              guilt—but he was not. He wrote for ever dissuading us from such a
              course. These letters would have saved him. So would my diary, in
              which from day to day I had entered both my feelings towards him
              and the view which each of us had taken. My husband found and kept
              both diary and letters. He hid them, and he tried hard to swear
              away the young man's life. In this he failed, but Alexis was sent
              a convict to Siberia, where now, at this moment, he works in a
              salt mine. Think of that, you villain, you villain; now, now, at
              this very moment, Alexis, a man whose name you are not worthy to
              speak, works and lives like a slave, and yet I have your life in
              my hands and I let you go.”
            </TextNode>

            <TextNode>
              “You were always a noble woman, Anna,” said the old man, puffing
              at his cigarette.
            </TextNode>

            <TextNode>
              She had risen, but she fell back again with a little cry of pain.
            </TextNode>

            <TextNode>
              “I must finish,” she said. “When my term was over I set myself to
              get the diary and letters which, if sent to the Russian
              Government, would procure my friend's release. I knew that my
              husband had come to England. After months of searching I
              discovered where he was. I knew that he still had the diary, for
              when I was in Siberia I had a letter from him once reproaching me
              and quoting some passages from its pages. Yet I was sure that with
              his revengeful nature he would never give it to me of his own free
              will. I must get it for myself. With this object I engaged an
              agent from a private detective firm, who entered my husband's
              house as secretary—it was your second secretary, Sergius, the one
              who left you so hurriedly. He found that papers were kept in the
              cupboard, and he got an impression of the key. He would not go
              farther. He furnished me with a plan of the house, and he told me
              that in the forenoon the study was always empty, as the secretary
              was employed up here. So at last I took my courage in both hands
              and I came down to get the papers for myself. I succeeded, but at
              what a cost!
            </TextNode>

            <TextNode>
              “I had just taken the papers and was locking the cupboard when the
              young man seized me. I had seen him already that morning. He had
              met me in the road and I had asked him to tell me where Professor
              Coram lived, not knowing that he was in his employ.”
            </TextNode>

            <TextNode>
              “Exactly! exactly!” said Holmes. “The secretary came back and told
              his employer of the woman he had met. Then in his last breath he
              tried to send a message that it was she—the she whom he had just
              discussed with him.”
            </TextNode>

            <TextNode>
              “You must let me speak,” said the woman, in an imperative voice,
              and her face contracted as if in pain. “When he had fallen I
              rushed from the room, chose the wrong door, and found myself in my
              husband's room. He spoke of giving me up. I showed him that if he
              did so his life was in my hands. If he gave me to the law I could
              give him to the Brotherhood. It was not that I wished to live for
              my own sake, but it was that I desired to accomplish my purpose.
              He knew that I would do what I said—that his own fate was involved
              in mine. For that reason and for no other he shielded me. He
              thrust me into that dark hiding-place, a relic of old days, known
              only to himself. He took his meals in his own room, and so was
              able to give me part of his food. It was agreed that when the
              police left the house I should slip away by night and come back no
              more. But in some way you have read our plans.” She tore from the
              bosom of her dress a small packet. “These are my last words,” said
              she; “here is the packet which will save Alexis. I confide it to
              your honour and to your love of justice. Take it! You will deliver
              it at the Russian Embassy. Now I have done my duty, and—”
            </TextNode>
            <TextNode>
              “Stop her!” cried Holmes. He had bounded across the room and had
              wrenched a small phial from her hand.
            </TextNode>

            <TextNode>
              “Too late!” she said, sinking back on the bed. “Too late! I took
              the poison before I left my hiding-place. My head swims! I am
              going! I charge you, sir, to remember the packet.”
            </TextNode>

            <TextNode>
              “A simple case, and yet in some ways an instructive one,” Holmes
              remarked, as we travelled back to town. “It hinged from the outset
              upon the pince-nez. But for the fortunate chance of the dying man
              having seized these I am not sure that we could ever have reached
              our solution. It was clear to me from the strength of the glasses
              that the wearer must have been very blind and helpless when
              deprived of them. When you asked me to believe that she walked
              along a narrow strip of grass without once making a false step I
              remarked, as you may remember, that it was a noteworthy
              performance. In my mind I set it down as an impossible
              performance, save in the unlikely case that she had a second pair
              of glasses. I was forced, therefore, to seriously consider the
              hypothesis that she had remained within the house. On perceiving
              the similarity of the two corridors it became clear that she might
              very easily have made such a mistake, and in that case it was
              evident that she must have entered the Professor's room. I was
              keenly on the alert, therefore, for whatever would bear out this
              supposition, and I examined the room narrowly for anything in the
              shape of a hiding-place. The carpet seemed continuous and firmly
              nailed, so I dismissed the idea of a trap-door. There might well
              be a recess behind the books. As you are aware, such devices are
              common in old libraries. I observed that books were piled on the
              floor at all other points, but that one bookcase was left clear.
              This, then, might be the door. I could see no marks to guide me,
              but the carpet was of a dun colour, which lends itself very well
              to examination. I therefore smoked a great number of those
              excellent cigarettes, and I dropped the ash all over the space in
              front of the suspected bookcase. It was a simple trick, but
              exceedingly effective. I then went downstairs and I ascertained,
              in your presence, Watson, without your perceiving the drift of my
              remarks, that Professor Coram's consumption of food had
              increased—as one would expect when he is supplying a second
              person. We then ascended to the room again, when, by upsetting the
              cigarette-box, I obtained a very excellent view of the floor, and
              was able to see quite clearly, from the traces upon the cigarette
              ash, that the prisoner had, in our absence, come out from her
              retreat. Well, Hopkins, here we are at Charing Cross, and I
              congratulate you on having brought your case to a successful
              conclusion. You are going to head-quarters, no doubt. I think,
              Watson, you and I will drive together to the Russian Embassy.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page203;
