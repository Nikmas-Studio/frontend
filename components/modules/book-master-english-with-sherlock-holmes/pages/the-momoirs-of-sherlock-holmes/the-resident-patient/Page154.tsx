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

function Page154({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE RESIDENT PATIENT'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              I saw in the gaslight that Holmes wore an amused smile at this
              brilliant departure of mine.
            </TextNode>

            <TextNode>
              “My dear fellow,” said he, “it was one of the first solutions
              which occurred to me, but I was soon able to corroborate the
              doctor's tale. This young man has left prints upon the
              stair-carpet which made it quite superfluous for me to ask to see
              those which he had made in the room. When I tell you that his
              shoes were square-toed instead of being pointed like
              Blessington's, and were quite an inch and a third longer than the
              doctor's, you will acknowledge that there can be no doubt as to
              his individuality. But we may sleep on it now, for I shall be
              surprised if we do not hear something further from Brook Street in
              the morning.”
            </TextNode>

            <TextNode>
              Sherlock Holmes's prophecy was soon fulfilled, and in a dramatic
              fashion. At half-past seven next morning, in the first glimmer of
              daylight, I found him standing by my bedside in his dressing-gown.
            </TextNode>

            <TextNode>
              “There's a brougham waiting for us, Watson,” said he.
            </TextNode>

            <TextNode>“What's the matter, then?”</TextNode>

            <TextNode>“The Brook Street business.”</TextNode>

            <TextNode>“Any fresh news?”</TextNode>

            <TextNode>
              “Tragic, but ambiguous,” said he, pulling up the blind. “Look at
              this—a sheet from a note-book, with ‘For God's sake come at
              once—P. T.,’ scrawled upon it in pencil. Our friend, the doctor,
              was hard put to it when he wrote this. Come along, my dear fellow,
              for it's an urgent call.”
            </TextNode>

            <TextNode>
              In a quarter of an hour or so we were back at the physician's
              house. He came running out to meet us with a face of horror.
            </TextNode>

            <TextNode>
              “Oh, such a business!” he cried, with his hands to his temples.
            </TextNode>

            <TextNode>“What then?”</TextNode>

            <TextNode>“Blessington has committed suicide!”</TextNode>

            <TextNode>Holmes whistled.</TextNode>

            <TextNode>“Yes, he hanged himself during the night.”</TextNode>

            <TextNode>
              We had entered, and the doctor had preceded us into what was
              evidently his waiting-room.
            </TextNode>

            <TextNode>
              “I really hardly know what I am doing,” he cried. “The police are
              already upstairs. It has shaken me most dreadfully.”
            </TextNode>

            <TextNode>“When did you find it out?”</TextNode>

            <TextNode>
              “He has a cup of tea taken in to him early every morning. When the
              maid entered, about seven, there the unfortunate fellow was
              hanging in the middle of the room. He had tied his cord to the
              hook on which the heavy lamp used to hang, and he had jumped off
              from the top of the very box that he showed us yesterday.”
            </TextNode>

            <TextNode>Holmes stood for a moment in deep thought.</TextNode>

            <TextNode>
              “With your permission,” said he at last, “I should like to go
              upstairs and look into the matter.”
            </TextNode>

            <TextNode>We both ascended, followed by the doctor.</TextNode>

            <TextNode>
              It was a dreadful sight which met us as we entered the bedroom
              door. I have spoken of the impression of flabbiness which this man
              Blessington conveyed. As he dangled from the hook it was
              exaggerated and intensified until he was scarce human in his
              appearance. The neck was drawn out like a plucked chicken's,
              making the rest of him seem the more obese and unnatural by the
              contrast. He was clad only in his long night-dress, and his
              swollen ankles and ungainly feet protruded starkly from beneath
              it. Beside him stood a smart-looking police-inspector, who was
              taking notes in a pocket-book.
            </TextNode>

            <TextNode>
              “Ah, Mr. Holmes,” said he, heartily, as my friend entered, “I am
              delighted to see you.”
            </TextNode>

            <TextNode>
              “Good-morning, Lanner,” answered Holmes; “you won't think me an
              intruder, I am sure. Have you heard of the events which led up to
              this affair?”
            </TextNode>

            <TextNode>“Yes, I heard something of them.”</TextNode>

            <TextNode>“Have you formed any opinion?”</TextNode>

            <TextNode>
              “As far as I can see, the man has been driven out of his senses by
              fright. The bed has been well slept in, you see. There's his
              impression deep enough. It's about five in the morning, you know,
              that suicides are most common. That would be about his time for
              hanging himself. It seems to have been a very deliberate affair.”
            </TextNode>

            <TextNode>
              “I should say that he has been dead about three hours, judging by
              the rigidity of the muscles,” said I.
            </TextNode>

            <TextNode>
              “Noticed anything peculiar about the room?” asked Holmes.
            </TextNode>

            <TextNode>
              “Found a screw-driver and some screws on the wash-hand stand.
              Seems to have smoked heavily during the night, too. Here are four
              cigar-ends that I picked out of the fireplace.”
            </TextNode>

            <TextNode>
              “Hum!” said Holmes, “have you got his cigar-holder?”
            </TextNode>

            <TextNode>“No, I have seen none.”</TextNode>

            <TextNode>“His cigar-case, then?”</TextNode>

            <TextNode>“Yes, it was in his coat-pocket.”</TextNode>

            <TextNode>
              Holmes opened it and smelled the single cigar which it contained.
            </TextNode>

            <TextNode>
              “Oh, this is an Havana, and these others are cigars of the
              peculiar sort which are imported by the Dutch from their East
              Indian colonies. They are usually wrapped in straw, you know, and
              are thinner for their length than any other brand.” He picked up
              the four ends and examined them with his pocket-lens.
            </TextNode>

            <TextNode>
              “Two of these have been smoked from a holder and two without,”
              said he. “Two have been cut by a not very sharp knife, and two
              have had the ends bitten off by a set of excellent teeth. This is
              no suicide, Mr. Lanner. It is a very deeply planned and
              cold-blooded murder.”
            </TextNode>

            <TextNode>“Impossible!” cried the inspector.</TextNode>

            <TextNode>“And why?”</TextNode>

            <TextNode>
              “Why should any one murder a man in so clumsy a fashion as by
              hanging him?”
            </TextNode>

            <TextNode>“That is what we have to find out.”</TextNode>

            <TextNode>“How could they get in?”</TextNode>

            <TextNode>“Through the front door.”</TextNode>

            <TextNode>“It was barred in the morning.”</TextNode>

            <TextNode>“Then it was barred after them.”</TextNode>

            <TextNode>“How do you know?”</TextNode>

            <TextNode>
              “I saw their traces. Excuse me a moment, and I may be able to give
              you some further information about it.”
            </TextNode>

            <TextNode>
              He went over to the door, and turning the lock he examined it in
              his methodical way. Then he took out the key, which was on the
              inside, and inspected that also. The bed, the carpet, the chairs
              the mantelpiece, the dead body, and the rope were each in turn
              examined, until at last he professed himself satisfied, and with
              my aid and that of the inspector cut down the wretched object and
              laid it reverently under a sheet.
            </TextNode>

            <TextNode>“How about this rope?” he asked.</TextNode>

            <TextNode>
              “It is cut off this,” said Dr. Trevelyan, drawing a large coil
              from under the bed. “He was morbidly nervous of fire, and always
              kept this beside him, so that he might escape by the window in
              case the stairs were burning.”
            </TextNode>

            <TextNode>
              “That must have saved them trouble,” said Holmes, thoughtfully.
              “Yes, the actual facts are very plain, and I shall be surprised if
              by the afternoon I cannot give you the reasons for them as well. I
              will take this photograph of Blessington, which I see upon the
              mantelpiece, as it may help me in my inquiries.”
            </TextNode>

            <TextNode>
              “But you have told us nothing!” cried the doctor.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Oh, there can be no doubt as to the sequence of events,” said
              Holmes. “There were three of them in it: the young man, the old
              man, and a third, to whose identity I have no clue. The first two,
              I need hardly remark, are the same who masqueraded as the Russian
              count and his son, so we can give a very full description of them.
              They were admitted by a confederate inside the house. If I might
              offer you a word of advice, Inspector, it would be to arrest the
              page, who, as I understand, has only recently come into your
              service, Doctor.”
            </TextNode>

            <TextNode>
              “The young imp cannot be found,” said Dr. Trevelyan; “the maid and
              the cook have just been searching for him.”
            </TextNode>

            <TextNode>Holmes shrugged his shoulders.</TextNode>

            <TextNode>
              “He has played a not unimportant part in this drama,” said he.
              “The three men having ascended the stairs, which they did on
              tiptoe, the elder man first, the younger man second, and the
              unknown man in the rear—”
            </TextNode>

            <TextNode>“My dear Holmes!” I ejaculated.</TextNode>

            <TextNode>
              “Oh, there could be no question as to the superimposing of the
              footmarks. I had the advantage of learning which was which last
              night. They ascended, then, to Mr. Blessington's room, the door of
              which they found to be locked. With the help of a wire, however,
              they forced round the key. Even without the lens you will
              perceive, by the scratches on this ward, where the pressure was
              applied.
            </TextNode>

            <TextNode>
              “On entering the room their first proceeding must have been to gag
              Mr. Blessington. He may have been asleep, or he may have been so
              paralyzed with terror as to have been unable to cry out. These
              walls are thick, and it is conceivable that his shriek, if he had
              time to utter one, was unheard.
            </TextNode>

            <TextNode>
              “Having secured him, it is evident to me that a consultation of
              some sort was held. Probably it was something in the nature of a
              judicial proceeding. It must have lasted for some time, for it was
              then that these cigars were smoked. The older man sat in that
              wicker chair; it was he who used the cigar-holder. The younger man
              sat over yonder; he knocked his ash off against the chest of
              drawers. The third fellow paced up and down. Blessington, I think,
              sat upright in the bed, but of that I cannot be absolutely
              certain.
            </TextNode>

            <TextNode>
              “Well, it ended by their taking Blessington and hanging him. The
              matter was so prearranged that it is my belief that they brought
              with them some sort of block or pulley which might serve as a
              gallows. That screw-driver and those screws were, as I conceive,
              for fixing it up. Seeing the hook, however they naturally saved
              themselves the trouble. Having finished their work they made off,
              and the door was barred behind them by their confederate.”
            </TextNode>

            <TextNode>
              We had all listened with the deepest interest to this sketch of
              the night's doings, which Holmes had deduced from signs so subtle
              and minute that, even when he had pointed them out to us, we could
              scarcely follow him in his reasoning. The inspector hurried away
              on the instant to make inquiries about the page, while Holmes and
              I returned to Baker Street for breakfast.
            </TextNode>

            <TextNode>
              “I'll be back by three,” said he, when we had finished our meal.
              “Both the inspector and the doctor will meet me here at that hour,
              and I hope by that time to have cleared up any little obscurity
              which the case may still present.”
            </TextNode>

            <TextNode>
              Our visitors arrived at the appointed time, but it was a quarter
              to four before my friend put in an appearance. From his expression
              as he entered, however, I could see that all had gone well with
              him.
            </TextNode>

            <TextNode>“Any news, Inspector?”</TextNode>

            <TextNode>“We have got the boy, sir.”</TextNode>

            <TextNode>“Excellent, and I have got the men.”</TextNode>

            <TextNode>“You have got them!” we cried, all three.</TextNode>

            <TextNode>
              “Well, at least I have got their identity. This so-called
              Blessington is, as I expected, well known at headquarters, and so
              are his assailants. Their names are Biddle, Hayward, and Moffat.”
            </TextNode>

            <TextNode>
              “The Worthingdon bank gang,” cried the inspector.
            </TextNode>

            <TextNode>“Precisely,” said Holmes.</TextNode>

            <TextNode>“Then Blessington must have been Sutton.”</TextNode>

            <TextNode>“Exactly,” said Holmes.</TextNode>

            <TextNode>
              “Why, that makes it as clear as crystal,” said the inspector.
            </TextNode>

            <TextNode>
              But Trevelyan and I looked at each other in bewilderment.
            </TextNode>

            <TextNode>
              “You must surely remember the great Worthingdon bank business,”
              said Holmes. “Five men were in it—these four and a fifth called
              Cartwright. Tobin, the care-taker, was murdered, and the thieves
              got away with seven thousand pounds. This was in 1875. They were
              all five arrested, but the evidence against them was by no means
              conclusive. This Blessington or Sutton, who was the worst of the
              gang, turned informer. On his evidence Cartwright was hanged and
              the other three got fifteen years apiece. When they got out the
              other day, which was some years before their full term, they set
              themselves, as you perceive, to hunt down the traitor and to
              avenge the death of their comrade upon him. Twice they tried to
              get at him and failed; a third time, you see, it came off. Is
              there anything further which I can explain, Dr. Trevelyan?”
            </TextNode>

            <TextNode>
              “I think you have made it all remarkable clear,” said the doctor.
              “No doubt the day on which he was perturbed was the day when he
              had seen of their release in the newspapers.”
            </TextNode>

            <TextNode>
              “Quite so. His talk about a burglary was the merest blind.”
            </TextNode>

            <TextNode>“But why could he not tell you this?”</TextNode>

            <TextNode>
              “Well, my dear sir, knowing the vindictive character of his old
              associates, he was trying to hide his own identity from everybody
              as long as he could. His secret was a shameful one, and he could
              not bring himself to divulge it. However, wretch as he was, he was
              still living under the shield of British law, and I have no doubt,
              Inspector, that you will see that, though that shield may fail to
              guard, the sword of justice is still there to avenge.”
            </TextNode>

            <TextNode>
              Such were the singular circumstances in connection with the
              Resident Patient and the Brook Street Doctor. From that night
              nothing has been seen of the three murderers by the police, and it
              is surmised at Scotland Yard that they were among the passengers
              of the ill-fated steamer{' '}
              <span className='italic'>Norah&nbsp;Creina</span>, which was lost
              some years ago with all hands upon the Portuguese coast, some
              leagues to the north of Oporto. The proceedings against the page
              broke down for want of evidence, and the Brook Street Mystery, as
              it was called, has never until now been fully dealt with in any
              public print.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page154;
