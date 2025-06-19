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

function Page87({
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
        title='THE FIVE ORANGE PIPS'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “One moment,” Holmes interposed, “your statement is, I foresee,
              one of the most remarkable to which I have ever listened. Let me
              have the date of the reception by your uncle of the letter, and
              the date of his supposed suicide.”
            </TextNode>

            <TextNode>
              “The letter arrived on March 10, 1883. His death was seven weeks
              later, upon the night of May 2nd.”
            </TextNode>

            <TextNode>“Thank you. Pray proceed.”</TextNode>

            <TextNode>
              “When my father took over the Horsham property, he, at my request,
              made a careful examination of the attic, which had been always
              locked up. We found the brass box there, although its contents had
              been destroyed. On the inside of the cover was a paper label, with
              the initials of K. K. K. repeated upon it, and ‘Letters,
              memoranda, receipts, and a register’ written beneath. These, we
              presume, indicated the nature of the papers which had been
              destroyed by Colonel Openshaw. For the rest, there was nothing of
              much importance in the attic save a great many scattered papers
              and note-books bearing upon my uncle's life in America. Some of
              them were of the war time and showed that he had done his duty
              well and had borne the repute of a brave soldier. Others were of a
              date during the reconstruction of the Southern states, and were
              mostly concerned with politics, for he had evidently taken a
              strong part in opposing the carpet-bag politicians who had been
              sent down from the North.
            </TextNode>

            <TextNode>
              “Well, it was the beginning of '84 when my father came to live at
              Horsham, and all went as well as possible with us until the
              January of '85. On the fourth day after the new year I heard my
              father give a sharp cry of surprise as we sat together at the
              breakfast-table. There he was, sitting with a newly opened
              envelope in one hand and five dried orange pips in the
              outstretched palm of the other one. He had always laughed at what
              he called my cock-and-bull story about the colonel, but he looked
              very scared and puzzled now that the same thing had come upon
              himself.
            </TextNode>

            <TextNode>
              “‘Why, what on earth does this mean, John?’ he stammered.
            </TextNode>

            <TextNode>
              “My heart had turned to lead. ‘It is K. K. K.,’ said I.
            </TextNode>

            <TextNode>
              “He looked inside the envelope. ‘So it is,’ he cried. ‘Here are
              the very letters. But what is this written above them?’
            </TextNode>

            <TextNode>
              “‘Put the papers on the sundial,’ I read, peeping over his
              shoulder.
            </TextNode>

            <TextNode>“‘What papers? What sundial?’ he asked.</TextNode>

            <TextNode>
              “‘The sundial in the garden. There is no other,’ said I; ‘but the
              papers must be those that are destroyed.’
            </TextNode>

            <TextNode>
              “‘Pooh!’ said he, gripping hard at his courage. ‘We are in a
              civilised land here, and we can't have tomfoolery of this kind.
              Where does the thing come from?’
            </TextNode>

            <TextNode>
              “‘From Dundee,’ I answered, glancing at the postmark.
            </TextNode>

            <TextNode>
              “‘Some preposterous practical joke,’ said he. ‘What have I to do
              with sundials and papers? I shall take no notice of such
              nonsense.’
            </TextNode>

            <TextNode>
              “‘I should certainly speak to the police,’ I said.
            </TextNode>

            <TextNode>
              “‘And be laughed at for my pains. Nothing of the sort.’
            </TextNode>

            <TextNode>“‘Then let me do so?’</TextNode>

            <TextNode>
              “‘No, I forbid you. I won't have a fuss made about such nonsense.’
            </TextNode>

            <TextNode>
              “It was in vain to argue with him, for he was a very obstinate
              man. I went about, however, with a heart which was full of
              forebodings.
            </TextNode>

            <TextNode>
              “On the third day after the coming of the letter my father went
              from home to visit an old friend of his, Major Freebody, who is in
              command of one of the forts upon Portsdown Hill. I was glad that
              he should go, for it seemed to me that he was farther from danger
              when he was away from home. In that, however, I was in error. Upon
              the second day of his absence I received a telegram from the
              major, imploring me to come at once. My father had fallen over one
              of the deep chalk-pits which abound in the neighbourhood, and was
              lying senseless, with a shattered skull. I hurried to him, but he
              passed away without having ever recovered his consciousness. He
              had, as it appears, been returning from Fareham in the twilight,
              and as the country was unknown to him, and the chalk-pit unfenced,
              the jury had no hesitation in bringing in a verdict of ‘death from
              accidental causes.’ Carefully as I examined every fact connected
              with his death, I was unable to find anything which could suggest
              the idea of murder. There were no signs of violence, no footmarks,
              no robbery, no record of strangers having been seen upon the
              roads. And yet I need not tell you that my mind was far from at
              ease, and that I was well-nigh certain that some foul plot had
              been woven round him.
            </TextNode>

            <TextNode>
              “In this sinister way I came into my inheritance. You will ask me
              why I did not dispose of it? I answer, because I was well
              convinced that our troubles were in some way dependent upon an
              incident in my uncle's life, and that the danger would be as
              pressing in one house as in another.
            </TextNode>

            <TextNode>
              “It was in January, '85, that my poor father met his end, and two
              years and eight months have elapsed since then. During that time I
              have lived happily at Horsham, and I had begun to hope that this
              curse had passed away from the family, and that it had ended with
              the last generation. I had begun to take comfort too soon,
              however; yesterday morning the blow fell in the very shape in
              which it had come upon my father.”
            </TextNode>

            <TextNode>
              The young man took from his waistcoat a crumpled envelope, and
              turning to the table he shook out upon it five little dried orange
              pips.
            </TextNode>

            <TextNode>
              “This is the envelope,” he continued. “The postmark is
              London—eastern division. Within are the very words which were upon
              my father's last message: ‘K. K. K.’; and then ‘Put the papers on
              the sundial.’”
            </TextNode>

            <TextNode>“What have you done?” asked Holmes.</TextNode>

            <TextNode>“Nothing.”</TextNode>

            <TextNode>“Nothing?”</TextNode>

            <TextNode>
              “To tell the truth”—he sank his face into his thin, white hands—“I
              have felt helpless. I have felt like one of those poor rabbits
              when the snake is writhing towards it. I seem to be in the grasp
              of some resistless, inexorable evil, which no foresight and no
              precautions can guard against.”
            </TextNode>

            <TextNode>
              “Tut! tut!” cried Sherlock Holmes. “You must act, man, or you are
              lost. Nothing but energy can save you. This is no time for
              despair.”
            </TextNode>

            <TextNode>“I have seen the police.”</TextNode>

            <TextNode>“Ah!”</TextNode>

            <TextNode>
              “But they listened to my story with a smile. I am convinced that
              the inspector has formed the opinion that the letters are all
              practical jokes, and that the deaths of my relations were really
              accidents, as the jury stated, and were not to be connected with
              the warnings.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Holmes shook his clenched hands in the air. “Incredible
              imbecility!” he cried.
            </TextNode>

            <TextNode>
              “They have, however, allowed me a policeman, who may remain in the
              house with me.”
            </TextNode>

            <TextNode>“Has he come with you to-night?”</TextNode>

            <TextNode>“No. His orders were to stay in the house.”</TextNode>

            <TextNode>Again Holmes raved in the air.</TextNode>

            <TextNode>
              “Why did you come to me,” he cried, “and, above all, why did you
              not come at once?”
            </TextNode>

            <TextNode>
              “I did not know. It was only to-day that I spoke to Major
              Prendergast about my troubles and was advised by him to come to
              you.”
            </TextNode>

            <TextNode>
              “It is really two days since you had the letter. We should have
              acted before this. You have no further evidence, I suppose, than
              that which you have placed before us—no suggestive detail which
              might help us?”
            </TextNode>

            <TextNode>
              “There is one thing,” said John Openshaw. He rummaged in his coat
              pocket, and, drawing out a piece of discoloured, blue-tinted
              paper, he laid it out upon the table. “I have some remembrance,”
              said he, “that on the day when my uncle burned the papers I
              observed that the small, unburned margins which lay amid the ashes
              were of this particular colour. I found this single sheet upon the
              floor of his room, and I am inclined to think that it may be one
              of the papers which has, perhaps, fluttered out from among the
              others, and in that way has escaped destruction. Beyond the
              mention of pips, I do not see that it helps us much. I think
              myself that it is a page from some private diary. The writing is
              undoubtedly my uncle's.”
            </TextNode>

            <TextNode>
              Holmes moved the lamp, and we both bent over the sheet of paper,
              which showed by its ragged edge that it had indeed been torn from
              a book. It was headed, “March, 1869,” and beneath were the
              following enigmatical notices:
            </TextNode>

            <TextNode className='pl-14' noIndent>
              4th. Hudson came. Same old platform.
              <br />
              7th. Set the pips on McCauley, Paramore, and John Swain, of St
              Augustine.
              <br />
              9th. McCauley cleared.
              <br />
              10th. John Swain cleared.
              <br />
              12th. Visited Paramore. All well.
            </TextNode>

            <TextNode noIndent>
              “Thank you!” said Holmes, folding up the paper and returning it to
              our visitor. “And now you must on no account lose another instant.
              We cannot spare time even to discuss what you have told me. You
              must get home instantly and act.”
            </TextNode>

            <TextNode>“What shall I do?”</TextNode>

            <TextNode>
              “There is but one thing to do. It must be done at once. You must
              put this piece of paper which you have shown us into the brass box
              which you have described. You must also put in a note to say that
              all the other papers were burned by your uncle, and that this is
              the only one which remains. You must assert that in such words as
              will carry conviction with them. Having done this, you must at
              once put the box out upon the sundial, as directed. Do you
              understand?”
            </TextNode>

            <TextNode>“Entirely.”</TextNode>

            <TextNode>
              “Do not think of revenge, or anything of the sort, at present. I
              think that we may gain that by means of the law; but we have our
              web to weave, while theirs is already woven. The first
              consideration is to remove the pressing danger which threatens
              you. The second is to clear up the mystery and to punish the
              guilty parties.”
            </TextNode>

            <TextNode>
              “I thank you,” said the young man, rising and pulling on his
              overcoat. “You have given me fresh life and hope. I shall
              certainly do as you advise.”
            </TextNode>

            <TextNode>
              “Do not lose an instant. And, above all, take care of yourself in
              the meanwhile, for I do not think that there can be a doubt that
              you are threatened by a very real and imminent danger. How do you
              go back?”
            </TextNode>

            <TextNode>“By train from Waterloo.”</TextNode>

            <TextNode>
              “It is not yet nine. The streets will be crowded, so I trust that
              you may be in safety. And yet you cannot guard yourself too
              closely.”
            </TextNode>

            <TextNode>“I am armed.”</TextNode>

            <TextNode>
              “That is well. To-morrow I shall set to work upon your case.”
            </TextNode>

            <TextNode>“I shall see you at Horsham, then?”</TextNode>

            <TextNode>
              “No, your secret lies in London. It is there that I shall seek
              it.”
            </TextNode>

            <TextNode>
              “Then I shall call upon you in a day, or in two days, with news as
              to the box and the papers. I shall take your advice in every
              particular.” He shook hands with us and took his leave. Outside
              the wind still screamed and the rain splashed and pattered against
              the windows. This strange, wild story seemed to have come to us
              from amid the mad elements—blown in upon us like a sheet of
              sea-weed in a gale—and now to have been reabsorbed by them once
              more.
            </TextNode>

            <TextNode>
              Sherlock Holmes sat for some time in silence, with his head sunk
              forward and his eyes bent upon the red glow of the fire. Then he
              lit his pipe, and leaning back in his chair he watched the blue
              smoke-rings as they chased each other up to the ceiling.
            </TextNode>

            <TextNode>
              “I think, Watson,” he remarked at last, “that of all our cases we
              have had none more fantastic than this.”
            </TextNode>

            <TextNode>“Save, perhaps, the Sign of Four.”</TextNode>

            <TextNode>
              “Well, yes. Save, perhaps, that. And yet this John Openshaw seems
              to me to be walking amid even greater perils than did the
              Sholtos.”
            </TextNode>

            <TextNode>
              “But have you,” I asked, “formed any definite conception as to
              what these perils are?”
            </TextNode>

            <TextNode>
              “There can be no question as to their nature,” he answered.
            </TextNode>

            <TextNode>
              “Then what are they? Who is this K. K. K., and why does he pursue
              this unhappy family?”
            </TextNode>

            <TextNode>
              Sherlock Holmes closed his eyes and placed his elbows upon the
              arms of his chair, with his finger-tips together. “The ideal
              reasoner,” he remarked, “would, when he had once been shown a
              single fact in all its bearings, deduce from it not only all the
              chain of events which led up to it but also all the results which
              would follow from it. As Cuvier could correctly describe a whole
              animal by the contemplation of a single bone, so the observer who
              has thoroughly understood one link in a series of incidents should
              be able to accurately state all the other ones, both before and
              after. We have not yet grasped the results which the reason alone
              can attain to. Problems may be solved in the study which have
              baffled all those who have sought a solution by the aid of their
              senses. To carry the art, however, to its highest pitch, it is
              necessary that the reasoner should be able to utilise all the
              facts which have come to his knowledge; and this in itself
              implies, as you will readily see, a possession of all knowledge,
              which, even in these days of free education and encyclopaedias, is
              a somewhat rare accomplishment. It is not so impossible, however,
              that a man should possess all knowledge which is likely to be
              useful to him in his work, and this I have endeavoured in my case
              to do. If I remember rightly, you on one occasion, in the early
              days of our friendship, defined my limits in a very precise
              fashion.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page87;
