'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import {
  BASE_PATH_DEMO,
  BASE_PATH_READ,
} from '@/constants/book-master-english-with-sherlock-holmes/main';
import { useBookVersion } from '@/context/book-version/Context';
import { useUrlUpdate } from '@/hooks/use-url-update';
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page156({
  pageNumber,
  hidePageNumber,
  viewportHeight,
}: PageProps): ReactElement {
  const sectionRef = useRef<HTMLElement | null>(null);
  const bookVersion = useBookVersion();
  const basePath =
    bookVersion === BookVersion.DEMO ? BASE_PATH_DEMO : BASE_PATH_READ;

  useUrlUpdate({
    pageRef: sectionRef,
    currentPage: pageNumber,
    basePath,
  });

  return (
    <Page
      id={`page-${pageNumber}`}
      viewportHeight={viewportHeight}
      className='mb-5'
      ref={sectionRef}
    >
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE GREEK INTERPRETER'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              During my long and intimate acquaintance with Mr. Sherlock Holmes
              I had never heard him refer to his relations, and hardly ever to
              his own early life. This reticence upon his part had increased the
              somewhat inhuman effect which he produced upon me, until sometimes
              I found myself regarding him as an isolated phenomenon, a brain
              without a heart, as deficient in human sympathy as he was
              pre-eminent in intelligence. His aversion to women and his
              disinclination to form new friendships were both typical of his
              unemotional character, but not more so than his complete
              suppression of every reference to his own people. I had come to
              believe that he was an orphan with no relatives living, but one
              day, to my very great surprise, he began to talk to me about his
              brother.
            </TextNode>

            <TextNode>
              It was after tea on a summer evening, and the conversation, which
              had roamed in a desultory, spasmodic fashion from golf clubs to
              the causes of the change in the obliquity of the ecliptic, came
              round at last to the question of atavism and hereditary aptitudes.
              The point under discussion was, how far any singular gift in an
              individual was due to his ancestry and how far to his own early
              training.
            </TextNode>

            <TextNode>
              “In your own case,” said I, “from all that you have told me, it
              seems obvious that your faculty of observation and your peculiar
              facility for deduction are due to your own systematic training.”
            </TextNode>

            <TextNode>
              “To some extent,” he answered, thoughtfully. “My ancestors were
              country squires, who appear to have led much the same life as is
              natural to their class. But, none the less, my turn that way is in
              my veins, and may have come with my grandmother, who was the
              sister of Vernet, the French artist. Art in the blood is liable to
              take the strangest forms.”
            </TextNode>

            <TextNode>“But how do you know that it is hereditary?”</TextNode>

            <TextNode>
              “Because my brother Mycroft possesses it in a larger degree than I
              do.”
            </TextNode>

            <TextNode>
              This was news to me indeed. If there were another man with such
              singular powers in England, how was it that neither police nor
              public had heard of him? I put the question, with a hint that it
              was my companion's modesty which made him acknowledge his brother
              as his superior. Holmes laughed at my suggestion.
            </TextNode>

            <TextNode>
              “My dear Watson,” said he, “I cannot agree with those who rank
              modesty among the virtues. To the logician all things should be
              seen exactly as they are, and to underestimate one's self is as
              much a departure from truth as to exaggerate one's own powers.
              When I say, therefore, that Mycroft has better powers of
              observation than I, you may take it that I am speaking the exact
              and literal truth.”
            </TextNode>

            <TextNode>“Is he your junior?”</TextNode>

            <TextNode>“Seven years my senior.”</TextNode>

            <TextNode>“How comes it that he is unknown?”</TextNode>

            <TextNode>“Oh, he is very well known in his own circle.”</TextNode>

            <TextNode>“Where, then?”</TextNode>

            <TextNode>“Well, in the Diogenes Club, for example.”</TextNode>

            <TextNode>
              I had never heard of the institution, and my face must have
              proclaimed as much, for Sherlock Holmes pulled out his watch.
            </TextNode>

            <TextNode>
              “The Diogenes Club is the queerest club in London, and Mycroft one
              of the queerest men. He's always there from quarter to five to
              twenty to eight. It's six now, so if you care for a stroll this
              beautiful evening I shall be very happy to introduce you to two
              curiosities.”
            </TextNode>

            <TextNode>
              Five minutes later we were in the street, walking towards Regent's
              Circus.
            </TextNode>

            <TextNode>
              “You wonder,” said my companion, “why it is that Mycroft does not
              use his powers for detective work. He is incapable of it.”
            </TextNode>

            <TextNode>“But I thought you said—”</TextNode>

            <TextNode>
              “I said that he was my superior in observation and deduction. If
              the art of the detective began and ended in reasoning from an
              arm-chair, my brother would be the greatest criminal agent that
              ever lived. But he has no ambition and no energy. He will not even
              go out of his way to verify his own solution, and would rather be
              considered wrong than take the trouble to prove himself right.
              Again and again I have taken a problem to him, and have received
              an explanation which has afterwards proved to be the correct one.
              And yet he was absolutely incapable of working out the practical
              points which must be gone into before a case could be laid before
              a judge or jury.”
            </TextNode>

            <TextNode>“It is not his profession, then?”</TextNode>

            <TextNode>
              “By no means. What is to me a means of livelihood is to him the
              merest hobby of a dilettante. He has an extraordinary faculty for
              figures, and audits the books in some of the government
              departments. Mycroft lodges in Pall Mall, and he walks round the
              corner into Whitehall every morning and back every evening. From
              year's end to year's end he takes no other exercise, and is seen
              nowhere else, except only in the Diogenes Club, which is just
              opposite his rooms.”
            </TextNode>

            <TextNode>“I cannot recall the name.”</TextNode>

            <TextNode>
              “Very likely not. There are many men in London, you know, who,
              some from shyness, some from misanthropy, have no wish for the
              company of their fellows. Yet they are not averse to comfortable
              chairs and the latest periodicals. It is for the convenience of
              these that the Diogenes Club was started, and it now contains the
              most unsociable and unclubable men in town. No member is permitted
              to take the least notice of any other one. Save in the Stranger's
              Room, no talking is, under any circumstances, allowed, and three
              offences, if brought to the notice of the committee, render the
              talker liable to expulsion. My brother was one of the founders,
              and I have myself found it a very soothing atmosphere.”
            </TextNode>

            <TextNode>
              We had reached Pall Mall as we talked, and were walking down it
              from the St. James's end. Sherlock Holmes stopped at a door some
              little distance from the Carlton, and, cautioning me not to speak,
              he led the way into the hall. Through the glass paneling I caught
              a glimpse of a large and luxurious room, in which a considerable
              number of men were sitting about and reading papers, each in his
              own little nook. Holmes showed me into a small chamber which
              looked out into Pall Mall, and then, leaving me for a minute, he
              came back with a companion whom I knew could only be his brother.
            </TextNode>

            <TextNode>
              Mycroft Holmes was a much larger and stouter man than Sherlock.
              His body was absolutely corpulent, but his face, though massive,
              had preserved something of the sharpness of expression which was
              so remarkable in that of his brother. His eyes, which were of a
              peculiarly light, watery gray, seemed to always retain that
              far-away, introspective look which I had only observed in
              Sherlock's when he was exerting his full powers.
            </TextNode>

            <TextNode>
              “I am glad to meet you, sir,” said he, putting out a broad, fat
              hand like the flipper of a seal. “I hear of Sherlock everywhere
              since you became his chronicler. By the way, Sherlock, I expected
              to see you round last week, to consult me over that Manor House
              case. I thought you might be a little out of your depth.”
            </TextNode>

            <TextNode>“No, I solved it,” said my friend, smiling.</TextNode>

            <TextNode>“It was Adams, of course.”</TextNode>

            <TextNode>“Yes, it was Adams.”</TextNode>

            <TextNode>
              “I was sure of it from the first.” The two sat down together in
              the bow-window of the club. “To any one who wishes to study
              mankind this is the spot,” said Mycroft. “Look at the magnificent
              types! Look at these two men who are coming towards us, for
              example.”
            </TextNode>

            <TextNode>“The billiard-marker and the other?”</TextNode>

            <TextNode>“Precisely. What do you make of the other?”</TextNode>

            <TextNode>
              The two men had stopped opposite the window. Some chalk marks over
              the waistcoat pocket were the only signs of billiards which I
              could see in one of them. The other was a very small, dark fellow,
              with his hat pushed back and several packages under his arm.
            </TextNode>

            <TextNode>“An old soldier, I perceive,” said Sherlock.</TextNode>

            <TextNode>
              “And very recently discharged,” remarked the brother.
            </TextNode>

            <TextNode>“Served in India, I see.”</TextNode>

            <TextNode>“And a non-commissioned officer.”</TextNode>

            <TextNode>“Royal Artillery, I fancy,” said Sherlock.</TextNode>

            <TextNode>“And a widower.”</TextNode>

            <TextNode>“But with a child.”</TextNode>

            <TextNode>“Children, my dear boy, children.”</TextNode>

            <TextNode>
              “Come,” said I, laughing, “this is a little too much.”
            </TextNode>

            <TextNode>
              “Surely,” answered Holmes, “it is not hard to say that a man with
              that bearing, expression of authority, and sunbaked skin, is a
              soldier, is more than a private, and is not long from India.”
            </TextNode>

            <TextNode>
              “That he has not left the service long is shown by his still
              wearing his ‘ammunition boots’, as they are called,” observed
              Mycroft.
            </TextNode>

            <TextNode>
              “He had not the cavalry stride, yet he wore his hat on one side,
              as is shown by the lighter skin of that side of his brow. His
              weight is against his being a sapper. He is in the artillery.”
            </TextNode>

            <TextNode>
              “Then, of course, his complete mourning shows that he has lost
              some one very dear. The fact that he is doing his own shopping
              looks as though it were his wife. He has been buying things for
              children, you perceive. There is a rattle, which shows that one of
              them is very young. The wife probably died in childbed. The fact
              that he has a picture-book under his arm shows that there is
              another child to be thought&nbsp;of.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              I began to understand what my friend meant when he said that his
              brother possessed even keener faculties that he did himself. He
              glanced across at me and smiled. Mycroft took snuff from a
              tortoise-shell box, and brushed away the wandering grains from his
              coat front with a large, red silk handkerchief.
            </TextNode>

            <TextNode>
              “By the way, Sherlock,” said he, “I have had something quite after
              your own heart—a most singular problem—submitted to my judgment. I
              really had not the energy to follow it up save in a very
              incomplete fashion, but it gave me a basis for some pleasing
              speculation. If you would care to hear the facts—”
            </TextNode>

            <TextNode>“My dear Mycroft, I should be delighted.”</TextNode>

            <TextNode>
              The brother scribbled a note upon a leaf of his pocket-book, and,
              ringing the bell, he handed it to the waiter.
            </TextNode>

            <TextNode>
              “I have asked Mr. Melas to step across,” said he. “He lodges on
              the floor above me, and I have some slight acquaintance with him,
              which led him to come to me in his perplexity. Mr. Melas is a
              Greek by extraction, as I understand, and he is a remarkable
              linguist. He earns his living partly as interpreter in the law
              courts and partly by acting as guide to any wealthy Orientals who
              may visit the Northumberland Avenue hotels. I think I will leave
              him to tell his very remarkable experience in his own fashion.”
            </TextNode>

            <TextNode>
              A few minutes later we were joined by a short, stout man whose
              olive face and coal-black hair proclaimed his Southern origin,
              though his speech was that of an educated Englishman. He shook
              hands eagerly with Sherlock Holmes, and his dark eyes sparkled
              with pleasure when he understood that the specialist was anxious
              to hear his story.
            </TextNode>

            <TextNode>
              “I do not believe that the police credit me—on my word, I do not,”
              said he in a wailing voice. “Just because they have never heard of
              it before, they think that such a thing cannot be. But I know that
              I shall never be easy in my mind until I know what has become of
              my poor man with the sticking-plaster upon his face.”
            </TextNode>

            <TextNode>“I am all attention,” said Sherlock Holmes.</TextNode>

            <TextNode>
              “This is Wednesday evening,” said Mr. Melas. “Well then, it was
              Monday night—only two days ago, you understand—that all this
              happened. I am an interpreter, as perhaps my neighbor there has
              told you. I interpret all languages—or nearly all—but as I am a
              Greek by birth and with a Grecian name, it is with that particular
              tongue that I am principally associated. For many years I have
              been the chief Greek interpreter in London, and my name is very
              well known in the hotels.
            </TextNode>

            <TextNode>
              It happens not unfrequently that I am sent for at strange hours by
              foreigners who get into difficulties, or by travelers who arrive
              late and wish my services. I was not surprised, therefore, on
              Monday night when a Mr. Latimer, a very fashionably dressed young
              man, came up to my rooms and asked me to accompany him in a cab
              which was waiting at the door. A Greek friend had come to see him
              upon business, he said, and as he could speak nothing but his own
              tongue, the services of an interpreter were indispensable. He gave
              me to understand that his house was some little distance off, in
              Kensington, and he seemed to be in a great hurry, bustling me
              rapidly into the cab when we had descended to the street.
            </TextNode>

            <TextNode>
              “I say into the cab, but I soon became doubtful as to whether it
              was not a carriage in which I found myself. It was certainly more
              roomy than the ordinary four-wheeled disgrace to London, and the
              fittings, though frayed, were of rich quality. Mr. Latimer seated
              himself opposite to me and we started off through Charing Cross
              and up the Shaftesbury Avenue. We had come out upon Oxford Street
              and I had ventured some remark as to this being a roundabout way
              to Kensington, when my words were arrested by the extraordinary
              conduct of my companion.
            </TextNode>

            <TextNode>
              “He began by drawing a most formidable-looking bludgeon loaded
              with lead from his pocket, and switching it backward and forward
              several times, as if to test its weight and strength. Then he
              placed it without a word upon the seat beside him. Having done
              this, he drew up the windows on each side, and I found to my
              astonishment that they were covered with paper so as to prevent my
              seeing through them.
            </TextNode>

            <TextNode>
              “‘I am sorry to cut off your view, Mr. Melas,’ said he. ‘The fact
              is that I have no intention that you should see what the place is
              to which we are driving. It might possibly be inconvenient to me
              if you could find your way there again.’
            </TextNode>

            <TextNode>
              “As you can imagine, I was utterly taken aback by such an address.
              My companion was a powerful, broad-shouldered young fellow, and,
              apart from the weapon, I should not have had the slightest chance
              in a struggle with him.
            </TextNode>

            <TextNode>
              “‘This is very extraordinary conduct, Mr. Latimer,’ I stammered.
              ‘You must be aware that what you are doing is quite illegal.’
            </TextNode>

            <TextNode>
              “‘It is somewhat of a liberty, no doubt,’ said he, ‘but we'll make
              it up to you. I must warn you, however, Mr. Melas, that if at any
              time to-night you attempt to raise an alarm or do anything which
              is against my interests, you will find it a very serious thing. I
              beg you to remember that no one knows where you are, and that,
              whether you are in this carriage or in my house, you are equally
              in my power.’
            </TextNode>

            <TextNode>
              “His words were quiet, but he had a rasping way of saying them
              which was very menacing. I sat in silence wondering what on earth
              could be his reason for kidnapping me in this extraordinary
              fashion. Whatever it might be, it was perfectly clear that there
              was no possible use in my resisting, and that I could only wait to
              see what might befall.
            </TextNode>

            <TextNode>
              “For nearly two hours we drove without my having the least clue as
              to where we were going. Sometimes the rattle of the stones told of
              a paved causeway, and at others our smooth, silent course
              suggested asphalt; but, save by this variation in sound, there was
              nothing at all which could in the remotest way help me to form a
              guess as to where we were. The paper over each window was
              impenetrable to light, and a blue curtain was drawn across the
              glass work in front. It was a quarter-past seven when we left Pall
              Mall, and my watch showed me that it was ten minutes to nine when
              we at last came to a standstill. My companion let down the window,
              and I caught a glimpse of a low, arched doorway with a lamp
              burning above it. As I was hurried from the carriage it swung
              open, and I found myself inside the house, with a vague impression
              of a lawn and trees on each side of me as I entered. Whether these
              were private grounds, however, or bona-fide country was more than
              I could possibly venture to say.
            </TextNode>

            <TextNode>
              “There was a colored gas-lamp inside which was turned so low that
              I could see little save that the hall was of some size and hung
              with pictures. In the dim light I could make out that the person
              who had opened the door was a small, mean-looking, middle-aged man
              with rounded shoulders. As he turned towards us the glint of the
              light showed me that he was wearing glasses.
            </TextNode>

            <TextNode>“‘Is this Mr. Melas, Harold?’ said he.</TextNode>

            <TextNode>“‘Yes.’</TextNode>

            <TextNode>
              “‘Well done, well done! No ill-will, Mr. Melas, I hope, but we
              could not get on without you. If you deal fair with us you'll not
              regret it, but if you try any tricks, God help you!’ He spoke in a
              nervous, jerky fashion, and with little giggling laughs in
              between, but somehow he impressed me with fear more than the
              other.
            </TextNode>

            <TextNode>“‘What do you want with me?’ I asked.</TextNode>

            <TextNode>
              “‘Only to ask a few questions of a Greek gentleman who is visiting
              us, and to let us have the answers. But say no more than you are
              told to say, or—’ here came the nervous giggle again—‘you had
              better never have been born.’
            </TextNode>

            <TextNode>
              “As he spoke he opened a door and showed the way into a room which
              appeared to be very richly furnished, but again the only light was
              afforded by a single lamp half-turned down. The chamber was
              certainly large, and the way in which my feet sank into the carpet
              as I stepped across it told me of its richness. I caught glimpses
              of velvet chairs, a high white marble mantel-piece, and what
              seemed to be a suit of Japanese armor at one side of it. There was
              a chair just under the lamp, and the elderly man motioned that I
              should sit in it. The younger had left us, but he suddenly
              returned through another door, leading with him a gentleman clad
              in some sort of loose dressing-gown who moved slowly towards us.
              As he came into the circle of dim light which enabled me to see
              him more clearly I was thrilled with horror at his appearance. He
              was deadly pale and terribly emaciated, with the protruding,
              brilliant eyes of a man whose spirit was greater than his
              strength. But what shocked me more than any signs of physical
              weakness was that his face was grotesquely criss-crossed with
              sticking-plaster, and that one large pad of it was fastened over
              his mouth.
            </TextNode>

            <TextNode>
              “‘Have you the slate, Harold?’ cried the older man, as this
              strange being fell rather than sat down into a chair. ‘Are his
              hands loose? Now, then, give him the pencil. You are to ask the
              questions, Mr. Melas, and he will write the answers. Ask him first
              of all whether he is prepared to sign the papers?’
            </TextNode>

            <TextNode>“The man's eyes flashed fire.</TextNode>

            <TextNode>“‘Never!’ he wrote in Greek upon the slate.</TextNode>

            <TextNode>
              “‘On no condition?’ I asked, at the bidding of our tyrant.
            </TextNode>

            <TextNode>
              “‘Only if I see her married in my presence by a Greek priest whom
              I know.’
            </TextNode>

            <TextNode>“The man giggled in his venomous way.</TextNode>

            <TextNode>“‘You know what awaits you, then?’</TextNode>

            <TextNode>“‘I care nothing for myself.’</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page156;
