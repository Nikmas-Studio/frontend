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

function Page141({
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
        title='THE MUSGRAVE RITUAL'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              An anomaly which often struck me in the character of my friend
              Sherlock Holmes was that, although in his methods of thought he
              was the neatest and most methodical of mankind, and although also
              he affected a certain quiet primness of dress, he was none the
              less in his personal habits one of the most untidy men that ever
              drove a fellow-lodger to distraction. Not that I am in the least
              conventional in that respect myself. The rough-and-tumble work in
              Afghanistan, coming on the top of a natural Bohemianism of
              disposition, has made me rather more lax than befits a medical
              man. But with me there is a limit, and when I find a man who keeps
              his cigars in the coal-scuttle, his tobacco in the toe end of a
              Persian slipper, and his unanswered correspondence transfixed by a
              jack-knife into the very centre of his wooden mantelpiece, then I
              begin to give myself virtuous airs. I have always held, too, that
              pistol practice should be distinctly an open-air pastime; and when
              Holmes, in one of his queer humors, would sit in an arm-chair with
              his hair-trigger and a hundred Boxer cartridges, and proceed to
              adorn the opposite wall with a patriotic V. R. done in
              bullet-pocks, I felt strongly that neither the atmosphere nor the
              appearance of our room was improved by it.
            </TextNode>

            <TextNode>
              Our chambers were always full of chemicals and of criminal relics
              which had a way of wandering into unlikely positions, and of
              turning up in the butter-dish or in even less desirable places.
              But his papers were my great crux. He had a horror of destroying
              documents, especially those which were connected with his past
              cases, and yet it was only once in every year or two that he would
              muster energy to docket and arrange them; for, as I have mentioned
              somewhere in these incoherent memoirs, the outbursts of passionate
              energy when he performed the remarkable feats with which his name
              is associated were followed by reactions of lethargy during which
              he would lie about with his violin and his books, hardly moving
              save from the sofa to the table. Thus month after month his papers
              accumulated, until every corner of the room was stacked with
              bundles of manuscript which were on no account to be burned, and
              which could not be put away save by their owner. One winter's
              night, as we sat together by the fire, I ventured to suggest to
              him that, as he had finished pasting extracts into his
              common-place book, he might employ the next two hours in making
              our room a little more habitable. He could not deny the justice of
              my request, so with a rather rueful face he went off to his
              bedroom, from which he returned presently pulling a large tin box
              behind him. This he placed in the middle of the floor and,
              squatting down upon a stool in front of it, he threw back the lid.
              I could see that it was already a third full of bundles of paper
              tied up with red tape into separate packages.
            </TextNode>

            <TextNode>
              “There are cases enough here, Watson,” said he, looking at me with
              mischievous eyes. “I think that if you knew all that I had in this
              box you would ask me to pull some out instead of putting others
              in.”
            </TextNode>

            <TextNode>
              “These are the records of your early work, then?” I asked. “I have
              often wished that I had notes of those cases.”
            </TextNode>

            <TextNode>
              “Yes, my boy, these were all done prematurely before my biographer
              had come to glorify me.” He lifted bundle after bundle in a
              tender, caressing sort of way. “They are not all successes,
              Watson,” said he. “But there are some pretty little problems among
              them. Here's the record of the Tarleton murders, and the case of
              Vamberry, the wine merchant, and the adventure of the old Russian
              woman, and the singular affair of the aluminium crutch, as well as
              a full account of Ricoletti of the club-foot, and his abominable
              wife. And here—ah, now, this really is something a little
              recherché.”
            </TextNode>

            <TextNode>
              He dived his arm down to the bottom of the chest, and brought up a
              small wooden box with a sliding lid, such as children's toys are
              kept in. From within he produced a crumpled piece of paper, an
              old-fashioned brass key, a peg of wood with a ball of string
              attached to it, and three rusty old disks of metal.
            </TextNode>

            <TextNode>
              “Well, my boy, what do you make of this lot?” he asked, smiling at
              my expression.
            </TextNode>

            <TextNode>“It is a curious collection.”</TextNode>

            <TextNode>
              “Very curious, and the story that hangs round it will strike you
              as being more curious still.”
            </TextNode>

            <TextNode>“These relics have a history then?”</TextNode>

            <TextNode>“So much so that they are history.”</TextNode>

            <TextNode>“What do you mean by that?”</TextNode>

            <TextNode>
              Sherlock Holmes picked them up one by one, and laid them along the
              edge of the table. Then he reseated himself in his chair and
              looked them over with a gleam of satisfaction in his eyes.
            </TextNode>

            <TextNode>
              “These,” said he, “are all that I have left to remind me of the
              adventure of the Musgrave Ritual.”
            </TextNode>

            <TextNode>
              I had heard him mention the case more than once, though I had
              never been able to gather the details. “I should be so glad,” said
              I, “if you would give me an account of it.”
            </TextNode>

            <TextNode>
              “And leave the litter as it is?“ he cried, mischievously. “Your
              tidiness won't bear much strain after all, Watson. But I should be
              glad that you should add this case to your annals, for there are
              points in it which make it quite unique in the criminal records of
              this or, I believe, of any other country. A collection of my
              trifling achievements would certainly be incomplete which
              contained no account of this very singular business.
            </TextNode>

            <TextNode>
              “You may remember how the affair of the&nbsp;
              <span className='italic'>Gloria&nbsp;Scott</span>, and my
              conversation with the unhappy man whose fate I told you of, first
              turned my attention in the direction of the profession which has
              become my life's work. You see me now when my name has become
              known far and wide, and when I am generally recognized both by the
              public and by the official force as being a final court of appeal
              in doubtful cases. Even when you knew me first, at the time of the
              affair which you have commemorated in ‘A Study in Scarlet,’ I had
              already established a considerable, though not a very lucrative,
              connection. You can hardly realize, then, how difficult I found it
              at first, and how long I had to wait before I succeeded in making
              any headway.
            </TextNode>

            <TextNode>
              “When I first came up to London I had rooms in Montague Street,
              just round the corner from the British Museum, and there I waited,
              filling in my too abundant leisure time by studying all those
              branches of science which might make me more efficient. Now and
              again cases came in my way, principally through the introduction
              of old fellow-students, for during my last years at the University
              there was a good deal of talk there about myself and my methods.
              The third of these cases was that of the Musgrave Ritual, and it
              is to the interest which was aroused by that singular chain of
              events, and the large issues which proved to be at stake, that I
              trace my first stride towards the position which I now hold.
            </TextNode>

            <TextNode>
              “Reginald Musgrave had been in the same college as myself, and I
              had some slight acquaintance with him. He was not generally
              popular among the undergraduates, though it always seemed to me
              that what was set down as pride was really an attempt to cover
              extreme natural diffidence. In appearance he was a man of
              exceedingly aristocratic type, thin, high-nosed, and large-eyed,
              with languid and yet courtly manners. He was indeed a scion of one
              of the very oldest families in the kingdom, though his branch was
              a cadet one which had separated from the northern Musgraves some
              time in the sixteenth century, and had established itself in
              western Sussex, where the Manor House of Hurlstone is perhaps the
              oldest inhabited building in the county. Something of his birth
              place seemed to cling to the man, and I never looked at his pale,
              keen face or the poise of his head without associating him with
              gray archways and mullioned windows and all the venerable wreckage
              of a feudal keep. Once or twice we drifted into talk, and I can
              remember that more than once he expressed a keen interest in my
              methods of observation and inference.
            </TextNode>

            <TextNode>
              “For four years I had seen nothing of him until one morning he
              walked into my room in Montague Street. He had changed little, was
              dressed like a young man of fashion—he was always a bit of a
              dandy—and preserved the same quiet, suave manner which had
              formerly distinguished him.
            </TextNode>

            <TextNode>
              “ ‘How has all gone with you Musgrave?’ I asked, after we had
              cordially shaken hands.
            </TextNode>

            <TextNode>
              “ ‘You probably heard of my poor father's death,’ said he; ‘he was
              carried off about two years ago. Since then I have of course had
              the Hurlstone estates to manage, and as I am member for my
              district as well, my life has been a busy one. But I understand,
              Holmes, that you are turning to practical ends those powers with
              which you used to amaze us?’
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “ ‘Yes,’ said I, ‘I have taken to living by my wits.’
            </TextNode>

            <TextNode>
              “ ‘I am delighted to hear it, for your advice at present would be
              exceedingly valuable to me. We have had some very strange doings
              at Hurlstone, and the police have been able to throw no light upon
              the matter. It is really the most extraordinary and inexplicable
              business.’
            </TextNode>

            <TextNode>
              “You can imagine with what eagerness I listened to him, Watson,
              for the very chance for which I had been panting during all those
              months of inaction seemed to have come within my reach. In my
              inmost heart I believed that I could succeed where others failed,
              and now I had the opportunity to test myself.
            </TextNode>

            <TextNode>“ ‘Pray, let me have the details,’ I cried.</TextNode>

            <TextNode>
              “Reginald Musgrave sat down opposite to me, and lit the cigarette
              which I had pushed towards him.
            </TextNode>

            <TextNode>
              “ ‘You must know,’ said he, ‘that though I am a bachelor, I have
              to keep up a considerable staff of servants at Hurlstone, for it
              is a rambling old place, and takes a good deal of looking after. I
              preserve, too, and in the pheasant months I usually have a
              house-party, so that it would not do to be short-handed.
              Altogether there are eight maids, the cook, the butler, two
              footmen, and a boy. The garden and the stables of course have a
              separate staff.
            </TextNode>

            <TextNode>
              “ ‘Of these servants the one who had been longest in our service
              was Brunton the butler. He was a young school-master out of place
              when he was first taken up by my father, but he was a man of great
              energy and character, and he soon became quite invaluable in the
              household. He was a well-grown, handsome man, with a splendid
              forehead, and though he has been with us for twenty years he
              cannot be more than forty now. With his personal advantages and
              his extraordinary gifts—for he can speak several languages and
              play nearly every musical instrument—it is wonderful that he
              should have been satisfied so long in such a position, but I
              suppose that he was comfortable, and lacked energy to make any
              change. The butler of Hurlstone is always a thing that is
              remembered by all who visit us.
            </TextNode>

            <TextNode>
              “ ‘But this paragon has one fault. He is a bit of a Don Juan, and
              you can imagine that for a man like him it is not a very difficult
              part to play in a quiet country district. When he was married it
              was all right, but since he has been a widower we have had no end
              of trouble with him. A few months ago we were in hopes that he was
              about to settle down again for he became engaged to Rachel
              Howells, our second house-maid; but he has thrown her over since
              then and taken up with Janet Tregellis, the daughter of the head
              game-keeper. Rachel—who is a very good girl, but of an excitable
              Welsh temperament—had a sharp touch of brain-fever, and goes about
              the house now—or did until yesterday—like a black-eyed shadow of
              her former self. That was our first drama at Hurlstone; but a
              second one came to drive it from our minds, and it was prefaced by
              the disgrace and dismissal of butler Brunton.
            </TextNode>

            <TextNode>
              “ ‘This was how it came about. I have said that the man was
              intelligent, and this very intelligence has caused his ruin, for
              it seems to have led to an insatiable curiosity about things which
              did not in the least concern him. I had no idea of the lengths to
              which this would carry him, until the merest accident opened my
              eyes to it.
            </TextNode>

            <TextNode>
              “ ‘I have said that the house is a rambling one. One day last
              week—on Thursday night, to be more exact—I found that I could not
              sleep, having foolishly taken a cup of strong café noir after my
              dinner. After struggling against it until two in the morning, I
              felt that it was quite hopeless, so I rose and lit the candle with
              the intention of continuing a novel which I was reading. The book,
              however, had been left in the billiard-room, so I pulled on my
              dressing-gown and started off to get it.
            </TextNode>

            <TextNode>
              “ ‘In order to reach the billiard-room I had to descend a flight
              of stairs and then to cross the head of a passage which led to the
              library and the gun-room. You can imagine my surprise when, as I
              looked down this corridor, I saw a glimmer of light coming from
              the open door of the library. I had myself extinguished the lamp
              and closed the door before coming to bed. Naturally my first
              thought was of burglars. The corridors at Hurlstone have their
              walls largely decorated with trophies of old weapons. From one of
              these I picked a battle-axe, and then, leaving my candle behind
              me, I crept on tiptoe down the passage and peeped in at the open
              door.
            </TextNode>

            <TextNode>
              “ ‘Brunton, the butler, was in the library. He was sitting, fully
              dressed, in an easy-chair, with a slip of paper which looked like
              a map upon his knee, and his forehead sunk forward upon his hand
              in deep thought. I stood dumb with astonishment, watching him from
              the darkness. A small taper on the edge of the table shed a feeble
              light which sufficed to show me that he was fully dressed.
              Suddenly, as I looked, he rose from his chair, and walking over to
              a bureau at the side, he unlocked it and drew out one of the
              drawers. From this he took a paper, and returning to his seat he
              flattened it out beside the taper on the edge of the table, and
              began to study it with minute attention. My indignation at this
              calm examination of our family documents overcame me so far that I
              took a step forward, and Brunton, looking up, saw me standing in
              the doorway. He sprang to his feet, his face turned livid with
              fear, and he thrust into his breast the chart-like paper which he
              had been originally studying.
            </TextNode>

            <TextNode>
              “ ‘ “So!” said I. “This is how you repay the trust which we have
              reposed in you. You will leave my service to-morrow.”
            </TextNode>

            <TextNode>
              “ ‘He bowed with the look of a man who is utterly crushed, and
              slunk past me without a word. The taper was still on the table,
              and by its light I glanced to see what the paper was which Brunton
              had taken from the bureau. To my surprise it was nothing of any
              importance at all, but simply a copy of the questions and answers
              in the singular old observance called the Musgrave Ritual. It is a
              sort of ceremony peculiar to our family, which each Musgrave for
              centuries past has gone through on his coming of age—a thing of
              private interest, and perhaps of some little importance to the
              archaeologist, like our own blazonings and charges, but of no
              practical use whatever.’
            </TextNode>

            <TextNode>
              “ ‘We had better come back to the paper afterwards,’ said I.
            </TextNode>

            <TextNode>
              “ ‘If you think it really necessary,’ he answered, with some
              hesitation. ‘To continue my statement, however: I relocked the
              bureau, using the key which Brunton had left, and I had turned to
              go when I was surprised to find that the butler had returned, and
              was standing before me.
            </TextNode>

            <TextNode>
              “ ‘ “Mr. Musgrave, sir,” he cried, in a voice which was hoarse
              with emotion, “I can't bear disgrace, sir. I've always been proud
              above my station in life, and disgrace would kill me. My blood
              will be on your head, sir—it will, indeed—if you drive me to
              despair. If you cannot keep me after what has passed, then for
              God's sake let me give you notice and leave in a month, as if of
              my own free will. I could stand that, Mr. Musgrave, but not to be
              cast out before all the folk that I know so well.”
            </TextNode>

            <TextNode>
              “ ‘ “You don't deserve much consideration, Brunton,” I answered.
              “Your conduct has been most infamous. However, as you have been a
              long time in the family, I have no wish to bring public disgrace
              upon you. A month, however is too long. Take yourself away in a
              week, and give what reason you like for going.”
            </TextNode>

            <TextNode>
              “ ‘ “Only a week, sir?” he cried, in a despairing voice. “A
              fortnight—say at least a fortnight!”
            </TextNode>

            <TextNode>
              “ ‘ “A week,” I repeated, “and you may consider yourself to have
              been very leniently dealt with.”
            </TextNode>

            <TextNode>
              “ ‘He crept away, his face sunk upon his breast, like a broken
              man, while I put out the light and returned to my room.
            </TextNode>

            <TextNode>
              “ ‘For two days after this Brunton was most assiduous in his
              attention to his duties. I made no allusion to what had passed,
              and waited with some curiosity to see how he would cover his
              disgrace. On the third morning, however he did not appear, as was
              his custom, after breakfast to receive my instructions for the
              day. As I left the dining-room I happened to meet Rachel Howells,
              the maid. I have told you that she had only recently recovered
              from an illness, and was looking so wretchedly pale and wan that I
              remonstrated with her for being at work.
            </TextNode>

            <TextNode>
              “ ‘ “You should be in bed,” I said. “Come back to your duties when
              you are stronger.”
            </TextNode>

            <TextNode>
              “ ‘She looked at me with so strange an expression that I began to
              suspect that her brain was affected.
            </TextNode>

            <TextNode>
              “ ‘ “I am strong enough, Mr. Musgrave,” said she.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page141;
