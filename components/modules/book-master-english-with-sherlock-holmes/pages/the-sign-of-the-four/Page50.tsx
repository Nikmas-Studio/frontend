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

function Page50({
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
          Chapter VIII.
          <br />
          The Baker Street Irregulars
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “What now?” I asked. “Toby has lost his character for
              infallibility.”
            </TextNode>

            <TextNode>
              “He acted according to his lights,” said Holmes, lifting him down
              from the barrel and walking him out of the timber-yard. “If you
              consider how much creasote is carted about London in one day, it
              is no great wonder that our trail should have been crossed. It is
              much used now, especially for the seasoning of wood. Poor Toby is
              not to blame.”
            </TextNode>

            <TextNode>
              “We must get on the main scent again, I suppose.”
            </TextNode>

            <TextNode>
              “Yes. And, fortunately, we have no distance to go. Evidently what
              puzzled the dog at the corner of Knight's Place was that there
              were two different trails running in opposite directions. We took
              the wrong one. It only remains to follow the other.”
            </TextNode>

            <TextNode>
              There was no difficulty about this. On leading Toby to the place
              where he had committed his fault, he cast about in a wide circle
              and finally dashed off in a fresh direction.
            </TextNode>

            <TextNode>
              “We must take care that he does not now bring us to the place
              where the creasote-barrel came from,” I observed.
            </TextNode>

            <TextNode>
              “I had thought of that. But you notice that he keeps on the
              pavement, whereas the barrel passed down the roadway. No, we are
              on the true scent now.”
            </TextNode>

            <TextNode>
              It tended down towards the river-side, running through Belmont
              Place and Prince's Street. At the end of Broad Street it ran right
              down to the water's edge, where there was a small wooden wharf.
              Toby led us to the very edge of this, and there stood whining,
              looking out on the dark current beyond.
            </TextNode>

            <TextNode>
              “We are out of luck,” said Holmes. “They have taken to a boat
              here.” Several small punts and skiffs were lying about in the
              water and on the edge of the wharf. We took Toby round to each in
              turn, but, though he sniffed earnestly, he made no sign.
            </TextNode>

            <TextNode>
              Close to the rude landing-stage was a small brick house, with a
              wooden placard slung out through the second window. “Mordecai
              Smith” was printed across it in large letters, and, underneath,
              “Boats to hire by the hour or day.” A second inscription above the
              door informed us that a steam launch was kept,—a statement which
              was confirmed by a great pile of coke upon the jetty. Sherlock
              Holmes looked slowly round, and his face assumed an ominous
              expression.
            </TextNode>

            <TextNode>
              “This looks bad,” said he. “These fellows are sharper than I
              expected. They seem to have covered their tracks. There has, I
              fear, been preconcerted management here.”
            </TextNode>

            <TextNode>
              He was approaching the door of the house, when it opened, and a
              little, curly-headed lad of six came running out, followed by a
              stoutish, red-faced woman with a large sponge in her hand.
            </TextNode>

            <TextNode>
              “You come back and be washed, Jack,” she shouted. “Come back, you
              young imp; for if your father comes home and finds you like that,
              he'll let us hear of it.”
            </TextNode>

            <TextNode>
              “Dear little chap!” said Holmes, strategically. “What a
              rosy-cheeked young rascal! Now, Jack, is there anything you would
              like?”
            </TextNode>

            <TextNode>
              The youth pondered for a moment. “I'd like a shillin',” said he.
            </TextNode>

            <TextNode>“Nothing you would like better?”</TextNode>

            <TextNode>
              “I'd like two shillin' better,” the prodigy answered, after some
              thought.
            </TextNode>

            <TextNode>
              “Here you are, then! Catch!—A fine child, Mrs. Smith!”
            </TextNode>

            <TextNode>
              “Lor' bless you, sir, he is that, and forward. He gets a'most too
              much for me to manage, 'specially when my man is away days at a
              time.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Away, is he?” said Holmes, in a disappointed voice. “I am sorry
              for that, for I wanted to speak to Mr. Smith.”
            </TextNode>

            <TextNode>
              “He's been away since yesterday mornin', sir, and, truth to tell,
              I am beginnin' to feel frightened about him. But if it was about a
              boat, sir, maybe I could serve as well.”
            </TextNode>

            <TextNode>“I wanted to hire his steam launch.”</TextNode>

            <TextNode>
              “Why, bless you, sir, it is in the steam launch that he has gone.
              That's what puzzles me; for I know there ain't more coals in her
              than would take her to about Woolwich and back. If he'd been away
              in the barge I'd ha' thought nothin'; for many a time a job has
              taken him as far as Gravesend, and then if there was much doin'
              there he might ha' stayed over. But what good is a steam launch
              without coals?”
            </TextNode>

            <TextNode>
              “He might have bought some at a wharf down the river.”
            </TextNode>

            <TextNode>
              “He might, sir, but it weren't his way. Many a time I've heard him
              call out at the prices they charge for a few odd bags. Besides, I
              don't like that wooden-legged man, wi' his ugly face and
              outlandish talk. What did he want always knockin' about here for?”
            </TextNode>

            <TextNode>
              “A wooden-legged man?” said Holmes, with bland surprise.
            </TextNode>

            <TextNode>
              “Yes, sir, a brown, monkey-faced chap that's called more'n once
              for my old man. It was him that roused him up yesternight, and,
              what's more, my man knew he was comin', for he had steam up in the
              launch. I tell you straight, sir, I don't feel easy in my mind
              about it.”
            </TextNode>

            <TextNode>
              “But, my dear Mrs. Smith,” said Holmes, shrugging his shoulders,
              “You are frightening yourself about nothing. How could you
              possibly tell that it was the wooden-legged man who came in the
              night? I don't quite understand how you can be so sure.”
            </TextNode>

            <TextNode>
              “His voice, sir. I knew his voice, which is kind o' thick and
              foggy. He tapped at the winder,—about three it would be. ‘Show a
              leg, matey,’ says he: ‘time to turn out guard.’ My old man woke up
              Jim,—that's my eldest,—and away they went, without so much as a
              word to me. I could hear the wooden leg clackin' on the stones.”
            </TextNode>

            <TextNode>“And was this wooden-legged man alone?”</TextNode>

            <TextNode>
              “Couldn't say, I am sure, sir. I didn't hear no one else.”
            </TextNode>

            <TextNode>
              “I am sorry, Mrs. Smith, for I wanted a steam launch, and I have
              heard good reports of the—Let me see, what is her name?”
            </TextNode>

            <TextNode>
              “The&nbsp;<span className='italic'>Aurora</span>, sir.”
            </TextNode>

            <TextNode>
              “Ah! She's not that old green launch with a yellow line, very
              broad in the beam?”
            </TextNode>

            <TextNode>
              “No, indeed. She's as trim a little thing as any on the river.
              She's been fresh painted, black with two red streaks.”
            </TextNode>

            <TextNode>
              “Thanks. I hope that you will hear soon from Mr. Smith. I am going
              down the river; and if I should see anything of the&nbsp;
              <span className='italic'>Aurora</span> I shall let him know that
              you are uneasy. A black funnel, you say?”
            </TextNode>

            <TextNode>“No, sir. Black with a white band.”</TextNode>

            <TextNode>
              “Ah, of course. It was the sides which were black. Good-morning,
              Mrs. Smith.—There is a boatman here with a wherry, Watson. We
              shall take it and cross the river.
            </TextNode>

            <TextNode>
              “The main thing with people of that sort,” said Holmes, as we sat
              in the sheets of the wherry, “is never to let them think that
              their information can be of the slightest importance to you. If
              you do, they will instantly shut up like an oyster. If you listen
              to them under protest, as it were, you are very likely to get what
              you want.”
            </TextNode>

            <TextNode>“Our course now seems pretty clear,” said I.</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page50;
