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

function Page60({
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
              “The rain was still falling steadily, for it was just the
              beginning of the wet season. Brown, heavy clouds were drifting
              across the sky, and it was hard to see more than a stone-cast. A
              deep moat lay in front of our door, but the water was in places
              nearly dried up, and it could easily be crossed. It was strange to
              me to be standing there with those two wild Punjaubees waiting for
              the man who was coming to his death.
            </TextNode>

            <TextNode>
              “Suddenly my eye caught the glint of a shaded lantern at the other
              side of the moat. It vanished among the mound-heaps, and then
              appeared again coming slowly in our direction.
            </TextNode>

            <TextNode>“ ‘Here they are!’ I exclaimed.</TextNode>

            <TextNode>
              “ ‘You will challenge him, Sahib, as usual,’ whispered Abdullah.
              ‘Give him no cause for fear. Send us in with him, and we shall do
              the rest while you stay here on guard. Have the lantern ready to
              uncover, that we may be sure that it is indeed the man.’
            </TextNode>

            <TextNode>
              “The light had flickered onwards, now stopping and now advancing,
              until I could see two dark figures upon the other side of the
              moat. I let them scramble down the sloping bank, splash through
              the mire, and climb half-way up to the gate, before I challenged
              them.
            </TextNode>

            <TextNode>“ ‘Who goes there?’ said I, in a subdued voice.</TextNode>

            <TextNode>
              “ ‘Friends,’ came the answer. I uncovered my lantern and threw a
              flood of light upon them. The first was an enormous Sikh, with a
              black beard which swept nearly down to his cummerbund. Outside of
              a show I have never seen so tall a man. The other was a little,
              fat, round fellow, with a great yellow turban, and a bundle in his
              hand, done up in a shawl. He seemed to be all in a quiver with
              fear, for his hands twitched as if he had the ague, and his head
              kept turning to left and right with two bright little twinkling
              eyes, like a mouse when he ventures out from his hole. It gave me
              the chills to think of killing him, but I thought of the treasure,
              and my heart set as hard as a flint within me. When he saw my
              white face he gave a little chirrup of joy and came running up
              towards me.
            </TextNode>

            <TextNode>
              “ ‘Your protection, Sahib,’ he panted,—‘your protection for the
              unhappy merchant Achmet. I have travelled across Rajpootana that I
              might seek the shelter of the fort at Agra. I have been robbed and
              beaten and abused because I have been the friend of the Company.
              It is a blessed night this when I am once more in safety,—I and my
              poor possessions.’
            </TextNode>

            <TextNode>“ ‘What have you in the bundle?’ I asked.</TextNode>

            <TextNode>
              “ ‘An iron box,’ he answered, ‘which contains one or two little
              family matters which are of no value to others, but which I should
              be sorry to lose. Yet I am not a beggar; and I shall reward you,
              young Sahib, and your governor also, if he will give me the
              shelter I ask.’
            </TextNode>

            <TextNode>
              “I could not trust myself to speak longer with the man. The more I
              looked at his fat, frightened face, the harder did it seem that we
              should slay him in cold blood. It was best to get it over.
            </TextNode>

            <TextNode>
              “ ‘Take him to the main guard,’ said I. The two Sikhs closed in
              upon him on each side, and the giant walked behind, while they
              marched in through the dark gate-way. Never was a man so compassed
              round with death. I remained at the gate-way with the lantern.
            </TextNode>

            <TextNode>
              “I could hear the measured tramp of their footsteps sounding
              through the lonely corridors. Suddenly it ceased, and I heard
              voices, and a scuffle, with the sound of blows. A moment later
              there came, to my horror, a rush of footsteps coming in my
              direction, with the loud breathing of a running man. I turned my
              lantern down the long, straight passage, and there was the fat
              man, running like the wind, with a smear of blood across his face,
              and close at his heels, bounding like a tiger, the great
              black-bearded Sikh, with a knife flashing in his hand. I have
              never seen a man run so fast as that little merchant. He was
              gaining on the Sikh, and I could see that if he once passed me and
              got to the open air he would save himself yet. My heart softened
              to him, but again the thought of his treasure turned me hard and
              bitter. I cast my firelock between his legs as he raced past, and
              he rolled twice over like a shot rabbit. Ere he could stagger to
              his feet the Sikh was upon him, and buried his knife twice in his
              side. The man never uttered moan nor moved muscle, but lay were he
              had fallen. I think myself that he may have broken his neck with
              the fall. You see, gentlemen, that I am keeping my promise. I am
              telling you every work of the business just exactly as it
              happened, whether it is in my favor or not.”
            </TextNode>

            <TextNode>
              He stopped, and held out his manacled hands for the
              whiskey-and-water which Holmes had brewed for him. For myself, I
              confess that I had now conceived the utmost horror of the man, not
              only for this cold-blooded business in which he had been
              concerned, but even more for the somewhat flippant and careless
              way in which he narrated it. Whatever punishment was in store for
              him, I felt that he might expect no sympathy from me. Sherlock
              Holmes and Jones sat with their hands upon their knees, deeply
              interested in the story, but with the same disgust written upon
              their faces. He may have observed it, for there was a touch of
              defiance in his voice and manner as he proceeded.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It was all very bad, no doubt,” said he. “I should like to know
              how many fellows in my shoes would have refused a share of this
              loot when they knew that they would have their throats cut for
              their pains. Besides, it was my life or his when once he was in
              the fort. If he had got out, the whole business would come to
              light, and I should have been court-martialled and shot as likely
              as not; for people were not very lenient at a time like that.”
            </TextNode>

            <TextNode>“Go on with your story,” said Holmes, shortly.</TextNode>

            <TextNode>
              “Well, we carried him in, Abdullah, Akbar, and I. A fine weight he
              was, too, for all that he was so short. Mahomet Singh was left to
              guard the door. We took him to a place which the Sikhs had already
              prepared. It was some distance off, where a winding passage leads
              to a great empty hall, the brick walls of which were all crumbling
              to pieces. The earth floor had sunk in at one place, making a
              natural grave, so we left Achmet the merchant there, having first
              covered him over with loose bricks. This done, we all went back to
              the treasure.
            </TextNode>

            <TextNode>
              “It lay where he had dropped it when he was first attacked. The
              box was the same which now lies open upon your table. A key was
              hung by a silken cord to that carved handle upon the top. We
              opened it, and the light of the lantern gleamed upon a collection
              of gems such as I have read of and thought about when I was a
              little lad at Pershore. It was blinding to look upon them. When we
              had feasted our eyes we took them all out and made a list of them.
              There were one hundred and forty-three diamonds of the first
              water, including one which has been called, I believe, ‘the Great
              Mogul’ and is said to be the second largest stone in existence.
              Then there were ninety-seven very fine emeralds, and one hundred
              and seventy rubies, some of which, however, were small. There were
              forty carbuncles, two hundred and ten sapphires, sixty-one agates,
              and a great quantity of beryls, onyxes, cats'-eyes, turquoises,
              and other stones, the very names of which I did not know at the
              time, though I have become more familiar with them since. Besides
              this, there were nearly three hundred very fine pearls, twelve of
              which were set in a gold coronet. By the way, these last had been
              taken out of the chest and were not there when I recovered it.
            </TextNode>

            <TextNode>
              “After we had counted our treasures we put them back into the
              chest and carried them to the gate-way to show them to Mahomet
              Singh. Then we solemnly renewed our oath to stand by each other
              and be true to our secret. We agreed to conceal our loot in a safe
              place until the country should be at peace again, and then to
              divide it equally among ourselves. There was no use dividing it at
              present, for if gems of such value were found upon us it would
              cause suspicion, and there was no privacy in the fort nor any
              place where we could keep them. We carried the box, therefore,
              into the same hall where we had buried the body, and there, under
              certain bricks in the best-preserved wall, we made a hollow and
              put our treasure. We made careful note of the place, and next day
              I drew four plans, one for each of us, and put the sign of the
              four of us at the bottom, for we had sworn that we should each
              always act for all, so that none might take advantage. That is an
              oath that I can put my hand to my heart and swear that I have
              never broken.
            </TextNode>

            <TextNode>
              “Well, there's no use my telling you gentlemen what came of the
              Indian mutiny. After Wilson took Delhi and Sir Colin relieved
              Lucknow the back of the business was broken. Fresh troops came
              pouring in, and Nana Sahib made himself scarce over the frontier.
              A flying column under Colonel Greathed came round to Agra and
              cleared the Pandies away from it. Peace seemed to be settling upon
              the country, and we four were beginning to hope that the time was
              at hand when we might safely go off with our shares of the
              plunder. In a moment, however, our hopes were shattered by our
              being arrested as the murderers of Achmet.
            </TextNode>

            <TextNode>
              “It came about in this way. When the rajah put his jewels into the
              hands of Achmet he did it because he knew that he was a trusty
              man. They are suspicious folk in the East, however: so what does
              this rajah do but take a second even more trusty servant and set
              him to play the spy upon the first? This second man was ordered
              never to let Achmet out of his sight, and he followed him like his
              shadow. He went after him that night and saw him pass through the
              doorway. Of course he thought he had taken refuge in the fort, and
              applied for admission there himself next day, but could find no
              trace of Achmet. This seemed to him so strange that he spoke about
              it to a sergeant of guides, who brought it to the ears of the
              commandant. A thorough search was quickly made, and the body was
              discovered. Thus at the very moment that we thought that all was
              safe we were all four seized and brought to trial on a charge of
              murder,—three of us because we had held the gate that night, and
              the fourth because he was known to have been in the company of the
              murdered man. Not a word about the jewels came out at the trial,
              for the rajah had been deposed and driven out of India: so no one
              had any particular interest in them. The murder, however, was
              clearly made out, and it was certain that we must all have been
              concerned in it. The three Sikhs got penal servitude for life, and
              I was condemned to death, though my sentence was afterwards
              commuted into the same as the others.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page60;
