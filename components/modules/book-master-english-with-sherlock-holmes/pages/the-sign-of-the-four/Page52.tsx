import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page52({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <H4>
          Chapter IX.
          <br />A Break in the Chain
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was late in the afternoon before I woke, strengthened and
              refreshed. Sherlock Holmes still sat exactly as I had left him,
              save that he had laid aside his violin and was deep in a book. He
              looked across at me, as I stirred, and I noticed that his face was
              dark and troubled.
            </TextNode>

            <TextNode>
              “You have slept soundly,” he said. “I feared that our talk would
              wake you.”
            </TextNode>

            <TextNode>
              “I heard nothing,” I answered. “Have you had fresh news, then?”
            </TextNode>

            <TextNode>
              “Unfortunately, no. I confess that I am surprised and
              disappointed. I expected something definite by this time. Wiggins
              has just been up to report. He says that no trace can be found of
              the launch. It is a provoking check, for every hour is of
              importance.”
            </TextNode>

            <TextNode>
              “Can I do anything? I am perfectly fresh now, and quite ready for
              another night's outing.”
            </TextNode>

            <TextNode>
              “No, we can do nothing. We can only wait. If we go ourselves, the
              message might come in our absence, and delay be caused. You can do
              what you will, but I must remain on guard.”
            </TextNode>

            <TextNode>
              “Then I shall run over to Camberwell and call upon Mrs. Cecil
              Forrester. She asked me to, yesterday.”
            </TextNode>

            <TextNode>
              “On Mrs. Cecil Forrester?” asked Holmes, with the twinkle of a
              smile in his eyes.
            </TextNode>

            <TextNode>
              “Well, of course Miss Morstan too. They were anxious to hear what
              happened.”
            </TextNode>

            <TextNode>
              “I would not tell them too much,” said Holmes. “Women are never to
              be entirely trusted,—not the best of them.”
            </TextNode>

            <TextNode>
              I did not pause to argue over this atrocious sentiment. “I shall
              be back in an hour or two,” I remarked.
            </TextNode>

            <TextNode>
              “All right! Good luck! But, I say, if you are crossing the river
              you may as well return Toby, for I don't think it is at all likely
              that we shall have any use for him now.”
            </TextNode>

            <TextNode>
              I took our mongrel accordingly, and left him, together with a
              half-sovereign, at the old naturalist's in Pinchin Lane. At
              Camberwell I found Miss Morstan a little weary after her night's
              adventures, but very eager to hear the news. Mrs. Forrester, too,
              was full of curiosity. I told them all that we had done,
              suppressing, however, the more dreadful parts of the tragedy.
              Thus, although I spoke of Mr. Sholto's death, I said nothing of
              the exact manner and method of it. With all my omissions, however,
              there was enough to startle and amaze them.
            </TextNode>

            <TextNode>
              “It is a romance!” cried Mrs. Forrester. “An injured lady, half a
              million in treasure, a black cannibal, and a wooden-legged
              ruffian. They take the place of the conventional dragon or wicked
              earl.”
            </TextNode>

            <TextNode>
              “And two knight-errants to the rescue,” added Miss Morstan, with a
              bright glance at me.
            </TextNode>

            <TextNode>
              “Why, Mary, your fortune depends upon the issue of this search. I
              don't think that you are nearly excited enough. Just imagine what
              it must be to be so rich, and to have the world at your feet!”
            </TextNode>

            <TextNode>
              It sent a little thrill of joy to my heart to notice that she
              showed no sign of elation at the prospect. On the contrary, she
              gave a toss of her proud head, as though the matter were one in
              which she took small interest.
            </TextNode>

            <TextNode>
              “It is for Mr. Thaddeus Sholto that I am anxious,” she said.
              “Nothing else is of any consequence; but I think that he has
              behaved most kindly and honorably throughout. It is our duty to
              clear him of this dreadful and unfounded charge.”
            </TextNode>

            <TextNode>
              It was evening before I left Camberwell, and quite dark by the
              time I reached home. My companion's book and pipe lay by his
              chair, but he had disappeared. I looked about in the hope of
              seeing a note, but there was none.
            </TextNode>

            <TextNode>
              “I suppose that Mr. Sherlock Holmes has gone out,” I said to Mrs.
              Hudson as she came up to lower the blinds.
            </TextNode>

            <TextNode>
              “No, sir. He has gone to his room, sir. Do you know, sir,” sinking
              her voice into an impressive whisper, “I am afraid for his
              health?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Why so, Mrs. Hudson?”</TextNode>

            <TextNode>
              “Well, he's that strange, sir. After you was gone he walked and he
              walked, up and down, and up and down, until I was weary of the
              sound of his footstep. Then I heard him talking to himself and
              muttering, and every time the bell rang out he came on the
              stairhead, with ‘What is that, Mrs. Hudson?’ And now he has
              slammed off to his room, but I can hear him walking away the same
              as ever. I hope he's not going to be ill, sir. I ventured to say
              something to him about cooling medicine, but he turned on me, sir,
              with such a look that I don't know how ever I got out of the
              room.”
            </TextNode>

            <TextNode>
              “I don't think that you have any cause to be uneasy, Mrs. Hudson,”
              I answered. “I have seen him like this before. He has some small
              matter upon his mind which makes him restless.” I tried to speak
              lightly to our worthy landlady, but I was myself somewhat uneasy
              when through the long night I still from time to time heard the
              dull sound of his tread, and knew how his keen spirit was chafing
              against this involuntary inaction.
            </TextNode>

            <TextNode>
              At breakfast-time he looked worn and haggard, with a little fleck
              of feverish color upon either cheek.
            </TextNode>

            <TextNode>
              “You are knocking yourself up, old man,” I remarked. “I heard you
              marching about in the night.”
            </TextNode>

            <TextNode>
              “No, I could not sleep,” he answered. “This infernal problem is
              consuming me. It is too much to be balked by so petty an obstacle,
              when all else had been overcome. I know the men, the launch,
              everything; and yet I can get no news. I have set other agencies
              at work, and used every means at my disposal. The whole river has
              been searched on either side, but there is no news, nor has Mrs.
              Smith heard of her husband. I shall come to the conclusion soon
              that they have scuttled the craft. But there are objections to
              that.”
            </TextNode>

            <TextNode>
              “Or that Mrs. Smith has put us on a wrong scent.”
            </TextNode>

            <TextNode>
              “No, I think that may be dismissed. I had inquiries made, and
              there is a launch of that description.”
            </TextNode>

            <TextNode>“Could it have gone up the river?”</TextNode>

            <TextNode>
              “I have considered that possibility too, and there is a
              search-party who will work up as far as Richmond. If no news comes
              to-day, I shall start off myself to-morrow, and go for the men
              rather than the boat. But surely, surely, we shall hear
              something.”
            </TextNode>

            <TextNode>
              We did not, however. Not a word came to us either from Wiggins or
              from the other agencies. There were articles in most of the papers
              upon the Norwood tragedy. They all appeared to be rather hostile
              to the unfortunate Thaddeus Sholto. No fresh details were to be
              found, however, in any of them, save that an inquest was to be
              held upon the following day. I walked over to Camberwell in the
              evening to report our ill success to the ladies, and on my return
              I found Holmes dejected and somewhat morose. He would hardly reply
              to my questions, and busied himself all evening in an abstruse
              chemical analysis which involved much heating of retorts and
              distilling of vapors, ending at last in a smell which fairly drove
              me out of the apartment. Up to the small hours of the morning I
              could hear the clinking of his test-tubes which told me that he
              was still engaged in his malodorous experiment.
            </TextNode>

            <TextNode>
              In the early dawn I woke with a start, and was surprised to find
              him standing by my bedside, clad in a rude sailor dress with a
              pea-jacket, and a coarse red scarf round his neck.
            </TextNode>

            <TextNode>
              “I am off down the river, Watson,” said he. “I have been turning
              it over in my mind, and I can see only one way out of it. It is
              worth trying, at all events.”
            </TextNode>

            <TextNode>“Surely I can come with you, then?” said I.</TextNode>

            <TextNode>
              “No; you can be much more useful if you will remain here as my
              representative. I am loath to go, for it is quite on the cards
              that some message may come during the day, though Wiggins was
              despondent about it last night. I want you to open all notes and
              telegrams, and to act on your own judgment if any news should
              come. Can I rely upon you?”
            </TextNode>

            <TextNode>“Most certainly.”</TextNode>

            <TextNode>
              “I am afraid that you will not be able to wire to me, for I can
              hardly tell yet where I may find myself. If I am in luck, however,
              I may not be gone so very long. I shall have news of some sort or
              other before I get back.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page52;
