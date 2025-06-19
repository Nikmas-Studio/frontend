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

function Page97({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BLUE&nbsp;CARBUNCLE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Sherlock Holmes hailed a four-wheeler which was passing. “In that
              case we had better discuss it in a cosy room rather than in this
              wind-swept market-place,” said he. “But pray tell me, before we go
              farther, who it is that I have the pleasure of assisting.”
            </TextNode>

            <TextNode>
              The man hesitated for an instant. “My name is John Robinson,” he
              answered with a sidelong glance.
            </TextNode>

            <TextNode>
              “No, no; the real name,” said Holmes sweetly. “It is always
              awkward doing business with an alias.”
            </TextNode>

            <TextNode>
              A flush sprang to the white cheeks of the stranger. “Well then,”
              said he, “my real name is James Ryder.”
            </TextNode>

            <TextNode>
              “Precisely so. Head attendant at the Hotel Cosmopolitan. Pray step
              into the cab, and I shall soon be able to tell you everything
              which you would wish to know.”
            </TextNode>

            <TextNode>
              The little man stood glancing from one to the other of us with
              half-frightened, half-hopeful eyes, as one who is not sure whether
              he is on the verge of a windfall or of a catastrophe. Then he
              stepped into the cab, and in half an hour we were back in the
              sitting-room at Baker Street. Nothing had been said during our
              drive, but the high, thin breathing of our new companion, and the
              claspings and unclaspings of his hands, spoke of the nervous
              tension within him.
            </TextNode>

            <TextNode>
              “Here we are!” said Holmes cheerily as we filed into the room.
              “The fire looks very seasonable in this weather. You look cold,
              Mr. Ryder. Pray take the basket-chair. I will just put on my
              slippers before we settle this little matter of yours. Now, then!
              You want to know what became of those geese?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “Or rather, I fancy, of that goose. It was one bird, I imagine in
              which you were interested—white, with a black bar across the
              tail.”
            </TextNode>

            <TextNode>
              Ryder quivered with emotion. “Oh, sir,” he cried, “can you tell me
              where it went to?”
            </TextNode>

            <TextNode>“It came here.”</TextNode>

            <TextNode>“Here?”</TextNode>

            <TextNode>
              “Yes, and a most remarkable bird it proved. I don't wonder that
              you should take an interest in it. It laid an egg after it was
              dead—the bonniest, brightest little blue egg that ever was seen. I
              have it here in my museum.”
            </TextNode>

            <TextNode>
              Our visitor staggered to his feet and clutched the mantelpiece
              with his right hand. Holmes unlocked his strong-box and held up
              the blue carbuncle, which shone out like a star, with a cold,
              brilliant, many-pointed radiance. Ryder stood glaring with a drawn
              face, uncertain whether to claim or to disown it.
            </TextNode>

            <TextNode>
              “The game's up, Ryder,” said Holmes quietly. “Hold up, man, or
              you'll be into the fire! Give him an arm back into his chair,
              Watson. He's not got blood enough to go in for felony with
              impunity. Give him a dash of brandy. So! Now he looks a little
              more human. What a shrimp it is, to be sure!”
            </TextNode>

            <TextNode>
              For a moment he had staggered and nearly fallen, but the brandy
              brought a tinge of colour into his cheeks, and he sat staring with
              frightened eyes at his accuser.
            </TextNode>

            <TextNode>
              “I have almost every link in my hands, and all the proofs which I
              could possibly need, so there is little which you need tell me.
              Still, that little may as well be cleared up to make the case
              complete. You had heard, Ryder, of this blue stone of the Countess
              of Morcar's?”
            </TextNode>

            <TextNode>
              “It was Catherine Cusack who told me of it,” said he in a
              crackling voice.
            </TextNode>

            <TextNode>
              “I see—her ladyship's waiting-maid. Well, the temptation of sudden
              wealth so easily acquired was too much for you, as it has been for
              better men before you; but you were not very scrupulous in the
              means you used. It seems to me, Ryder, that there is the making of
              a very pretty villain in you. You knew that this man Horner, the
              plumber, had been concerned in some such matter before, and that
              suspicion would rest the more readily upon him. What did you do,
              then? You made some small job in my lady's room—you and your
              confederate Cusack—and you managed that he should be the man sent
              for. Then, when he had left, you rifled the jewel-case, raised the
              alarm, and had this unfortunate man arrested. You then—”
            </TextNode>

            <TextNode>
              Ryder threw himself down suddenly upon the rug and clutched at my
              companion's knees. “For God's sake, have mercy!” he shrieked.
              “Think of my father! Of my mother! It would break their hearts. I
              never went wrong before! I never will again. I swear it. I'll
              swear it on a Bible. Oh, don't bring it into court! For Christ's
              sake, don't!”
            </TextNode>

            <TextNode>
              “Get back into your chair!” said Holmes sternly. “It is very well
              to cringe and crawl now, but you thought little enough of this
              poor Horner in the dock for a crime of which he knew nothing.”
            </TextNode>

            <TextNode>
              “I will fly, Mr. Holmes. I will leave the country, sir. Then the
              charge against him will break down.”
            </TextNode>

            <TextNode>
              “Hum! We will talk about that. And now let us hear a true account
              of the next act. How came the stone into the goose, and how came
              the goose into the open market? Tell us the truth, for there lies
              your only hope of safety.”
            </TextNode>

            <TextNode>
              Ryder passed his tongue over his parched lips. “I will tell you it
              just as it happened, sir,” said he. “When Horner had been
              arrested, it seemed to me that it would be best for me to get away
              with the stone at once, for I did not know at what moment the
              police might not take it into their heads to search me and my
              room. There was no place about the hotel where it would be safe. I
              went out, as if on some commission, and I made for my sister's
              house. She had married a man named Oakshott, and lived in Brixton
              Road, where she fattened fowls for the market. All the way there
              every man I met seemed to me to be a policeman or a detective;
              and, for all that it was a cold night, the sweat was pouring down
              my face before I came to the Brixton Road. My sister asked me what
              was the matter, and why I was so pale; but I told her that I had
              been upset by the jewel robbery at the hotel. Then I went into the
              back yard and smoked a pipe and wondered what it would be best to
              do.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I had a friend once called Maudsley, who went to the bad, and has
              just been serving his time in Pentonville. One day he had met me,
              and fell into talk about the ways of thieves, and how they could
              get rid of what they stole. I knew that he would be true to me,
              for I knew one or two things about him; so I made up my mind to go
              right on to Kilburn, where he lived, and take him into my
              confidence. He would show me how to turn the stone into money. But
              how to get to him in safety? I thought of the agonies I had gone
              through in coming from the hotel. I might at any moment be seized
              and searched, and there would be the stone in my waistcoat pocket.
              I was leaning against the wall at the time and looking at the
              geese which were waddling about round my feet, and suddenly an
              idea came into my head which showed me how I could beat the best
              detective that ever lived.
            </TextNode>

            <TextNode>
              “My sister had told me some weeks before that I might have the
              pick of her geese for a Christmas present, and I knew that she was
              always as good as her word. I would take my goose now, and in it I
              would carry my stone to Kilburn. There was a little shed in the
              yard, and behind this I drove one of the birds—a fine big one,
              white, with a barred tail. I caught it, and prying its bill open,
              I thrust the stone down its throat as far as my finger could
              reach. The bird gave a gulp, and I felt the stone pass along its
              gullet and down into its crop. But the creature flapped and
              struggled, and out came my sister to know what was the matter. As
              I turned to speak to her the brute broke loose and fluttered off
              among the others.
            </TextNode>

            <TextNode>
              “‘Whatever were you doing with that bird, Jem?’ says she.
            </TextNode>

            <TextNode>
              “‘Well,’ said I, ‘you said you'd give me one for Christmas, and I
              was feeling which was the fattest.’
            </TextNode>

            <TextNode>
              “‘Oh,’ says she, ‘we've set yours aside for you—Jem's bird, we
              call it. It's the big white one over yonder. There's twenty-six of
              them, which makes one for you, and one for us, and two dozen for
              the market.’
            </TextNode>

            <TextNode>
              “‘Thank you, Maggie,’ says I; ‘but if it is all the same to you,
              I'd rather have that one I was handling just now.’
            </TextNode>

            <TextNode>
              “‘The other is a good three pound heavier,’ said she, ‘and we
              fattened it expressly for you.’
            </TextNode>

            <TextNode>
              “‘Never mind. I'll have the other, and I'll take it now,’ said I.
            </TextNode>

            <TextNode>
              “‘Oh, just as you like,’ said she, a little huffed. ‘Which is it
              you want, then?’
            </TextNode>

            <TextNode>
              “‘That white one with the barred tail, right in the middle of the
              flock.’
            </TextNode>

            <TextNode>“‘Oh, very well. Kill it and take it with you.’</TextNode>

            <TextNode>
              “Well, I did what she said, Mr. Holmes, and I carried the bird all
              the way to Kilburn. I told my pal what I had done, for he was a
              man that it was easy to tell a thing like that to. He laughed
              until he choked, and we got a knife and opened the goose. My heart
              turned to water, for there was no sign of the stone, and I knew
              that some terrible mistake had occurred. I left the bird, rushed
              back to my sister's, and hurried into the back yard. There was not
              a bird to be seen there.
            </TextNode>

            <TextNode>“‘Where are they all, Maggie?’ I cried.</TextNode>

            <TextNode>“‘Gone to the dealer's, Jem.’</TextNode>

            <TextNode>“‘Which dealer's?’</TextNode>

            <TextNode>“‘Breckinridge, of Covent Garden.’</TextNode>

            <TextNode>
              “‘But was there another with a barred tail?’ I asked, ‘the same as
              the one I chose?’
            </TextNode>

            <TextNode>
              “‘Yes, Jem; there were two barred-tailed ones, and I could never
              tell them apart.’
            </TextNode>

            <TextNode>
              “Well, then, of course I saw it all, and I ran off as hard as my
              feet would carry me to this man Breckinridge; but he had sold the
              lot at once, and not one word would he tell me as to where they
              had gone. You heard him yourselves to-night. Well, he has always
              answered me like that. My sister thinks that I am going mad.
              Sometimes I think that I am myself. And now—and now I am myself a
              branded thief, without ever having touched the wealth for which I
              sold my character. God help me! God help me!” He burst into
              convulsive sobbing, with his face buried in his hands.
            </TextNode>

            <TextNode>
              There was a long silence, broken only by his heavy breathing and
              by the measured tapping of Sherlock Holmes' finger-tips upon the
              edge of the table. Then my friend rose and threw open the door.
            </TextNode>

            <TextNode>“Get out!” said he.</TextNode>

            <TextNode>“What, sir! Oh, Heaven bless you!”</TextNode>

            <TextNode>“No more words. Get out!”</TextNode>

            <TextNode>
              And no more words were needed. There was a rush, a clatter upon
              the stairs, the bang of a door, and the crisp rattle of running
              footfalls from the street.
            </TextNode>

            <TextNode>
              “After all, Watson,” said Holmes, reaching up his hand for his
              clay pipe, “I am not retained by the police to supply their
              deficiencies. If Horner were in danger it would be another thing;
              but this fellow will not appear against him, and the case must
              collapse. I suppose that I am commuting a felony, but it is just
              possible that I am saving a soul. This fellow will not go wrong
              again; he is too terribly frightened. Send him to jail now, and
              you make him a jail-bird for life. Besides, it is the season of
              forgiveness. Chance has put in our way a most singular and
              whimsical problem, and its solution is its own reward. If you will
              have the goodness to touch the bell, Doctor, we will begin another
              investigation, in which, also a bird will be the chief feature.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page97;
