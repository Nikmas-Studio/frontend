'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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

function Page55({
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
        <H4>
          Chapter X.
          <br />
          The End of the Islander
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Our meal was a merry one. Holmes coud talk exceedingly well when
              he chose, and that night he did choose. He appeared to be in a
              state of nervous exaltation. I have never known him so brilliant.
              He spoke on a quick succession of subjects,—on miracle-plays, on
              medieval pottery, on Stradivarius violins, on the Buddhism of
              Ceylon, and on the war-ships of the future,—handling each as
              though he had made a special study of it. His bright humor marked
              the reaction from his black depression of the preceding days.
              Athelney Jones proved to be a sociable soul in his hours of
              relaxation, and face his dinner with the air of a&nbsp;
              <span className='italic'>bon vivant</span>. For myself, I felt
              elated at the thought that we were nearing the end of our task,
              and I caught something of Holmes's gaiety. None of us alluded
              during dinner to the cause which had brought us together.
            </TextNode>

            <TextNode>
              When the cloth was cleared, Holmes glanced at this watch, and
              filled up three glasses with port. “One bumper,” said he, “to the
              success of our little expedition. And now it is high time we were
              off. Have you a pistol, Watson?”
            </TextNode>

            <TextNode>“I have my old service-revolver in my desk.”</TextNode>

            <TextNode>
              “You had best take it, then. It is well to be prepared. I see that
              the cab is at the door. I ordered it for half-past six.”
            </TextNode>

            <TextNode>
              It was a little past seven before we reached the Westminster
              wharf, and found our launch awaiting us. Holmes eyed it
              critically.
            </TextNode>

            <TextNode>
              “Is there anything to mark it as a police-boat?”
            </TextNode>

            <TextNode>“Yes,—that green lamp at the side.”</TextNode>

            <TextNode>“Then take it off.”</TextNode>

            <TextNode>
              The small change was made, we stepped on board, and the ropes were
              cast off. Jones, Holmes, and I sat in the stern. There was one man
              at the rudder, one to tend the engines, and two burly
              police-inspectors forward.
            </TextNode>

            <TextNode>“Where to?” asked Jones.</TextNode>

            <TextNode>
              “To the Tower. Tell them to stop opposite Jacobson's Yard.”
            </TextNode>

            <TextNode>
              Our craft was evidently a very fast one. We shot past the long
              lines of loaded barges as though they were stationary. Holmes
              smiled with satisfaction as we overhauled a river steamer and left
              her behind us.
            </TextNode>

            <TextNode>
              “We ought to be able to catch anything on the river,” he said.
            </TextNode>

            <TextNode>
              “Well, hardly that. But there are not many launches to beat us.”
            </TextNode>

            <TextNode>
              “We shall have to catch the&nbsp;
              <span className='italic'>Aurora</span>, and she has a name for
              being a clipper. I will tell you how the land lies, Watson. You
              recollect how annoyed I was at being balked by so small a thing?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “Well, I gave my mind a thorough rest by plunging into a chemical
              analysis. One of our greatest statesmen has said that a change of
              work is the best rest. So it is. When I had succeeded in
              dissolving the hydrocarbon which I was at work at, I came back to
              our problem of the Sholtos, and thought the whole matter out
              again. My boys had been up the river and down the river without
              result. The launch was not at any landing-stage or wharf, nor had
              it returned. Yet it could hardly have been scuttled to hide their
              traces,—though that always remained as a possible hypothesis if
              all else failed. I knew this man Small had a certain degree of low
              cunning, but I did not think him capable of anything in the nature
              of delicate finesse. That is usually a product of higher
              education. I then reflected that since he had certainly been in
              London some time—as we had evidence that he maintained a continual
              watch over Pondicherry Lodge—he could hardly leave at a moment's
              notice, but would need some little time, if it were only a day, to
              arrange his affairs. That was the balance of probability, at any
              rate.”
            </TextNode>

            <TextNode>
              “It seems to me to be a little weak,” said I. “It is more probable
              that he had arranged his affairs before ever he set out upon his
              expedition.”
            </TextNode>

            <TextNode>
              “No, I hardly think so. This lair of his would be too valuable a
              retreat in case of need for him to give it up until he was sure
              that he could do without it. But a second consideration struck me.
              Jonathan Small must have felt that the peculiar appearance of his
              companion, however much he may have top-coated him, would give
              rise to gossip, and possibly be associated with this Norwood
              tragedy. He was quite sharp enough to see that. They had started
              from their head-quarters under cover of darkness, and he would
              wish to get back before it was broad light. Now, it was past three
              o'clock, according to Mrs. Smith, when they got the boat. It would
              be quite bright, and people would be about in an hour or so.
              Therefore, I argued, they did not go very far. They paid Smith
              well to hold his tongue, reserved his launch for the final escape,
              and hurried to their lodgings with the treasure-box. In a couple
              of nights, when they had time to see what view the papers took,
              and whether there was any suspicion, they would make their way
              under cover of darkness to some ship at Gravesend or in the Downs,
              where no doubt they had already arranged for passages to America
              or the Colonies.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “But the launch? They could not have taken that to their
              lodgings.”
            </TextNode>

            <TextNode>
              “Quite so. I argued that the launch must be no great way off, in
              spite of its invisibility. I then put myself in the place of
              Small, and looked at it as a man of his capacity would. He would
              probably consider that to send back the launch or to keep it at a
              wharf would make pursuit easy if the police did happen to get on
              his track. How, then, could he conceal the launch and yet have her
              at hand when wanted? I wondered what I should do myself if I were
              in his shoes. I could only think of one way of doing it. I might
              land the launch over to some boat-builder or repairer, with
              directions to make a trifling change in her. She would then be
              removed to his shed or hard, and so be effectually concealed,
              while at the same time I could have her at a few hours' notice.”
            </TextNode>

            <TextNode>“That seems simple enough.”</TextNode>

            <TextNode>
              “It is just these very simple things which are extremely liable to
              be overlooked. However, I determined to act on the idea. I started
              at once in this harmless seaman's rig and inquired at all the
              yards down the river. I drew blank at fifteen, but at the
              sixteenth—Jacobson's—I learned that the&nbsp;
              <span className='italic'>Aurora</span> had been handed over to
              them two days ago by a wooden-legged man, with some trivial
              directions as to her rudder. ‘There ain't naught amiss with her
              rudder,’ said the foreman. ‘There she lies, with the red streaks.’
              At that moment who should come down but Mordecai Smith, the
              missing owner? He was rather the worse for liquor. I should not,
              of course, have known him, but he bellowed out his name and the
              name of his launch. ‘I want her to-night at eight o'clock,’ said
              he,—‘eight o'clock sharp, mind, for I have two gentlemen who won't
              be kept waiting.’ They had evidently paid him well, for he was
              very flush of money, chucking shillings about to the men. I
              followed him some distance, but he subsided into an ale-house: so
              I went back to the yard, and, happening to pick up one of my boys
              on the way, I stationed him as a sentry over the launch. He is to
              stand at water's edge and wave his handkerchief to us when they
              start. We shall be lying off in the stream, and it will be a
              strange thing if we do not take men, treasure, and all.”
            </TextNode>

            <TextNode>
              “You have planned it all very neatly, whether they are the right
              men or not,” said Jones; “but if the affair were in my hands I
              should have had a body of police in Jacobson's Yard, and arrested
              them when they came down.”
            </TextNode>

            <TextNode>
              “Which would have been never. This man Small is a pretty shrewd
              fellow. He would send a scout on ahead, and if anything made him
              suspicious lie snug for another week.”
            </TextNode>

            <TextNode>
              “But you might have stuck to Mordecai Smith, and so been led to
              their hiding-place,” said I.
            </TextNode>

            <TextNode>
              “In that case I should have wasted my day. I think that it is a
              hundred to one against Smith knowing where they live. As long as
              he has liquor and good pay, why should he ask questions? They send
              him messages what to do. No, I thought over every possible course,
              and this is the best.”
            </TextNode>

            <TextNode>
              While this conversation had been proceeding, we had been shooting
              the long series of bridges which span the Thames. As we passed the
              City the last rays of the sun were gilding the cross upon the
              summit of St. Paul's. It was twilight before we reached the Tower.
            </TextNode>

            <TextNode>
              “That is Jacobson's Yard,” said Holmes, pointing to a bristle of
              masts and rigging on the Surrey side. “Cruise gently up and down
              here under cover of this string of lighters.” He took a pair of
              night-glasses from his pocket and gazed some time at the shore. “I
              see my sentry at his post,” he remarked, “but no sign of a
              handkerchief.”
            </TextNode>

            <TextNode>
              “Suppose we go down-stream a short way and lie in wait for them,”
              said Jones, eagerly. We were all eager by this time, even the
              policemen and stokers, who had a very vague idea of what was going
              forward.
            </TextNode>

            <TextNode>
              “We have no right to take anything for granted,” Holmes answered.
              “It is certainly ten to one that they go down-stream, but we
              cannot be certain. From this point we can see the entrance of the
              yard, and they can hardly see us. It will be a clear night and
              plenty of light. We must stay where we are. See how the folk swarm
              over yonder in the gaslight.”
            </TextNode>

            <TextNode>“They are coming from work in the yard.”</TextNode>

            <TextNode>
              “Dirty-looking rascals, but I suppose every one has some little
              immortal spark concealed about him. You would not think it, to
              look at them. There is no a priori probability about it. A strange
              enigma is man!”
            </TextNode>

            <TextNode>
              “Some one calls him a soul concealed in an animal,” I suggested.
            </TextNode>

            <TextNode>
              “Winwood Reade is good upon the subject,” said Holmes. “He remarks
              that, while the individual man is an insoluble puzzle, in the
              aggregate he becomes a mathematical certainty. You can, for
              example, never foretell what any one man will do, but you can say
              with precision what an average number will be up to. Individuals
              vary, but percentages remain constant. So says the statistician.
              But do I see a handkerchief? Surely there is a white flutter over
              yonder.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page55;
