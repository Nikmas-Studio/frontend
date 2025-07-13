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

function Page257({
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
      <BookMainContainer>
        <H4>
          Chapter II.
          <br />
          The Bodymaster
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              McMurdo was a man who made his mark quickly. Wherever he was the
              folk around soon knew it. Within a week he had become infinitely
              the most important person at Shafter's. There were ten or a dozen
              boarders there; but they were honest foremen or commonplace clerks
              from the stores, of a very different calibre from the young
              Irishman. Of an evening when they gathered together his joke was
              always the readiest, his conversation the brightest, and his song
              the best. He was a born boon companion, with a magnetism which
              drew good humour from all around him.
            </TextNode>

            <TextNode>
              And yet he showed again and again, as he had shown in the railway
              carriage, a capacity for sudden, fierce anger, which compelled the
              respect and even the fear of those who met him. For the law, too,
              and all who were connected with it, he exhibited a bitter contempt
              which delighted some and alarmed others of his fellow boarders.
            </TextNode>

            <TextNode>
              From the first he made it evident, by his open admiration, that
              the daughter of the house had won his heart from the instant that
              he had set eyes upon her beauty and her grace. He was no backward
              suitor. On the second day he told her that he loved her, and from
              then onward he repeated the same story with an absolute disregard
              of what she might say to discourage him.
            </TextNode>

            <TextNode>
              “Someone else?” he would cry. “Well, the worse luck for someone
              else! Let him look out for himself! Am I to lose my life's chance
              and all my heart's desire for someone else? You can keep on saying
              no, Ettie: the day will come when you will say yes, and I'm young
              enough to wait.”
            </TextNode>

            <TextNode>
              He was a dangerous suitor, with his glib Irish tongue, and his
              pretty, coaxing ways. There was about him also that glamour of
              experience and of mystery which attracts a woman's interest, and
              finally her love. He could talk of the sweet valleys of County
              Monaghan from which he came, of the lovely, distant island, the
              low hills and green meadows of which seemed the more beautiful
              when imagination viewed them from this place of grime and snow.
            </TextNode>

            <TextNode>
              Then he was versed in the life of the cities of the North, of
              Detroit, and the lumber camps of Michigan, and finally of Chicago,
              where he had worked in a planing mill. And afterwards came the
              hint of romance, the feeling that strange things had happened to
              him in that great city, so strange and so intimate that they might
              not be spoken of. He spoke wistfully of a sudden leaving, a
              breaking of old ties, a flight into a strange world, ending in
              this dreary valley, and Ettie listened, her dark eyes gleaming
              with pity and with sympathy—those two qualities which may turn so
              rapidly and so naturally to love.
            </TextNode>

            <TextNode>
              McMurdo had obtained a temporary job as bookkeeper; for he was a
              well-educated man. This kept him out most of the day, and he had
              not found occasion yet to report himself to the head of the lodge
              of the Eminent Order of Freemen. He was reminded of his omission,
              however, by a visit one evening from Mike Scanlan, the fellow
              member whom he had met in the train. Scanlan, the small,
              sharp-faced, nervous, black-eyed man, seemed glad to see him once
              more. After a glass or two of whisky he broached the object of his
              visit.
            </TextNode>

            <TextNode>
              “Say, McMurdo,” said he, “I remembered your address, so l made
              bold to call. I'm surprised that you've not reported to the
              Bodymaster. Why haven't you seen Boss McGinty yet?”
            </TextNode>

            <TextNode>“Well, I had to find a job. I have been busy.”</TextNode>

            <TextNode>
              “You must find time for him if you have none for anything else.
              Good Lord, man! you're a fool not to have been down to the Union
              House and registered your name the first morning after you came
              here! If you run against him—well, you mustn't, that's all!”
            </TextNode>

            <TextNode>
              McMurdo showed mild surprise. “I've been a member of the lodge for
              over two years, Scanlan, but I never heard that duties were so
              pressing as all that.”
            </TextNode>

            <TextNode>“Maybe not in Chicago.”</TextNode>

            <TextNode>“Well, it's the same society here.”</TextNode>

            <TextNode>“Is it?”</TextNode>

            <TextNode>
              Scanlan looked at him long and fixedly. There was something
              sinister in his eyes.
            </TextNode>

            <TextNode>“Isn't it?”</TextNode>

            <TextNode>
              “You'll tell me that in a month's time. I hear you had a talk with
              the patrolmen after I left the train.”
            </TextNode>

            <TextNode>“How did you know that?”</TextNode>

            <TextNode>
              “Oh, it got about—things do get about for good and for bad in this
              district.”
            </TextNode>

            <TextNode>
              “Well, yes. I told the hounds what I thought of them.”
            </TextNode>

            <TextNode>
              “By the Lord, you'll be a man after McGinty's heart!”
            </TextNode>

            <TextNode>“What, does he hate the police too?”</TextNode>

            <TextNode>
              Scanlan burst out laughing. “You go and see him, my lad,” said he
              as he took his leave. “It's not the police but you that he'll hate
              if you don't! Now, take a friend's advice and go at once!”
            </TextNode>

            <TextNode>
              It chanced that on the same evening McMurdo had another more
              pressing interview which urged him in the same direction. It may
              have been that his attentions to Ettie had been more evident than
              before, or that they had gradually obtruded themselves into the
              slow mind of his good German host; but, whatever the cause, the
              boarding-house keeper beckoned the young man into his private room
              and started on the subject without any circumlocution.
            </TextNode>

            <TextNode>
              “It seems to me, mister,” said he, “that you are gettin' set on my
              Ettie. Ain't that so, or am I wrong?”
            </TextNode>

            <TextNode>“Yes, that is so,” the young man answered.</TextNode>

            <TextNode>
              “Vell, I vant to tell you right now that it ain't no manner of
              use. There's someone slipped in afore you.”
            </TextNode>

            <TextNode>“She told me so.”</TextNode>

            <TextNode>
              “Vell, you can lay that she told you truth. But did she tell you
              who it vas?”
            </TextNode>

            <TextNode>“No, I asked her; but she wouldn't tell.”</TextNode>

            <TextNode>
              “I dare say not, the leetle baggage! Perhaps she did not vish to
              frighten you avay.”
            </TextNode>

            <TextNode>“Frighten!” McMurdo was on fire in a moment.</TextNode>

            <TextNode>
              “Ah, yes, my friend! You need not be ashamed to be frightened of
              him. It is Teddy Baldwin.”
            </TextNode>

            <TextNode>“And who the devil is he?”</TextNode>

            <TextNode>“He is a boss of Scowrers.”</TextNode>

            <TextNode>
              “Scowrers! I've heard of them before. It's Scowrers here and
              Scowrers there, and always in a whisper! What are you all afraid
              of? Who are the Scowrers?”
            </TextNode>

            <TextNode>
              The boarding-house keeper instinctively sank his voice, as
              everyone did who talked about that terrible society. “The
              Scowrers,” said he, “are the Eminent Order of Freemen!”
            </TextNode>

            <TextNode>
              The young man stared. “Why, I am a member of that order myself.”
            </TextNode>

            <TextNode>
              “You! I vould never have had you in my house if I had known it—not
              if you vere to pay me a hundred dollar a week.”
            </TextNode>

            <TextNode>
              “What's wrong with the order? It's for charity and good
              fellowship. The rules say so.”
            </TextNode>

            <TextNode>“Maybe in some places. Not here!”</TextNode>

            <TextNode>“What is it here?”</TextNode>

            <TextNode>“It's a murder society, that's vat it is.”</TextNode>

            <TextNode>
              McMurdo laughed incredulously. “How can you prove that?” he asked.
            </TextNode>

            <TextNode>
              “Prove it! Are there not fifty murders to prove it? Vat about
              Milman and Van Shorst, and the Nicholson family, and old Mr. Hyam,
              and little Billy James, and the others? Prove it! Is there a man
              or a voman in this valley vat does not know it?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “See here!” said McMurdo earnestly. “I want you to take back what
              you've said, or else make it good. One or the other you must do
              before I quit this room. Put yourself in my place. Here am I, a
              stranger in the town. I belong to a society that I know only as an
              innocent one. You'll find it through the length and breadth of the
              States, but always as an innocent one. Now, when I am counting
              upon joining it here, you tell me that it is the same as a murder
              society called the Scowrers. I guess you owe me either an apology
              or else an explanation, Mr. Shafter.”
            </TextNode>

            <TextNode>
              “I can but tell you vat the whole vorld knows, mister. The bosses
              of the one are the bosses of the other. If you offend the one, it
              is the other vat vill strike you. We have proved it too often.”
            </TextNode>

            <TextNode>
              “That's just gossip—I want proof!” said McMurdo.
            </TextNode>

            <TextNode>
              “If you live here long you vill get your proof. But I forget that
              you are yourself one of them. You vill soon be as bad as the rest.
              But you vill find other lodgings, mister. I cannot have you here.
              Is it not bad enough that one of these people come courting my
              Ettie, and that I dare not turn him down, but that I should have
              another for my boarder? Yes, indeed, you shall not sleep here
              after to-night!”
            </TextNode>

            <TextNode>
              McMurdo found himself under sentence of banishment both from his
              comfortable quarters and from the girl whom he loved. He found her
              alone in the sitting-room that same evening, and he poured his
              troubles into her ear.
            </TextNode>

            <TextNode>
              “Sure, your father is after giving me notice,” he said. “It's
              little I would care if it was just my room, but indeed, Ettie,
              though it's only a week that I've known you, you are the very
              breath of life to me, and I can't live without you!”
            </TextNode>

            <TextNode>
              “Oh, hush, Mr. McMurdo, don't speak so!” said the girl. “I have
              told you, have I not, that you are too late? There is another, and
              if I have not promised to marry him at once, at least I can
              promise no one else.”
            </TextNode>

            <TextNode>
              “Suppose I had been first, Ettie, would I have had a chance?”
            </TextNode>

            <TextNode>
              The girl sank her face into her hands. “I wish to heaven that you
              had been first!” she sobbed.
            </TextNode>

            <TextNode>
              McMurdo was down on his knees before her in an instant. “For God's
              sake, Ettie, let it stand at that!” he cried. “Will you ruin your
              life and my own for the sake of this promise? Follow your heart,
              acushla! 'Tis a safer guide than any promise before you knew what
              it was that you were saying.”
            </TextNode>

            <TextNode>
              He had seized Ettie's white hand between his own strong brown
              ones.
            </TextNode>

            <TextNode>
              “Say that you will be mine, and we will face it out together!”
            </TextNode>

            <TextNode>“Not here?”</TextNode>

            <TextNode>“Yes, here.”</TextNode>

            <TextNode>
              “No, no, Jack!” His arms were round her now. “It could not be
              here. Could you take me away?”
            </TextNode>

            <TextNode>
              A struggle passed for a moment over McMurdo's face; but it ended
              by setting like granite. “No, here,” he said. “I'll hold you
              against the world, Ettie, right here where we are!”
            </TextNode>

            <TextNode>“Why should we not leave together?”</TextNode>

            <TextNode>“No, Ettie, I can't leave here.”</TextNode>

            <TextNode>“But why?”</TextNode>

            <TextNode>
              “I'd never hold my head up again if I felt that I had been driven
              out. Besides, what is there to be afraid of? Are we not free folks
              in a free country? If you love me, and I you, who will dare to
              come between?”
            </TextNode>

            <TextNode>
              “You don't know, Jack. You've been here too short a time. You
              don't know this Baldwin. You don't know McGinty and his Scowrers.”
            </TextNode>

            <TextNode>
              “No, I don't know them, and I don't fear them, and I don't believe
              in them!” said McMurdo. “I've lived among rough men, my darling,
              and instead of fearing them it has always ended that they have
              feared me—always, Ettie. It's mad on the face of it! If these men,
              as your father says, have done crime after crime in the valley,
              and if everyone knows them by name, how comes it that none are
              brought to justice? You answer me that, Ettie!”
            </TextNode>

            <TextNode>
              “Because no witness dares to appear against them. He would not
              live a month if he did. Also because they have always their own
              men to swear that the accused one was far from the scene of the
              crime. But surely, Jack, you must have read all this. I had
              understood that every paper in the United States was writing about
              it.”
            </TextNode>

            <TextNode>
              “Well, I have read something, it is true; but I had thought it was
              a story. Maybe these men have some reason in what they do. Maybe
              they are wronged and have no other way to help themselves.”
            </TextNode>

            <TextNode>
              “Oh, Jack, don't let me hear you speak so! That is how he
              speaks—the other one!”
            </TextNode>

            <TextNode>“Baldwin—he speaks like that, does he?”</TextNode>

            <TextNode>
              “And that is why I loathe him so. Oh, Jack, now I can tell you the
              truth. I loathe him with all my heart; but I fear him also. I fear
              him for myself; but above all I fear him for father. I know that
              some great sorrow would come upon us if I dared to say what I
              really felt. That is why I have put him off with half-promises. It
              was in real truth our only hope. But if you would fly with me,
              Jack, we could take father with us and live forever far from the
              power of these wicked men.”
            </TextNode>

            <TextNode>
              Again there was the struggle upon McMurdo's face, and again it set
              like granite. “No harm shall come to you, Ettie—nor to your father
              either. As to wicked men, I expect you may find that I am as bad
              as the worst of them before we're through.”
            </TextNode>

            <TextNode>“No, no, Jack! I would trust you anywhere.”</TextNode>

            <TextNode>
              McMurdo laughed bitterly. “Good Lord! how little you know of me!
              Your innocent soul, my darling, could not even guess what is
              passing in mine. But, hullo, who's the visitor?”
            </TextNode>

            <TextNode>
              The door had opened suddenly, and a young fellow came swaggering
              in with the air of one who is the master. He was a handsome,
              dashing young man of about the same age and build as McMurdo
              himself. Under his broad-brimmed black felt hat, which he had not
              troubled to remove, a handsome face with fierce, domineering eyes
              and a curved hawk-bill of a nose looked savagely at the pair who
              sat by the stove.
            </TextNode>

            <TextNode>
              Ettie had jumped to her feet full of confusion and alarm. “I'm
              glad to see you, Mr. Baldwin,” said she. “You're earlier than I
              had thought. Come and sit down.”
            </TextNode>

            <TextNode>
              Baldwin stood with his hands on his hips looking at McMurdo. “Who
              is this?” he asked curtly.
            </TextNode>

            <TextNode>
              “It's a friend of mine, Mr. Baldwin, a new boarder here. Mr.
              McMurdo, may I introduce you to Mr. Baldwin?”
            </TextNode>

            <TextNode>
              The young men nodded in surly fashion to each other.
            </TextNode>

            <TextNode>
              “Maybe Miss Ettie has told you how it is with us?” said Baldwin.
            </TextNode>

            <TextNode>
              “I didn't understand that there was any relation between you.”
            </TextNode>

            <TextNode>
              “Didn't you? Well, you can understand it now. You can take it from
              me that this young lady is mine, and you'll find it a very fine
              evening for a walk.”
            </TextNode>

            <TextNode>“Thank you, I am in no humour for a walk.”</TextNode>

            <TextNode>
              “Aren't you?” The man's savage eyes were blazing with anger.
              “Maybe you are in a humour for a fight, Mr. Boarder!”
            </TextNode>

            <TextNode>
              “That I am!” cried McMurdo, springing to his feet. “You never said
              a more welcome word.”
            </TextNode>

            <TextNode>
              “For God's sake, Jack! Oh, for God's sake!” cried poor, distracted
              Ettie. “Oh, Jack, Jack, he will hurt you!”
            </TextNode>

            <TextNode>
              “Oh, it's Jack, is it?” said Baldwin with an oath. “You've come to
              that already, have you?”
            </TextNode>

            <TextNode>
              “Oh, Ted, be reasonable—be kind! For my sake, Ted, if ever you
              loved me, be big-hearted and forgiving!”
            </TextNode>

            <TextNode>
              “I think, Ettie, that if you were to leave us alone we could get
              this thing settled,” said McMurdo quietly. “Or maybe, Mr. Baldwin,
              you will take a turn down the street with me. It's a fine evening,
              and there's some open ground beyond the next block.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page257;
