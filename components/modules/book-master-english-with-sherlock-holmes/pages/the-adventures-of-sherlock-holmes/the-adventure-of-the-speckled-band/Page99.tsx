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

function Page99({
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
              On glancing over my notes of the seventy odd cases in which I have
              during the last eight years studied the methods of my friend
              Sherlock Holmes, I find many tragic, some comic, a large number
              merely strange, but none commonplace; for, working as he did
              rather for the love of his art than for the acquirement of wealth,
              he refused to associate himself with any investigation which did
              not tend towards the unusual, and even the fantastic. Of all these
              varied cases, however, I cannot recall any which presented more
              singular features than that which was associated with the
              well-known Surrey family of the Roylotts of Stoke Moran. The
              events in question occurred in the early days of my association
              with Holmes, when we were sharing rooms as bachelors in Baker
              Street. It is possible that I might have placed them upon record
              before, but a promise of secrecy was made at the time, from which
              I have only been freed during the last month by the untimely death
              of the lady to whom the pledge was given. It is perhaps as well
              that the facts should now come to light, for I have reasons to
              know that there are widespread rumours as to the death of Dr.
              Grimesby Roylott which tend to make the matter even more terrible
              than the truth.
            </TextNode>

            <TextNode>
              It was early in April in the year '83 that I woke one morning to
              find Sherlock Holmes standing, fully dressed, by the side of my
              bed. He was a late riser, as a rule, and as the clock on the
              mantelpiece showed me that it was only a quarter-past seven, I
              blinked up at him in some surprise, and perhaps just a little
              resentment, for I was myself regular in my habits.
            </TextNode>

            <TextNode>
              “Very sorry to knock you up, Watson,” said he, “but it's the
              common lot this morning. Mrs. Hudson has been knocked up, she
              retorted upon me, and I on you.”
            </TextNode>

            <TextNode>“What is it, then—a fire?”</TextNode>

            <TextNode>
              “No; a client. It seems that a young lady has arrived in a
              considerable state of excitement, who insists upon seeing me. She
              is waiting now in the sitting-room. Now, when young ladies wander
              about the metropolis at this hour of the morning, and knock sleepy
              people up out of their beds, I presume that it is something very
              pressing which they have to communicate. Should it prove to be an
              interesting case, you would, I am sure, wish to follow it from the
              outset. I thought, at any rate, that I should call you and give
              you the chance.”
            </TextNode>

            <TextNode>
              “My dear fellow, I would not miss it for anything.”
            </TextNode>

            <TextNode>
              I had no keener pleasure than in following Holmes in his
              professional investigations, and in admiring the rapid deductions,
              as swift as intuitions, and yet always founded on a logical basis
              with which he unravelled the problems which were submitted to him.
              I rapidly threw on my clothes and was ready in a few minutes to
              accompany my friend down to the sitting-room. A lady dressed in
              black and heavily veiled, who had been sitting in the window, rose
              as we entered.
            </TextNode>

            <TextNode>
              “Good-morning, madam,” said Holmes cheerily. “My name is Sherlock
              Holmes. This is my intimate friend and associate, Dr. Watson,
              before whom you can speak as freely as before myself. Ha! I am
              glad to see that Mrs. Hudson has had the good sense to light the
              fire. Pray draw up to it, and I shall order you a cup of hot
              coffee, for I observe that you are shivering.”
            </TextNode>

            <TextNode>
              “It is not cold which makes me shiver,” said the woman in a low
              voice, changing her seat as requested.
            </TextNode>

            <TextNode>“What, then?”</TextNode>

            <TextNode>
              “It is fear, Mr. Holmes. It is terror.” She raised her veil as she
              spoke, and we could see that she was indeed in a pitiable state of
              agitation, her face all drawn and grey, with restless frightened
              eyes, like those of some hunted animal. Her features and figure
              were those of a woman of thirty, but her hair was shot with
              premature grey, and her expression was weary and haggard. Sherlock
              Holmes ran her over with one of his quick, all-comprehensive
              glances.
            </TextNode>

            <TextNode>
              “You must not fear,” said he soothingly, bending forward and
              patting her forearm. “We shall soon set matters right, I have no
              doubt. You have come in by train this morning, I see.”
            </TextNode>

            <TextNode>“You know me, then?”</TextNode>

            <TextNode>
              “No, but I observe the second half of a return ticket in the palm
              of your left glove. You must have started early, and yet you had a
              good drive in a dog-cart, along heavy roads, before you reached
              the station.”
            </TextNode>

            <TextNode>
              The lady gave a violent start and stared in bewilderment at my
              companion.
            </TextNode>

            <TextNode>
              “There is no mystery, my dear madam,” said he, smiling. “The left
              arm of your jacket is spattered with mud in no less than seven
              places. The marks are perfectly fresh. There is no vehicle save a
              dog-cart which throws up mud in that way, and then only when you
              sit on the left-hand side of the driver.”
            </TextNode>

            <TextNode>
              “Whatever your reasons may be, you are perfectly correct,” said
              she. “I started from home before six, reached Leatherhead at
              twenty past, and came in by the first train to Waterloo. Sir, I
              can stand this strain no longer; I shall go mad if it continues. I
              have no one to turn to—none, save only one, who cares for me, and
              he, poor fellow, can be of little aid. I have heard of you, Mr.
              Holmes; I have heard of you from Mrs. Farintosh, whom you helped
              in the hour of her sore need. It was from her that I had your
              address. Oh, sir, do you not think that you could help me, too,
              and at least throw a little light through the dense darkness which
              surrounds me? At present it is out of my power to reward you for
              your services, but in a month or six weeks I shall be married,
              with the control of my own income, and then at least you shall not
              find me ungrateful.”
            </TextNode>

            <TextNode>
              Holmes turned to his desk and, unlocking it, drew out a small
              case-book, which he consulted.
            </TextNode>

            <TextNode>
              “Farintosh,” said he. “Ah yes, I recall the case; it was concerned
              with an opal tiara. I think it was before your time, Watson. I can
              only say, madam, that I shall be happy to devote the same care to
              your case as I did to that of your friend. As to reward, my
              profession is its own reward; but you are at liberty to defray
              whatever expenses I may be put to, at the time which suits you
              best. And now I beg that you will lay before us everything that
              may help us in forming an opinion upon the matter.”
            </TextNode>

            <TextNode>
              “Alas!” replied our visitor, “the very horror of my situation lies
              in the fact that my fears are so vague, and my suspicions depend
              so entirely upon small points, which might seem trivial to
              another, that even he to whom of all others I have a right to look
              for help and advice looks upon all that I tell him about it as the
              fancies of a nervous woman. He does not say so, but I can read it
              from his soothing answers and averted eyes. But I have heard, Mr.
              Holmes, that you can see deeply into the manifold wickedness of
              the human heart. You may advise me how to walk amid the dangers
              which encompass me.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“I am all attention, madam.”</TextNode>

            <TextNode>
              “My name is Helen Stoner, and I am living with my stepfather, who
              is the last survivor of one of the oldest Saxon families in
              England, the Roylotts of Stoke Moran, on the western border of
              Surrey.”
            </TextNode>

            <TextNode>
              Holmes nodded his head. “The name is familiar to me,” said he.
            </TextNode>

            <TextNode>
              “The family was at one time among the richest in England, and the
              estates extended over the borders into Berkshire in the north, and
              Hampshire in the west. In the last century, however, four
              successive heirs were of a dissolute and wasteful disposition, and
              the family ruin was eventually completed by a gambler in the days
              of the Regency. Nothing was left save a few acres of ground, and
              the two-hundred-year-old house, which is itself crushed under a
              heavy mortgage. The last squire dragged out his existence there,
              living the horrible life of an aristocratic pauper; but his only
              son, my stepfather, seeing that he must adapt himself to the new
              conditions, obtained an advance from a relative, which enabled him
              to take a medical degree and went out to Calcutta, where, by his
              professional skill and his force of character, he established a
              large practice. In a fit of anger, however, caused by some
              robberies which had been perpetrated in the house, he beat his
              native butler to death and narrowly escaped a capital sentence. As
              it was, he suffered a long term of imprisonment and afterwards
              returned to England a morose and disappointed man.
            </TextNode>

            <TextNode>
              “When Dr. Roylott was in India he married my mother, Mrs. Stoner,
              the young widow of Major-General Stoner, of the Bengal Artillery.
              My sister Julia and I were twins, and we were only two years old
              at the time of my mother's re-marriage. She had a considerable sum
              of money—not less than £1000 a year—and this she bequeathed to Dr.
              Roylott entirely while we resided with him, with a provision that
              a certain annual sum should be allowed to each of us in the event
              of our marriage. Shortly after our return to England my mother
              died—she was killed eight years ago in a railway accident near
              Crewe. Dr. Roylott then abandoned his attempts to establish
              himself in practice in London and took us to live with him in the
              old ancestral house at Stoke Moran. The money which my mother had
              left was enough for all our wants, and there seemed to be no
              obstacle to our happiness.
            </TextNode>

            <TextNode>
              “But a terrible change came over our stepfather about this time.
              Instead of making friends and exchanging visits with our
              neighbours, who had at first been overjoyed to see a Roylott of
              Stoke Moran back in the old family seat, he shut himself up in his
              house and seldom came out save to indulge in ferocious quarrels
              with whoever might cross his path. Violence of temper approaching
              to mania has been hereditary in the men of the family, and in my
              stepfather's case it had, I believe, been intensified by his long
              residence in the tropics. A series of disgraceful brawls took
              place, two of which ended in the police-court, until at last he
              became the terror of the village, and the folks would fly at his
              approach, for he is a man of immense strength, and absolutely
              uncontrollable in his anger.
            </TextNode>

            <TextNode>
              “Last week he hurled the local blacksmith over a parapet into a
              stream, and it was only by paying over all the money which I could
              gather together that I was able to avert another public exposure.
              He had no friends at all save the wandering gypsies, and he would
              give these vagabonds leave to encamp upon the few acres of
              bramble-covered land which represent the family estate, and would
              accept in return the hospitality of their tents, wandering away
              with them sometimes for weeks on end. He has a passion also for
              Indian animals, which are sent over to him by a correspondent, and
              he has at this moment a cheetah and a baboon, which wander freely
              over his grounds and are feared by the villagers almost as much as
              their master.
            </TextNode>

            <TextNode>
              “You can imagine from what I say that my poor sister Julia and I
              had no great pleasure in our lives. No servant would stay with us,
              and for a long time we did all the work of the house. She was but
              thirty at the time of her death, and yet her hair had already
              begun to whiten, even as mine has.”
            </TextNode>

            <TextNode>“Your sister is dead, then?”</TextNode>

            <TextNode>
              “She died just two years ago, and it is of her death that I wish
              to speak to you. You can understand that, living the life which I
              have described, we were little likely to see anyone of our own age
              and position. We had, however, an aunt, my mother's maiden sister,
              Miss Honoria Westphail, who lives near Harrow, and we were
              occasionally allowed to pay short visits at this lady's house.
              Julia went there at Christmas two years ago, and met there a
              half-pay major of marines, to whom she became engaged. My
              stepfather learned of the engagement when my sister returned and
              offered no objection to the marriage; but within a fortnight of
              the day which had been fixed for the wedding, the terrible event
              occurred which has deprived me of my only companion.”
            </TextNode>

            <TextNode>
              Sherlock Holmes had been leaning back in his chair with his eyes
              closed and his head sunk in a cushion, but he half opened his lids
              now and glanced across at his visitor.
            </TextNode>

            <TextNode>“Pray be precise as to details,” said he.</TextNode>

            <TextNode>
              “It is easy for me to be so, for every event of that dreadful time
              is seared into my memory. The manor-house is, as I have already
              said, very old, and only one wing is now inhabited. The bedrooms
              in this wing are on the ground floor, the sitting-rooms being in
              the central block of the buildings. Of these bedrooms the first is
              Dr. Roylott's, the second my sister's, and the third my own. There
              is no communication between them, but they all open out into the
              same corridor. Do I make myself plain?”
            </TextNode>

            <TextNode>“Perfectly so.”</TextNode>

            <TextNode>
              “The windows of the three rooms open out upon the lawn. That fatal
              night Dr. Roylott had gone to his room early, though we knew that
              he had not retired to rest, for my sister was troubled by the
              smell of the strong Indian cigars which it was his custom to
              smoke. She left her room, therefore, and came into mine, where she
              sat for some time, chatting about her approaching wedding. At
              eleven o'clock she rose to leave me, but she paused at the door
              and looked back.
            </TextNode>

            <TextNode>
              “‘Tell me, Helen,’ said she, ‘have you ever heard anyone whistle
              in the dead of the night?’
            </TextNode>

            <TextNode>“‘Never,’ said I.</TextNode>

            <TextNode>
              “‘I suppose that you could not possibly whistle, yourself, in your
              sleep?’
            </TextNode>

            <TextNode>“‘Certainly not. But why?’</TextNode>

            <TextNode>
              “‘Because during the last few nights I have always, about three in
              the morning, heard a low, clear whistle. I am a light sleeper, and
              it has awakened me. I cannot tell where it came from—perhaps from
              the next room, perhaps from the lawn. I thought that I would just
              ask you whether you had heard it.’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page99;
