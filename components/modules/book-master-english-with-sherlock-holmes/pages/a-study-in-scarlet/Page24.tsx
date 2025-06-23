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

function Page24({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='A STUDY IN SCARLET'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Of course He did,” said her companion, rather startled by this
              unexpected question.
            </TextNode>

            <TextNode>
              “He made the country down in Illinois, and He made the Missouri,”
              the little girl continued. “I guess somebody else made the country
              in these parts. It's not nearly so well done. They forgot the
              water and the trees.”
            </TextNode>

            <TextNode>
              “What would ye think of offering up prayer?” the man asked
              diffidently.
            </TextNode>

            <TextNode>“It ain't night yet,” she answered.</TextNode>

            <TextNode>
              “It don't matter. It ain't quite regular, but He won't mind that,
              you bet. You say over them ones that you used to say every night
              in the waggon when we was on the Plains.”
            </TextNode>

            <TextNode>
              “Why don't you say some yourself?” the child asked, with wondering
              eyes.
            </TextNode>

            <TextNode>
              “I disremember them,” he answered. “I hain't said none since I was
              half the height o' that gun. I guess it's never too late. You say
              them out, and I'll stand by and come in on the choruses.”
            </TextNode>

            <TextNode>
              “Then you'll need to kneel down, and me too,” she said, laying the
              shawl out for that purpose. “You've got to put your hands up like
              this. It makes you feel kind o' good.”
            </TextNode>

            <TextNode>
              It was a strange sight had there been anything but the buzzards to
              see it. Side by side on the narrow shawl knelt the two wanderers,
              the little prattling child and the reckless, hardened adventurer.
              Her chubby face, and his haggard, angular visage were both turned
              up to the cloudless heaven in heartfelt entreaty to that dread
              being with whom they were face to face, while the two voices—the
              one thin and clear, the other deep and harsh—united in the
              entreaty for mercy and forgiveness. The prayer finished, they
              resumed their seat in the shadow of the boulder until the child
              fell asleep, nestling upon the broad breast of her protector. He
              watched over her slumber for some time, but Nature proved to be
              too strong for him. For three days and three nights he had allowed
              himself neither rest nor repose. Slowly the eyelids drooped over
              the tired eyes, and the head sunk lower and lower upon the breast,
              until the man's grizzled beard was mixed with the gold tresses of
              his companion, and both slept the same deep and dreamless slumber.
            </TextNode>

            <TextNode>
              Had the wanderer remained awake for another half hour a strange
              sight would have met his eyes. Far away on the extreme verge of
              the alkali plain there rose up a little spray of dust, very slight
              at first, and hardly to be distinguished from the mists of the
              distance, but gradually growing higher and broader until it formed
              a solid, well-defined cloud. This cloud continued to increase in
              size until it became evident that it could only be raised by a
              great multitude of moving creatures. In more fertile spots the
              observer would have come to the conclusion that one of those great
              herds of bisons which graze upon the prairie land was approaching
              him. This was obviously impossible in these arid wilds. As the
              whirl of dust drew nearer to the solitary bluff upon which the two
              castaways were reposing, the canvas-covered tilts of waggons and
              the figures of armed horsemen began to show up through the haze,
              and the apparition revealed itself as being a great caravan upon
              its journey for the West. But what a caravan! When the head of it
              had reached the base of the mountains, the rear was not yet
              visible on the horizon. Right across the enormous plain stretched
              the straggling array, waggons and carts, men on horseback, and men
              on foot. Innumerable women who staggered along under burdens, and
              children who toddled beside the waggons or peeped out from under
              the white coverings. This was evidently no ordinary party of
              immigrants, but rather some nomad people who had been compelled
              from stress of circumstances to seek themselves a new country.
              There rose through the clear air a confused clattering and
              rumbling from this great mass of humanity, with the creaking of
              wheels and the neighing of horses. Loud as it was, it was not
              sufficient to rouse the two tired wayfarers above them.
            </TextNode>

            <TextNode>
              At the head of the column there rode a score or more of grave
              ironfaced men, clad in sombre homespun garments and armed with
              rifles. On reaching the base of the bluff they halted, and held a
              short council among themselves.
            </TextNode>

            <TextNode>
              “The wells are to the right, my brothers,” said one, a
              hard-lipped, clean-shaven man with grizzly hair.
            </TextNode>

            <TextNode>
              “To the right of the Sierra Blanco—so we shall reach the Rio
              Grande,” said another.
            </TextNode>

            <TextNode>
              “Fear not for water,” cried a third. “He who could draw it from
              the rocks will not now abandon His own chosen people.”
            </TextNode>

            <TextNode>“Amen! Amen!” responded the whole party.</TextNode>

            <TextNode>
              They were about to resume their journey when one of the youngest
              and keenest-eyed uttered an exclamation and pointed up at the
              rugged crag above them. From its summit there fluttered a little
              wisp of pink, showing up hard and bright against the grey rocks
              behind. At the sight there was a general reining up of horses and
              unslinging of guns, while fresh horsemen came galloping up to
              reinforce the vanguard. The word “Redskins” was on every lip.
            </TextNode>

            <TextNode>
              “There can't be any number of Injuns here,” said the elderly man
              who appeared to be in command. “We have passed the Pawnees, and
              there are no other tribes until we cross the great mountains.”
            </TextNode>
            <TextNode>
              “Shall I go forward and see, Brother Stangerson,” asked one of the
              band.
            </TextNode>

            <TextNode>“And I,” “and I,” cried a dozen voices.</TextNode>

            <TextNode>
              “Leave your horses below and we will await you here,” the Elder
              answered. In a moment the young fellows had dismounted, fastened
              their horses, and were ascending the precipitous slope which led
              up to the object which had excited their curiosity. They advanced
              rapidly and noiselessly, with the confidence and dexterity of
              practised scouts. The watchers from the plain below could see them
              flit from rock to rock until their figures stood out against the
              skyline. The young man who had first given the alarm was leading
              them. Suddenly his followers saw him throw up his hands, as though
              overcome with astonishment, and on joining him they were affected
              in the same way by the sight which met their eyes.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              On the little plateau which crowned the barren hill there stood a
              single giant boulder, and against this boulder there lay a tall
              man, long-bearded and hard-featured, but of an excessive thinness.
              His placid face and regular breathing showed that he was fast
              asleep. Beside him lay a little child, with her round white arms
              encircling his brown sinewy neck, and her golden haired head
              resting upon the breast of his velveteen tunic. Her rosy lips were
              parted, showing the regular line of snow-white teeth within, and a
              playful smile played over her infantile features. Her plump little
              white legs terminating in white socks and neat shoes with shining
              buckles, offered a strange contrast to the long shrivelled members
              of her companion. On the ledge of rock above this strange couple
              there stood three solemn buzzards, who, at the sight of the new
              comers uttered raucous screams of disappointment and flapped
              sullenly away.
            </TextNode>

            <TextNode>
              The cries of the foul birds awoke the two sleepers who stared
              about them in bewilderment. The man staggered to his feet and
              looked down upon the plain which had been so desolate when sleep
              had overtaken him, and which was now traversed by this enormous
              body of men and of beasts. His face assumed an expression of
              incredulity as he gazed, and he passed his boney hand over his
              eyes. “This is what they call delirium, I guess,” he muttered. The
              child stood beside him, holding on to the skirt of his coat, and
              said nothing but looked all round her with the wondering
              questioning gaze of childhood.
            </TextNode>

            <TextNode>
              The rescuing party were speedily able to convince the two
              castaways that their appearance was no delusion. One of them
              seized the little girl, and hoisted her upon his shoulder, while
              two others supported her gaunt companion, and assisted him towards
              the waggons.
            </TextNode>

            <TextNode>
              “My name is John Ferrier,” the wanderer explained; “me and that
              little un are all that's left o' twenty-one people. The rest is
              all dead o' thirst and hunger away down in the south.”
            </TextNode>

            <TextNode>“Is she your child?” asked someone.</TextNode>

            <TextNode>
              “I guess she is now,” the other cried, defiantly; “she's mine
              'cause I saved her. No man will take her from me. She's Lucy
              Ferrier from this day on. Who are you, though?” he continued,
              glancing with curiosity at his stalwart, sunburned rescuers;
              “there seems to be a powerful lot of ye.”
            </TextNode>

            <TextNode>
              “Nigh upon ten thousand,” said one of the young men; “we are the
              persecuted children of God—the chosen of the Angel Merona.”
            </TextNode>

            <TextNode>
              “I never heard tell on him,” said the wanderer. “He appears to
              have chosen a fair crowd of ye.”
            </TextNode>

            <TextNode>
              “Do not jest at that which is sacred,” said the other sternly. “We
              are of those who believe in those sacred writings, drawn in
              Egyptian letters on plates of beaten gold, which were handed unto
              the holy Joseph Smith at Palmyra. We have come from Nauvoo, in the
              State of Illinois, where we had founded our temple. We have come
              to seek a refuge from the violent man and from the godless, even
              though it be the heart of the desert.”
            </TextNode>

            <TextNode>
              The name of Nauvoo evidently recalled recollections to John
              Ferrier. “I see,” he said, “you are the Mormons.”
            </TextNode>

            <TextNode>
              “We are the Mormons,” answered his companions with one voice.
            </TextNode>

            <TextNode>“And where are you going?”</TextNode>

            <TextNode>
              “We do not know. The hand of God is leading us under the person of
              our Prophet. You must come before him. He shall say what is to be
              done with you.”
            </TextNode>

            <TextNode>
              They had reached the base of the hill by this time, and were
              surrounded by crowds of the pilgrims—pale-faced meek-looking
              women, strong laughing children, and anxious earnest-eyed men.
              Many were the cries of astonishment and of commiseration which
              arose from them when they perceived the youth of one of the
              strangers and the destitution of the other. Their escort did not
              halt, however, but pushed on, followed by a great crowd of
              Mormons, until they reached a waggon, which was conspicuous for
              its great size and for the gaudiness and smartness of its
              appearance. Six horses were yoked to it, whereas the others were
              furnished with two, or, at most, four a-piece. Beside the driver
              there sat a man who could not have been more than thirty years of
              age, but whose massive head and resolute expression marked him as
              a leader. He was reading a brown-backed volume, but as the crowd
              approached he laid it aside, and listened attentively to an
              account of the episode. Then he turned to the two castaways.
            </TextNode>
            <TextNode>
              “If we take you with us,” he said, in solemn words, “it can only
              be as believers in our own creed. We shall have no wolves in our
              fold. Better far that your bones should bleach in this wilderness
              than that you should prove to be that little speck of decay which
              in time corrupts the whole fruit. Will you come with us on these
              terms?”
            </TextNode>

            <TextNode>
              “Guess I'll come with you on any terms,” said Ferrier, with such
              emphasis that the grave Elders could not restrain a smile. The
              leader alone retained his stern, impressive expression.
            </TextNode>

            <TextNode>
              “Take him, Brother Stangerson,” he said, “give him food and drink,
              and the child likewise. Let it be your task also to teach him our
              holy creed. We have delayed long enough. Forward! On, on to Zion!”
            </TextNode>

            <TextNode>
              “On, on to Zion!” cried the crowd of Mormons, and the words
              rippled down the long caravan, passing from mouth to mouth until
              they died away in a dull murmur in the far distance. With a
              cracking of whips and a creaking of wheels the great waggons got
              into motion, and soon the whole caravan was winding along once
              more. The Elder to whose care the two waifs had been committed,
              led them to his waggon, where a meal was already awaiting them.
            </TextNode>

            <TextNode>
              “You shall remain here,” he said. “In a few days you will have
              recovered from your fatigues. In the meantime, remember that now
              and forever you are of our religion. Brigham Young has said it,
              and he has spoken with the voice of Joseph Smith, which is the
              voice of God.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page24;
