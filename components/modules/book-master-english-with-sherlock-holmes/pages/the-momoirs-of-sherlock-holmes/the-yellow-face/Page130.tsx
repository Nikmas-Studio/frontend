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

function Page130({
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
        title='THE&nbsp;YELLOW&nbsp;FACE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              [In publishing these short sketches based upon the numerous cases
              in which my companion's singular gifts have made us the listeners
              to, and eventually the actors in, some strange drama, it is only
              natural that I should dwell rather upon his successes than upon
              his failures. And this not so much for the sake of his
              reputations—for, indeed, it was when he was at his wits' end that
              his energy and his versatility were most admirable—but because
              where he failed it happened too often that no one else succeeded,
              and that the tale was left forever without a conclusion. Now and
              again, however, it chanced that even when he erred, the truth was
              still discovered. I have noted of some half-dozen cases of the
              kind of which “The Adventure of the Musgrave Ritual” and that
              which I am about to recount are the two which present the
              strongest features of interest.]
            </TextNode>

            <TextNode>
              Sherlock Holmes was a man who seldom took exercise for exercise's
              sake. Few men were capable of greater muscular effort, and he was
              undoubtedly one of the finest boxers of his weight that I have
              ever seen; but he looked upon aimless bodily exertion as a waste
              of energy, and he seldom bestirred himself save when there was
              some professional object to be served. Then he was absolutely
              untiring and indefatigable. That he should have kept himself in
              training under such circumstances is remarkable, but his diet was
              usually of the sparest, and his habits were simple to the verge of
              austerity. Save for the occasional use of cocaine, he had no
              vices, and he only turned to the drug as a protest against the
              monotony of existence when cases were scanty and the papers
              uninteresting.
            </TextNode>

            <TextNode>
              One day in early spring he had so far relaxed as to go for a walk
              with me in the Park, where the first faint shoots of green were
              breaking out upon the elms, and the sticky spear-heads of the
              chestnuts were just beginning to burst into their five-fold
              leaves. For two hours we rambled about together, in silence for
              the most part, as befits two men who know each other intimately.
              It was nearly five before we were back in Baker Street once more.
            </TextNode>

            <TextNode>
              “Beg pardon, sir,” said our page-boy, as he opened the door.
              “There's been a gentleman here asking for you, sir.”
            </TextNode>

            <TextNode>
              Holmes glanced reproachfully at me. “So much for afternoon walks!”
              said he. “Has this gentleman gone, then?”
            </TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“Didn't you ask him in?”</TextNode>

            <TextNode>“Yes, sir; he came in.”</TextNode>

            <TextNode>“How long did he wait?”</TextNode>

            <TextNode>
              “Half an hour, sir. He was a very restless gentleman, sir,
              a-walkin' and a-stampin' all the time he was here. I was waitin'
              outside the door, sir, and I could hear him. At last he outs into
              the passage, and he cries, ‘Is that man never goin' to come?’
              Those were his very words, sir. ‘You'll only need to wait a little
              longer,’ says I. ‘Then I'll wait in the open air, for I feel half
              choked,’ says he. ‘I'll be back before long.’ And with that he ups
              and he outs, and all I could say wouldn't hold him back.”
            </TextNode>

            <TextNode>
              “Well, well, you did your best,” said Holmes, as we walked into
              our room. “It's very annoying, though, Watson. I was badly in need
              of a case, and this looks, from the man's impatience, as if it
              were of importance. Hullo! That's not your pipe on the table. He
              must have left his behind him. A nice old brier with a good long
              stem of what the tobacconists call amber. I wonder how many real
              amber mouthpieces there are in London? Some people think that a
              fly in it is a sign. Well, he must have been disturbed in his mind
              to leave a pipe behind him which he evidently values highly.”
            </TextNode>

            <TextNode>
              “How do you know that he values it highly?” I asked.
            </TextNode>

            <TextNode>
              “Well, I should put the original cost of the pipe at seven and
              sixpence. Now it has, you see, been twice mended, once in the
              wooden stem and once in the amber. Each of these mends, done, as
              you observe, with silver bands, must have cost more than the pipe
              did originally. The man must value the pipe highly when he prefers
              to patch it up rather than buy a new one with the same money.”
            </TextNode>

            <TextNode>
              “Anything else?” I asked, for Holmes was turning the pipe about in
              his hand, and staring at it in his peculiar pensive way.
            </TextNode>

            <TextNode>
              He held it up and tapped on it with his long, thin fore-finger, as
              a professor might who was lecturing on a bone.
            </TextNode>

            <TextNode>
              “Pipes are occasionally of extraordinary interest,” said he.
              “Nothing has more individuality, save perhaps watches and
              bootlaces. The indications here, however, are neither very marked
              nor very important. The owner is obviously a muscular man,
              left-handed, with an excellent set of teeth, careless in his
              habits, and with no need to practise economy.”
            </TextNode>

            <TextNode>
              My friend threw out the information in a very offhand way, but I
              saw that he cocked his eye at me to see if I had followed his
              reasoning.
            </TextNode>

            <TextNode>
              “You think a man must be well-to-do if he smokes a seven-shilling
              pipe,” said I.
            </TextNode>

            <TextNode>
              “This is Grosvenor mixture at eightpence an ounce,” Holmes
              answered, knocking a little out on his palm. “As he might get an
              excellent smoke for half the price, he has no need to practise
              economy.”
            </TextNode>

            <TextNode>“And the other points?”</TextNode>

            <TextNode>
              “He has been in the habit of lighting his pipe at lamps and
              gas-jets. You can see that it is quite charred all down one side.
              Of course a match could not have done that. Why should a man hold
              a match to the side of his pipe? But you cannot light it at a lamp
              without getting the bowl charred. And it is all on the right side
              of the pipe. From that I gather that he is a left-handed man. You
              hold your own pipe to the lamp, and see how naturally you, being
              right-handed, hold the left side to the flame. You might do it
              once the other way, but not as a constancy. This has always been
              held so. Then he has bitten through his amber. It takes a
              muscular, energetic fellow, and one with a good set of teeth, to
              do that. But if I am not mistaken I hear him upon the stair, so we
              shall have something more interesting than his pipe to study.”
            </TextNode>

            <TextNode>
              An instant later our door opened, and a tall young man entered the
              room. He was well but quietly dressed in a dark-gray suit, and
              carried a brown wide-awake in his hand. I should have put him at
              about thirty, though he was really some years older.
            </TextNode>

            <TextNode>
              “I beg your pardon,” said he, with some embarrassment; “I suppose
              I should have knocked. Yes, of course I should have knocked. The
              fact is that I am a little upset, and you must put it all down to
              that.” He passed his hand over his forehead like a man who is half
              dazed, and then fell rather than sat down upon a chair.
            </TextNode>

            <TextNode>
              “I can see that you have not slept for a night or two,” said
              Holmes, in his easy, genial way. “That tries a man's nerves more
              than work, and more even than pleasure. May I ask how I can help
              you?”
            </TextNode>

            <TextNode>
              “I wanted your advice, sir. I don't know what to do and my whole
              life seems to have gone to pieces.”
            </TextNode>

            <TextNode>
              “You wish to employ me as a consulting detective?”
            </TextNode>

            <TextNode>
              “Not that only. I want your opinion as a judicious man—as a man of
              the world. I want to know what I ought to do next. I hope to God
              you'll be able to tell me.”
            </TextNode>

            <TextNode>
              He spoke in little, sharp, jerky outbursts, and it seemed to me
              that to speak at all was very painful to him, and that his will
              all through was overriding his inclinations.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “It's a very delicate thing,” said he. “One does not like to speak
              of one's domestic affairs to strangers. It seems dreadful to
              discuss the conduct of one's wife with two men whom I have never
              seen before. It's horrible to have to do it. But I've got to the
              end of my tether, and I must have advice.”
            </TextNode>

            <TextNode>“My dear Mr. Grant Munro—” began Holmes.</TextNode>

            <TextNode>
              Our visitor sprang from his chair. “What!” he cried, “you know my
              name?”
            </TextNode>

            <TextNode>
              “If you wish to preserve your incognito,” said Holmes, smiling, “I
              would suggest that you cease to write your name upon the lining of
              your hat, or else that you turn the crown towards the person whom
              you are addressing. I was about to say that my friend and I have
              listened to a good many strange secrets in this room, and that we
              have had the good fortune to bring peace to many troubled souls. I
              trust that we may do as much for you. Might I beg you, as time may
              prove to be of importance, to furnish me with the facts of your
              case without further delay?”
            </TextNode>

            <TextNode>
              Our visitor again passed his hand over his forehead, as if he
              found it bitterly hard. From every gesture and expression I could
              see that he was a reserved, self-contained man, with a dash of
              pride in his nature, more likely to hide his wounds than to expose
              them. Then suddenly, with a fierce gesture of his closed hand,
              like one who throws reserve to the winds, he began.
            </TextNode>

            <TextNode>
              “The facts are these, Mr. Holmes,” said he. “I am a married man,
              and have been so for three years. During that time my wife and I
              have loved each other as fondly and lived as happily as any two
              that ever were joined. We have not had a difference, not one, in
              thought or word or deed. And now, since last Monday, there has
              suddenly sprung up a barrier between us, and I find that there is
              something in her life and in her thought of which I know as little
              as if she were the woman who brushes by me in the street. We are
              estranged, and I want to know why.
            </TextNode>

            <TextNode>
              “Now there is one thing that I want to impress upon you before I
              go any further, Mr. Holmes. Effie loves me. Don't let there be any
              mistake about that. She loves me with her whole heart and soul,
              and never more than now. I know it. I feel it. I don't want to
              argue about that. A man can tell easily enough when a woman loves
              him. But there's this secret between us, and we can never be the
              same until it is cleared.”
            </TextNode>

            <TextNode>
              “Kindly let me have the facts, Mr. Munro,” said Holmes, with some
              impatience.
            </TextNode>

            <TextNode>
              “I'll tell you what I know about Effie's history. She was a widow
              when I met her first, though quite young—only twenty-five. Her
              name then was Mrs. Hebron. She went out to America when she was
              young, and lived in the town of Atlanta, where she married this
              Hebron, who was a lawyer with a good practice. They had one child,
              but the yellow fever broke out badly in the place, and both
              husband and child died of it. I have seen his death certificate.
              This sickened her of America, and she came back to live with a
              maiden aunt at Pinner, in Middlesex. I may mention that her
              husband had left her comfortably off, and that she had a capital
              of about four thousand five hundred pounds, which had been so well
              invested by him that it returned an average of seven per cent. She
              had only been six months at Pinner when I met her; we fell in love
              with each other, and we married a few weeks afterwards.
            </TextNode>

            <TextNode>
              “I am a hop merchant myself, and as I have an income of seven or
              eight hundred, we found ourselves comfortably off, and took a nice
              eighty-pound-a-year villa at Norbury. Our little place was very
              countrified, considering that it is so close to town. We had an
              inn and two houses a little above us, and a single cottage at the
              other side of the field which faces us, and except those there
              were no houses until you got half way to the station. My business
              took me into town at certain seasons, but in summer I had less to
              do, and then in our country home my wife and I were just as happy
              as could be wished. I tell you that there never was a shadow
              between us until this accursed affair began.
            </TextNode>

            <TextNode>
              “There's one thing I ought to tell you before I go further. When
              we married, my wife made over all her property to me—rather
              against my will, for I saw how awkward it would be if my business
              affairs went wrong. However, she would have it so, and it was
              done. Well, about six weeks ago she came to me.
            </TextNode>

            <TextNode>
              “‘Jack,’ said she, ‘when you took my money you said that if ever I
              wanted any I was to ask you for it.’
            </TextNode>

            <TextNode>“‘Certainly,’ said I. ‘It's all your own.’</TextNode>

            <TextNode>“‘Well,’ said she, ‘I want a hundred pounds.’</TextNode>

            <TextNode>
              “I was a bit staggered at this, for I had imagined it was simply a
              new dress or something of the kind that she was after.
            </TextNode>

            <TextNode>“‘What on earth for?’ I asked.</TextNode>

            <TextNode>
              “‘Oh,’ said she, in her playful way, ‘you said that you were only
              my banker, and bankers never ask questions, you know.’
            </TextNode>

            <TextNode>
              “‘If you really mean it, of course you shall have the money,’ said
              I.
            </TextNode>

            <TextNode>“‘Oh, yes, I really mean it.’</TextNode>

            <TextNode>“‘And you won't tell me what you want it for?’</TextNode>

            <TextNode>
              “‘Some day, perhaps, but not just at present, Jack.’
            </TextNode>

            <TextNode>
              “So I had to be content with that, though it was the first time
              that there had ever been any secret between us. I gave her a
              check, and I never thought any more of the matter. It may have
              nothing to do with what came afterwards, but I thought it only
              right to mention it.
            </TextNode>

            <TextNode>
              “Well, I told you just now that there is a cottage not far from
              our house. There is just a field between us, but to reach it you
              have to go along the road and then turn down a lane. Just beyond
              it is a nice little grove of Scotch firs, and I used to be very
              fond of strolling down there, for trees are always a neighborly
              kind of things. The cottage had been standing empty this eight
              months, and it was a pity, for it was a pretty two storied place,
              with an old-fashioned porch and honeysuckle about it. I have stood
              many a time and thought what a neat little homestead it would
              make.
            </TextNode>

            <TextNode>
              “Well, last Monday evening I was taking a stroll down that way,
              when I met an empty van coming up the lane, and saw a pile of
              carpets and things lying about on the grass-plot beside the porch.
              It was clear that the cottage had at last been let. I walked past
              it, and wondered what sort of folk they were who had come to live
              so near us. And as I looked I suddenly became aware that a face
              was watching me out of one of the upper windows.
            </TextNode>

            <TextNode>
              “I don't know what there was about that face, Mr. Holmes, but it
              seemed to send a chill right down my back. I was some little way
              off, so that I could not make out the features, but there was
              something unnatural and inhuman about the face. That was the
              impression that I had, and I moved quickly forwards to get a
              nearer view of the person who was watching me. But as I did so the
              face suddenly disappeared, so suddenly that it seemed to have been
              plucked away into the darkness of the room. I stood for five
              minutes thinking the business over, and trying to analyze my
              impressions. I could not tell if the face were that of a man or a
              woman. It had been too far from me for that. But its color was
              what had impressed me most. It was of a livid chalky white, and
              with something set and rigid about it which was shockingly
              unnatural. So disturbed was I that I determined to see a little
              more of the new inmates of the cottage. I approached and knocked
              at the door, which was instantly opened by a tall, gaunt woman
              with a harsh, forbidding face.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page130;
