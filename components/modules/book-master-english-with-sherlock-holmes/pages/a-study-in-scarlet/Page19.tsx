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

function Page19({
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
            <TextNode noIndent>“ ‘Well?’</TextNode>
            <TextNode>
              “ ‘My heart grew light when I saw him drive away. My son is on
              leave just now, but I did not tell him anything of all this, for
              his temper is violent, and he is passionately fond of his sister.
              When I closed the door behind them a load seemed to be lifted from
              my mind. Alas, in less than an hour there was a ring at the bell,
              and I learned that Mr. Drebber had returned. He was much excited,
              and evidently the worse for drink. He forced his way into the
              room, where I was sitting with my daughter, and made some
              incoherent remark about having missed his train. He then turned to
              Alice, and before my very face, proposed to her that she should
              fly with him. “You are of age,” he said, “and there is no law to
              stop you. I have money enough and to spare. Never mind the old
              girl here, but come along with me now straight away. You shall
              live like a princess.” Poor Alice was so frightened that she
              shrunk away from him, but he caught her by the wrist and
              endeavoured to draw her towards the door. I screamed, and at that
              moment my son Arthur came into the room. What happened then I do
              not know. I heard oaths and the confused sounds of a scuffle. I
              was too terrified to raise my head. When I did look up I saw
              Arthur standing in the doorway laughing, with a stick in his hand.
              “I don't think that fine fellow will trouble us again,” he said.
              “I will just go after him and see what he does with himself.” With
              those words he took his hat and started off down the street. The
              next morning we heard of Mr. Drebber's mysterious death.’
            </TextNode>
            <TextNode>
              “This statement came from Mrs. Charpentier's lips with many gasps
              and pauses. At times she spoke so low that I could hardly catch
              the words. I made shorthand notes of all that she said, however,
              so that there should be no possibility of a mistake.”
            </TextNode>
            <TextNode>
              “It's quite exciting,” said Sherlock Holmes, with a yawn. “What
              happened next?”
            </TextNode>
            <TextNode>
              “When Mrs. Charpentier paused,” the detective continued, “I saw
              that the whole case hung upon one point. Fixing her with my eye in
              a way which I always found effective with women, I asked her at
              what hour her son returned.
            </TextNode>
            <TextNode>“ ‘I do not know,’ she answered.</TextNode>
            <TextNode>“ ‘Not know?’</TextNode>
            <TextNode>
              “ ‘No; he has a latch-key, and he let himself in.’
            </TextNode>
            <TextNode>“ ‘After you went to bed?’</TextNode>
            <TextNode>“ ‘Yes.’</TextNode>
            <TextNode>“ ‘When did you go to bed?’</TextNode>
            <TextNode>“ ‘About eleven.’</TextNode>
            <TextNode>“ ‘So your son was gone at least two hours?’</TextNode>
            <TextNode>“ ‘Yes.’</TextNode>
            <TextNode>“ ‘Possibly four or five?’</TextNode>
            <TextNode>“ ‘Yes.’</TextNode>
            <TextNode>“ ‘What was he doing during that time?’</TextNode>
            <TextNode>
              “ ‘I do not know,’ she answered, turning white to her very lips.
            </TextNode>
            <TextNode>
              “Of course after that there was nothing more to be done. I found
              out where Lieutenant Charpentier was, took two officers with me,
              and arrested him. When I touched him on the shoulder and warned
              him to come quietly with us, he answered us as bold as brass, ‘I
              suppose you are arresting me for being concerned in the death of
              that scoundrel Drebber,’ he said. We had said nothing to him about
              it, so that his alluding to it had a most suspicious aspect.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Very,” said Holmes.</TextNode>

            <TextNode>
              “He still carried the heavy stick which the mother described him
              as having with him when he followed Drebber. It was a stout oak
              cudgel.”
            </TextNode>

            <TextNode>“What is your theory, then?”</TextNode>

            <TextNode>
              “Well, my theory is that he followed Drebber as far as the Brixton
              Road. When there, a fresh altercation arose between them, in the
              course of which Drebber received a blow from the stick, in the pit
              of the stomach, perhaps, which killed him without leaving any
              mark. The night was so wet that no one was about, so Charpentier
              dragged the body of his victim into the empty house. As to the
              candle, and the blood, and the writing on the wall, and the ring,
              they may all be so many tricks to throw the police on to the wrong
              scent.”
            </TextNode>

            <TextNode>
              “Well done!” said Holmes in an encouraging voice. “Really,
              Gregson, you are getting along. We shall make something of you
              yet.”
            </TextNode>

            <TextNode>
              “I flatter myself that I have managed it rather neatly,” the
              detective answered proudly. “The young man volunteered a
              statement, in which he said that after following Drebber some
              time, the latter perceived him, and took a cab in order to get
              away from him. On his way home he met an old shipmate, and took a
              long walk with him. On being asked where this old shipmate lived,
              he was unable to give any satisfactory reply. I think the whole
              case fits together uncommonly well. What amuses me is to think of
              Lestrade, who had started off upon the wrong scent. I am afraid he
              won't make much of—Why, by Jove, here's the very man himself!”
            </TextNode>

            <TextNode>
              It was indeed Lestrade, who had ascended the stairs while we were
              talking, and who now entered the room. The assurance and
              jauntiness which generally marked his demeanour and dress were,
              however, wanting. His face was disturbed and troubled, while his
              clothes were disarranged and untidy. He had evidently come with
              the intention of consulting with Sherlock Holmes, for on
              perceiving his colleague he appeared to be embarrassed and put
              out. He stood in the centre of the room, fumbling nervously with
              his hat and uncertain what to do. “This is a most extraordinary
              case,” he said at last—“a most incomprehensible affair.”
            </TextNode>

            <TextNode>
              “Ah, you find it so, Mr. Lestrade!” cried Gregson, triumphantly.
              “I thought you would come to that conclusion. Have you managed to
              find the Secretary, Mr. Joseph Stangerson?”
            </TextNode>

            <TextNode>
              “The Secretary, Mr. Joseph Stangerson,” said Lestrade gravely,
              “was murdered at Halliday's Private Hotel about six o'clock this
              morning.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page19;
