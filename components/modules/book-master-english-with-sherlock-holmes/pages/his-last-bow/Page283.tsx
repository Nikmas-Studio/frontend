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

function Page283({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;RED&nbsp;CIRCLE'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“She saw us.”</TextNode>

            <TextNode>
              “Well, she saw something to alarm her. That is certain. The
              general sequence of events is pretty clear, is it not? A couple
              seek refuge in London from a very terrible and instant danger. The
              measure of that danger is the rigour of their precautions. The
              man, who has some work which he must do, desires to leave the
              woman in absolute safety while he does it. It is not an easy
              problem, but he solved it in an original fashion, and so
              effectively that her presence was not even known to the landlady
              who supplies her with food. The printed messages, as is now
              evident, were to prevent her sex being discovered by her writing.
              The man cannot come near the woman, or he will guide their enemies
              to her. Since he cannot communicate with her direct, he has
              recourse to the agony column of a paper. So far all is clear.”
            </TextNode>

            <TextNode>“But what is at the root of it?”</TextNode>

            <TextNode>
              “Ah, yes, Watson—severely practical, as usual! What is at the root
              of it all? Mrs. Warren's whimsical problem enlarges somewhat and
              assumes a more sinister aspect as we proceed. This much we can
              say: that it is no ordinary love escapade. You saw the woman's
              face at the sign of danger. We have heard, too, of the attack upon
              the landlord, which was undoubtedly meant for the lodger. These
              alarms, and the desperate need for secrecy, argue that the matter
              is one of life or death. The attack upon Mr. Warren further shows
              that the enemy, whoever they are, are themselves not aware of the
              substitution of the female lodger for the male. It is very curious
              and complex, Watson.”
            </TextNode>

            <TextNode>
              “Why should you go further in it? What have you to gain from it?”
            </TextNode>

            <TextNode>
              “What, indeed? It is art for art's sake, Watson. I suppose when
              you doctored you found yourself studying cases without thought of
              a fee?”
            </TextNode>

            <TextNode>“For my education, Holmes.”</TextNode>

            <TextNode>
              “Education never ends, Watson. It is a series of lessons with the
              greatest for the last. This is an instructive case. There is
              neither money nor credit in it, and yet one would wish to tidy it
              up. When dusk comes we should find ourselves one stage advanced in
              our investigation.”
            </TextNode>

            <TextNode>
              When we returned to Mrs. Warren's rooms, the gloom of a London
              winter evening had thickened into one gray curtain, a dead
              monotone of colour, broken only by the sharp yellow squares of the
              windows and the blurred haloes of the gas-lamps. As we peered from
              the darkened sitting-room of the lodging-house, one more dim light
              glimmered high up through the obscurity.
            </TextNode>

            <TextNode>
              “Someone is moving in that room,” said Holmes in a whisper, his
              gaunt and eager face thrust forward to the window-pane. “Yes, I
              can see his shadow. There he is again! He has a candle in his
              hand. Now he is peering across. He wants to be sure that she is on
              the lookout. Now he begins to flash. Take the message also,
              Watson, that we may check each other. A single flash—that is A,
              surely. Now, then. How many did you make it? Twenty. Do did In.
              That should mean T. AT—that's intelligible enough. Another T.
              Surely this is the beginning of a second word. Now, then—TENTA.
              Dead stop. That can't be all, Watson? ATTENTA gives no sense. Nor
              is it any better as three words AT, TEN, TA, unless T. A. are a
              person's initials. There it goes again! What's that? ATTE—why, it
              is the same message over again. Curious, Watson, very curious. Now
              he is off once more! AT—why he is repeating it for the third time.
              ATTENTA three times! How often will he repeat it? No, that seems
              to be the finish. He has withdrawn form the window. What do you
              make of it, Watson?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“A cipher message, Holmes.”</TextNode>

            <TextNode>
              My companion gave a sudden chuckle of comprehension. “And not a
              very obscure cipher, Watson,” said he. “Why, of course, it is
              Italian! The A means that it is addressed to a woman. ‘Beware!
              Beware! Beware!’ How's that, Watson?
            </TextNode>

            <TextNode>“I believe you have hit it.”</TextNode>

            <TextNode>
              “Not a doubt of it. It is a very urgent message, thrice repeated
              to make it more so. But beware of what? Wait a bit, he is coming
              to the window once more.”
            </TextNode>

            <TextNode>
              Again we saw the dim silhouette of a crouching man and the whisk
              of the small flame across the window as the signals were renewed.
              They came more rapidly than before—so rapid that it was hard to
              follow them.
            </TextNode>

            <TextNode>
              “PERICOLO—pericolo—eh, what's that, Watson? ‘Danger,’ isn't it?
              Yes, by Jove, it's a danger signal. There he goes again! PERI.
              Halloa, what on earth—”
            </TextNode>

            <TextNode>
              The light had suddenly gone out, the glimmering square of window
              had disappeared, and the third floor formed a dark band round the
              lofty building, with its tiers of shining casements. That last
              warning cry had been suddenly cut short. How, and by whom? The
              same thought occurred on the instant to us both. Holmes sprang up
              from where he crouched by the window.
            </TextNode>

            <TextNode>
              “This is serious, Watson,” he cried. “There is some devilry going
              forward! Why should such a message stop in such a way? I should
              put Scotland Yard in touch with this business—and yet, it is too
              pressing for us to leave.”
            </TextNode>

            <TextNode>“Shall I go for the police?”</TextNode>

            <TextNode>
              “We must define the situation a little more clearly. It may bear
              some more innocent interpretation. Come, Watson, let us go across
              ourselves and see what we can make of it.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page283;
