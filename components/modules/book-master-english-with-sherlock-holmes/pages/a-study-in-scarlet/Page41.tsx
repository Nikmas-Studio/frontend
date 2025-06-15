'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
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
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page41({
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
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <H4>
          Chapter IV.
          <br />
          The Story of the Bald-Headed Man
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              We followed the Indian down a sordid and common passage, ill lit
              and worse furnished, until he came to a door upon the right, which
              he threw open. A blaze of yellow light streamed out upon us, and
              in the centre of the glare there stood a small man with a very
              high head, a bristle of red hair all round the fringe of it, and a
              bald, shining scalp which shot out from among it like a
              mountain-peak from fir-trees. He writhed his hands together as he
              stood, and his features were in a perpetual jerk, now smiling, now
              scowling, but never for an instant in repose. Nature had given him
              a pendulous lip, and a too visible line of yellow and irregular
              teeth, which he strove feebly to conceal by constantly passing his
              hand over the lower part of his face. In spite of his obtrusive
              baldness, he gave the impression of youth. In point of fact he had
              just turned his thirtieth year.
            </TextNode>

            <TextNode>
              “Your servant, Miss Morstan,” he kept repeating, in a thin, high
              voice. “Your servant, gentlemen. Pray step into my little sanctum.
              A small place, miss, but furnished to my own liking. An oasis of
              art in the howling desert of South London.”
            </TextNode>

            <TextNode>
              We were all astonished by the appearance of the apartment into
              which he invited us. In that sorry house it looked as out of place
              as a diamond of the first water in a setting of brass. The richest
              and glossiest of curtains and tapestries draped the walls, looped
              back here and there to expose some richly-mounted painting or
              Oriental vase. The carpet was of amber-and-black, so soft and so
              thick that the foot sank pleasantly into it, as into a bed of
              moss. Two great tiger-skins thrown athwart it increased the
              suggestion of Eastern luxury, as did a huge hookah which stood
              upon a mat in the corner. A lamp in the fashion of a silver dove
              was hung from an almost invisible golden wire in the centre of the
              room. As it burned it filled the air with a subtle and aromatic
              odor.
            </TextNode>

            <TextNode>
              “Mr. Thaddeus Sholto,” said the little man, still jerking and
              smiling. “That is my name. You are Miss Morstan, of course. And
              these gentlemen—”
            </TextNode>

            <TextNode>
              “This is Mr. Sherlock Holmes, and this is Dr. Watson.”
            </TextNode>

            <TextNode>
              “A doctor, eh?” cried he, much excited. “Have you your
              stethoscope? Might I ask you—would you have the kindness? I have
              grave doubts as to my mitral valve, if you would be so very good.
              The aortic I may rely upon, but I should value your opinion upon
              the mitral.”
            </TextNode>

            <TextNode>
              I listened to his heart, as requested, but was unable to find
              anything amiss, save indeed that he was in an ecstasy of fear, for
              he shivered from head to foot. “It appears to be normal,” I said.
              “You have no cause for uneasiness.”
            </TextNode>

            <TextNode>
              “You will excuse my anxiety, Miss Morstan,” he remarked, airily.
              “I am a great sufferer, and I have long had suspicions as to that
              valve. I am delighted to hear that they are unwarranted. Had your
              father, Miss Morstan, refrained from throwing a strain upon his
              heart, he might have been alive now.”
            </TextNode>

            <TextNode>
              I could have struck the man across the face, so hot was I at this
              callous and off-hand reference to so delicate a matter. Miss
              Morstan sat down, and her face grew white to the lips. “I knew in
              my heart that he was dead,” said she.
            </TextNode>

            <TextNode>
              “I can give you every information,” said he, “and, what is more, I
              can do you justice; and I will, too, whatever Brother Bartholomew
              may say. I am so glad to have your friends here, not only as an
              escort to you, but also as witnesses to what I am about to do and
              say. The three of us can show a bold front to Brother Bartholomew.
              But let us have no outsiders,—no police or officials. We can
              settle everything satisfactorily among ourselves, without any
              interference. Nothing would annoy Brother Bartholomew more than
              any publicity.” He sat down upon a low settee and blinked at us
              inquiringly with his weak, watery blue eyes.
            </TextNode>

            <TextNode>
              “For my part,” said Holmes, “whatever you may choose to say will
              go no further.”
            </TextNode>

            <TextNode>I nodded to show my agreement.</TextNode>

            <TextNode>
              “That is well! That is well!” said he. “May I offer you a glass of
              Chianti, Miss Morstan? Or of Tokay? I keep no other wines. Shall I
              open a flask? No? Well, then, I trust that you have no objection
              to tobacco-smoke, to the mild balsamic odor of the Eastern
              tobacco. I am a little nervous, and I find my hookah an invaluable
              sedative.” He applied a taper to the great bowl, and the smoke
              bubbled merrily through the rose-water. We sat all three in a
              semicircle, with our heads advanced, and our chins upon our hands,
              while the strange, jerky little fellow, with his high, shining
              head, puffed uneasily in the centre.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “When I first determined to make this communication to you,” said
              he, “I might have given you my address, but I feared that you
              might disregard my request and bring unpleasant people with you. I
              took the liberty, therefore, of making an appointment in such a
              way that my man Williams might be able to see you first. I have
              complete confidence in his discretion, and he had orders, if he
              were dissatisfied, to proceed no further in the matter. You will
              excuse these precautions, but I am a man of somewhat retiring, and
              I might even say refined, tastes, and there is nothing more
              unaesthetic than a policeman. I have a natural shrinking from all
              forms of rough materialism. I seldom come in contact with the
              rough crowd. I live, as you see, with some little atmosphere of
              elegance around me. I may call myself a patron of the arts. It is
              my weakness. The landscape is a genuine Corot, and, though a
              connoisseur might perhaps throw a doubt upon that Salvator Rosa,
              there cannot be the least question about the Bouguereau. I am
              partial to the modern French school.”
            </TextNode>

            <TextNode>
              “You will excuse me, Mr. Sholto,” said Miss Morstan, “but I am
              here at your request to learn something which you desire to tell
              me. It is very late, and I should desire the interview to be as
              short as possible.”
            </TextNode>

            <TextNode>
              “At the best it must take some time,” he answered; “for we shall
              certainly have to go to Norwood and see Brother Bartholomew. We
              shall all go and try if we can get the better of Brother
              Bartholomew. He is very angry with me for taking the course which
              has seemed right to me. I had quite high words with him last
              night. You cannot imagine what a terrible fellow he is when he is
              angry.”
            </TextNode>

            <TextNode>
              “If we are to go to Norwood it would perhaps be as well to start
              at once,” I ventured to remark.
            </TextNode>

            <TextNode>
              He laughed until his ears were quite red. “That would hardly do,”
              he cried. “I don't know what he would say if I brought you in that
              sudden way. No, I must prepare you by showing you how we all stand
              to each other. In the first place, I must tell you that there are
              several points in the story of which I am myself ignorant. I can
              only lay the facts before you as far as I know them myself.
            </TextNode>

            <TextNode>
              “My father was, as you may have guessed, Major John Sholto, once
              of the Indian army. He retired some eleven years ago, and came to
              live at Pondicherry Lodge in Upper Norwood. He had prospered in
              India, and brought back with him a considerable sum of money, a
              large collection of valuable curiosities, and a staff of native
              servants. With these advantages he bought himself a house, and
              lived in great luxury. My twin-brother Bartholomew and I were the
              only children.
            </TextNode>

            <TextNode>
              “I very well remember the sensation which was caused by the
              disappearance of Captain Morstan. We read the details in the
              papers, and, knowing that he had been a friend of our father's, we
              discussed the case freely in his presence. He used to join in our
              speculations as to what could have happened. Never for an instant
              did we suspect that he had the whole secret hidden in his own
              breast,—that of all men he alone knew the fate of Arthur Morstan.
            </TextNode>

            <TextNode>
              “We did know, however, that some mystery—some positive
              danger—overhung our father. He was very fearful of going out
              alone, and he always employed two prize-fighters to act as porters
              at Pondicherry Lodge. Williams, who drove you to-night, was one of
              them. He was once light-weight champion of England. Our father
              would never tell us what it was he feared, but he had a most
              marked aversion to men with wooden legs. On one occasion he
              actually fired his revolver at a wooden-legged man, who proved to
              be a harmless tradesman canvassing for orders. We had to pay a
              large sum to hush the matter up. My brother and I used to think
              this a mere whim of my father's, but events have since led us to
              change our opinion.
            </TextNode>

            <TextNode>
              “Early in 1882 my father received a letter from India which was a
              great shock to him. He nearly fainted at the breakfast-table when
              he opened it, and from that day he sickened to his death. What was
              in the letter we could never discover, but I could see as he held
              it that it was short and written in a scrawling hand. He had
              suffered for years from an enlarged spleen, but he now became
              rapidly worse, and towards the end of April we were informed that
              he was beyond all hope, and that he wished to make a last
              communication to us.
            </TextNode>

            <TextNode>
              “When we entered his room he was propped up with pillows and
              breathing heavily. He besought us to lock the door and to come
              upon either side of the bed. Then, grasping our hands, he made a
              remarkable statement to us, in a voice which was broken as much by
              emotion as by pain. I shall try and give it to you in his own very
              words.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page41;
