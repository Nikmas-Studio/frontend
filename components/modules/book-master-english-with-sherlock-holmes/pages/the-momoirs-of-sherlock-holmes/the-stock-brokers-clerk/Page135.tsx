'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
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

function Page135({
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
        title="THE STOCK-BROKER'S CLERK"
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “That's just about all that passed between us, as near as I can
              remember. You can imagine, Dr. Watson, how pleased I was at such
              an extraordinary bit of good fortune. I sat up half the night
              hugging myself over it, and next day I was off to Birmingham in a
              train that would take me in plenty time for my appointment. I took
              my things to a hotel in New Street, and then I made my way to the
              address which had been given me.
            </TextNode>

            <TextNode>
              “It was a quarter of an hour before my time, but I thought that
              would make no difference. 126b was a passage between two large
              shops, which led to a winding stone stair, from which there were
              many flats, let as offices to companies or professional men. The
              names of the occupants were painted at the bottom on the wall, but
              there was no such name as the Franco-Midland Hardware Company,
              Limited. I stood for a few minutes with my heart in my boots,
              wondering whether the whole thing was an elaborate hoax or not,
              when up came a man and addressed me. He was very like the chap I
              had seen the night before, the same figure and voice, but he was
              clean shaven and his hair was lighter.
            </TextNode>

            <TextNode>“ ‘Are you Mr. Hall Pycroft?’ he asked.</TextNode>

            <TextNode>“ ‘Yes,’ said I.</TextNode>

            <TextNode>
              “ ‘Oh! I was expecting you, but you are a trifle before your time.
              I had a note from my brother this morning in which he sang your
              praises very loudly.’
            </TextNode>

            <TextNode>
              “ ‘I was just looking for the offices when you came.’
            </TextNode>

            <TextNode>
              “ ‘We have not got our name up yet, for we only secured these
              temporary premises last week. Come up with me, and we will talk
              the matter over.’
            </TextNode>

            <TextNode>
              “I followed him to the top of a very lofty stair, and there, right
              under the slates, were a couple of empty, dusty little rooms,
              uncarpeted and uncurtained, into which he led me. I had thought of
              a great office with shining tables and rows of clerks, such as I
              was used to, and I dare say I stared rather straight at the two
              deal chairs and one little table, which, with a ledger and a waste
              paper basket, made up the whole furniture.
            </TextNode>

            <TextNode>
              “ ‘Don't be disheartened, Mr. Pycroft,’ said my new acquaintance,
              seeing the length of my face. ‘Rome was not built in a day, and we
              have lots of money at our backs, though we don't cut much dash yet
              in offices. Pray sit down, and let me have your letter.’
            </TextNode>

            <TextNode>
              “I gave it to him, and her read it over very carefully.
            </TextNode>

            <TextNode>
              “ ‘You seem to have made a vast impression upon my brother
              Arthur,’ said he; ‘and I know that he is a pretty shrewd judge. He
              swears by London, you know; and I by Birmingham; but this time I
              shall follow his advice. Pray consider yourself definitely
              engaged.’
            </TextNode>

            <TextNode>“ ‘What are my duties?’ I asked.</TextNode>

            <TextNode>
              “ ‘You will eventually manage the great depot in Paris, which will
              pour a flood of English crockery into the shops of a hundred and
              thirty-four agents in France. The purchase will be completed in a
              week, and meanwhile you will remain in Birmingham and make
              yourself useful.’
            </TextNode>

            <TextNode>“ ‘How?’</TextNode>

            <TextNode>
              “For answer, he took a big red book out of a drawer.
            </TextNode>

            <TextNode>
              “ ‘This is a directory of Paris,’ said he, ‘with the trades after
              the names of the people. I want you to take it home with you, and
              to mark off all the hardware sellers, with their addresses. It
              would be of the greatest use to me to have them.’
            </TextNode>

            <TextNode>
              “ ‘Surely there are classified lists?’ I suggested.
            </TextNode>

            <TextNode>
              “ ‘Not reliable ones. Their system is different from ours. Stick
              at it, and let me have the lists by Monday, at twelve. Good-day,
              Mr. Pycroft. If you continue to show zeal and intelligence you
              will find the company a good master.’
            </TextNode>

            <TextNode>
              “I went back to the hotel with the big book under my arm, and with
              very conflicting feelings in my breast. On the one hand, I was
              definitely engaged and had a hundred pounds in my pocket; on the
              other, the look of the offices, the absence of name on the wall,
              and other of the points which would strike a business man had left
              a bad impression as to the position of my employers. However, come
              what might, I had my money, so I settled down to my task. All
              Sunday I was kept hard at work, and yet by Monday I had only got
              as far as H. I went round to my employer, found him in the same
              dismantled kind of room, and was told to keep at it until
              Wednesday, and then come again. On Wednesday it was still
              unfinished, so I hammered away until Friday—that is, yesterday.
              Then I brought it round to Mr. Harry Pinner.
            </TextNode>

            <TextNode>
              “ ‘Thank you very much,’ said he; ‘I fear that I underrated the
              difficulty of the task. This list will be of very material
              assistance to me.’
            </TextNode>

            <TextNode>“ ‘It took some time,’ said I.</TextNode>

            <TextNode>
              “ ‘And now,’ said he, ‘I want you to make a list of the furniture
              shops, for they all sell crockery.’
            </TextNode>

            <TextNode>“ ‘Very good.’</TextNode>

            <TextNode>
              “ ‘And you can come up to-morrow evening, at seven, and let me
              know how you are getting on. Don't overwork yourself. A couple of
              hours at Day's Music Hall in the evening would do you no harm
              after your labors.’ He laughed as he spoke, and I saw with a
              thrill that his second tooth upon the left-hand side had been very
              badly stuffed with gold.”
            </TextNode>

            <TextNode>
              Sherlock Holmes rubbed his hands with delight, and I stared with
              astonishment at our client.
            </TextNode>

            <TextNode>
              “You may well look surprised, Dr. Watson; but it is this way,”
              said he: “When I was speaking to the other chap in London, at the
              time that he laughed at my not going to Mawson's, I happened to
              notice that his tooth was stuffed in this very identical fashion.
              The glint of the gold in each case caught my eye, you see. When I
              put that with the voice and figure being the same, and only those
              things altered which might be changed by a razor or a wig, I could
              not doubt that it was the same man. Of course you expect two
              brothers to be alike, but not that they should have the same tooth
              stuffed in the same way. He bowed me out, and I found myself in
              the street, hardly knowing whether I was on my head or my heels.
              Back I went to my hotel, put my head in a basin of cold water, and
              tried to think it out. Why had he sent me from London to
              Birmingham? Why had he got there before me? And why had he written
              a letter from himself to himself? It was altogether too much for
              me, and I could make no sense of it. And then suddenly it struck
              me that what was dark to me might be very light to Mr. Sherlock
              Holmes. I had just time to get up to town by the night train to
              see him this morning, and to bring you both back with me to
              Birmingham.”
            </TextNode>

            <TextNode>
              There was a pause after the stock-broker's clerk had concluded his
              surprising experience. Then Sherlock Holmes cocked his eye at me,
              leaning back on the cushions with a pleased and yet critical face,
              like a connoisseur who has just taken his first sip of a comet
              vintage.
            </TextNode>

            <TextNode>
              “Rather fine, Watson, is it not?” said he. “There are points in it
              which please me. I think that you will agree with me that an
              interview with Mr. Arthur Harry Pinner in the temporary offices of
              the Franco-Midland Hardware Company, Limited, would be a rather
              interesting experience for both of us.”
            </TextNode>

            <TextNode>“But how can we do it?” I asked.</TextNode>

            <TextNode>
              “Oh, easily enough,” said Hall Pycroft, cheerily. “You are two
              friends of mine who are in want of a billet, and what could be
              more natural than that I should bring you both round to the
              managing director?”
            </TextNode>

            <TextNode>
              “Quite so, of course,” said Holmes. “I should like to have a look
              at the gentleman, and see if I can make anything of his little
              game. What qualities have you, my friend, which would make your
              services so valuable? Or is it possible that—” He began biting his
              nails and staring blankly out of the window, and we hardly drew
              another word from him until we were in New Street.
            </TextNode>

            <TextNode>
              At seven o'clock that evening we were walking, the three of us,
              down Corporation Street to the company's offices.
            </TextNode>

            <TextNode>
              “It is no use our being at all before our time,” said our client.
              “He only comes there to see me, apparently, for the place is
              deserted up to the very hour he names.”
            </TextNode>

            <TextNode>“That is suggestive,” remarked Holmes.</TextNode>

            <TextNode>
              “By Jove, I told you so!” cried the clerk. “That's he walking
              ahead of us there.”
            </TextNode>

            <TextNode>
              He pointed to a smallish, dark, well-dressed man who was bustling
              along the other side of the road. As we watched him he looked
              across at a boy who was bawling out the latest edition of the
              evening paper, and running over among the cabs and busses, he
              bought one from him. Then, clutching it in his hand, he vanished
              through a door-way.
            </TextNode>

            <TextNode>
              “There he goes!” cried Hall Pycroft. “These are the company's
              offices into which he has gone. Come with me, and I'll fix it up
              as easily as possible.”
            </TextNode>

            <TextNode>
              Following his lead, we ascended five stories, until we found
              ourselves outside a half-opened door, at which our client tapped.
              A voice within bade us enter, and we entered a bare, unfurnished
              room such as Hall Pycroft had described. At the single table sat
              the man whom we had seen in the street, with his evening paper
              spread out in front of him, and as he looked up at us it seemed to
              me that I had never looked upon a face which bore such marks of
              grief, and of something beyond grief—of a horror such as comes to
              few men in a lifetime. His brow glistened with perspiration, his
              cheeks were of the dull, dead white of a fish's belly, and his
              eyes were wild and staring. He looked at his clerk as though he
              failed to recognize him, and I could see by the astonishment
              depicted upon our conductor's face that this was by no means the
              usual appearance of his employer.
            </TextNode>

            <TextNode>“You look ill, Mr. Pinner!” he exclaimed.</TextNode>

            <TextNode>
              “Yes, I am not very well,” answered the other, making obvious
              efforts to pull himself together, and licking his dry lips before
              he spoke. “Who are these gentlemen whom you have brought with
              you?”
            </TextNode>

            <TextNode>
              “One is Mr. Harris, of Bermondsey, and the other is Mr. Price, of
              this town,” said our clerk, glibly. “They are friends of mine and
              gentlemen of experience, but they have been out of a place for
              some little time, and they hoped that perhaps you might find an
              opening for them in the company's employment.”
            </TextNode>

            <TextNode>
              “Very possibly! Very possibly!” cried Mr. Pinner with a ghastly
              smile. “Yes, I have no doubt that we shall be able to do something
              for you. What is your particular line, Mr. Harris?”
            </TextNode>

            <TextNode>“I am an accountant,” said Holmes.</TextNode>

            <TextNode>
              “Ah yes, we shall want something of the sort. And you, Mr. Price?”
            </TextNode>

            <TextNode>“A clerk,” said I.</TextNode>

            <TextNode>
              “I have every hope that the company may accommodate you. I will
              let you know about it as soon as we come to any conclusion. And
              now I beg that you will go. For God's sake leave me to myself!”
            </TextNode>

            <TextNode>
              These last words were shot out of him, as though the constraint
              which he was evidently setting upon himself had suddenly and
              utterly burst asunder. Holmes and I glanced at each other, and
              Hall Pycroft took a step towards the table.
            </TextNode>

            <TextNode>
              “You forget, Mr. Pinner, that I am here by appointment to receive
              some directions from you,” said he.
            </TextNode>

            <TextNode>
              “Certainly, Mr. Pycroft, certainly,” the other resumed in a calmer
              tone. “You may wait here a moment; and there is no reason why your
              friends should not wait with you. I will be entirely at your
              service in three minutes, if I might trespass upon your patience
              so far.” He rose with a very courteous air, and, bowing to us, he
              passed out through a door at the farther end of the room, which he
              closed behind him.
            </TextNode>

            <TextNode>
              “What now?” whispered Holmes. “Is he giving us the slip?”
            </TextNode>

            <TextNode>“Impossible,” answered Pycroft.</TextNode>

            <TextNode>“Why so?”</TextNode>

            <TextNode>“That door leads into an inner room.”</TextNode>

            <TextNode>“There is no exit?”</TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>“Is it furnished?”</TextNode>

            <TextNode>“It was empty yesterday.”</TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Then what on earth can he be doing? There is something which I
              don't understand in his manner. If ever a man was three parts mad
              with terror, that man's name is Pinner. What can have put the
              shivers on him?”
            </TextNode>

            <TextNode>
              “He suspects that we are detectives,” I suggested.
            </TextNode>

            <TextNode>“That's it,” cried Pycroft.</TextNode>

            <TextNode>
              Holmes shook his head. “He did not turn pale. He was pale when we
              entered the room,” said he. “It is just possible that—”
            </TextNode>

            <TextNode>
              His words were interrupted by a sharp rat-tat from the direction
              of the inner door.
            </TextNode>

            <TextNode>
              “What the deuce is he knocking at his own door for?” cried the
              clerk.
            </TextNode>

            <TextNode>
              Again and much louder cam the rat-tat-tat. We all gazed
              expectantly at the closed door. Glancing at Holmes, I saw his face
              turn rigid, and he leaned forward in intense excitement. Then
              suddenly came a low guggling, gargling sound, and a brisk drumming
              upon woodwork. Holmes sprang frantically across the room and
              pushed at the door. It was fastened on the inner side. Following
              his example, we threw ourselves upon it with all our weight. One
              hinge snapped, then the other, and down came the door with a
              crash. Rushing over it, we found ourselves in the inner room. It
              was empty.
            </TextNode>

            <TextNode>
              But it was only for a moment that we were at fault. At one corner,
              the corner nearest the room which we had left, there was a second
              door. Holmes sprang to it and pulled it open. A coat and waistcoat
              were lying on the floor, and from a hook behind the door, with his
              own braces round his neck, was hanging the managing director of
              the Franco-Midland Hardware Company. His knees were drawn up, his
              head hung at a dreadful angle to his body, and the clatter of his
              heels against the door made the noise which had broken in upon our
              conversation. In an instant I had caught him round the waist, and
              held him up while Holmes and Pycroft untied the elastic bands
              which had disappeared between the livid creases of skin. Then we
              carried him into the other room, where he lay with a clay-colored
              face, puffing his purple lips in and out with every breath—a
              dreadful wreck of all that he had been but five minutes before.
            </TextNode>

            <TextNode>
              “What do you think of him, Watson?” asked Holmes.
            </TextNode>

            <TextNode>
              I stooped over him and examined him. His pulse was feeble and
              intermittent, but his breathing grew longer, and there was a
              little shivering of his eyelids, which showed a thin white slit of
              ball beneath.
            </TextNode>

            <TextNode>
              “It has been touch and go with him,” said I, “but he'll live now.
              Just open that window, and hand me the water carafe.” I undid his
              collar, poured the cold water over his face, and raised and sank
              his arms until he drew a long, natural breath. “It's only a
              question of time now,” said I, as I turned away from him.
            </TextNode>

            <TextNode>
              Holmes stood by the table, with his hands deep in his trouser's
              pockets and his chin upon his breast.
            </TextNode>

            <TextNode>
              “I suppose we ought to call the police in now,” said he. “And yet
              I confess that I'd like to give them a complete case when they
              come.”
            </TextNode>

            <TextNode>
              “It's a blessed mystery to me,” cried Pycroft, scratching his
              head. “Whatever they wanted to bring me all the way up here for,
              and then—”
            </TextNode>

            <TextNode>
              “Pooh! All that is clear enough,” said Holmes impatiently. “It is
              this last sudden move.”
            </TextNode>

            <TextNode>“You understand the rest, then?”</TextNode>

            <TextNode>
              “I think that it is fairly obvious. What do you say, Watson?”
            </TextNode>

            <TextNode>
              I shrugged my shoulders. “I must confess that I am out of my
              depths,” said I.
            </TextNode>

            <TextNode>
              “Oh surely if you consider the events at first they can only point
              to one conclusion.”
            </TextNode>

            <TextNode>“What do you make of them?”</TextNode>

            <TextNode>
              “Well, the whole thing hinges upon two points. The first is the
              making of Pycroft write a declaration by which he entered the
              service of this preposterous company. Do you not see how very
              suggestive that is?”
            </TextNode>

            <TextNode>“I am afraid I miss the point.”</TextNode>

            <TextNode>
              “Well, why did they want him to do it? Not as a business matter,
              for these arrangements are usually verbal, and there was no
              earthly business reason why this should be an exception. Don't you
              see, my young friend, that they were very anxious to obtain a
              specimen of your handwriting, and had no other way of doing it?”
            </TextNode>

            <TextNode>“And why?”</TextNode>

            <TextNode>
              “Quite so. Why? When we answer that we have made some progress
              with our little problem. Why? There can be only one adequate
              reason. Someone wanted to learn to imitate your writing, and had
              to procure a specimen of it first. And now if we pass on to the
              second point we find that each throws light upon the other. That
              point is the request made by Pinner that you should not resign
              your place, but should leave the manager of this important
              business in the full expectation that a Mr. Hall Pycroft, whom he
              had never seen, was about to enter the office upon the Monday
              morning.”
            </TextNode>

            <TextNode>
              “My God!” cried our client, “what a blind beetle I have been!”
            </TextNode>

            <TextNode>
              “Now you see the point about the handwriting. Suppose that some
              one turned up in your place who wrote a completely different hand
              from that in which you had applied for the vacancy, of course the
              game would have been up. But in the interval the rogue had learned
              to imitate you, and his position was therefore secure, as I
              presume that nobody in the office had ever set eyes upon you.”
            </TextNode>

            <TextNode>“Not a soul,” groaned Hall Pycroft.</TextNode>

            <TextNode>
              “Very good. Of course it was of the utmost importance to prevent
              you from thinking better of it, and also to keep you from coming
              into contact with any one who might tell you that your double was
              at work in Mawson's office. Therefore they gave you a handsome
              advance on your salary, and ran you off to the Midlands, where
              they gave you enough work to do to prevent your going to London,
              where you might have burst their little game up. That is all plain
              enough.”
            </TextNode>

            <TextNode>
              “But why should this man pretend to be his own brother?”
            </TextNode>

            <TextNode>
              “Well, that is pretty clear also. There are evidently only two of
              them in it. The other is impersonating you at the office. This one
              acted as your engager, and then found that he could not find you
              an employer without admitting a third person into his plot. That
              he was most unwilling to do. He changed his appearance as far as
              he could, and trusted that the likeness, which you could not fail
              to observe, would be put down to a family resemblance. But for the
              happy chance of the gold stuffing, your suspicions would probably
              never have been aroused.”
            </TextNode>

            <TextNode>
              Hall Pycroft shook his clinched hands in the air. “Good Lord!” he
              cried, “while I have been fooled in this way, what has this other
              Hall Pycroft been doing at Mawson's? What should we do, Mr.
              Holmes? Tell me what to do.”
            </TextNode>

            <TextNode>“We must wire to Mawson's.”</TextNode>

            <TextNode>“They shut at twelve on Saturdays.”</TextNode>

            <TextNode>
              “Never mind. There may be some door-keeper or attendant—”
            </TextNode>

            <TextNode>
              “Ah yes, they keep a permanent guard there on account of the value
              of the securities that they hold. I remember hearing it talked of
              in the City.”
            </TextNode>

            <TextNode>
              “Very good; we shall wire to him, and see if all is well, and if a
              clerk of your name is working there. That is clear enough; but
              what is not so clear is why at sight of us one of the rogues
              should instantly walk out of the room and hang himself.”
            </TextNode>

            <TextNode>
              “The paper!” croaked a voice behind us. The man was sitting up,
              blanched and ghastly, with returning reason in his eyes, and hands
              which rubbed nervously at the broad red band which still encircled
              his throat.
            </TextNode>

            <TextNode>
              “The paper! Of course!” yelled Holmes, in a paroxysm of
              excitement. “Idiot that I was! I thought so must of our visit that
              the paper never entered my head for an instant. To be sure, the
              secret must be there.” He flattened it out upon the table, and a
              cry of triumph burst from his lips. “Look at this, Watson,” he
              cried. “It is a London paper, an early edition of the&nbsp;
              <span className='italic'>Evening Standard</span>. Here is what we
              want. Look at the headlines: ‘Crime in the City. Murder at Mawson
              & Williams's. Gigantic attempted Robbery. Capture of the
              Criminal.’ Here, Watson, we are all equally anxious to hear it, so
              kindly read it aloud to us.”
            </TextNode>

            <TextNode>
              It appeared from its position in the paper to have been the one
              event of importance in town, and the account of it ran in this
              way:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “A desperate attempt at robbery, culminating in the death of one
                man and the capture of the criminal, occurred this afternoon in
                the City. For some time back Mawson & Williams, the famous
                financial house, have been the guardians of securities which
                amount in the aggregate to a sum of considerably over a million
                sterling. So conscious was the manager of the responsibility
                which devolved upon him in consequence of the great interests at
                stake that safes of the very latest construction have been
                employed, and an armed watchman has been left day and night in
                the building. It appears that last week a new clerk named Hall
                Pycroft was engaged by the firm. This person appears to have
                been none other that Beddington, the famous forger and
                cracksman, who, with his brother, had only recently emerged from
                a five years' spell of penal servitude. By some means, which are
                not yet clear, he succeeded in winning, under a false name, this
                official position in the office, which he utilized in order to
                obtain moulding of various locks, and a thorough knowledge of
                the position of the strong room and the safes.
              </TextNode>

              <TextNode>
                “It is customary at Mawson's for the clerks to leave at midday
                on Saturday. Sergeant Tuson, of the City Police, was somewhat
                surprised, therefore to see a gentleman with a carpet bag come
                down the steps at twenty minutes past one. His suspicions being
                aroused, the sergeant followed the man, and with the aid of
                Constable Pollack succeeded, after a most desperate resistance,
                in arresting him. It was at once clear that a daring and
                gigantic robbery had been committed. Nearly a hundred thousand
                pounds' worth of American railway bonds, with a large amount of
                scrip in mines and other companies, was discovered in the bag.
                On examining the premises the body of the unfortunate watchman
                was found doubled up and thrust into the largest of the safes,
                where it would not have been discovered until Monday morning had
                it not been for the prompt action of Sergeant Tuson. The man's
                skull had been shattered by a blow from a poker delivered from
                behind. There could be no doubt that Beddington had obtained
                entrance by pretending that he had left something behind him,
                and having murdered the watchman, rapidly rifled the large safe,
                and then made off with his booty. His brother, who usually works
                with him, has not appeared in this job as far as can at present
                be ascertained, although the police are making energetic
                inquiries as to his whereabouts.”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “Well, we may save the police some little trouble in that
              direction,” said Holmes, glancing at the haggard figure huddled up
              by the window. “Human nature is a strange mixture, Watson. You see
              that even a villain and murderer can inspire such affection that
              his brother turns to suicide when he learns that his neck is
              forfeited. However, we have no choice as to our action. The doctor
              and I will remain on guard, Mr. Pycroft, if you will have the
              kindness to step out for the police.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page135;
