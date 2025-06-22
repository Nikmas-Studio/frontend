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

function Page137({
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
        title='THE “GLORIA SCOTT”'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I have some papers here,” said my friend Sherlock Holmes, as we
              sat one winter's night on either side of the fire, “which I really
              think, Watson, that it would be worth your while to glance over.
              These are the documents in the extraordinary case of the&nbsp;
              <span className='italic'>Gloria&nbsp;Scott</span>, and this is the
              message which struck Justice of the Peace Trevor dead with horror
              when he read it.”
            </TextNode>

            <TextNode>
              He had picked from a drawer a little tarnished cylinder, and,
              undoing the tape, he handed me a short note scrawled upon a
              half-sheet of slate gray-paper.
            </TextNode>

            <TextNode>
              “The supply of game for London is going steadily up,” it ran.
              “Head-keeper Hudson, we believe, has been now told to receive all
              orders for fly-paper and for preservation of your hen-pheasant's
              life.”
            </TextNode>

            <TextNode>
              As I glanced up from reading this enigmatical message, I saw
              Holmes chuckling at the expression upon my face.
            </TextNode>

            <TextNode>“You look a little bewildered,” said he.</TextNode>

            <TextNode>
              “I cannot see how such a message as this could inspire horror. It
              seems to me to be rather grotesque than otherwise.”
            </TextNode>

            <TextNode>
              “Very likely. Yet the fact remains that the reader, who was a
              fine, robust old man, was knocked clean down by it as if it had
              been the butt end of a pistol.”
            </TextNode>

            <TextNode>
              “You arouse my curiosity,” said I. “But why did you say just now
              that there were very particular reasons why I should study this
              case?”
            </TextNode>

            <TextNode>
              “Because it was the first in which I was ever engaged.”
            </TextNode>

            <TextNode>
              I had often endeavored to elicit from my companion what had first
              turned his mind in the direction of criminal research, but had
              never caught him before in a communicative humor. Now he sat
              forward in his arm-chair and spread out the documents upon his
              knees. Then he lit his pipe and sat for some time smoking and
              turning them over.
            </TextNode>

            <TextNode>
              “You never heard me talk of Victor Trevor?” he asked. “He was the
              only friend I made during the two years I was at college. I was
              never a very sociable fellow, Watson, always rather fond of moping
              in my rooms and working out my own little methods of thought, so
              that I never mixed much with the men of my year. Bar fencing and
              boxing I had few athletic tastes, and then my line of study was
              quite distinct from that of the other fellows, so that we had no
              points of contact at all. Trevor was the only man I knew, and that
              only through the accident of his bull terrier freezing on to my
              ankle one morning as I went down to chapel.
            </TextNode>

            <TextNode>
              “It was a prosaic way of forming a friendship, but it was
              effective. I was laid by the heels for ten days, but Trevor used
              to come in to inquire after me. At first it was only a minute's
              chat, but soon his visits lengthened, and before the end of the
              term we were close friends. He was a hearty, full-blooded fellow,
              full of spirits and energy, the very opposite to me in most
              respects, but we had some subjects in common, and it was a bond of
              union when I found that he was as friendless as I. Finally, he
              invited me down to his father's place at Donnithorpe, in Norfolk,
              and I accepted his hospitality for a month of the long vacation.
            </TextNode>

            <TextNode>
              “Old Trevor was evidently a man of some wealth and consideration,
              a J.P., and a landed proprietor. Donnithorpe is a little hamlet
              just to the north of Langmere, in the country of the Broads. The
              house was an old-fashioned, wide-spread, oak-beamed brick
              building, with a fine lime-lined avenue leading up to it. There
              was excellent wild-duck shooting in the fens, remarkably good
              fishing, a small but select library, taken over, as I understood,
              from a former occupant, and a tolerable cook, so that he would be
              a fastidious man who could not put in a pleasant month there.
            </TextNode>

            <TextNode>
              “Trevor senior was a widower, and my friend his only son.
            </TextNode>

            <TextNode>
              “There had been a daughter, I heard, but she had died of
              diphtheria while on a visit to Birmingham. The father interested
              me extremely. He was a man of little culture, but with a
              considerable amount of rude strength, both physically and
              mentally. He knew hardly any books, but he had traveled far, had
              seen much of the world. And had remembered all that he had
              learned. In person he was a thick-set, burly man with a shock of
              grizzled hair, a brown, weather-beaten face, and blue eyes which
              were keen to the verge of fierceness. Yet he had a reputation for
              kindness and charity on the country-side, and was noted for the
              leniency of his sentences from the bench.
            </TextNode>

            <TextNode>
              “One evening, shortly after my arrival, we were sitting over a
              glass of port after dinner, when young Trevor began to talk about
              those habits of observation and inference which I had already
              formed into a system, although I had not yet appreciated the part
              which they were to play in my life. The old man evidently thought
              that his son was exaggerating in his description of one or two
              trivial feats which I had performed.
            </TextNode>

            <TextNode>
              “ ‘Come, now, Mr. Holmes,’ said he, laughing good-humoredly. ‘I'm
              an excellent subject, if you can deduce anything from me.’
            </TextNode>

            <TextNode>
              “ ‘I fear there is not very much,’ I answered; ‘I might suggest
              that you have gone about in fear of some personal attack within
              the last twelve months.’
            </TextNode>

            <TextNode>
              “The laugh faded from his lips, and he stared at me in great
              surprise.
            </TextNode>

            <TextNode>
              “ ‘Well, that's true enough,’ said he. ‘You know, Victor,’ turning
              to his son, ‘when we broke up that poaching gang they swore to
              knife us, and Sir Edward Holly has actually been attacked. I've
              always been on my guard since then, though I have no idea how you
              know it.’
            </TextNode>

            <TextNode>
              “ ‘You have a very handsome stick,’ I answered. ‘By the
              inscription I observed that you had not had it more than a year.
              But you have taken some pains to bore the head of it and pour
              melted lead into the hole so as to make it a formidable weapon. I
              argued that you would not take such precautions unless you had
              some danger to fear.’
            </TextNode>

            <TextNode>“ ‘Anything else?’ he asked, smiling.</TextNode>

            <TextNode>“ ‘You have boxed a good deal in your youth.’</TextNode>

            <TextNode>
              “ ‘Right again. How did you know it? Is my nose knocked a little
              out of the straight?’
            </TextNode>

            <TextNode>
              “ ‘No,’ said I. ‘It is your ears. They have the peculiar
              flattening and thickening which marks the boxing man.’
            </TextNode>

            <TextNode>“ ‘Anything else?’</TextNode>

            <TextNode>
              “ ‘You have done a good deal of digging by your callosities.’
            </TextNode>

            <TextNode>“ ‘Made all my money at the gold fields.’</TextNode>

            <TextNode>“ ‘You have been in New Zealand.’</TextNode>

            <TextNode>“ ‘Right again.’</TextNode>

            <TextNode>“ ‘You have visited Japan.’</TextNode>

            <TextNode>“ ‘Quite true.’</TextNode>

            <TextNode>
              “ ‘And you have been most intimately associated with some one
              whose initials were J. A., and whom you afterwards were eager to
              entirely forget.’
            </TextNode>

            <TextNode>
              “Mr. Trevor stood slowly up, fixed his large blue eyes upon me
              with a strange wild stare, and then pitched forward, with his face
              among the nutshells which strewed the cloth, in a dead faint.
            </TextNode>

            <TextNode>
              “You can imagine, Watson, how shocked both his son and I were. His
              attack did not last long, however, for when we undid his collar,
              and sprinkled the water from one of the finger-glasses over his
              face, he gave a gasp or two and sat up.
            </TextNode>

            <TextNode>
              “ ‘Ah, boys,’ said he, forcing a smile, ‘I hope I haven't
              frightened you. Strong as I look, there is a weak place in my
              heart, and it does not take much to knock me over. I don't know
              how you manage this, Mr. Holmes, but it seems to me that all the
              detectives of fact and of fancy would be children in your hands.
              That's your line of life, sir, and you may take the word of a man
              who has seen something of the world.’
            </TextNode>

            <TextNode>
              “And that recommendation, with the exaggerated estimate of my
              ability with which he prefaced it, was, if you will believe me,
              Watson, the very first thing which ever made me feel that a
              profession might be made out of what had up to that time been the
              merest hobby. At the moment, however, I was too much concerned at
              the sudden illness of my host to think of anything else.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “ ‘I hope that I have said nothing to pain you?’ said I.
            </TextNode>

            <TextNode>
              “ ‘Well, you certainly touched upon rather a tender point. Might I
              ask how you know, and how much you know?’ He spoke now in a
              half-jesting fashion, but a look of terror still lurked at the
              back of his eyes.
            </TextNode>

            <TextNode>
              “ ‘It is simplicity itself,’ said I. ‘When you bared your arm to
              draw that fish into the boat I saw that J. A. had been tattooed in
              the bend of the elbow. The letters were still legible, but it was
              perfectly clear from their blurred appearance, and from the
              staining of the skin round them, that efforts had been made to
              obliterate them. It was obvious, then, that those initials had
              once been very familiar to you, and that you had afterwards wished
              to forget them.’
            </TextNode>

            <TextNode>
              “ ‘What an eye you have!’ he cried, with a sigh of relief. ‘It is
              just as you say. But we won't talk of it. Of all ghosts the ghosts
              of our old lovers are the worst. Come into the billiard-room and
              have a quiet cigar.’
            </TextNode>

            <TextNode>
              “From that day, amid all his cordiality, there was always a touch
              of suspicion in Mr. Trevor's manner towards me. Even his son
              remarked it. ‘You've given the governor such a turn,’ said he,
              ‘that he'll never be sure again of what you know and what you
              don't know.’ He did not mean to show it, I am sure, but it was so
              strongly in his mind that it peeped out at every action. At last I
              became so convinced that I was causing him uneasiness that I drew
              my visit to a close. On the very day, however, before I left, an
              incident occurred which proved in the sequel to be of importance.
            </TextNode>

            <TextNode>
              “We were sitting out upon the lawn on garden chairs, the three of
              us, basking in the sun and admiring the view across the Broads,
              when a maid came out to say that there was a man at the door who
              wanted to see Mr. Trevor.
            </TextNode>

            <TextNode>“ ‘What is his name?’ asked my host.</TextNode>

            <TextNode>“ ‘He would not give any.’</TextNode>

            <TextNode>“ ‘What does he want, then?’</TextNode>

            <TextNode>
              “ ‘He says that you know him, and that he only wants a moment's
              conversation.’
            </TextNode>

            <TextNode>
              “ ‘Show him round here.’ An instant afterwards there appeared a
              little wizened fellow with a cringing manner and a shambling style
              of walking. He wore an open jacket, with a splotch of tar on the
              sleeve, a red-and-black check shirt, dungaree trousers, and heavy
              boots badly worn. His face was thin and brown and crafty, with a
              perpetual smile upon it, which showed an irregular line of yellow
              teeth, and his crinkled hands were half closed in a way that is
              distinctive of sailors. As he came slouching across the lawn I
              heard Mr. Trevor make a sort of hiccoughing noise in his throat,
              and jumping out of his chair, he ran into the house. He was back
              in a moment, and I smelt a strong reek of brandy as he passed me.
            </TextNode>

            <TextNode>
              “ ‘Well, my man,’ said he. ‘What can I do for you?’
            </TextNode>

            <TextNode>
              “The sailor stood looking at him with puckered eyes, and with the
              same loose-lipped smile upon his face.
            </TextNode>

            <TextNode>“ ‘You don't know me?’ he asked.</TextNode>

            <TextNode>
              “ ‘Why, dear me, it is surely Hudson,’ said Mr. Trevor in a tone
              of surprise.
            </TextNode>

            <TextNode>
              “ ‘Hudson it is, sir,’ said the seaman. ‘Why, it's thirty year and
              more since I saw you last. Here you are in your house, and me
              still picking my salt meat out of the harness cask.’
            </TextNode>

            <TextNode>
              “ ‘Tut, you will find that I have not forgotten old times,’ cried
              Mr. Trevor, and, walking towards the sailor, he said something in
              a low voice. ‘Go into the kitchen,’ he continued out loud, ‘and
              you will get food and drink. I have no doubt that I shall find you
              a situation.’
            </TextNode>

            <TextNode>
              “ ‘Thank you, sir,’ said the seaman, touching his fore-lock. ‘I'm
              just off a two-yearer in an eight-knot tramp, short-handed at
              that, and I wants a rest. I thought I'd get it either with Mr.
              Beddoes or with you.’
            </TextNode>

            <TextNode>
              “ ‘Ah!’ cried Trevor. ‘You know where Mr. Beddoes is?’
            </TextNode>

            <TextNode>
              “ ‘Bless you, sir, I know where all my old friends are,’ said the
              fellow with a sinister smile, and he slouched off after the maid
              to the kitchen. Mr. Trevor mumbled something to us about having
              been shipmate with the man when he was going back to the diggings,
              and then, leaving us on the lawn, he went indoors. An hour later,
              when we entered the house, we found him stretched dead drunk upon
              the dining-room sofa. The whole incident left a most ugly
              impression upon my mind, and I was not sorry next day to leave
              Donnithorpe behind me, for I felt that my presence must be a
              source of embarrassment to my friend.
            </TextNode>

            <TextNode>
              “All this occurred during the first month of the long vacation. I
              went up to my London rooms, where I spent seven weeks working out
              a few experiments in organic chemistry. One day, however, when the
              autumn was far advanced and the vacation drawing to a close, I
              received a telegram from my friend imploring me to return to
              Donnithorpe, and saying that he was in great need of my advice and
              assistance. Of course I dropped everything and set out for the
              North once more.
            </TextNode>

            <TextNode>
              “He met me with the dog-cart at the station, and I saw at a glance
              that the last two months had been very trying ones for him. He had
              grown thin and careworn, and had lost the loud, cheery manner for
              which he had been remarkable.
            </TextNode>

            <TextNode>
              “ ‘The governor is dying,’ were the first words he said.
            </TextNode>

            <TextNode>“ ‘Impossible!’ I cried. ‘What is the matter?’</TextNode>

            <TextNode>
              “ ‘Apoplexy. Nervous shock, He's been on the verge all day. I
              doubt if we shall find him alive.’
            </TextNode>

            <TextNode>
              “I was, as you may think, Watson, horrified at this unexpected
              news.
            </TextNode>

            <TextNode>“ ‘What has caused it?’ I asked.</TextNode>

            <TextNode>
              “ ‘Ah, that is the point. Jump in and we can talk it over while we
              drive. You remember that fellow who came upon the evening before
              you left us?’
            </TextNode>

            <TextNode>“ ‘Perfectly.’</TextNode>

            <TextNode>
              “ ‘Do you know who it was that we let into the house that day?’
            </TextNode>

            <TextNode>“ ‘I have no idea.’</TextNode>

            <TextNode>“ ‘It was the devil, Holmes,’ he cried.</TextNode>

            <TextNode>“I stared at him in astonishment.</TextNode>

            <TextNode>
              “ ‘Yes, it was the devil himself. We have not had a peaceful hour
              since—not one. The governor has never held up his head from that
              evening, and now the life has been crushed out of him and his
              heart broken, all through this accursed Hudson.’
            </TextNode>

            <TextNode>“ ‘What power had he, then?’</TextNode>

            <TextNode>
              “ ‘Ah, that is what I would give so much to know. The kindly,
              charitable, good old governor—how could he have fallen into the
              clutches of such a ruffian! But I am so glad that you have come,
              Holmes. I trust very much to your judgment and discretion, and I
              know that you will advise me for the best.’
            </TextNode>

            <TextNode>
              “We were dashing along the smooth white country road, with the
              long stretch of the Broads in front of us glimmering in the red
              light of the setting sun. From a grove upon our left I could
              already see the high chimneys and the flag-staff which marked the
              squire's dwelling.
            </TextNode>

            <TextNode>
              “ ‘My father made the fellow gardener,’ said my companion, ‘and
              then, as that did not satisfy him, he was promoted to be butler.
              The house seemed to be at his mercy, and he wandered about and did
              what he chose in it. The maids complained of his drunken habits
              and his vile language. The dad raised their wages all round to
              recompense them for the annoyance. The fellow would take the boat
              and my father's best gun and treat himself to little shooting
              trips. And all this with such a sneering, leering, insolent face
              that I would have knocked him down twenty times over if he had
              been a man of my own age. I tell you, Holmes, I have had to keep a
              tight hold upon myself all this time; and now I am asking myself
              whether, if I had let myself go a little more, I might not have
              been a wiser man.
            </TextNode>

            <TextNode>
              “ ‘Well, matters went from bad to worse with us, and this animal
              Hudson became more and more intrusive, until at last, on making
              some insolent reply to my father in my presence one day, I took
              him by the shoulders and turned him out of the room. He slunk away
              with a livid face and two venomous eyes which uttered more threats
              than his tongue could do. I don't know what passed between the
              poor dad and him after that, but the dad came to me next day and
              asked me whether I would mind apologizing to Hudson. I refused, as
              you can imagine, and asked my father how he could allow such a
              wretch to take such liberties with himself and his household.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page137;
