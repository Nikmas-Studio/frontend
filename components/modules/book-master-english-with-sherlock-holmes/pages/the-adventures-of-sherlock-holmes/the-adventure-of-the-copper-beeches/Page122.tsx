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

function Page122({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;COPPER&nbsp;BEECHES'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I trust that we are not too late,” said he. “I think, Miss
              Hunter, that we had better go in without you. Now, Watson, put
              your shoulder to it, and we shall see whether we cannot make our
              way in.”
            </TextNode>

            <TextNode>
              It was an old rickety door and gave at once before our united
              strength. Together we rushed into the room. It was empty. There
              was no furniture save a little pallet bed, a small table, and a
              basketful of linen. The skylight above was open, and the prisoner
              gone.
            </TextNode>

            <TextNode>
              “There has been some villainy here,” said Holmes; “this beauty has
              guessed Miss Hunter's intentions and has carried his victim off.”
            </TextNode>

            <TextNode>“But how?”</TextNode>

            <TextNode>
              “Through the skylight. We shall soon see how he managed it.” He
              swung himself up onto the roof. “Ah, yes,” he cried, “here's the
              end of a long light ladder against the eaves. That is how he did
              it.”
            </TextNode>

            <TextNode>
              “But it is impossible,” said Miss Hunter; “the ladder was not
              there when the Rucastles went away.”
            </TextNode>

            <TextNode>
              “He has come back and done it. I tell you that he is a clever and
              dangerous man. I should not be very much surprised if this were he
              whose step I hear now upon the stair. I think, Watson, that it
              would be as well for you to have your pistol ready.”
            </TextNode>

            <TextNode>
              The words were hardly out of his mouth before a man appeared at
              the door of the room, a very fat and burly man, with a heavy stick
              in his hand. Miss Hunter screamed and shrunk against the wall at
              the sight of him, but Sherlock Holmes sprang forward and
              confronted him.
            </TextNode>

            <TextNode>
              “You villain!” said he, “where's your daughter?”
            </TextNode>

            <TextNode>
              The fat man cast his eyes round, and then up at the open skylight.
            </TextNode>

            <TextNode>
              “It is for me to ask you that,” he shrieked, “you thieves! Spies
              and thieves! I have caught you, have I? You are in my power. I'll
              serve you!” He turned and clattered down the stairs as hard as he
              could go.
            </TextNode>

            <TextNode>“He's gone for the dog!” cried Miss Hunter.</TextNode>

            <TextNode>“I have my revolver,” said I.</TextNode>

            <TextNode>
              “Better close the front door,” cried Holmes, and we all rushed
              down the stairs together. We had hardly reached the hall when we
              heard the baying of a hound, and then a scream of agony, with a
              horrible worrying sound which it was dreadful to listen to. An
              elderly man with a red face and shaking limbs came staggering out
              at a side door.
            </TextNode>

            <TextNode>
              “My God!” he cried. “Someone has loosed the dog. It's not been fed
              for two days. Quick, quick, or it'll be too late!”
            </TextNode>

            <TextNode>
              Holmes and I rushed out and round the angle of the house, with
              Toller hurrying behind us. There was the huge famished brute, its
              black muzzle buried in Rucastle's throat, while he writhed and
              screamed upon the ground. Running up, I blew its brains out, and
              it fell over with its keen white teeth still meeting in the great
              creases of his neck. With much labour we separated them and
              carried him, living but horribly mangled, into the house. We laid
              him upon the drawing-room sofa, and having dispatched the sobered
              Toller to bear the news to his wife, I did what I could to relieve
              his pain. We were all assembled round him when the door opened,
              and a tall, gaunt woman entered the room.
            </TextNode>

            <TextNode>“Mrs. Toller!” cried Miss Hunter.</TextNode>

            <TextNode>
              “Yes, miss. Mr. Rucastle let me out when he came back before he
              went up to you. Ah, miss, it is a pity you didn't let me know what
              you were planning, for I would have told you that your pains were
              wasted.”
            </TextNode>

            <TextNode>
              “Ha!” said Holmes, looking keenly at her. “It is clear that Mrs.
              Toller knows more about this matter than anyone else.”
            </TextNode>

            <TextNode>
              “Yes, sir, I do, and I am ready enough to tell what I know.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Then, pray, sit down, and let us hear it for there are several
              points on which I must confess that I am still in the dark.”
            </TextNode>

            <TextNode>
              “I will soon make it clear to you,” said she; “and I'd have done
              so before now if I could ha' got out from the cellar. If there's
              police-court business over this, you'll remember that I was the
              one that stood your friend, and that I was Miss Alice's friend
              too.
            </TextNode>

            <TextNode>
              “She was never happy at home, Miss Alice wasn't, from the time
              that her father married again. She was slighted like and had no
              say in anything, but it never really became bad for her until
              after she met Mr. Fowler at a friend's house. As well as I could
              learn, Miss Alice had rights of her own by will, but she was so
              quiet and patient, she was, that she never said a word about them
              but just left everything in Mr. Rucastle's hands. He knew he was
              safe with her; but when there was a chance of a husband coming
              forward, who would ask for all that the law would give him, then
              her father thought it time to put a stop on it. He wanted her to
              sign a paper, so that whether she married or not, he could use her
              money. When she wouldn't do it, he kept on worrying her until she
              got brain-fever, and for six weeks was at death's door. Then she
              got better at last, all worn to a shadow, and with her beautiful
              hair cut off; but that didn't make no change in her young man, and
              he stuck to her as true as man could be.”
            </TextNode>

            <TextNode>
              “Ah,” said Holmes, “I think that what you have been good enough to
              tell us makes the matter fairly clear, and that I can deduce all
              that remains. Mr. Rucastle then, I presume, took to this system of
              imprisonment?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>
              “And brought Miss Hunter down from London in order to get rid of
              the disagreeable persistence of Mr. Fowler.”
            </TextNode>

            <TextNode>“That was it, sir.”</TextNode>

            <TextNode>
              “But Mr. Fowler being a persevering man, as a good seaman should
              be, blockaded the house, and having met you succeeded by certain
              arguments, metallic or otherwise, in convincing you that your
              interests were the same as his.”
            </TextNode>

            <TextNode>
              “Mr. Fowler was a very kind-spoken, free-handed gentleman,” said
              Mrs. Toller serenely.
            </TextNode>

            <TextNode>
              “And in this way he managed that your good man should have no want
              of drink, and that a ladder should be ready at the moment when
              your master had gone out.”
            </TextNode>

            <TextNode>“You have it, sir, just as it happened.”</TextNode>

            <TextNode>
              “I am sure we owe you an apology, Mrs. Toller,” said Holmes, “for
              you have certainly cleared up everything which puzzled us. And
              here comes the country surgeon and Mrs. Rucastle, so I think,
              Watson, that we had best escort Miss Hunter back to Winchester, as
              it seems to me that our{' '}
              <span className='italic'>locus standi</span> now is rather a
              questionable one.”
            </TextNode>

            <TextNode>
              And thus was solved the mystery of the sinister house with the
              copper beeches in front of the door. Mr. Rucastle survived, but
              was always a broken man, kept alive solely through the care of his
              devoted wife. They still live with their old servants, who
              probably know so much of Rucastle's past life that he finds it
              difficult to part from them. Mr. Fowler and Miss Rucastle were
              married, by special license, in Southampton the day after their
              flight, and he is now the holder of a government appointment in
              the island of Mauritius. As to Miss Violet Hunter, my friend
              Holmes, rather to my disappointment, manifested no further
              interest in her when once she had ceased to be the centre of one
              of his problems, and she is now the head of a private school at
              Walsall, where I believe that she has met with considerable
              success.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page122;
