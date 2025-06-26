import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import priorySchoolDark from '@/public/images/sherlock-priory-scroll-dark.jpg';
import priorySchoolLight from '@/public/images/sherlock-priory-scroll-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page185({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;PRIORY&nbsp;SCHOOL'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “It will probably be necessary for me to see you at the Hall,”
              said Holmes. “I would only ask you now, sir, whether you have
              formed any explanation in your own mind as to the mysterious
              disappearance of your son?”
            </TextNode>

            <TextNode>“No, sir, I have not.”</TextNode>

            <TextNode>
              “Excuse me if I allude to that which is painful to you, but I have
              no alternative. Do you think that the Duchess had anything to do
              with the matter?”
            </TextNode>

            <TextNode>
              The great Minister showed perceptible hesitation.
            </TextNode>

            <TextNode>“I do not think so,” he said, at last.</TextNode>

            <TextNode>
              “The other most obvious explanation is that the child has been
              kidnapped for the purpose of levying ransom. You have not had any
              demand of the sort?”
            </TextNode>

            <TextNode>“No, sir.”</TextNode>

            <TextNode>
              “One more question, your Grace. I understand that you wrote to
              your son upon the day when this incident occurred.”
            </TextNode>

            <TextNode>“No; I wrote upon the day before.”</TextNode>

            <TextNode>“Exactly. But he received it on that day?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “Was there anything in your letter which might have unbalanced him
              or induced him to take such a step?”
            </TextNode>

            <TextNode>“No, sir, certainly not.”</TextNode>

            <TextNode>“Did you post that letter yourself?”</TextNode>

            <TextNode>
              The nobleman's reply was interrupted by his secretary, who broke
              in with some heat.
            </TextNode>

            <TextNode>
              “His Grace is not in the habit of posting letters himself,” said
              he. “This letter was laid with others upon the study table, and I
              myself put them in the post-bag.”
            </TextNode>

            <TextNode>“You are sure this one was among them?”</TextNode>

            <TextNode>“Yes; I observed it.”</TextNode>

            <TextNode>
              “How many letters did your Grace write that day?”
            </TextNode>

            <TextNode>
              “Twenty or thirty. I have a large correspondence. But surely this
              is somewhat irrelevant?”
            </TextNode>

            <TextNode>“Not entirely,” said Holmes.</TextNode>

            <TextNode>
              “For my own part,” the Duke continued, “I have advised the police
              to turn their attention to the South of France. I have already
              said that I do not believe that the Duchess would encourage so
              monstrous an action, but the lad had the most wrong-headed
              opinions, and it is possible that he may have fled to her, aided
              and abetted by this German. I think, Dr. Huxtable, that we will
              now return to the Hall.”
            </TextNode>

            <TextNode>
              I could see that there were other questions which Holmes would
              have wished to put; but the nobleman's abrupt manner showed that
              the interview was at an end. It was evident that to his intensely
              aristocratic nature this discussion of his intimate family affairs
              with a stranger was most abhorrent, and that he feared lest every
              fresh question would throw a fiercer light into the discreetly
              shadowed corners of his ducal history.
            </TextNode>

            <TextNode>
              When the nobleman and his secretary had left, my friend flung
              himself at once with characteristic eagerness into the
              investigation.
            </TextNode>

            <TextNode>
              The boy's chamber was carefully examined, and yielded nothing save
              the absolute conviction that it was only through the window that
              he could have escaped. The German master's room and effects gave
              no further clue. In his case a trailer of ivy had given way under
              his weight, and we saw by the light of a lantern the mark on the
              lawn where his heels had come down. That one dint in the short
              green grass was the only material witness left of this
              inexplicable nocturnal flight.
            </TextNode>

            <TextNode>
              Sherlock Holmes left the house alone, and only returned after
              eleven. He had obtained a large ordnance map of the neighbourhood,
              and this he brought into my room, where he laid it out on the bed,
              and, having balanced the lamp in the middle of it, he began to
              smoke over it, and occasionally to point out objects of interest
              with the reeking amber of his pipe.
            </TextNode>

            <TextNode>
              “This case grows upon me, Watson,” said he. “There are decidedly
              some points of interest in connection with it. In this early stage
              I want you to realize those geographical features which may have a
              good deal to do with our investigation.
            </TextNode>

            <TextNode>
              “Look at this map. This dark square is the Priory School. I'll put
              a pin in it. Now, this line is the main road. You see that it runs
              east and west past the school, and you see also that there is no
              side road for a mile either way. If these two folk passed away by
              road it was this road.”
            </TextNode>

            <Image
              className='h-[39.5rem]  w-auto  translate-x-[-4px]  
                         max-2md:h-auto  dark:hidden'
              alt='priory school'
              src={priorySchoolLight}
              quality={100}
            />
            <Image
              className='hidden  h-[39.5rem]  w-auto  translate-x-[-4px]  
                         max-2md:h-auto  dark:block'
              alt='priory school'
              src={priorySchoolDark}
              quality={100}
            />

            <TextNode className='mt-3' noIndent>
              “Exactly.”
            </TextNode>

            <TextNode>
              “By a singular and happy chance we are able to some extent to
              check what passed along this road during the night in question. At
              this point, where my pipe is now resting, a country constable was
              on duty from twelve to six. It is, as you perceive, the first
              cross road on the east side. This man declares that he was not
              absent from his post for an instant, and he is positive that
              neither boy nor man could have gone that way unseen. I have spoken
              with this policeman to-night, and he appears to me to be a
              perfectly reliable person. That blocks this end. We have now to
              deal with the other. There is an inn here, the Red Bull, the
              landlady of which was ill. She had sent to Mackleton for a doctor,
              but he did not arrive until morning, being absent at another case.
              The people at the inn were alert all night, awaiting his coming,
              and one or other of them seems to have continually had an eye upon
              the road. They declare that no one passed. If their evidence is
              good, then we are fortunate enough to be able to block the west,
              and also to be able to say that the fugitives did not use the road
              at all.”
            </TextNode>

            <TextNode>“But the bicycle?” I objected.</TextNode>

            <TextNode>
              “Quite so. We will come to the bicycle presently. To continue our
              reasoning: if these people did not go by the road, they must have
              traversed the country to the north of the house or to the south of
              the house. That is certain. Let us weigh the one against the
              other. On the south of the house is, as you perceive, a large
              district of arable land, cut up into small fields, with stone
              walls between them. There, I admit that a bicycle is impossible.
              We can dismiss the idea. We turn to the country on the north. Here
              there lies a grove of trees, marked as the ‘Ragged Shaw,’ and on
              the farther side stretches a great rolling moor, Lower Gill Moor,
              extending for ten miles and sloping gradually upwards. Here, at
              one side of this wilderness, is Holdernesse Hall, ten miles by
              road, but only six across the moor. It is a peculiarly desolate
              plain. A few moor farmers have small holdings, where they rear
              sheep and cattle. Except these, the plover and the curlew are the
              only inhabitants until you come to the Chesterfield high road.
              There is a church there, you see, a few cottages, and an inn.
              Beyond that the hills become precipitous. Surely it is here to the
              north that our quest must lie.”
            </TextNode>

            <TextNode>“But the bicycle?” I persisted.</TextNode>

            <TextNode>
              “Well, well!” said Holmes, impatiently. “A good cyclist does not
              need a high road. The moor is intersected with paths and the moon
              was at the full. Halloa! what is this?”
            </TextNode>

            <TextNode>
              There was an agitated knock at the door, and an instant afterwards
              Dr. Huxtable was in the room. In his hand he held a blue
              cricket-cap, with a white chevron on the peak.
            </TextNode>

            <TextNode>
              “At last we have a clue!” he cried. “Thank Heaven! at last we are
              on the dear boy's track! It is his cap.”
            </TextNode>

            <TextNode>“Where was it found?”</TextNode>

            <TextNode>
              “In the van of the gipsies who camped on the moor. They left on
              Tuesday. To-day the police traced them down and examined their
              caravan. This was found.”
            </TextNode>

            <TextNode>“How do they account for it?”</TextNode>

            <TextNode>
              “They shuffled and lied—said that they found it on the moor on
              Tuesday morning. They know where he is, the rascals! Thank
              goodness, they are all safe under lock and key. Either the fear of
              the law or the Duke's purse will certainly get out of them all
              that they know.”
            </TextNode>

            <TextNode>
              “So far, so good,” said Holmes, when the doctor had at last left
              the room. “It at least bears out the theory that it is on the side
              of the Lower Gill Moor that we must hope for results. The police
              have really done nothing locally, save the arrest of these
              gipsies. Look here, Watson! There is a watercourse across the
              moor. You see it marked here in the map. In some parts it widens
              into a morass. This is particularly so in the region between
              Holdernesse Hall and the school. It is vain to look elsewhere for
              tracks in this dry weather; but at that point there is certainly a
              chance of some record being left. I will call you early to-morrow
              morning, and you and I will try if we can throw some little light
              upon the mystery.”
            </TextNode>

            <TextNode>
              The day was just breaking when I woke to find the long, thin form
              of Holmes by my bedside. He was fully dressed, and had apparently
              already been out.
            </TextNode>

            <TextNode>
              “I have done the lawn and the bicycle shed,” said he. “I have also
              had a ramble through the Ragged Shaw. Now, Watson, there is cocoa
              ready in the next room. I must beg you to hurry, for we have a
              great day before us.”
            </TextNode>

            <TextNode>
              His eyes shone, and his cheek was flushed with the exhilaration of
              the master workman who sees his work lie ready before him. A very
              different Holmes, this active, alert man, from the introspective
              and pallid dreamer of Baker Street. I felt, as I looked upon that
              supple figure, alive with nervous energy, that it was indeed a
              strenuous day that awaited us.
            </TextNode>

            <TextNode>
              And yet it opened in the blackest disappointment. With high hopes
              we struck across the peaty, russet moor, intersected with a
              thousand sheep paths, until we came to the broad, light-green belt
              which marked the morass between us and Holdernesse. Certainly, if
              the lad had gone homewards, he must have passed this, and he could
              not pass it without leaving his traces. But no sign of him or the
              German could be seen. With a darkening face my friend strode along
              the margin, eagerly observant of every muddy stain upon the mossy
              surface. Sheep-marks there were in profusion, and at one place,
              some miles down, cows had left their tracks. Nothing more.
            </TextNode>

            <TextNode>
              “Check number one,” said Holmes, looking gloomily over the rolling
              expanse of the moor. “There is another morass down yonder and a
              narrow neck between. Halloa! halloa! halloa! what have we here?”
            </TextNode>

            <TextNode>
              We had come on a small black ribbon of pathway. In the middle of
              it, clearly marked on the sodden soil, was the track of a bicycle.
            </TextNode>

            <TextNode>“Hurrah!” I cried. “We have it.”</TextNode>

            <TextNode>
              But Holmes was shaking his head, and his face was puzzled and
              expectant rather than joyous.
            </TextNode>

            <TextNode>
              “A bicycle, certainly, but not the bicycle,” said he. “I am
              familiar with forty-two different impressions left by tyres. This,
              as you perceive, is a Dunlop, with a patch upon the outer cover.
              Heidegger's tyres were Palmer's, leaving longitudinal stripes.
              Aveling, the mathematical master, was sure upon the point.
              Therefore, it is not Heidegger's track.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>“The boy's, then?”</TextNode>

            <TextNode>
              “Possibly, if we could prove a bicycle to have been in his
              possession. But this we have utterly failed to do. This track, as
              you perceive, was made by a rider who was going from the direction
              of the school.”
            </TextNode>

            <TextNode>“Or towards it?”</TextNode>

            <TextNode>
              “No, no, my dear Watson. The more deeply sunk impression is, of
              course, the hind wheel, upon which the weight rests. You perceive
              several places where it has passed across and obliterated the more
              shallow mark of the front one. It was undoubtedly heading away
              from the school. It may or may not be connected with our inquiry,
              but we will follow it backwards before we go any farther.”
            </TextNode>

            <TextNode>
              We did so, and at the end of a few hundred yards lost the tracks
              as we emerged from the boggy portion of the moor. Following the
              path backwards, we picked out another spot, where a spring
              trickled across it. Here, once again, was the mark of the bicycle,
              though nearly obliterated by the hoofs of cows. After that there
              was no sign, but the path ran right on into Ragged Shaw, the wood
              which backed on to the school. From this wood the cycle must have
              emerged. Holmes sat down on a boulder and rested his chin in his
              hands. I had smoked two cigarettes before he moved.
            </TextNode>

            <TextNode>
              “Well, well,” said he, at last. “It is, of course, possible that a
              cunning man might change the tyre of his bicycle in order to leave
              unfamiliar tracks. A criminal who was capable of such a thought is
              a man whom I should be proud to do business with. We will leave
              this question undecided and hark back to our morass again, for we
              have left a good deal unexplored.”
            </TextNode>

            <TextNode>
              We continued our systematic survey of the edge of the sodden
              portion of the moor, and soon our perseverance was gloriously
              rewarded. Right across the lower part of the bog lay a miry path.
              Holmes gave a cry of delight as he approached it. An impression
              like a fine bundle of telegraph wires ran down the centre of it.
              It was the Palmer tyre.
            </TextNode>

            <TextNode>
              “Here is Herr Heidegger, sure enough!” cried Holmes, exultantly.
              “My reasoning seems to have been pretty sound, Watson.”
            </TextNode>

            <TextNode>“I congratulate you.”</TextNode>

            <TextNode>
              “But we have a long way still to go. Kindly walk clear of the
              path. Now let us follow the trail. I fear that it will not lead
              very far.”
            </TextNode>

            <TextNode>
              We found, however, as we advanced that this portion of the moor is
              intersected with soft patches, and, though we frequently lost
              sight of the track, we always succeeded in picking it up once
              more.
            </TextNode>

            <TextNode>
              “Do you observe,” said Holmes, “that the rider is now undoubtedly
              forcing the pace? There can be no doubt of it. Look at this
              impression, where you get both tyres clear. The one is as deep as
              the other. That can only mean that the rider is throwing his
              weight on to the handle-bar, as a man does when he is sprinting.
              By Jove! he has had a fall.”
            </TextNode>

            <TextNode>
              There was a broad, irregular smudge covering some yards of the
              track. Then there were a few footmarks, and the tyre reappeared
              once more.
            </TextNode>

            <TextNode>“A side-slip,” I suggested.</TextNode>

            <TextNode>
              Holmes held up a crumpled branch of flowering gorse. To my horror
              I perceived that the yellow blossoms were all dabbled with
              crimson. On the path, too, and among the heather were dark stains
              of clotted blood.
            </TextNode>

            <TextNode>
              “Bad!” said Holmes. “Bad! Stand clear, Watson! Not an unnecessary
              footstep! What do I read here? He fell wounded, he stood up, he
              remounted, he proceeded. But there is no other track. Cattle on
              this side path. He was surely not gored by a bull? Impossible! But
              I see no traces of anyone else. We must push on, Watson. Surely
              with stains as well as the track to guide us he cannot escape us
              now.”
            </TextNode>

            <TextNode>
              Our search was not a very long one. The tracks of the tyre began
              to curve fantastically upon the wet and shining path. Suddenly, as
              I looked ahead, the gleam of metal caught my eye from amid the
              thick gorse bushes. Out of them we dragged a bicycle,
              Palmer-tyred, one pedal bent, and the whole front of it horribly
              smeared and slobbered with blood. On the other side of the bushes
              a shoe was projecting. We ran round, and there lay the unfortunate
              rider. He was a tall man, full bearded, with spectacles, one glass
              of which had been knocked out. The cause of his death was a
              frightful blow upon the head, which had crushed in part of his
              skull. That he could have gone on after receiving such an injury
              said much for the vitality and courage of the man. He wore shoes,
              but no socks, and his open coat disclosed a night-shirt beneath
              it. It was undoubtedly the German master.
            </TextNode>

            <TextNode>
              Holmes turned the body over reverently, and examined it with great
              attention. He then sat in deep thought for a time, and I could see
              by his ruffled brow that this grim discovery had not, in his
              opinion, advanced us much in our inquiry.
            </TextNode>

            <TextNode>
              “It is a little difficult to know what to do, Watson,” said he, at
              last. “My own inclinations are to push this inquiry on, for we
              have already lost so much time that we cannot afford to waste
              another hour. On the other hand, we are bound to inform the police
              of the discovery, and to see that this poor fellow's body is
              looked after.”
            </TextNode>

            <TextNode>“I could take a note back.”</TextNode>

            <TextNode>
              “But I need your company and assistance. Wait a bit! There is a
              fellow cutting peat up yonder. Bring him over here, and he will
              guide the police.”
            </TextNode>

            <TextNode>
              I brought the peasant across, and Holmes dispatched the frightened
              man with a note to Dr. Huxtable.
            </TextNode>

            <TextNode>
              “Now, Watson,” said he, “we have picked up two clues this morning.
              One is the bicycle with the Palmer tyre, and we see what that has
              led to. The other is the bicycle with the patched Dunlop. Before
              we start to investigate that, let us try to realize what we do
              know so as to make the most of it, and to separate the essential
              from the accidental.”
            </TextNode>

            <TextNode>
              “First of all I wish to impress upon you that the boy certainly
              left of his own free will. He got down from his window and he went
              off, either alone or with someone. That is sure.”
            </TextNode>

            <TextNode>I assented.</TextNode>

            <TextNode>
              “Well, now, let us turn to this unfortunate German master. The boy
              was fully dressed when he fled. Therefore, he foresaw what he
              would do. But the German went without his socks. He certainly
              acted on very short notice.”
            </TextNode>

            <TextNode>“Undoubtedly.”</TextNode>

            <TextNode>
              “Why did he go? Because, from his bedroom window, he saw the
              flight of the boy. Because he wished to overtake him and bring him
              back. He seized his bicycle, pursued the lad, and in pursuing him
              met his death.”
            </TextNode>

            <TextNode>“So it would seem.”</TextNode>

            <TextNode>
              “Now I come to the critical part of my argument. The natural
              action of a man in pursuing a little boy would be to run after
              him. He would know that he could overtake him. But the German does
              not do so. He turns to his bicycle. I am told that he was an
              excellent cyclist. He would not do this if he did not see that the
              boy had some swift means of escape.”
            </TextNode>

            <TextNode>“The other bicycle.”</TextNode>

            <TextNode>
              “Let us continue our reconstruction. He meets his death five miles
              from the school—not by a bullet, mark you, which even a lad might
              conceivably discharge, but by a savage blow dealt by a vigorous
              arm. The lad, then, had a companion in his flight. And the flight
              was a swift one, since it took five miles before an expert cyclist
              could overtake them. Yet we survey the ground round the scene of
              the tragedy. What do we find? A few cattle tracks, nothing more. I
              took a wide sweep round, and there is no path within fifty yards.
              Another cyclist could have had nothing to do with the actual
              murder. Nor were there any human footmarks.”
            </TextNode>

            <TextNode>“Holmes,” I cried, “this is impossible.”</TextNode>

            <TextNode>
              “Admirable!” he said. “A most illuminating remark. It is
              impossible as I state it, and therefore I must in some respect
              have stated it wrong. Yet you saw for yourself. Can you suggest
              any fallacy?”
            </TextNode>

            <TextNode>
              “He could not have fractured his skull in a fall?”
            </TextNode>

            <TextNode>“In a morass, Watson?”</TextNode>

            <TextNode>“I am at my wit's end.”</TextNode>

            <TextNode>
              “Tut, tut; we have solved some worse problems. At least we have
              plenty of material, if we can only use it. Come, then, and, having
              exhausted the Palmer, let us see what the Dunlop with the patched
              cover has to offer us.”
            </TextNode>

            <TextNode>
              We picked up the track and followed it onwards for some distance;
              but soon the moor rose into a long, heather-tufted curve, and we
              left the watercourse behind us. No further help from tracks could
              be hoped for. At the spot where we saw the last of the Dunlop tyre
              it might equally have led to Holdernesse Hall, the stately towers
              of which rose some miles to our left, or to a low, grey village
              which lay in front of us, and marked the position of the
              Chesterfield high road.
            </TextNode>

            <TextNode>
              As we approached the forbidding and squalid inn, with the sign of
              a game-cock above the door, Holmes gave a sudden groan and
              clutched me by the shoulder to save himself from falling. He had
              had one of those violent strains of the ankle which leave a man
              helpless. With difficulty he limped up to the door, where a squat,
              dark, elderly man was smoking a black clay pipe.
            </TextNode>

            <TextNode>“How are you, Mr. Reuben Hayes?” said Holmes.</TextNode>

            <TextNode>
              “Who are you, and how do you get my name so pat?” the countryman
              answered, with a suspicious flash of a pair of cunning eyes.
            </TextNode>

            <TextNode>
              “Well, it's printed on the board above your head. It's easy to see
              a man who is master of his own house. I suppose you haven't such a
              thing as a carriage in your stables?”
            </TextNode>

            <TextNode>“No; I have not.”</TextNode>

            <TextNode>“I can hardly put my foot to the ground.”</TextNode>

            <TextNode>“Don't put it to the ground.”</TextNode>

            <TextNode>“But I can't walk.”</TextNode>

            <TextNode>“Well, then, hop.”</TextNode>

            <TextNode>
              Mr. Reuben Hayes's manner was far from gracious, but Holmes took
              it with admirable good-humour.
            </TextNode>

            <TextNode>
              “Look here, my man,” said he. “This is really rather an awkward
              fix for me. I don't mind how I get on.”
            </TextNode>

            <TextNode>“Neither do I,” said the morose landlord.</TextNode>

            <TextNode>
              “The matter is very important. I would offer you a sovereign for
              the use of a bicycle.”
            </TextNode>

            <TextNode>The landlord pricked up his ears.</TextNode>

            <TextNode>“Where do you want to go?”</TextNode>

            <TextNode>“To Holdernesse Hall.”</TextNode>

            <TextNode>
              “Pals of the Dook, I suppose?” said the landlord, surveying our
              mud-stained garments with ironical eyes.
            </TextNode>

            <TextNode>Holmes laughed good-naturedly.</TextNode>

            <TextNode>“He'll be glad to see us, anyhow.”</TextNode>

            <TextNode>“Why?”</TextNode>

            <TextNode>“Because we bring him news of his lost son.”</TextNode>

            <TextNode>The landlord gave a very visible start.</TextNode>

            <TextNode>“What, you're on his track?”</TextNode>

            <TextNode>
              “He has been heard of in Liverpool. They expect to get him every
              hour.”
            </TextNode>

            <TextNode>
              Again a swift change passed over the heavy, unshaven face. His
              manner was suddenly genial.
            </TextNode>

            <TextNode>
              “I've less reason to wish the Dook well than most men,” said he,
              “for I was his head coachman once, and cruel bad he treated me. It
              was him that sacked me without a character on the word of a lying
              corn-chandler. But I'm glad to hear that the young lord was heard
              of in Liverpool, and I'll help you to take the news to the Hall.”
            </TextNode>

            <TextNode>
              “Thank you,” said Holmes. “We'll have some food first. Then you
              can bring round the bicycle.”
            </TextNode>

            <TextNode>“I haven't got a bicycle.”</TextNode>

            <TextNode>Holmes held up a sovereign.</TextNode>

            <TextNode>
              “I tell you, man, that I haven't got one. I'll let you have two
              horses as far as the Hall.”
            </TextNode>

            <TextNode>
              “Well, well,” said Holmes, “we'll talk about it when we've had
              something to eat.”
            </TextNode>

            <TextNode>
              When we were left alone in the stone-flagged kitchen it was
              astonishing how rapidly that sprained ankle recovered. It was
              nearly nightfall, and we had eaten nothing since early morning, so
              that we spent some time over our meal. Holmes was lost in thought,
              and once or twice he walked over to the window and stared
              earnestly out. It opened on to a squalid courtyard. In the far
              corner was a smithy, where a grimy lad was at work. On the other
              side were the stables. Holmes had sat down again after one of
              these excursions, when he suddenly sprang out of his chair with a
              loud exclamation.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page185;
