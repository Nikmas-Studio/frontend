import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page44({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE SIGN OF THE FOUR'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              Sherlock Holmes took the lamp and led the way, for Thaddeus
              Sholto's teeth were chattering in his head. So shaken was he that
              I had to pass my hand under his arm as we went up the stairs, for
              his knees were trembling under him. Twice as we ascended Holmes
              whipped his lens out of his pocket and carefully examined marks
              which appeared to me to be mere shapeless smudges of dust upon the
              cocoa-nut matting which served as a stair-carpet. He walked slowly
              from step to step, holding the lamp, and shooting keen glances to
              right and left. Miss Morstan had remained behind with the
              frightened housekeeper.
            </TextNode>
            <TextNode>
              The third flight of stairs ended in a straight passage of some
              length, with a great picture in Indian tapestry upon the right of
              it and three doors upon the left. Holmes advanced along it in the
              same slow and methodical way, while we kept close at his heels,
              with our long black shadows streaming backwards down the corridor.
              The third door was that which we were seeking. Holmes knocked
              without receiving any answer, and then tried to turn the handle
              and force it open. It was locked on the inside, however, and by a
              broad and powerful bolt, as we could see when we set our lamp up
              against it. The key being turned, however, the hole was not
              entirely closed. Sherlock Holmes bent down to it, and instantly
              rose again with a sharp intaking of the breath.
            </TextNode>
            <TextNode>
              “There is something devilish in this, Watson,” said he, more moved
              than I had ever before seen him. “What do you make of it?”
            </TextNode>
            <TextNode>
              I stooped to the hole, and recoiled in horror. Moonlight was
              streaming into the room, and it was bright with a vague and shifty
              radiance. Looking straight at me, and suspended, as it were, in
              the air, for all beneath was in shadow, there hung a face,—the
              very face of our companion Thaddeus. There was the same high,
              shining head, the same circular bristle of red hair, the same
              bloodless countenance. The features were set, however, in a
              horrible smile, a fixed and unnatural grin, which in that still
              and moonlit room was more jarring to the nerves than any scowl or
              contortion. So like was the face to that of our little friend that
              I looked round at him to make sure that he was indeed with us.
              Then I recalled to mind that he had mentioned to us that his
              brother and he were twins.
            </TextNode>
            <TextNode>
              “This is terrible!” I said to Holmes. “What is to be done?”
            </TextNode>
            <TextNode>
              “The door must come down,” he answered, and, springing against it,
              he put all his weight upon the lock. It creaked and groaned, but
              did not yield. Together we flung ourselves upon it once more, and
              this time it gave way with a sudden snap, and we found ourselves
              within Bartholomew Sholto's chamber.
            </TextNode>
            <TextNode>
              It appeared to have been fitted up as a chemical laboratory. A
              double line of glass-stoppered bottles was drawn up upon the wall
              opposite the door, and the table was littered over with Bunsen
              burners, test-tubes, and retorts. In the corners stood carboys of
              acid in wicker baskets. One of these appeared to leak or to have
              been broken, for a stream of dark-colored liquid had trickled out
              from it, and the air was heavy with a peculiarly pungent, tar-like
              odor. A set of steps stood at one side of the room, in the midst
              of a litter of lath and plaster, and above them there was an
              opening in the ceiling large enough for a man to pass through. At
              the foot of the steps a long coil of rope was thrown carelessly
              together.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              By the table, in a wooden arm-chair, the master of the house was
              seated all in a heap, with his head sunk upon his left shoulder,
              and that ghastly, inscrutable smile upon his face. He was stiff
              and cold, and had clearly been dead many hours. It seemed to me
              that not only his features but all his limbs were twisted and
              turned in the most fantastic fashion. By his hand upon the table
              there lay a peculiar instrument,—a brown, close-grained stick,
              with a stone head like a hammer, rudely lashed on with coarse
              twine. Beside it was a torn sheet of note-paper with some words
              scrawled upon it. Holmes glanced at it, and then handed it to me.
            </TextNode>

            <TextNode>
              “You see,” he said, with a significant raising of the eyebrows.
            </TextNode>

            <TextNode>
              In the light of the lantern I read, with a thrill of horror, “The
              sign of the four.”
            </TextNode>

            <TextNode>
              “In God's name, what does it all mean?” I asked.
            </TextNode>

            <TextNode>
              “It means murder,” said he, stooping over the dead man. “Ah, I
              expected it. Look here!” He pointed to what looked like a long,
              dark thorn stuck in the skin just above the ear.
            </TextNode>

            <TextNode>“It looks like a thorn,” said I.</TextNode>

            <TextNode>
              “It is a thorn. You may pick it out. But be careful, for it is
              poisoned.”
            </TextNode>

            <TextNode>
              I took it up between my finger and thumb. It came away from the
              skin so readily that hardly any mark was left behind. One tiny
              speck of blood showed where the puncture had been.
            </TextNode>

            <TextNode>
              “This is all an insoluble mystery to me,” said I. “It grows darker
              instead of clearer.”
            </TextNode>

            <TextNode>
              “On the contrary,” he answered, “it clears every instant. I only
              require a few missing links to have an entirely connected case.”
            </TextNode>

            <TextNode>
              We had almost forgotten our companion's presence since we entered
              the chamber. He was still standing in the door-way, the very
              picture of terror, wringing his hands and moaning to himself.
              Suddenly, however, he broke out into a sharp, querulous cry.
            </TextNode>

            <TextNode>
              “The treasure is gone!” he said. “They have robbed him of the
              treasure! There is the hole through which we lowered it. I helped
              him to do it! I was the last person who saw him! I left him here
              last night, and I heard him lock the door as I came down-stairs.”
            </TextNode>

            <TextNode>“What time was that?”</TextNode>

            <TextNode>
              “It was ten o'clock. And now he is dead, and the police will be
              called in, and I shall be suspected of having had a hand in it.
              Oh, yes, I am sure I shall. But you don't think so, gentlemen?
              Surely you don't think that it was I? Is it likely that I would
              have brought you here if it were I? Oh, dear! oh, dear! I know
              that I shall go mad!” He jerked his arms and stamped his feet in a
              kind of convulsive frenzy.
            </TextNode>

            <TextNode>
              “You have no reason for fear, Mr. Sholto,” said Holmes, kindly,
              putting his hand upon his shoulder. “Take my advice, and drive
              down to the station to report this matter to the police. Offer to
              assist them in every way. We shall wait here until your return.”
            </TextNode>

            <TextNode>
              The little man obeyed in a half-stupefied fashion, and we heard
              him stumbling down the stairs in the dark.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page44;
