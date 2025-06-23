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

function Page18({
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
              “Yes,” said Holmes; “by John Underwood and Sons, 129, Camberwell
              Road.”
            </TextNode>

            <TextNode>Gregson looked quite crest-fallen.</TextNode>

            <TextNode>
              “I had no idea that you noticed that,” he said. “Have you been
              there?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “Ha!” cried Gregson, in a relieved voice; “you should never
              neglect a chance, however small it may seem.”
            </TextNode>

            <TextNode>
              “To a great mind, nothing is little,” remarked Holmes,
              sententiously.
            </TextNode>

            <TextNode>
              “Well, I went to Underwood, and asked him if he had sold a hat of
              that size and description. He looked over his books, and came on
              it at once. He had sent the hat to a Mr. Drebber, residing at
              Charpentier's Boarding Establishment, Torquay Terrace. Thus I got
              at his address.”
            </TextNode>

            <TextNode>“Smart—very smart!” murmured Sherlock Holmes.</TextNode>

            <TextNode>
              “I next called upon Madame Charpentier,” continued the detective.
              “I found her very pale and distressed. Her daughter was in the
              room, too—an uncommonly fine girl she is, too; she was looking red
              about the eyes and her lips trembled as I spoke to her. That
              didn't escape my notice. I began to smell a rat. You know the
              feeling, Mr. Sherlock Holmes, when you come upon the right scent—a
              kind of thrill in your nerves. ‘Have you heard of the mysterious
              death of your late boarder Mr. Enoch J. Drebber, of Cleveland?’ I
              asked.
            </TextNode>

            <TextNode>
              “The mother nodded. She didn't seem able to get out a word. The
              daughter burst into tears. I felt more than ever that these people
              knew something of the matter.
            </TextNode>

            <TextNode>
              “ ‘At what o'clock did Mr. Drebber leave your house for the
              train?’ I asked.
            </TextNode>

            <TextNode>
              “ ‘At eight o'clock,’ she said, gulping in her throat to keep down
              her agitation. ‘His secretary, Mr. Stangerson, said that there
              were two trains—one at 9.15 and one at 11. He was to catch the
              first.’
            </TextNode>

            <TextNode>“ ‘And was that the last which you saw of him?’</TextNode>

            <TextNode>
              “A terrible change came over the woman's face as I asked the
              question. Her features turned perfectly livid. It was some seconds
              before she could get out the single word ‘Yes’—and when it did
              come it was in a husky unnatural tone.
            </TextNode>

            <TextNode>
              “There was silence for a moment, and then the daughter spoke in a
              calm clear voice.
            </TextNode>

            <TextNode>
              “ ‘No good can ever come of falsehood, mother,’ she said. ‘Let us
              be frank with this gentleman. We did see Mr. Drebber again.’
            </TextNode>

            <TextNode>
              “ ‘God forgive you!’ cried Madame Charpentier, throwing up her
              hands and sinking back in her chair. ‘You have murdered your
              brother.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “ ‘Arthur would rather that we spoke the truth,’ the girl answered
              firmly.
            </TextNode>

            <TextNode>
              “ ‘You had best tell me all about it now,’ I said.
              ‘Half-confidences are worse than none. Besides, you do not know
              how much we know of it.’
            </TextNode>

            <TextNode>
              “ ‘On your head be it, Alice!’ cried her mother; and then, turning
              to me, ‘I will tell you all, sir. Do not imagine that my agitation
              on behalf of my son arises from any fear lest he should have had a
              hand in this terrible affair. He is utterly innocent of it. My
              dread is, however, that in your eyes and in the eyes of others he
              may appear to be compromised. That however is surely impossible.
              His high character, his profession, his antecedents would all
              forbid it.’
            </TextNode>

            <TextNode>
              “ ‘Your best way is to make a clean breast of the facts,’ I
              answered. ‘Depend upon it, if your son is innocent he will be none
              the worse.’
            </TextNode>
            <TextNode>
              “ ‘Perhaps, Alice, you had better leave us together,’ she said,
              and her daughter withdrew. ‘Now, sir,’ she continued, ‘I had no
              intention of telling you all this, but since my poor daughter has
              disclosed it I have no alternative. Having once decided to speak,
              I will tell you all without omitting any particular.’
            </TextNode>

            <TextNode>“ ‘It is your wisest course,’ said I.</TextNode>
            <TextNode>
              “ ‘Mr. Drebber has been with us nearly three weeks. He and his
              secretary, Mr. Stangerson, had been travelling on the Continent. I
              noticed a “Copenhagen” label upon each of their trunks, showing
              that that had been their last stopping place. Stangerson was a
              quiet reserved man, but his employer, I am sorry to say, was far
              otherwise. He was coarse in his habits and brutish in his ways.
              The very night of his arrival he became very much the worse for
              drink, and, indeed, after twelve o'clock in the day he could
              hardly ever be said to be sober. His manners towards the
              maid-servants were disgustingly free and familiar. Worst of all,
              he speedily assumed the same attitude towards my daughter, Alice,
              and spoke to her more than once in a way which, fortunately, she
              is too innocent to understand. On one occasion he actually seized
              her in his arms and embraced her—an outrage which caused his own
              secretary to reproach him for his unmanly conduct.’
            </TextNode>

            <TextNode>
              “ ‘But why did you stand all this,’ I asked. ‘I suppose that you
              can get rid of your boarders when you wish.’
            </TextNode>

            <TextNode>
              “Mrs. Charpentier blushed at my pertinent question. ‘Would to God
              that I had given him notice on the very day that he came,’ she
              said. ‘But it was a sore temptation. They were paying a pound a
              day each—fourteen pounds a week, and this is the slack season. I
              am a widow, and my boy in the Navy has cost me much. I grudged to
              lose the money. I acted for the best. This last was too much,
              however, and I gave him notice to leave on account of it. That was
              the reason of his going.’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page18;
