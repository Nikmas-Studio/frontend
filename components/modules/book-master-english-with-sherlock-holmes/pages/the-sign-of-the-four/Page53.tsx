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

function Page53({
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
              I had heard nothing of him by breakfast-time. On opening the&nbsp;
              <span className='italic'>Standard</span>, however, I found that
              there was a fresh allusion to the business.
            </TextNode>

            <TextNode>
              “With reference to the Upper Norwood tragedy,” it remarked, “we
              have reason to believe that the matter promises to be even more
              complex and mysterious than was originally supposed. Fresh
              evidence has shown that it is quite impossible that Mr. Thaddeus
              Sholto could have been in any way concerned in the matter. He and
              the housekeeper, Mrs. Bernstone, were both released yesterday
              evening. It is believed, however, that the police have a clue as
              to the real culprits, and that it is being prosecuted by Mr.
              Athelney Jones, of Scotland Yard, with all his well-known energy
              and sagacity. Further arrests may be expected at any moment.”
            </TextNode>

            <TextNode>
              “That is satisfactory so far as it goes,” thought I. “Friend
              Sholto is safe, at any rate. I wonder what the fresh clue may be;
              though it seems to be a stereotyped form whenever the police have
              made a blunder.”
            </TextNode>

            <TextNode>
              I tossed the paper down upon the table, but at that moment my eye
              caught an advertisement in the agony column. It ran in this way:
            </TextNode>

            <TextNode>
              “Lost.—Whereas Mordecai Smith, boatman, and his son, Jim, left
              Smith's Wharf at or about three o'clock last Tuesday morning in
              the steam launch <span className='italic'>Aurora</span>, black
              with two red stripes, funnel black with a white band, the sum of
              five pounds will be paid to any one who can give information to
              Mrs. Smith, at Smith's Wharf, or at 221b Baker Street, as to the
              whereabouts of the said Mordecai Smith and the launch{' '}
              <span className='italic'>Aurora</span>.”
            </TextNode>

            <TextNode>
              This was clearly Holmes's doing. The Baker Street address was
              enough to prove that. It struck me as rather ingenious, because it
              might be read by the fugitives without their seeing in it more
              than the natural anxiety of a wife for her missing husband.
            </TextNode>

            <TextNode>
              It was a long day. Every time that a knock came to the door, or a
              sharp step passed in the street, I imagined that it was either
              Holmes returning or an answer to his advertisement. I tried to
              read, but my thoughts would wander off to our strange quest and to
              the ill-assorted and villainous pair whom we were pursuing. Could
              there be, I wondered, some radical flaw in my companion's
              reasoning. Might he be suffering from some huge self-deception?
              Was it not possible that his nimble and speculative mind had built
              up this wild theory upon faulty premises? I had never known him to
              be wrong; and yet the keenest reasoner may occasionally be
              deceived. He was likely, I thought, to fall into error through the
              over-refinement of his logic,—his preference for a subtle and
              bizarre explanation when a plainer and more commonplace one lay
              ready to his hand. Yet, on the other hand, I had myself seen the
              evidence, and I had heard the reasons for his deductions. When I
              looked back on the long chain of curious circumstances, many of
              them trivial in themselves, but all tending in the same direction,
              I could not disguise from myself that even if Holmes's explanation
              were incorrect the true theory must be equally outré and
              startling.
            </TextNode>

            <TextNode>
              At three o'clock in the afternoon there was a loud peal at the
              bell, an authoritative voice in the hall, and, to my surprise, no
              less a person than Mr. Athelney Jones was shown up to me. Very
              different was he, however, from the brusque and masterful
              professor of common sense who had taken over the case so
              confidently at Upper Norwood. His expression was downcast, and his
              bearing meek and even apologetic.
            </TextNode>

            <TextNode>
              “Good-day, sir; good-day,” said he. “Mr. Sherlock Holmes is out, I
              understand.”
            </TextNode>

            <TextNode>
              “Yes, and I cannot be sure when he will be back. But perhaps you
              would care to wait. Take that chair and try one of these cigars.”
            </TextNode>

            <TextNode>
              “Thank you; I don't mind if I do,” said he, mopping his face with
              a red bandanna handkerchief.
            </TextNode>

            <TextNode>“And a whiskey-and-soda?”</TextNode>

            <TextNode>
              “Well, half a glass. It is very hot for the time of year; and I
              have had a good deal to worry and try me. You know my theory about
              this Norwood case?”
            </TextNode>

            <TextNode>“I remember that you expressed one.”</TextNode>

            <TextNode>
              “Well, I have been obliged to reconsider it. I had my net drawn
              tightly round Mr. Sholto, sir, when pop he went through a hole in
              the middle of it. He was able to prove an alibi which could not be
              shaken. From the time that he left his brother's room he was never
              out of sight of some one or other. So it could not be he who
              climbed over roofs and through trap-doors. It's a very dark case,
              and my professional credit is at stake. I should be very glad of a
              little assistance.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“We all need help sometimes,” said I.</TextNode>

            <TextNode>
              “Your friend Mr. Sherlock Holmes is a wonderful man, sir,” said
              he, in a husky and confidential voice. “He's a man who is not to
              be beat. I have known that young man go into a good many cases,
              but I never saw the case yet that he could not throw a light upon.
              He is irregular in his methods, and a little quick perhaps in
              jumping at theories, but, on the whole, I think he would have made
              a most promising officer, and I don't care who knows it. I have
              had a wire from him this morning, by which I understand that he
              has got some clue to this Sholto business. Here is the message.”
            </TextNode>

            <TextNode>
              He took the telegram out of his pocket, and handed it to me. It
              was dated from Poplar at twelve o'clock. “Go to Baker Street at
              once,” it said. “If I have not returned, wait for me. I am close
              on the track of the Sholto gang. You can come with us to-night if
              you want to be in at the finish.”
            </TextNode>

            <TextNode>
              “This sounds well. He has evidently picked up the scent again,”
              said I.
            </TextNode>

            <TextNode>
              “Ah, then he has been at fault too,” exclaimed Jones, with evident
              satisfaction. “Even the best of us are thrown off sometimes. Of
              course this may prove to be a false alarm; but it is my duty as an
              officer of the law to allow no chance to slip. But there is some
              one at the door. Perhaps this is he.”
            </TextNode>

            <TextNode>
              A heavy step was heard ascending the stair, with a great wheezing
              and rattling as from a man who was sorely put to it for breath.
              Once or twice he stopped, as though the climb were too much for
              him, but at last he made his way to our door and entered. His
              appearance corresponded to the sounds which we had heard. He was
              an aged man, clad in seafaring garb, with an old pea-jacket
              buttoned up to his throat. His back was bowed, his knees were
              shaky, and his breathing was painfully asthmatic. As he leaned
              upon a thick oaken cudgel his shoulders heaved in the effort to
              draw the air into his lungs. He had a colored scarf round his
              chin, and I could see little of his face save a pair of keen dark
              eyes, overhung by bushy white brows, and long gray side-whiskers.
              Altogether he gave me the impression of a respectable master
              mariner who had fallen into years and poverty.
            </TextNode>

            <TextNode>“What is it, my man?” I asked.</TextNode>

            <TextNode>
              He looked about him in the slow methodical fashion of old age.
            </TextNode>

            <TextNode>“Is Mr. Sherlock Holmes here?” said he.</TextNode>

            <TextNode>
              “No; but I am acting for him. You can tell me any message you have
              for him.”
            </TextNode>

            <TextNode>
              “It was to him himself I was to tell it,” said he.
            </TextNode>

            <TextNode>
              “But I tell you that I am acting for him. Was it about Mordecai
              Smith's boat?”
            </TextNode>

            <TextNode>
              “Yes. I knows well where it is. An' I knows where the men he is
              after are. An' I knows where the treasure is. I knows all about
              it.”
            </TextNode>

            <TextNode>“Then tell me, and I shall let him know.”</TextNode>

            <TextNode>
              “It was to him I was to tell it,” he repeated, with the petulant
              obstinacy of a very old man.
            </TextNode>

            <TextNode>“Well, you must wait for him.”</TextNode>

            <TextNode>
              “No, no; I ain't goin' to lose a whole day to please no one. If
              Mr. Holmes ain't here, then Mr. Holmes must find it all out for
              himself. I don't care about the look of either of you, and I won't
              tell a word.”
            </TextNode>

            <TextNode>
              He shuffled towards the door, but Athelney Jones got in front of
              him.
            </TextNode>

            <TextNode>
              “Wait a bit, my friend,” said he. “You have important information,
              and you must not walk off. We shall keep you, whether you like or
              not, until our friend returns.”
            </TextNode>

            <TextNode>
              The old man made a little run towards the door, but, as Athelney
              Jones put his broad back up against it, he recognized the
              uselessness of resistance.
            </TextNode>

            <TextNode>
              “Pretty sort o' treatment this!” he cried, stamping his stick. “I
              come here to see a gentleman, and you two, who I never saw in my
              life, seize me and treat me in this fashion!”
            </TextNode>

            <TextNode>
              “You will be none the worse,” I said. “We shall recompense you for
              the loss of your time. Sit over here on the sofa, and you will not
              have long to wait.”
            </TextNode>

            <TextNode>
              He came across sullenly enough, and seated himself with his face
              resting on his hands. Jones and I resumed our cigars and our talk.
              Suddenly, however, Holmes's voice broke in upon us.
            </TextNode>

            <TextNode>
              “I think that you might offer me a cigar too,” he said.
            </TextNode>

            <TextNode>
              We both started in our chairs. There was Holmes sitting close to
              us with an air of quiet amusement.
            </TextNode>

            <TextNode>
              “Holmes!” I exclaimed. “You here! But where is the old man?”
            </TextNode>

            <TextNode>
              “Here is the old man,” said he, holding out a heap of white hair.
              “Here he is,—wig, whiskers, eyebrows, and all. I thought my
              disguise was pretty good, but I hardly expected that it would
              stand that test.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page53;
