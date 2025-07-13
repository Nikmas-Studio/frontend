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

function Page175({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NORWOOD&nbsp;BUILDER'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Perhaps I can help you to see that and one or two other things as
              well,” said Holmes. “Kindly summon your men, and I will try.”
            </TextNode>

            <TextNode>
              Five minutes later three policemen had assembled in the hall.
            </TextNode>

            <TextNode>
              “In the outhouse you will find a considerable quantity of straw,”
              said Holmes. “I will ask you to carry in two bundles of it. I
              think it will be of the greatest assistance in producing the
              witness whom I require. Thank you very much. I believe you have
              some matches in your pocket, Watson. Now, Mr. Lestrade, I will ask
              you all to accompany me to the top landing.”
            </TextNode>

            <TextNode>
              As I have said, there was a broad corridor there, which ran
              outside three empty bedrooms. At one end of the corridor we were
              all marshalled by Sherlock Holmes, the constables grinning and
              Lestrade staring at my friend with amazement, expectation, and
              derision chasing each other across his features. Holmes stood
              before us with the air of a conjurer who is performing a trick.
            </TextNode>

            <TextNode>
              “Would you kindly send one of your constables for two buckets of
              water? Put the straw on the floor here, free from the wall on
              either side. Now I think that we are all ready.”
            </TextNode>

            <TextNode>
              Lestrade's face had begun to grow red and angry.
            </TextNode>

            <TextNode>
              “I don't know whether you are playing a game with us, Mr. Sherlock
              Holmes,” said he. “If you know anything, you can surely say it
              without all this tomfoolery.”
            </TextNode>

            <TextNode>
              “I assure you, my good Lestrade, that I have an excellent reason
              for everything that I do. You may possibly remember that you
              chaffed me a little some hours ago, when the sun seemed on your
              side of the hedge, so you must not grudge me a little pomp and
              ceremony now. Might I ask you, Watson, to open that window, and
              then to put a match to the edge of the straw?”
            </TextNode>

            <TextNode>
              I did so, and, driven by the draught, a coil of grey smoke swirled
              down the corridor, while the dry straw crackled and flamed.
            </TextNode>

            <TextNode>
              “Now we must see if we can find this witness for you, Lestrade.
              Might I ask you all to join in the cry of ‘Fire!’? Now, then; one,
              two, three—”
            </TextNode>

            <TextNode>“Fire!” we all yelled.</TextNode>

            <TextNode>“Thank you. I will trouble you once again.”</TextNode>

            <TextNode>“Fire!”</TextNode>

            <TextNode>“Just once more, gentlemen, and all together.”</TextNode>

            <TextNode>“Fire!” The shout must have rung over Norwood.</TextNode>

            <TextNode>
              It had hardly died away when an amazing thing happened. A door
              suddenly flew open out of what appeared to be solid wall at the
              end of the corridor, and a little, wizened man darted out of it,
              like a rabbit out of its burrow.
            </TextNode>

            <TextNode>
              “Capital!” said Holmes, calmly. “Watson, a bucket of water over
              the straw. That will do! Lestrade, allow me to present you with
              your principal missing witness, Mr. Jonas Oldacre.”
            </TextNode>

            <TextNode>
              The detective stared at the new-comer with blank amazement. The
              latter was blinking in the bright light of the corridor, and
              peering at us and at the smouldering fire. It was an odious
              face—crafty, vicious, malignant, with shifty, light-grey eyes and
              white eyelashes.
            </TextNode>

            <TextNode>
              “What's this, then?” said Lestrade at last. “What have you been
              doing all this time, eh?”
            </TextNode>

            <TextNode>
              Oldacre gave an uneasy laugh, shrinking back from the furious red
              face of the angry detective.
            </TextNode>

            <TextNode>“I have done no harm.”</TextNode>

            <TextNode>
              “No harm? You have done your best to get an innocent man hanged.
              If it wasn't for this gentleman here, I am not sure that you would
              not have succeeded.”
            </TextNode>

            <TextNode>The wretched creature began to whimper.</TextNode>

            <TextNode>
              “I am sure, sir, it was only my practical joke.”
            </TextNode>

            <TextNode>
              “Oh! a joke, was it? You won't find the laugh on your side, I
              promise you. Take him down and keep him in the sitting-room until
              I come. Mr. Holmes,” he continued, when they had gone, “I could
              not speak before the constables, but I don't mind saying, in the
              presence of Dr. Watson, that this is the brightest thing that you
              have done yet, though it is a mystery to me how you did it. You
              have saved an innocent man's life, and you have prevented a very
              grave scandal, which would have ruined my reputation in the
              Force.”
            </TextNode>

            <TextNode>
              Holmes smiled and clapped Lestrade upon the shoulder.
            </TextNode>

            <TextNode>
              “Instead of being ruined, my good sir, you will find that your
              reputation has been enormously enhanced. Just make a few
              alterations in that report which you were writing, and they will
              understand how hard it is to throw dust in the eyes of Inspector
              Lestrade.”
            </TextNode>

            <TextNode>“And you don't want your name to appear?”</TextNode>

            <TextNode>
              “Not at all. The work is its own reward. Perhaps I shall get the
              credit also at some distant day when I permit my zealous historian
              to lay out his foolscap once more—eh, Watson? Well, now, let us
              see where this rat has been lurking.”
            </TextNode>

            <TextNode>
              A lath-and-plaster partition had been run across the passage six
              feet from the end, with a door cunningly concealed in it. It was
              lit within by slits under the eaves. A few articles of furniture
              and a supply of food and water were within, together with a number
              of books and papers.
            </TextNode>

            <TextNode>
              “There's the advantage of being a builder,” said Holmes, as we
              came out. “He was able to fix up his own little hiding-place
              without any confederate—save, of course, that precious housekeeper
              of his, whom I should lose no time in adding to your bag,
              Lestrade.”
            </TextNode>

            <TextNode>
              “I'll take your advice. But how did you know of this place, Mr.
              Holmes?”
            </TextNode>

            <TextNode>
              “I made up my mind that the fellow was in hiding in the house.
              When I paced one corridor and found it six feet shorter than the
              corresponding one below, it was pretty clear where he was. I
              thought he had not the nerve to lie quiet before an alarm of fire.
              We could, of course, have gone in and taken him, but it amused me
              to make him reveal himself; besides, I owed you a little
              mystification, Lestrade, for your chaff in the morning.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Well, sir, you certainly got equal with me on that. But how in
              the world did you know that he was in the house at all?”
            </TextNode>

            <TextNode>
              “The thumb-mark, Lestrade. You said it was final; and so it was,
              in a very different sense. I knew it had not been there the day
              before. I pay a good deal of attention to matters of detail, as
              you may have observed, and I had examined the hall and was sure
              that the wall was clear. Therefore, it had been put on during the
              night.”
            </TextNode>

            <TextNode>“But how?”</TextNode>

            <TextNode>
              “Very simply. When those packets were sealed up, Jonas Oldacre got
              McFarlane to secure one of the seals by putting his thumb upon the
              soft wax. It would be done so quickly and so naturally that I dare
              say the young man himself has no recollection of it. Very likely
              it just so happened, and Oldacre had himself no notion of the use
              he would put it to. Brooding over the case in that den of his, it
              suddenly struck him what absolutely damning evidence he could make
              against McFarlane by using that thumb-mark. It was the simplest
              thing in the world for him to take a wax impression from the seal,
              to moisten it in as much blood as he could get from a pin-prick,
              and to put the mark upon the wall during the night, either with
              his own hand or with that of his housekeeper. If you examine among
              those documents which he took with him into his retreat I will lay
              you a wager that you find the seal with the thumb-mark upon it.”
            </TextNode>

            <TextNode>
              “Wonderful!” said Lestrade. “Wonderful! It's all as clear as
              crystal, as you put it. But what is the object of this deep
              deception, Mr. Holmes?”
            </TextNode>

            <TextNode>
              It was amusing to me to see how the detective's overbearing manner
              had changed suddenly to that of a child asking questions of its
              teacher.
            </TextNode>

            <TextNode>
              “Well, I don't think that is very hard to explain. A very deep,
              malicious, vindictive person is the gentleman who is now awaiting
              us downstairs. You know that he was once refused by McFarlane's
              mother? You don't! I told you that you should go to Blackheath
              first and Norwood afterwards. Well, this injury, as he would
              consider it, has rankled in his wicked, scheming brain, and all
              his life he has longed for vengeance, but never seen his chance.
              During the last year or two things have gone against him—secret
              speculation, I think—and he finds himself in a bad way. He
              determines to swindle his creditors, and for this purpose he pays
              large cheques to a certain Mr. Cornelius, who is, I imagine,
              himself under another name. I have not traced these cheques yet,
              but I have no doubt that they were banked under that name at some
              provincial town where Oldacre from time to time led a double
              existence. He intended to change his name altogether, draw this
              money, and vanish, starting life again elsewhere.”
            </TextNode>

            <TextNode>“Well, that's likely enough.”</TextNode>

            <TextNode>
              “It would strike him that in disappearing he might throw all
              pursuit off his track, and at the same time have an ample and
              crushing revenge upon his old sweetheart, if he could give the
              impression that he had been murdered by her only child. It was a
              masterpiece of villainy, and he carried it out like a master. The
              idea of the will, which would give an obvious motive for the
              crime, the secret visit unknown to his own parents, the retention
              of the stick, the blood, and the animal remains and buttons in the
              wood-pile, all were admirable. It was a net from which it seemed
              to me a few hours ago that there was no possible escape. But he
              had not that supreme gift of the artist, the knowledge of when to
              stop. He wished to improve that which was already perfect—to draw
              the rope tighter yet round the neck of his unfortunate victim—and
              so he ruined all. Let us descend, Lestrade. There are just one or
              two questions that I would ask him.”
            </TextNode>

            <TextNode>
              The malignant creature was seated in his own parlour with a
              policeman upon each side of him.
            </TextNode>

            <TextNode>
              “It was a joke, my good sir, a practical joke, nothing more,” he
              whined incessantly. “I assure you, sir, that I simply concealed
              myself in order to see the effect of my disappearance, and I am
              sure that you would not be so unjust as to imagine that I would
              have allowed any harm to befall poor young Mr. McFarlane.”
            </TextNode>

            <TextNode>
              “That's for a jury to decide,” said Lestrade. “Anyhow, we shall
              have you on a charge of conspiracy, if not for attempted murder.”
            </TextNode>

            <TextNode>
              “And you'll probably find that your creditors will impound the
              banking account of Mr. Cornelius,” said Holmes.
            </TextNode>

            <TextNode>
              The little man started and turned his malignant eyes upon my
              friend.
            </TextNode>

            <TextNode>
              “I have to thank you for a good deal,” said he. “Perhaps I'll pay
              my debt some day.”
            </TextNode>

            <TextNode>Holmes smiled indulgently.</TextNode>

            <TextNode>
              “I fancy that for some few years you will find your time very
              fully occupied,” said he. “By the way, what was it you put into
              the wood-pile besides your old trousers? A dead dog, or rabbits,
              or what? You won't tell? Dear me, how very unkind of you! Well,
              well, I dare say that a couple of rabbits would account both for
              the blood and for the charred ashes. If ever you write an account,
              Watson, you can make rabbits serve your turn.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page175;
