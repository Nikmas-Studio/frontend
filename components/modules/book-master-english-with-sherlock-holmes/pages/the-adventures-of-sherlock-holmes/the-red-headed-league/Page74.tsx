import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page74({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE RED-HEADED LEAGUE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “We're hunting in couples again, Doctor, you see,” said Jones in
              his consequential way. “Our friend here is a wonderful man for
              starting a chase. All he wants is an old dog to help him to do the
              running down.”
            </TextNode>

            <TextNode>
              “I hope a wild goose may not prove to be the end of our chase,”
              observed Mr. Merryweather gloomily.
            </TextNode>

            <TextNode>
              “You may place considerable confidence in Mr. Holmes, sir,” said
              the police agent loftily. “He has his own little methods, which
              are, if he won't mind my saying so, just a little too theoretical
              and fantastic, but he has the makings of a detective in him. It is
              not too much to say that once or twice, as in that business of the
              Sholto murder and the Agra treasure, he has been more nearly
              correct than the official force.”
            </TextNode>

            <TextNode>
              “Oh, if you say so, Mr. Jones, it is all right,” said the stranger
              with deference. “Still, I confess that I miss my rubber. It is the
              first Saturday night for seven-and-twenty years that I have not
              had my rubber.”
            </TextNode>

            <TextNode>
              “I think you will find,” said Sherlock Holmes, “that you will play
              for a higher stake to-night than you have ever done yet, and that
              the play will be more exciting. For you, Mr. Merryweather, the
              stake will be some £30,000; and for you, Jones, it will be the man
              upon whom you wish to lay your hands.”
            </TextNode>

            <TextNode>
              “John Clay, the murderer, thief, smasher, and forger. He's a young
              man, Mr. Merryweather, but he is at the head of his profession,
              and I would rather have my bracelets on him than on any criminal
              in London. He's a remarkable man, is young John Clay. His
              grandfather was a royal duke, and he himself has been to Eton and
              Oxford. His brain is as cunning as his fingers, and though we meet
              signs of him at every turn, we never know where to find the man
              himself. He'll crack a crib in Scotland one week, and be raising
              money to build an orphanage in Cornwall the next. I've been on his
              track for years and have never set eyes on him yet.”
            </TextNode>

            <TextNode>
              “I hope that I may have the pleasure of introducing you to-night.
              I've had one or two little turns also with Mr. John Clay, and I
              agree with you that he is at the head of his profession. It is
              past ten, however, and quite time that we started. If you two will
              take the first hansom, Watson and I will follow in the second.”
            </TextNode>

            <TextNode>
              Sherlock Holmes was not very communicative during the long drive
              and lay back in the cab humming the tunes which he had heard in
              the afternoon. We rattled through an endless labyrinth of gas-lit
              streets until we emerged into Farrington Street.
            </TextNode>

            <TextNode>
              “We are close there now,” my friend remarked. “This fellow
              Merryweather is a bank director, and personally interested in the
              matter. I thought it as well to have Jones with us also. He is not
              a bad fellow, though an absolute imbecile in his profession. He
              has one positive virtue. He is as brave as a bulldog and as
              tenacious as a lobster if he gets his claws upon anyone. Here we
              are, and they are waiting for us.”
            </TextNode>

            <TextNode>
              We had reached the same crowded thoroughfare in which we had found
              ourselves in the morning. Our cabs were dismissed, and, following
              the guidance of Mr. Merryweather, we passed down a narrow passage
              and through a side door, which he opened for us. Within there was
              a small corridor, which ended in a very massive iron gate. This
              also was opened, and led down a flight of winding stone steps,
              which terminated at another formidable gate. Mr. Merryweather
              stopped to light a lantern, and then conducted us down a dark,
              earth-smelling passage, and so, after opening a third door, into a
              huge vault or cellar, which was piled all round with crates and
              massive boxes.
            </TextNode>

            <TextNode>
              “You are not very vulnerable from above,” Holmes remarked as he
              held up the lantern and gazed about him.
            </TextNode>

            <TextNode>
              “Nor from below,” said Mr. Merryweather, striking his stick upon
              the flags which lined the floor. “Why, dear me, it sounds quite
              hollow!” he remarked, looking up in surprise.
            </TextNode>

            <TextNode>
              “I must really ask you to be a little more quiet!” said Holmes
              severely. “You have already imperilled the whole success of our
              expedition. Might I beg that you would have the goodness to sit
              down upon one of those boxes, and not to interfere?”
            </TextNode>

            <TextNode>
              The solemn Mr. Merryweather perched himself upon a crate, with a
              very injured expression upon his face, while Holmes fell upon his
              knees upon the floor and, with the lantern and a magnifying lens,
              began to examine minutely the cracks between the stones. A few
              seconds sufficed to satisfy him, for he sprang to his feet again
              and put his glass in his pocket.
            </TextNode>

            <TextNode>
              “We have at least an hour before us,” he remarked, “for they can
              hardly take any steps until the good pawnbroker is safely in bed.
              Then they will not lose a minute, for the sooner they do their
              work the longer time they will have for their escape. We are at
              present, Doctor—as no doubt you have divined—in the cellar of the
              City branch of one of the principal London banks. Mr. Merryweather
              is the chairman of directors, and he will explain to you that
              there are reasons why the more daring criminals of London should
              take a considerable interest in this cellar at present.”
            </TextNode>

            <TextNode>
              “It is our French gold,” whispered the director. “We have had
              several warnings that an attempt might be made upon it.”
            </TextNode>

            <TextNode>“Your French gold?”</TextNode>

            <TextNode>
              “Yes. We had occasion some months ago to strengthen our resources
              and borrowed for that purpose 30,000 napoleons from the Bank of
              France. It has become known that we have never had occasion to
              unpack the money, and that it is still lying in our cellar. The
              crate upon which I sit contains 2,000 napoleons packed between
              layers of lead foil. Our reserve of bullion is much larger at
              present than is usually kept in a single branch office, and the
              directors have had misgivings upon the subject.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Which were very well justified,” observed Holmes. “And now it is
              time that we arranged our little plans. I expect that within an
              hour matters will come to a head. In the meantime Mr.
              Merryweather, we must put the screen over that dark lantern.”
            </TextNode>

            <TextNode>“And sit in the dark?”</TextNode>

            <TextNode>
              “I am afraid so. I had brought a pack of cards in my pocket, and I
              thought that, as we were a&nbsp;
              <span className='italic'>partie carrée</span>, you might have your
              rubber after all. But I see that the enemy's preparations have
              gone so far that we cannot risk the presence of a light. And,
              first of all, we must choose our positions. These are daring men,
              and though we shall take them at a disadvantage, they may do us
              some harm unless we are careful. I shall stand behind this crate,
              and do you conceal yourselves behind those. Then, when I flash a
              light upon them, close in swiftly. If they fire, Watson, have no
              compunction about shooting them down.”
            </TextNode>

            <TextNode>
              I placed my revolver, cocked, upon the top of the wooden case
              behind which I crouched. Holmes shot the slide across the front of
              his lantern and left us in pitch darkness—such an absolute
              darkness as I have never before experienced. The smell of hot
              metal remained to assure us that the light was still there, ready
              to flash out at a moment's notice. To me, with my nerves worked up
              to a pitch of expectancy, there was something depressing and
              subduing in the sudden gloom, and in the cold dank air of the
              vault.
            </TextNode>

            <TextNode>
              “They have but one retreat,” whispered Holmes. “That is back
              through the house into Saxe-Coburg Square. I hope that you have
              done what I asked you, Jones?”
            </TextNode>

            <TextNode>
              “I have an inspector and two officers waiting at the front door.”
            </TextNode>

            <TextNode>
              “Then we have stopped all the holes. And now we must be silent and
              wait.”
            </TextNode>

            <TextNode>
              What a time it seemed! From comparing notes afterwards it was but
              an hour and a quarter, yet it appeared to me that the night must
              have almost gone and the dawn be breaking above us. My limbs were
              weary and stiff, for I feared to change my position; yet my nerves
              were worked up to the highest pitch of tension, and my hearing was
              so acute that I could not only hear the gentle breathing of my
              companions, but I could distinguish the deeper, heavier in-breath
              of the bulky Jones from the thin, sighing note of the bank
              director. From my position I could look over the case in the
              direction of the floor. Suddenly my eyes caught the glint of a
              light.
            </TextNode>

            <TextNode>
              At first it was but a lurid spark upon the stone pavement. Then it
              lengthened out until it became a yellow line, and then, without
              any warning or sound, a gash seemed to open and a hand appeared, a
              white, almost womanly hand, which felt about in the centre of the
              little area of light. For a minute or more the hand, with its
              writhing fingers, protruded out of the floor. Then it was
              withdrawn as suddenly as it appeared, and all was dark again save
              the single lurid spark which marked a chink between the stones.
            </TextNode>

            <TextNode>
              Its disappearance, however, was but momentary. With a rending,
              tearing sound, one of the broad, white stones turned over upon its
              side and left a square, gaping hole, through which streamed the
              light of a lantern. Over the edge there peeped a clean-cut, boyish
              face, which looked keenly about it, and then, with a hand on
              either side of the aperture, drew itself shoulder-high and
              waist-high, until one knee rested upon the edge. In another
              instant he stood at the side of the hole and was hauling after him
              a companion, lithe and small like himself, with a pale face and a
              shock of very red hair.
            </TextNode>

            <TextNode>
              “It's all clear,” he whispered. “Have you the chisel and the bags?
              Great Scott! Jump, Archie, jump, and I'll swing for it!”
            </TextNode>

            <TextNode>
              Sherlock Holmes had sprung out and seized the intruder by the
              collar. The other dived down the hole, and I heard the sound of
              rending cloth as Jones clutched at his skirts. The light flashed
              upon the barrel of a revolver, but Holmes' hunting crop came down
              on the man's wrist, and the pistol clinked upon the stone floor.
            </TextNode>

            <TextNode>
              “It's no use, John Clay,” said Holmes blandly. “You have no chance
              at all.”
            </TextNode>

            <TextNode>
              “So I see,” the other answered with the utmost coolness. “I fancy
              that my pal is all right, though I see you have got his
              coat-tails.”
            </TextNode>

            <TextNode>
              “There are three men waiting for him at the door,” said Holmes.
            </TextNode>

            <TextNode>
              “Oh, indeed! You seem to have done the thing very completely. I
              must compliment you.”
            </TextNode>

            <TextNode>
              “And I you,” Holmes answered. “Your red-headed idea was very new
              and effective.”
            </TextNode>

            <TextNode>
              “You'll see your pal again presently,” said Jones. “He's quicker
              at climbing down holes than I am. Just hold out while I fix the
              derbies.”
            </TextNode>

            <TextNode>
              “I beg that you will not touch me with your filthy hands,”
              remarked our prisoner as the handcuffs clattered upon his wrists.
              “You may not be aware that I have royal blood in my veins. Have
              the goodness, also, when you address me always to say ‘sir’ and
              ‘please.’”
            </TextNode>

            <TextNode>
              “All right,” said Jones with a stare and a snigger. “Well, would
              you please, sir, march upstairs, where we can get a cab to carry
              your Highness to the police-station?”
            </TextNode>

            <TextNode>
              “That is better,” said John Clay serenely. He made a sweeping bow
              to the three of us and walked quietly off in the custody of the
              detective.
            </TextNode>

            <TextNode>
              “Really, Mr. Holmes,” said Mr. Merryweather as we followed them
              from the cellar, “I do not know how the bank can thank you or
              repay you. There is no doubt that you have detected and defeated
              in the most complete manner one of the most determined attempts at
              bank robbery that have ever come within my experience.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page74;
