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

function Page142({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE MUSGRAVE RITUAL'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “‘“We will see what the doctor says,” I answered. “You must stop
              work now, and when you go downstairs just say that I wish to see
              Brunton.”
            </TextNode>

            <TextNode>“‘“The butler is gone,” said she.</TextNode>

            <TextNode>“‘“Gone! Gone where?”</TextNode>

            <TextNode>
              “‘“He is gone. No one has seen him. He is not in his room. Oh,
              yes, he is gone, he is gone!” She fell back against the wall with
              shriek after shriek of laughter, while I, horrified at this sudden
              hysterical attack, rushed to the bell to summon help. The girl was
              taken to her room, still screaming and sobbing, while I made
              inquiries about Brunton. There was no doubt about it that he had
              disappeared. His bed had not been slept in, he had been seen by no
              one since he had retired to his room the night before, and yet it
              was difficult to see how he could have left the house, as both
              windows and doors were found to be fastened in the morning. His
              clothes, his watch, and even his money were in his room, but the
              black suit which he usually wore was missing. His slippers, too,
              were gone, but his boots were left behind. Where then could butler
              Brunton have gone in the night, and what could have become of him
              now?
            </TextNode>

            <TextNode>
              “‘Of course we searched the house from cellar to garret, but there
              was no trace of him. It is, as I have said, a labyrinth of an old
              house, especially the original wing, which is now practically
              uninhabited; but we ransacked every room and cellar without
              discovering the least sign of the missing man. It was incredible
              to me that he could have gone away leaving all his property behind
              him, and yet where could he be? I called in the local police, but
              without success. Rain had fallen on the night before and we
              examined the lawn and the paths all round the house, but in vain.
              Matters were in this state, when a new development quite drew our
              attention away from the original mystery.
            </TextNode>

            <TextNode>
              “‘For two days Rachel Howells had been so ill, sometimes
              delirious, sometimes hysterical, that a nurse had been employed to
              sit up with her at night. On the third night after Brunton's
              disappearance, the nurse, finding her patient sleeping nicely, had
              dropped into a nap in the arm-chair, when she woke in the early
              morning to find the bed empty, the window open, and no signs of
              the invalid. I was instantly aroused, and, with the two footmen,
              started off at once in search of the missing girl. It was not
              difficult to tell the direction which she had taken, for, starting
              from under her window, we could follow her footmarks easily across
              the lawn to the edge of the mere, where they vanished close to the
              gravel path which leads out of the grounds. The lake there is
              eight feet deep, and you can imagine our feelings when we saw that
              the trail of the poor demented girl came to an end at the edge of
              it.
            </TextNode>

            <TextNode>
              “‘Of course, we had the drags at once, and set to work to recover
              the remains, but no trace of the body could we find. On the other
              hand, we brought to the surface an object of a most unexpected
              kind. It was a linen bag which contained within it a mass of old
              rusted and discolored metal and several dull-colored pieces of
              pebble or glass. This strange find was all that we could get from
              the mere, and, although we made every possible search and inquiry
              yesterday, we know nothing of the fate either of Rachel Howells or
              of Richard Brunton. The county police are at their wits' end, and
              I have come up to you as a last resource.’
            </TextNode>

            <TextNode>
              “You can imagine, Watson, with what eagerness I listened to this
              extraordinary sequence of events, and endeavored to piece them
              together, and to devise some common thread upon which they might
              all hang. The butler was gone. The maid was gone. The maid had
              loved the butler, but had afterwards had cause to hate him. She
              was of Welsh blood, fiery and passionate. She had been terribly
              excited immediately after his disappearance. She had flung into
              the lake a bag containing some curious contents. These were all
              factors which had to be taken into consideration, and yet none of
              them got quite to the heart of the matter. What was the
              starting-point of this chain of events? There lay the end of this
              tangled line.
            </TextNode>

            <TextNode>
              “‘I must see that paper, Musgrave,’ said I, ‘which this butler of
              your thought it worth his while to consult, even at the risk of
              the loss of his place.’
            </TextNode>

            <TextNode>
              “‘It is rather an absurd business, this ritual of ours,’ he
              answered. ‘But it has at least the saving grace of antiquity to
              excuse it. I have a copy of the questions and answers here if you
              care to run your eye over them.’
            </TextNode>

            <TextNode>
              “He handed me the very paper which I have here, Watson, and this
              is the strange catechism to which each Musgrave had to submit when
              he came to man's estate. I will read you the questions and answers
              as they stand.
            </TextNode>

            <TextNode>“‘Whose was it?’</TextNode>

            <TextNode>“‘His who is gone.’</TextNode>

            <TextNode>“‘Who shall have it?’</TextNode>

            <TextNode>“‘He who will come.’</TextNode>

            <TextNode>“‘What was the month?’</TextNode>

            <TextNode>“‘The sixth from the first.’</TextNode>

            <TextNode>“‘Where was the sun?’</TextNode>

            <TextNode>“‘Over the oak.’</TextNode>

            <TextNode>“‘Where was the shadow?’</TextNode>

            <TextNode>“‘Under the elm.’</TextNode>

            <TextNode>“‘How was it stepped?’</TextNode>

            <TextNode>
              “‘North by ten and by ten, east by five and by five, south by two
              and by two, west by one and by one, and so under.’
            </TextNode>

            <TextNode>“‘What shall we give for it?’</TextNode>

            <TextNode>“‘All that is ours.’</TextNode>

            <TextNode>“‘Why should we give it?’</TextNode>

            <TextNode>“‘For the sake of the trust.’</TextNode>

            <TextNode>
              “‘The original has no date, but is in the spelling of the middle
              of the seventeenth century,’ remarked Musgrave. ‘I am afraid,
              however, that it can be of little help to you in solving this
              mystery.’
            </TextNode>

            <TextNode>
              “‘At least,’ said I, ‘it gives us another mystery, and one which
              is even more interesting than the first. It may be that the
              solution of the one may prove to be the solution of the other. You
              will excuse me, Musgrave, if I say that your butler appears to me
              to have been a very clever man, and to have had a clearer insight
              that ten generations of his masters.’
            </TextNode>

            <TextNode>
              “‘I hardly follow you,’ said Musgrave. ‘The paper seems to me to
              be of no practical importance.’
            </TextNode>

            <TextNode>
              “‘But to me it seems immensely practical, and I fancy that Brunton
              took the same view. He had probably seen it before that night on
              which you caught him.’
            </TextNode>

            <TextNode>
              “‘It is very possible. We took no pains to hide it.’
            </TextNode>

            <TextNode>
              “‘He simply wished, I should imagine, to refresh his memory upon
              that last occasion. He had, as I understand, some sort of map or
              chart which he was comparing with the manuscript, and which he
              thrust into his pocket when you appeared.’
            </TextNode>

            <TextNode>
              “‘That is true. But what could he have to do with this old family
              custom of ours, and what does this rigmarole mean?’
            </TextNode>

            <TextNode>
              “‘I don't think that we should have much difficulty in determining
              that,’ said I; ‘with your permission we will take the first train
              down to Sussex, and go a little more deeply into the matter upon
              the spot.’
            </TextNode>

            <TextNode>
              “The same afternoon saw us both at Hurlstone. Possibly you have
              seen pictures and read descriptions of the famous old building, so
              I will confine my account of it to saying that it is built in the
              shape of an L, the long arm being the more modern portion, and the
              shorter the ancient nucleus, from which the other had developed.
              Over the low, heavily-lintelled door, in the centre of this old
              part, is chiseled the date, 1607, but experts are agreed that the
              beams and stone-work are really much older than this. The
              enormously thick walls and tiny windows of this part had in the
              last century driven the family into building the new wing, and the
              old one was used now as a store-house and a cellar, when it was
              used at all. A splendid park with fine old timber surrounds the
              house, and the lake, to which my client had referred, lay close to
              the avenue, about two hundred yards from the building.
            </TextNode>

            <TextNode>
              “I was already firmly convinced, Watson, that there were not three
              separate mysteries here, but one only, and that if I could read
              the Musgrave Ritual aright I should hold in my hand the clue which
              would lead me to the truth concerning both the butler Brunton and
              the maid Howells. To that then I turned all my energies. Why
              should this servant be so anxious to master this old formula?
              Evidently because he saw something in it which had escaped all
              those generations of country squires, and from which he expected
              some personal advantage. What was it then, and how had it affected
              his fate?
            </TextNode>

            <TextNode>
              “It was perfectly obvious to me, on reading the ritual, that the
              measurements must refer to some spot to which the rest of the
              document alluded, and that if we could find that spot, we should
              be in a fair way towards finding what the secret was which the old
              Musgraves had thought it necessary to embalm in so curious a
              fashion. There were two guides given us to start with, an oak and
              an elm. As to the oak there could be no question at all. Right in
              front of the house, upon the left-hand side of the drive, there
              stood a patriarch among oaks, one of the most magnificent trees
              that I have ever seen.
            </TextNode>

            <TextNode>
              “‘That was there when your ritual was drawn up,’ said I, as we
              drove past it.
            </TextNode>

            <TextNode>
              “‘It was there at the Norman Conquest in all probability,’ he
              answered. ‘It has a girth of twenty-three feet.’
            </TextNode>

            <TextNode>“Here was one of my fixed points secured.</TextNode>

            <TextNode>“‘Have you any old elms?’ I asked.</TextNode>

            <TextNode>
              “‘There used to be a very old one over yonder but it was struck by
              lightning ten years ago, and we cut down the stump,’
            </TextNode>

            <TextNode>“‘You can see where it used to be?’</TextNode>

            <TextNode>“‘Oh, yes.’</TextNode>

            <TextNode>“‘There are no other elms?’</TextNode>

            <TextNode>“‘No old ones, but plenty of beeches.’</TextNode>

            <TextNode>“‘I should like to see where it grew.’</TextNode>

            <TextNode>
              “We had driven up in a dogcart, and my client led me away at once,
              without our entering the house, to the scar on the lawn where the
              elm had stood. It was nearly midway between the oak and the house.
              My investigation seemed to be progressing.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “‘I suppose it is impossible to find out how high the elm was?’ I
              asked.
            </TextNode>

            <TextNode>
              “‘I can give you it at once. It was sixty-four feet.’
            </TextNode>

            <TextNode>
              “‘How do you come to know it?’ I asked, in surprise.
            </TextNode>

            <TextNode>
              “‘When my old tutor used to give me an exercise in trigonometry,
              it always took the shape of measuring heights. When I was a lad I
              worked out every tree and building in the estate.’
            </TextNode>

            <TextNode>
              “This was an unexpected piece of luck. My data were coming more
              quickly than I could have reasonably hoped.
            </TextNode>

            <TextNode>
              “‘Tell me,’ I asked, ‘did your butler ever ask you such a
              question?’
            </TextNode>

            <TextNode>
              “Reginald Musgrave looked at me in astonishment. ‘Now that you
              call it to my mind,’ he answered, ‘Brunton did ask me about the
              height of the tree some months ago, in connection with some little
              argument with the groom.’
            </TextNode>

            <TextNode>
              “This was excellent news, Watson, for it showed me that I was on
              the right road. I looked up at the sun. It was low in the heavens,
              and I calculated that in less than an hour it would lie just above
              the topmost branches of the old oak. One condition mentioned in
              the Ritual would then be fulfilled. And the shadow of the elm must
              mean the farther end of the shadow, otherwise the trunk would have
              been chosen as the guide. I had, then, to find where the far end
              of the shadow would fall when the sun was just clear of the oak.”
            </TextNode>

            <TextNode>
              “That must have been difficult, Holmes, when the elm was no longer
              there.”
            </TextNode>

            <TextNode>
              “Well, at least I knew that if Brunton could do it, I could also.
              Besides, there was no real difficulty. I went with Musgrave to his
              study and whittled myself this peg, to which I tied this long
              string with a knot at each yard. Then I took two lengths of a
              fishing-rod, which came to just six feet, and I went back with my
              client to where the elm had been. The sun was just grazing the top
              of the oak. I fastened the rod on end, marked out the direction of
              the shadow, and measured it. It was nine feet in length.
            </TextNode>

            <TextNode>
              “Of course the calculation now was a simple one. If a rod of six
              feet threw a shadow of nine, a tree of sixty-four feet would throw
              one of ninety-six, and the line of the one would of course be the
              line of the other. I measured out the distance, which brought me
              almost to the wall of the house, and I thrust a peg into the spot.
              You can imagine my exultation, Watson, when within two inches of
              my peg I saw a conical depression in the ground. I knew that it
              was the mark made by Brunton in his measurements, and that I was
              still upon his trail.
            </TextNode>

            <TextNode>
              “From this starting-point I proceeded to step, having first taken
              the cardinal points by my pocket-compass. Ten steps with each foot
              took me along parallel with the wall of the house, and again I
              marked my spot with a peg. Then I carefully paced off five to the
              east and two to the south. It brought me to the very threshold of
              the old door. Two steps to the west meant now that I was to go two
              paces down the stone-flagged passage, and this was the place
              indicated by the Ritual.
            </TextNode>

            <TextNode>
              “Never have I felt such a cold chill of disappointment, Watson.
              For a moment it seemed to me that there must be some radical
              mistake in my calculations. The setting sun shone full upon the
              passage floor, and I could see that the old, foot-worn gray stones
              with which it was paved were firmly cemented together, and had
              certainly not been moved for many a long year. Brunton had not
              been at work here. I tapped upon the floor, but it sounded the
              same all over, and there was no sign of any crack or crevice. But
              fortunately, Musgrave, who had begun to appreciate the meaning of
              my proceedings, and who was now as excited as myself, took out his
              manuscript to check my calculation.
            </TextNode>

            <TextNode>
              “‘And under,’ he cried. ‘You have omitted the “and under.”’
            </TextNode>

            <TextNode>
              “I had thought that it meant that we were to dig, but now, of
              course, I saw at once that I was wrong. ‘There is a cellar under
              this then?’ I cried.
            </TextNode>

            <TextNode>
              “‘Yes, and as old as the house. Down here, through this door.’
            </TextNode>

            <TextNode>
              “We went down a winding stone stair, and my companion, striking a
              match, lit a large lantern which stood on a barrel in the corner.
              In an instant it was obvious that we had at last come upon the
              true place, and that we had not been the only people to visit the
              spot recently.
            </TextNode>

            <TextNode>
              “It had been used for the storage of wood, but the billets, which
              had evidently been littered over the floor, were now piled at the
              sides, so as to leave a clear space in the middle. In this space
              lay a large and heavy flagstone with a rusted iron ring in the
              centre to which a thick shepherd's-check muffler was attached.
            </TextNode>

            <TextNode>
              “‘By Jove!’ cried my client. ‘That's Brunton's muffler. I have
              seen it on him, and could swear to it. What has the villain been
              doing here?’
            </TextNode>

            <TextNode>
              “At my suggestion a couple of the county police were summoned to
              be present, and I then endeavored to raise the stone by pulling on
              the cravat. I could only move it slightly, and it was with the aid
              of one of the constables that I succeeded at last in carrying it
              to one side. A black hole yawned beneath into which we all peered,
              while Musgrave, kneeling at the side, pushed down the lantern.
            </TextNode>

            <TextNode>
              “A small chamber about seven feet deep and four feet square lay
              open to us. At one side of this was a squat, brass-bound wooden
              box, the lid of which was hinged upwards, with this curious
              old-fashioned key projecting from the lock. It was furred outside
              by a thick layer of dust, and damp and worms had eaten through the
              wood, so that a crop of livid fungi was growing on the inside of
              it. Several discs of metal, old coins apparently, such as I hold
              here, were scattered over the bottom of the box, but it contained
              nothing else.
            </TextNode>

            <TextNode>
              “At the moment, however, we had no thought for the old chest, for
              our eyes were riveted upon that which crouched beside it. It was
              the figure of a man, clad in a suit of black, who squatted down
              upon his hams with his forehead sunk upon the edge of the box and
              his two arms thrown out on each side of it. The attitude had drawn
              all the stagnant blood to the face, and no man could have
              recognized that distorted liver-colored countenance; but his
              height, his dress, and his hair were all sufficient to show my
              client, when we had drawn the body up, that it was indeed his
              missing butler. He had been dead some days, but there was no wound
              or bruise upon his person to show how he had met his dreadful end.
              When his body had been carried from the cellar we found ourselves
              still confronted with a problem which was almost as formidable as
              that with which we had started.
            </TextNode>

            <TextNode>
              “I confess that so far, Watson, I had been disappointed in my
              investigation. I had reckoned upon solving the matter when once I
              had found the place referred to in the Ritual; but now I was
              there, and was apparently as far as ever from knowing what it was
              which the family had concealed with such elaborate precautions. It
              is true that I had thrown a light upon the fate of Brunton, but
              now I had to ascertain how that fate had come upon him, and what
              part had been played in the matter by the woman who had
              disappeared. I sat down upon a keg in the corner and thought the
              whole matter carefully over.
            </TextNode>

            <TextNode>
              “You know my methods in such cases, Watson. I put myself in the
              man's place and, having first gauged his intelligence, I try to
              imagine how I should myself have proceeded under the same
              circumstances. In this case the matter was simplified by Brunton's
              intelligence being quite first-rate, so that it was unnecessary to
              make any allowance for the personal equation, as the astronomers
              have dubbed it. He knew that something valuable was concealed. He
              had spotted the place. He found that the stone which covered it
              was just too heavy for a man to move unaided. What would he do
              next? He could not get help from outside, even if he had some one
              whom he could trust, without the unbarring of doors and
              considerable risk of detection. It was better, if he could, to
              have his helpmate inside the house. But whom could he ask? This
              girl had been devoted to him. A man always finds it hard to
              realize that he may have finally lost a woman's love, however
              badly he may have treated her. He would try by a few attentions to
              make his peace with the girl Howells, and then would engage her as
              his accomplice. Together they would come at night to the cellar,
              and their united force would suffice to raise the stone. So far I
              could follow their actions as if I had actually seen them.
            </TextNode>

            <TextNode>
              “But for two of them, and one a woman, it must have been heavy
              work the raising of that stone. A burly Sussex policeman and I had
              found it no light job. What would they do to assist them? Probably
              what I should have done myself. I rose and examined carefully the
              different billets of wood which were scattered round the floor.
              Almost at once I came upon what I expected. One piece, about three
              feet in length, had a very marked indentation at one end, while
              several were flattened at the sides as if they had been compressed
              by some considerable weight. Evidently, as they had dragged the
              stone up they had thrust the chunks of wood into the chink, until
              at last, when the opening was large enough to crawl through, they
              would hold it open by a billet placed lengthwise, which might very
              well become indented at the lower end, since the whole weight of
              the stone would press it down on to the edge of this other slab.
              So far I was still on safe ground.
            </TextNode>

            <TextNode>
              “And now how was I to proceed to reconstruct this midnight drama?
              Clearly, only one could fit into the hole, and that one was
              Brunton. The girl must have waited above. Brunton then unlocked
              the box, handed up the contents presumably—since they were not to
              be found—and then—and then what happened?
            </TextNode>

            <TextNode>
              “What smouldering fire of vengeance had suddenly sprung into flame
              in this passionate Celtic woman's soul when she saw the man who
              had wronged her—wronged her, perhaps, far more than we
              suspected—in her power? Was it a chance that the wood had slipped,
              and that the stone had shut Brunton into what had become his
              sepulchre? Had she only been guilty of silence as to his fate? Or
              had some sudden blow from her hand dashed the support away and
              sent the slab crashing down into its place? Be that as it might, I
              seemed to see that woman's figure still clutching at her treasure
              trove and flying wildly up the winding stair, with her ears
              ringing perhaps with the muffled screams from behind her and with
              the drumming of frenzied hands against the slab of stone which was
              choking her faithless lover's life out.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page142;
