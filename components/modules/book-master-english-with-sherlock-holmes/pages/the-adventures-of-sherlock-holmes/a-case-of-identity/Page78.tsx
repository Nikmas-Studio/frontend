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

function Page78({
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
        title='A CASE OF IDENTITY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Well, and what happened when Mr. Windibank, your stepfather,
              returned to France?”
            </TextNode>

            <TextNode>
              “Mr. Hosmer Angel came to the house again and proposed that we
              should marry before father came back. He was in dreadful earnest
              and made me swear, with my hands on the Testament, that whatever
              happened I would always be true to him. Mother said he was quite
              right to make me swear, and that it was a sign of his passion.
              Mother was all in his favour from the first and was even fonder of
              him than I was. Then, when they talked of marrying within the
              week, I began to ask about father; but they both said never to
              mind about father, but just to tell him afterwards, and mother
              said she would make it all right with him. I didn't quite like
              that, Mr. Holmes. It seemed funny that I should ask his leave, as
              he was only a few years older than me; but I didn't want to do
              anything on the sly, so I wrote to father at Bordeaux, where the
              company has its French offices, but the letter came back to me on
              the very morning of the wedding.”
            </TextNode>

            <TextNode>“It missed him, then?”</TextNode>

            <TextNode>
              “Yes, sir; for he had started to England just before it arrived.”
            </TextNode>

            <TextNode>
              “Ha! that was unfortunate. Your wedding was arranged, then, for
              the Friday. Was it to be in church?”
            </TextNode>

            <TextNode>
              “Yes, sir, but very quietly. It was to be at St. Saviour's, near
              King's Cross, and we were to have breakfast afterwards at the St.
              Pancras Hotel. Hosmer came for us in a hansom, but as there were
              two of us he put us both into it and stepped himself into a
              four-wheeler, which happened to be the only other cab in the
              street. We got to the church first, and when the four-wheeler
              drove up we waited for him to step out, but he never did, and when
              the cabman got down from the box and looked there was no one
              there! The cabman said that he could not imagine what had become
              of him, for he had seen him get in with his own eyes. That was
              last Friday, Mr. Holmes, and I have never seen or heard anything
              since then to throw any light upon what became of him.”
            </TextNode>

            <TextNode>
              “It seems to me that you have been very shamefully treated,” said
              Holmes.
            </TextNode>

            <TextNode>
              “Oh, no, sir! He was too good and kind to leave me so. Why, all
              the morning he was saying to me that, whatever happened, I was to
              be true; and that even if something quite unforeseen occurred to
              separate us, I was always to remember that I was pledged to him,
              and that he would claim his pledge sooner or later. It seemed
              strange talk for a wedding-morning, but what has happened since
              gives a meaning to it.”
            </TextNode>

            <TextNode>
              “Most certainly it does. Your own opinion is, then, that some
              unforeseen catastrophe has occurred to him?”
            </TextNode>

            <TextNode>
              “Yes, sir. I believe that he foresaw some danger, or else he would
              not have talked so. And then I think that what he foresaw
              happened.”
            </TextNode>

            <TextNode>
              “But you have no notion as to what it could have been?”
            </TextNode>

            <TextNode>“None.”</TextNode>

            <TextNode>
              “One more question. How did your mother take the matter?”
            </TextNode>

            <TextNode>
              “She was angry, and said that I was never to speak of the matter
              again.”
            </TextNode>

            <TextNode>“And your father? Did you tell him?”</TextNode>

            <TextNode>
              “Yes; and he seemed to think, with me, that something had
              happened, and that I should hear of Hosmer again. As he said, what
              interest could anyone have in bringing me to the doors of the
              church, and then leaving me? Now, if he had borrowed my money, or
              if he had married me and got my money settled on him, there might
              be some reason, but Hosmer was very independent about money and
              never would look at a shilling of mine. And yet, what could have
              happened? And why could he not write? Oh, it drives me half-mad to
              think of it, and I can't sleep a wink at night.” She pulled a
              little handkerchief out of her muff and began to sob heavily into
              it.
            </TextNode>

            <TextNode>
              “I shall glance into the case for you,” said Holmes, rising, “and
              I have no doubt that we shall reach some definite result. Let the
              weight of the matter rest upon me now, and do not let your mind
              dwell upon it further. Above all, try to let Mr. Hosmer Angel
              vanish from your memory, as he has done from your life.”
            </TextNode>

            <TextNode>“Then you don't think I'll see him again?”</TextNode>

            <TextNode>“I fear not.”</TextNode>

            <TextNode>“Then what has happened to him?”</TextNode>

            <TextNode>
              “You will leave that question in my hands. I should like an
              accurate description of him and any letters of his which you can
              spare.”
            </TextNode>

            <TextNode>
              “I advertised for him in last Saturday's{' '}
              <span className='italic'>Chronicle</span>,” said she. “Here is the
              slip and here are four letters from him.”
            </TextNode>

            <TextNode>“Thank you. And your address?”</TextNode>

            <TextNode>“No. 31 Lyon Place, Camberwell.”</TextNode>

            <TextNode>
              “Mr. Angel's address you never had, I understand. Where is your
              father's place of business?”
            </TextNode>

            <TextNode>
              “He travels for Westhouse & Marbank, the great claret importers of
              Fenchurch Street.”
            </TextNode>

            <TextNode>
              “Thank you. You have made your statement very clearly. You will
              leave the papers here, and remember the advice which I have given
              you. Let the whole incident be a sealed book, and do not allow it
              to affect your life.”
            </TextNode>

            <TextNode>
              “You are very kind, Mr. Holmes, but I cannot do that. I shall be
              true to Hosmer. He shall find me ready when he comes back.”
            </TextNode>

            <TextNode>
              For all the preposterous hat and the vacuous face, there was
              something noble in the simple faith of our visitor which compelled
              our respect. She laid her little bundle of papers upon the table
              and went her way, with a promise to come again whenever she might
              be summoned.
            </TextNode>

            <TextNode>
              Sherlock Holmes sat silent for a few minutes with his fingertips
              still pressed together, his legs stretched out in front of him,
              and his gaze directed upward to the ceiling. Then he took down
              from the rack the old and oily clay pipe, which was to him as a
              counsellor, and, having lit it, he leaned back in his chair, with
              the thick blue cloud-wreaths spinning up from him, and a look of
              infinite languor in his face.
            </TextNode>

            <TextNode>
              “Quite an interesting study, that maiden,” he observed. “I found
              her more interesting than her little problem, which, by the way,
              is rather a trite one. You will find parallel cases, if you
              consult my index, in Andover in '77, and there was something of
              the sort at The Hague last year. Old as is the idea, however,
              there were one or two details which were new to me. But the maiden
              herself was most instructive.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “You appeared to read a good deal upon her which was quite
              invisible to me,” I remarked.
            </TextNode>

            <TextNode>
              “Not invisible but unnoticed, Watson. You did not know where to
              look, and so you missed all that was important. I can never bring
              you to realise the importance of sleeves, the suggestiveness of
              thumb-nails, or the great issues that may hang from a boot-lace.
              Now, what did you gather from that woman's appearance? Describe
              it.”
            </TextNode>

            <TextNode>
              “Well, she had a slate-coloured, broad-brimmed straw hat, with a
              feather of a brickish red. Her jacket was black, with black beads
              sewn upon it, and a fringe of little black jet ornaments. Her
              dress was brown, rather darker than coffee colour, with a little
              purple plush at the neck and sleeves. Her gloves were greyish and
              were worn through at the right forefinger. Her boots I didn't
              observe. She had small round, hanging gold earrings, and a general
              air of being fairly well-to-do in a vulgar, comfortable,
              easy-going way.”
            </TextNode>

            <TextNode>
              Sherlock Holmes clapped his hands softly together and chuckled.
            </TextNode>

            <TextNode>
              “'Pon my word, Watson, you are coming along wonderfully. You have
              really done very well indeed. It is true that you have missed
              everything of importance, but you have hit upon the method, and
              you have a quick eye for colour. Never trust to general
              impressions, my boy, but concentrate yourself upon details. My
              first glance is always at a woman's sleeve. In a man it is perhaps
              better first to take the knee of the trouser. As you observe, this
              woman had plush upon her sleeves, which is a most useful material
              for showing traces. The double line a little above the wrist,
              where the typewritist presses against the table, was beautifully
              defined. The sewing-machine, of the hand type, leaves a similar
              mark, but only on the left arm, and on the side of it farthest
              from the thumb, instead of being right across the broadest part,
              as this was. I then glanced at her face, and, observing the dint
              of a pince-nez at either side of her nose, I ventured a remark
              upon short sight and typewriting, which seemed to surprise her.”
            </TextNode>

            <TextNode>“It surprised me.”</TextNode>

            <TextNode>
              “But, surely, it was obvious. I was then much surprised and
              interested on glancing down to observe that, though the boots
              which she was wearing were not unlike each other, they were really
              odd ones; the one having a slightly decorated toe-cap, and the
              other a plain one. One was buttoned only in the two lower buttons
              out of five, and the other at the first, third, and fifth. Now,
              when you see that a young lady, otherwise neatly dressed, has come
              away from home with odd boots, half-buttoned, it is no great
              deduction to say that she came away in a hurry.”
            </TextNode>

            <TextNode>
              “And what else?” I asked, keenly interested, as I always was, by
              my friend's incisive reasoning.
            </TextNode>

            <TextNode>
              “I noted, in passing, that she had written a note before leaving
              home but after being fully dressed. You observed that her right
              glove was torn at the forefinger, but you did not apparently see
              that both glove and finger were stained with violet ink. She had
              written in a hurry and dipped her pen too deep. It must have been
              this morning, or the mark would not remain clear upon the finger.
              All this is amusing, though rather elementary, but I must go back
              to business, Watson. Would you mind reading me the advertised
              description of Mr. Hosmer Angel?”
            </TextNode>

            <TextNode>I held the little printed slip to the light.</TextNode>

            <Indent>
              <TextNode noIndent>
                “Missing,” it said, “on the morning of the fourteenth, a
                gentleman named Hosmer Angel. About five ft. seven in. in
                height; strongly built, sallow complexion, black hair, a little
                bald in the centre, bushy, black side-whiskers and moustache;
                tinted glasses, slight infirmity of speech. Was dressed, when
                last seen, in black frock-coat faced with silk, black waistcoat,
                gold Albert chain, and grey Harris tweed trousers, with brown
                gaiters over elastic-sided boots. Known to have been employed in
                an office in Leadenhall Street. Anybody bringing—”
              </TextNode>
            </Indent>

            <TextNode noIndent>
              “That will do,” said Holmes. “As to the letters,” he continued,
              glancing over them, “they are very commonplace. Absolutely no clue
              in them to Mr. Angel, save that he quotes Balzac once. There is
              one remarkable point, however, which will no doubt strike you.”
            </TextNode>

            <TextNode>“They are typewritten,” I remarked.</TextNode>

            <TextNode>
              “Not only that, but the signature is typewritten. Look at the neat
              little ‘Hosmer Angel’ at the bottom. There is a date, you see, but
              no superscription except Leadenhall Street, which is rather vague.
              The point about the signature is very suggestive—in fact, we may
              call it conclusive.”
            </TextNode>

            <TextNode>“Of what?”</TextNode>

            <TextNode>
              “My dear fellow, is it possible you do not see how strongly it
              bears upon the case?”
            </TextNode>

            <TextNode>
              “I cannot say that I do unless it were that he wished to be able
              to deny his signature if an action for breach of promise were
              instituted.”
            </TextNode>

            <TextNode>
              “No, that was not the point. However, I shall write two letters,
              which should settle the matter. One is to a firm in the City, the
              other is to the young lady's stepfather, Mr. Windibank, asking him
              whether he could meet us here at six o'clock tomorrow evening. It
              is just as well that we should do business with the male
              relatives. And now, Doctor, we can do nothing until the answers to
              those letters come, so we may put our little problem upon the
              shelf for the interim.”
            </TextNode>

            <TextNode>
              I had had so many reasons to believe in my friend's subtle powers
              of reasoning and extraordinary energy in action that I felt that
              he must have some solid grounds for the assured and easy demeanour
              with which he treated the singular mystery which he had been
              called upon to fathom. Once only had I known him to fail, in the
              case of the King of Bohemia and of the Irene Adler photograph; but
              when I looked back to the weird business of the Sign of Four, and
              the extraordinary circumstances connected with the Study in
              Scarlet, I felt that it would be a strange tangle indeed which he
              could not unravel.
            </TextNode>

            <TextNode>
              I left him then, still puffing at his black clay pipe, with the
              conviction that when I came again on the next evening I would find
              that he held in his hands all the clues which would lead up to the
              identity of the disappearing bridegroom of Miss Mary Sutherland.
            </TextNode>

            <TextNode>
              A professional case of great gravity was engaging my own attention
              at the time, and the whole of next day I was busy at the bedside
              of the sufferer. It was not until close upon six o'clock that I
              found myself free and was able to spring into a hansom and drive
              to Baker Street, half afraid that I might be too late to assist at
              the dénouement of the little mystery. I found Sherlock Holmes
              alone, however, half asleep, with his long, thin form curled up in
              the recesses of his armchair. A formidable array of bottles and
              test-tubes, with the pungent cleanly smell of hydrochloric acid,
              told me that he had spent his day in the chemical work which was
              so dear to him.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page78;
