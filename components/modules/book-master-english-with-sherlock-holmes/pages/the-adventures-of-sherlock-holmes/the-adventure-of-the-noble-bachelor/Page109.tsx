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

function Page109({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;NOBLE&nbsp;BACHELOR'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“And is that all?”</TextNode>

            <TextNode>
              “Only one little item in another of the morning papers, but it is
              a suggestive one.”
            </TextNode>

            <TextNode>“And it is—”</TextNode>

            <TextNode>
              “That Miss Flora Millar, the lady who had caused the disturbance,
              has actually been arrested. It appears that she was formerly
              a&nbsp;
              <span className='italic'>danseuse</span> at the Allegro, and that
              she has known the bridegroom for some years. There are no further
              particulars, and the whole case is in your hands now—so far as it
              has been set forth in the public press.”
            </TextNode>

            <TextNode>
              “And an exceedingly interesting case it appears to be. I would not
              have missed it for worlds. But there is a ring at the bell,
              Watson, and as the clock makes it a few minutes after four, I have
              no doubt that this will prove to be our noble client. Do not dream
              of going, Watson, for I very much prefer having a witness, if only
              as a check to my own memory.”
            </TextNode>

            <TextNode>
              “Lord Robert St. Simon,” announced our page-boy, throwing open the
              door. A gentleman entered, with a pleasant, cultured face,
              high-nosed and pale, with something perhaps of petulance about the
              mouth, and with the steady, well-opened eye of a man whose
              pleasant lot it had ever been to command and to be obeyed. His
              manner was brisk, and yet his general appearance gave an undue
              impression of age, for he had a slight forward stoop and a little
              bend of the knees as he walked. His hair, too, as he swept off his
              very curly-brimmed hat, was grizzled round the edges and thin upon
              the top. As to his dress, it was careful to the verge of
              foppishness, with high collar, black frock-coat, white waistcoat,
              yellow gloves, patent-leather shoes, and light-coloured gaiters.
              He advanced slowly into the room, turning his head from left to
              right, and swinging in his right hand the cord which held his
              golden eyeglasses.
            </TextNode>

            <TextNode>
              “Good-day, Lord St. Simon,” said Holmes, rising and bowing. “Pray
              take the basket-chair. This is my friend and colleague, Dr.
              Watson. Draw up a little to the fire, and we will talk this matter
              over.”
            </TextNode>

            <TextNode>
              “A most painful matter to me, as you can most readily imagine, Mr.
              Holmes. I have been cut to the quick. I understand that you have
              already managed several delicate cases of this sort, sir, though I
              presume that they were hardly from the same class of society.”
            </TextNode>

            <TextNode>“No, I am descending.”</TextNode>

            <TextNode>“I beg pardon.”</TextNode>

            <TextNode>“My last client of the sort was a king.”</TextNode>

            <TextNode>“Oh, really! I had no idea. And which king?”</TextNode>

            <TextNode>“The King of Scandinavia.”</TextNode>

            <TextNode>“What! Had he lost his wife?”</TextNode>

            <TextNode>
              “You can understand,” said Holmes suavely, “that I extend to the
              affairs of my other clients the same secrecy which I promise to
              you in yours.”
            </TextNode>

            <TextNode>
              “Of course! Very right! very right! I'm sure I beg pardon. As to
              my own case, I am ready to give you any information which may
              assist you in forming an opinion.”
            </TextNode>

            <TextNode>
              “Thank you. I have already learned all that is in the public
              prints, nothing more. I presume that I may take it as correct—this
              article, for example, as to the disappearance of the bride.”
            </TextNode>

            <TextNode>
              Lord St. Simon glanced over it. “Yes, it is correct, as far as it
              goes.”
            </TextNode>

            <TextNode>
              “But it needs a great deal of supplementing before anyone could
              offer an opinion. I think that I may arrive at my facts most
              directly by questioning you.”
            </TextNode>

            <TextNode>“Pray do so.”</TextNode>

            <TextNode>“When did you first meet Miss Hatty Doran?”</TextNode>

            <TextNode>“In San Francisco, a year ago.”</TextNode>

            <TextNode>“You were travelling in the States?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Did you become engaged then?”</TextNode>

            <TextNode>“No.”</TextNode>

            <TextNode>“But you were on a friendly footing?”</TextNode>

            <TextNode>
              “I was amused by her society, and she could see that I was
              amused.”
            </TextNode>

            <TextNode>“Her father is very rich?”</TextNode>

            <TextNode>
              “He is said to be the richest man on the Pacific slope.”
            </TextNode>

            <TextNode>“And how did he make his money?”</TextNode>

            <TextNode>
              “In mining. He had nothing a few years ago. Then he struck gold,
              invested it, and came up by leaps and bounds.”
            </TextNode>

            <TextNode>
              “Now, what is your own impression as to the young lady's—your
              wife's character?”
            </TextNode>

            <TextNode>
              The nobleman swung his glasses a little faster and stared down
              into the fire. “You see, Mr. Holmes,” said he, “my wife was twenty
              before her father became a rich man. During that time she ran free
              in a mining camp and wandered through woods or mountains, so that
              her education has come from Nature rather than from the
              schoolmaster. She is what we call in England a tomboy, with a
              strong nature, wild and free, unfettered by any sort of
              traditions. She is impetuous—volcanic, I was about to say. She is
              swift in making up her mind and fearless in carrying out her
              resolutions. On the other hand, I would not have given her the
              name which I have the honour to bear”—he gave a little stately
              cough—“had not I thought her to be at bottom a noble woman. I
              believe that she is capable of heroic self-sacrifice and that
              anything dishonourable would be repugnant to her.”
            </TextNode>

            <TextNode>“Have you her photograph?”</TextNode>

            <TextNode>
              “I brought this with me.” He opened a locket and showed us the
              full face of a very lovely woman. It was not a photograph but an
              ivory miniature, and the artist had brought out the full effect of
              the lustrous black hair, the large dark eyes, and the exquisite
              mouth. Holmes gazed long and earnestly at it. Then he closed the
              locket and handed it back to Lord St. Simon.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “The young lady came to London, then, and you renewed your
              acquaintance?”
            </TextNode>

            <TextNode>
              “Yes, her father brought her over for this last London season. I
              met her several times, became engaged to her, and have now married
              her.”
            </TextNode>

            <TextNode>
              “She brought, I understand, a considerable dowry?”
            </TextNode>

            <TextNode>
              “A fair dowry. Not more than is usual in my family.”
            </TextNode>

            <TextNode>
              “And this, of course, remains to you, since the marriage is a fait
              accompli?”
            </TextNode>

            <TextNode>
              “I really have made no inquiries on the subject.”
            </TextNode>

            <TextNode>
              “Very naturally not. Did you see Miss Doran on the day before the
              wedding?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Was she in good spirits?”</TextNode>

            <TextNode>
              “Never better. She kept talking of what we should do in our future
              lives.”
            </TextNode>

            <TextNode>
              “Indeed! That is very interesting. And on the morning of the
              wedding?”
            </TextNode>

            <TextNode>
              “She was as bright as possible—at least until after the ceremony.”
            </TextNode>

            <TextNode>“And did you observe any change in her then?”</TextNode>

            <TextNode>
              “Well, to tell the truth, I saw then the first signs that I had
              ever seen that her temper was just a little sharp. The incident
              however, was too trivial to relate and can have no possible
              bearing upon the case.”
            </TextNode>

            <TextNode>“Pray let us have it, for all that.”</TextNode>

            <TextNode>
              “Oh, it is childish. She dropped her bouquet as we went towards
              the vestry. She was passing the front pew at the time, and it fell
              over into the pew. There was a moment's delay, but the gentleman
              in the pew handed it up to her again, and it did not appear to be
              the worse for the fall. Yet when I spoke to her of the matter, she
              answered me abruptly; and in the carriage, on our way home, she
              seemed absurdly agitated over this trifling cause.”
            </TextNode>

            <TextNode>
              “Indeed! You say that there was a gentleman in the pew. Some of
              the general public were present, then?”
            </TextNode>

            <TextNode>
              “Oh, yes. It is impossible to exclude them when the church is
              open.”
            </TextNode>

            <TextNode>
              “This gentleman was not one of your wife's friends?”
            </TextNode>

            <TextNode>
              “No, no; I call him a gentleman by courtesy, but he was quite a
              common-looking person. I hardly noticed his appearance. But really
              I think that we are wandering rather far from the point.”
            </TextNode>

            <TextNode>
              “Lady St. Simon, then, returned from the wedding in a less
              cheerful frame of mind than she had gone to it. What did she do on
              re-entering her father's house?”
            </TextNode>

            <TextNode>“I saw her in conversation with her maid.”</TextNode>

            <TextNode>“And who is her maid?”</TextNode>

            <TextNode>
              “Alice is her name. She is an American and came from California
              with her.”
            </TextNode>

            <TextNode>“A confidential servant?”</TextNode>

            <TextNode>
              “A little too much so. It seemed to me that her mistress allowed
              her to take great liberties. Still, of course, in America they
              look upon these things in a different way.”
            </TextNode>

            <TextNode>“How long did she speak to this Alice?”</TextNode>

            <TextNode>
              “Oh, a few minutes. I had something else to think of.”
            </TextNode>

            <TextNode>“You did not overhear what they said?”</TextNode>

            <TextNode>
              “Lady St. Simon said something about ‘jumping a claim.’ She was
              accustomed to use slang of the kind. I have no idea what she
              meant.”
            </TextNode>

            <TextNode>
              “American slang is very expressive sometimes. And what did your
              wife do when she finished speaking to her maid?”
            </TextNode>

            <TextNode>“She walked into the breakfast-room.”</TextNode>

            <TextNode>“On your arm?”</TextNode>

            <TextNode>
              “No, alone. She was very independent in little matters like that.
              Then, after we had sat down for ten minutes or so, she rose
              hurriedly, muttered some words of apology, and left the room. She
              never came back.”
            </TextNode>

            <TextNode>
              “But this maid, Alice, as I understand, deposes that she went to
              her room, covered her bride's dress with a long ulster, put on a
              bonnet, and went out.”
            </TextNode>

            <TextNode>
              “Quite so. And she was afterwards seen walking into Hyde Park in
              company with Flora Millar, a woman who is now in custody, and who
              had already made a disturbance at Mr. Doran's house that morning.”
            </TextNode>

            <TextNode>
              “Ah, yes. I should like a few particulars as to this young lady,
              and your relations to her.”
            </TextNode>

            <TextNode>
              Lord St. Simon shrugged his shoulders and raised his eyebrows. “We
              have been on a friendly footing for some years—I may say on a very
              friendly footing. She used to be at the Allegro. I have not
              treated her ungenerously, and she had no just cause of complaint
              against me, but you know what women are, Mr. Holmes. Flora was a
              dear little thing, but exceedingly hot-headed and devotedly
              attached to me. She wrote me dreadful letters when she heard that
              I was about to be married, and, to tell the truth, the reason why
              I had the marriage celebrated so quietly was that I feared lest
              there might be a scandal in the church. She came to Mr. Doran's
              door just after we returned, and she endeavoured to push her way
              in, uttering very abusive expressions towards my wife, and even
              threatening her, but I had foreseen the possibility of something
              of the sort, and I had two police fellows there in private
              clothes, who soon pushed her out again. She was quiet when she saw
              that there was no good in making a row.”
            </TextNode>

            <TextNode>“Did your wife hear all this?”</TextNode>

            <TextNode>“No, thank goodness, she did not.”</TextNode>

            <TextNode>
              “And she was seen walking with this very woman afterwards?”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page109;
