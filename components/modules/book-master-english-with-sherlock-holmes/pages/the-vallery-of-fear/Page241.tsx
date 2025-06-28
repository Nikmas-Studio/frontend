import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page241({
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
      <BookMainContainer biggerTopPadding>
        <H4>
          Chapter I.
          <br />
          The Warning
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“I am inclined to think—” said I.</TextNode>

            <TextNode>
              “I should do so,” Sherlock Holmes remarked impatiently.
            </TextNode>

            <TextNode>
              I believe that I am one of the most long-suffering of mortals; but
              I'll admit that I was annoyed at the sardonic interruption.
            </TextNode>

            <TextNode>
              “Really, Holmes,” said I severely, “you are a little trying at
              times.”
            </TextNode>

            <TextNode>
              He was too much absorbed with his own thoughts to give any
              immediate answer to my remonstrance. He leaned upon his hand, with
              his untasted breakfast before him, and he stared at the slip of
              paper which he had just drawn from its envelope. Then he took the
              envelope itself, held it up to the light, and very carefully
              studied both the exterior and the flap.
            </TextNode>

            <TextNode>
              “It is Porlock's writing,” said he thoughtfully. “I can hardly
              doubt that it is Porlock's writing, though I have seen it only
              twice before. The Greek e with the peculiar top flourish is
              distinctive. But if it is Porlock, then it must be something of
              the very first importance.”
            </TextNode>

            <TextNode>
              He was speaking to himself rather than to me; but my vexation
              disappeared in the interest which the words awakened.
            </TextNode>

            <TextNode>“Who then is Porlock?” I asked.</TextNode>

            <TextNode>
              “Porlock, Watson, is a nom-de-plume, a mere identification mark;
              but behind it lies a shifty and evasive personality. In a former
              letter he frankly informed me that the name was not his own, and
              defied me ever to trace him among the teeming millions of this
              great city. Porlock is important, not for himself, but for the
              great man with whom he is in touch. Picture to yourself the pilot
              fish with the shark, the jackal with the lion—anything that is
              insignificant in companionship with what is formidable: not only
              formidable, Watson, but sinister—in the highest degree sinister.
              That is where he comes within my purview. You have heard me speak
              of Professor Moriarty?”
            </TextNode>

            <TextNode>
              “The famous scientific criminal, as famous among crooks as—”
            </TextNode>

            <TextNode>
              “My blushes, Watson!” Holmes murmured in a deprecating voice.
            </TextNode>

            <TextNode>
              “I was about to say, as he is unknown to the public.”
            </TextNode>

            <TextNode>
              “A touch! A distinct touch!” cried Holmes. “You are developing a
              certain unexpected vein of pawky humour, Watson, against which I
              must learn to guard myself. But in calling Moriarty a criminal you
              are uttering libel in the eyes of the law—and there lie the glory
              and the wonder of it! The greatest schemer of all time, the
              organizer of every deviltry, the controlling brain of the
              underworld, a brain which might have made or marred the destiny of
              nations—that's the man! But so aloof is he from general suspicion,
              so immune from criticism, so admirable in his management and
              self-effacement, that for those very words that you have uttered
              he could hale you to a court and emerge with your year's pension
              as a solatium for his wounded character. Is he not the celebrated
              author of&nbsp;
              <span className='italic'>The Dynamics of an Asteroid</span>, a
              book which ascends to such rarefied heights of pure mathematics
              that it is said that there was no man in the scientific press
              capable of criticizing it? Is this a man to traduce? Foul-mouthed
              doctor and slandered professor—such would be your respective
              roles! That's genius, Watson. But if I am spared by lesser men,
              our day will surely come.”
            </TextNode>

            <TextNode>
              “May I be there to see!” I exclaimed devoutly. “But you were
              speaking of this man Porlock.”
            </TextNode>

            <TextNode>
              “Ah, yes—the so-called Porlock is a link in the chain some little
              way from its great attachment. Porlock is not quite a sound
              link—between ourselves. He is the only flaw in that chain so far
              as I have been able to test it.”
            </TextNode>

            <TextNode>
              “But no chain is stronger than its weakest link.”
            </TextNode>

            <TextNode>
              “Exactly, my dear Watson! Hence the extreme importance of Porlock.
              Led on by some rudimentary aspirations towards right, and
              encouraged by the judicious stimulation of an occasional ten-pound
              note sent to him by devious methods, he has once or twice given me
              advance information which has been of value—that highest value
              which anticipates and prevents rather than avenges crime. I cannot
              doubt that, if we had the cipher, we should find that this
              communication is of the nature that I indicate.”
            </TextNode>

            <TextNode>
              Again Holmes flattened out the paper upon his unused plate. I rose
              and, leaning over him, stared down at the curious inscription,
              which ran as follows:
            </TextNode>

            <TextNode className='text-center'>
              534 C2 13 127 36 31 4 17 21 41
            </TextNode>
            <TextNode className='text-center'>
              DOUGLAS 109 293 5 37 BIRLSTONE
            </TextNode>
            <TextNode className='text-center'>26 BIRLSTONE 9 47 171</TextNode>

            <TextNode noIndent>“What do you make of it, Holmes?”</TextNode>

            <TextNode>
              “It is obviously an attempt to convey secret information.”
            </TextNode>

            <TextNode>
              “But what is the use of a cipher message without the cipher?”
            </TextNode>

            <TextNode>“In this instance, none at all.”</TextNode>

            <TextNode>“Why do you say ‘in this instance’?”</TextNode>

            <TextNode>
              “Because there are many ciphers which I would read as easily as I
              do the apocrypha of the agony column: such crude devices amuse the
              intelligence without fatiguing it. But this is different. It is
              clearly a reference to the words in a page of some book. Until I
              am told which page and which book I am powerless.”
            </TextNode>

            <TextNode>“But why ‘Douglas’ and ‘Birlstone’?”</TextNode>

            <TextNode>
              “Clearly because those are words which were not contained in the
              page in question.”
            </TextNode>

            <TextNode>“Then why has he not indicated the book?”</TextNode>

            <TextNode>
              “Your native shrewdness, my dear Watson, that innate cunning which
              is the delight of your friends, would surely prevent you from
              inclosing cipher and message in the same envelope. Should it
              miscarry, you are undone. As it is, both have to go wrong before
              any harm comes from it. Our second post is now overdue, and I
              shall be surprised if it does not bring us either a further letter
              of explanation, or, as is more probable, the very volume to which
              these figures refer.”
            </TextNode>
            <TextNode>
              Holmes's calculation was fulfilled within a very few minutes by
              the appearance of Billy, the page, with the very letter which we
              were expecting.
            </TextNode>

            <TextNode>
              “The same writing,” remarked Holmes, as he opened the envelope,
              “and actually signed,” he added in an exultant voice as he
              unfolded the epistle. “Come, we are getting on, Watson.” His brow
              clouded, however, as he glanced over the contents.
            </TextNode>

            <TextNode>
              “Dear me, this is very disappointing! I fear, Watson, that all our
              expectations come to nothing. I trust that the man Porlock will
              come to no harm.
            </TextNode>

            <Indent>
              <TextNode noIndent className='italic'>
                “Dear Mr. Holmes [he says]:
              </TextNode>
              <TextNode noIndent>
                “I will go no further in this matter. It is too dangerous—he
                suspects me. I can see that he suspects me. He came to me quite
                unexpectedly after I had actually addressed this envelope with
                the intention of sending you the key to the cipher. I was able
                to cover it up. If he had seen it, it would have gone hard with
                me. But I read suspicion in his eyes. Please burn the cipher
                message, which can now be of no use to you.
              </TextNode>
              <TextNode noIndent className='italic'>
                “Fred Porlock.”
              </TextNode>
            </Indent>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              Holmes sat for some little time twisting this letter between his
              fingers, and frowning, as he stared into the fire.
            </TextNode>

            <TextNode>
              “After all,” he said at last, “there may be nothing in it. It may
              be only his guilty conscience. Knowing himself to be a traitor, he
              may have read the accusation in the other's eyes.”
            </TextNode>

            <TextNode>
              “The other being, I presume, Professor Moriarty.”
            </TextNode>

            <TextNode>
              “No less! When any of that party talk about ‘He’ you know whom
              they mean. There is one predominant ‘He’ for all of them.”
            </TextNode>

            <TextNode>“But what can he do?”</TextNode>

            <TextNode>
              “Hum! That's a large question. When you have one of the first
              brains of Europe up against you, and all the powers of darkness at
              his back, there are infinite possibilities. Anyhow, Friend Porlock
              is evidently scared out of his senses—kindly compare the writing
              in the note to that upon its envelope; which was done, he tells
              us, before this ill-omened visit. The one is clear and firm. The
              other hardly legible.”
            </TextNode>

            <TextNode>
              “Why did he write at all? Why did he not simply drop it?”
            </TextNode>

            <TextNode>
              “Because he feared I would make some inquiry after him in that
              case, and possibly bring trouble on him.”
            </TextNode>

            <TextNode>
              “No doubt,” said I. “Of course.” I had picked up the original
              cipher message and was bending my brows over it. “It's pretty
              maddening to think that an important secret may lie here on this
              slip of paper, and that it is beyond human power to penetrate it.”
            </TextNode>

            <TextNode>
              Sherlock Holmes had pushed away his untasted breakfast and lit the
              unsavoury pipe which was the companion of his deepest meditations.
              “I wonder!” said he, leaning back and staring at the ceiling.
              “Perhaps there are points which have escaped your Machiavellian
              intellect. Let us consider the problem in the light of pure
              reason. This man's reference is to a book. That is our point of
              departure.”
            </TextNode>

            <TextNode>“A somewhat vague one.”</TextNode>

            <TextNode>
              “Let us see then if we can narrow it down. As I focus my mind upon
              it, it seems rather less impenetrable. What indications have we as
              to this book?”
            </TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Well, well, it is surely not quite so bad as that. The cipher
              message begins with a large 534, does it not? We may take it as a
              working hypothesis that 534 is the particular page to which the
              cipher refers. So our book has already become a large book which
              is surely something gained. What other indications have we as to
              the nature of this large book? The next sign is C2. What do you
              make of that, Watson?”
            </TextNode>

            <TextNode>“Chapter the second, no doubt.”</TextNode>

            <TextNode>
              “Hardly that, Watson. You will, I am sure, agree with me that if
              the page be given, the number of the chapter is immaterial. Also
              that if page 534 finds us only in the second chapter, the length
              of the first one must have been really intolerable.”
            </TextNode>

            <TextNode>“Column!” I cried.</TextNode>

            <TextNode>
              “Brilliant, Watson. You are scintillating this morning. If it is
              not column, then I am very much deceived. So now, you see, we
              begin to visualize a large book printed in double columns which
              are each of a considerable length, since one of the words is
              numbered in the document as the two hundred and ninety-third. Have
              we reached the limits of what reason can supply?”
            </TextNode>

            <TextNode>“I fear that we have.”</TextNode>

            <TextNode>
              “Surely you do yourself an injustice. One more coruscation, my
              dear Watson—yet another brain-wave! Had the volume been an unusual
              one, he would have sent it to me. Instead of that, he had
              intended, before his plans were nipped, to send me the clue in
              this envelope. He says so in his note. This would seem to indicate
              that the book is one which he thought I would have no difficulty
              in finding for myself. He had it—and he imagined that I would have
              it, too. In short, Watson, it is a very common book.”
            </TextNode>

            <TextNode>“What you say certainly sounds plausible.”</TextNode>

            <TextNode>
              “So we have contracted our field of search to a large book,
              printed in double columns and in common use.”
            </TextNode>

            <TextNode>“The Bible!” I cried triumphantly.</TextNode>

            <TextNode>
              “Good, Watson, good! But not, if I may say so, quite good enough!
              Even if I accepted the compliment for myself I could hardly name
              any volume which would be less likely to lie at the elbow of one
              of Moriarty's associates. Besides, the editions of Holy Writ are
              so numerous that he could hardly suppose that two copies would
              have the same pagination. This is clearly a book which is
              standardized. He knows for certain that his page 534 will exactly
              agree with my page 534.”
            </TextNode>

            <TextNode>
              “But very few books would correspond with that.”
            </TextNode>

            <TextNode>
              “Exactly. Therein lies our salvation. Our search is narrowed down
              to standardized books which anyone may be supposed to possess.”
            </TextNode>

            <TextNode>“Bradshaw!”</TextNode>

            <TextNode>
              “There are difficulties, Watson. The vocabulary of Bradshaw is
              nervous and terse, but limited. The selection of words would
              hardly lend itself to the sending of general messages. We will
              eliminate Bradshaw. The dictionary is, I fear, inadmissible for
              the same reason. What then is left?”
            </TextNode>

            <TextNode>“An almanac!”</TextNode>

            <TextNode>
              “Excellent, Watson! I am very much mistaken if you have not
              touched the spot. An almanac! Let us consider the claims of
              Whitaker's Almanac. It is in common use. It has the requisite
              number of pages. It is in double column. Though reserved in its
              earlier vocabulary, it becomes, if I remember right, quite
              garrulous towards the end.” He picked the volume from his desk.
              “Here is page 534, column two, a substantial block of print
              dealing, I perceive, with the trade and resources of British
              India. Jot down the words, Watson! Number thirteen is ‘Mahratta.’
              Not, I fear, a very auspicious beginning. Number one hundred and
              twenty-seven is ‘Government’; which at least makes sense, though
              somewhat irrelevant to ourselves and Professor Moriarty. Now let
              us try again. What does the Mahratta government do? Alas! the next
              word is ‘pig's-bristles.’ We are undone, my good Watson! It is
              finished!”
            </TextNode>

            <TextNode>
              He had spoken in jesting vein, but the twitching of his bushy
              eyebrows bespoke his disappointment and irritation. I sat helpless
              and unhappy, staring into the fire. A long silence was broken by a
              sudden exclamation from Holmes, who dashed at a cupboard, from
              which he emerged with a second yellow-covered volume in his hand.
            </TextNode>

            <TextNode>
              “We pay the price, Watson, for being too up-to-date!” he cried.
              “We are before our time, and suffer the usual penalties. Being the
              seventh of January, we have very properly laid in the new almanac.
              It is more than likely that Porlock took his message from the old
              one. No doubt he would have told us so had his letter of
              explanation been written. Now let us see what page 534 has in
              store for us. Number thirteen is ‘There,’ which is much more
              promising. Number one hundred and twenty-seven is ‘is’—‘There
              is’”—Holmes's eyes were gleaming with excitement, and his thin,
              nervous fingers twitched as he counted the words—“‘danger.’ Ha!
              Ha! Capital! Put that down, Watson. ‘There is
              danger—may—come—very—soon—one.’ Then we have the name
              ‘Douglas’—‘rich—country—now—at—Birlstone—House—Birlstone—confidence—is—pressing.’
              There, Watson! What do you think of pure reason and its fruit? If
              the greengrocer had such a thing as a laurel wreath, I should send
              Billy round for it.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page241;
