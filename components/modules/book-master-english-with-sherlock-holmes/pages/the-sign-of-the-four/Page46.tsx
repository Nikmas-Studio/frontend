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
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page46({
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
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Here's a business!” he cried, in a muffled, husky voice. “Here's
              a pretty business! But who are all these? Why, the house seems to
              be as full as a rabbit-warren!”
            </TextNode>

            <TextNode>
              “I think you must recollect me, Mr. Athelney Jones,” said Holmes,
              quietly.
            </TextNode>

            <TextNode>
              “Why, of course I do!” he wheezed. “It's Mr. Sherlock Holmes, the
              theorist. Remember you! I'll never forget how you lectured us all
              on causes and inferences and effects in the Bishopgate jewel case.
              It's true you set us on the right track; but you'll own now that
              it was more by good luck than good guidance.”
            </TextNode>

            <TextNode>“It was a piece of very simple reasoning.”</TextNode>

            <TextNode>
              “Oh, come, now, come! Never be ashamed to own up. But what is all
              this? Bad business! Bad business! Stern facts here,—no room for
              theories. How lucky that I happened to be out at Norwood over
              another case! I was at the station when the message arrived. What
              d'you think the man died of?”
            </TextNode>

            <TextNode>
              “Oh, this is hardly a case for me to theorize over,” said Holmes,
              dryly.
            </TextNode>

            <TextNode>
              “No, no. Still, we can't deny that you hit the nail on the head
              sometimes. Dear me! Door locked, I understand. Jewels worth half a
              million missing. How was the window?”
            </TextNode>

            <TextNode>“Fastened; but there are steps on the sill.”</TextNode>

            <TextNode>
              “Well, well, if it was fastened the steps could have nothing to do
              with the matter. That's common sense. Man might have died in a
              fit; but then the jewels are missing. Ha! I have a theory. These
              flashes come upon me at times.—Just step outside, sergeant, and
              you, Mr. Sholto. Your friend can remain.—What do you think of
              this, Holmes? Sholto was, on his own confession, with his brother
              last night. The brother died in a fit, on which Sholto walked off
              with the treasure. How's that?”
            </TextNode>

            <TextNode>
              “On which the dead man very considerately got up and locked the
              door on the inside.”
            </TextNode>

            <TextNode>
              “Hum! There's a flaw there. Let us apply common sense to the
              matter. This Thaddeus Sholto was with his brother; there was a
              quarrel; so much we know. The brother is dead and the jewels are
              gone. So much also we know. No one saw the brother from the time
              Thaddeus left him. His bed had not been slept in. Thaddeus is
              evidently in a most disturbed state of mind. His appearance
              is—well, not attractive. You see that I am weaving my web round
              Thaddeus. The net begins to close upon him.”
            </TextNode>

            <TextNode>
              “You are not quite in possession of the facts yet,” said Holmes.
              “This splinter of wood, which I have every reason to believe to be
              poisoned, was in the man's scalp where you still see the mark;
              this card, inscribed as you see it, was on the table; and beside
              it lay this rather curious stone-headed instrument. How does all
              that fit into your theory?”
            </TextNode>

            <TextNode>
              “Confirms it in every respect,” said the fat detective, pompously.
              “House is full of Indian curiosities. Thaddeus brought this up,
              and if this splinter be poisonous Thaddeus may as well have made
              murderous use of it as any other man. The card is some
              hocus-pocus,—a blind, as like as not. The only question is, how
              did he depart? Ah, of course, here is a hole in the roof.” With
              great activity, considering his bulk, he sprang up the steps and
              squeezed through into the garret, and immediately afterwards we
              heard his exulting voice proclaiming that he had found the
              trap-door.
            </TextNode>

            <TextNode>
              “He can find something,” remarked Holmes, shrugging his shoulders.
              “He has occasional glimmerings of reason. Il n'y a pas des sots si
              incommodes que ceux qui ont de l'esprit!”
            </TextNode>

            <TextNode>
              “You see!” said Athelney Jones, reappearing down the steps again.
              “Facts are better than mere theories, after all. My view of the
              case is confirmed. There is a trap-door communicating with the
              roof, and it is partly open.”
            </TextNode>

            <TextNode>“It was I who opened it.”</TextNode>

            <TextNode>
              “Oh, indeed! You did notice it, then?” He seemed a little
              crestfallen at the discovery. “Well, whoever noticed it, it shows
              how our gentleman got away. Inspector!”
            </TextNode>

            <TextNode>“Yes, sir,” from the passage.</TextNode>

            <TextNode>
              “Ask Mr. Sholto to step this way.—Mr. Sholto, it is my duty to
              inform you that anything which you may say will be used against
              you. I arrest you in the Queen's name as being concerned in the
              death of your brother.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “There, now! Didn't I tell you!” cried the poor little man,
              throwing out his hands, and looking from one to the other of us.
            </TextNode>

            <TextNode>
              “Don't trouble yourself about it, Mr. Sholto,” said Holmes. “I
              think that I can engage to clear you of the charge.”
            </TextNode>

            <TextNode>
              “Don't promise too much, Mr. Theorist,—don't promise too much!”
              snapped the detective. “You may find it a harder matter than you
              think.”
            </TextNode>

            <TextNode>
              “Not only will I clear him, Mr. Jones, but I will make you a free
              present of the name and description of one of the two people who
              were in this room last night. His name, I have every reason to
              believe, is Jonathan Small. He is a poorly-educated man, small,
              active, with his right leg off, and wearing a wooden stump which
              is worn away upon the inner side. His left boot has a coarse,
              square-toed sole, with an iron band round the heel. He is a
              middle-aged man, much sunburned, and has been a convict. These few
              indications may be of some assistance to you, coupled with the
              fact that there is a good deal of skin missing from the palm of
              his hand. The other man—”
            </TextNode>

            <TextNode>
              “Ah! the other man—?” asked Athelney Jones, in a sneering voice,
              but impressed none the less, as I could easily see, by the
              precision of the other's manner.
            </TextNode>

            <TextNode>
              “Is a rather curious person,” said Sherlock Holmes, turning upon
              his heel. “I hope before very long to be able to introduce you to
              the pair of them. A word with you, Watson.”
            </TextNode>

            <TextNode>
              He led me out to the head of the stair. “This unexpected
              occurrence,” he said, “has caused us rather to lose sight of the
              original purpose of our journey.”
            </TextNode>

            <TextNode>
              “I have just been thinking so,” I answered. “It is not right that
              Miss Morstan should remain in this stricken house.”
            </TextNode>

            <TextNode>
              “No. You must escort her home. She lives with Mrs. Cecil
              Forrester, in Lower Camberwell: so it is not very far. I will wait
              for you here if you will drive out again. Or perhaps you are too
              tired?”
            </TextNode>

            <TextNode>
              “By no means. I don't think I could rest until I know more of this
              fantastic business. I have seen something of the rough side of
              life, but I give you my word that this quick succession of strange
              surprises to-night has shaken my nerve completely. I should like,
              however, to see the matter through with you, now that I have got
              so far.”
            </TextNode>

            <TextNode>
              “Your presence will be of great service to me,” he answered. “We
              shall work the case out independently, and leave this fellow Jones
              to exult over any mare's-nest which he may choose to construct.
              When you have dropped Miss Morstan I wish you to go on to No. 3
              Pinchin Lane, down near the water's edge at Lambeth. The third
              house on the right-hand side is a bird-stuffer's: Sherman is the
              name. You will see a weasel holding a young rabbit in the window.
              Knock old Sherman up, and tell him, with my compliments, that I
              want Toby at once. You will bring Toby back in the cab with you.”
            </TextNode>

            <TextNode>“A dog, I suppose.”</TextNode>

            <TextNode>
              “Yes,—a queer mongrel, with a most amazing power of scent. I would
              rather have Toby's help than that of the whole detective force of
              London.”
            </TextNode>

            <TextNode>
              “I shall bring him, then,” said I. “It is one now. I ought to be
              back before three, if I can get a fresh horse.”
            </TextNode>

            <TextNode>
              “And I,” said Holmes, “shall see what I can learn from Mrs.
              Bernstone, and from the Indian servant, who, Mr. Thaddeus tell me,
              sleeps in the next garret. Then I shall study the great Jones's
              methods and listen to his not too delicate sarcasms. ‘Wir sind
              gewohnt, daß die Menschen verhöhnen was sie nicht verstehen.’
              Goethe is always pithy.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page46;
