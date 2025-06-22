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

function Page158({
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
        title='THE GREEK INTERPRETER'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Peering in, we could see that the only light in the room came from
              a dull blue flame which flickered from a small brass tripod in the
              centre. It threw a livid, unnatural circle upon the floor, while
              in the shadows beyond we saw the vague loom of two figures which
              crouched against the wall. From the open door there reeked a
              horrible poisonous exhalation which set us gasping and coughing.
              Holmes rushed to the top of the stairs to draw in the fresh air,
              and then, dashing into the room, he threw up the window and hurled
              the brazen tripod out into the garden.
            </TextNode>

            <TextNode>
              “We can enter in a minute,” he gasped, darting out again. “Where
              is a candle? I doubt if we could strike a match in that
              atmosphere. Hold the light at the door and we shall get them out,
              Mycroft. Now!”
            </TextNode>

            <TextNode>
              With a rush we got to the poisoned men and dragged them out into
              the well-lit hall. Both of them were blue-lipped and insensible,
              with swollen, congested faces and protruding eyes. Indeed, so
              distorted were their features that, save for his black beard and
              stout figure, we might have failed to recognize in one of them the
              Greek interpreter who had parted from us only a few hours before
              at the Diogenes Club. His hands and feet were securely strapped
              together, and he bore over one eye the marks of a violent blow.
              The other, who was secured in a similar fashion, was a tall man in
              the last stage of emaciation, with several strips of
              sticking-plaster arranged in a grotesque pattern over his face. He
              had ceased to moan as we laid him down, and a glance showed me
              that for him at least our aid had come too late. Mr. Melas,
              however, still lived, and in less than an hour, with the aid of
              ammonia and brandy I had the satisfaction of seeing him open his
              eyes, and of knowing that my hand had drawn him back from that
              dark valley in which all paths meet.
            </TextNode>

            <TextNode>
              It was a simple story which he had to tell, and one which did but
              confirm our own deductions. His visitor, on entering his rooms,
              had drawn a life-preserver from his sleeve, and had so impressed
              him with the fear of instant and inevitable death that he had
              kidnapped him for the second time. Indeed, it was almost mesmeric,
              the effect which this giggling ruffian had produced upon the
              unfortunate linguist, for he could not speak of him save with
              trembling hands and a blanched cheek. He had been taken swiftly to
              Beckenham, and had acted as interpreter in a second interview,
              even more dramatic than the first, in which the two Englishmen had
              menaced their prisoner with instant death if he did not comply
              with their demands. Finally, finding him proof against every
              threat, they had hurled him back into his prison, and after
              reproaching Melas with his treachery, which appeared from the
              newspaper advertisement, they had stunned him with a blow from a
              stick, and he remembered nothing more until he found us bending
              over him.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              And this was the singular case of the Grecian Interpreter, the
              explanation of which is still involved in some mystery. We were
              able to find out, by communicating with the gentleman who had
              answered the advertisement, that the unfortunate young lady came
              of a wealthy Grecian family, and that she had been on a visit to
              some friends in England. While there she had met a young man named
              Harold Latimer, who had acquired an ascendancy over her and had
              eventually persuaded her to fly with him. Her friends, shocked at
              the event, had contented themselves with informing her brother at
              Athens, and had then washed their hands of the matter. The
              brother, on his arrival in England, had imprudently placed himself
              in the power of Latimer and of his associate, whose name was
              Wilson Kemp—a man of the foulest antecedents. These two, finding
              that through his ignorance of the language he was helpless in
              their hands, had kept him a prisoner, and had endeavored by
              cruelty and starvation to make him sign away his own and his
              sister's property. They had kept him in the house without the
              girl's knowledge, and the plaster over the face had been for the
              purpose of making recognition difficult in case she should ever
              catch a glimpse of him. Her feminine perception, however, had
              instantly seen through the disguise when, on the occasion of the
              interpreter's visit, she had seen him for the first time. The poor
              girl, however, was herself a prisoner, for there was no one about
              the house except the man who acted as coachman, and his wife, both
              of whom were tools of the conspirators. Finding that their secret
              was out, and that their prisoner was not to be coerced, the two
              villains with the girl had fled away at a few hours' notice from
              the furnished house which they had hired, having first, as they
              thought, taken vengeance both upon the man who had defied and the
              one who had betrayed them.
            </TextNode>

            <TextNode>
              Months afterwards a curious newspaper cutting reached us from
              Buda-Pesth. It told how two Englishmen who had been traveling with
              a woman had met with a tragic end. They had each been stabbed, it
              seems, and the Hungarian police were of opinion that they had
              quarreled and had inflicted mortal injuries upon each other.
              Holmes, however, is, I fancy, of a different way of thinking, and
              holds to this day that, if one could find the Grecian girl, one
              might learn how the wrongs of herself and her brother came to be
              avenged.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page158;
