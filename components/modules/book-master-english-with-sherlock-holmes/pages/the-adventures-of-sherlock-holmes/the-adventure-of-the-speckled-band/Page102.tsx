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

function Page102({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SPECKLED&nbsp;BAND'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I knew that we should find a ventilator before ever we came to
              Stoke Moran.”
            </TextNode>

            <TextNode>“My dear Holmes!”</TextNode>

            <TextNode>
              “Oh, yes, I did. You remember in her statement she said that her
              sister could smell Dr. Roylott's cigar. Now, of course that
              suggested at once that there must be a communication between the
              two rooms. It could only be a small one, or it would have been
              remarked upon at the coroner's inquiry. I deduced a ventilator.”
            </TextNode>

            <TextNode>“But what harm can there be in that?”</TextNode>

            <TextNode>
              “Well, there is at least a curious coincidence of dates. A
              ventilator is made, a cord is hung, and a lady who sleeps in the
              bed dies. Does not that strike you?”
            </TextNode>

            <TextNode>“I cannot as yet see any connection.”</TextNode>

            <TextNode>
              “Did you observe anything very peculiar about that bed?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “It was clamped to the floor. Did you ever see a bed fastened like
              that before?”
            </TextNode>

            <TextNode>“I cannot say that I have.”</TextNode>

            <TextNode>
              “The lady could not move her bed. It must always be in the same
              relative position to the ventilator and to the rope—or so we may
              call it, since it was clearly never meant for a bell-pull.”
            </TextNode>

            <TextNode>
              “Holmes,” I cried, “I seem to see dimly what you are hinting at.
              We are only just in time to prevent some subtle and horrible
              crime.”
            </TextNode>

            <TextNode>
              “Subtle enough and horrible enough. When a doctor does go wrong he
              is the first of criminals. He has nerve and he has knowledge.
              Palmer and Pritchard were among the heads of their profession.
              This man strikes even deeper, but I think, Watson, that we shall
              be able to strike deeper still. But we shall have horrors enough
              before the night is over; for goodness' sake let us have a quiet
              pipe and turn our minds for a few hours to something more
              cheerful.”
            </TextNode>

            <TextNode>
              About nine o'clock the light among the trees was extinguished, and
              all was dark in the direction of the Manor House. Two hours passed
              slowly away, and then, suddenly, just at the stroke of eleven, a
              single bright light shone out right in front of us.
            </TextNode>

            <TextNode>
              “That is our signal,” said Holmes, springing to his feet; “it
              comes from the middle window.”
            </TextNode>

            <TextNode>
              As we passed out he exchanged a few words with the landlord,
              explaining that we were going on a late visit to an acquaintance,
              and that it was possible that we might spend the night there. A
              moment later we were out on the dark road, a chill wind blowing in
              our faces, and one yellow light twinkling in front of us through
              the gloom to guide us on our sombre errand.
            </TextNode>

            <TextNode>
              There was little difficulty in entering the grounds, for
              unrepaired breaches gaped in the old park wall. Making our way
              among the trees, we reached the lawn, crossed it, and were about
              to enter through the window when out from a clump of laurel bushes
              there darted what seemed to be a hideous and distorted child, who
              threw itself upon the grass with writhing limbs and then ran
              swiftly across the lawn into the darkness.
            </TextNode>

            <TextNode>“My God!” I whispered; “did you see it?”</TextNode>

            <TextNode>
              Holmes was for the moment as startled as I. His hand closed like a
              vice upon my wrist in his agitation. Then he broke into a low
              laugh and put his lips to my ear.
            </TextNode>

            <TextNode>
              “It is a nice household,” he murmured. “That is the baboon.”
            </TextNode>

            <TextNode>
              I had forgotten the strange pets which the doctor affected. There
              was a cheetah, too; perhaps we might find it upon our shoulders at
              any moment. I confess that I felt easier in my mind when, after
              following Holmes' example and slipping off my shoes, I found
              myself inside the bedroom. My companion noiselessly closed the
              shutters, moved the lamp onto the table, and cast his eyes round
              the room. All was as we had seen it in the daytime. Then creeping
              up to me and making a trumpet of his hand, he whispered into my
              ear again so gently that it was all that I could do to distinguish
              the words:
            </TextNode>

            <TextNode>“The least sound would be fatal to our plans.”</TextNode>

            <TextNode>I nodded to show that I had heard.</TextNode>

            <TextNode>
              “We must sit without light. He would see it through the
              ventilator.”
            </TextNode>

            <TextNode>I nodded again.</TextNode>

            <TextNode>
              “Do not go asleep; your very life may depend upon it. Have your
              pistol ready in case we should need it. I will sit on the side of
              the bed, and you in that chair.”
            </TextNode>

            <TextNode>
              I took out my revolver and laid it on the corner of the table.
            </TextNode>

            <TextNode>
              Holmes had brought up a long thin cane, and this he placed upon
              the bed beside him. By it he laid the box of matches and the stump
              of a candle. Then he turned down the lamp, and we were left in
              darkness.
            </TextNode>

            <TextNode>
              How shall I ever forget that dreadful vigil? I could not hear a
              sound, not even the drawing of a breath, and yet I knew that my
              companion sat open-eyed, within a few feet of me, in the same
              state of nervous tension in which I was myself. The shutters cut
              off the least ray of light, and we waited in absolute darkness.
            </TextNode>

            <TextNode>
              From outside came the occasional cry of a night-bird, and once at
              our very window a long drawn catlike whine, which told us that the
              cheetah was indeed at liberty. Far away we could hear the deep
              tones of the parish clock, which boomed out every quarter of an
              hour. How long they seemed, those quarters! Twelve struck, and one
              and two and three, and still we sat waiting silently for whatever
              might befall.
            </TextNode>

            <TextNode>
              Suddenly there was the momentary gleam of a light up in the
              direction of the ventilator, which vanished immediately, but was
              succeeded by a strong smell of burning oil and heated metal.
              Someone in the next room had lit a dark-lantern. I heard a gentle
              sound of movement, and then all was silent once more, though the
              smell grew stronger. For half an hour I sat with straining ears.
              Then suddenly another sound became audible—a very gentle, soothing
              sound, like that of a small jet of steam escaping continually from
              a kettle. The instant that we heard it, Holmes sprang from the
              bed, struck a match, and lashed furiously with his cane at the
              bell-pull.
            </TextNode>

            <TextNode>“You see it, Watson?” he yelled. “You see it?”</TextNode>

            <TextNode>
              But I saw nothing. At the moment when Holmes struck the light I
              heard a low, clear whistle, but the sudden glare flashing into my
              weary eyes made it impossible for me to tell what it was at which
              my friend lashed so savagely. I could, however, see that his face
              was deadly pale and filled with horror and loathing. He had ceased
              to strike and was gazing up at the ventilator when suddenly there
              broke from the silence of the night the most horrible cry to which
              I have ever listened. It swelled up louder and louder, a hoarse
              yell of pain and fear and anger all mingled in the one dreadful
              shriek. They say that away down in the village, and even in the
              distant parsonage, that cry raised the sleepers from their beds.
              It struck cold to our hearts, and I stood gazing at Holmes, and he
              at me, until the last echoes of it had died away into the silence
              from which it rose.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“What can it mean?” I gasped.</TextNode>

            <TextNode>
              “It means that it is all over,” Holmes answered. “And perhaps,
              after all, it is for the best. Take your pistol, and we will enter
              Dr. Roylott's room.”
            </TextNode>

            <TextNode>
              With a grave face he lit the lamp and led the way down the
              corridor. Twice he struck at the chamber door without any reply
              from within. Then he turned the handle and entered, I at his
              heels, with the cocked pistol in my hand.
            </TextNode>

            <TextNode>
              It was a singular sight which met our eyes. On the table stood a
              dark-lantern with the shutter half open, throwing a brilliant beam
              of light upon the iron safe, the door of which was ajar. Beside
              this table, on the wooden chair, sat Dr. Grimesby Roylott clad in
              a long grey dressing-gown, his bare ankles protruding beneath, and
              his feet thrust into red heelless Turkish slippers. Across his lap
              lay the short stock with the long lash which we had noticed during
              the day. His chin was cocked upward and his eyes were fixed in a
              dreadful, rigid stare at the corner of the ceiling. Round his brow
              he had a peculiar yellow band, with brownish speckles, which
              seemed to be bound tightly round his head. As we entered he made
              neither sound nor motion.
            </TextNode>

            <TextNode>
              “The band! the speckled band!” whispered Holmes.
            </TextNode>

            <TextNode>
              I took a step forward. In an instant his strange headgear began to
              move, and there reared itself from among his hair the squat
              diamond-shaped head and puffed neck of a loathsome serpent.
            </TextNode>

            <TextNode>
              “It is a swamp adder!” cried Holmes; “the deadliest snake in
              India. He has died within ten seconds of being bitten. Violence
              does, in truth, recoil upon the violent, and the schemer falls
              into the pit which he digs for another. Let us thrust this
              creature back into its den, and we can then remove Miss Stoner to
              some place of shelter and let the county police know what has
              happened.”
            </TextNode>

            <TextNode>
              As he spoke he drew the dog-whip swiftly from the dead man's lap,
              and throwing the noose round the reptile's neck he drew it from
              its horrid perch and, carrying it at arm's length, threw it into
              the iron safe, which he closed upon it.
            </TextNode>

            <TextNode>
              Such are the true facts of the death of Dr. Grimesby Roylott, of
              Stoke Moran. It is not necessary that I should prolong a narrative
              which has already run to too great a length by telling how we
              broke the sad news to the terrified girl, how we conveyed her by
              the morning train to the care of her good aunt at Harrow, of how
              the slow process of official inquiry came to the conclusion that
              the doctor met his fate while indiscreetly playing with a
              dangerous pet. The little which I had yet to learn of the case was
              told me by Sherlock Holmes as we travelled back next day.
            </TextNode>

            <TextNode>
              “I had,” said he, “come to an entirely erroneous conclusion which
              shows, my dear Watson, how dangerous it always is to reason from
              insufficient data. The presence of the gipsies, and the use of the
              word ‘band,’ which was used by the poor girl, no doubt, to explain
              the appearance which she had caught a hurried glimpse of by the
              light of her match, were sufficient to put me upon an entirely
              wrong scent. I can only claim the merit that I instantly
              reconsidered my position when, however, it became clear to me that
              whatever danger threatened an occupant of the room could not come
              either from the window or the door. My attention was speedily
              drawn, as I have already remarked to you, to this ventilator, and
              to the bell-rope which hung down to the bed. The discovery that
              this was a dummy, and that the bed was clamped to the floor,
              instantly gave rise to the suspicion that the rope was there as a
              bridge for something passing through the hole and coming to the
              bed. The idea of a snake instantly occurred to me, and when I
              coupled it with my knowledge that the doctor was furnished with a
              supply of creatures from India, I felt that I was probably on the
              right track. The idea of using a form of poison which could not
              possibly be discovered by any chemical test was just such a one as
              would occur to a clever and ruthless man who had had an Eastern
              training. The rapidity with which such a poison would take effect
              would also, from his point of view, be an advantage. It would be a
              sharp-eyed coroner, indeed, who could distinguish the two little
              dark punctures which would show where the poison fangs had done
              their work. Then I thought of the whistle. Of course he must
              recall the snake before the morning light revealed it to the
              victim. He had trained it, probably by the use of the milk which
              we saw, to return to him when summoned. He would put it through
              this ventilator at the hour that he thought best, with the
              certainty that it would crawl down the rope and land on the bed.
              It might or might not bite the occupant, perhaps she might escape
              every night for a week, but sooner or later she must fall a
              victim.
            </TextNode>

            <TextNode>
              “I had come to these conclusions before ever I had entered his
              room. An inspection of his chair showed me that he had been in the
              habit of standing on it, which of course would be necessary in
              order that he should reach the ventilator. The sight of the safe,
              the saucer of milk, and the loop of whipcord were enough to
              finally dispel any doubts which may have remained. The metallic
              clang heard by Miss Stoner was obviously caused by her stepfather
              hastily closing the door of his safe upon its terrible occupant.
              Having once made up my mind, you know the steps which I took in
              order to put the matter to the proof. I heard the creature hiss as
              I have no doubt that you did also, and I instantly lit the light
              and attacked it.”
            </TextNode>

            <TextNode>
              “With the result of driving it through the ventilator.”
            </TextNode>

            <TextNode>
              “And also with the result of causing it to turn upon its master at
              the other side. Some of the blows of my cane came home and roused
              its snakish temper, so that it flew upon the first person it saw.
              In this way I am no doubt indirectly responsible for Dr. Grimesby
              Roylott's death, and I cannot say that it is likely to weigh very
              heavily upon my conscience.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page102;
