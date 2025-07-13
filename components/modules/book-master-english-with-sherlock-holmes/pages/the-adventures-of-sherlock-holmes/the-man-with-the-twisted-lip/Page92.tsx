import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page92({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE MAN WITH&nbsp;THE&nbsp;TWISTED&nbsp;LIP'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Sherlock Holmes sprang out of his chair as if he had been
              galvanised.
            </TextNode>

            <TextNode>“What!” he roared.</TextNode>

            <TextNode>
              “Yes, to-day.” She stood smiling, holding up a little slip of
              paper in the air.
            </TextNode>

            <TextNode>“May I see it?”</TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>
              He snatched it from her in his eagerness, and smoothing it out
              upon the table he drew over the lamp and examined it intently. I
              had left my chair and was gazing at it over his shoulder. The
              envelope was a very coarse one and was stamped with the Gravesend
              postmark and with the date of that very day, or rather of the day
              before, for it was considerably after midnight.
            </TextNode>

            <TextNode>
              “Coarse writing,” murmured Holmes. “Surely this is not your
              husband's writing, madam.”
            </TextNode>

            <TextNode>“No, but the enclosure is.”</TextNode>

            <TextNode>
              “I perceive also that whoever addressed the envelope had to go and
              inquire as to the address.”
            </TextNode>

            <TextNode>“How can you tell that?”</TextNode>

            <TextNode>
              “The name, you see, is in perfectly black ink, which has dried
              itself. The rest is of the greyish colour, which shows that
              blotting-paper has been used. If it had been written straight off,
              and then blotted, none would be of a deep black shade. This man
              has written the name, and there has then been a pause before he
              wrote the address, which can only mean that he was not familiar
              with it. It is, of course, a trifle, but there is nothing so
              important as trifles. Let us now see the letter. Ha! there has
              been an enclosure here!”
            </TextNode>

            <TextNode>“Yes, there was a ring. His signet-ring.”</TextNode>

            <TextNode>
              “And you are sure that this is your husband's hand?”
            </TextNode>

            <TextNode>“One of his hands.”</TextNode>

            <TextNode>“One?”</TextNode>

            <TextNode>
              “His hand when he wrote hurriedly. It is very unlike his usual
              writing, and yet I know it well.”
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “Dearest do not be frightened. All will come well. There is a
                huge error which it may take some little time to rectify. Wait
                in patience.
              </TextNode>
              <TextNode className='italic' noIndent>
                “Neville.
              </TextNode>
            </Indent>

            <TextNode noIndent>
              Written in pencil upon the fly-leaf of a book, octavo size, no
              water-mark. Hum! Posted to-day in Gravesend by a man with a dirty
              thumb. Ha! And the flap has been gummed, if I am not very much in
              error, by a person who had been chewing tobacco. And you have no
              doubt that it is your husband's hand, madam?”
            </TextNode>

            <TextNode>“None. Neville wrote those words.”</TextNode>

            <TextNode>
              “And they were posted to-day at Gravesend. Well, Mrs. St. Clair,
              the clouds lighten, though I should not venture to say that the
              danger is over.”
            </TextNode>

            <TextNode>“But he must be alive, Mr. Holmes.”</TextNode>

            <TextNode>
              “Unless this is a clever forgery to put us on the wrong scent. The
              ring, after all, proves nothing. It may have been taken from him.”
            </TextNode>

            <TextNode>“No, no; it is, it is his very own writing!”</TextNode>

            <TextNode>
              “Very well. It may, however, have been written on Monday and only
              posted to-day.”
            </TextNode>

            <TextNode>“That is possible.”</TextNode>

            <TextNode>“If so, much may have happened between.”</TextNode>

            <TextNode>
              “Oh, you must not discourage me, Mr. Holmes. I know that all is
              well with him. There is so keen a sympathy between us that I
              should know if evil came upon him. On the very day that I saw him
              last he cut himself in the bedroom, and yet I in the dining-room
              rushed upstairs instantly with the utmost certainty that something
              had happened. Do you think that I would respond to such a trifle
              and yet be ignorant of his death?”
            </TextNode>

            <TextNode>
              “I have seen too much not to know that the impression of a woman
              may be more valuable than the conclusion of an analytical
              reasoner. And in this letter you certainly have a very strong
              piece of evidence to corroborate your view. But if your husband is
              alive and able to write letters, why should he remain away from
              you?”
            </TextNode>

            <TextNode>“I cannot imagine. It is unthinkable.”</TextNode>

            <TextNode>
              “And on Monday he made no remarks before leaving you?”
            </TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>
              “And you were surprised to see him in Swandam Lane?”
            </TextNode>

            <TextNode>“Very much so.”</TextNode>

            <TextNode>“Was the window open?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Then he might have called to you?”</TextNode>

            <TextNode>“He might.”</TextNode>

            <TextNode>
              “He only, as I understand, gave an inarticulate cry?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“A call for help, you thought?”</TextNode>

            <TextNode>“Yes. He waved his hands.”</TextNode>

            <TextNode>
              “But it might have been a cry of surprise. Astonishment at the
              unexpected sight of you might cause him to throw up his hands?”
            </TextNode>

            <TextNode>“It is possible.”</TextNode>

            <TextNode>“And you thought he was pulled back?”</TextNode>

            <TextNode>“He disappeared so suddenly.”</TextNode>

            <TextNode>
              “He might have leaped back. You did not see anyone else in the
              room?”
            </TextNode>

            <TextNode>
              “No, but this horrible man confessed to having been there, and the
              Lascar was at the foot of the stairs.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Quite so. Your husband, as far as you could see, had his ordinary
              clothes on?”
            </TextNode>

            <TextNode>
              “But without his collar or tie. I distinctly saw his bare throat.”
            </TextNode>

            <TextNode>“Had he ever spoken of Swandam Lane?”</TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>
              “Had he ever showed any signs of having taken opium?”
            </TextNode>

            <TextNode>“Never.”</TextNode>

            <TextNode>
              “Thank you, Mrs. St. Clair. Those are the principal points about
              which I wished to be absolutely clear. We shall now have a little
              supper and then retire, for we may have a very busy day
              to-morrow.”
            </TextNode>

            <TextNode>
              A large and comfortable double-bedded room had been placed at our
              disposal, and I was quickly between the sheets, for I was weary
              after my night of adventure. Sherlock Holmes was a man, however,
              who, when he had an unsolved problem upon his mind, would go for
              days, and even for a week, without rest, turning it over,
              rearranging his facts, looking at it from every point of view
              until he had either fathomed it or convinced himself that his data
              were insufficient. It was soon evident to me that he was now
              preparing for an all-night sitting. He took off his coat and
              waistcoat, put on a large blue dressing-gown, and then wandered
              about the room collecting pillows from his bed and cushions from
              the sofa and armchairs. With these he constructed a sort of
              Eastern divan, upon which he perched himself cross-legged, with an
              ounce of shag tobacco and a box of matches laid out in front of
              him. In the dim light of the lamp I saw him sitting there, an old
              briar pipe between his lips, his eyes fixed vacantly upon the
              corner of the ceiling, the blue smoke curling up from him, silent,
              motionless, with the light shining upon his strong-set aquiline
              features. So he sat as I dropped off to sleep, and so he sat when
              a sudden ejaculation caused me to wake up, and I found the summer
              sun shining into the apartment. The pipe was still between his
              lips, the smoke still curled upward, and the room was full of a
              dense tobacco haze, but nothing remained of the heap of shag which
              I had seen upon the previous night.
            </TextNode>

            <TextNode>“Awake, Watson?” he asked.</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Game for a morning drive?”</TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>
              “Then dress. No one is stirring yet, but I know where the
              stable-boy sleeps, and we shall soon have the trap out.” He
              chuckled to himself as he spoke, his eyes twinkled, and he seemed
              a different man to the sombre thinker of the previous night.
            </TextNode>

            <TextNode>
              As I dressed I glanced at my watch. It was no wonder that no one
              was stirring. It was twenty-five minutes past four. I had hardly
              finished when Holmes returned with the news that the boy was
              putting in the horse.
            </TextNode>

            <TextNode>
              “I want to test a little theory of mine,” said he, pulling on his
              boots. “I think, Watson, that you are now standing in the presence
              of one of the most absolute fools in Europe. I deserve to be
              kicked from here to Charing Cross. But I think I have the key of
              the affair now.”
            </TextNode>

            <TextNode>“And where is it?” I asked, smiling.</TextNode>

            <TextNode>
              “In the bathroom,” he answered. “Oh, yes, I am not joking,” he
              continued, seeing my look of incredulity. “I have just been there,
              and I have taken it out, and I have got it in this Gladstone bag.
              Come on, my boy, and we shall see whether it will not fit the
              lock.”
            </TextNode>

            <TextNode>
              We made our way downstairs as quietly as possible, and out into
              the bright morning sunshine. In the road stood our horse and trap,
              with the half-clad stable-boy waiting at the head. We both sprang
              in, and away we dashed down the London Road. A few country carts
              were stirring, bearing in vegetables to the metropolis, but the
              lines of villas on either side were as silent and lifeless as some
              city in a dream.
            </TextNode>

            <TextNode>
              “It has been in some points a singular case,” said Holmes,
              flicking the horse on into a gallop. “I confess that I have been
              as blind as a mole, but it is better to learn wisdom late than
              never to learn it at all.”
            </TextNode>

            <TextNode>
              In town the earliest risers were just beginning to look sleepily
              from their windows as we drove through the streets of the Surrey
              side. Passing down the Waterloo Bridge Road we crossed over the
              river, and dashing up Wellington Street wheeled sharply to the
              right and found ourselves in Bow Street. Sherlock Holmes was well
              known to the force, and the two constables at the door saluted
              him. One of them held the horse's head while the other led us in.
            </TextNode>

            <TextNode>“Who is on duty?” asked Holmes.</TextNode>

            <TextNode>“Inspector Bradstreet, sir.”</TextNode>

            <TextNode>
              “Ah, Bradstreet, how are you?” A tall, stout official had come
              down the stone-flagged passage, in a peaked cap and frogged
              jacket. “I wish to have a quiet word with you, Bradstreet.”
              “Certainly, Mr. Holmes. Step into my room here.” It was a small,
              office-like room, with a huge ledger upon the table, and a
              telephone projecting from the wall. The inspector sat down at his
              desk.
            </TextNode>

            <TextNode>“What can I do for you, Mr. Holmes?”</TextNode>

            <TextNode>
              “I called about that beggarman, Boone—the one who was charged with
              being concerned in the disappearance of Mr. Neville St. Clair, of
              Lee.”
            </TextNode>

            <TextNode>
              “Yes. He was brought up and remanded for further inquiries.”
            </TextNode>

            <TextNode>“So I heard. You have him here?”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page92;
