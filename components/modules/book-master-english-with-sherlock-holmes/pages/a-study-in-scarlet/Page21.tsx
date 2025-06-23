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

function Page21({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Patience, my friend, patience! You will find in time that it has
              everything to do with it. I shall now add a little milk to make
              the mixture palatable, and on presenting it to the dog we find
              that he laps it up readily enough.”
            </TextNode>

            <TextNode>
              As he spoke he turned the contents of the wine glass into a saucer
              and placed it in front of the terrier, who speedily licked it dry.
              Sherlock Holmes' earnest demeanour had so far convinced us that we
              all sat in silence, watching the animal intently, and expecting
              some startling effect. None such appeared, however. The dog
              continued to lie stretched upon the cushion, breathing in a
              laboured way, but apparently neither the better nor the worse for
              its draught.
            </TextNode>

            <TextNode>
              Holmes had taken out his watch, and as minute followed minute
              without result, an expression of the utmost chagrin and
              disappointment appeared upon his features. He gnawed his lip,
              drummed his fingers upon the table, and showed every other symptom
              of acute impatience. So great was his emotion, that I felt
              sincerely sorry for him, while the two detectives smiled
              derisively, by no means displeased at this check which he had met.
            </TextNode>

            <TextNode>
              “It can't be a coincidence,” he cried, at last springing from his
              chair and pacing wildly up and down the room; “it is impossible
              that it should be a mere coincidence. The very pills which I
              suspected in the case of Drebber are actually found after the
              death of Stangerson. And yet they are inert. What can it mean?
              Surely my whole chain of reasoning cannot have been false. It is
              impossible! And yet this wretched dog is none the worse. Ah, I
              have it! I have it!” With a perfect shriek of delight he rushed to
              the box, cut the other pill in two, dissolved it, added milk, and
              presented it to the terrier. The unfortunate creature's tongue
              seemed hardly to have been moistened in it before it gave a
              convulsive shiver in every limb, and lay as rigid and lifeless as
              if it had been struck by lightning.
            </TextNode>

            <TextNode>
              Sherlock Holmes drew a long breath, and wiped the perspiration
              from his forehead. “I should have more faith,” he said; “I ought
              to know by this time that when a fact appears to be opposed to a
              long train of deductions, it invariably proves to be capable of
              bearing some other interpretation. Of the two pills in that box
              one was of the most deadly poison, and the other was entirely
              harmless. I ought to have known that before ever I saw the box at
              all.”
            </TextNode>

            <TextNode>
              This last statement appeared to me to be so startling, that I
              could hardly believe that he was in his sober senses. There was
              the dead dog, however, to prove that his conjecture had been
              correct. It seemed to me that the mists in my own mind were
              gradually clearing away, and I began to have a dim, vague
              perception of the truth.
            </TextNode>

            <TextNode>
              “All this seems strange to you,” continued Holmes, “because you
              failed at the beginning of the inquiry to grasp the importance of
              the single real clue which was presented to you. I had the good
              fortune to seize upon that, and everything which has occurred
              since then has served to confirm my original supposition, and,
              indeed, was the logical sequence of it. Hence things which have
              perplexed you and made the case more obscure, have served to
              enlighten me and to strengthen my conclusions. It is a mistake to
              confound strangeness with mystery. The most commonplace crime is
              often the most mysterious because it presents no new or special
              features from which deductions may be drawn. This murder would
              have been infinitely more difficult to unravel had the body of the
              victim been simply found lying in the roadway without any of those
              outré and sensational accompaniments which have rendered it
              remarkable. These strange details, far from making the case more
              difficult, have really had the effect of making it less so.”
            </TextNode>

            <TextNode>
              Mr. Gregson, who had listened to this address with considerable
              impatience, could contain himself no longer. “Look here, Mr.
              Sherlock Holmes,” he said, “we are all ready to acknowledge that
              you are a smart man, and that you have your own methods of
              working. We want something more than mere theory and preaching
              now, though. It is a case of taking the man. I have made my case
              out, and it seems I was wrong. Young Charpentier could not have
              been engaged in this second affair. Lestrade went after his man,
              Stangerson, and it appears that he was wrong too. You have thrown
              out hints here, and hints there, and seem to know more than we do,
              but the time has come when we feel that we have a right to ask you
              straight how much you do know of the business. Can you name the
              man who did it?”
            </TextNode>

            <TextNode>
              “I cannot help feeling that Gregson is right, sir,” remarked
              Lestrade. “We have both tried, and we have both failed. You have
              remarked more than once since I have been in the room that you had
              all the evidence which you require. Surely you will not withhold
              it any longer.”
            </TextNode>

            <TextNode>
              “Any delay in arresting the assassin,” I observed, “might give him
              time to perpetrate some fresh atrocity.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Thus pressed by us all, Holmes showed signs of irresolution. He
              continued to walk up and down the room with his head sunk on his
              chest and his brows drawn down, as was his habit when lost in
              thought.
            </TextNode>

            <TextNode>
              “There will be no more murders,” he said at last, stopping
              abruptly and facing us. “You can put that consideration out of the
              question. You have asked me if I know the name of the assassin. I
              do. The mere knowing of his name is a small thing, however,
              compared with the power of laying our hands upon him. This I
              expect very shortly to do. I have good hopes of managing it
              through my own arrangements; but it is a thing which needs
              delicate handling, for we have a shrewd and desperate man to deal
              with, who is supported, as I have had occasion to prove, by
              another who is as clever as himself. As long as this man has no
              idea that anyone can have a clue there is some chance of securing
              him; but if he had the slightest suspicion, he would change his
              name, and vanish in an instant among the four million inhabitants
              of this great city. Without meaning to hurt either of your
              feelings, I am bound to say that I consider these men to be more
              than a match for the official force, and that is why I have not
              asked your assistance. If I fail I shall, of course, incur all the
              blame due to this omission; but that I am prepared for. At present
              I am ready to promise that the instant that I can communicate with
              you without endangering my own combinations, I shall do so.”
            </TextNode>

            <TextNode>
              Gregson and Lestrade seemed to be far from satisfied by this
              assurance, or by the depreciating allusion to the detective
              police. The former had flushed up to the roots of his flaxen hair,
              while the other's beady eyes glistened with curiosity and
              resentment. Neither of them had time to speak, however, before
              there was a tap at the door, and the spokesman of the street
              Arabs, young Wiggins, introduced his insignificant and unsavoury
              person.
            </TextNode>

            <TextNode>
              “Please, sir,” he said, touching his forelock, “I have the cab
              downstairs.”
            </TextNode>

            <TextNode>
              “Good boy,” said Holmes, blandly. “Why don't you introduce this
              pattern at Scotland Yard?” he continued, taking a pair of steel
              handcuffs from a drawer. “See how beautifully the spring works.
              They fasten in an instant.”
            </TextNode>

            <TextNode>
              “The old pattern is good enough,” remarked Lestrade, “if we can
              only find the man to put them on.”
            </TextNode>

            <TextNode>
              “Very good, very good,” said Holmes, smiling. “The cabman may as
              well help me with my boxes. Just ask him to step up, Wiggins.”
            </TextNode>

            <TextNode>
              I was surprised to find my companion speaking as though he were
              about to set out on a journey, since he had not said anything to
              me about it. There was a small portmanteau in the room, and this
              he pulled out and began to strap. He was busily engaged at it when
              the cabman entered the room.
            </TextNode>

            <TextNode>
              “Just give me a help with this buckle, cabman,” he said, kneeling
              over his task, and never turning his head.
            </TextNode>

            <TextNode>
              The fellow came forward with a somewhat sullen, defiant air, and
              put down his hands to assist. At that instant there was a sharp
              click, the jangling of metal, and Sherlock Holmes sprang to his
              feet again.
            </TextNode>

            <TextNode>
              “Gentlemen,” he cried, with flashing eyes, “let me introduce you
              to Mr. Jefferson Hope, the murderer of Enoch Drebber and of Joseph
              Stangerson.”
            </TextNode>

            <TextNode>
              The whole thing occurred in a moment—so quickly that I had no time
              to realize it. I have a vivid recollection of that instant, of
              Holmes' triumphant expression and the ring of his voice, of the
              cabman's dazed, savage face, as he glared at the glittering
              handcuffs, which had appeared as if by magic upon his wrists. For
              a second or two we might have been a group of statues. Then, with
              an inarticulate roar of fury, the prisoner wrenched himself free
              from Holmes's grasp, and hurled himself through the window.
              Woodwork and glass gave way before him; but before he got quite
              through, Gregson, Lestrade, and Holmes sprang upon him like so
              many staghounds. He was dragged back into the room, and then
              commenced a terrific conflict. So powerful and so fierce was he,
              that the four of us were shaken off again and again. He appeared
              to have the convulsive strength of a man in an epileptic fit. His
              face and hands were terribly mangled by his passage through the
              glass, but loss of blood had no effect in diminishing his
              resistance. It was not until Lestrade succeeded in getting his
              hand inside his neckcloth and half-strangling him that we made him
              realize that his struggles were of no avail; and even then we felt
              no security until we had pinioned his feet as well as his hands.
              That done, we rose to our feet breathless and panting.
            </TextNode>

            <TextNode>
              “We have his cab,” said Sherlock Holmes. “It will serve to take
              him to Scotland Yard. And now, gentlemen,” he continued, with a
              pleasant smile, “we have reached the end of our little mystery.
              You are very welcome to put any questions that you like to me now,
              and there is no danger that I will refuse to answer them.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page21;
