'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page113({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BERYL&nbsp;CORONET'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Holmes,” said I as I stood one morning in our bow-window looking
              down the street, “here is a madman coming along. It seems rather
              sad that his relatives should allow him to come out alone.”
            </TextNode>

            <TextNode>
              My friend rose lazily from his armchair and stood with his hands
              in the pockets of his dressing-gown, looking over my shoulder. It
              was a bright, crisp February morning, and the snow of the day
              before still lay deep upon the ground, shimmering brightly in the
              wintry sun. Down the centre of Baker Street it had been ploughed
              into a brown crumbly band by the traffic, but at either side and
              on the heaped-up edges of the foot-paths it still lay as white as
              when it fell. The grey pavement had been cleaned and scraped, but
              was still dangerously slippery, so that there were fewer
              passengers than usual. Indeed, from the direction of the
              Metropolitan Station no one was coming save the single gentleman
              whose eccentric conduct had drawn my attention.
            </TextNode>

            <TextNode>
              He was a man of about fifty, tall, portly, and imposing, with a
              massive, strongly marked face and a commanding figure. He was
              dressed in a sombre yet rich style, in black frock-coat, shining
              hat, neat brown gaiters, and well-cut pearl-grey trousers. Yet his
              actions were in absurd contrast to the dignity of his dress and
              features, for he was running hard, with occasional little springs,
              such as a weary man gives who is little accustomed to set any tax
              upon his legs. As he ran he jerked his hands up and down, waggled
              his head, and writhed his face into the most extraordinary
              contortions.
            </TextNode>

            <TextNode>
              “What on earth can be the matter with him?” I asked. “He is
              looking up at the numbers of the houses.”
            </TextNode>

            <TextNode>
              “I believe that he is coming here,” said Holmes, rubbing his
              hands.
            </TextNode>

            <TextNode>“Here?”</TextNode>

            <TextNode>
              “Yes; I rather think he is coming to consult me professionally. I
              think that I recognise the symptoms. Ha! did I not tell you?” As
              he spoke, the man, puffing and blowing, rushed at our door and
              pulled at our bell until the whole house resounded with the
              clanging.
            </TextNode>

            <TextNode>
              A few moments later he was in our room, still puffing, still
              gesticulating, but with so fixed a look of grief and despair in
              his eyes that our smiles were turned in an instant to horror and
              pity. For a while he could not get his words out, but swayed his
              body and plucked at his hair like one who has been driven to the
              extreme limits of his reason. Then, suddenly springing to his
              feet, he beat his head against the wall with such force that we
              both rushed upon him and tore him away to the centre of the room.
              Sherlock Holmes pushed him down into the easy-chair and, sitting
              beside him, patted his hand and chatted with him in the easy,
              soothing tones which he knew so well how to employ.
            </TextNode>

            <TextNode>
              “You have come to me to tell your story, have you not?” said he.
              “You are fatigued with your haste. Pray wait until you have
              recovered yourself, and then I shall be most happy to look into
              any little problem which you may submit to me.”
            </TextNode>

            <TextNode>
              The man sat for a minute or more with a heaving chest, fighting
              against his emotion. Then he passed his handkerchief over his
              brow, set his lips tight, and turned his face towards us.
            </TextNode>

            <TextNode>“No doubt you think me mad?” said he.</TextNode>

            <TextNode>
              “I see that you have had some great trouble,” responded Holmes.
            </TextNode>

            <TextNode>
              “God knows I have!—a trouble which is enough to unseat my reason,
              so sudden and so terrible is it. Public disgrace I might have
              faced, although I am a man whose character has never yet borne a
              stain. Private affliction also is the lot of every man; but the
              two coming together, and in so frightful a form, have been enough
              to shake my very soul. Besides, it is not I alone. The very
              noblest in the land may suffer unless some way be found out of
              this horrible affair.”
            </TextNode>

            <TextNode>
              “Pray compose yourself, sir,” said Holmes, “and let me have a
              clear account of who you are and what it is that has befallen
              you.”
            </TextNode>

            <TextNode>
              “My name,” answered our visitor, “is probably familiar to your
              ears. I am Alexander Holder, of the banking firm of Holder &
              Stevenson, of Threadneedle Street.”
            </TextNode>

            <TextNode>
              The name was indeed well known to us as belonging to the senior
              partner in the second largest private banking concern in the City
              of London. What could have happened, then, to bring one of the
              foremost citizens of London to this most pitiable pass? We waited,
              all curiosity, until with another effort he braced himself to tell
              his story.
            </TextNode>

            <TextNode>
              “I feel that time is of value,” said he; “that is why I hastened
              here when the police inspector suggested that I should secure your
              co-operation. I came to Baker Street by the Underground and
              hurried from there on foot, for the cabs go slowly through this
              snow. That is why I was so out of breath, for I am a man who takes
              very little exercise. I feel better now, and I will put the facts
              before you as shortly and yet as clearly as I can.
            </TextNode>

            <TextNode>
              “It is, of course, well known to you that in a successful banking
              business as much depends upon our being able to find remunerative
              investments for our funds as upon our increasing our connection
              and the number of our depositors. One of our most lucrative means
              of laying out money is in the shape of loans, where the security
              is unimpeachable. We have done a good deal in this direction
              during the last few years, and there are many noble families to
              whom we have advanced large sums upon the security of their
              pictures, libraries, or plate.
            </TextNode>

            <TextNode>
              “Yesterday morning I was seated in my office at the bank when a
              card was brought in to me by one of the clerks. I started when I
              saw the name, for it was that of none other than—well, perhaps
              even to you I had better say no more than that it was a name which
              is a household word all over the earth—one of the highest,
              noblest, most exalted names in England. I was overwhelmed by the
              honour and attempted, when he entered, to say so, but he plunged
              at once into business with the air of a man who wishes to hurry
              quickly through a disagreeable task.
            </TextNode>

            <TextNode>
              “‘Mr. Holder,’ said he, ‘I have been informed that you are in the
              habit of advancing money.’
            </TextNode>

            <TextNode>
              “‘The firm does so when the security is good.’ I answered.
            </TextNode>

            <TextNode>
              “‘It is absolutely essential to me,’ said he, ‘that I should have
              £50,000 at once. I could, of course, borrow so trifling a sum ten
              times over from my friends, but I much prefer to make it a matter
              of business and to carry out that business myself. In my position
              you can readily understand that it is unwise to place one's self
              under obligations.’
            </TextNode>

            <TextNode>
              “‘For how long, may I ask, do you want this sum?’ I asked.
            </TextNode>

            <TextNode>
              “‘Next Monday I have a large sum due to me, and I shall then most
              certainly repay what you advance, with whatever interest you think
              it right to charge. But it is very essential to me that the money
              should be paid at once.’
            </TextNode>

            <TextNode>
              “‘I should be happy to advance it without further parley from my
              own private purse,’ said I, ‘were it not that the strain would be
              rather more than it could bear. If, on the other hand, I am to do
              it in the name of the firm, then in justice to my partner I must
              insist that, even in your case, every businesslike precaution
              should be taken.’
            </TextNode>

            <TextNode>
              “‘I should much prefer to have it so,’ said he, raising up a
              square, black morocco case which he had laid beside his chair.
              ‘You have doubtless heard of the Beryl Coronet?’
            </TextNode>

            <TextNode>
              “‘One of the most precious public possessions of the empire,’ said
              I.
            </TextNode>

            <TextNode>
              “‘Precisely.’ He opened the case, and there, imbedded in soft,
              flesh-coloured velvet, lay the magnificent piece of jewellery
              which he had named. ‘There are thirty-nine enormous beryls,’ said
              he, ‘and the price of the gold chasing is incalculable. The lowest
              estimate would put the worth of the coronet at double the sum
              which I have asked. I am prepared to leave it with you as my
              security.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I took the precious case into my hands and looked in some
              perplexity from it to my illustrious client.
            </TextNode>

            <TextNode>“‘You doubt its value?’ he asked.</TextNode>

            <TextNode>“‘Not at all. I only doubt—’</TextNode>

            <TextNode>
              “‘The propriety of my leaving it. You may set your mind at rest
              about that. I should not dream of doing so were it not absolutely
              certain that I should be able in four days to reclaim it. It is a
              pure matter of form. Is the security sufficient?’
            </TextNode>

            <TextNode>“‘Ample.’</TextNode>

            <TextNode>
              “‘You understand, Mr. Holder, that I am giving you a strong proof
              of the confidence which I have in you, founded upon all that I
              have heard of you. I rely upon you not only to be discreet and to
              refrain from all gossip upon the matter but, above all, to
              preserve this coronet with every possible precaution because I
              need not say that a great public scandal would be caused if any
              harm were to befall it. Any injury to it would be almost as
              serious as its complete loss, for there are no beryls in the world
              to match these, and it would be impossible to replace them. I
              leave it with you, however, with every confidence, and I shall
              call for it in person on Monday morning.’
            </TextNode>

            <TextNode>
              “Seeing that my client was anxious to leave, I said no more but,
              calling for my cashier, I ordered him to pay over fifty £1000
              notes. When I was alone once more, however, with the precious case
              lying upon the table in front of me, I could not but think with
              some misgivings of the immense responsibility which it entailed
              upon me. There could be no doubt that, as it was a national
              possession, a horrible scandal would ensue if any misfortune
              should occur to it. I already regretted having ever consented to
              take charge of it. However, it was too late to alter the matter
              now, so I locked it up in my private safe and turned once more to
              my work.
            </TextNode>

            <TextNode>
              “When evening came I felt that it would be an imprudence to leave
              so precious a thing in the office behind me. Bankers' safes had
              been forced before now, and why should not mine be? If so, how
              terrible would be the position in which I should find myself! I
              determined, therefore, that for the next few days I would always
              carry the case backward and forward with me, so that it might
              never be really out of my reach. With this intention, I called a
              cab and drove out to my house at Streatham, carrying the jewel
              with me. I did not breathe freely until I had taken it upstairs
              and locked it in the bureau of my dressing-room.
            </TextNode>

            <TextNode>
              “And now a word as to my household, Mr. Holmes, for I wish you to
              thoroughly understand the situation. My groom and my page sleep
              out of the house, and may be set aside altogether. I have three
              maid-servants who have been with me a number of years and whose
              absolute reliability is quite above suspicion. Another, Lucy Parr,
              the second waiting-maid, has only been in my service a few months.
              She came with an excellent character, however, and has always
              given me satisfaction. She is a very pretty girl and has attracted
              admirers who have occasionally hung about the place. That is the
              only drawback which we have found to her, but we believe her to be
              a thoroughly good girl in every way.
            </TextNode>

            <TextNode>
              “So much for the servants. My family itself is so small that it
              will not take me long to describe it. I am a widower and have an
              only son, Arthur. He has been a disappointment to me, Mr. Holmes—a
              grievous disappointment. I have no doubt that I am myself to
              blame. People tell me that I have spoiled him. Very likely I have.
              When my dear wife died I felt that he was all I had to love. I
              could not bear to see the smile fade even for a moment from his
              face. I have never denied him a wish. Perhaps it would have been
              better for both of us had I been sterner, but I meant it for the
              best.
            </TextNode>

            <TextNode>
              “It was naturally my intention that he should succeed me in my
              business, but he was not of a business turn. He was wild, wayward,
              and, to speak the truth, I could not trust him in the handling of
              large sums of money. When he was young he became a member of an
              aristocratic club, and there, having charming manners, he was soon
              the intimate of a number of men with long purses and expensive
              habits. He learned to play heavily at cards and to squander money
              on the turf, until he had again and again to come to me and
              implore me to give him an advance upon his allowance, that he
              might settle his debts of honour. He tried more than once to break
              away from the dangerous company which he was keeping, but each
              time the influence of his friend, Sir George Burnwell, was enough
              to draw him back again.
            </TextNode>

            <TextNode>
              “And, indeed, I could not wonder that such a man as Sir George
              Burnwell should gain an influence over him, for he has frequently
              brought him to my house, and I have found myself that I could
              hardly resist the fascination of his manner. He is older than
              Arthur, a man of the world to his finger-tips, one who had been
              everywhere, seen everything, a brilliant talker, and a man of
              great personal beauty. Yet when I think of him in cold blood, far
              away from the glamour of his presence, I am convinced from his
              cynical speech and the look which I have caught in his eyes that
              he is one who should be deeply distrusted. So I think, and so,
              too, thinks my little Mary, who has a woman's quick insight into
              character.
            </TextNode>

            <TextNode>
              “And now there is only she to be described. She is my niece; but
              when my brother died five years ago and left her alone in the
              world I adopted her, and have looked upon her ever since as my
              daughter. She is a sunbeam in my house—sweet, loving, beautiful, a
              wonderful manager and housekeeper, yet as tender and quiet and
              gentle as a woman could be. She is my right hand. I do not know
              what I could do without her. In only one matter has she ever gone
              against my wishes. Twice my boy has asked her to marry him, for he
              loves her devotedly, but each time she has refused him. I think
              that if anyone could have drawn him into the right path it would
              have been she, and that his marriage might have changed his whole
              life; but now, alas! it is too late—forever too late!
            </TextNode>

            <TextNode>
              “Now, Mr. Holmes, you know the people who live under my roof, and
              I shall continue with my miserable story.
            </TextNode>

            <TextNode>
              “When we were taking coffee in the drawing-room that night after
              dinner, I told Arthur and Mary my experience, and of the precious
              treasure which we had under our roof, suppressing only the name of
              my client. Lucy Parr, who had brought in the coffee, had, I am
              sure, left the room; but I cannot swear that the door was closed.
              Mary and Arthur were much interested and wished to see the famous
              coronet, but I thought it better not to disturb it.
            </TextNode>

            <TextNode>“‘Where have you put it?’ asked Arthur.</TextNode>

            <TextNode>“‘In my own bureau.’</TextNode>

            <TextNode>
              “‘Well, I hope to goodness the house won't be burgled during the
              night.’ said he.
            </TextNode>

            <TextNode>“‘It is locked up,’ I answered.</TextNode>

            <TextNode>
              “‘Oh, any old key will fit that bureau. When I was a youngster I
              have opened it myself with the key of the box-room cupboard.’
            </TextNode>

            <TextNode>
              “He often had a wild way of talking, so that I thought little of
              what he said. He followed me to my room, however, that night with
              a very grave face.
            </TextNode>

            <TextNode>
              “‘Look here, dad,’ said he with his eyes cast down, ‘can you let
              me have £200?’
            </TextNode>

            <TextNode>
              “‘No, I cannot!’ I answered sharply. ‘I have been far too generous
              with you in money matters.’
            </TextNode>

            <TextNode>
              “‘You have been very kind,’ said he, ‘but I must have this money,
              or else I can never show my face inside the club again.’
            </TextNode>

            <TextNode>“‘And a very good thing, too!’ I cried.</TextNode>

            <TextNode>
              “‘Yes, but you would not have me leave it a dishonoured man,’ said
              he. ‘I could not bear the disgrace. I must raise the money in some
              way, and if you will not let me have it, then I must try other
              means.’
            </TextNode>

            <TextNode>
              “I was very angry, for this was the third demand during the month.
              ‘You shall not have a farthing from me,’ I cried, on which he
              bowed and left the room without another word.
            </TextNode>

            <TextNode>
              “When he was gone I unlocked my bureau, made sure that my treasure
              was safe, and locked it again. Then I started to go round the
              house to see that all was secure—a duty which I usually leave to
              Mary but which I thought it well to perform myself that night. As
              I came down the stairs I saw Mary herself at the side window of
              the hall, which she closed and fastened as I approached.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page113;
