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

function Page262({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;VALLEY&nbsp;OF&nbsp;FEAR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “What about—” he jerked his thumb upward to signify the coining
              plant.
            </TextNode>

            <TextNode>
              “All right,” whispered McMurdo, who had devised a safe hiding
              place under the floor.
            </TextNode>

            <TextNode>
              “I'll bid you good-bye,” said the Boss, shaking hands. “I'll see
              Reilly the lawyer and take the defense upon myself. Take my word
              for it that they won't be able to hold you.”
            </TextNode>

            <TextNode>
              “I wouldn't bet on that. Guard the prisoner, you two, and shoot
              him if he tries any games. I'll search the house before I leave.”
            </TextNode>

            <TextNode>
              He did so; but apparently found no trace of the concealed plant.
              When he had descended he and his men escorted McMurdo to
              headquarters. Darkness had fallen, and a keen blizzard was blowing
              so that the streets were nearly deserted; but a few loiterers
              followed the group, and emboldened by invisibility shouted
              imprecations at the prisoner.
            </TextNode>

            <TextNode>
              “Lynch the cursed Scowrer!” they cried. “Lynch him!” They laughed
              and jeered as he was pushed into the police station. After a
              short, formal examination from the inspector in charge he was put
              into the common cell. Here he found Baldwin and three other
              criminals of the night before, all arrested that afternoon and
              waiting their trial next morning.
            </TextNode>

            <TextNode>
              But even within this inner fortress of the law the long arm of the
              Freemen was able to extend. Late at night there came a jailer with
              a straw bundle for their bedding, out of which he extracted two
              bottles of whisky, some glasses, and a pack of cards. They spent a
              hilarious night, without an anxious thought as to the ordeal of
              the morning.
            </TextNode>

            <TextNode>
              Nor had they cause, as the result was to show. The magistrate
              could not possibly, on the evidence, have held them for a higher
              court. On the one hand the compositors and pressmen were forced to
              admit that the light was uncertain, that they were themselves much
              perturbed, and that it was difficult for them to swear to the
              identity of the assailants; although they believed that the
              accused were among them. Cross examined by the clever attorney who
              had been engaged by McGinty, they were even more nebulous in their
              evidence.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The injured man had already deposed that he was so taken by
              surprise by the suddenness of the attack that he could state
              nothing beyond the fact that the first man who struck him wore a
              moustache. He added that he knew them to be Scowrers, since no one
              else in the community could possibly have any enmity to him, and
              he had long been threatened on account of his outspoken
              editorials. On the other hand, it was clearly shown by the united
              and unfaltering evidence of six citizens, including that high
              municipal official, Councillor McGinty, that the men had been at a
              card party at the Union House until an hour very much later than
              the commission of the outrage.
            </TextNode>

            <TextNode>
              Needless to say that they were discharged with something very near
              to an apology from the bench for the inconvenience to which they
              had been put, together with an implied censure of Captain Marvin
              and the police for their officious zeal.
            </TextNode>

            <TextNode>
              The verdict was greeted with loud applause by a court in which
              McMurdo saw many familiar faces. Brothers of the lodge smiled and
              waved. But there were others who sat with compressed lips and
              brooding eyes as the men filed out of the dock. One of them, a
              little, dark-bearded, resolute fellow, put the thoughts of himself
              and comrades into words as the ex-prisoners passed him.
            </TextNode>

            <TextNode>
              “You damned murderers!” he said. “We'll fix you yet!”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page262;
