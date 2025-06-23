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

function Page62({
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
              “Tonga—for that was his name—was a fine boatman, and owned a big,
              roomy canoe of his own. When I found that he was devoted to me and
              would do anything to serve me, I saw my chance of escape. I talked
              it over with him. He was to bring his boat round on a certain
              night to an old wharf which was never guarded, and there he was to
              pick me up. I gave him directions to have several gourds of water
              and a lot of yams, cocoa-nuts, and sweet potatoes.
            </TextNode>

            <TextNode>
              “He was stanch and true, was little Tonga. No man ever had a more
              faithful mate. At the night named he had his boat at the wharf. As
              it chanced, however, there was one of the convict-guard down
              there,—a vile Pathan who had never missed a chance of insulting
              and injuring me. I had always vowed vengeance, and now I had my
              chance. It was as if fate had placed him in my way that I might
              pay my debt before I left the island. He stood on the bank with
              his back to me, and his carbine on his shoulder. I looked about
              for a stone to beat out his brains with, but none could I see.
            </TextNode>

            <TextNode>
              “Then a queer thought came into my head and showed me where I
              could lay my hand on a weapon. I sat down in the darkness and
              unstrapped my wooden leg. With three long hops I was on him. He
              put his carbine to his shoulder, but I struck him full, and
              knocked the whole front of his skull in. You can see the split in
              the wood now where I hit him. We both went down together, for I
              could not keep my balance, but when I got up I found him still
              lying quiet enough. I made for the boat, and in an hour we were
              well out at sea. Tonga had brought all his earthly possessions
              with him, his arms and his gods. Among other things, he had a long
              bamboo spear, and some Andaman cocoa-nut matting, with which I
              made a sort of sail. For ten days we were beating about, trusting
              to luck, and on the eleventh we were picked up by a trader which
              was going from Singapore to Jiddah with a cargo of Malay pilgrims.
              They were a rum crowd, and Tonga and I soon managed to settle down
              among them. They had one very good quality: they let you alone and
              asked no questions.
            </TextNode>

            <TextNode>
              “Well, if I were to tell you all the adventures that my little
              chum and I went through, you would not thank me, for I would have
              you here until the sun was shining. Here and there we drifted
              about the world, something always turning up to keep us from
              London. All the time, however, I never lost sight of my purpose. I
              would dream of Sholto at night. A hundred times I have killed him
              in my sleep. At last, however, some three or four years ago, we
              found ourselves in England. I had no great difficulty in finding
              where Sholto lived, and I set to work to discover whether he had
              realized the treasure, or if he still had it. I made friends with
              someone who could help me,—I name no names, for I don't want to
              get any one else in a hole,—and I soon found that he still had the
              jewels. Then I tried to get at him in many ways; but he was pretty
              sly, and had always two prize-fighters, besides his sons and his
              khitmutgar, on guard over him.
            </TextNode>

            <TextNode>
              “One day, however, I got word that he was dying. I hurried at once
              to the garden, mad that he should slip out of my clutches like
              that, and, looking through the window, I saw him lying in his bed,
              with his sons on each side of him. I'd have come through and taken
              my chance with the three of them, only even as I looked at him his
              jaw dropped, and I knew that he was gone. I got into his room that
              same night, though, and I searched his papers to see if there was
              any record of where he had hidden our jewels. There was not a
              line, however: so I came away, bitter and savage as a man could
              be. Before I left I bethought me that if I ever met my Sikh
              friends again it would be a satisfaction to know that I had left
              some mark of our hatred: so I scrawled down the sign of the four
              of us, as it had been on the chart, and I pinned it on his bosom.
              It was too much that he should be taken to the grave without some
              token from the men whom he had robbed and befooled.
            </TextNode>

            <TextNode>
              “We earned a living at this time by my exhibiting poor Tonga at
              fairs and other such places as the black cannibal. He would eat
              raw meat and dance his war-dance: so we always had a hatful of
              pennies after a day's work. I still heard all the news from
              Pondicherry Lodge, and for some years there was no news to hear,
              except that they were hunting for the treasure. At last, however,
              came what we had waited for so long. The treasure had been found.
              It was up at the top of the house, in Mr. Bartholomew Sholto's
              chemical laboratory. I came at once and had a look at the place,
              but I could not see how with my wooden leg I was to make my way up
              to it. I learned, however, about a trap-door in the roof, and also
              about Mr. Sholto's supper-hour. It seemed to me that I could
              manage the thing easily through Tonga. I brought him out with me
              with a long rope wound round his waist. He could climb like a cat,
              and he soon made his way through the roof, but, as ill luck would
              have it, Bartholomew Sholto was still in the room, to his cost.
              Tonga thought he had done something very clever in killing him,
              for when I came up by the rope I found him strutting about as
              proud as a peacock. Very much surprised was he when I made at him
              with the rope's end and cursed him for a little blood-thirsty imp.
              I took the treasure-box and let it down, and then slid down
              myself, having first left the sign of the four upon the table, to
              show that the jewels had come back at last to those who had most
              right to them. Tonga then pulled up the rope, closed the window,
              and made off the way that he had come.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I don't know that I have anything else to tell you. I had heard a
              waterman speak of the speed of Smith's launch, the&nbsp;
              <span className='italic'>Aurora</span>, so I thought she would be
              a handy craft for our escape. I engaged with old Smith, and was to
              give him a big sum if he got us safe to our ship. He knew, no
              doubt, that there was some screw loose, but he was not in our
              secrets. All this is the truth, and if I tell it to you,
              gentlemen, it is not to amuse you,—for you have not done me a very
              good turn,—but it is because I believe the best defence I can make
              is just to hold back nothing, but let all the world know how badly
              I have myself been served by Major Sholto, and how innocent I am
              of the death of his son.”
            </TextNode>

            <TextNode>
              “A very remarkable account,” said Sherlock Holmes. “A fitting
              wind-up to an extremely interesting case. There is nothing at all
              new to me in the latter part of your narrative, except that you
              brought your own rope. That I did not know. By the way, I had
              hoped that Tonga had lost all his darts; yet he managed to shoot
              one at us in the boat.”
            </TextNode>

            <TextNode>
              “He had lost them all, sir, except the one which was in his
              blow-pipe at the time.”
            </TextNode>

            <TextNode>
              “Ah, of course,” said Holmes. “I had not thought of that.”
            </TextNode>

            <TextNode>
              “Is there any other point which you would like to ask about?”
              asked the convict, affably.
            </TextNode>

            <TextNode>
              “I think not, thank you,” my companion answered.
            </TextNode>

            <TextNode>
              “Well, Holmes,” said Athelney Jones, “You are a man to be humored,
              and we all know that you are a connoisseur of crime, but duty is
              duty, and I have gone rather far in doing what you and your friend
              asked me. I shall feel more at ease when we have our story-teller
              here safe under lock and key. The cab still waits, and there are
              two inspectors down-stairs. I am much obliged to you both for your
              assistance. Of course you will be wanted at the trial. Good-night
              to you.”
            </TextNode>

            <TextNode>
              “Good-night, gentlemen both,” said Jonathan Small.
            </TextNode>

            <TextNode>
              “You first, Small,” remarked the wary Jones as they left the room.
              “I'll take particular care that you don't club me with your wooden
              leg, whatever you may have done to the gentleman at the Andaman
              Isles.”
            </TextNode>

            <TextNode>
              “Well, and there is the end of our little drama,” I remarked,
              after we had set some time smoking in silence. “I fear that it may
              be the last investigation in which I shall have the chance of
              studying your methods. Miss Morstan has done me the honor to
              accept me as a husband in prospective.”
            </TextNode>

            <TextNode>
              He gave a most dismal groan. “I feared as much,” said he. “I
              really cannot congratulate you.”
            </TextNode>

            <TextNode>
              I was a little hurt. “Have you any reason to be dissatisfied with
              my choice?” I asked.
            </TextNode>

            <TextNode>
              “Not at all. I think she is one of the most charming young ladies
              I ever met, and might have been most useful in such work as we
              have been doing. She had a decided genius that way: witness the
              way in which she preserved that Agra plan from all the other
              papers of her father. But love is an emotional thing, and whatever
              is emotional is opposed to that true cold reason which I place
              above all things. I should never marry myself, lest I bias my
              judgment.”
            </TextNode>

            <TextNode>
              “I trust,” said I, laughing, “that my judgment may survive the
              ordeal. But you look weary.”
            </TextNode>

            <TextNode>
              “Yes, the reaction is already upon me. I shall be as limp as a rag
              for a week.”
            </TextNode>

            <TextNode>
              “Strange,” said I, “how terms of what in another man I should call
              laziness alternate with your fits of splendid energy and vigor.”
            </TextNode>

            <TextNode>
              “Yes,” he answered, “there are in me the makings of a very fine
              loafer and also of a pretty spry sort of fellow. I often think of
              those lines of old Goethe,—
            </TextNode>

            <TextNode className='text-center  italic'>
              Schade, daß die&nbsp;Natur nur&nbsp;Mensch aus&nbsp;Dir schuf,
              <br /> Denn zum&nbsp;würdigen Mann war und&nbsp;zum&nbsp;Schelmen
              der&nbsp;Stoff.
            </TextNode>

            <TextNode noIndent>
              “By the way, a propos of this Norwood business, you see that they
              had, as I surmised, a confederate in the house, who could be none
              other than Lal Rao, the butler: so Jones actually has the
              undivided honor of having caught one fish in his great haul.”
            </TextNode>

            <TextNode>
              “The division seems rather unfair,” I remarked. “You have done all
              the work in this business. I get a wife out of it, Jones gets the
              credit, pray what remains for you?”
            </TextNode>

            <TextNode>
              “For me,” said Sherlock Holmes, “there still remains the
              cocaine-bottle.” And he stretched his long white hand up for it.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page62;
