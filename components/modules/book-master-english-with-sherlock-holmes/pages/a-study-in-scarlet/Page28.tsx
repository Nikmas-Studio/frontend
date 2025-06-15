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

function Page28({
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
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <H4>
          Chapter IV.
          <br />A Flight for Life
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              On the morning which followed his interview with the Mormon
              Prophet, John Ferrier went in to Salt Lake City, and having found
              his acquaintance, who was bound for the Nevada Mountains, he
              entrusted him with his message to Jefferson Hope. In it he told
              the young man of the imminent danger which threatened them, and
              how necessary it was that he should return. Having done thus he
              felt easier in his mind, and returned home with a lighter heart.
            </TextNode>

            <TextNode>
              As he approached his farm, he was surprised to see a horse hitched
              to each of the posts of the gate. Still more surprised was he on
              entering to find two young men in possession of his sitting-room.
              One, with a long pale face, was leaning back in the rocking-chair,
              with his feet cocked up upon the stove. The other, a bull-necked
              youth with coarse bloated features, was standing in front of the
              window with his hands in his pocket, whistling a popular hymn.
              Both of them nodded to Ferrier as he entered, and the one in the
              rocking-chair commenced the conversation.
            </TextNode>

            <TextNode>
              “Maybe you don't know us,” he said. “This here is the son of Elder
              Drebber, and I'm Joseph Stangerson, who travelled with you in the
              desert when the Lord stretched out His hand and gathered you into
              the true fold.”
            </TextNode>

            <TextNode>
              “As He will all the nations in His own good time,” said the other
              in a nasal voice; “He grindeth slowly but exceeding small.”
            </TextNode>

            <TextNode>
              John Ferrier bowed coldly. He had guessed who his visitors were.
            </TextNode>

            <TextNode>
              “We have come,” continued Stangerson, “at the advice of our
              fathers to solicit the hand of your daughter for whichever of us
              may seem good to you and to her. As I have but four wives and
              Brother Drebber here has seven, it appears to me that my claim is
              the stronger one.”
            </TextNode>

            <TextNode>
              “Nay, nay, Brother Stangerson,” cried the other; “the question is
              not how many wives we have, but how many we can keep. My father
              has now given over his mills to me, and I am the richer man.”
            </TextNode>

            <TextNode>
              “But my prospects are better,” said the other, warmly. “When the
              Lord removes my father, I shall have his tanning yard and his
              leather factory. Then I am your elder, and am higher in the
              Church.”
            </TextNode>

            <TextNode>
              “It will be for the maiden to decide,” rejoined young Drebber,
              smirking at his own reflection in the glass. “We will leave it all
              to her decision.”
            </TextNode>

            <TextNode>
              During this dialogue, John Ferrier had stood fuming in the
              doorway, hardly able to keep his riding-whip from the backs of his
              two visitors.
            </TextNode>

            <TextNode>
              “Look here,” he said at last, striding up to them, “when my
              daughter summons you, you can come, but until then I don't want to
              see your faces again.”
            </TextNode>

            <TextNode>
              The two young Mormons stared at him in amazement. In their eyes
              this competition between them for the maiden's hand was the
              highest of honours both to her and her father.
            </TextNode>

            <TextNode>
              “There are two ways out of the room,” cried Ferrier; “there is the
              door, and there is the window. Which do you care to use?”
            </TextNode>

            <TextNode>
              His brown face looked so savage, and his gaunt hands so
              threatening, that his visitors sprang to their feet and beat a
              hurried retreat. The old farmer followed them to the door.
            </TextNode>

            <TextNode>
              “Let me know when you have settled which it is to be,” he said,
              sardonically.
            </TextNode>

            <TextNode>
              “You shall smart for this!” Stangerson cried, white with rage.
              “You have defied the Prophet and the Council of Four. You shall
              rue it to the end of your days.”
            </TextNode>

            <TextNode>
              “The hand of the Lord shall be heavy upon you,” cried young
              Drebber; “He will arise and smite you!”
            </TextNode>

            <TextNode>
              “Then I'll start the smiting,” exclaimed Ferrier furiously, and
              would have rushed upstairs for his gun had not Lucy seized him by
              the arm and restrained him. Before he could escape from her, the
              clatter of horses' hoofs told him that they were beyond his reach.
            </TextNode>

            <TextNode>
              “The young canting rascals!” he exclaimed, wiping the perspiration
              from his forehead; “I would sooner see you in your grave, my girl,
              than the wife of either of them.”
            </TextNode>

            <TextNode>
              “And so should I, father,” she answered, with spirit; “but
              Jefferson will soon be here.”
            </TextNode>

            <TextNode>
              “Yes. It will not be long before he comes. The sooner the better,
              for we do not know what their next move may be.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              It was, indeed, high time that someone capable of giving advice
              and help should come to the aid of the sturdy old farmer and his
              adopted daughter. In the whole history of the settlement there had
              never been such a case of rank disobedience to the authority of
              the Elders. If minor errors were punished so sternly, what would
              be the fate of this arch rebel. Ferrier knew that his wealth and
              position would be of no avail to him. Others as well known and as
              rich as himself had been spirited away before now, and their goods
              given over to the Church. He was a brave man, but he trembled at
              the vague, shadowy terrors which hung over him. Any known danger
              he could face with a firm lip, but this suspense was unnerving. He
              concealed his fears from his daughter, however, and affected to
              make light of the whole matter, though she, with the keen eye of
              love, saw plainly that he was ill at ease.
            </TextNode>

            <TextNode>
              He expected that he would receive some message or remonstrance
              from Young as to his conduct, and he was not mistaken, though it
              came in an unlooked-for manner. Upon rising next morning he found,
              to his surprise, a small square of paper pinned on to the coverlet
              of his bed just over his chest. On it was printed, in bold
              straggling letters:—
            </TextNode>

            <TextNode>
              “Twenty-nine days are given you for amendment, and then—”
            </TextNode>

            <TextNode>
              The dash was more fear-inspiring than any threat could have been.
              How this warning came into his room puzzled John Ferrier sorely,
              for his servants slept in an outhouse, and the doors and windows
              had all been secured. He crumpled the paper up and said nothing to
              his daughter, but the incident struck a chill into his heart. The
              twenty-nine days were evidently the balance of the month which
              Young had promised. What strength or courage could avail against
              an enemy armed with such mysterious powers? The hand which
              fastened that pin might have struck him to the heart, and he could
              never have known who had slain him.
            </TextNode>

            <TextNode>
              Still more shaken was he next morning. They had sat down to their
              breakfast when Lucy with a cry of surprise pointed upwards. In the
              centre of the ceiling was scrawled, with a burned stick
              apparently, the number 28. To his daughter it was unintelligible,
              and he did not enlighten her. That night he sat up with his gun
              and kept watch and ward. He saw and he heard nothing, and yet in
              the morning a great 27 had been painted upon the outside of his
              door.
            </TextNode>

            <TextNode>
              Thus day followed day; and as sure as morning came he found that
              his unseen enemies had kept their register, and had marked up in
              some conspicuous position how many days were still left to him out
              of the month of grace. Sometimes the fatal numbers appeared upon
              the walls, sometimes upon the floors, occasionally they were on
              small placards stuck upon the garden gate or the railings. With
              all his vigilance John Ferrier could not discover whence these
              daily warnings proceeded. A horror which was almost superstitious
              came upon him at the sight of them. He became haggard and
              restless, and his eyes had the troubled look of some hunted
              creature. He had but one hope in life now, and that was for the
              arrival of the young hunter from Nevada.
            </TextNode>

            <TextNode>
              Twenty had changed to fifteen and fifteen to ten, but there was no
              news of the absentee. One by one the numbers dwindled down, and
              still there came no sign of him. Whenever a horseman clattered
              down the road, or a driver shouted at his team, the old farmer
              hurried to the gate thinking that help had arrived at last. At
              last, when he saw five give way to four and that again to three,
              he lost heart, and abandoned all hope of escape. Single-handed,
              and with his limited knowledge of the mountains which surrounded
              the settlement, he knew that he was powerless. The more-frequented
              roads were strictly watched and guarded, and none could pass along
              them without an order from the Council. Turn which way he would,
              there appeared to be no avoiding the blow which hung over him. Yet
              the old man never wavered in his resolution to part with life
              itself before he consented to what he regarded as his daughter's
              dishonour.
            </TextNode>

            <TextNode>
              He was sitting alone one evening pondering deeply over his
              troubles, and searching vainly for some way out of them. That
              morning had shown the figure 2 upon the wall of his house, and the
              next day would be the last of the allotted time. What was to
              happen then? All manner of vague and terrible fancies filled his
              imagination. And his daughter—what was to become of her after he
              was gone? Was there no escape from the invisible network which was
              drawn all round them. He sank his head upon the table and sobbed
              at the thought of his own impotence.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page28;
