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

function Page77({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A CASE OF IDENTITY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “My dear fellow,” said Sherlock Holmes as we sat on either side of
              the fire in his lodgings at Baker Street, “life is infinitely
              stranger than anything which the mind of man could invent. We
              would not dare to conceive the things which are really mere
              commonplaces of existence. If we could fly out of that window hand
              in hand, hover over this great city, gently remove the roofs, and
              peep in at the queer things which are going on, the strange
              coincidences, the plannings, the cross-purposes, the wonderful
              chains of events, working through generations, and leading to the
              most outré results, it would make all fiction with its
              conventionalities and foreseen conclusions most stale and
              unprofitable.”
            </TextNode>

            <TextNode>
              “And yet I am not convinced of it,” I answered. “The cases which
              come to light in the papers are, as a rule, bald enough, and
              vulgar enough. We have in our police reports realism pushed to its
              extreme limits, and yet the result is, it must be confessed,
              neither fascinating nor artistic.”
            </TextNode>

            <TextNode>
              “A certain selection and discretion must be used in producing a
              realistic effect,” remarked Holmes. “This is wanting in the police
              report, where more stress is laid, perhaps, upon the platitudes of
              the magistrate than upon the details, which to an observer contain
              the vital essence of the whole matter. Depend upon it, there is
              nothing so unnatural as the commonplace.”
            </TextNode>

            <TextNode>
              I smiled and shook my head. “I can quite understand your thinking
              so.” I said. “Of course, in your position of unofficial adviser
              and helper to everybody who is absolutely puzzled, throughout
              three continents, you are brought in contact with all that is
              strange and bizarre. But here”—I picked up the morning paper from
              the ground—“let us put it to a practical test. Here is the first
              heading upon which I come. ‘A husband's cruelty to his wife.’
              There is half a column of print, but I know without reading it
              that it is all perfectly familiar to me. There is, of course, the
              other woman, the drink, the push, the blow, the bruise, the
              sympathetic sister or landlady. The crudest of writers could
              invent nothing more crude.”
            </TextNode>

            <TextNode>
              “Indeed, your example is an unfortunate one for your argument,”
              said Holmes, taking the paper and glancing his eye down it. “This
              is the Dundas separation case, and, as it happens, I was engaged
              in clearing up some small points in connection with it. The
              husband was a teetotaler, there was no other woman, and the
              conduct complained of was that he had drifted into the habit of
              winding up every meal by taking out his false teeth and hurling
              them at his wife, which, you will allow, is not an action likely
              to occur to the imagination of the average story-teller. Take a
              pinch of snuff, Doctor, and acknowledge that I have scored over
              you in your example.”
            </TextNode>

            <TextNode>
              He held out his snuffbox of old gold, with a great amethyst in the
              centre of the lid. Its splendour was in such contrast to his
              homely ways and simple life that I could not help commenting upon
              it.
            </TextNode>

            <TextNode>
              “Ah,” said he, “I forgot that I had not seen you for some weeks.
              It is a little souvenir from the King of Bohemia in return for my
              assistance in the case of the Irene Adler papers.”
            </TextNode>

            <TextNode>
              “And the ring?” I asked, glancing at a remarkable brilliant which
              sparkled upon his finger.
            </TextNode>

            <TextNode>
              “It was from the reigning family of Holland, though the matter in
              which I served them was of such delicacy that I cannot confide it
              even to you, who have been good enough to chronicle one or two of
              my little problems.”
            </TextNode>

            <TextNode>
              “And have you any on hand just now?” I asked with interest.
            </TextNode>

            <TextNode>
              “Some ten or twelve, but none which present any feature of
              interest. They are important, you understand, without being
              interesting. Indeed, I have found that it is usually in
              unimportant matters that there is a field for the observation, and
              for the quick analysis of cause and effect which gives the charm
              to an investigation. The larger crimes are apt to be the simpler,
              for the bigger the crime the more obvious, as a rule, is the
              motive. In these cases, save for one rather intricate matter which
              has been referred to me from Marseilles, there is nothing which
              presents any features of interest. It is possible, however, that I
              may have something better before very many minutes are over, for
              this is one of my clients, or I am much mistaken.”
            </TextNode>

            <TextNode>
              He had risen from his chair and was standing between the parted
              blinds gazing down into the dull neutral-tinted London street.
              Looking over his shoulder, I saw that on the pavement opposite
              there stood a large woman with a heavy fur boa round her neck, and
              a large curling red feather in a broad-brimmed hat which was
              tilted in a coquettish Duchess of Devonshire fashion over her ear.
              From under this great panoply she peeped up in a nervous,
              hesitating fashion at our windows, while her body oscillated
              backward and forward, and her fingers fidgeted with her glove
              buttons. Suddenly, with a plunge, as of the swimmer who leaves the
              bank, she hurried across the road, and we heard the sharp clang of
              the bell.
            </TextNode>

            <TextNode>
              “I have seen those symptoms before,” said Holmes, throwing his
              cigarette into the fire. “Oscillation upon the pavement always
              means an <span className='italic'>affaire de coeur</span>. She
              would like advice, but is not sure that the matter is not too
              delicate for communication. And yet even here we may discriminate.
              When a woman has been seriously wronged by a man she no longer
              oscillates, and the usual symptom is a broken bell wire. Here we
              may take it that there is a love matter, but that the maiden is
              not so much angry as perplexed, or grieved. But here she comes in
              person to resolve our doubts.”
            </TextNode>

            <TextNode>
              As he spoke there was a tap at the door, and the boy in buttons
              entered to announce Miss Mary Sutherland, while the lady herself
              loomed behind his small black figure like a full-sailed
              merchant-man behind a tiny pilot boat. Sherlock Holmes welcomed
              her with the easy courtesy for which he was remarkable, and,
              having closed the door and bowed her into an armchair, he looked
              her over in the minute and yet abstracted fashion which was
              peculiar to him.
            </TextNode>

            <TextNode>
              “Do you not find,” he said, “that with your short sight it is a
              little trying to do so much typewriting?”
            </TextNode>

            <TextNode>
              “I did at first,” she answered, “but now I know where the letters
              are without looking.” Then, suddenly realising the full purport of
              his words, she gave a violent start and looked up, with fear and
              astonishment upon her broad, good-humoured face. “You've heard
              about me, Mr. Holmes,” she cried, “else how could you know all
              that?”
            </TextNode>

            <TextNode>
              “Never mind,” said Holmes, laughing; “it is my business to know
              things. Perhaps I have trained myself to see what others overlook.
              If not, why should you come to consult me?”
            </TextNode>

            <TextNode>
              “I came to you, sir, because I heard of you from Mrs. Etherege,
              whose husband you found so easy when the police and everyone had
              given him up for dead. Oh, Mr. Holmes, I wish you would do as much
              for me. I'm not rich, but still I have a hundred a year in my own
              right, besides the little that I make by the machine, and I would
              give it all to know what has become of Mr. Hosmer Angel.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Why did you come away to consult me in such a hurry?” asked
              Sherlock Holmes, with his finger-tips together and his eyes to the
              ceiling.
            </TextNode>

            <TextNode>
              Again a startled look came over the somewhat vacuous face of Miss
              Mary Sutherland. “Yes, I did bang out of the house,” she said,
              “for it made me angry to see the easy way in which Mr.
              Windibank—that is, my father—took it all. He would not go to the
              police, and he would not go to you, and so at last, as he would do
              nothing and kept on saying that there was no harm done, it made me
              mad, and I just on with my things and came right away to you.”
            </TextNode>

            <TextNode>
              “Your father,” said Holmes, “your stepfather, surely, since the
              name is different.”
            </TextNode>

            <TextNode>
              “Yes, my stepfather. I call him father, though it sounds funny,
              too, for he is only five years and two months older than myself.”
            </TextNode>

            <TextNode>“And your mother is alive?”</TextNode>

            <TextNode>
              “Oh, yes, mother is alive and well. I wasn't best pleased, Mr.
              Holmes, when she married again so soon after father's death, and a
              man who was nearly fifteen years younger than herself. Father was
              a plumber in the Tottenham Court Road, and he left a tidy business
              behind him, which mother carried on with Mr. Hardy, the foreman;
              but when Mr. Windibank came he made her sell the business, for he
              was very superior, being a traveller in wines. They got £4700 for
              the goodwill and interest, which wasn't near as much as father
              could have got if he had been alive.”
            </TextNode>

            <TextNode>
              I had expected to see Sherlock Holmes impatient under this
              rambling and inconsequential narrative, but, on the contrary, he
              had listened with the greatest concentration of attention.
            </TextNode>

            <TextNode>
              “Your own little income,” he asked, “does it come out of the
              business?”
            </TextNode>

            <TextNode>
              “Oh, no, sir. It is quite separate and was left me by my uncle Ned
              in Auckland. It is in New Zealand stock, paying 4½ per cent. Two
              thousand five hundred pounds was the amount, but I can only touch
              the interest.”
            </TextNode>

            <TextNode>
              “You interest me extremely,” said Holmes. “And since you draw so
              large a sum as a hundred a year, with what you earn into the
              bargain, you no doubt travel a little and indulge yourself in
              every way. I believe that a single lady can get on very nicely
              upon an income of about £60.”
            </TextNode>

            <TextNode>
              “I could do with much less than that, Mr. Holmes, but you
              understand that as long as I live at home I don't wish to be a
              burden to them, and so they have the use of the money just while I
              am staying with them. Of course, that is only just for the time.
              Mr. Windibank draws my interest every quarter and pays it over to
              mother, and I find that I can do pretty well with what I earn at
              typewriting. It brings me twopence a sheet, and I can often do
              from fifteen to twenty sheets in a day.”
            </TextNode>

            <TextNode>
              “You have made your position very clear to me,” said Holmes. “This
              is my friend, Dr. Watson, before whom you can speak as freely as
              before myself. Kindly tell us now all about your connection with
              Mr. Hosmer Angel.”
            </TextNode>

            <TextNode>
              A flush stole over Miss Sutherland's face, and she picked
              nervously at the fringe of her jacket. “I met him first at the
              gasfitters' ball,” she said. “They used to send father tickets
              when he was alive, and then afterwards they remembered us, and
              sent them to mother. Mr. Windibank did not wish us to go. He never
              did wish us to go anywhere. He would get quite mad if I wanted so
              much as to join a Sunday-school treat. But this time I was set on
              going, and I would go; for what right had he to prevent? He said
              the folk were not fit for us to know, when all father's friends
              were to be there. And he said that I had nothing fit to wear, when
              I had my purple plush that I had never so much as taken out of the
              drawer. At last, when nothing else would do, he went off to France
              upon the business of the firm, but we went, mother and I, with Mr.
              Hardy, who used to be our foreman, and it was there I met Mr.
              Hosmer Angel.”
            </TextNode>

            <TextNode>
              “I suppose,” said Holmes, “that when Mr. Windibank came back from
              France he was very annoyed at your having gone to the ball.”
            </TextNode>

            <TextNode>
              “Oh, well, he was very good about it. He laughed, I remember, and
              shrugged his shoulders, and said there was no use denying anything
              to a woman, for she would have her way.”
            </TextNode>

            <TextNode>
              “I see. Then at the gasfitters' ball you met, as I understand, a
              gentleman called Mr. Hosmer Angel.”
            </TextNode>

            <TextNode>
              “Yes, sir. I met him that night, and he called next day to ask if
              we had got home all safe, and after that we met him—that is to
              say, Mr. Holmes, I met him twice for walks, but after that father
              came back again, and Mr. Hosmer Angel could not come to the house
              any more.”
            </TextNode>

            <TextNode>“No?”</TextNode>

            <TextNode>
              “Well, you know father didn't like anything of the sort. He
              wouldn't have any visitors if he could help it, and he used to say
              that a woman should be happy in her own family circle. But then,
              as I used to say to mother, a woman wants her own circle to begin
              with, and I had not got mine yet.”
            </TextNode>

            <TextNode>
              “But how about Mr. Hosmer Angel? Did he make no attempt to see
              you?”
            </TextNode>

            <TextNode>
              “Well, father was going off to France again in a week, and Hosmer
              wrote and said that it would be safer and better not to see each
              other until he had gone. We could write in the meantime, and he
              used to write every day. I took the letters in in the morning, so
              there was no need for father to know.”
            </TextNode>

            <TextNode>
              “Were you engaged to the gentleman at this time?”
            </TextNode>

            <TextNode>
              “Oh, yes, Mr. Holmes. We were engaged after the first walk that we
              took. Hosmer—Mr. Angel—was a cashier in an office in Leadenhall
              Street—and—”
            </TextNode>

            <TextNode>“What office?”</TextNode>

            <TextNode>
              “That's the worst of it, Mr. Holmes, I don't know.”
            </TextNode>

            <TextNode>“Where did he live, then?”</TextNode>

            <TextNode>“He slept on the premises.”</TextNode>

            <TextNode>“And you don't know his address?”</TextNode>

            <TextNode>“No—except that it was Leadenhall Street.”</TextNode>

            <TextNode>“Where did you address your letters, then?”</TextNode>

            <TextNode>
              “To the Leadenhall Street Post Office, to be left till called for.
              He said that if they were sent to the office he would be chaffed
              by all the other clerks about having letters from a lady, so I
              offered to typewrite them, like he did his, but he wouldn't have
              that, for he said that when I wrote them they seemed to come from
              me, but when they were typewritten he always felt that the machine
              had come between us. That will just show you how fond he was of
              me, Mr. Holmes, and the little things that he would think of.”
            </TextNode>

            <TextNode>
              “It was most suggestive,” said Holmes. “It has long been an axiom
              of mine that the little things are infinitely the most important.
              Can you remember any other little things about Mr. Hosmer Angel?”
            </TextNode>

            <TextNode>
              “He was a very shy man, Mr. Holmes. He would rather walk with me
              in the evening than in the daylight, for he said that he hated to
              be conspicuous. Very retiring and gentlemanly he was. Even his
              voice was gentle. He'd had the quinsy and swollen glands when he
              was young, he told me, and it had left him with a weak throat, and
              a hesitating, whispering fashion of speech. He was always well
              dressed, very neat and plain, but his eyes were weak, just as mine
              are, and he wore tinted glasses against the glare.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page77;
