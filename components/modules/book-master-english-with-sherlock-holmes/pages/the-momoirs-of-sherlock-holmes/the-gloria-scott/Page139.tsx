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

function Page139({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE “GLORIA SCOTT”'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “ ‘It was a long hour before we reached it, and at first we feared
              that we had come too late to save any one. A splintered boat and a
              number of crates and fragments of spars rising and falling on the
              waves showed us where the vessel had foundered; but there was no
              sign of life, and we had turned away in despair when we heard a
              cry for help, and saw at some distance a piece of wreckage with a
              man lying stretched across it. When we pulled him aboard the boat
              he proved to be a young seaman of the name of Hudson, who was so
              burned and exhausted that he could give us no account of what had
              happened until the following morning.
            </TextNode>

            <TextNode>
              “ ‘It seemed that after we had left, Prendergast and his gang had
              proceeded to put to death the five remaining prisoners. The two
              warders had been shot and thrown overboard, and so also had the
              third mate. Prendergast then descended into the 'tween-decks and
              with his own hands cut the throat of the unfortunate surgeon.
              There only remained the first mate, who was a bold and active man.
              When he saw the convict approaching him with the bloody knife in
              his hand he kicked off his bonds, which he had somehow contrived
              to loosen, and rushing down the deck he plunged into the
              after-hold. A dozen convicts, who descended with their pistols in
              search of him, found him with a match-box in his hand seated
              beside an open powder-barrel, which was one of a hundred carried
              on board, and swearing that he would blow all hands up if he were
              in any way molested. An instant later the explosion occurred,
              though Hudson thought it was caused by the misdirected bullet of
              one of the convicts rather than the mate's match. Be the cause
              what I may, it was the end of the&nbsp;
              <span className='italic'>Gloria&nbsp;Scott</span> and of the
              rabble who held command of her.
            </TextNode>

            <TextNode>
              “ ‘Such, in a few words, my dear boy, is the history of this
              terrible business in which I was involved. Next day we were picked
              up by the brig <span className='italic'>Hotspur</span>, bound for
              Australia, whose captain found no difficulty in believing that we
              were the survivors of a passenger ship which had foundered. The
              transport ship <span className='italic'>Gloria&nbsp;Scott</span>{' '}
              was set down by the Admiralty as being lost at sea, and no word
              has ever leaked out as to her true fate. After an excellent voyage
              the
              <span className='italic'>Hotspur</span> landed us at Sydney, where
              Evans and I changed our names and made our way to the diggings,
              where, among the crowds who were gathered from all nations, we had
              no difficulty in losing our former identities. The rest I need not
              relate. We prospered, we traveled, we came back as rich colonials
              to England, and we bought country estates. For more than twenty
              years we have led peaceful and useful lives, and we hoped that our
              past was forever buried. Imagine, then, my feelings when in the
              seaman who came to us I recognized instantly the man who had been
              picked off the wreck. He had tracked us down somehow, and had set
              himself to live upon our fears. You will understand now how it was
              that I strove to keep the peace with him, and you will in some
              measure sympathize with me in the fears which fill me, now that he
              has gone from me to his other victim with threats upon his
              tongue.’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Underneath is written in a hand so shaky as to be hardly legible,
              ‘Beddoes writes in cipher to say H. has told all. Sweet Lord, have
              mercy on our souls!’
            </TextNode>

            <TextNode>
              “That was the narrative which I read that night to young Trevor,
              and I think, Watson, that under the circumstances it was a
              dramatic one. The good fellow was heart-broken at it, and went out
              to the Terai tea planting, where I hear that he is doing well. As
              to the sailor and Beddoes, neither of them was ever heard of again
              after that day on which the letter of warning was written. They
              both disappeared utterly and completely. No complaint had been
              lodged with the police, so that Beddoes had mistaken a threat for
              a deed. Hudson had been seen lurking about, and it was believed by
              the police that he had done away with Beddoes and had fled. For
              myself I believe that the truth was exactly the opposite. I think
              that it is most probable that Beddoes, pushed to desperation and
              believing himself to have been already betrayed, had revenged
              himself upon Hudson, and had fled from the country with as much
              money as he could lay his hands on. Those are the facts of the
              case, Doctor, and if they are of any use to your collection, I am
              sure that they are very heartily at your service.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page139;
