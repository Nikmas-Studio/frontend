import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page26({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “There, I didn't mean that,” she said; “of course, you are a
              friend now. You must come and see us. Now I must push along, or
              father won't trust me with his business any more. Good-bye!”
            </TextNode>

            <TextNode>
              “Good-bye,” he answered, raising his broad sombrero, and bending
              over her little hand. She wheeled her mustang round, gave it a cut
              with her riding-whip, and darted away down the broad road in a
              rolling cloud of dust.
            </TextNode>

            <TextNode>
              Young Jefferson Hope rode on with his companions, gloomy and
              taciturn. He and they had been among the Nevada Mountains
              prospecting for silver, and were returning to Salt Lake City in
              the hope of raising capital enough to work some lodes which they
              had discovered. He had been as keen as any of them upon the
              business until this sudden incident had drawn his thoughts into
              another channel. The sight of the fair young girl, as frank and
              wholesome as the Sierra breezes, had stirred his volcanic, untamed
              heart to its very depths. When she had vanished from his sight, he
              realized that a crisis had come in his life, and that neither
              silver speculations nor any other questions could ever be of such
              importance to him as this new and all-absorbing one. The love
              which had sprung up in his heart was not the sudden, changeable
              fancy of a boy, but rather the wild, fierce passion of a man of
              strong will and imperious temper. He had been accustomed to
              succeed in all that he undertook. He swore in his heart that he
              would not fail in this if human effort and human perseverance
              could render him successful.
            </TextNode>

            <TextNode>
              He called on John Ferrier that night, and many times again, until
              his face was a familiar one at the farm-house. John, cooped up in
              the valley, and absorbed in his work, had had little chance of
              learning the news of the outside world during the last twelve
              years. All this Jefferson Hope was able to tell him, and in a
              style which interested Lucy as well as her father. He had been a
              pioneer in California, and could narrate many a strange tale of
              fortunes made and fortunes lost in those wild, halcyon days. He
              had been a scout too, and a trapper, a silver explorer, and a
              ranchman. Wherever stirring adventures were to be had, Jefferson
              Hope had been there in search of them. He soon became a favourite
              with the old farmer, who spoke eloquently of his virtues. On such
              occasions, Lucy was silent, but her blushing cheek and her bright,
              happy eyes, showed only too clearly that her young heart was no
              longer her own. Her honest father may not have observed these
              symptoms, but they were assuredly not thrown away upon the man who
              had won her affections.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              It was a summer evening when he came galloping down the road and
              pulled up at the gate. She was at the doorway, and came down to
              meet him. He threw the bridle over the fence and strode up the
              pathway.
            </TextNode>

            <TextNode>
              “I am off, Lucy,” he said, taking her two hands in his, and gazing
              tenderly down into her face; “I won't ask you to come with me now,
              but will you be ready to come when I am here again?”
            </TextNode>

            <TextNode>
              “And when will that be?” she asked, blushing and laughing.
            </TextNode>

            <TextNode>
              “A couple of months at the outside. I will come and claim you
              then, my darling. There's no one who can stand between us.”
            </TextNode>

            <TextNode>“And how about father?” she asked.</TextNode>

            <TextNode>
              “He has given his consent, provided we get these mines working all
              right. I have no fear on that head.”
            </TextNode>

            <TextNode>
              “Oh, well; of course, if you and father have arranged it all,
              there's no more to be said,” she whispered, with her cheek against
              his broad breast.
            </TextNode>

            <TextNode>
              “Thank God!” he said, hoarsely, stooping and kissing her. “It is
              settled, then. The longer I stay, the harder it will be to go.
              They are waiting for me at the cañon. Good-bye, my own
              darling—good-bye. In two months you shall see me.”
            </TextNode>

            <TextNode>
              He tore himself from her as he spoke, and, flinging himself upon
              his horse, galloped furiously away, never even looking round, as
              though afraid that his resolution might fail him if he took one
              glance at what he was leaving. She stood at the gate, gazing after
              him until he vanished from her sight. Then she walked back into
              the house, the happiest girl in all Utah.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page26;
