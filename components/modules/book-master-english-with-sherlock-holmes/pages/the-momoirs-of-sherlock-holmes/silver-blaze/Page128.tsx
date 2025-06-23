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

function Page128({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='SILVER&nbsp;BLAZE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Before deciding that question I had grasped the significance of
              the silence of the dog, for one true inference invariably suggests
              others. The Simpson incident had shown me that a dog was kept in
              the stables, and yet, though some one had been in and had fetched
              out a horse, he had not barked enough to arouse the two lads in
              the loft. Obviously the midnight visitor was some one whom the dog
              knew well.
            </TextNode>

            <TextNode>
              “I was already convinced, or almost convinced, that John Straker
              went down to the stables in the dead of the night and took out
              Silver Blaze. For what purpose? For a dishonest one, obviously, or
              why should he drug his own stable-boy? And yet I was at a loss to
              know why. There have been cases before now where trainers have
              made sure of great sums of money by laying against their own
              horses, through agents, and then preventing them from winning by
              fraud. Sometimes it is a pulling jockey. Sometimes it is some
              surer and subtler means. What was it here? I hoped that the
              contents of his pockets might help me to form a conclusion.
            </TextNode>

            <TextNode>
              “And they did so. You cannot have forgotten the singular knife
              which was found in the dead man's hand, a knife which certainly no
              sane man would choose for a weapon. It was, as Dr. Watson told us,
              a form of knife which is used for the most delicate operations
              known in surgery. And it was to be used for a delicate operation
              that night. You must know, with your wide experience of turf
              matters, Colonel Ross, that it is possible to make a slight nick
              upon the tendons of a horse's ham, and to do it subcutaneously, so
              as to leave absolutely no trace. A horse so treated would develop
              a slight lameness, which would be put down to a strain in exercise
              or a touch of rheumatism, but never to foul play.”
            </TextNode>

            <TextNode>“Villain! Scoundrel!” cried the Colonel.</TextNode>

            <TextNode>
              “We have here the explanation of why John Straker wished to take
              the horse out on to the moor. So spirited a creature would have
              certainly roused the soundest of sleepers when it felt the prick
              of the knife. It was absolutely necessary to do it in the open
              air.”
            </TextNode>

            <TextNode>
              “I have been blind!” cried the Colonel. “Of course that was why he
              needed the candle, and struck the match.”
            </TextNode>

            <TextNode>
              “Undoubtedly. But in examining his belongings I was fortunate
              enough to discover not only the method of the crime, but even its
              motives. As a man of the world, Colonel, you know that men do not
              carry other people's bills about in their pockets. We have most of
              us quite enough to do to settle our own. I at once concluded that
              Straker was leading a double life, and keeping a second
              establishment. The nature of the bill showed that there was a lady
              in the case, and one who had expensive tastes. Liberal as you are
              with your servants, one can hardly expect that they can buy
              twenty-guinea walking dresses for their ladies. I questioned Mrs.
              Straker as to the dress without her knowing it, and having
              satisfied myself that it had never reached her, I made a note of
              the milliner's address, and felt that by calling there with
              Straker's photograph I could easily dispose of the mythical
              Derbyshire.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “From that time on all was plain. Straker had led out the horse to
              a hollow where his light would be invisible. Simpson in his flight
              had dropped his cravat, and Straker had picked it up—with some
              idea, perhaps, that he might use it in securing the horse's leg.
              Once in the hollow, he had got behind the horse and had struck a
              light; but the creature frightened at the sudden glare, and with
              the strange instinct of animals feeling that some mischief was
              intended, had lashed out, and the steel shoe had struck Straker
              full on the forehead. He had already, in spite of the rain, taken
              off his overcoat in order to do his delicate task, and so, as he
              fell, his knife gashed his thigh. Do I make it clear?”
            </TextNode>

            <TextNode>
              “Wonderful!” cried the Colonel. “Wonderful! You might have been
              there!”
            </TextNode>

            <TextNode>
              “My final shot was, I confess a very long one. It struck me that
              so astute a man as Straker would not undertake this delicate
              tendon-nicking without a little practice. What could he practice
              on? My eyes fell upon the sheep, and I asked a question which,
              rather to my surprise, showed that my surmise was correct.
            </TextNode>

            <TextNode>
              “When I returned to London I called upon the milliner, who had
              recognized Straker as an excellent customer of the name of
              Derbyshire, who had a very dashing wife, with a strong partiality
              for expensive dresses. I have no doubt that this woman had plunged
              him over head and ears in debt, and so led him into this miserable
              plot.”
            </TextNode>

            <TextNode>
              “You have explained all but one thing,” cried the Colonel. “Where
              was the horse?”
            </TextNode>

            <TextNode>
              “Ah, it bolted, and was cared for by one of your neighbors. We
              must have an amnesty in that direction, I think. This is Clapham
              Junction, if I am not mistaken, and we shall be in Victoria in
              less than ten minutes. If you care to smoke a cigar in our rooms,
              Colonel, I shall be happy to give you any other details which
              might interest you.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page128;
