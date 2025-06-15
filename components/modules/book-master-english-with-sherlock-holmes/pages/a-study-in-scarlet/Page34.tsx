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

function Page34({
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
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “The blood had been streaming from my nose, but I had taken no
              notice of it. I don't know what it was that put it into my head to
              write upon the wall with it. Perhaps it was some mischievous idea
              of setting the police upon a wrong track, for I felt light-hearted
              and cheerful. I remembered a German being found in New York with
              RACHE written up above him, and it was argued at the time in the
              newspapers that the secret societies must have done it. I guessed
              that what puzzled the New Yorkers would puzzle the Londoners, so I
              dipped my finger in my own blood and printed it on a convenient
              place on the wall. Then I walked down to my cab and found that
              there was nobody about, and that the night was still very wild. I
              had driven some distance when I put my hand into the pocket in
              which I usually kept Lucy's ring, and found that it was not there.
              I was thunderstruck at this, for it was the only memento that I
              had of her. Thinking that I might have dropped it when I stooped
              over Drebber's body, I drove back, and leaving my cab in a side
              street, I went boldly up to the house—for I was ready to dare
              anything rather than lose the ring. When I arrived there, I walked
              right into the arms of a police-officer who was coming out, and
              only managed to disarm his suspicions by pretending to be
              hopelessly drunk.
            </TextNode>

            <TextNode>
              “That was how Enoch Drebber came to his end. All I had to do then
              was to do as much for Stangerson, and so pay off John Ferrier's
              debt. I knew that he was staying at Halliday's Private Hotel, and
              I hung about all day, but he never came out. I fancy that he
              suspected something when Drebber failed to put in an appearance.
              He was cunning, was Stangerson, and always on his guard. If he
              thought he could keep me off by staying indoors he was very much
              mistaken. I soon found out which was the window of his bedroom,
              and early next morning I took advantage of some ladders which were
              lying in the lane behind the hotel, and so made my way into his
              room in the grey of the dawn. I woke him up and told him that the
              hour had come when he was to answer for the life he had taken so
              long before. I described Drebber's death to him, and I gave him
              the same choice of the poisoned pills. Instead of grasping at the
              chance of safety which that offered him, he sprang from his bed
              and flew at my throat. In self-defence I stabbed him to the heart.
              It would have been the same in any case, for Providence would
              never have allowed his guilty hand to pick out anything but the
              poison.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I have little more to say, and it's as well, for I am about done
              up. I went on cabbing it for a day or so, intending to keep at it
              until I could save enough to take me back to America. I was
              standing in the yard when a ragged youngster asked if there was a
              cabby there called Jefferson Hope, and said that his cab was
              wanted by a gentleman at 221b, Baker Street. I went round,
              suspecting no harm, and the next thing I knew, this young man here
              had the bracelets on my wrists, and as neatly snackled as ever I
              saw in my life. That's the whole of my story, gentlemen. You may
              consider me to be a murderer; but I hold that I am just as much an
              officer of justice as you are.”
            </TextNode>

            <TextNode>
              So thrilling had the man's narrative been, and his manner was so
              impressive that we had sat silent and absorbed. Even the
              professional detectives, blase as they were in every detail of
              crime, appeared to be keenly interested in the man's story. When
              he finished we sat for some minutes in a stillness which was only
              broken by the scratching of Lestrade's pencil as he gave the
              finishing touches to his shorthand account.
            </TextNode>

            <TextNode>
              “There is only one point on which I should like a little more
              information,” Sherlock Holmes said at last. “Who was your
              accomplice who came for the ring which I advertised?”
            </TextNode>

            <TextNode>
              The prisoner winked at my friend jocosely. “I can tell my own
              secrets,” he said, “but I don't get other people into trouble. I
              saw your advertisement, and I thought it might be a plant, or it
              might be the ring which I wanted. My friend volunteered to go and
              see. I think you'll own he did it smartly.”
            </TextNode>

            <TextNode>“Not a doubt of that,” said Holmes heartily.</TextNode>

            <TextNode>
              “Now, gentlemen,” the Inspector remarked gravely, “the forms of
              the law must be complied with. On Thursday the prisoner will be
              brought before the magistrates, and your attendance will be
              required. Until then I will be responsible for him.” He rang the
              bell as he spoke, and Jefferson Hope was led off by a couple of
              warders, while my friend and I made our way out of the Station and
              took a cab back to Baker Street.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page34;
