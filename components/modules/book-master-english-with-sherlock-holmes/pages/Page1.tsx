'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H2 from '@/components/elements/book-master-english-with-sherlock-holmes/H2';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../Controls';

function Page1(): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: 1,
    basePath,
  });

  return (
    <Page id='page-1' className='mb-5' ref={sectionRef}>
      <Controls pageNumber={1} />
      <BookMainContainer>
        <H2 className='mb-10'>
          Chapter I.
          <br />
          Mr. Sherlock Holmes
        </H2>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer className='w-1/2  max-2md:w-full  max-2md:pr-0'>
            <TextNode noIndent>
              In the year 1878 I took my degree of Doctor of Medicine of the
              University of London, and proceeded to Netley to go through the
              course prescribed for surgeons in the army. Having completed my
              studies there, I was duly attached to the Fifth Northumberland
              Fusiliers as Assistant Surgeon. The regiment was stationed in
              India at the time, and before I could join it, the second Afghan
              war had broken out. On landing at Bombay, I learned that my corps
              had advanced through the passes, and was already deep in the
              enemy’s country. I followed, however, with many other officers who
              were in the same situation as myself, and succeeded in reaching
              Candahar in safety, where I found my regiment, and at once entered
              upon my new duties.
            </TextNode>
            <TextNode>
              The campaign brought honours and promotion to many, but for me it
              had nothing but misfortune and disaster. I was removed from my
              brigade and attached to the Berkshires, with whom I served at the
              fatal battle of Maiwand. There I was struck on the shoulder by a
              Jezail bullet, which shattered the bone and grazed the subclavian
              artery. I should have fallen into the hands of the murderous
              Ghazis had it not been for the devotion and courage shown by
              Murray, my orderly, who threw me across a pack-horse, and
              succeeded in bringing me safely to the British lines.
            </TextNode>
            <TextNode>
              Worn with pain, and weak from the prolonged hardships which I had
              undergone, I was removed, with a great train of wounded sufferers,
              to the base hospital at Peshawar. Here I rallied, and had already
              improved so far as to be able to walk about the wards, and even to
              bask a little upon the verandah, when I was struck down by enteric
              fever, that curse of our Indian possessions. For months my life
              was despaired of, and when at last I came to myself and became
              convalescent, I was so weak and emaciated that a medical board
              determined that not a day should be lost in sending me back to
              England. I was dispatched, accordingly, in the troopship Orontes,
              and landed a month later on Portsmouth jetty, with my health
              irretrievably ruined, but with permission from a paternal
              government to spend the next nine months in attempting to improve
              it.
            </TextNode>
            <TextNode>
              I had neither kith nor kin in England, and was therefore as free
              as air—or as free as an income of eleven shillings and sixpence a
              day will permit a man to be. Under such circumstances, I naturally
              gravitated to London, that great cesspool into which all the
              loungers and idlers of the Empire are irresistibly drained.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer className='w-1/2  max-2md:w-full  max-2md:pl-0'>
            <TextNode noIndent>
              There I stayed for some time at a private hotel in the Strand,
              leading a comfortless, meaningless existence, and spending such
              money as I had, considerably more freely than I ought. So alarming
              did the state of my finances become, that I soon realized that I
              must either leave the metropolis and rusticate somewhere in the
              country, or that I must make a complete alteration in my style of
              living. Choosing the latter alternative, I began by making up my
              mind to leave the hotel, and to take up my quarters in some less
              pretentious and less expensive domicile.
            </TextNode>
            <TextNode>
              On the very day that I had come to this conclusion, I was standing
              at the Criterion Bar, when some one tapped me on the shoulder, and
              turning round I recognized young Stamford, who had been a dresser
              under me at Bart’s. The sight of a friendly face in the great
              wilderness of London is a pleasant thing indeed to a lonely man.
              In old days Stamford had never been a particular crony of mine,
              but now I hailed him with enthusiasm, and he, in his turn,
              appeared to be delighted to see me. In the exuberance of my joy, I
              asked him to lunch with me at the Holborn, and we started off
              together in a hansom.
            </TextNode>
            <TextNode>
              “Whatever have you been doing with yourself, Watson?” he asked in
              undisguised wonder, as we rattled through the crowded London
              streets. “You are as thin as a lath and as brown as a nut.”
            </TextNode>
            <TextNode>
              I gave him a short sketch of my adventures, and had hardly
              concluded it by the time that we reached our destination.
            </TextNode>
            <TextNode>
              “Poor devil!” he said, commiseratingly, after he had listened to
              my misfortunes. “What are you up to now?”
            </TextNode>
            <TextNode>
              “Looking for lodgings,” I answered. “Trying to solve the problem
              as to whether it is possible to get comfortable rooms at a
              reasonable price.”
            </TextNode>
            <TextNode>
              “That’s a strange thing,” remarked my companion; “you are the
              second man to-day that has used that expression to me.”
            </TextNode>
            <TextNode>“And who was the first?” I asked.</TextNode>
            <TextNode>
              “A fellow who is working at the chemical laboratory up at the
              hospital. He was bemoaning himself this morning because he could
              not get someone to go halves with him in some nice rooms which he
              had found, and which were too much for his purse.”
            </TextNode>
            <TextNode>
              “By Jove!” I cried, “if he really wants someone to share the rooms
              and the expense, I am the very man for him. I should prefer having
              a partner to being alone.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page1;
