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

function Page38({
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
              “It is simplicity itself,” he remarked, chuckling at my
              surprise,—“so absurdly simple that an explanation is superfluous;
              and yet it may serve to define the limits of observation and of
              deduction. Observation tells me that you have a little reddish
              mould adhering to your instep. Just opposite the Seymour Street
              Office they have taken up the pavement and thrown up some earth
              which lies in such a way that it is difficult to avoid treading in
              it in entering. The earth is of this peculiar reddish tint which
              is found, as far as I know, nowhere else in the neighborhood. So
              much is observation. The rest is deduction.”
            </TextNode>

            <TextNode>“How, then, did you deduce the telegram?”</TextNode>

            <TextNode>
              “Why, of course I knew that you had not written a letter, since I
              sat opposite to you all morning. I see also in your open desk
              there that you have a sheet of stamps and a thick bundle of
              postcards. What could you go into the post-office for, then, but
              to send a wire? Eliminate all other factors, and the one which
              remains must be the truth.”
            </TextNode>

            <TextNode>
              “In this case it certainly is so,” I replied, after a little
              thought. “The thing, however, is, as you say, of the simplest.
              Would you think me impertinent if I were to put your theories to a
              more severe test?”
            </TextNode>

            <TextNode>
              “On the contrary,” he answered, “it would prevent me from taking a
              second dose of cocaine. I should be delighted to look into any
              problem which you might submit to me.”
            </TextNode>

            <TextNode>
              “I have heard you say that it is difficult for a man to have any
              object in daily use without leaving the impress of his
              individuality upon it in such a way that a trained observer might
              read it. Now, I have here a watch which has recently come into my
              possession. Would you have the kindness to let me have an opinion
              upon the character or habits of the late owner?”
            </TextNode>

            <TextNode>
              I handed him over the watch with some slight feeling of amusement
              in my heart, for the test was, as I thought, an impossible one,
              and I intended it as a lesson against the somewhat dogmatic tone
              which he occasionally assumed. He balanced the watch in his hand,
              gazed hard at the dial, opened the back, and examined the works,
              first with his naked eyes and then with a powerful convex lens. I
              could hardly keep from smiling at his crestfallen face when he
              finally snapped the case to and handed it back.
            </TextNode>

            <TextNode>
              “There are hardly any data,” he remarked. “The watch has been
              recently cleaned, which robs me of my most suggestive facts.”
            </TextNode>

            <TextNode>
              “You are right,” I answered. “It was cleaned before being sent to
              me.” In my heart I accused my companion of putting forward a most
              lame and impotent excuse to cover his failure. What data could he
              expect from an uncleaned watch?
            </TextNode>

            <TextNode>
              “Though unsatisfactory, my research has not been entirely barren,”
              he observed, staring up at the ceiling with dreamy, lack-lustre
              eyes. “Subject to your correction, I should judge that the watch
              belonged to your elder brother, who inherited it from your
              father.”
            </TextNode>

            <TextNode>
              “That you gather, no doubt, from the H. W. upon the back?”
            </TextNode>

            <TextNode>
              “Quite so. The W. suggests your own name. The date of the watch is
              nearly fifty years back, and the initials are as old as the watch:
              so it was made for the last generation. Jewelry usually descents
              to the eldest son, and he is most likely to have the same name as
              the father. Your father has, if I remember right, been dead many
              years. It has, therefore, been in the hands of your eldest
              brother.”
            </TextNode>

            <TextNode>“Right, so far,” said I. “Anything else?”</TextNode>

            <TextNode>
              “He was a man of untidy habits,—very untidy and careless. He was
              left with good prospects, but he threw away his chances, lived for
              some time in poverty with occasional short intervals of
              prosperity, and finally, taking to drink, he died. That is all I
              can gather.”
            </TextNode>

            <TextNode>
              I sprang from my chair and limped impatiently about the room with
              considerable bitterness in my heart.
            </TextNode>

            <TextNode>
              “This is unworthy of you, Holmes,” I said. “I could not have
              believed that you would have descended to this. You have made
              inquires into the history of my unhappy brother, and you now
              pretend to deduce this knowledge in some fanciful way. You cannot
              expect me to believe that you have read all this from his old
              watch! It is unkind, and, to speak plainly, has a touch of
              charlatanism in it.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “My dear doctor,” said he, kindly, “pray accept my apologies.
              Viewing the matter as an abstract problem, I had forgotten how
              personal and painful a thing it might be to you. I assure you,
              however, that I never even knew that you had a brother until you
              handed me the watch.”
            </TextNode>

            <TextNode>
              “Then how in the name of all that is wonderful did you get these
              facts? They are absolutely correct in every particular.”
            </TextNode>

            <TextNode>
              “Ah, that is good luck. I could only say what was the balance of
              probability. I did not at all expect to be so accurate.“
            </TextNode>

            <TextNode>“But it was not mere guess-work?”</TextNode>

            <TextNode>
              “No, no: I never guess. It is a shocking habit,—destructive to the
              logical faculty. What seems strange to you is only so because you
              do not follow my train of thought or observe the small facts upon
              which large inferences may depend. For example, I began by stating
              that your brother was careless. When you observe the lower part of
              that watch-case you notice that it is not only dinted in two
              places, but it is cut and marked all over from the habit of
              keeping other hard objects, such as coins or keys, in the same
              pocket. Surely it is no great feat to assume that a man who treats
              a fifty-guinea watch so cavalierly must be a careless man. Neither
              is it a very far-fetched inference that a man who inherits one
              article of such value is pretty well provided for in other
              respects.”
            </TextNode>

            <TextNode>
              I nodded, to show that I followed his reasoning.
            </TextNode>

            <TextNode>
              “It is very customary for pawnbrokers in England, when they take a
              watch, to scratch the number of the ticket with a pin-point upon
              the inside of the case. It is more handy than a label, as there is
              no risk of the number being lost or transposed. There are no less
              than four such numbers visible to my lens on the inside of this
              case. Inference,—that your brother was often at low water.
              Secondary inference,—that he had occasional bursts of prosperity,
              or he could not have redeemed the pledge. Finally, I ask you to
              look at the inner plate, which contains the key-hole. Look at the
              thousands of scratches all round the hole,—marks where the key has
              slipped. What sober man's key could have scored those grooves? But
              you will never see a drunkard's watch without them. He winds it at
              night, and he leaves these traces of his unsteady hand. Where is
              the mystery in all this?”
            </TextNode>

            <TextNode>
              “It is as clear as daylight,” I answered. “I regret the injustice
              which I did you. I should have had more faith in your marvellous
              faculty. May I ask whether you have any professional inquiry on
              foot at present?”
            </TextNode>

            <TextNode>
              “None. Hence the cocaine. I cannot live without brain-work. What
              else is there to live for? Stand at the window here. Was ever such
              a dreary, dismal, unprofitable world? See how the yellow fog
              swirls down the street and drifts across the duncolored houses.
              What could be more hopelessly prosaic and material? What is the
              use of having powers, doctor, when one has no field upon which to
              exert them? Crime is commonplace, existence is commonplace, and no
              qualities save those which are commonplace have any function upon
              earth.”
            </TextNode>

            <TextNode>
              I had opened my mouth to reply to this tirade, when with a crisp
              knock our landlady entered, bearing a card upon the brass salver.
            </TextNode>

            <TextNode>
              “A young lady for you, sir,” she said, addressing my companion.
            </TextNode>

            <TextNode>
              “Miss Mary Morstan,” he read. “Hum! I have no recollection of the
              name. Ask the young lady to step up, Mrs. Hudson. Don't go,
              doctor. I should prefer that you remain.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page38;
