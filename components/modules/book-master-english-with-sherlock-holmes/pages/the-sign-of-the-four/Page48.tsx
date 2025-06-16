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

function Page48({
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
              “They are hellish things,” said he. “Look out that you don't prick
              yourself. I'm delighted to have them, for the chances are that
              they are all he has. There is the less fear of you or me finding
              one in our skin before long. I would sooner face a Martini bullet,
              myself. Are you game for a six-mile trudge, Watson?”
            </TextNode>

            <TextNode>“Certainly,” I answered.</TextNode>

            <TextNode>“Your leg will stand it?”</TextNode>

            <TextNode>“Oh, yes.”</TextNode>

            <TextNode>
              “Here you are, doggy! Good old Toby! Smell it, Toby, smell it!” He
              pushed the creasote handkerchief under the dog's nose, while the
              creature stood with its fluffy legs separated, and with a most
              comical cock to its head, like a connoisseur sniffing the bouquet
              of a famous vintage. Holmes then threw the handkerchief to a
              distance, fastened a stout cord to the mongrel's collar, and let
              him to the foot of the water-barrel. The creature instantly broke
              into a succession of high, tremulous yelps, and, with his nose on
              the ground, and his tail in the air, pattered off upon the trail
              at a pace which strained his leash and kept us at the top of our
              speed.
            </TextNode>

            <TextNode>
              The east had been gradually whitening, and we could now see some
              distance in the cold gray light. The square, massive house, with
              its black, empty windows and high, bare walls, towered up, sad and
              forlorn, behind us. Our course let right across the grounds, in
              and out among the trenches and pits with which they were scarred
              and intersected. The whole place, with its scattered dirt-heaps
              and ill-grown shrubs, had a blighted, ill-omened look which
              harmonized with the black tragedy which hung over it.
            </TextNode>

            <TextNode>
              On reaching the boundary wall Toby ran along, whining eagerly,
              underneath its shadow, and stopped finally in a corner screened by
              a young beech. Where the two walls joined, several bricks had been
              loosened, and the crevices left were worn down and rounded upon
              the lower side, as though they had frequently been used as a
              ladder. Holmes clambered up, and, taking the dog from me, he
              dropped it over upon the other side.
            </TextNode>

            <TextNode>
              “There's the print of wooden-leg's hand,” he remarked, as I
              mounted up beside him. “You see the slight smudge of blood upon
              the white plaster. What a lucky thing it is that we have had no
              very heavy rain since yesterday! The scent will lie upon the road
              in spite of their eight-and-twenty hours' start.”
            </TextNode>

            <TextNode>
              I confess that I had my doubts myself when I reflected upon the
              great traffic which had passed along the London road in the
              interval. My fears were soon appeased, however. Toby never
              hesitated or swerved, but waddled on in his peculiar rolling
              fashion. Clearly, the pungent smell of the creasote rose high
              above all other contending scents.
            </TextNode>

            <TextNode>
              “Do not imagine,” said Holmes, “that I depend for my success in
              this case upon the mere chance of one of these fellows having put
              his foot in the chemical. I have knowledge now which would enable
              me to trace them in many different ways. This, however, is the
              readiest and, since fortune has put it into our hands, I should be
              culpable if I neglected it. It has, however, prevented the case
              from becoming the pretty little intellectual problem which it at
              one time promised to be. There might have been some credit to be
              gained out of it, but for this too palpable clue.”
            </TextNode>

            <TextNode>
              “There is credit, and to spare,” said I. “I assure you, Holmes,
              that I marvel at the means by which you obtain your results in
              this case, even more than I did in the Jefferson Hope Murder. The
              thing seems to me to be deeper and more inexplicable. How, for
              example, could you describe with such confidence the wooden-legged
              man?”
            </TextNode>

            <TextNode>
              “Pshaw, my dear boy! it was simplicity itself. I don't wish to be
              theatrical. It is all patent and above-board. Two officers who are
              in command of a convict-guard learn an important secret as to
              buried treasure. A map is drawn for them by an Englishman named
              Jonathan Small. You remember that we saw the name upon the chart
              in Captain Morstan's possession. He had signed it in behalf of
              himself and his associates,—the sign of the four, as he somewhat
              dramatically called it. Aided by this chart, the officers—or one
              of them—gets the treasure and brings it to England, leaving, we
              will suppose, some condition under which he received it
              unfulfilled. Now, then, why did not Jonathan Small get the
              treasure himself? The answer is obvious. The chart is dated at a
              time when Morstan was brought into close association with
              convicts. Jonathan Small did not get the treasure because he and
              his associates were themselves convicts and could not get away.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “But that is mere speculation,” said I.
            </TextNode>

            <TextNode>
              “It is more than that. It is the only hypothesis which covers the
              facts. Let us see how it fits in with the sequel. Major Sholto
              remains at peace for some years, happy in the possession of his
              treasure. Then he receives a letter from India which gives him a
              great fright. What was that?”
            </TextNode>

            <TextNode>
              “A letter to say that the men whom he had wronged had been set
              free.”
            </TextNode>

            <TextNode>
              “Or had escaped. That is much more likely, for he would have known
              what their term of imprisonment was. It would not have been a
              surprise to him. What does he do then? He guards himself against a
              wooden-legged man,—a white man, mark you, for he mistakes a white
              tradesman for him, and actually fires a pistol at him. Now, only
              one white man's name is on the chart. The others are Hindoos or
              Mohammedans. There is no other white man. Therefore we may say
              with confidence that the wooden-legged man is identical with
              Jonathan Small. Does the reasoning strike yo as being faulty?”
            </TextNode>

            <TextNode>“No: it is clear and concise.”</TextNode>

            <TextNode>
              “Well, now, let us put ourselves in the place of Jonathan Small.
              Let us look at it from his point of view. He comes to England with
              the double idea of regaining what he would consider to be his
              rights and of having his revenge upon the man who had wronged him.
              He found out where Sholto lived, and very possibly he established
              communications with some one inside the house. There is this
              butler, Lal Rao, whom we have not seen. Mrs. Bernstone gives him
              far from a good character. Small could not find out, however,
              where the treasure was hid, for no one ever knew, save the major
              and one faithful servant who had died. Suddenly Small learns that
              the major is on his death-bed. In a frenzy lest the secret of the
              treasure die with him, he runs the gauntlet of the guards, makes
              his way to the dying man's window, and is only deterred from
              entering by the presence of his two sons. Mad with hate, however,
              against the dead man, he enters the room that night, searches his
              private papers in the hope of discovering some memorandum relating
              to the treasure, and finally leaves a memento of his visit in the
              short inscription upon the card. He had doubtless planned
              beforehand that should he slay the major he would leave some such
              record upon the body as a sign that it was not a common murder,
              but, from the point of view of the four associates, something in
              the nature of an act of justice. Whimsical and bizarre conceits of
              this kind are common enough in the annals of crime, and usually
              afford valuable indications as to the criminal. Do you follow all
              this?”
            </TextNode>

            <TextNode>“Very clearly.”</TextNode>

            <TextNode>
              “Now, what could Jonathan Small do? He could only continue to keep
              a secret watch upon the efforts made to find the treasure.
              Possibly he leaves England and only comes back at intervals. Then
              comes the discovery of the garret, and he is instantly informed of
              it. We again trace the presence of some confederate in the
              household. Jonathan, with his wooden leg, is utterly unable to
              reach the lofty room of Bartholomew Sholto. He takes with him,
              however, a rather curious associate, who gets over this
              difficulty, but dips his naked foot into creasote, whence come
              Toby, and a six-mile limp for a half-pay officer with a damaged
              tendo Achillis.”
            </TextNode>

            <TextNode>
              “But it was the associate, and not Jonathan, who committed the
              crime.”
            </TextNode>

            <TextNode>
              “Quite so. And rather to Jonathan's disgust, to judge by the way
              the stamped about when he got into the room. He bore no grudge
              against Bartholomew Sholto, and would have preferred if he could
              have been simply bound and gagged. He did not wish to put his head
              in a halter. There was no help for it, however: the savage
              instincts of his companion had broken out, and the poison had done
              its work: so Jonathan Small left his record, lowered the
              treasure-box to the ground, and followed it himself. That was the
              train of events as far as I can decipher them. Of course as to his
              personal appearance he must be middle-aged, and must be sunburned
              after serving his time in such an oven as the Andamans. His height
              is readily calculated from the length of his stride, and we know
              that he was bearded. His hairiness was the one point which
              impressed itself upon Thaddeus Sholto when he saw him at the
              window. I don't know that there is anything else.”
            </TextNode>

            <TextNode>“The associate?”</TextNode>

            <TextNode>
              “Ah, well, there is no great mystery in that. But you will know
              all about it soon enough. How sweet the morning air is! See how
              that one little cloud floats like a pink feather from some
              gigantic flamingo. Now the red rim of the sun pushes itself over
              the London cloud-bank. It shines on a good many folk, but on none,
              I dare bet, who are on a stranger errand than you and I. How small
              we feel with our petty ambitions and strivings in the presence of
              the great elemental forces of nature! Are you well up in your Jean
              Paul?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page48;
