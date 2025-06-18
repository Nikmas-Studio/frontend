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

function Page72({
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
        title='THE RED-HEADED LEAGUE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “‘Have you never heard of the League of the Red-headed Men?’ he
              asked with his eyes open.
            </TextNode>

            <TextNode>“‘Never.’</TextNode>

            <TextNode>
              “‘Why, I wonder at that, for you are eligible yourself for one of
              the vacancies.’
            </TextNode>

            <TextNode>“‘And what are they worth?’ I asked.</TextNode>

            <TextNode>
              “‘Oh, merely a couple of hundred a year, but the work is slight,
              and it need not interfere very much with one's other occupations.’
            </TextNode>

            <TextNode>
              “Well, you can easily think that that made me prick up my ears,
              for the business has not been over-good for some years, and an
              extra couple of hundred would have been very handy.
            </TextNode>

            <TextNode>“‘Tell me all about it,’ said I.</TextNode>

            <TextNode>
              “‘Well,’ said he, showing me the advertisement, ‘you can see for
              yourself that the League has a vacancy, and there is the address
              where you should apply for particulars. As far as I can make out,
              the League was founded by an American millionaire, Ezekiah
              Hopkins, who was very peculiar in his ways. He was himself
              red-headed, and he had a great sympathy for all red-headed men; so
              when he died it was found that he had left his enormous fortune in
              the hands of trustees, with instructions to apply the interest to
              the providing of easy berths to men whose hair is of that colour.
              From all I hear it is splendid pay and very little to do.’
            </TextNode>

            <TextNode>
              “‘But,’ said I, ‘there would be millions of red-headed men who
              would apply.’
            </TextNode>

            <TextNode>
              “‘Not so many as you might think,’ he answered. ‘You see it is
              really confined to Londoners, and to grown men. This American had
              started from London when he was young, and he wanted to do the old
              town a good turn. Then, again, I have heard it is no use your
              applying if your hair is light red, or dark red, or anything but
              real bright, blazing, fiery red. Now, if you cared to apply, Mr.
              Wilson, you would just walk in; but perhaps it would hardly be
              worth your while to put yourself out of the way for the sake of a
              few hundred pounds.’
            </TextNode>

            <TextNode>
              “Now, it is a fact, gentlemen, as you may see for yourselves, that
              my hair is of a very full and rich tint, so that it seemed to me
              that if there was to be any competition in the matter I stood as
              good a chance as any man that I had ever met. Vincent Spaulding
              seemed to know so much about it that I thought he might prove
              useful, so I just ordered him to put up the shutters for the day
              and to come right away with me. He was very willing to have a
              holiday, so we shut the business up and started off for the
              address that was given us in the advertisement.
            </TextNode>

            <TextNode>
              “I never hope to see such a sight as that again, Mr. Holmes. From
              north, south, east, and west every man who had a shade of red in
              his hair had tramped into the city to answer the advertisement.
              Fleet Street was choked with red-headed folk, and Pope's Court
              looked like a coster's orange barrow. I should not have thought
              there were so many in the whole country as were brought together
              by that single advertisement. Every shade of colour they
              were—straw, lemon, orange, brick, Irish-setter, liver, clay; but,
              as Spaulding said, there were not many who had the real vivid
              flame-coloured tint. When I saw how many were waiting, I would
              have given it up in despair; but Spaulding would not hear of it.
              How he did it I could not imagine, but he pushed and pulled and
              butted until he got me through the crowd, and right up to the
              steps which led to the office. There was a double stream upon the
              stair, some going up in hope, and some coming back dejected; but
              we wedged in as well as we could and soon found ourselves in the
              office.”
            </TextNode>

            <TextNode>
              “Your experience has been a most entertaining one,” remarked
              Holmes as his client paused and refreshed his memory with a huge
              pinch of snuff. “Pray continue your very interesting statement.”
            </TextNode>

            <TextNode>
              “There was nothing in the office but a couple of wooden chairs and
              a deal table, behind which sat a small man with a head that was
              even redder than mine. He said a few words to each candidate as he
              came up, and then he always managed to find some fault in them
              which would disqualify them. Getting a vacancy did not seem to be
              such a very easy matter, after all. However, when our turn came
              the little man was much more favourable to me than to any of the
              others, and he closed the door as we entered, so that he might
              have a private word with us.
            </TextNode>

            <TextNode>
              “‘This is Mr. Jabez Wilson,’ said my assistant, ‘and he is willing
              to fill a vacancy in the League.’
            </TextNode>

            <TextNode>
              “‘And he is admirably suited for it,’ the other answered. ‘He has
              every requirement. I cannot recall when I have seen anything so
              fine.’ He took a step backward, cocked his head on one side, and
              gazed at my hair until I felt quite bashful. Then suddenly he
              plunged forward, wrung my hand, and congratulated me warmly on my
              success.
            </TextNode>

            <TextNode>
              “‘It would be injustice to hesitate,’ said he. ‘You will, however,
              I am sure, excuse me for taking an obvious precaution.’ With that
              he seized my hair in both his hands, and tugged until I yelled
              with the pain. ‘There is water in your eyes,’ said he as he
              released me. ‘I perceive that all is as it should be. But we have
              to be careful, for we have twice been deceived by wigs and once by
              paint. I could tell you tales of cobbler's wax which would disgust
              you with human nature.’ He stepped over to the window and shouted
              through it at the top of his voice that the vacancy was filled. A
              groan of disappointment came up from below, and the folk all
              trooped away in different directions until there was not a
              red-head to be seen except my own and that of the manager.
            </TextNode>

            <TextNode>
              “‘My name,’ said he, ‘is Mr. Duncan Ross, and I am myself one of
              the pensioners upon the fund left by our noble benefactor. Are you
              a married man, Mr. Wilson? Have you a family?’
            </TextNode>

            <TextNode>“I answered that I had not.</TextNode>

            <TextNode>“His face fell immediately.</TextNode>

            <TextNode>
              “‘Dear me!’ he said gravely, ‘that is very serious indeed! I am
              sorry to hear you say that. The fund was, of course, for the
              propagation and spread of the red-heads as well as for their
              maintenance. It is exceedingly unfortunate that you should be a
              bachelor.’
            </TextNode>

            <TextNode>
              “My face lengthened at this, Mr. Holmes, for I thought that I was
              not to have the vacancy after all; but after thinking it over for
              a few minutes he said that it would be all right.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “‘In the case of another,’ said he, ‘the objection might be fatal,
              but we must stretch a point in favour of a man with such a head of
              hair as yours. When shall you be able to enter upon your new
              duties?’
            </TextNode>

            <TextNode>
              “‘Well, it is a little awkward, for I have a business already,’
              said&nbsp;I.
            </TextNode>

            <TextNode>
              “‘Oh, never mind about that, Mr. Wilson!’ said Vincent Spaulding.
              ‘I should be able to look after that for you.’
            </TextNode>

            <TextNode>“‘What would be the hours?’ I asked.</TextNode>

            <TextNode>“‘Ten to two.’</TextNode>

            <TextNode>
              “Now a pawnbroker's business is mostly done of an evening, Mr.
              Holmes, especially Thursday and Friday evening, which is just
              before pay-day; so it would suit me very well to earn a little in
              the mornings. Besides, I knew that my assistant was a good man,
              and that he would see to anything that turned up.
            </TextNode>

            <TextNode>
              “‘That would suit me very well,’ said I. ‘And the pay?’
            </TextNode>

            <TextNode>“‘Is £4 a week.’</TextNode>

            <TextNode>“‘And the work?’</TextNode>

            <TextNode>“‘Is purely nominal.’</TextNode>

            <TextNode>“‘What do you call purely nominal?’</TextNode>

            <TextNode>
              “‘Well, you have to be in the office, or at least in the building,
              the whole time. If you leave, you forfeit your whole position
              forever. The will is very clear upon that point. You don't comply
              with the conditions if you budge from the office during that
              time.’
            </TextNode>

            <TextNode>
              “‘It's only four hours a day, and I should not think of leaving,’
              said I.
            </TextNode>

            <TextNode>
              “‘No excuse will avail,’ said Mr. Duncan Ross; ‘neither sickness
              nor business nor anything else. There you must stay, or you lose
              your billet.’
            </TextNode>

            <TextNode>“‘And the work?’</TextNode>

            <TextNode>
              “‘Is to copy out the “Encyclopaedia Britannica.” There is the
              first volume of it in that press. You must find your own ink,
              pens, and blotting-paper, but we provide this table and chair.
              Will you be ready to-morrow?’
            </TextNode>

            <TextNode>“‘Certainly,’ I answered.</TextNode>

            <TextNode>
              “‘Then, good-bye, Mr. Jabez Wilson, and let me congratulate you
              once more on the important position which you have been fortunate
              enough to gain.’ He bowed me out of the room and I went home with
              my assistant, hardly knowing what to say or do, I was so pleased
              at my own good fortune.
            </TextNode>

            <TextNode>
              “Well, I thought over the matter all day, and by evening I was in
              low spirits again; for I had quite persuaded myself that the whole
              affair must be some great hoax or fraud, though what its object
              might be I could not imagine. It seemed altogether past belief
              that anyone could make such a will, or that they would pay such a
              sum for doing anything so simple as copying out the ‘Encyclopaedia
              Britannica.’ Vincent Spaulding did what he could to cheer me up,
              but by bedtime I had reasoned myself out of the whole thing.
              However, in the morning I determined to have a look at it anyhow,
              so I bought a penny bottle of ink, and with a quill-pen, and seven
              sheets of foolscap paper, I started off for Pope's Court.
            </TextNode>

            <TextNode>
              “Well, to my surprise and delight, everything was as right as
              possible. The table was set out ready for me, and Mr. Duncan Ross
              was there to see that I got fairly to work. He started me off upon
              the letter A, and then he left me; but he would drop in from time
              to time to see that all was right with me. At two o'clock he bade
              me good-day, complimented me upon the amount that I had written,
              and locked the door of the office after me.
            </TextNode>

            <TextNode>
              “This went on day after day, Mr. Holmes, and on Saturday the
              manager came in and planked down four golden sovereigns for my
              week's work. It was the same next week, and the same the week
              after. Every morning I was there at ten, and every afternoon I
              left at two. By degrees Mr. Duncan Ross took to coming in only
              once of a morning, and then, after a time, he did not come in at
              all. Still, of course, I never dared to leave the room for an
              instant, for I was not sure when he might come, and the billet was
              such a good one, and suited me so well, that I would not risk the
              loss of it.
            </TextNode>

            <TextNode>
              “Eight weeks passed away like this, and I had written about Abbots
              and Archery and Armour and Architecture and Attica, and hoped with
              diligence that I might get on to the B's before very long. It cost
              me something in foolscap, and I had pretty nearly filled a shelf
              with my writings. And then suddenly the whole business came to an
              end.”
            </TextNode>

            <TextNode>“To an end?”</TextNode>

            <TextNode>
              “Yes, sir. And no later than this morning. I went to my work as
              usual at ten o'clock, but the door was shut and locked, with a
              little square of cardboard hammered on to the middle of the panel
              with a tack. Here it is, and you can read for yourself.”
            </TextNode>

            <TextNode>
              He held up a piece of white cardboard about the size of a sheet of
              note-paper. It read in this fashion:
            </TextNode>

            <TextNode className='text-center  italic'>
              The Red-headed League
              <br />
              is
              <br />
              Dissolved
              <br />
              October 9, 1890.
            </TextNode>

            <TextNode noIndent>
              Sherlock Holmes and I surveyed this curt announcement and the
              rueful face behind it, until the comical side of the affair so
              completely overtopped every other consideration that we both burst
              out into a roar of laughter.
            </TextNode>

            <TextNode>
              “I cannot see that there is anything very funny,” cried our
              client, flushing up to the roots of his flaming head. “If you can
              do nothing better than laugh at me, I can go elsewhere.”
            </TextNode>

            <TextNode>
              “No, no,” cried Holmes, shoving him back into the chair from which
              he had half risen. “I really wouldn't miss your case for the
              world. It is most refreshingly unusual. But there is, if you will
              excuse my saying so, something just a little funny about it. Pray
              what steps did you take when you found the card upon the door?”
            </TextNode>

            <TextNode>
              “I was staggered, sir. I did not know what to do. Then I called at
              the offices round, but none of them seemed to know anything about
              it. Finally, I went to the landlord, who is an accountant living
              on the ground-floor, and I asked him if he could tell me what had
              become of the Red-headed League. He said that he had never heard
              of any such body. Then I asked him who Mr. Duncan Ross was. He
              answered that the name was new to him.
            </TextNode>

            <TextNode>“‘Well,’ said I, ‘the gentleman at No. 4.’</TextNode>

            <TextNode>“‘What, the red-headed man?’</TextNode>

            <TextNode>“‘Yes.’</TextNode>

            <TextNode>
              “‘Oh,’ said he, ‘his name was William Morris. He was a solicitor
              and was using my room as a temporary convenience until his new
              premises were ready. He moved out yesterday.’
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page72;
