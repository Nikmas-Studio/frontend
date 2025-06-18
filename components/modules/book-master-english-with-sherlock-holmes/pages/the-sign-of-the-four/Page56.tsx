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
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page56({
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
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Yes, it is your boy,” I cried. “I can see him plainly.”
            </TextNode>

            <TextNode>
              “And there is the&nbsp;<span className='italic'>Aurora</span>,”
              exclaimed Holmes, “and going like the devil! Full speed ahead,
              engineer. Make after that launch with the yellow light. By heaven,
              I shall never forgive myself if she proves to have the heels of
              us!”
            </TextNode>

            <TextNode>
              She had slipped unseen through the yard-entrance and passed behind
              two or three small craft, so that she had fairly got her speed up
              before we saw her. Now she was flying down the stream, near in to
              the shore, going at a tremendous rate. Jones looked gravely at her
              and shook his head.
            </TextNode>

            <TextNode>
              “She is very fast,” he said. “I doubt if we shall catch her.”
            </TextNode>

            <TextNode>
              “We must catch her!” cried Holmes, between his teeth. “Heap it on,
              stokers! Make her do all she can! If we burn the boat we must have
              them!”
            </TextNode>

            <TextNode>
              We were fairly after her now. The furnaces roared, and the
              powerful engines whizzed and clanked, like a great metallic heart.
              Her sharp, steep prow cut through the river-water and sent two
              rolling waves to right and to left of us. With every throb of the
              engines we sprang and quivered like a living thing. One great
              yellow lantern in our bows threw a long, flickering funnel of
              light in front of us. Right ahead a dark blur upon the water
              showed where the&nbsp;<span className='italic'>Aurora</span> lay,
              and the swirl of white foam behind her spoke of the pace at which
              she was going. We flashed past barges, steamers, merchant-vessels,
              in and out, behind this one and round the other. Voices hailed us
              out of the darkness, but still the&nbsp;
              <span className='italic'>Aurora</span> thundered on, and still we
              followed close upon her track.
            </TextNode>

            <TextNode>
              “Pile it on, men, pile it on!” cried Holmes, looking down into the
              engine-room, while the fierce glow from below beat upon his eager,
              aquiline face. “Get every pound of steam you can.”
            </TextNode>

            <TextNode>
              “I think we gain a little,” said Jones, with his eyes on the&nbsp;
              <span className='italic'>Aurora</span>.
            </TextNode>

            <TextNode>
              “I am sure of it,” said I. “We shall be up with her in a very few
              minutes.”
            </TextNode>

            <TextNode>
              At that moment, however, as our evil fate would have it, a tug
              with three barges in tow blundered in between us. It was only by
              putting our helm hard down that we avoided a collision, and before
              we could round them and recover our way the&nbsp;
              <span className='italic'>Aurora</span> had gained a good two
              hundred yards. She was still, however, well in view, and the murky
              uncertain twilight was setting into a clear starlit night. Our
              boilers were strained to their utmost, and the frail shell
              vibrated and creaked with the fierce energy which was driving us
              along. We had shot through the Pool, past the West India Docks,
              down the long Deptford Reach, and up again after rounding the Isle
              of Dogs. The dull blur in front of us resolved itself now clearly
              enough into the dainty <span className='italic'>Aurora</span>.
              Jones turned our search-light upon her, so that we could plainly
              see the figures upon her deck. One man sat by the stern, with
              something black between his knees over which he stooped. Beside
              him lay a dark mass which looked like a Newfoundland dog. The boy
              held the tiller, while against the red glare of the furnace I
              could see old Smith, stripped to the waist, and shovelling coals
              for dear life. They may have had some doubt at first as to whether
              we were really pursuing them, but now as we followed every winding
              and turning which they took there could no longer be any question
              about it. At Greenwich we were about three hundred paces behind
              them. At Blackwall we could not have been more than two hundred
              and fifty. I have coursed many creatures in many countries during
              my checkered career, but never did sport give me such a wild
              thrill as this mad, flying man-hunt down the Thames. Steadily we
              drew in upon them, yard by yard. In the silence of the night we
              could hear the panting and clanking of their machinery. The man in
              the stern still crouched upon the deck, and his arms were moving
              as though he were busy, while every now and then he would look up
              and measure with a glance the distance which still separated us.
              Nearer we came and nearer. Jones yelled to them to stop. We were
              not more than four boat's lengths behind them, both boats flying
              at a tremendous pace. It was a clear reach of the river, with
              Barking Level upon one side and the melancholy Plumstead Marshes
              upon the other. At our hail the man in the stern sprang up from
              the deck and shook his two clinched fists at us, cursing the while
              in a high, cracked voice. He was a good-sized, powerful man, and
              as he stood poising himself with legs astride I could see that
              from the thigh downwards there was but a wooden stump upon the
              right side. At the sound of his strident, angry cries there was
              movement in the huddled bundle upon the deck. It straightened
              itself into a little black man—the smallest I have ever seen—with
              a great, misshapen head and a shock of tangled, dishevelled hair.
              Holmes had already drawn his revolver, and I whipped out mine at
              the sight of this savage, distorted creature. He was wrapped in
              some sort of dark ulster or blanket, which left only his face
              exposed; but that face was enough to give a man a sleepless night.
              Never have I seen features so deeply marked with all bestiality
              and cruelty. His small eyes glowed and burned with a sombre light,
              and his thick lips were writhed back from his teeth, which grinned
              and chattered at us with a half animal fury.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Fire if he raises his hand,” said Holmes, quietly. We were within
              a boat's-length by this time, and almost within touch of our
              quarry. I can see the two of them now as they stood, the white man
              with his legs far apart, shrieking out curses, and the unhallowed
              dwarf with his hideous face, and his strong yellow teeth gnashing
              at us in the light of our lantern.
            </TextNode>

            <TextNode>
              It was well that we had so clear a view of him. Even as we looked
              he plucked out from under his covering a short, round piece of
              wood, like a school-ruler, and clapped it to his lips. Our pistols
              rang out together. He whirled round, threw up his arms, and with a
              kind of choking cough fell sideways into the stream. I caught one
              glimpse of his venomous, menacing eyes amid the white swirl of the
              waters. At the same moment the wooden-legged man threw himself
              upon the rudder and put it hard down, so that his boat made
              straight in for the southern bank, while we shot past her stern,
              only clearing her by a few feet. We were round after her in an
              instant, but she was already nearly at the bank. It was a wild and
              desolate place, where the moon glimmered upon a wide expanse of
              marsh-land, with pools of stagnant water and beds of decaying
              vegetation. The launch with a dull thud ran up upon the mud-bank,
              with her bow in the air and her stern flush with the water. The
              fugitive sprang out, but his stump instantly sank its whole length
              into the sodden soil. In vain he struggled and writhed. Not one
              step could he possibly take either forwards or backwards. He
              yelled in impotent rage, and kicked frantically into the mud with
              his other foot, but his struggles only bored his wooden pin the
              deeper into the sticky bank. When we brought our launch alongside
              he was so firmly anchored that it was only by throwing the end of
              a rope over his shoulders that we were able to haul him out, and
              to drag him, like some evil fish, over our side. The two Smiths,
              father and son, sat sullenly in their launch, but came aboard
              meekly enough when commanded. The&nbsp;
              <span className='italic'>Aurora</span> herself we hauled off and
              made fast to our stern. A solid iron chest of Indian workmanship
              stood upon the deck. This, there could be no question, was the
              same that had contained the ill-omened treasure of the Sholtos.
              There was no key, but it was of considerable weight, so we
              transferred it carefully to our own little cabin. As we steamed
              slowly up-stream again, we flashed our search-light in every
              direction, but there was no sign of the Islander. Somewhere in the
              dark ooze at the bottom of the Thames lie the bones of that
              strange visitor to our shores.
            </TextNode>

            <TextNode>
              “See here,” said Holmes, pointing to the wooden hatchway. “We were
              hardly quick enough with our pistols.” There, sure enough, just
              behind where we had been standing, stuck one of those murderous
              darts which we knew so well. It must have whizzed between us at
              the instant that we fired. Holmes smiled at it and shrugged his
              shoulders in his easy fashion, but I confess that it turned me
              sick to think of the horrible death which had passed so close to
              us that night.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page56;
