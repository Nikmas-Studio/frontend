import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import H4 from '@/components/elements/book-master-english-with-sherlock-holmes/H4';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page58({
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
        <H4>
          Chapter XII.
          <br />
          The Strange Story of Jonathan Small
        </H4>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              A very patient man was that inspector in the cab, for it was a
              weary time before I rejoined him. His face clouded over when I
              showed him the empty box.
            </TextNode>

            <TextNode>
              “There goes the reward!” said he, gloomily. “Where there is no
              money there is no pay. This night's work would have been worth a
              tenner each to Sam Brown and me if the treasure had been there.”
            </TextNode>

            <TextNode>
              “Mr. Thaddeus Sholto is a rich man,” I said. “He will see that you
              are rewarded, treasure or no.”
            </TextNode>

            <TextNode>
              The inspector shook his head despondently, however. “It's a bad
              job,” he repeated; “and so Mr. Athelney Jones will think.”
            </TextNode>

            <TextNode>
              His forecast proved to be correct, for the detective looked blank
              enough when I got to Baker Street and showed him the empty box.
              They had only just arrived, Holmes, the prisoner, and he, for they
              had changed their plans so far as to report themselves at a
              station upon the way. My companion lounged in his arm-chair with
              his usual listless expression, while Small sat stolidly opposite
              to him with his wooden leg cocked over his sound one. As I
              exhibited the empty box he leaned back in his chair and laughed
              aloud.
            </TextNode>

            <TextNode>
              “This is your doing, Small,” said Athelney Jones, angrily.
            </TextNode>

            <TextNode>
              “Yes, I have put it away where you shall never lay hand upon it,”
              he cried, exultantly. “It is my treasure; and if I can't have the
              loot I'll take darned good care that no one else does. I tell you
              that no living man has any right to it, unless it is three men who
              are in the Andaman convict-barracks and myself. I know now that I
              cannot have the use of it, and I know that they cannot. I have
              acted all through for them as much as for myself. It's been the
              sign of four with us always. Well I know that they would have had
              me do just what I have done, and throw the treasure into the
              Thames rather than let it go to kith or kin of Sholto or of
              Morstan. It was not to make them rich that we did for Achmet.
              You'll find the treasure where the key is, and where little Tonga
              is. When I saw that your launch must catch us, I put the loot away
              in a safe place. There are no rupees for you this journey.”
            </TextNode>

            <TextNode>
              “You are deceiving us, Small,” said Athelney Jones, sternly. “If
              you had wished to throw the treasure into the Thames it would have
              been easier for you to have thrown box and all.”
            </TextNode>

            <TextNode>
              “Easier for me to throw, and easier for you to recover,” he
              answered, with a shrewd, sidelong look. “The man that was clever
              enough to hunt me down is clever enough to pick an iron box from
              the bottom of a river. Now that they are scattered over five miles
              or so, it may be a harder job. It went to my heart to do it,
              though. I was half mad when you came up with us. However, there's
              no good grieving over it. I've had ups in my life, and I've had
              downs, but I've learned not to cry over spilled milk.”
            </TextNode>

            <TextNode>
              “This is a very serious matter, Small,” said the detective. “If
              you had helped justice, instead of thwarting it in this way, you
              would have had a better chance at your trial.”
            </TextNode>

            <TextNode>
              “Justice!” snarled the ex-convict. “A pretty justice! Whose loot
              is this, if it is not ours? Where is the justice that I should
              give it up to those who have never earned it? Look how I have
              earned it! Twenty long years in that fever-ridden swamp, all day
              at work under the mangrove-tree, all night chained up in the
              filthy convict-huts, bitten by mosquitoes, racked with ague,
              bullied by every cursed black-faced policeman who loved to take it
              out of a white man. That was how I earned the Agra treasure; and
              you talk to me of justice because I cannot bear to feel that I
              have paid this price only that another may enjoy it! I would
              rather swing a score of times, or have one of Tonga's darts in my
              hide, than live in a convict's cell and feel that another man is
              at his ease in a palace with the money that should be mine.” Small
              had dropped his mask of stoicism, and all this came out in a wild
              whirl of words, while his eyes blazed, and the handcuffs clanked
              together with the impassioned movement of his hands. I could
              understand, as I saw the fury and the passion of the man, that it
              was no groundless or unnatural terror which had possessed Major
              Sholto when he first learned that the injured convict was upon his
              track.
            </TextNode>

            <TextNode>
              “You forget that we know nothing of all this,” said Holmes
              quietly. “We have not heard your story, and we cannot tell how far
              justice may originally have been on your side.”
            </TextNode>

            <TextNode>
              “Well, sir, you have been very fair-spoken to me, though I can see
              that I have you to thank that I have these bracelets upon my
              wrists. Still, I bear no grudge for that. It is all fair and
              above-board. If you want to hear my story I have no wish to hold
              it back. What I say to you is God's truth, every word of it. Thank
              you; you can put the glass beside me here, and I'll put my lips to
              it if I am dry.
            </TextNode>

            <TextNode>
              “I am a Worcestershire man myself,—born near Pershore. I dare say
              you would find a heap of Smalls living there now if you were to
              look. I have often thought of taking a look round there, but the
              truth is that I was never much of a credit to the family, and I
              doubt if they would be so very glad to see me. They were all
              steady, chapel-going folk, small farmers, well known and respected
              over the country-side, while I was always a bit of a rover. At
              last, however, when I was about eighteen, I gave them no more
              trouble, for I got into a mess over a girl, and could only get out
              of it again by taking the queen's shilling and joining the 3d
              Buffs, which was just starting for India.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I wasn't destined to do much soldiering, however. I had just got
              past the goose-step, and learned to handle my musket, when I was
              fool enough to go swimming in the Ganges. Luckily for me, my
              company sergeant, John Holder, was in the water at the same time,
              and he was one of the finest swimmers in the service. A crocodile
              took me, just as I was half-way across, and nipped off my right
              leg as clean as a surgeon could have done it, just above the knee.
              What with the shock and the loss of blood, I fainted, and should
              have drowned if Holder had not caught hold of me and paddled for
              the bank. I was five months in hospital over it, and when at last
              I was able to limp out of it with this timber toe strapped to my
              stump I found myself invalided out of the army and unfitted for
              any active occupation.
            </TextNode>

            <TextNode>
              “I was, as you can imagine, pretty down on my luck at this time,
              for I was a useless cripple though not yet in my twentieth year.
              However, my misfortune soon proved to be a blessing in disguise. A
              man named Abelwhite, who had come out there as an indigo-planter,
              wanted an overseer to look after his coolies and keep them up to
              their work. He happened to be a friend of our colonel's, who had
              taken an interest in me since the accident. To make a long story
              short, the colonel recommended me strongly for the post and, as
              the work was mostly to be done on horseback, my leg was no great
              obstacle, for I had enough knee left to keep good grip on the
              saddle. What I had to do was to ride over the plantation, to keep
              an eye on the men as they worked, and to report the idlers. The
              pay was fair, I had comfortable quarters, and altogether I was
              content to spend the remainder of my life in indigo-planting. Mr.
              Abelwhite was a kind man, and he would often drop into my little
              shanty and smoke a pipe with me, for white folk out there feel
              their hearts warm to each other as they never do here at home.
            </TextNode>

            <TextNode>
              “Well, I was never in luck's way long. Suddenly, without a note of
              warning, the great mutiny broke upon us. One month India lay as
              still and peaceful, to all appearance, as Surrey or Kent; the next
              there were two hundred thousand black devils let loose, and the
              country was a perfect hell. Of course you know all about it,
              gentlemen,—a deal more than I do, very like, since reading is not
              in my line. I only know what I saw with my own eyes. Our
              plantation was at a place called Muttra, near the border of the
              Northwest Provinces. Night after night the whole sky was alight
              with the burning bungalows, and day after day we had small
              companies of Europeans passing through our estate with their wives
              and children, on their way to Agra, where were the nearest troops.
              Mr. Abelwhite was an obstinate man. He had it in his head that the
              affair had been exaggerated, and that it would blow over as
              suddenly as it had sprung up. There he sat on his veranda,
              drinking whiskey-pegs and smoking cheroots, while the country was
              in a blaze about him. Of course we stuck by him, I and Dawson,
              who, with his wife, used to do the book-work and the managing.
              Well, one fine day the crash came. I had been away on a distant
              plantation, and was riding slowly home in the evening, when my eye
              fell upon something all huddled together at the bottom of a steep
              nullah. I rode down to see what it was, and the cold struck
              through my heart when I found it was Dawson's wife, all cut into
              ribbons, and half eaten by jackals and native dogs. A little
              further up the road Dawson himself was lying on his face, quite
              dead, with an empty revolver in his hand and four Sepoys lying
              across each other in front of him. I reined up my horse, wondering
              which way I should turn, but at that moment I saw thick smoke
              curling up from Abelwhite's bungalow and the flames beginning to
              burst through the roof. I knew then that I could do my employer no
              good, but would only throw my own life away if I meddled in the
              matter. From where I stood I could see hundreds of the black
              fiends, with their red coats still on their backs, dancing and
              howling round the burning house. Some of them pointed at me, and a
              couple of bullets sang past my head; so I broke away across the
              paddy-fields, and found myself late at night safe within the walls
              at Agra.
            </TextNode>

            <TextNode>
              “As it proved, however, there was no great safety there, either.
              The whole country was up like a swarm of bees. Wherever the
              English could collect in little bands they held just the ground
              that their guns commanded. Everywhere else they were helpless
              fugitives. It was a fight of the millions against the hundreds;
              and the cruellest part of it was that these men that we fought
              against, foot, horse, and gunners, were our own picked troops,
              whom we had taught and trained, handling our own weapons, and
              blowing our own bugle-calls. At Agra there were the 3d Bengal
              Fusiliers, some Sikhs, two troops of horse, and a battery of
              artillery. A volunteer corps of clerks and merchants had been
              formed, and this I joined, wooden leg and all. We went out to meet
              the rebels at Shahgunge early in July, and we beat them back for a
              time, but our powder gave out, and we had to fall back upon the
              city. Nothing but the worst news came to us from every side,—which
              is not to be wondered at, for if you look at the map you will see
              that we were right in the heart of it. Lucknow is rather better
              than a hundred miles to the east, and Cawnpore about as far to the
              south. From every point on the compass there was nothing but
              torture and murder and outrage.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page58;
