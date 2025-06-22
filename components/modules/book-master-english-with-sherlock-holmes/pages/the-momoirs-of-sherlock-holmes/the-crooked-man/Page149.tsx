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

function Page149({
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
        title='THE CROOKED MAN'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              One summer night, a few months after my marriage, I was seated by
              my own hearth smoking a last pipe and nodding over a novel, for my
              day's work had been an exhausting one. My wife had already gone
              upstairs, and the sound of the locking of the hall door some time
              before told me that the servants had also retired. I had risen
              from my seat and was knocking out the ashes of my pipe when I
              suddenly heard the clang of the bell.
            </TextNode>

            <TextNode>
              I looked at the clock. It was a quarter to twelve. This could not
              be a visitor at so late an hour. A patient, evidently, and
              possibly an all-night sitting. With a wry face I went out into the
              hall and opened the door. To my astonishment it was Sherlock
              Holmes who stood upon my step.
            </TextNode>

            <TextNode>
              “Ah, Watson,” said he, “I hoped that I might not be too late to
              catch you.”
            </TextNode>

            <TextNode>“My dear fellow, pray come in.”</TextNode>

            <TextNode>
              “You look surprised, and no wonder! Relieved, too, I fancy! Hum!
              You still smoke the Arcadia mixture of your bachelor days then!
              There's no mistaking that fluffy ash upon your coat. It's easy to
              tell that you have been accustomed to wear a uniform, Watson.
              You'll never pass as a pure-bred civilian as long as you keep that
              habit of carrying your handkerchief in your sleeve. Could you put
              me up tonight?”
            </TextNode>

            <TextNode>“With pleasure.”</TextNode>

            <TextNode>
              “You told me that you had bachelor quarters for one, and I see
              that you have no gentleman visitor at present. Your hat-stand
              proclaims as much.”
            </TextNode>

            <TextNode>“I shall be delighted if you will stay.”</TextNode>

            <TextNode>
              “Thank you. I'll fill the vacant peg then. Sorry to see that
              you've had the British workman in the house. He's a token of evil.
              Not the drains, I hope?”
            </TextNode>

            <TextNode>“No, the gas.”</TextNode>

            <TextNode>
              “Ah! He has left two nail-marks from his boot upon your linoleum
              just where the light strikes it. No, thank you, I had some supper
              at Waterloo, but I'll smoke a pipe with you with pleasure.”
            </TextNode>

            <TextNode>
              I handed him my pouch, and he seated himself opposite to me and
              smoked for some time in silence. I was well aware that nothing but
              business of importance would have brought him to me at such an
              hour, so I waited patiently until he should come round to it.
            </TextNode>

            <TextNode>
              “I see that you are professionally rather busy just now,” said he,
              glancing very keenly across at me.
            </TextNode>

            <TextNode>
              “Yes, I've had a busy day,” I answered. “It may seem very foolish
              in your eyes,” I added, “but really I don't know how you deduced
              it.”
            </TextNode>

            <TextNode>Holmes chuckled to himself.</TextNode>

            <TextNode>
              “I have the advantage of knowing your habits, my dear Watson,”
              said he. “When your round is a short one you walk, and when it is
              a long one you use a hansom. As I perceive that your boots,
              although used, are by no means dirty, I cannot doubt that you are
              at present busy enough to justify the hansom.”
            </TextNode>

            <TextNode>“Excellent!” I cried.</TextNode>

            <TextNode>
              “Elementary,” said he. “It is one of those instances where the
              reasoner can produce an effect which seems remarkable to his
              neighbor, because the latter has missed the one little point which
              is the basis of the deduction. The same may be said, my dear
              fellow, for the effect of some of these little sketches of yours,
              which is entirely meretricious, depending as it does upon your
              retaining in your own hands some factors in the problem which are
              never imparted to the reader. Now, at present I am in the position
              of these same readers, for I hold in this hand several threads of
              one of the strangest cases which ever perplexed a man's brain, and
              yet I lack the one or two which are needful to complete my theory.
              But I'll have them, Watson, I'll have them!” His eyes kindled and
              a slight flush sprang into his thin cheeks. For an instant the
              veil had lifted upon his keen, intense nature, but for an instant
              only. When I glanced again his face had resumed that red-Indian
              composure which had made so many regard him as a machine rather
              than a man.
            </TextNode>

            <TextNode>
              “The problem presents features of interest,” said he. “I may even
              say exceptional features of interest. I have already looked into
              the matter, and have come, as I think, within sight of my
              solution. If you could accompany me in that last step you might be
              of considerable service to me.”
            </TextNode>

            <TextNode>“I should be delighted.”</TextNode>

            <TextNode>“Could you go as far as Aldershot to-morrow?”</TextNode>

            <TextNode>
              “I have no doubt Jackson would take my practice.”
            </TextNode>

            <TextNode>
              “Very good. I want to start by the 11.10 from Waterloo.”
            </TextNode>

            <TextNode>“That would give me time.”</TextNode>

            <TextNode>
              “Then, if you are not too sleepy, I will give you a sketch of what
              has happened, and of what remains to be done.”
            </TextNode>

            <TextNode>
              “I was sleepy before you came. I am quite wakeful now.”
            </TextNode>

            <TextNode>
              “I will compress the story as far as may be done without omitting
              anything vital to the case. It is conceivable that you may even
              have read some account of the matter. It is the supposed murder of
              Colonel Barclay, of the Royal Munsters, at Aldershot, which I am
              investigating.”
            </TextNode>

            <TextNode>“I have heard nothing of it.”</TextNode>

            <TextNode>
              “It has not excited much attention yet, except locally. The facts
              are only two days old. Briefly they are these:
            </TextNode>

            <TextNode>
              “The Royal Munsters is, as you know, one of the most famous Irish
              regiments in the British army. It did wonders both in the Crimea
              and the Mutiny, and has since that time distinguished itself upon
              every possible occasion. It was commanded up to Monday night by
              James Barclay, a gallant veteran, who started as a full private,
              was raised to commissioned rank for his bravery at the time of the
              Mutiny, and so lived to command the regiment in which he had once
              carried a musket.
            </TextNode>

            <TextNode>
              “Colonel Barclay had married at the time when he was a sergeant,
              and his wife, whose maiden name was Miss Nancy Devoy, was the
              daughter of a former color-sergeant in the same corps. There was,
              therefore, as can be imagined, some little social friction when
              the young couple (for they were still young) found themselves in
              their new surroundings. They appear, however, to have quickly
              adapted themselves, and Mrs. Barclay has always, I understand,
              been as popular with the ladies of the regiment as her husband was
              with his brother officers. I may add that she was a woman of great
              beauty, and that even now, when she has been married for upwards
              of thirty years, she is still of a striking and queenly
              appearance.
            </TextNode>

            <TextNode>
              “Colonel Barclay's family life appears to have been a uniformly
              happy one. Major Murphy, to whom I owe most of my facts, assures
              me that he has never heard of any misunderstanding between the
              pair. On the whole, he thinks that Barclay's devotion to his wife
              was greater than his wife's to Barclay. He was acutely uneasy if
              he were absent from her for a day. She, on the other hand, though
              devoted and faithful, was less obtrusively affectionate. But they
              were regarded in the regiment as the very model of a middle-aged
              couple. There was absolutely nothing in their mutual relations to
              prepare people for the tragedy which was to follow.
            </TextNode>

            <TextNode>
              “Colonel Barclay himself seems to have had some singular traits in
              his character. He was a dashing, jovial old solder in his usual
              mood, but there were occasions on which he seemed to show himself
              capable of considerable violence and vindictiveness. This side of
              his nature, however, appears never to have been turned towards his
              wife. Another fact, which had struck Major Murphy and three out of
              five of the other officers with whom I conversed, was the singular
              sort of depression which came upon him at times. As the major
              expressed it, the smile had often been struck from his mouth, as
              if by some invisible hand, when he has been joining the gaieties
              and chaff of the mess-table. For days on end, when the mood was on
              him, he has been sunk in the deepest gloom. This and a certain
              tinge of superstition were the only unusual traits in his
              character which his brother officers had observed. The latter
              peculiarity took the form of a dislike to being left alone,
              especially after dark. This puerile feature in a nature which was
              conspicuously manly had often given rise to comment and
              conjecture.
            </TextNode>

            <TextNode>
              “The first battalion of the Royal Munsters (which is the old
              117th) has been stationed at Aldershot for some years. The married
              officers live out of barracks, and the Colonel has during all this
              time occupied a villa called Lachine, about half a mile from the
              north camp. The house stands in its own grounds, but the west side
              of it is not more than thirty yards from the high-road. A coachman
              and two maids form the staff of servants. These with their master
              and mistress were the sole occupants of Lachine, for the Barclays
              had no children, nor was it usual for them to have resident
              visitors.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Now for the events at Lachine between nine and ten on the evening
              of last Monday.
            </TextNode>

            <TextNode>
              “Mrs. Barclay was, it appears, a member of the Roman Catholic
              Church, and had interested herself very much in the establishment
              of the Guild of St. George, which was formed in connection with
              the Watt Street Chapel for the purpose of supplying the poor with
              cast-off clothing. A meeting of the Guild had been held that
              evening at eight, and Mrs. Barclay had hurried over her dinner in
              order to be present at it. When leaving the house she was heard by
              the coachman to make some commonplace remark to her husband, and
              to assure him that she would be back before very long. She then
              called for Miss Morrison, a young lady who lives in the next
              villa, and the two went off together to their meeting. It lasted
              forty minutes, and at a quarter-past nine Mrs. Barclay returned
              home, having left Miss Morrison at her door as she passed.
            </TextNode>

            <TextNode>
              “There is a room which is used as a morning-room at Lachine. This
              faces the road and opens by a large glass folding-door on to the
              lawn. The lawn is thirty yards across, and is only divided from
              the highway by a low wall with an iron rail above it. It was into
              this room that Mrs. Barclay went upon her return. The blinds were
              not down, for the room was seldom used in the evening, but Mrs.
              Barclay herself lit the lamp and then rang the bell, asking Jane
              Stewart, the house-maid, to bring her a cup of tea, which was
              quite contrary to her usual habits. The Colonel had been sitting
              in the dining-room, but hearing that his wife had returned he
              joined her in the morning-room. The coachman saw him cross the
              hall and enter it. He was never seen again alive.
            </TextNode>

            <TextNode>
              “The tea which had been ordered was brought up at the end of ten
              minutes; but the maid, as she approached the door, was surprised
              to hear the voices of her master and mistress in furious
              altercation. She knocked without receiving any answer, and even
              turned the handle, but only to find that the door was locked upon
              the inside. Naturally enough she ran down to tell the cook, and
              the two women with the coachman came up into the hall and listened
              to the dispute which was still raging. They all agreed that only
              two voices were to be heard, those of Barclay and of his wife.
              Barclay's remarks were subdued and abrupt, so that none of them
              were audible to the listeners. The lady's, on the other hand, were
              most bitter, and when she raised her voice could be plainly heard.
              ‘You coward!’ she repeated over and over again. ‘What can be done
              now? What can be done now? Give me back my life. I will never so
              much as breathe the same air with you again! You coward! You
              Coward!’ Those were scraps of her conversation, ending in a sudden
              dreadful cry in the man's voice, with a crash, and a piercing
              scream from the woman. Convinced that some tragedy had occurred,
              the coachman rushed to the door and strove to force it, while
              scream after scream issued from within. He was unable, however, to
              make his way in, and the maids were too distracted with fear to be
              of any assistance to him. A sudden thought struck him, however,
              and he ran through the hall door and round to the lawn upon which
              the long French windows open. One side of the window was open,
              which I understand was quite usual in the summer-time, and he
              passed without difficulty into the room. His mistress had ceased
              to scream and was stretched insensible upon a couch, while with
              his feet tilted over the side of an arm-chair, and his head upon
              the ground near the corner of the fender, was lying the
              unfortunate soldier stone dead in a pool of his own blood.
            </TextNode>

            <TextNode>
              “Naturally, the coachman's first thought, on finding that he could
              do nothing for his master, was to open the door. But here an
              unexpected and singular difficulty presented itself. The key was
              not in the inner side of the door, nor could he find it anywhere
              in the room. He went out again, therefore, through the window, and
              having obtained the help of a policeman and of a medical man, he
              returned. The lady, against whom naturally the strongest suspicion
              rested, was removed to her room, still in a state of
              insensibility. The Colonel's body was then placed upon the sofa,
              and a careful examination made of the scene of the tragedy.
            </TextNode>

            <TextNode>
              “The injury from which the unfortunate veteran was suffering was
              found to be a jagged cut some two inches long at the back part of
              his head, which had evidently been caused by a violent blow from a
              blunt weapon. Nor was it difficult to guess what that weapon may
              have been. Upon the floor, close to the body, was lying a singular
              club of hard carved wood with a bone handle. The Colonel possessed
              a varied collection of weapons brought from the different
              countries in which he had fought, and it is conjectured by the
              police that his club was among his trophies. The servants deny
              having seen it before, but among the numerous curiosities in the
              house it is possible that it may have been overlooked. Nothing
              else of importance was discovered in the room by the police, save
              the inexplicable fact that neither upon Mrs. Barclay's person nor
              upon that of the victim nor in any part of the room was the
              missing key to be found. The door had eventually to be opened by a
              locksmith from Aldershot.
            </TextNode>

            <TextNode>
              “That was the state of things, Watson, when upon the Tuesday
              morning I, at the request of Major Murphy, went down to Aldershot
              to supplement the efforts of the police. I think that you will
              acknowledge that the problem was already one of interest, but my
              observations soon made me realize that it was in truth much more
              extraordinary than would at first sight appear.
            </TextNode>

            <TextNode>
              “Before examining the room I cross-questioned the servants, but
              only succeeded in eliciting the facts which I have already stated.
              One other detail of interest was remembered by Jane Stewart, the
              housemaid. You will remember that on hearing the sound of the
              quarrel she descended and returned with the other servants. On
              that first occasion, when she was alone, she says that the voices
              of her master and mistress were sunk so low that she could hear
              hardly anything, and judged by their tones rather than their words
              that they had fallen out. On my pressing her, however, she
              remembered that she heard the word David uttered twice by the
              lady. The point is of the utmost importance as guiding us towards
              the reason of the sudden quarrel. The Colonel's name, you
              remember, was James.
            </TextNode>

            <TextNode>
              “There was one thing in the case which had made the deepest
              impression both upon the servants and the police. This was the
              contortion of the Colonel's face. It had set, according to their
              account, into the most dreadful expression of fear and horror
              which a human countenance is capable of assuming. More than one
              person fainted at the mere sight of him, so terrible was the
              effect. It was quite certain that he had foreseen his fate, and
              that it had caused him the utmost horror. This, of course, fitted
              in well enough with the police theory, if the Colonel could have
              seen his wife making a murderous attack upon him. Nor was the fact
              of the wound being on the back of his head a fatal objection to
              this, as he might have turned to avoid the blow. No information
              could be got from the lady herself, who was temporarily insane
              from an acute attack of brain-fever.
            </TextNode>

            <TextNode>
              “From the police I learned that Miss Morrison, who you remember
              went out that evening with Mrs. Barclay, denied having any
              knowledge of what it was which had caused the ill-humor in which
              her companion had returned.
            </TextNode>

            <TextNode>
              “Having gathered these facts, Watson, I smoked several pipes over
              them, trying to separate those which were crucial from others
              which were merely incidental. There could be no question that the
              most distinctive and suggestive point in the case was the singular
              disappearance of the door-key. A most careful search had failed to
              discover it in the room. Therefore it must have been taken from
              it. But neither the Colonel nor the Colonel's wife could have
              taken it. That was perfectly clear. Therefore a third person must
              have entered the room. And that third person could only have come
              in through the window. It seemed to me that a careful examination
              of the room and the lawn might possibly reveal some traces of this
              mysterious individual. You know my methods, Watson. There was not
              one of them which I did not apply to the inquiry. And it ended by
              my discovering traces, but very different ones from those which I
              had expected. There had been a man in the room, and he had crossed
              the lawn coming from the road. I was able to obtain five very
              clear impressions of his foot-marks: one in the roadway itself, at
              the point where he had climbed the low wall, two on the lawn, and
              two very faint ones upon the stained boards near the window where
              he had entered. He had apparently rushed across the lawn, for his
              toe-marks were much deeper than his heels. But it was not the man
              who surprised me. It was his companion.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page149;
