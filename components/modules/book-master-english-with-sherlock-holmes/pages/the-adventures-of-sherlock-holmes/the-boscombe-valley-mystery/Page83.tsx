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

function Page83({
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
        title='THE BOSCOMBE VALLEY MYSTERY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Ah, thereby hangs a rather painful tale. This fellow is madly,
              insanely, in love with her, but some two years ago, when he was
              only a lad, and before he really knew her, for she had been away
              five years at a boarding-school, what does the idiot do but get
              into the clutches of a barmaid in Bristol and marry her at a
              registry office? No one knows a word of the matter, but you can
              imagine how maddening it must be to him to be upbraided for not
              doing what he would give his very eyes to do, but what he knows to
              be absolutely impossible. It was sheer frenzy of this sort which
              made him throw his hands up into the air when his father, at their
              last interview, was goading him on to propose to Miss Turner. On
              the other hand, he had no means of supporting himself, and his
              father, who was by all accounts a very hard man, would have thrown
              him over utterly had he known the truth. It was with his barmaid
              wife that he had spent the last three days in Bristol, and his
              father did not know where he was. Mark that point. It is of
              importance. Good has come out of evil, however, for the barmaid,
              finding from the papers that he is in serious trouble and likely
              to be hanged, has thrown him over utterly and has written to him
              to say that she has a husband already in the Bermuda Dockyard, so
              that there is really no tie between them. I think that that bit of
              news has consoled young McCarthy for all that he has suffered.”
            </TextNode>

            <TextNode>“But if he is innocent, who has done it?”</TextNode>

            <TextNode>
              “Ah! who? I would call your attention very particularly to two
              points. One is that the murdered man had an appointment with
              someone at the pool, and that the someone could not have been his
              son, for his son was away, and he did not know when he would
              return. The second is that the murdered man was heard to cry
              ‘Cooee!’ before he knew that his son had returned. Those are the
              crucial points upon which the case depends. And now let us talk
              about George Meredith, if you please, and we shall leave all minor
              matters until to-morrow.”
            </TextNode>

            <TextNode>
              There was no rain, as Holmes had foretold, and the morning broke
              bright and cloudless. At nine o'clock Lestrade called for us with
              the carriage, and we set off for Hatherley Farm and the Boscombe
              Pool.
            </TextNode>

            <TextNode>
              “There is serious news this morning,” Lestrade observed. “It is
              said that Mr. Turner, of the Hall, is so ill that his life is
              despaired of.”
            </TextNode>

            <TextNode>“An elderly man, I presume?” said Holmes.</TextNode>

            <TextNode>
              “About sixty; but his constitution has been shattered by his life
              abroad, and he has been in failing health for some time. This
              business has had a very bad effect upon him. He was an old friend
              of McCarthy's, and, I may add, a great benefactor to him, for I
              have learned that he gave him Hatherley Farm rent free.”
            </TextNode>

            <TextNode>“Indeed! That is interesting,” said Holmes.</TextNode>

            <TextNode>
              “Oh, yes! In a hundred other ways he has helped him. Everybody
              about here speaks of his kindness to him.”
            </TextNode>

            <TextNode>
              “Really! Does it not strike you as a little singular that this
              McCarthy, who appears to have had little of his own, and to have
              been under such obligations to Turner, should still talk of
              marrying his son to Turner's daughter, who is, presumably, heiress
              to the estate, and that in such a very cocksure manner, as if it
              were merely a case of a proposal and all else would follow? It is
              the more strange, since we know that Turner himself was averse to
              the idea. The daughter told us as much. Do you not deduce
              something from that?”
            </TextNode>

            <TextNode>
              “We have got to the deductions and the inferences,” said Lestrade,
              winking at me. “I find it hard enough to tackle facts, Holmes,
              without flying away after theories and fancies.”
            </TextNode>

            <TextNode>
              “You are right,” said Holmes demurely; “you do find it very hard
              to tackle the facts.”
            </TextNode>

            <TextNode>
              “Anyhow, I have grasped one fact which you seem to find it
              difficult to get hold of,” replied Lestrade with some warmth.
            </TextNode>

            <TextNode>“And that is—”</TextNode>

            <TextNode>
              “That McCarthy senior met his death from McCarthy junior and that
              all theories to the contrary are the merest moonshine.”
            </TextNode>

            <TextNode>
              “Well, moonshine is a brighter thing than fog,” said Holmes,
              laughing. “But I am very much mistaken if this is not Hatherley
              Farm upon the left.”
            </TextNode>

            <TextNode>
              “Yes, that is it.” It was a widespread, comfortable-looking
              building, two-storied, slate-roofed, with great yellow blotches of
              lichen upon the grey walls. The drawn blinds and the smokeless
              chimneys, however, gave it a stricken look, as though the weight
              of this horror still lay heavy upon it. We called at the door,
              when the maid, at Holmes' request, showed us the boots which her
              master wore at the time of his death, and also a pair of the
              son's, though not the pair which he had then had. Having measured
              these very carefully from seven or eight different points, Holmes
              desired to be led to the court-yard, from which we all followed
              the winding track which led to Boscombe Pool.
            </TextNode>

            <TextNode>
              Sherlock Holmes was transformed when he was hot upon such a scent
              as this. Men who had only known the quiet thinker and logician of
              Baker Street would have failed to recognise him. His face flushed
              and darkened. His brows were drawn into two hard black lines,
              while his eyes shone out from beneath them with a steely glitter.
              His face was bent downward, his shoulders bowed, his lips
              compressed, and the veins stood out like whipcord in his long,
              sinewy neck. His nostrils seemed to dilate with a purely animal
              lust for the chase, and his mind was so absolutely concentrated
              upon the matter before him that a question or remark fell unheeded
              upon his ears, or, at the most, only provoked a quick, impatient
              snarl in reply. Swiftly and silently he made his way along the
              track which ran through the meadows, and so by way of the woods to
              the Boscombe Pool. It was damp, marshy ground, as is all that
              district, and there were marks of many feet, both upon the path
              and amid the short grass which bounded it on either side.
              Sometimes Holmes would hurry on, sometimes stop dead, and once he
              made quite a little detour into the meadow. Lestrade and I walked
              behind him, the detective indifferent and contemptuous, while I
              watched my friend with the interest which sprang from the
              conviction that every one of his actions was directed towards a
              definite end.
            </TextNode>

            <TextNode>
              The Boscombe Pool, which is a little reed-girt sheet of water some
              fifty yards across, is situated at the boundary between the
              Hatherley Farm and the private park of the wealthy Mr. Turner.
              Above the woods which lined it upon the farther side we could see
              the red, jutting pinnacles which marked the site of the rich
              landowner's dwelling. On the Hatherley side of the pool the woods
              grew very thick, and there was a narrow belt of sodden grass
              twenty paces across between the edge of the trees and the reeds
              which lined the lake. Lestrade showed us the exact spot at which
              the body had been found, and, indeed, so moist was the ground,
              that I could plainly see the traces which had been left by the
              fall of the stricken man. To Holmes, as I could see by his eager
              face and peering eyes, very many other things were to be read upon
              the trampled grass. He ran round, like a dog who is picking up a
              scent, and then turned upon my companion.
            </TextNode>

            <TextNode>“What did you go into the pool for?” he asked.</TextNode>

            <TextNode>
              “I fished about with a rake. I thought there might be some weapon
              or other trace. But how on earth—”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Oh, tut, tut! I have no time! That left foot of yours with its
              inward twist is all over the place. A mole could trace it, and
              there it vanishes among the reeds. Oh, how simple it would all
              have been had I been here before they came like a herd of buffalo
              and wallowed all over it. Here is where the party with the
              lodge-keeper came, and they have covered all tracks for six or
              eight feet round the body. But here are three separate tracks of
              the same feet.” He drew out a lens and lay down upon his
              waterproof to have a better view, talking all the time rather to
              himself than to us. “These are young McCarthy's feet. Twice he was
              walking, and once he ran swiftly, so that the soles are deeply
              marked and the heels hardly visible. That bears out his story. He
              ran when he saw his father on the ground. Then here are the
              father's feet as he paced up and down. What is this, then? It is
              the butt-end of the gun as the son stood listening. And this? Ha,
              ha! What have we here? Tiptoes! tiptoes! Square, too, quite
              unusual boots! They come, they go, they come again—of course that
              was for the cloak. Now where did they come from?” He ran up and
              down, sometimes losing, sometimes finding the track until we were
              well within the edge of the wood and under the shadow of a great
              beech, the largest tree in the neighbourhood. Holmes traced his
              way to the farther side of this and lay down once more upon his
              face with a little cry of satisfaction. For a long time he
              remained there, turning over the leaves and dried sticks,
              gathering up what seemed to me to be dust into an envelope and
              examining with his lens not only the ground but even the bark of
              the tree as far as he could reach. A jagged stone was lying among
              the moss, and this also he carefully examined and retained. Then
              he followed a pathway through the wood until he came to the
              highroad, where all traces were lost.
            </TextNode>
            <TextNode>
              “It has been a case of considerable interest,” he remarked,
              returning to his natural manner. “I fancy that this grey house on
              the right must be the lodge. I think that I will go in and have a
              word with Moran, and perhaps write a little note. Having done
              that, we may drive back to our luncheon. You may walk to the cab,
              and I shall be with you presently.”
            </TextNode>

            <TextNode>
              It was about ten minutes before we regained our cab and drove back
              into Ross, Holmes still carrying with him the stone which he had
              picked up in the wood.
            </TextNode>

            <TextNode>
              “This may interest you, Lestrade,” he remarked, holding it out.
              “The murder was done with it.”
            </TextNode>

            <TextNode>“I see no marks.”</TextNode>

            <TextNode>“There are none.”</TextNode>

            <TextNode>“How do you know, then?”</TextNode>

            <TextNode>
              “The grass was growing under it. It had only lain there a few
              days. There was no sign of a place whence it had been taken. It
              corresponds with the injuries. There is no sign of any other
              weapon.”
            </TextNode>

            <TextNode>“And the murderer?”</TextNode>

            <TextNode>
              “Is a tall man, left-handed, limps with the right leg, wears
              thick-soled shooting-boots and a grey cloak, smokes Indian cigars,
              uses a cigar-holder, and carries a blunt pen-knife in his pocket.
              There are several other indications, but these may be enough to
              aid us in our search.”
            </TextNode>

            <TextNode>
              Lestrade laughed. “I am afraid that I am still a sceptic,” he
              said. “Theories are all very well, but we have to deal with a
              hard-headed British jury.”
            </TextNode>

            <TextNode>
              “<span className='italic'>Nous verrons</span>,” answered Holmes
              calmly. “You work your own method, and I shall work mine. I shall
              be busy this afternoon, and shall probably return to London by the
              evening train.”
            </TextNode>

            <TextNode>“And leave your case unfinished?”</TextNode>

            <TextNode>“No, finished.”</TextNode>

            <TextNode>“But the mystery?”</TextNode>

            <TextNode>“It is solved.”</TextNode>

            <TextNode>“Who was the criminal, then?”</TextNode>

            <TextNode>“The gentleman I describe.”</TextNode>

            <TextNode>“But who is he?”</TextNode>

            <TextNode>
              “Surely it would not be difficult to find out. This is not such a
              populous neighbourhood.”
            </TextNode>

            <TextNode>
              Lestrade shrugged his shoulders. “I am a practical man,” he said,
              “and I really cannot undertake to go about the country looking for
              a left-handed gentleman with a game leg. I should become the
              laughing-stock of Scotland Yard.”
            </TextNode>

            <TextNode>
              “All right,” said Holmes quietly. “I have given you the chance.
              Here are your lodgings. Good-bye. I shall drop you a line before I
              leave.”
            </TextNode>

            <TextNode>
              Having left Lestrade at his rooms, we drove to our hotel, where we
              found lunch upon the table. Holmes was silent and buried in
              thought with a pained expression upon his face, as one who finds
              himself in a perplexing position.
            </TextNode>

            <TextNode>
              “Look here, Watson,” he said when the cloth was cleared “just sit
              down in this chair and let me preach to you for a little. I don't
              know quite what to do, and I should value your advice. Light a
              cigar and let me expound.”
            </TextNode>

            <TextNode>“Pray do so.”</TextNode>

            <TextNode>
              “Well, now, in considering this case there are two points about
              young McCarthy's narrative which struck us both instantly,
              although they impressed me in his favour and you against him. One
              was the fact that his father should, according to his account, cry
              ‘Cooee!’ before seeing him. The other was his singular dying
              reference to a rat. He mumbled several words, you understand, but
              that was all that caught the son's ear. Now from this double point
              our research must commence, and we will begin it by presuming that
              what the lad says is absolutely true.”
            </TextNode>

            <TextNode>“What of this ‘Cooee!’ then?”</TextNode>

            <TextNode>
              “Well, obviously it could not have been meant for the son. The
              son, as far as he knew, was in Bristol. It was mere chance that he
              was within earshot. The ‘Cooee!’ was meant to attract the
              attention of whoever it was that he had the appointment with. But
              ‘Cooee’ is a distinctly Australian cry, and one which is used
              between Australians. There is a strong presumption that the person
              whom McCarthy expected to meet him at Boscombe Pool was someone
              who had been in Australia.”
            </TextNode>

            <TextNode>“What of the rat, then?”</TextNode>

            <TextNode>
              Sherlock Holmes took a folded paper from his pocket and flattened
              it out on the table. “This is a map of the Colony of Victoria,” he
              said. “I wired to Bristol for it last night.” He put his hand over
              part of the map. “What do you read?”
            </TextNode>

            <TextNode>“ARAT,” I read.</TextNode>

            <TextNode>“And now?” He raised his hand.</TextNode>

            <TextNode>“BALLARAT.”</TextNode>

            <TextNode>
              “Quite so. That was the word the man uttered, and of which his son
              only caught the last two syllables. He was trying to utter the
              name of his murderer. So and so, of Ballarat.”
            </TextNode>

            <TextNode>“It is wonderful!” I exclaimed.</TextNode>

            <TextNode>
              “It is obvious. And now, you see, I had narrowed the field down
              considerably. The possession of a grey garment was a third point
              which, granting the son's statement to be correct, was a
              certainty. We have come now out of mere vagueness to the definite
              conception of an Australian from Ballarat with a grey cloak.”
            </TextNode>

            <TextNode>“Certainly.”</TextNode>

            <TextNode>
              “And one who was at home in the district, for the pool can only be
              approached by the farm or by the estate, where strangers could
              hardly wander.”
            </TextNode>

            <TextNode>“Quite so.”</TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page83;
