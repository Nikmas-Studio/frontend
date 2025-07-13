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

function Page66({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A SCANDAL IN BOHEMIA'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I rose to go, but Holmes caught me by the wrist and pushed me back
              into my chair. “It is both, or none,” said he. “You may say before
              this gentleman anything which you may say to me.”
            </TextNode>

            <TextNode>
              The Count shrugged his broad shoulders. “Then I must begin,” said
              he, “by binding you both to absolute secrecy for two years; at the
              end of that time the matter will be of no importance. At present
              it is not too much to say that it is of such weight it may have an
              influence upon European history.”
            </TextNode>

            <TextNode>“I promise,” said Holmes.</TextNode>

            <TextNode>“And I.”</TextNode>

            <TextNode>
              “You will excuse this mask,” continued our strange visitor. “The
              august person who employs me wishes his agent to be unknown to
              you, and I may confess at once that the title by which I have just
              called myself is not exactly my own.”
            </TextNode>

            <TextNode>“I was aware of it,” said Holmes dryly.</TextNode>

            <TextNode>
              “The circumstances are of great delicacy, and every precaution has
              to be taken to quench what might grow to be an immense scandal and
              seriously compromise one of the reigning families of Europe. To
              speak plainly, the matter implicates the great House of Ormstein,
              hereditary kings of Bohemia.”
            </TextNode>

            <TextNode>
              “I was also aware of that,” murmured Holmes, settling himself down
              in his armchair and closing his eyes.
            </TextNode>

            <TextNode>
              Our visitor glanced with some apparent surprise at the languid,
              lounging figure of the man who had been no doubt depicted to him
              as the most incisive reasoner and most energetic agent in Europe.
              Holmes slowly reopened his eyes and looked impatiently at his
              gigantic client.
            </TextNode>

            <TextNode>
              “If your Majesty would condescend to state your case,” he
              remarked, “I should be better able to advise you.”
            </TextNode>

            <TextNode>
              The man sprang from his chair and paced up and down the room in
              uncontrollable agitation. Then, with a gesture of desperation, he
              tore the mask from his face and hurled it upon the ground. “You
              are right,” he cried; “I am the King. Why should I attempt to
              conceal it?”
            </TextNode>

            <TextNode>
              “Why, indeed?” murmured Holmes. “Your Majesty had not spoken
              before I was aware that I was addressing Wilhelm Gottsreich
              Sigismond von Ormstein, Grand Duke of Cassel-Felstein, and
              hereditary King of Bohemia.”
            </TextNode>

            <TextNode>
              “But you can understand,” said our strange visitor, sitting down
              once more and passing his hand over his high white forehead, “you
              can understand that I am not accustomed to doing such business in
              my own person. Yet the matter was so delicate that I could not
              confide it to an agent without putting myself in his power. I have
              come incognito from Prague for the purpose of consulting you.”
            </TextNode>

            <TextNode>
              “Then, pray consult,” said Holmes, shutting his eyes once more.
            </TextNode>

            <TextNode>
              “The facts are briefly these: Some five years ago, during a
              lengthy visit to Warsaw, I made the acquaintance of the well-known
              adventuress, Irene Adler. The name is no doubt familiar to you.”
            </TextNode>

            <TextNode>
              “Kindly look her up in my index, Doctor,” murmured Holmes without
              opening his eyes. For many years he had adopted a system of
              docketing all paragraphs concerning men and things, so that it was
              difficult to name a subject or a person on which he could not at
              once furnish information. In this case I found her biography
              sandwiched in between that of a Hebrew rabbi and that of a
              staff-commander who had written a monograph upon the deep-sea
              fishes.
            </TextNode>

            <TextNode>
              “Let me see!” said Holmes. “Hum! Born in New Jersey in the year
              1858. Contralto—hum! La Scala, hum! Prima donna Imperial Opera of
              Warsaw—yes! Retired from operatic stage—ha! Living in London—quite
              so! Your Majesty, as I understand, became entangled with this
              young person, wrote her some compromising letters, and is now
              desirous of getting those letters back.”
            </TextNode>

            <TextNode>“Precisely so. But how—”</TextNode>

            <TextNode>“Was there a secret marriage?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>“No legal papers or certificates?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “Then I fail to follow your Majesty. If this young person should
              produce her letters for blackmailing or other purposes, how is she
              to prove their authenticity?”
            </TextNode>

            <TextNode>“There is the writing.”</TextNode>

            <TextNode>“Pooh, pooh! Forgery.”</TextNode>

            <TextNode>“My private note-paper.”</TextNode>

            <TextNode>“Stolen.”</TextNode>

            <TextNode>“My own seal.”</TextNode>

            <TextNode>“Imitated.”</TextNode>

            <TextNode>“My photograph.”</TextNode>

            <TextNode>“Bought.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“We were both in the photograph.”</TextNode>

            <TextNode>
              “Oh, dear! That is very bad! Your Majesty has indeed committed an
              indiscretion.”
            </TextNode>

            <TextNode>“I was mad—insane.”</TextNode>

            <TextNode>“You have compromised yourself seriously.”</TextNode>

            <TextNode>
              “I was only Crown Prince then. I was young. I am but thirty now.”
            </TextNode>

            <TextNode>“It must be recovered.”</TextNode>

            <TextNode>“We have tried and failed.”</TextNode>

            <TextNode>“Your Majesty must pay. It must be bought.”</TextNode>

            <TextNode>“She will not sell.”</TextNode>

            <TextNode>“Stolen, then.”</TextNode>

            <TextNode>
              “Five attempts have been made. Twice burglars in my pay ransacked
              her house. Once we diverted her luggage when she travelled. Twice
              she has been waylaid. There has been no result.”
            </TextNode>

            <TextNode>“No sign of it?”</TextNode>

            <TextNode>“Absolutely none.”</TextNode>

            <TextNode>
              Holmes laughed. “It is quite a pretty little problem,” said he.
            </TextNode>

            <TextNode>
              “But a very serious one to me,” returned the King reproachfully.
            </TextNode>

            <TextNode>
              “Very, indeed. And what does she propose to do with the
              photograph?”
            </TextNode>

            <TextNode>“To ruin me.”</TextNode>

            <TextNode>“But how?”</TextNode>

            <TextNode>“I am about to be married.”</TextNode>

            <TextNode>“So I have heard.”</TextNode>

            <TextNode>
              “To Clotilde Lothman von Saxe-Meningen, second daughter of the
              King of Scandinavia. You may know the strict principles of her
              family. She is herself the very soul of delicacy. A shadow of a
              doubt as to my conduct would bring the matter to an end.”
            </TextNode>

            <TextNode>“And Irene Adler?”</TextNode>

            <TextNode>
              “Threatens to send them the photograph. And she will do it. I know
              that she will do it. You do not know her, but she has a soul of
              steel. She has the face of the most beautiful of women, and the
              mind of the most resolute of men. Rather than I should marry
              another woman, there are no lengths to which she would not
              go—none.”
            </TextNode>

            <TextNode>“You are sure that she has not sent it yet?”</TextNode>

            <TextNode>“I am sure.”</TextNode>

            <TextNode>“And why?”</TextNode>

            <TextNode>
              “Because she has said that she would send it on the day when the
              betrothal was publicly proclaimed. That will be next Monday.”
            </TextNode>

            <TextNode>
              “Oh, then we have three days yet,” said Holmes with a yawn. “That
              is very fortunate, as I have one or two matters of importance to
              look into just at present. Your Majesty will, of course, stay in
              London for the present?”
            </TextNode>

            <TextNode>
              “Certainly. You will find me at the Langham under the name of the
              Count Von Kramm.”
            </TextNode>

            <TextNode>
              “Then I shall drop you a line to let you know how we progress.”
            </TextNode>

            <TextNode>“Pray do so. I shall be all anxiety.”</TextNode>

            <TextNode>“Then, as to money?”</TextNode>

            <TextNode>“You have carte blanche.”</TextNode>

            <TextNode>“Absolutely?”</TextNode>

            <TextNode>
              “I tell you that I would give one of the provinces of my kingdom
              to have that photograph.”
            </TextNode>

            <TextNode>“And for present expenses?”</TextNode>

            <TextNode>
              The King took a heavy chamois leather bag from under his cloak and
              laid it on the table.
            </TextNode>

            <TextNode>
              “There are three hundred pounds in gold and seven hundred in
              notes,” he said.
            </TextNode>

            <TextNode>
              Holmes scribbled a receipt upon a sheet of his note-book and
              handed it to him.
            </TextNode>

            <TextNode>“And Mademoiselle's address?” he asked.</TextNode>

            <TextNode>
              “Is Briony Lodge, Serpentine Avenue, St. John's Wood.”
            </TextNode>

            <TextNode>
              Holmes took a note of it. “One other question,” said he. “Was the
              photograph a cabinet?”
            </TextNode>

            <TextNode>“It was.”</TextNode>

            <TextNode>
              “Then, good-night, your Majesty, and I trust that we shall soon
              have some good news for you. And good-night, Watson,” he added, as
              the wheels of the royal brougham rolled down the street. “If you
              will be good enough to call to-morrow afternoon at three o'clock I
              should like to chat this little matter over with you.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page66;
