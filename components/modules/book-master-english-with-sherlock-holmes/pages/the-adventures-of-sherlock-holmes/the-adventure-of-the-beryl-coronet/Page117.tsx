import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page117({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BERYL&nbsp;CORONET'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “On entering the house, however, I examined, as you remember, the
              sill and framework of the hall window with my lens, and I could at
              once see that someone had passed out. I could distinguish the
              outline of an instep where the wet foot had been placed in coming
              in. I was then beginning to be able to form an opinion as to what
              had occurred. A man had waited outside the window; someone had
              brought the gems; the deed had been overseen by your son; he had
              pursued the thief; had struggled with him; they had each tugged at
              the coronet, their united strength causing injuries which neither
              alone could have effected. He had returned with the prize, but had
              left a fragment in the grasp of his opponent. So far I was clear.
              The question now was, who was the man and who was it brought him
              the coronet?
            </TextNode>

            <TextNode>
              “It is an old maxim of mine that when you have excluded the
              impossible, whatever remains, however improbable, must be the
              truth. Now, I knew that it was not you who had brought it down, so
              there only remained your niece and the maids. But if it were the
              maids, why should your son allow himself to be accused in their
              place? There could be no possible reason. As he loved his cousin,
              however, there was an excellent explanation why he should retain
              her secret—the more so as the secret was a disgraceful one. When I
              remembered that you had seen her at that window, and how she had
              fainted on seeing the coronet again, my conjecture became a
              certainty.
            </TextNode>

            <TextNode>
              “And who could it be who was her confederate? A lover evidently,
              for who else could outweigh the love and gratitude which she must
              feel to you? I knew that you went out little, and that your circle
              of friends was a very limited one. But among them was Sir George
              Burnwell. I had heard of him before as being a man of evil
              reputation among women. It must have been he who wore those boots
              and retained the missing gems. Even though he knew that Arthur had
              discovered him, he might still flatter himself that he was safe,
              for the lad could not say a word without compromising his own
              family.
            </TextNode>

            <TextNode>
              “Well, your own good sense will suggest what measures I took next.
              I went in the shape of a loafer to Sir George's house, managed to
              pick up an acquaintance with his valet, learned that his master
              had cut his head the night before, and, finally, at the expense of
              six shillings, made all sure by buying a pair of his cast-off
              shoes. With these I journeyed down to Streatham and saw that they
              exactly fitted the tracks.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I saw an ill-dressed vagabond in the lane yesterday evening,”
              said Mr. Holder.
            </TextNode>

            <TextNode>
              “Precisely. It was I. I found that I had my man, so I came home
              and changed my clothes. It was a delicate part which I had to play
              then, for I saw that a prosecution must be avoided to avert
              scandal, and I knew that so astute a villain would see that our
              hands were tied in the matter. I went and saw him. At first, of
              course, he denied everything. But when I gave him every particular
              that had occurred, he tried to bluster and took down a
              life-preserver from the wall. I knew my man, however, and I
              clapped a pistol to his head before he could strike. Then he
              became a little more reasonable. I told him that we would give him
              a price for the stones he held—£1000 apiece. That brought out the
              first signs of grief that he had shown. ‘Why, dash it all!’ said
              he, ‘I've let them go at six hundred for the three!’ I soon
              managed to get the address of the receiver who had them, on
              promising him that there would be no prosecution. Off I set to
              him, and after much chaffering I got our stones at 1000 pounds
              apiece. Then I looked in upon your son, told him that all was
              right, and eventually got to my bed about two o'clock, after what
              I may call a really hard day's work.”
            </TextNode>

            <TextNode>
              “A day which has saved England from a great public scandal,” said
              the banker, rising. “Sir, I cannot find words to thank you, but
              you shall not find me ungrateful for what you have done. Your
              skill has indeed exceeded all that I have heard of it. And now I
              must fly to my dear boy to apologise to him for the wrong which I
              have done him. As to what you tell me of poor Mary, it goes to my
              very heart. Not even your skill can inform me where she is now.”
            </TextNode>

            <TextNode>
              “I think that we may safely say,” returned Holmes, “that she is
              wherever Sir George Burnwell is. It is equally certain, too, that
              whatever her sins are, they will soon receive a more than
              sufficient punishment.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page117;
