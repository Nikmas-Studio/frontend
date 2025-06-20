'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
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

function Page110({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NOBLE&nbsp;BACHELOR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Yes. That is what Mr. Lestrade, of Scotland Yard, looks upon as
              so serious. It is thought that Flora decoyed my wife out and laid
              some terrible trap for her.”
            </TextNode>

            <TextNode>“Well, it is a possible supposition.”</TextNode>

            <TextNode>“You think so, too?”</TextNode>

            <TextNode>
              “I did not say a probable one. But you do not yourself look upon
              this as likely?”
            </TextNode>

            <TextNode>“I do not think Flora would hurt a fly.”</TextNode>

            <TextNode>
              “Still, jealousy is a strange transformer of characters. Pray what
              is your own theory as to what took place?”
            </TextNode>

            <TextNode>
              “Well, really, I came to seek a theory, not to propound one. I
              have given you all the facts. Since you ask me, however, I may say
              that it has occurred to me as possible that the excitement of this
              affair, the consciousness that she had made so immense a social
              stride, had the effect of causing some little nervous disturbance
              in my wife.”
            </TextNode>

            <TextNode>
              “In short, that she had become suddenly deranged?”
            </TextNode>

            <TextNode>
              “Well, really, when I consider that she has turned her back—I will
              not say upon me, but upon so much that many have aspired to
              without success—I can hardly explain it in any other fashion.”
            </TextNode>

            <TextNode>
              “Well, certainly that is also a conceivable hypothesis,” said
              Holmes, smiling. “And now, Lord St. Simon, I think that I have
              nearly all my data. May I ask whether you were seated at the
              breakfast-table so that you could see out of the window?”
            </TextNode>

            <TextNode>
              “We could see the other side of the road and the Park.”
            </TextNode>

            <TextNode>
              “Quite so. Then I do not think that I need to detain you longer. I
              shall communicate with you.”
            </TextNode>

            <TextNode>
              “Should you be fortunate enough to solve this problem,” said our
              client, rising.
            </TextNode>

            <TextNode>“I have solved it.”</TextNode>

            <TextNode>“Eh? What was that?”</TextNode>

            <TextNode>“I say that I have solved it.”</TextNode>

            <TextNode>“Where, then, is my wife?”</TextNode>

            <TextNode>
              “That is a detail which I shall speedily supply.”
            </TextNode>

            <TextNode>
              Lord St. Simon shook his head. “I am afraid that it will take
              wiser heads than yours or mine,” he remarked, and bowing in a
              stately, old-fashioned manner he departed.
            </TextNode>

            <TextNode>
              “It is very good of Lord St. Simon to honour my head by putting it
              on a level with his own,” said Sherlock Holmes, laughing. “I think
              that I shall have a whisky and soda and a cigar after all this
              cross-questioning. I had formed my conclusions as to the case
              before our client came into the room.”
            </TextNode>

            <TextNode>“My dear Holmes!”</TextNode>

            <TextNode>
              “I have notes of several similar cases, though none, as I remarked
              before, which were quite as prompt. My whole examination served to
              turn my conjecture into a certainty. Circumstantial evidence is
              occasionally very convincing, as when you find a trout in the
              milk, to quote Thoreau's example.”
            </TextNode>

            <TextNode>“But I have heard all that you have heard.”</TextNode>

            <TextNode>
              “Without, however, the knowledge of pre-existing cases which
              serves me so well. There was a parallel instance in Aberdeen some
              years back, and something on very much the same lines at Munich
              the year after the Franco-Prussian War. It is one of these
              cases—but, hullo, here is Lestrade! Good-afternoon, Lestrade! You
              will find an extra tumbler upon the sideboard, and there are
              cigars in the box.”
            </TextNode>

            <TextNode>
              The official detective was attired in a pea-jacket and cravat,
              which gave him a decidedly nautical appearance, and he carried a
              black canvas bag in his hand. With a short greeting he seated
              himself and lit the cigar which had been offered to him.
            </TextNode>

            <TextNode>
              “What's up, then?” asked Holmes with a twinkle in his eye. “You
              look dissatisfied.”
            </TextNode>

            <TextNode>
              “And I feel dissatisfied. It is this infernal St. Simon marriage
              case. I can make neither head nor tail of the business.”
            </TextNode>

            <TextNode>“Really! You surprise me.”</TextNode>

            <TextNode>
              “Who ever heard of such a mixed affair? Every clue seems to slip
              through my fingers. I have been at work upon it all day.”
            </TextNode>

            <TextNode>
              “And very wet it seems to have made you,” said Holmes laying his
              hand upon the arm of the pea-jacket.
            </TextNode>

            <TextNode>“Yes, I have been dragging the Serpentine.”</TextNode>

            <TextNode>“In heaven's name, what for?”</TextNode>

            <TextNode>“In search of the body of Lady St. Simon.”</TextNode>

            <TextNode>
              Sherlock Holmes leaned back in his chair and laughed heartily.
            </TextNode>

            <TextNode>
              “Have you dragged the basin of Trafalgar Square fountain?” he
              asked.
            </TextNode>

            <TextNode>“Why? What do you mean?”</TextNode>

            <TextNode>
              “Because you have just as good a chance of finding this lady in
              the one as in the other.”
            </TextNode>

            <TextNode>
              Lestrade shot an angry glance at my companion. “I suppose you know
              all about it,” he snarled.
            </TextNode>

            <TextNode>
              “Well, I have only just heard the facts, but my mind is made up.”
            </TextNode>

            <TextNode>
              “Oh, indeed! Then you think that the Serpentine plays no part in
              the matter?”
            </TextNode>

            <TextNode>“I think it very unlikely.”</TextNode>

            <TextNode>
              “Then perhaps you will kindly explain how it is that we found this
              in it?” He opened his bag as he spoke, and tumbled onto the floor
              a wedding-dress of watered silk, a pair of white satin shoes and a
              bride's wreath and veil, all discoloured and soaked in water.
              “There,” said he, putting a new wedding-ring upon the top of the
              pile. “There is a little nut for you to crack, Master Holmes.”
            </TextNode>

            <TextNode>
              “Oh, indeed!” said my friend, blowing blue rings into the air.
              “You dragged them from the Serpentine?”
            </TextNode>

            <TextNode>
              “No. They were found floating near the margin by a park-keeper.
              They have been identified as her clothes, and it seemed to me that
              if the clothes were there the body would not be far off.”
            </TextNode>

            <TextNode>
              “By the same brilliant reasoning, every man's body is to be found
              in the neighbourhood of his wardrobe. And pray what did you hope
              to arrive at through this?”
            </TextNode>

            <TextNode>
              “At some evidence implicating Flora Millar in the disappearance.”
            </TextNode>

            <TextNode>“I am afraid that you will find it difficult.”</TextNode>

            <TextNode>
              “Are you, indeed, now?” cried Lestrade with some bitterness. “I am
              afraid, Holmes, that you are not very practical with your
              deductions and your inferences. You have made two blunders in as
              many minutes. This dress does implicate Miss Flora Millar.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“And how?”</TextNode>

            <TextNode>
              “In the dress is a pocket. In the pocket is a card-case. In the
              card-case is a note. And here is the very note.” He slapped it
              down upon the table in front of him. “Listen to this:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “‘You will see me when all is ready. Come at once.
              </TextNode>
              <TextNode className='italic' noIndent>
                “‘F.H.M.’
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Now my theory all along has been that Lady St. Simon was decoyed
              away by Flora Millar, and that she, with confederates, no doubt,
              was responsible for her disappearance. Here, signed with her
              initials, is the very note which was no doubt quietly slipped into
              her hand at the door and which lured her within their reach.”
            </TextNode>

            <TextNode>
              “Very good, Lestrade,” said Holmes, laughing. “You really are very
              fine indeed. Let me see it.” He took up the paper in a listless
              way, but his attention instantly became riveted, and he gave a
              little cry of satisfaction. “This is indeed important,” said he.
            </TextNode>

            <TextNode>“Ha! you find it so?”</TextNode>

            <TextNode>“Extremely so. I congratulate you warmly.”</TextNode>

            <TextNode>
              Lestrade rose in his triumph and bent his head to look. “Why,” he
              shrieked, “you're looking at the wrong side!”
            </TextNode>

            <TextNode>“On the contrary, this is the right side.”</TextNode>

            <TextNode>
              “The right side? You're mad! Here is the note written in pencil
              over here.”
            </TextNode>

            <TextNode>
              “And over here is what appears to be the fragment of a hotel bill,
              which interests me deeply.”
            </TextNode>

            <TextNode>
              “There's nothing in it. I looked at it before,” said Lestrade.
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “‘Oct. 4th, rooms 8s., breakfast 2s. 6d., cocktail 1s., lunch
                2s. 6d., glass sherry, 8d.’ I see nothing in that.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Very likely not. It is most important, all the same. As to the
              note, it is important also, or at least the initials are, so I
              congratulate you again.”
            </TextNode>

            <TextNode>
              “I've wasted time enough,” said Lestrade, rising. “I believe in
              hard work and not in sitting by the fire spinning fine theories.
              Good-day, Mr. Holmes, and we shall see which gets to the bottom of
              the matter first.” He gathered up the garments, thrust them into
              the bag, and made for the door.
            </TextNode>

            <TextNode>
              “Just one hint to you, Lestrade,” drawled Holmes before his rival
              vanished; “I will tell you the true solution of the matter. Lady
              St. Simon is a myth. There is not, and there never has been, any
              such person.”
            </TextNode>

            <TextNode>
              Lestrade looked sadly at my companion. Then he turned to me,
              tapped his forehead three times, shook his head solemnly, and
              hurried away.
            </TextNode>

            <TextNode>
              He had hardly shut the door behind him when Holmes rose to put on
              his overcoat. “There is something in what the fellow says about
              outdoor work,” he remarked, “so I think, Watson, that I must leave
              you to your papers for a little.”
            </TextNode>

            <TextNode>
              It was after five o'clock when Sherlock Holmes left me, but I had
              no time to be lonely, for within an hour there arrived a
              confectioner's man with a very large flat box. This he unpacked
              with the help of a youth whom he had brought with him, and
              presently, to my very great astonishment, a quite epicurean little
              cold supper began to be laid out upon our humble lodging-house
              mahogany. There were a couple of brace of cold woodcock, a
              pheasant, a <span className='italic'>pâté de foie gras pie</span>{' '}
              with a group of ancient and cobwebby bottles. Having laid out all
              these luxuries, my two visitors vanished away, like the genii of
              the Arabian Nights, with no explanation save that the things had
              been paid for and were ordered to this address.
            </TextNode>

            <TextNode>
              Just before nine o'clock Sherlock Holmes stepped briskly into the
              room. His features were gravely set, but there was a light in his
              eye which made me think that he had not been disappointed in his
              conclusions.
            </TextNode>

            <TextNode>
              “They have laid the supper, then,” he said, rubbing his hands.
            </TextNode>

            <TextNode>
              “You seem to expect company. They have laid for five.”
            </TextNode>

            <TextNode>
              “Yes, I fancy we may have some company dropping in,” said he. “I
              am surprised that Lord St. Simon has not already arrived. Ha! I
              fancy that I hear his step now upon the stairs.”
            </TextNode>

            <TextNode>
              It was indeed our visitor of the afternoon who came bustling in,
              dangling his glasses more vigorously than ever, and with a very
              perturbed expression upon his aristocratic features.
            </TextNode>

            <TextNode>“My messenger reached you, then?” asked Holmes.</TextNode>

            <TextNode>
              “Yes, and I confess that the contents startled me beyond measure.
              Have you good authority for what you say?”
            </TextNode>

            <TextNode>“The best possible.”</TextNode>

            <TextNode>
              Lord St. Simon sank into a chair and passed his hand over his
              forehead.
            </TextNode>

            <TextNode>
              “What will the Duke say,” he murmured, “when he hears that one of
              the family has been subjected to such humiliation?”
            </TextNode>

            <TextNode>
              “It is the purest accident. I cannot allow that there is any
              humiliation.”
            </TextNode>

            <TextNode>
              “Ah, you look on these things from another standpoint.”
            </TextNode>

            <TextNode>
              “I fail to see that anyone is to blame. I can hardly see how the
              lady could have acted otherwise, though her abrupt method of doing
              it was undoubtedly to be regretted. Having no mother, she had no
              one to advise her at such a crisis.”
            </TextNode>

            <TextNode>
              “It was a slight, sir, a public slight,” said Lord St. Simon,
              tapping his fingers upon the table.
            </TextNode>

            <TextNode>
              “You must make allowance for this poor girl, placed in so
              unprecedented a position.”
            </TextNode>

            <TextNode>
              “I will make no allowance. I am very angry indeed, and I have been
              shamefully used.”
            </TextNode>

            <TextNode>
              “I think that I heard a ring,” said Holmes. “Yes, there are steps
              on the landing. If I cannot persuade you to take a lenient view of
              the matter, Lord St. Simon, I have brought an advocate here who
              may be more successful.” He opened the door and ushered in a lady
              and gentleman. “Lord St. Simon,” said he “allow me to introduce
              you to Mr. and Mrs. Francis Hay Moulton. The lady, I think, you
              have already met.”
            </TextNode>

            <TextNode>
              At the sight of these newcomers our client had sprung from his
              seat and stood very erect, with his eyes cast down and his hand
              thrust into the breast of his frock-coat, a picture of offended
              dignity. The lady had taken a quick step forward and had held out
              her hand to him, but he still refused to raise his eyes. It was as
              well for his resolution, perhaps, for her pleading face was one
              which it was hard to resist.
            </TextNode>

            <TextNode>
              “You're angry, Robert,” said she. “Well, I guess you have every
              cause to be.”
            </TextNode>

            <TextNode>
              “Pray make no apology to me,” said Lord St. Simon bitterly.
            </TextNode>

            <TextNode>
              “Oh, yes, I know that I have treated you real bad and that I
              should have spoken to you before I went; but I was kind of
              rattled, and from the time when I saw Frank here again I just
              didn't know what I was doing or saying. I only wonder I didn't
              fall down and do a faint right there before the altar.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page110;
