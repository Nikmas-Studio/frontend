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

function Page161({
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
        title='THE NAVAL TREATY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode>
              “Then for the first time the horror of my situation came in its
              full force. Hitherto I had been acting, and action had numbed
              thought. I had been so confident of regaining the treaty at once
              that I had not dared to think of what would be the consequence if
              I failed to do so. But now there was nothing more to be done, and
              I had leisure to realize my position. It was horrible. Watson
              there would tell you that I was a nervous, sensitive boy at
              school. It is my nature. I thought of my uncle and of his
              colleagues in the Cabinet, of the shame which I had brought upon
              him, upon myself, upon every one connected with me. What though I
              was the victim of an extraordinary accident? No allowance is made
              for accidents where diplomatic interests are at stake. I was
              ruined, shamefully, hopelessly ruined. I don't know what I did. I
              fancy I must have made a scene. I have a dim recollection of a
              group of officials who crowded round me, endeavoring to soothe me.
              One of them drove down with me to Waterloo, and saw me into the
              Woking train. I believe that he would have come all the way had it
              not been that Dr. Ferrier, who lives near me, was going down by
              that very train. The doctor most kindly took charge of me, and it
              was well he did so, for I had a fit in the station, and before we
              reached home I was practically a raving maniac.
            </TextNode>

            <TextNode>
              “You can imagine the state of things here when they were roused
              from their beds by the doctor's ringing and found me in this
              condition. Poor Annie here and my mother were broken-hearted. Dr.
              Ferrier had just heard enough from the detective at the station to
              be able to give an idea of what had happened, and his story did
              not mend matters. It was evident to all that I was in for a long
              illness, so Joseph was bundled out of this cheery bedroom, and it
              was turned into a sick-room for me. Here I have lain, Mr. Holmes,
              for over nine weeks, unconscious, and raving with brain-fever. If
              it had not been for Miss Harrison here and for the doctor's care I
              should not be speaking to you now. She has nursed me by day and a
              hired nurse has looked after me by night, for in my mad fits I was
              capable of anything. Slowly my reason has cleared, but it is only
              during the last three days that my memory has quite returned.
              Sometimes I wish that it never had. The first thing that I did was
              to wire to Mr. Forbes, who had the case in hand. He came out, and
              assures me that, though everything has been done, no trace of a
              clue has been discovered. The commissionaire and his wife have
              been examined in every way without any light being thrown upon the
              matter. The suspicions of the police then rested upon young Gorot,
              who, as you may remember, stayed over time in the office that
              night. His remaining behind and his French name were really the
              only two points which could suggest suspicion; but, as a matter of
              fact, I did not begin work until he had gone, and his people are
              of Huguenot extraction, but as English in sympathy and tradition
              as you and I are. Nothing was found to implicate him in any way,
              and there the matter dropped. I turn to you, Mr. Holmes, as
              absolutely my last hope. If you fail me, then my honor as well as
              my position are forever forfeited.”
            </TextNode>

            <TextNode>
              The invalid sank back upon his cushions, tired out by this long
              recital, while his nurse poured him out a glass of some
              stimulating medicine. Holmes sat silently, with his head thrown
              back and his eyes closed, in an attitude which might seem listless
              to a stranger, but which I knew betokened the most intense
              self-absorption.
            </TextNode>

            <TextNode>
              “You statement has been so explicit,” said he at last, “that you
              have really left me very few questions to ask. There is one of the
              very utmost importance, however. Did you tell any one that you had
              this special task to perform?”
            </TextNode>

            <TextNode>“No one.”</TextNode>

            <TextNode>“Not Miss Harrison here, for example?”</TextNode>

            <TextNode>
              “No. I had not been back to Woking between getting the order and
              executing the commission.”
            </TextNode>

            <TextNode>
              “And none of your people had by chance been to see you?”
            </TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Did any of them know their way about in the office?”
            </TextNode>

            <TextNode>“Oh, yes, all of them had been shown over it.”</TextNode>

            <TextNode>
              “Still, of course, if you said nothing to any one about the treaty
              these inquiries are irrelevant.”
            </TextNode>

            <TextNode>“I said nothing.”</TextNode>

            <TextNode>“Do you know anything of the commissionaire?”</TextNode>

            <TextNode>“Nothing except that he is an old soldier.”</TextNode>

            <TextNode>“What regiment?”</TextNode>

            <TextNode>“Oh, I have heard—Coldstream Guards.”</TextNode>

            <TextNode>
              “Thank you. I have no doubt I can get details from Forbes. The
              authorities are excellent at amassing facts, though they do not
              always use them to advantage. What a lovely thing a rose is!”
            </TextNode>

            <TextNode>
              He walked past the couch to the open window, and held up the
              drooping stalk of a moss-rose, looking down at the dainty blend of
              crimson and green. It was a new phase of his character to me, for
              I had never before seen him show any keen interest in natural
              objects.
            </TextNode>

            <TextNode>
              “There is nothing in which deduction is so necessary as in
              religion,” said he, leaning with his back against the shutters.
              “It can be built up as an exact science by the reasoner. Our
              highest assurance of the goodness of Providence seems to me to
              rest in the flowers. All other things, our powers our desires, our
              food, are all really necessary for our existence in the first
              instance. But this rose is an extra. Its smell and its color are
              an embellishment of life, not a condition of it. It is only
              goodness which gives extras, and so I say again that we have much
              to hope from the flowers.”
            </TextNode>

            <TextNode>
              Percy Phelps and his nurse looked at Holmes during this
              demonstration with surprise and a good deal of disappointment
              written upon their faces. He had fallen into a reverie, with the
              moss-rose between his fingers. It had lasted some minutes before
              the young lady broke in upon it.
            </TextNode>

            <TextNode>
              “Do you see any prospect of solving this mystery, Mr. Holmes?” she
              asked, with a touch of asperity in her voice.
            </TextNode>

            <TextNode>
              “Oh, the mystery!” he answered, coming back with a start to the
              realities of life. “Well, it would be absurd to deny that the case
              is a very abstruse and complicated one, but I can promise you that
              I will look into the matter and let you know any points which may
              strike me.”
            </TextNode>

            <TextNode>“Do you see any clue?”</TextNode>

            <TextNode>
              “You have furnished me with seven, but, of course, I must test
              them before I can pronounce upon their value.”
            </TextNode>

            <TextNode>“You suspect some one?”</TextNode>

            <TextNode>“I suspect myself.”</TextNode>

            <TextNode>“What!”</TextNode>

            <TextNode>“Of coming to conclusions too rapidly.”</TextNode>

            <TextNode>“Then go to London and test your conclusions.”</TextNode>

            <TextNode>
              “Your advice is very excellent, Miss Harrison,” said Holmes,
              rising. “I think, Watson, we cannot do better. Do not allow
              yourself to indulge in false hopes, Mr. Phelps. The affair is a
              very tangled one.”
            </TextNode>

            <TextNode>
              “I shall be in a fever until I see you again,” cried the
              diplomatist.
            </TextNode>

            <TextNode>
              “Well, I'll come out by the same train to-morrow, though it's more
              than likely that my report will be a negative one.”
            </TextNode>

            <TextNode>
              “God bless you for promising to come,” cried our client. “It gives
              me fresh life to know that something is being done. By the way, I
              have had a letter from Lord Holdhurst.”
            </TextNode>

            <TextNode>“Ha! What did he say?”</TextNode>

            <TextNode>
              “He was cold, but not harsh. I dare say my severe illness
              prevented him from being that. He repeated that the matter was of
              the utmost importance, and added that no steps would be taken
              about my future—by which he means, of course, my dismissal—until
              my health was restored and I had an opportunity of repairing my
              misfortune.”
            </TextNode>

            <TextNode>
              “Well, that was reasonable and considerate,” said Holmes. “Come,
              Watson, for we have a good day's work before us in town.”
            </TextNode>

            <TextNode>
              Mr. Joseph Harrison drove us down to the station, and we were soon
              whirling up in a Portsmouth train. Holmes was sunk in profound
              thought, and hardly opened his mouth until we had passed Clapham
              Junction.
            </TextNode>

            <TextNode>
              “It's a very cheery thing to come into London by any of these
              lines which run high, and allow you to look down upon the houses
              like this.”
            </TextNode>

            <TextNode>
              I thought he was joking, for the view was sordid enough, but he
              soon explained himself.
            </TextNode>

            <TextNode>
              “Look at those big, isolated clumps of building rising up above
              the slates, like brick islands in a lead-colored sea.”
            </TextNode>

            <TextNode>“The board-schools.”</TextNode>

            <TextNode>
              “Light-houses, my boy! Beacons of the future! Capsules with
              hundreds of bright little seeds in each, out of which will spring
              the wise, better England of the future. I suppose that man Phelps
              does not drink?”
            </TextNode>

            <TextNode>“I should not think so.”</TextNode>

            <TextNode>
              “Nor should I, but we are bound to take every possibility into
              account. The poor devil has certainly got himself into very deep
              water, and it's a question whether we shall ever be able to get
              him ashore. What did you think of Miss Harrison?”
            </TextNode>

            <TextNode>“A girl of strong character.”</TextNode>

            <TextNode>
              “Yes, but she is a good sort, or I am mistaken. She and her
              brother are the only children of an iron-master somewhere up
              Northumberland way. He got engaged to her when traveling last
              winter, and she came down to be introduced to his people, with her
              brother as escort. Then came the smash, and she stayed on to nurse
              her lover, while brother Joseph, finding himself pretty snug,
              stayed on too. I've been making a few independent inquiries, you
              see. But to-day must be a day of inquiries.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer></BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page161;
