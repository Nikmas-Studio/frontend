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

function Page54({
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
              “I have been working in that get-up all day,” said he, lighting
              his cigar. “You see, a good many of the criminal classes begin to
              know me,—especially since our friend here took to publishing some
              of my cases: so I can only go on the war-path under some simple
              disguise like this. You got my wire?”
            </TextNode>

            <TextNode>“Yes; that was what brought me here.”</TextNode>

            <TextNode>“How has your case prospered?”</TextNode>

            <TextNode>
              “It has all come to nothing. I have had to release two of my
              prisoners, and there is no evidence against the other two.”
            </TextNode>

            <TextNode>
              “Never mind. We shall give you two others in the place of them.
              But you must put yourself under my orders. You are welcome to all
              the official credit, but you must act on the line that I point
              out. Is that agreed?”
            </TextNode>

            <TextNode>“Entirely, if you will help me to the men.”</TextNode>

            <TextNode>
              “Well, then, in the first place I shall want a fast police-boat—a
              steam launch—to be at the Westminster Stairs at seven o'clock.”
            </TextNode>

            <TextNode>
              “That is easily managed. There is always one about there; but I
              can step across the road and telephone to make sure.”
            </TextNode>

            <TextNode>
              “Then I shall want two stanch men, in case of resistance.”
            </TextNode>

            <TextNode>
              “There will be two or three in the boat. What else?”
            </TextNode>

            <TextNode>
              “When we secure the men we shall get the treasure. I think that it
              would be a pleasure to my friend here to take the box round to the
              young lady to whom half of it rightfully belongs. Let her be the
              first to open it.—Eh, Watson?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“It would be a great pleasure to me.”</TextNode>

            <TextNode>
              “Rather an irregular proceeding,” said Jones, shaking his head.
              “However, the whole thing is irregular, and I suppose we must wink
              at it. The treasure must afterwards be handed over to the
              authorities until after the official investigation.”
            </TextNode>

            <TextNode>
              “Certainly. That is easily managed. One other point. I should much
              like to have a few details about this matter from the lips of
              Jonathan Small himself. You know I like to work the detail of my
              cases out. There is no objection to my having an unofficial
              interview with him, either here in my rooms or elsewhere, as long
              as he is efficiently guarded?”
            </TextNode>

            <TextNode>
              “Well, you are master of the situation. I have had no proof yet of
              the existence of this Jonathan Small. However, if you can catch
              him I don't see how I can refuse you an interview with him.”
            </TextNode>

            <TextNode>“That is understood, then?”</TextNode>

            <TextNode>“Perfectly. Is there anything else?”</TextNode>

            <TextNode>
              “Only that I insist upon your dining with us. It will be ready in
              half an hour. I have oysters and a brace of grouse, with something
              a little choice in white wines.—Watson, you have never yet
              recognized my merits as a housekeeper.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page54;
