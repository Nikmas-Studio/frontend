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

function Page101({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;SPECKLED&nbsp;BAND'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “There's the village,” said the driver, pointing to a cluster of
              roofs some distance to the left; “but if you want to get to the
              house, you'll find it shorter to get over this stile, and so by
              the foot-path over the fields. There it is, where the lady is
              walking.”
            </TextNode>

            <TextNode>
              “And the lady, I fancy, is Miss Stoner,” observed Holmes, shading
              his eyes. “Yes, I think we had better do as you suggest.”
            </TextNode>

            <TextNode>
              We got off, paid our fare, and the trap rattled back on its way to
              Leatherhead.
            </TextNode>

            <TextNode>
              “I thought it as well,” said Holmes as we climbed the stile, “that
              this fellow should think we had come here as architects, or on
              some definite business. It may stop his gossip. Good-afternoon,
              Miss Stoner. You see that we have been as good as our word.”
            </TextNode>

            <TextNode>
              Our client of the morning had hurried forward to meet us with a
              face which spoke her joy. “I have been waiting so eagerly for
              you,” she cried, shaking hands with us warmly. “All has turned out
              splendidly. Dr. Roylott has gone to town, and it is unlikely that
              he will be back before evening.”
            </TextNode>

            <TextNode>
              “We have had the pleasure of making the doctor's acquaintance,”
              said Holmes, and in a few words he sketched out what had occurred.
              Miss Stoner turned white to the lips as she listened.
            </TextNode>

            <TextNode>
              “Good heavens!” she cried, “he has followed me, then.”
            </TextNode>

            <TextNode>“So it appears.”</TextNode>

            <TextNode>
              “He is so cunning that I never know when I am safe from him. What
              will he say when he returns?”
            </TextNode>

            <TextNode>
              “He must guard himself, for he may find that there is someone more
              cunning than himself upon his track. You must lock yourself up
              from him to-night. If he is violent, we shall take you away to
              your aunt's at Harrow. Now, we must make the best use of our time,
              so kindly take us at once to the rooms which we are to examine.”
            </TextNode>

            <TextNode>
              The building was of grey, lichen-blotched stone, with a high
              central portion and two curving wings, like the claws of a crab,
              thrown out on each side. In one of these wings the windows were
              broken and blocked with wooden boards, while the roof was partly
              caved in, a picture of ruin. The central portion was in little
              better repair, but the right-hand block was comparatively modern,
              and the blinds in the windows, with the blue smoke curling up from
              the chimneys, showed that this was where the family resided. Some
              scaffolding had been erected against the end wall, and the
              stone-work had been broken into, but there were no signs of any
              workmen at the moment of our visit. Holmes walked slowly up and
              down the ill-trimmed lawn and examined with deep attention the
              outsides of the windows.
            </TextNode>

            <TextNode>
              “This, I take it, belongs to the room in which you used to sleep,
              the centre one to your sister's, and the one next to the main
              building to Dr. Roylott's chamber?”
            </TextNode>

            <TextNode>
              “Exactly so. But I am now sleeping in the middle one.”
            </TextNode>

            <TextNode>
              “Pending the alterations, as I understand. By the way, there does
              not seem to be any very pressing need for repairs at that end
              wall.”
            </TextNode>

            <TextNode>
              “There were none. I believe that it was an excuse to move me from
              my room.”
            </TextNode>

            <TextNode>
              “Ah! that is suggestive. Now, on the other side of this narrow
              wing runs the corridor from which these three rooms open. There
              are windows in it, of course?”
            </TextNode>

            <TextNode>
              “Yes, but very small ones. Too narrow for anyone to pass through.”
            </TextNode>

            <TextNode>
              “As you both locked your doors at night, your rooms were
              unapproachable from that side. Now, would you have the kindness to
              go into your room and bar your shutters?”
            </TextNode>

            <TextNode>
              Miss Stoner did so, and Holmes, after a careful examination
              through the open window, endeavoured in every way to force the
              shutter open, but without success. There was no slit through which
              a knife could be passed to raise the bar. Then with his lens he
              tested the hinges, but they were of solid iron, built firmly into
              the massive masonry. “Hum!” said he, scratching his chin in some
              perplexity, “my theory certainly presents some difficulties. No
              one could pass these shutters if they were bolted. Well, we shall
              see if the inside throws any light upon the matter.”
            </TextNode>

            <TextNode>
              A small side door led into the whitewashed corridor from which the
              three bedrooms opened. Holmes refused to examine the third
              chamber, so we passed at once to the second, that in which Miss
              Stoner was now sleeping, and in which her sister had met with her
              fate. It was a homely little room, with a low ceiling and a gaping
              fireplace, after the fashion of old country-houses. A brown chest
              of drawers stood in one corner, a narrow white-counterpaned bed in
              another, and a dressing-table on the left-hand side of the window.
              These articles, with two small wicker-work chairs, made up all the
              furniture in the room save for a square of Wilton carpet in the
              centre. The boards round and the panelling of the walls were of
              brown, worm-eaten oak, so old and discoloured that it may have
              dated from the original building of the house. Holmes drew one of
              the chairs into a corner and sat silent, while his eyes travelled
              round and round and up and down, taking in every detail of the
              apartment.
            </TextNode>

            <TextNode>
              “Where does that bell communicate with?” he asked at last pointing
              to a thick bell-rope which hung down beside the bed, the tassel
              actually lying upon the pillow.
            </TextNode>

            <TextNode>“It goes to the housekeeper's room.”</TextNode>

            <TextNode>“It looks newer than the other things?”</TextNode>

            <TextNode>
              “Yes, it was only put there a couple of years ago.”
            </TextNode>

            <TextNode>“Your sister asked for it, I suppose?”</TextNode>

            <TextNode>
              “No, I never heard of her using it. We used always to get what we
              wanted for ourselves.”
            </TextNode>

            <TextNode>
              “Indeed, it seemed unnecessary to put so nice a bell-pull there.
              You will excuse me for a few minutes while I satisfy myself as to
              this floor.” He threw himself down upon his face with his lens in
              his hand and crawled swiftly backward and forward, examining
              minutely the cracks between the boards. Then he did the same with
              the wood-work with which the chamber was panelled. Finally he
              walked over to the bed and spent some time in staring at it and in
              running his eye up and down the wall. Finally he took the
              bell-rope in his hand and gave it a brisk tug.
            </TextNode>

            <TextNode>“Why, it's a dummy,” said he.</TextNode>

            <TextNode>“Won't it ring?”</TextNode>

            <TextNode>
              “No, it is not even attached to a wire. This is very interesting.
              You can see now that it is fastened to a hook just above where the
              little opening for the ventilator is.”
            </TextNode>

            <TextNode>“How very absurd! I never noticed that before.”</TextNode>

            <TextNode>
              “Very strange!” muttered Holmes, pulling at the rope. “There are
              one or two very singular points about this room. For example, what
              a fool a builder must be to open a ventilator into another room,
              when, with the same trouble, he might have communicated with the
              outside air!”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “That is also quite modern,” said the lady.
            </TextNode>

            <TextNode>
              “Done about the same time as the bell-rope?” remarked Holmes.
            </TextNode>

            <TextNode>
              “Yes, there were several little changes carried out about that
              time.”
            </TextNode>

            <TextNode>
              “They seem to have been of a most interesting character—dummy
              bell-ropes, and ventilators which do not ventilate. With your
              permission, Miss Stoner, we shall now carry our researches into
              the inner apartment.”
            </TextNode>

            <TextNode>
              Dr. Grimesby Roylott's chamber was larger than that of his
              step-daughter, but was as plainly furnished. A camp-bed, a small
              wooden shelf full of books, mostly of a technical character, an
              armchair beside the bed, a plain wooden chair against the wall, a
              round table, and a large iron safe were the principal things which
              met the eye. Holmes walked slowly round and examined each and all
              of them with the keenest interest.
            </TextNode>

            <TextNode>“What's in here?” he asked, tapping the safe.</TextNode>

            <TextNode>“My stepfather's business papers.”</TextNode>

            <TextNode>“Oh! you have seen inside, then?”</TextNode>

            <TextNode>
              “Only once, some years ago. I remember that it was full of
              papers.”
            </TextNode>

            <TextNode>“There isn't a cat in it, for example?”</TextNode>

            <TextNode>“No. What a strange idea!”</TextNode>

            <TextNode>
              “Well, look at this!” He took up a small saucer of milk which
              stood on the top of it.
            </TextNode>

            <TextNode>
              “No; we don't keep a cat. But there is a cheetah and a baboon.”
            </TextNode>

            <TextNode>
              “Ah, yes, of course! Well, a cheetah is just a big cat, and yet a
              saucer of milk does not go very far in satisfying its wants, I
              daresay. There is one point which I should wish to determine.” He
              squatted down in front of the wooden chair and examined the seat
              of it with the greatest attention.
            </TextNode>

            <TextNode>
              “Thank you. That is quite settled,” said he, rising and putting
              his lens in his pocket. “Hullo! Here is something interesting!”
            </TextNode>

            <TextNode>
              The object which had caught his eye was a small dog lash hung on
              one corner of the bed. The lash, however, was curled upon itself
              and tied so as to make a loop of whipcord.
            </TextNode>

            <TextNode>“What do you make of that, Watson?”</TextNode>

            <TextNode>
              “It's a common enough lash. But I don't know why it should be
              tied.”
            </TextNode>

            <TextNode>
              “That is not quite so common, is it? Ah, me! it's a wicked world,
              and when a clever man turns his brains to crime it is the worst of
              all. I think that I have seen enough now, Miss Stoner, and with
              your permission we shall walk out upon the lawn.”
            </TextNode>

            <TextNode>
              I had never seen my friend's face so grim or his brow so dark as
              it was when we turned from the scene of this investigation. We had
              walked several times up and down the lawn, neither Miss Stoner nor
              myself liking to break in upon his thoughts before he roused
              himself from his reverie.
            </TextNode>

            <TextNode>
              “It is very essential, Miss Stoner,” said he, “that you should
              absolutely follow my advice in every respect.”
            </TextNode>

            <TextNode>“I shall most certainly do so.”</TextNode>

            <TextNode>
              “The matter is too serious for any hesitation. Your life may
              depend upon your compliance.”
            </TextNode>

            <TextNode>“I assure you that I am in your hands.”</TextNode>

            <TextNode>
              “In the first place, both my friend and I must spend the night in
              your room.”
            </TextNode>

            <TextNode>
              Both Miss Stoner and I gazed at him in astonishment.
            </TextNode>

            <TextNode>
              “Yes, it must be so. Let me explain. I believe that that is the
              village inn over there?”
            </TextNode>

            <TextNode>“Yes, that is the Crown.”</TextNode>

            <TextNode>
              “Very good. Your windows would be visible from there?”
            </TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>
              “You must confine yourself to your room, on pretence of a
              headache, when your stepfather comes back. Then when you hear him
              retire for the night, you must open the shutters of your window,
              undo the hasp, put your lamp there as a signal to us, and then
              withdraw quietly with everything which you are likely to want into
              the room which you used to occupy. I have no doubt that, in spite
              of the repairs, you could manage there for one night.”
            </TextNode>

            <TextNode>“Oh, yes, easily.”</TextNode>

            <TextNode>“The rest you will leave in our hands.”</TextNode>

            <TextNode>“But what will you do?”</TextNode>

            <TextNode>
              “We shall spend the night in your room, and we shall investigate
              the cause of this noise which has disturbed you.”
            </TextNode>

            <TextNode>
              “I believe, Mr. Holmes, that you have already made up your mind,”
              said Miss Stoner, laying her hand upon my companion's sleeve.
            </TextNode>

            <TextNode>“Perhaps I have.”</TextNode>

            <TextNode>
              “Then, for pity's sake, tell me what was the cause of my sister's
              death.”
            </TextNode>

            <TextNode>
              “I should prefer to have clearer proofs before I speak.”
            </TextNode>

            <TextNode>
              “You can at least tell me whether my own thought is correct, and
              if she died from some sudden fright.”
            </TextNode>

            <TextNode>
              “No, I do not think so. I think that there was probably some more
              tangible cause. And now, Miss Stoner, we must leave you for if Dr.
              Roylott returned and saw us our journey would be in vain.
              Good-bye, and be brave, for if you will do what I have told you,
              you may rest assured that we shall soon drive away the dangers
              that threaten you.”
            </TextNode>

            <TextNode>
              Sherlock Holmes and I had no difficulty in engaging a bedroom and
              sitting-room at the Crown Inn. They were on the upper floor, and
              from our window we could command a view of the avenue gate, and of
              the inhabited wing of Stoke Moran Manor House. At dusk we saw Dr.
              Grimesby Roylott drive past, his huge form looming up beside the
              little figure of the lad who drove him. The boy had some slight
              difficulty in undoing the heavy iron gates, and we heard the
              hoarse roar of the doctor's voice and saw the fury with which he
              shook his clinched fists at him. The trap drove on, and a few
              minutes later we saw a sudden light spring up among the trees as
              the lamp was lit in one of the sitting-rooms.
            </TextNode>

            <TextNode>
              “Do you know, Watson,” said Holmes as we sat together in the
              gathering darkness, “I have really some scruples as to taking you
              to-night. There is a distinct element of danger.”
            </TextNode>

            <TextNode>“Can I be of assistance?”</TextNode>

            <TextNode>“Your presence might be invaluable.”</TextNode>

            <TextNode>“Then I shall certainly come.”</TextNode>

            <TextNode>“It is very kind of you.”</TextNode>

            <TextNode>
              “You speak of danger. You have evidently seen more in these rooms
              than was visible to me.”
            </TextNode>

            <TextNode>
              “No, but I fancy that I may have deduced a little more. I imagine
              that you saw all that I did.”
            </TextNode>

            <TextNode>
              “I saw nothing remarkable save the bell-rope, and what purpose
              that could answer I confess is more than I can imagine.”
            </TextNode>

            <TextNode>“You saw the ventilator, too?”</TextNode>

            <TextNode>
              “Yes, but I do not think that it is such a very unusual thing to
              have a small opening between two rooms. It was so small that a rat
              could hardly pass through.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page101;
