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

function Page42({
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
              “‘I have only one thing,’ he said, ‘which weighs upon my mind at
              this supreme moment. It is my treatment of poor Morstan's orphan.
              The cursed greed which has been my besetting sin through life has
              withheld from her the treasure, half at least of which should have
              been hers. And yet I have made no use of it myself,—so blind and
              foolish a thing is avarice. The mere feeling of possession has
              been so dear to me that I could not bear to share it with another.
              See that chaplet dipped with pearls beside the quinine-bottle.
              Even that I could not bear to part with, although I had got it out
              with the design of sending it to her. You, my sons, will give her
              a fair share of the Agra treasure. But send her nothing—not even
              the chaplet—until I am gone. After all, men have been as bad as
              this and have recovered.
            </TextNode>

            <TextNode>
              “‘I will tell you how Morstan died,’ he continued. ‘He had
              suffered for years from a weak heart, but he concealed it from
              every one. I alone knew it. When in India, he and I, through a
              remarkable chain of circumstances, came into possession of a
              considerable treasure. I brought it over to England, and on the
              night of Morstan's arrival he came straight over here to claim his
              share. He walked over from the station, and was admitted by my
              faithful Lal Chowdar, who is now dead. Morstan and I had a
              difference of opinion as to the division of the treasure, and we
              came to heated words. Morstan had sprung out of his chair in a
              paroxysm of anger, when he suddenly pressed his hand to his side,
              his face turned a dusky hue, and he fell backwards, cutting his
              head against the corner of the treasure-chest. When I stooped over
              him I found, to my horror, that he was dead.
            </TextNode>

            <TextNode>
              “‘For a long time I sat half distracted, wondering what I should
              do. My first impulse was, of course, to call for assistance; but I
              could not but recognize that there was every chance that I would
              be accused of his murder. His death at the moment of a quarrel,
              and the gash in his head, would be black against me. Again, an
              official inquiry could not be made without bringing out some facts
              about the treasure, which I was particularly anxious to keep
              secret. He had told me that no soul upon earth knew where he had
              gone. There seemed to be no necessity why any soul ever should
              know.
            </TextNode>

            <TextNode>
              “‘I was still pondering over the matter, when, looking up, I saw
              my servant, Lal Chowdar, in the doorway. He stole in and bolted
              the door behind him. “Do not fear, Sahib,” he said. “No one need
              know that you have killed him. Let us hide him away, and who is
              the wiser?” “I did not kill him,” said I. Lal Chowdar shook his
              head and smiled. “I heard it all, Sahib,” said he. “I heard you
              quarrel, and I heard the blow. But my lips are sealed. All are
              asleep in the house. Let us put him away together.” That was
              enough to decide met. If my own servant could not believe my
              innocence, how could I hope to make it good before twelve foolish
              tradesmen in a jury-box? Lal Chowdar and I disposed of the body
              that night, and within a few days the London papers were full of
              the mysterious disappearance of Captain Morstan. You will see from
              what I say that I can hardly be blamed in the matter. My fault
              lies in the fact that we concealed not only the body, but also the
              treasure, and that I have clung to Morstan's share as well as to
              my own. I wish you, therefore, to make restitution. Put your ears
              down to my mouth. The treasure is hidden in—At this instant a
              horrible change came over his expression; his eyes stared wildly,
              his jaw dropped, and he yelled, in a voice which I can never
              forget, ‘Keep him out! For Christ's sake keep him out’! We both
              stared round at the window behind us upon which his gaze was
              fixed. A face was looking in at us out of the darkness. We could
              see the whitening of the nose where it was pressed against the
              glass. It was a bearded, hairy face, with wild cruel eyes and an
              expression of concentrated malevolence. My brother and I rushed
              towards the window, but the man was gone. When we returned to my
              father his head had dropped and his pulse had ceased to beat.
            </TextNode>

            <TextNode>
              “We searched the garden that night, but found no sign of the
              intruder, save that just under the window a single footmark was
              visible in the flower-bed. But for that one trace, we might have
              thought that our imaginations had conjured up that wild, fierce
              face. We soon, however, had another and a more striking proof that
              there were secret agencies at work all round us. The window of my
              father's room was found open in the morning, his cupboards and
              boxes had been rifled, and upon his chest was fixed a torn piece
              of paper, with the words ‘The sign of the four’ scrawled across
              it. What the phrase meant, or who our secret visitor may have
              been, we never knew. As far as we can judge, none of my father's
              property had been actually stolen, though everything had been
              turned out. My brother and I naturally associated this peculiar
              incident with the fear which haunted my father during his life;
              but it is still a complete mystery to us.”
            </TextNode>

            <TextNode>
              The little man stopped to relight his hookah and puffed
              thoughtfully for a few moments. We had all sat absorbed, listening
              to his extraordinary narrative. At the short account of her
              father's death Miss Morstan had turned deadly white, and for a
              moment I feared that she was about to faint. She rallied however,
              on drinking a glass of water which I quietly poured out for her
              from a Venetian carafe upon the side-table. Sherlock Holmes leaned
              back in his chair with an abstracted expression and the lids drawn
              low over his glittering eyes. As I glanced at him I could not but
              think how on that very day he had complained bitterly of the
              commonplaceness of life. Here at least was a problem which would
              tax his sagacity to the utmost. Mr. Thaddeus Sholto looked from
              one to the other of us with an obvious pride at the effect which
              his story had produced, and then continued between the puffs of
              his overgrown pipe.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “My brother and I,” said he, “were, as you may imagine, much
              excited as to the treasure which my father had spoken of. For
              weeks and for months we dug and delved in every part of the
              garden, without discovering its whereabouts. It was maddening to
              think that the hiding-place was on his very lips at the moment
              that he died. We could judge the splendor of the missing riches by
              the chaplet which he had taken out. Over this chaplet my brother
              Bartholomew and I had some little discussion. The pearls were
              evidently of great value, and he was averse to part with them,
              for, between friends, my brother was himself a little inclined to
              my father's fault. He thought, too, that if we parted with the
              chaplet it might give rise to gossip and finally bring us into
              trouble. It was all that I could do to persuade him to let me find
              out Miss Morstan's address and send her a detached pearl at fixed
              intervals, so that at least she might never feel destitute.”
            </TextNode>

            <TextNode>
              “It was a kindly thought,” said our companion, earnestly. “It was
              extremely good of you.”
            </TextNode>

            <TextNode>
              The little man waved his hand deprecatingly. “We were your
              trustees,” he said. ”That was the view which I took of it, though
              Brother Bartholomew could not altogether see it in that light. We
              had plenty of money ourselves. I desired no more. Besides, it
              would have been such bad taste to have treated a young lady in so
              scurvy a fashion.{' '}
              <span className='italic'>‘Le mauvais goût mène au crime.’</span>{' '}
              The French have a very neat way of putting these things. Our
              difference of opinion on this subject went so far that I thought
              it best to set up rooms for myself: so I left Pondicherry Lodge,
              taking the old khitmutgar and Williams with me. Yesterday,
              however, I learn that an event of extreme importance has occurred.
              The treasure has been discovered. I instantly communicated with
              Miss Morstan, and it only remains for us to drive out to Norwood
              and demand our share. I explained my views last night to Brother
              Bartholomew: so we shall be expected, if not welcome, visitors.”
            </TextNode>

            <TextNode>
              Mr. Thaddeus Sholto ceased, and sat twitching on his luxurious
              settee. We all remained silent, with our thoughts upon the new
              development which the mysterious business had taken. Holmes was
              the first to spring to his feet.
            </TextNode>

            <TextNode>
              “You have done well, sir, from first to last,” said he. “It is
              possible that we may be able to make you some small return by
              throwing some light upon that which is still dark to you. But, as
              Miss Morstan remarked just now, it is late, and we had best put
              the matter through without delay.”
            </TextNode>

            <TextNode>
              Our new acquaintance very deliberately coiled up the tube of his
              hookah, and produced from behind a curtain a very long befrogged
              topcoat with Astrakhan collar and cuffs. This he buttoned tightly
              up, in spite of the extreme closeness of the night, and finished
              his attire by putting on a rabbit-skin cap with hanging lappets
              which covered the ears, so that no part of him was visible save
              his mobile and peaky face. “My health is somewhat fragile,” he
              remarked, as he led the way down the passage. “I am compelled to
              be a valetudinarian.”
            </TextNode>

            <TextNode>
              Our cab was awaiting us outside, and our programme was evidently
              prearranged, for the driver started off at once at a rapid pace.
              Thaddeus Sholto talked incessantly, in a voice which rose high
              above the rattle of the wheels.
            </TextNode>

            <TextNode>
              “Bartholomew is a clever fellow,” said he. “How do you think he
              found out where the treasure was? He had come to the conclusion
              that it was somewhere indoors: so he worked out all the cubic
              space of the house, and made measurements everywhere, so that not
              one inch should be unaccounted for. Among other things, he found
              that the height of the building was seventy-four feet, but on
              adding together the heights of all the separate rooms, and making
              every allowance for the space between, which he ascertained by
              borings, he could not bring the total to more than seventy feet.
              There were four feet unaccounted for. These could only be at the
              top of the building. He knocked a hole, therefore, in the
              lath-and-plaster ceiling of the highest room, and there, sure
              enough, he came upon another little garret above it, which had
              been sealed up and was known to no one. In the centre stood the
              treasure-chest, resting upon two rafters. He lowered it through
              the hole, and there it lies. He computes the value of the jewels
              at not less than half a million sterling.”
            </TextNode>

            <TextNode>
              At the mention of this gigantic sum we all stared at one another
              open-eyed. Miss Morstan, could we secure her rights, would change
              from a needy governess to the richest heiress in England. Surely
              it was the place of a loyal friend to rejoice at such news; yet I
              am ashamed to say that selfishness took me by the soul, and that
              my heart turned as heavy as lead within me. I stammered out some
              few halting words of congratulation, and then sat downcast, with
              my head drooped, deaf to the babble of our new acquaintance. He
              was clearly a confirmed hypochondriac, and I was dreamily
              conscious that he was pouring forth interminable trains of
              symptoms, and imploring information as to the composition and
              action of innumerable quack nostrums, some of which he bore about
              in a leather case in his pocket. I trust that he may not remember
              any of the answers which I gave him that night. Holmes declares
              that he overheard me caution him against the great danger of
              taking more than two drops of castor oil, while I recommended
              strychnine in large doses as a sedative. However that may be, I
              was certainly relieved when our cab pulled up with a jerk and the
              coachman sprang down to open the door.
            </TextNode>

            <TextNode>
              “This, Miss Morstan, is Pondicherry Lodge,” said Mr. Thaddeus
              Sholto, as he handed her out.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page42;
