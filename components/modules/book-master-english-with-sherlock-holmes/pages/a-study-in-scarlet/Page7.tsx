'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextLi from '@/components/elements/book-master-english-with-sherlock-holmes/TextLi';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import TextOl from '@/components/elements/book-master-english-with-sherlock-holmes/TextOl';
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

function Page7({
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
        <H4>
          Chapter II.
          <br />
          The Science of Deduction
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              We met next day as he had arranged, and inspected the rooms at No.
              221b, Baker Street, of which he had spoken at our meeting. They
              consisted of a couple of comfortable bed-rooms and a single large
              airy sitting-room, cheerfully furnished, and illuminated by two
              broad windows. So desirable in every way were the apartments, and
              so moderate did the terms seem when divided between us, that the
              bargain was concluded upon the spot, and we at once entered into
              possession. That very evening I moved my things round from the
              hotel, and on the following morning Sherlock Holmes followed me
              with several boxes and portmanteaus. For a day or two we were
              busily employed in unpacking and laying out our property to the
              best advantage. That done, we gradually began to settle down and
              to accommodate ourselves to our new surroundings.
            </TextNode>

            <TextNode>
              Holmes was certainly not a difficult man to live with. He was
              quiet in his ways, and his habits were regular. It was rare for
              him to be up after ten at night, and he had invariably breakfasted
              and gone out before I rose in the morning. Sometimes he spent his
              day at the chemical laboratory, sometimes in the dissecting-rooms,
              and occasionally in long walks, which appeared to take him into
              the lowest portions of the City. Nothing could exceed his energy
              when the working fit was upon him; but now and again a reaction
              would seize him, and for days on end he would lie upon the sofa in
              the sitting-room, hardly uttering a word or moving a muscle from
              morning to night. On these occasions I have noticed such a dreamy,
              vacant expression in his eyes, that I might have suspected him of
              being addicted to the use of some narcotic, had not the temperance
              and cleanliness of his whole life forbidden such a notion.
            </TextNode>

            <TextNode>
              As the weeks went by, my interest in him and my curiosity as to
              his aims in life, gradually deepened and increased. His very
              person and appearance were such as to strike the attention of the
              most casual observer. In height he was rather over six feet, and
              so excessively lean that he seemed to be considerably taller. His
              eyes were sharp and piercing, save during those intervals of
              torpor to which I have alluded; and his thin, hawk-like nose gave
              his whole expression an air of alertness and decision. His chin,
              too, had the prominence and squareness which mark the man of
              determination. His hands were invariably blotted with ink and
              stained with chemicals, yet he was possessed of extraordinary
              delicacy of touch, as I frequently had occasion to observe when I
              watched him manipulating his fragile philosophical instruments.
            </TextNode>

            <TextNode>
              The reader may set me down as a hopeless busybody, when I confess
              how much this man stimulated my curiosity, and how often I
              endeavoured to break through the reticence which he showed on all
              that concerned himself. Before pronouncing judgment, however, be
              it remembered, how objectless was my life, and how little there
              was to engage my attention. My health forbade me from venturing
              out unless the weather was exceptionally genial, and I had no
              friends who would call upon me and break the monotony of my daily
              existence. Under these circumstances, I eagerly hailed the little
              mystery which hung around my companion, and spent much of my time
              in endeavouring to unravel it.
            </TextNode>

            <TextNode>
              He was not studying medicine. He had himself, in reply to a
              question, confirmed Stamford&apos;s opinion upon that point.
              Neither did he appear to have pursued any course of reading which
              might fit him for a degree in science or any other recognized
              portal which would give him an entrance into the learned world.
              Yet his zeal for certain studies was remarkable, and within
              eccentric limits his knowledge was so extraordinarily ample and
              minute that his observations have fairly astounded me. Surely no
              man would work so hard or attain such precise information unless
              he had some definite end in view. Desultory readers are seldom
              remarkable for the exactness of their learning. No man burdens his
              mind with small matters unless he has some very good reason for
              doing so.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              His ignorance was as remarkable as his knowledge. Of contemporary
              literature, philosophy and politics he appeared to know next to
              nothing. Upon my quoting Thomas Carlyle, he inquired in the
              naivest way who he might be and what he had done. My surprise
              reached a climax, however, when I found incidentally that he was
              ignorant of the Copernican Theory and of the composition of the
              Solar System. That any civilized human being in this nineteenth
              century should not be aware that the earth travelled round the sun
              appeared to be to me such an extraordinary fact that I could
              hardly realize it.
            </TextNode>

            <TextNode>
              “You appear to be astonished,” he said, smiling at my expression
              of surprise. “Now that I do know it I shall do my best to forget
              it.”
            </TextNode>

            <TextNode>“To forget it!”</TextNode>

            <TextNode>
              “You see,” he explained, “I consider that a man&apos;s brain
              originally is like a little empty attic, and you have to stock it
              with such furniture as you choose. A fool takes in all the lumber
              of every sort that he comes across, so that the knowledge which
              might be useful to him gets crowded out, or at best is jumbled up
              with a lot of other things so that he has a difficulty in laying
              his hands upon it. Now the skilful workman is very careful indeed
              as to what he takes into his brain-attic. He will have nothing but
              the tools which may help him in doing his work, but of these he
              has a large assortment, and all in the most perfect order. It is a
              mistake to think that that little room has elastic walls and can
              distend to any extent. Depend upon it there comes a time when for
              every addition of knowledge you forget something that you knew
              before. It is of the highest importance, therefore, not to have
              useless facts elbowing out the useful ones.”
            </TextNode>

            <TextNode>“But the Solar System!” I protested.</TextNode>

            <TextNode>
              “What the deuce is it to me?” he interrupted impatiently; “you say
              that we go round the sun. If we went round the moon it would not
              make a pennyworth of difference to me or to my work.”
            </TextNode>

            <TextNode>
              I was on the point of asking him what that work might be, but
              something in his manner showed me that the question would be an
              unwelcome one. I pondered over our short conversation, however,
              and endeavoured to draw my deductions from it. He said that he
              would acquire no knowledge which did not bear upon his object.
              Therefore all the knowledge which he possessed was such as would
              be useful to him. I enumerated in my own mind all the various
              points upon which he had shown me that he was exceptionally
              well-informed. I even took a pencil and jotted them down. I could
              not help smiling at the document when I had completed it. It ran
              in this way—
            </TextNode>

            <TextOl>
              <TextLi>Knowledge of Literature.—Nil.</TextLi>
              <TextLi>Philosophy.—Nil.</TextLi>
              <TextLi>Astronomy.—Nil.</TextLi>
              <TextLi>Politics.—Feeble.</TextLi>
              <TextLi>
                Botany.—Variable.Well up in belladonna, opium, and poisons
                generally. Knows nothing of practical gardening.
              </TextLi>
              <TextLi>
                Geology.—Practical, but limited. Tells at a glance different
                soils from each other. After walks has shown me splashes upon
                his trousers, and told me by their colour and consistence in
                what part of London he had received them.
              </TextLi>
              <TextLi>Chemistry.—Profound.</TextLi>
              <TextLi>Anatomy.—Accurate, but unsystematic.</TextLi>
              <TextLi>
                Sensational Literature.—Immense. He appears to know every detail
                of every horror perpetrated in the century.
              </TextLi>
              <TextLi>Plays the violin well.</TextLi>
              <TextLi>
                Is an expert singlestick player, boxer, and swordsman.
              </TextLi>
              <TextLi>Has a good practical knowledge of British law.</TextLi>
            </TextOl>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page7;
