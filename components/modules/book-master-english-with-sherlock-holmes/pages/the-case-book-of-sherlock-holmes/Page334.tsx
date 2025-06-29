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

function Page334({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;LION'S&nbsp;MANE"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I had just reached the top of the path when it came to me. Like a
              flash, I remembered the thing for which I had so eagerly and
              vainly grasped. You will know, or Watson has written in vain, that
              I hold a vast store of out-of-the-way knowledge without scientific
              system, but very available for the needs of my work. My mind is
              like a crowded box-room with packets of all sorts stowed away
              therein—so many that I may well have but a vague perception of
              what was there. I had known that there was something which might
              bear upon this matter. It was still vague, but at least I knew how
              I could make it clear. It was monstrous, incredible, and yet it
              was always a possibility. I would test it to the full.
            </TextNode>

            <TextNode>
              There is a great garret in my little house which is stuffed with
              books. It was into this that I plunged and rummaged for an hour.
              At the end of that time I emerged with a little chocolate and
              silver volume. Eagerly I turned up the chapter of which I had a
              dim remembrance. Yes, it was indeed a far-fetched and unlikely
              proposition, and yet I could not be at rest until I had made sure
              if it might, indeed, be so. It was late when I retired, with my
              mind eagerly awaiting the work of the morrow.
            </TextNode>

            <TextNode>
              But that work met with an annoying interruption. I had hardly
              swallowed my early cup of tea and was starting for the beach when
              I had a call from Inspector Bardle of the Sussex Constabulary—a
              steady, solid, bovine man with thoughtful eyes, which looked at me
              now with a very troubled expression.
            </TextNode>

            <TextNode>
              “I know your immense experience, sir,” said he. “This is quite
              unofficial, of course, and need go no farther. But I am fairly up
              against it in this McPherson case. The question is, shall I make
              an arrest, or shall I not?”
            </TextNode>

            <TextNode>“Meaning Mr. Ian Murdoch?”</TextNode>

            <TextNode>
              “Yes, sir. There is really no one else when you come to think of
              it. That's the advantage of this solitude. We narrow it down to a
              very small compass. If he did not do it, then who did?”
            </TextNode>

            <TextNode>“What have you against him?”</TextNode>

            <TextNode>
              He had gleaned along the same furrows as I had. There was
              Murdoch's character and the mystery which seemed to hang round the
              man. His furious bursts of temper, as shown in the incident of the
              dog. The fact that he had quarrelled with McPherson in the past,
              and that there was some reason to think that he might have
              resented his attentions to Miss Bellamy. He had all my points, but
              no fresh ones, save that Murdoch seemed to be making every
              preparation for departure.
            </TextNode>

            <TextNode>
              “What would my position be if I let him slip away with all this
              evidence against him?” The burly, phlegmatic man was sorely
              troubled in his mind.
            </TextNode>

            <TextNode>
              “Consider,” I said, “all the essential gaps in your case. On the
              morning of the crime he can surely prove an alibi. He had been
              with his scholars till the last moment, and within a few minutes
              of McPherson's appearance he came upon us from behind. Then bear
              in mind the absolute impossibility that he could single-handed
              have inflicted this outrage upon a man quite as strong as himself.
              Finally, there is this question of the instrument with which these
              injuries were inflicted.”
            </TextNode>

            <TextNode>
              “What could it be but a scourge or flexible whip of some sort?”
            </TextNode>

            <TextNode>“Have you examined the marks?” I asked.</TextNode>

            <TextNode>“I have seen them. So has the doctor.”</TextNode>

            <TextNode>
              “But I have examined them very carefully with a lens. They have
              peculiarities.”
            </TextNode>

            <TextNode>“What are they, Mr. Holmes?”</TextNode>

            <TextNode>
              I stepped to my bureau and brought out an enlarged photograph.
              “This is my method in such cases,” I explained.
            </TextNode>

            <TextNode>
              “You certainly do things thoroughly, Mr. Holmes.”
            </TextNode>

            <TextNode>
              “I should hardly be what I am if I did not. Now let us consider
              this weal which extends round the right shoulder. Do you observe
              nothing remarkable?”
            </TextNode>

            <TextNode>“I can't say I do.”</TextNode>

            <TextNode>
              “Surely it is evident that it is unequal in its intensity. There
              is a dot of extravasated blood here, and another there. There are
              similar indications in this other weal down here. What can that
              mean?”
            </TextNode>

            <TextNode>“I have no idea. Have you?”</TextNode>

            <TextNode>
              “Perhaps I have. Perhaps I haven't. I may be able to say more
              soon. Anything which will define what made that mark will bring us
              a long way towards the criminal.”
            </TextNode>

            <TextNode>
              “It is, of course, an absurd idea,” said the policeman, “but if a
              red-hot net of wire had been laid across the back, then these
              better marked points would represent where the meshes crossed each
              other.”
            </TextNode>

            <TextNode>
              “A most ingenious comparison. Or shall we say a very stiff
              cat-o'-nine-tails with small hard knots upon it?”
            </TextNode>

            <TextNode>“By Jove, Mr. Holmes, I think you have hit it.”</TextNode>

            <TextNode>
              “Or there may be some very different cause, Mr. Bardle. But your
              case is far too weak for an arrest. Besides, we have those last
              words—the ‘Lion's Mane.’”
            </TextNode>

            <TextNode>“I have wondered whether Ian—”</TextNode>

            <TextNode>
              “Yes, I have considered that. If the second word had borne any
              resemblance to Murdoch—but it did not. He gave it almost in a
              shriek. I am sure that it was ‘Mane.’”
            </TextNode>

            <TextNode>“Have you no alternative, Mr. Holmes?”</TextNode>

            <TextNode>
              “Perhaps I have. But I do not care to discuss it until there is
              something more solid to discuss.”
            </TextNode>

            <TextNode>“And when will that be?”</TextNode>

            <TextNode>“In an hour—possibly less.”</TextNode>

            <TextNode>
              The inspector rubbed his chin and looked at me with dubious eyes.
            </TextNode>

            <TextNode>
              “I wish I could see what was in your mind, Mr. Holmes. Perhaps
              it's those fishing-boats.”
            </TextNode>

            <TextNode>“No, no, they were too far out.”</TextNode>

            <TextNode>
              “Well, then, is it Bellamy and that big son of his? They were not
              too sweet upon Mr. McPherson. Could they have done him a
              mischief?”
            </TextNode>

            <TextNode>
              “No, no, you won't draw me until I am ready,” said I with a smile.
              “Now, Inspector, we each have our own work to do. Perhaps if you
              were to meet me here at midday—”
            </TextNode>

            <TextNode>
              So far we had got when there came the tremendous interruption
              which was the beginning of the end.
            </TextNode>

            <TextNode>
              My outer door was flung open, there were blundering footsteps in
              the passage, and Ian Murdoch staggered into the room, pallid,
              dishevelled, his clothes in wild disorder, clawing with his bony
              hands at the furniture to hold himself erect. “Brandy! Brandy!” he
              gasped, and fell groaning upon the sofa.
            </TextNode>

            <TextNode>
              He was not alone. Behind him came Stackhurst, hatless and panting,
              almost as distrait as his companion.
            </TextNode>

            <TextNode>
              “Yes, yes, brandy!” he cried. “The man is at his last gasp. It was
              all I could do to bring him here. He fainted twice upon the way.”
            </TextNode>

            <TextNode>
              Half a tumbler of the raw spirit brought about a wondrous change.
              He pushed himself up on one arm and swung his coat from his
              shoulders. “For God's sake, oil, opium, morphia!” he cried.
              “Anything to ease this infernal agony!”
            </TextNode>

            <TextNode>
              The inspector and I cried out at the sight. There, crisscrossed
              upon the man's naked shoulder, was the same strange reticulated
              pattern of red, inflamed lines which had been the death-mark of
              Fitzroy McPherson.
            </TextNode>

            <TextNode>
              The pain was evidently terrible and was more than local, for the
              sufferer's breathing would stop for a time, his face would turn
              black, and then with loud gasps he would clap his hand to his
              heart, while his brow dropped beads of sweat. At any moment he
              might die. More and more brandy was poured down his throat, each
              fresh dose bringing him back to life. Pads of cotton-wool soaked
              in salad-oil seemed to take the agony from the strange wounds. At
              last his head fell heavily upon the cushion. Exhausted Nature had
              taken refuge in its last storehouse of vitality. It was half a
              sleep and half a faint, but at least it was ease from pain.
            </TextNode>

            <TextNode>
              To question him had been impossible, but the moment we were
              assured of his condition Stackhurst turned upon me.
            </TextNode>

            <TextNode>
              “My God!” he cried, “what is it, Holmes? What is it?”
            </TextNode>

            <TextNode>“Where did you find him?”</TextNode>

            <TextNode>
              “Down on the beach. Exactly where poor McPherson met his end. If
              this man's heart had been weak as McPherson's was, he would not be
              here now. More than once I thought he was gone as I brought him
              up. It was too far to The Gables, so I made for you.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“Did you see him on the beach?”</TextNode>
            <TextNode>
              “I was walking on the cliff when I heard his cry. He was at the
              edge of the water, reeling about like a drunken man. I ran down,
              threw some clothes about him, and brought him up. For heaven's
              sake, Holmes, use all the powers you have and spare no pains to
              lift the curse from this place, for life is becoming unendurable.
              Can you, with all your world-wide reputation, do nothing for us?”
            </TextNode>

            <TextNode>
              “I think I can, Stackhurst. Come with me now! And you, Inspector,
              come along! We will see if we cannot deliver this murderer into
              your hands.”
            </TextNode>

            <TextNode>
              Leaving the unconscious man in the charge of my housekeeper, we
              all three went down to the deadly lagoon. On the shingle there was
              piled a little heap of towels and clothes left by the stricken
              man. Slowly I walked round the edge of the water, my comrades in
              Indian file behind me. Most of the pool was quite shallow, but
              under the cliff where the beach was hollowed out it was four or
              five feet deep. It was to this part that a swimmer would naturally
              go, for it formed a beautiful pellucid green pool as clear as
              crystal. A line of rocks lay above it at the base of the cliff,
              and along this I led the way, peering eagerly into the depths
              beneath me. I had reached the deepest and stillest pool when my
              eyes caught that for which they were searching, and I burst into a
              shout of triumph.
            </TextNode>
            <TextNode>
              “Cyanea!” I cried. “Cyanea! Behold the Lion's Mane!”
            </TextNode>

            <TextNode>
              The strange object at which I pointed did indeed look like a
              tangled mass torn from the mane of a lion. It lay upon a rocky
              shelf some three feet under the water, a curious waving,
              vibrating, hairy creature with streaks of silver among its yellow
              tresses. It pulsated with a slow, heavy dilation and contraction.
            </TextNode>

            <TextNode>
              “It has done mischief enough. Its day is over!” I cried. “Help me,
              Stackhurst! Let us end the murderer forever.”
            </TextNode>

            <TextNode>
              There was a big boulder just above the ledge, and we pushed it
              until it fell with a tremendous splash into the water. When the
              ripples had cleared we saw that it had settled upon the ledge
              below. One flapping edge of yellow membrane showed that our victim
              was beneath it. A thick oily scum oozed out from below the stone
              and stained the water round, rising slowly to the surface.
            </TextNode>

            <TextNode>
              “Well, this gets me!” cried the inspector. “What was it, Mr.
              Holmes? I'm born and bred in these parts, but I never saw such a
              thing. It don't belong to Sussex.”
            </TextNode>

            <TextNode>
              “Just as well for Sussex,” I remarked. “It may have been the
              southwest gale that brought it up. Come back to my house, both of
              you, and I will give you the terrible experience of one who has
              good reason to remember his own meeting with the same peril of the
              seas.”
            </TextNode>

            <TextNode>
              When we reached my study we found that Murdoch was so far
              recovered that he could sit up. He was dazed in mind, and every
              now and then was shaken by a paroxysm of pain. In broken words he
              explained that he had no notion what had occurred to him, save
              that terrific pangs had suddenly shot through him, and that it had
              taken all his fortitude to reach the bank.
            </TextNode>

            <TextNode>
              “Here is a book,” I said, taking up the little volume, “which
              first brought light into what might have been forever dark. It is
              <span className='italic'>Out of Doors</span>, by the famous
              observer, J. G. Wood. Wood himself very nearly perished from
              contact with this vile creature, so he wrote with a very full
              knowledge. <span className='italic'>Cyanea capillata</span> is the
              miscreant's full name, and he can be as dangerous to life as, and
              far more painful than, the bite of the cobra. Let me briefly give
              this extract.
            </TextNode>

            <TextNode>
              “If the bather should see a loose roundish mass of tawny membranes
              and fibres, something like very large handfuls of lion's mane and
              silver paper, let him beware, for this is the fearful stinger,
              <span className='italic'>Cyanea capillata</span>.
            </TextNode>
            <TextNode>
              Could our sinister acquaintance be more clearly described?
            </TextNode>

            <TextNode>
              “He goes on to tell of his own encounter with one when swimming
              off the coast of Kent. He found that the creature radiated almost
              invisible filaments to the distance of fifty feet, and that anyone
              within that circumference from the deadly centre was in danger of
              death. Even at a distance the effect upon Wood was almost fatal.
            </TextNode>

            <TextNode>
              “The multitudinous threads caused light scarlet lines upon the
              skin which on closer examination resolved into minute dots or
              pustules, each dot charged as it were with a red-hot needle making
              its way through the nerves.
            </TextNode>
            <TextNode>
              “The local pain was, as he explains, the least part of the
              exquisite torment.
            </TextNode>

            <TextNode>
              “Pangs shot through the chest, causing me to fall as if struck by
              a bullet. The pulsation would cease, and then the heart would give
              six or seven leaps as if it would force its way through the chest.
            </TextNode>
            <TextNode>
              “It nearly killed him, although he had only been exposed to it in
              the disturbed ocean and not in the narrow calm waters of a
              bathing-pool. He says that he could hardly recognize himself
              afterwards, so white, wrinkled and shrivelled was his face. He
              gulped down brandy, a whole bottleful, and it seems to have saved
              his life. There is the book, Inspector. I leave it with you, and
              you cannot doubt that it contains a full explanation of the
              tragedy of poor McPherson.”
            </TextNode>

            <TextNode>
              “And incidentally exonerates me,” remarked Ian Murdoch with a wry
              smile. “I do not blame you, Inspector, nor you, Mr. Holmes, for
              your suspicions were natural. I feel that on the very eve of my
              arrest I have only cleared myself by sharing the fate of my poor
              friend.”
            </TextNode>

            <TextNode>
              “No, Mr. Murdoch. I was already upon the track, and had I been out
              as early as I intended I might well have saved you from this
              terrific experience.”
            </TextNode>

            <TextNode>“But how did you know, Mr. Holmes?”</TextNode>

            <TextNode>
              “I am an omnivorous reader with a strangely retentive memory for
              trifles. That phrase ‘the Lion's Mane’ haunted my mind. I knew
              that I had seen it somewhere in an unexpected context. You have
              seen that it does describe the creature. I have no doubt that it
              was floating on the water when McPherson saw it, and that this
              phrase was the only one by which he could convey to us a warning
              as to the creature which had been his death.”
            </TextNode>

            <TextNode>
              “Then I, at least, am cleared,” said Murdoch, rising slowly to his
              feet. “There are one or two words of explanation which I should
              give, for I know the direction in which your inquiries have run.
              It is true that I loved this lady, but from the day when she chose
              my friend McPherson my one desire was to help her to happiness. I
              was well content to stand aside and act as their go-between. Often
              I carried their messages, and it was because I was in their
              confidence and because she was so dear to me that I hastened to
              tell her of my friend's death, lest someone should forestall me in
              a more sudden and heartless manner. She would not tell you, sir,
              of our relations lest you should disapprove and I might suffer.
              But with your leave I must try to get back to The Gables, for my
              bed will be very welcome.”
            </TextNode>

            <TextNode>
              Stackhurst held out his hand. “Our nerves have all been at
              concert-pitch,” said he. “Forgive what is past, Murdoch. We shall
              understand each other better in the future.” They passed out
              together with their arms linked in friendly fashion. The inspector
              remained, staring at me in silence with his ox-like eyes.
            </TextNode>

            <TextNode>
              “Well, you've done it!” he cried at last. “I had read of you, but
              I never believed it. It's wonderful!”
            </TextNode>

            <TextNode>
              I was forced to shake my head. To accept such praise was to lower
              one's own standards.
            </TextNode>

            <TextNode>
              “I was slow at the outset—culpably slow. Had the body been found
              in the water I could hardly have missed it. It was the towel which
              misled me. The poor fellow had never thought to dry himself, and
              so I in turn was led to believe that he had never been in the
              water. Why, then, should the attack of any water creature suggest
              itself to me? That was where I went astray. Well, well, Inspector,
              I often ventured to chaff you gentlemen of the police force, but
              Cyanea capillata very nearly avenged Scotland Yard.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page334;
