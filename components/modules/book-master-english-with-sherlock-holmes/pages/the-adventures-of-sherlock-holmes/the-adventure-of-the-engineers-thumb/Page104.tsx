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

function Page104({
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
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;ENGINEER'S THUMB"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Of all the problems which have been submitted to my friend, Mr.
              Sherlock Holmes, for solution during the years of our intimacy,
              there were only two which I was the means of introducing to his
              notice—that of Mr. Hatherley's thumb, and that of Colonel
              Warburton's madness. Of these the latter may have afforded a finer
              field for an acute and original observer, but the other was so
              strange in its inception and so dramatic in its details that it
              may be the more worthy of being placed upon record, even if it
              gave my friend fewer openings for those deductive methods of
              reasoning by which he achieved such remarkable results. The story
              has, I believe, been told more than once in the newspapers, but,
              like all such narratives, its effect is much less striking when
              set forth <span className='italic'>en bloc</span> in a single
              half-column of print than when the facts slowly evolve before your
              own eyes, and the mystery clears gradually away as each new
              discovery furnishes a step which leads on to the complete truth.
              At the time the circumstances made a deep impression upon me, and
              the lapse of two years has hardly served to weaken the effect.
            </TextNode>

            <TextNode>
              It was in the summer of '89, not long after my marriage, that the
              events occurred which I am now about to summarise. I had returned
              to civil practice and had finally abandoned Holmes in his Baker
              Street rooms, although I continually visited him and occasionally
              even persuaded him to forgo his Bohemian habits so far as to come
              and visit us. My practice had steadily increased, and as I
              happened to live at no very great distance from Paddington
              Station, I got a few patients from among the officials. One of
              these, whom I had cured of a painful and lingering disease, was
              never weary of advertising my virtues and of endeavouring to send
              me on every sufferer over whom he might have any influence.
            </TextNode>

            <TextNode>
              One morning, at a little before seven o'clock, I was awakened by
              the maid tapping at the door to announce that two men had come
              from Paddington and were waiting in the consulting-room. I dressed
              hurriedly, for I knew by experience that railway cases were seldom
              trivial, and hastened downstairs. As I descended, my old ally, the
              guard, came out of the room and closed the door tightly behind
              him.
            </TextNode>

            <TextNode>
              “I've got him here,” he whispered, jerking his thumb over his
              shoulder; “he's all right.”
            </TextNode>

            <TextNode>
              “What is it, then?” I asked, for his manner suggested that it was
              some strange creature which he had caged up in my room.
            </TextNode>

            <TextNode>
              “It's a new patient,” he whispered. “I thought I'd bring him round
              myself; then he couldn't slip away. There he is, all safe and
              sound. I must go now, Doctor; I have my dooties, just the same as
              you.” And off he went, this trusty tout, without even giving me
              time to thank him.
            </TextNode>

            <TextNode>
              I entered my consulting-room and found a gentleman seated by the
              table. He was quietly dressed in a suit of heather tweed with a
              soft cloth cap which he had laid down upon my books. Round one of
              his hands he had a handkerchief wrapped, which was mottled all
              over with bloodstains. He was young, not more than
              five-and-twenty, I should say, with a strong, masculine face; but
              he was exceedingly pale and gave me the impression of a man who
              was suffering from some strong agitation, which it took all his
              strength of mind to control.
            </TextNode>

            <TextNode>
              “I am sorry to knock you up so early, Doctor,” said he, “but I
              have had a very serious accident during the night. I came in by
              train this morning, and on inquiring at Paddington as to where I
              might find a doctor, a worthy fellow very kindly escorted me here.
              I gave the maid a card, but I see that she has left it upon the
              side-table.”
            </TextNode>

            <TextNode>
              I took it up and glanced at it. “Mr. Victor Hatherley, hydraulic
              engineer, 16A, Victoria Street (3rd floor).” That was the name,
              style, and abode of my morning visitor. “I regret that I have kept
              you waiting,” said I, sitting down in my library-chair. “You are
              fresh from a night journey, I understand, which is in itself a
              monotonous occupation.”
            </TextNode>

            <TextNode>
              “Oh, my night could not be called monotonous,” said he, and
              laughed. He laughed very heartily, with a high, ringing note,
              leaning back in his chair and shaking his sides. All my medical
              instincts rose up against that laugh.
            </TextNode>

            <TextNode>
              “Stop it!” I cried; “pull yourself together!” and I poured out
              some water from a caraffe.
            </TextNode>

            <TextNode>
              It was useless, however. He was off in one of those hysterical
              outbursts which come upon a strong nature when some great crisis
              is over and gone. Presently he came to himself once more, very
              weary and pale-looking.
            </TextNode>

            <TextNode>
              “I have been making a fool of myself,” he gasped.
            </TextNode>

            <TextNode>
              “Not at all. Drink this.” I dashed some brandy into the water, and
              the colour began to come back to his bloodless cheeks.
            </TextNode>

            <TextNode>
              “That's better!” said he. “And now, Doctor, perhaps you would
              kindly attend to my thumb, or rather to the place where my thumb
              used to be.”
            </TextNode>

            <TextNode>
              He unwound the handkerchief and held out his hand. It gave even my
              hardened nerves a shudder to look at it. There were four
              protruding fingers and a horrid red, spongy surface where the
              thumb should have been. It had been hacked or torn right out from
              the roots.
            </TextNode>

            <TextNode>
              “Good heavens!” I cried, “this is a terrible injury. It must have
              bled considerably.”
            </TextNode>

            <TextNode>
              “Yes, it did. I fainted when it was done, and I think that I must
              have been senseless for a long time. When I came to I found that
              it was still bleeding, so I tied one end of my handkerchief very
              tightly round the wrist and braced it up with a twig.”
            </TextNode>

            <TextNode>“Excellent! You should have been a surgeon.”</TextNode>

            <TextNode>
              “It is a question of hydraulics, you see, and came within my own
              province.”
            </TextNode>

            <TextNode>
              “This has been done,” said I, examining the wound, “by a very
              heavy and sharp instrument.”
            </TextNode>

            <TextNode>“A thing like a cleaver,” said he.</TextNode>

            <TextNode>“An accident, I presume?”</TextNode>

            <TextNode>“By no means.”</TextNode>

            <TextNode>“What! a murderous attack?”</TextNode>

            <TextNode>“Very murderous indeed.”</TextNode>

            <TextNode>“You horrify me.”</TextNode>

            <TextNode>
              I sponged the wound, cleaned it, dressed it, and finally covered
              it over with cotton wadding and carbolised bandages. He lay back
              without wincing, though he bit his lip from time to time.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “How is that?” I asked when I had finished.
            </TextNode>

            <TextNode>
              “Capital! Between your brandy and your bandage, I feel a new man.
              I was very weak, but I have had a good deal to go through.”
            </TextNode>

            <TextNode>
              “Perhaps you had better not speak of the matter. It is evidently
              trying to your nerves.”
            </TextNode>

            <TextNode>
              “Oh, no, not now. I shall have to tell my tale to the police; but,
              between ourselves, if it were not for the convincing evidence of
              this wound of mine, I should be surprised if they believed my
              statement, for it is a very extraordinary one, and I have not much
              in the way of proof with which to back it up; and, even if they
              believe me, the clues which I can give them are so vague that it
              is a question whether justice will be done.”
            </TextNode>

            <TextNode>
              “Ha!” cried I, “if it is anything in the nature of a problem which
              you desire to see solved, I should strongly recommend you to come
              to my friend, Mr. Sherlock Holmes, before you go to the official
              police.”
            </TextNode>

            <TextNode>
              “Oh, I have heard of that fellow,” answered my visitor, “and I
              should be very glad if he would take the matter up, though of
              course I must use the official police as well. Would you give me
              an introduction to him?”
            </TextNode>

            <TextNode>
              “I'll do better. I'll take you round to him myself.”
            </TextNode>

            <TextNode>“I should be immensely obliged to you.”</TextNode>

            <TextNode>
              “We'll call a cab and go together. We shall just be in time to
              have a little breakfast with him. Do you feel equal to it?”
            </TextNode>

            <TextNode>
              “Yes; I shall not feel easy until I have told my story.”
            </TextNode>

            <TextNode>
              “Then my servant will call a cab, and I shall be with you in an
              instant.” I rushed upstairs, explained the matter shortly to my
              wife, and in five minutes was inside a hansom, driving with my new
              acquaintance to Baker Street.
            </TextNode>

            <TextNode>
              Sherlock Holmes was, as I expected, lounging about his
              sitting-room in his dressing-gown, reading the agony column
              of&nbsp;
              <span className='italic'>The Times</span> and smoking his
              before-breakfast pipe, which was composed of all the plugs and
              dottles left from his smokes of the day before, all carefully
              dried and collected on the corner of the mantelpiece. He received
              us in his quietly genial fashion, ordered fresh rashers and eggs,
              and joined us in a hearty meal. When it was concluded he settled
              our new acquaintance upon the sofa, placed a pillow beneath his
              head, and laid a glass of brandy and water within his reach.
            </TextNode>

            <TextNode>
              “It is easy to see that your experience has been no common one,
              Mr. Hatherley,” said he. “Pray, lie down there and make yourself
              absolutely at home. Tell us what you can, but stop when you are
              tired and keep up your strength with a little stimulant.”
            </TextNode>

            <TextNode>
              “Thank you,” said my patient. “but I have felt another man since
              the doctor bandaged me, and I think that your breakfast has
              completed the cure. I shall take up as little of your valuable
              time as possible, so I shall start at once upon my peculiar
              experiences.”
            </TextNode>

            <TextNode>
              Holmes sat in his big armchair with the weary, heavy-lidded
              expression which veiled his keen and eager nature, while I sat
              opposite to him, and we listened in silence to the strange story
              which our visitor detailed to us.
            </TextNode>

            <TextNode>
              “You must know,” said he, “that I am an orphan and a bachelor,
              residing alone in lodgings in London. By profession I am a
              hydraulic engineer, and I have had considerable experience of my
              work during the seven years that I was apprenticed to Venner &
              Matheson, the well-known firm, of Greenwich. Two years ago, having
              served my time, and having also come into a fair sum of money
              through my poor father's death, I determined to start in business
              for myself and took professional chambers in Victoria Street.
            </TextNode>

            <TextNode>
              “I suppose that everyone finds his first independent start in
              business a dreary experience. To me it has been exceptionally so.
              During two years I have had three consultations and one small job,
              and that is absolutely all that my profession has brought me. My
              gross takings amount to £27 10s. Every day, from nine in the
              morning until four in the afternoon, I waited in my little den,
              until at last my heart began to sink, and I came to believe that I
              should never have any practice at all.
            </TextNode>

            <TextNode>
              “Yesterday, however, just as I was thinking of leaving the office,
              my clerk entered to say there was a gentleman waiting who wished
              to see me upon business. He brought up a card, too, with the name
              of ‘Colonel Lysander Stark’ engraved upon it. Close at his heels
              came the colonel himself, a man rather over the middle size, but
              of an exceeding thinness. I do not think that I have ever seen so
              thin a man. His whole face sharpened away into nose and chin, and
              the skin of his cheeks was drawn quite tense over his outstanding
              bones. Yet this emaciation seemed to be his natural habit, and due
              to no disease, for his eye was bright, his step brisk, and his
              bearing assured. He was plainly but neatly dressed, and his age, I
              should judge, would be nearer forty than thirty.
            </TextNode>

            <TextNode>
              “ ‘Mr. Hatherley?’ said he, with something of a German accent.
              ‘You have been recommended to me, Mr. Hatherley, as being a man
              who is not only proficient in his profession but is also discreet
              and capable of preserving a secret.’
            </TextNode>

            <TextNode>
              “I bowed, feeling as flattered as any young man would at such an
              address. ‘May I ask who it was who gave me so good a character?’
            </TextNode>

            <TextNode>
              “ ‘Well, perhaps it is better that I should not tell you that just
              at this moment. I have it from the same source that you are both
              an orphan and a bachelor and are residing alone in London.’
            </TextNode>

            <TextNode>
              “ ‘That is quite correct,’ I answered; ‘but you will excuse me if
              I say that I cannot see how all this bears upon my professional
              qualifications. I understand that it was on a professional matter
              that you wished to speak to me?’
            </TextNode>

            <TextNode>
              “ ‘Undoubtedly so. But you will find that all I say is really to
              the point. I have a professional commission for you, but absolute
              secrecy is quite essential—absolute secrecy, you understand, and
              of course we may expect that more from a man who is alone than
              from one who lives in the bosom of his family.’
            </TextNode>

            <TextNode>
              “ ‘If I promise to keep a secret,’ said I, ‘you may absolutely
              depend upon my doing so.’
            </TextNode>

            <TextNode>
              “He looked very hard at me as I spoke, and it seemed to me that I
              had never seen so suspicious and questioning an eye.
            </TextNode>

            <TextNode>“ ‘Do you promise, then?’ said he at last.</TextNode>

            <TextNode>“ ‘Yes, I promise.’</TextNode>

            <TextNode>
              “ ‘Absolute and complete silence before, during, and after? No
              reference to the matter at all, either in word or writing?’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page104;
