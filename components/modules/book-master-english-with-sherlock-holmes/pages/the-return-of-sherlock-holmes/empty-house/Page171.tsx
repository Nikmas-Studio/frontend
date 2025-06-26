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

function Page171({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;EMPTY&nbsp;HOUSE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “You may think that I read the papers with some attention during
              my sojourn in France, on the look-out for any chance of laying him
              by the heels. So long as he was free in London my life would
              really not have been worth living. Night and day the shadow would
              have been over me, and sooner or later his chance must have come.
              What could I do? I could not shoot him at sight, or I should
              myself be in the dock. There was no use appealing to a magistrate.
              They cannot interfere on the strength of what would appear to them
              to be a wild suspicion. So I could do nothing. But I watched the
              criminal news, knowing that sooner or later I should get him. Then
              came the death of this Ronald Adair. My chance had come at last!
              Knowing what I did, was it not certain that Colonel Moran had done
              it? He had played cards with the lad; he had followed him home
              from the club; he had shot him through the open window. There was
              not a doubt of it. The bullets alone are enough to put his head in
              a noose. I came over at once. I was seen by the sentinel, who
              would, I knew, direct the Colonel's attention to my presence. He
              could not fail to connect my sudden return with his crime and to
              be terribly alarmed. I was sure that he would make an attempt to
              get me out of the way at once, and would bring round his murderous
              weapon for that purpose. I left him an excellent mark in the
              window, and, having warned the police that they might be needed—by
              the way, Watson, you spotted their presence in that doorway with
              unerring accuracy—I took up what seemed to me to be a judicious
              post for observation, never dreaming that he would choose the same
              spot for his attack. Now, my dear Watson, does anything remain for
              me to explain?”
            </TextNode>

            <TextNode>
              “Yes,” said I. “You have not made it clear what was Colonel
              Moran's motive in murdering the Honourable Ronald Adair.”
            </TextNode>

            <TextNode>
              “Ah! my dear Watson, there we come into those realms of conjecture
              where the most logical mind may be at fault. Each may form his own
              hypothesis upon the present evidence, and yours is as likely to be
              correct as mine.”
            </TextNode>

            <TextNode>“You have formed one, then?”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I think that it is not difficult to explain the facts. It came
              out in evidence that Colonel Moran and young Adair had between
              them won a considerable amount of money. Now, Moran undoubtedly
              played foul—of that I have long been aware. I believe that on the
              day of the murder Adair had discovered that Moran was cheating.
              Very likely he had spoken to him privately, and had threatened to
              expose him unless he voluntarily resigned his membership of the
              club and promised not to play cards again. It is unlikely that a
              youngster like Adair would at once make a hideous scandal by
              exposing a well-known man so much older than himself. Probably he
              acted as I suggest. The exclusion from his clubs would mean ruin
              to Moran, who lived by his ill-gotten card gains. He therefore
              murdered Adair, who at the time was endeavouring to work out how
              much money he should himself return, since he could not profit by
              his partner's foul play. He locked the door lest the ladies should
              surprise him and insist upon knowing what he was doing with these
              names and coins. Will it pass?”
            </TextNode>

            <TextNode>
              “I have no doubt that you have hit upon the truth.”
            </TextNode>

            <TextNode>
              “It will be verified or disproved at the trial. Meanwhile, come
              what may, Colonel Moran will trouble us no more, the famous
              air-gun of Von Herder will embellish the Scotland Yard Museum, and
              once again Mr. Sherlock Holmes is free to devote his life to
              examining those interesting little problems which the complex life
              of London so plentifully presents.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page171;
