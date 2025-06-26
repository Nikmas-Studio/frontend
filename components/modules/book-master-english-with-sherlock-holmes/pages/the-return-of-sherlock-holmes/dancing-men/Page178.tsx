import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import PageWrapper from '@/components/elements/book-master-english-with-sherlock-holmes/PageWrapper';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import dancingMenDark5 from '@/public/images/sherlock-danc-5-dark.jpg';
import dancingMenLight5 from '@/public/images/sherlock-danc-5-light.jpg';
import Image from 'next/image';
import { ReactElement } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page178({
  pageNumber,
  hidePageNumber = false,
  viewportHeight = false,
}: PageProps): ReactElement {
  return (
    <PageWrapper pageNumber={pageNumber} viewportHeight={viewportHeight}>
      <Controls
        pageNumber={hidePageNumber ? undefined : pageNumber}
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;DANCING&nbsp;MEN'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              But there was a delay in that answering telegram, and two days of
              impatience followed, during which Holmes pricked up his ears at
              every ring of the bell. On the evening of the second there came a
              letter from Hilton Cubitt. All was quiet with him, save that a
              long inscription had appeared that morning upon the pedestal of
              the sun-dial. He inclosed a copy of it, which is here reproduced:—
            </TextNode>

            <Image
              className='mx-auto  h-16  w-auto  max-w-[110%]  max-2md:h-auto
                         max-2md:max-w-full  dark:hidden'
              alt='dancing men'
              src={dancingMenLight5}
              quality={100}
            />
            <Image
              className='mx-auto  hidden  h-16  w-auto  max-w-[110%]  
                         max-2md:h-auto  max-2md:max-w-full  dark:block'
              alt='dancing men'
              src={dancingMenDark5}
              quality={100}
            />

            <TextNode className='mt-5  max-2md:mt-2' noIndent>
              Holmes bent over this grotesque frieze for some minutes, and then
              suddenly sprang to his feet with an exclamation of surprise and
              dismay. His face was haggard with anxiety.
            </TextNode>

            <TextNode>
              “We have let this affair go far enough,” said he. “Is there a
              train to North Walsham to-night?”
            </TextNode>

            <TextNode>
              I turned up the time-table. The last had just gone.
            </TextNode>

            <TextNode>
              “Then we shall breakfast early and take the very first in the
              morning,” said Holmes. “Our presence is most urgently needed. Ah!
              here is our expected cablegram. One moment, Mrs. Hudson; there may
              be an answer. No, that is quite as I expected. This message makes
              it even more essential that we should not lose an hour in letting
              Hilton Cubitt know how matters stand, for it is a singular and a
              dangerous web in which our simple Norfolk squire is entangled.”
            </TextNode>

            <TextNode>
              So, indeed, it proved, and as I come to the dark conclusion of a
              story which had seemed to me to be only childish and bizarre I
              experience once again the dismay and horror with which I was
              filled. Would that I had some brighter ending to communicate to my
              readers, but these are the chronicles of fact, and I must follow
              to their dark crisis the strange chain of events which for some
              days made Ridling Thorpe Manor a household word through the length
              and breadth of England.
            </TextNode>

            <TextNode>
              We had hardly alighted at North Walsham, and mentioned the name of
              our destination, when the station-master hurried towards us. “I
              suppose that you are the detectives from London?” said he.
            </TextNode>

            <TextNode>A look of annoyance passed over Holmes's face.</TextNode>

            <TextNode>“What makes you think such a thing?”</TextNode>

            <TextNode>
              “Because Inspector Martin from Norwich has just passed through.
              But maybe you are the surgeons. She's not dead—or wasn't by last
              accounts. You may be in time to save her yet—though it be for the
              gallows.”
            </TextNode>

            <TextNode>Holmes's brow was dark with anxiety.</TextNode>

            <TextNode>
              “We are going to Ridling Thorpe Manor,” said he, “but we have
              heard nothing of what has passed there.”
            </TextNode>

            <TextNode>
              “It's a terrible business,” said the station-master. “They are
              shot, both Mr. Hilton Cubitt and his wife. She shot him and then
              herself—so the servants say. He's dead and her life is despaired
              of. Dear, dear, one of the oldest families in the County of
              Norfolk, and one of the most honoured.”
            </TextNode>

            <TextNode>
              Without a word Holmes hurried to a carriage, and during the long
              seven miles' drive he never opened his mouth. Seldom have I seen
              him so utterly despondent. He had been uneasy during all our
              journey from town, and I had observed that he had turned over the
              morning papers with anxious attention; but now this sudden
              realization of his worst fears left him in a blank melancholy. He
              leaned back in his seat, lost in gloomy speculation. Yet there was
              much around to interest us, for we were passing through as
              singular a country-side as any in England, where a few scattered
              cottages represented the population of to-day, while on every hand
              enormous square-towered churches bristled up from the flat, green
              landscape and told of the glory and prosperity of old East Anglia.
              At last the violet rim of the German Ocean appeared over the green
              edge of the Norfolk coast, and the driver pointed with his whip to
              two old brick and timber gables which projected from a grove of
              trees. “That's Ridling Thorpe Manor,” said he.
            </TextNode>

            <TextNode>
              As we drove up to the porticoed front door I observed in front of
              it, beside the tennis lawn, the black tool-house and the
              pedestalled sun-dial with which we had such strange associations.
              A dapper little man, with a quick, alert manner and a waxed
              moustache, had just descended from a high dog-cart. He introduced
              himself as Inspector Martin, of the Norfolk Constabulary, and he
              was considerably astonished when he heard the name of my
              companion.
            </TextNode>

            <TextNode>
              “Why, Mr. Holmes, the crime was only committed at three this
              morning. How could you hear of it in London and get to the spot as
              soon as I?”
            </TextNode>

            <TextNode>
              “I anticipated it. I came in the hope of preventing it.”
            </TextNode>

            <TextNode>
              “Then you must have important evidence of which we are ignorant,
              for they were said to be a most united couple.”
            </TextNode>

            <TextNode>
              “I have only the evidence of the dancing men,” said Holmes. “I
              will explain the matter to you later. Meanwhile, since it is too
              late to prevent this tragedy, I am very anxious that I should use
              the knowledge which I possess in order to ensure that justice be
              done. Will you associate me in your investigation, or will you
              prefer that I should act independently?”
            </TextNode>

            <TextNode>
              “I should be proud to feel that we were acting together, Mr.
              Holmes,” said the inspector, earnestly.
            </TextNode>

            <TextNode>
              “In that case I should be glad to hear the evidence and to examine
              the premises without an instant of unnecessary delay.”
            </TextNode>

            <TextNode>
              Inspector Martin had the good sense to allow my friend to do
              things in his own fashion, and contented himself with carefully
              noting the results. The local surgeon, an old, white-haired man,
              had just come down from Mrs. Hilton Cubitt's room, and he reported
              that her injuries were serious, but not necessarily fatal. The
              bullet had passed through the front of her brain, and it would
              probably be some time before she could regain consciousness. On
              the question of whether she had been shot or had shot herself he
              would not venture to express any decided opinion. Certainly the
              bullet had been discharged at very close quarters. There was only
              the one pistol found in the room, two barrels of which had been
              emptied. Mr. Hilton Cubitt had been shot through the heart. It was
              equally conceivable that he had shot her and then himself, or that
              she had been the criminal, for the revolver lay upon the floor
              midway between them.
            </TextNode>

            <TextNode>“Has he been moved?” asked Holmes.</TextNode>

            <TextNode>
              “We have moved nothing except the lady. We could not leave her
              lying wounded upon the floor.”
            </TextNode>

            <TextNode>“How long have you been here, doctor?”</TextNode>

            <TextNode>“Since four o'clock.”</TextNode>

            <TextNode>“Anyone else?”</TextNode>

            <TextNode>“Yes, the constable here.”</TextNode>

            <TextNode>“And you have touched nothing?”</TextNode>

            <TextNode>“Nothing.”</TextNode>

            <TextNode>
              “You have acted with great discretion. Who sent for you?”
            </TextNode>

            <TextNode>“The housemaid, Saunders.”</TextNode>

            <TextNode>“Was it she who gave the alarm?”</TextNode>

            <TextNode>“She and Mrs. King, the cook.”</TextNode>

            <TextNode>“Where are they now?”</TextNode>

            <TextNode>“In the kitchen, I believe.”</TextNode>

            <TextNode>
              “Then I think we had better hear their story at once.”
            </TextNode>

            <TextNode>
              The old hall, oak-panelled and high-windowed, had been turned into
              a court of investigation. Holmes sat in a great, old-fashioned
              chair, his inexorable eyes gleaming out of his haggard face. I
              could read in them a set purpose to devote his life to this quest
              until the client whom he had failed to save should at last be
              avenged. The trim Inspector Martin, the old, grey-headed country
              doctor, myself, and a stolid village policeman made up the rest of
              that strange company.
            </TextNode>

            <TextNode>
              The two women told their story clearly enough. They had been
              aroused from their sleep by the sound of an explosion, which had
              been followed a minute later by a second one. They slept in
              adjoining rooms, and Mrs. King had rushed in to Saunders. Together
              they had descended the stairs. The door of the study was open and
              a candle was burning upon the table. Their master lay upon his
              face in the centre of the room. He was quite dead. Near the window
              his wife was crouching, her head leaning against the wall. She was
              horribly wounded, and the side of her face was red with blood. She
              breathed heavily, but was incapable of saying anything. The
              passage, as well as the room, was full of smoke and the smell of
              powder. The window was certainly shut and fastened upon the
              inside. Both women were positive upon the point. They had at once
              sent for the doctor and for the constable. Then, with the aid of
              the groom and the stable-boy, they had conveyed their injured
              mistress to her room. Both she and her husband had occupied the
              bed. She was clad in her dress—he in his dressing-gown, over his
              night clothes. Nothing had been moved in the study. So far as they
              knew there had never been any quarrel between husband and wife.
              They had always looked upon them as a very united couple.
            </TextNode>

            <TextNode>
              These were the main points of the servants' evidence. In answer to
              Inspector Martin they were clear that every door was fastened upon
              the inside, and that no one could have escaped from the house. In
              answer to Holmes they both remembered that they were conscious of
              the smell of powder from the moment that they ran out of their
              rooms upon the top floor. “I commend that fact very carefully to
              your attention,” said Holmes to his professional colleague. “And
              now I think that we are in a position to undertake a thorough
              examination of the room.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              The study proved to be a small chamber, lined on three sides with
              books, and with a writing-table facing an ordinary window, which
              looked out upon the garden. Our first attention was given to the
              body of the unfortunate squire, whose huge frame lay stretched
              across the room. His disordered dress showed that he had been
              hastily aroused from sleep. The bullet had been fired at him from
              the front, and had remained in his body after penetrating the
              heart. His death had certainly been instantaneous and painless.
              There was no powder-marking either upon his dressing-gown or on
              his hands. According to the country surgeon the lady had stains
              upon her face, but none upon her hand.
            </TextNode>

            <TextNode>
              “The absence of the latter means nothing, though its presence may
              mean everything,” said Holmes. “Unless the powder from a
              badly-fitting cartridge happens to spurt backwards, one may fire
              many shots without leaving a sign. I would suggest that Mr.
              Cubitt's body may now be removed. I suppose, doctor, you have not
              recovered the bullet which wounded the lady?”
            </TextNode>

            <TextNode>
              “A serious operation will be necessary before that can be done.
              But there are still four cartridges in the revolver. Two have been
              fired and two wounds inflicted, so that each bullet can be
              accounted for.”
            </TextNode>

            <TextNode>
              “So it would seem,” said Holmes. “Perhaps you can account also for
              the bullet which has so obviously struck the edge of the window?”
            </TextNode>

            <TextNode>
              He had turned suddenly, and his long, thin finger was pointing to
              a hole which had been drilled right through the lower window-sash
              about an inch above the bottom.
            </TextNode>

            <TextNode>
              “By George!” cried the inspector. “How ever did you see that?”
            </TextNode>

            <TextNode>“Because I looked for it.”</TextNode>

            <TextNode>
              “Wonderful!” said the country doctor. “You are certainly right,
              sir. Then a third shot has been fired, and therefore a third
              person must have been present. But who could that have been and
              how could he have got away?”
            </TextNode>

            <TextNode>
              “That is the problem which we are now about to solve,” said
              Sherlock Holmes. “You remember, Inspector Martin, when the
              servants said that on leaving their room they were at once
              conscious of a smell of powder I remarked that the point was an
              extremely important one?”
            </TextNode>

            <TextNode>
              “Yes, sir; but I confess I did not quite follow you.”
            </TextNode>

            <TextNode>
              “It suggested that at the time of the firing the window as well as
              the door of the room had been open. Otherwise the fumes of powder
              could not have been blown so rapidly through the house. A draught
              in the room was necessary for that. Both door and window were only
              open for a very short time, however.”
            </TextNode>

            <TextNode>“How do you prove that?”</TextNode>

            <TextNode>“Because the candle has not guttered.”</TextNode>

            <TextNode>“Capital!” cried the inspector. “Capital!”</TextNode>

            <TextNode>
              “Feeling sure that the window had been open at the time of the
              tragedy I conceived that there might have been a third person in
              the affair, who stood outside this opening and fired through it.
              Any shot directed at this person might hit the sash. I looked, and
              there, sure enough, was the bullet mark!”
            </TextNode>

            <TextNode>
              “But how came the window to be shut and fastened?”
            </TextNode>

            <TextNode>
              “The woman's first instinct would be to shut and fasten the
              window. But, halloa! what is this?”
            </TextNode>

            <TextNode>
              It was a lady's hand-bag which stood upon the study table—a trim
              little hand-bag of crocodile-skin and silver. Holmes opened it and
              turned the contents out. There were twenty fifty-pound notes of
              the Bank of England, held together by an india-rubber band—nothing
              else.
            </TextNode>

            <TextNode>
              “This must be preserved, for it will figure in the trial,” said
              Holmes, as he handed the bag with its contents to the inspector.
              “It is now necessary that we should try to throw some light upon
              this third bullet, which has clearly, from the splintering of the
              wood, been fired from inside the room. I should like to see Mrs.
              King, the cook, again. You said, Mrs. King, that you were awakened
              by a loud explosion. When you said that, did you mean that it
              seemed to you to be louder than the second one?”
            </TextNode>

            <TextNode>
              “Well, sir, it wakened me from my sleep, and so it is hard to
              judge. But it did seem very loud.”
            </TextNode>

            <TextNode>
              “You don't think that it might have been two shots fired almost at
              the same instant?”
            </TextNode>

            <TextNode>“I am sure I couldn't say, sir.”</TextNode>

            <TextNode>
              “I believe that it was undoubtedly so. I rather think, Inspector
              Martin, that we have now exhausted all that this room can teach
              us. If you will kindly step round with me, we shall see what fresh
              evidence the garden has to offer.”
            </TextNode>

            <TextNode>
              A flower-bed extended up to the study window, and we all broke
              into an exclamation as we approached it. The flowers were trampled
              down, and the soft soil was imprinted all over with footmarks.
              Large, masculine feet they were, with peculiarly long, sharp toes.
              Holmes hunted about among the grass and leaves like a retriever
              after a wounded bird. Then, with a cry of satisfaction, he bent
              forward and picked up a little brazen cylinder.
            </TextNode>

            <TextNode>
              “I thought so,” said he; “the revolver had an ejector, and here is
              the third cartridge. I really think, Inspector Martin, that our
              case is almost complete.”
            </TextNode>

            <TextNode>
              The country inspector's face had shown his intense amazement at
              the rapid and masterful progress of Holmes's investigation. At
              first he had shown some disposition to assert his own position;
              but now he was overcome with admiration and ready to follow
              without question wherever Holmes led.
            </TextNode>

            <TextNode>“Whom do you suspect?” he asked.</TextNode>

            <TextNode>
              “I'll go into that later. There are several points in this problem
              which I have not been able to explain to you yet. Now that I have
              got so far I had best proceed on my own lines, and then clear the
              whole matter up once and for all.”
            </TextNode>

            <TextNode>
              “Just as you wish, Mr. Holmes, so long as we get our man.”
            </TextNode>

            <TextNode>
              “I have no desire to make mysteries, but it is impossible at the
              moment of action to enter into long and complex explanations. I
              have the threads of this affair all in my hand. Even if this lady
              should never recover consciousness we can still reconstruct the
              events of last night and ensure that justice be done. First of all
              I wish to know whether there is any inn in this neighbourhood
              known as ‘Elrige's’?”
            </TextNode>

            <TextNode>
              The servants were cross-questioned, but none of them had heard of
              such a place. The stable-boy threw a light upon the matter by
              remembering that a farmer of that name lived some miles off in the
              direction of East Ruston.
            </TextNode>

            <TextNode>“Is it a lonely farm?”</TextNode>

            <TextNode>“Very lonely, sir.”</TextNode>

            <TextNode>
              “Perhaps they have not heard yet of all that happened here during
              the night?”
            </TextNode>

            <TextNode>“Maybe not, sir.”</TextNode>

            <TextNode>
              Holmes thought for a little and then a curious smile played over
              his face.
            </TextNode>

            <TextNode>
              “Saddle a horse, my lad,” said he. “I shall wish you to take a
              note to Elrige's Farm.”
            </TextNode>

            <TextNode>
              He took from his pocket the various slips of the dancing men. With
              these in front of him he worked for some time at the study-table.
              Finally he handed a note to the boy, with directions to put it
              into the hands of the person to whom it was addressed, and
              especially to answer no questions of any sort which might be put
              to him. I saw the outside of the note, addressed in straggling,
              irregular characters, very unlike Holmes's usual precise hand. It
              was consigned to Mr. Abe Slaney, Elrige's Farm, East Ruston,
              Norfolk.
            </TextNode>

            <TextNode>
              “I think, inspector,” Holmes remarked, “that you would do well to
              telegraph for an escort, as, if my calculations prove to be
              correct, you may have a particularly dangerous prisoner to convey
              to the county jail. The boy who takes this note could no doubt
              forward your telegram. If there is an afternoon train to town,
              Watson, I think we should do well to take it, as I have a chemical
              analysis of some interest to finish, and this investigation draws
              rapidly to a close.”
            </TextNode>

            <TextNode>
              When the youth had been dispatched with the note, Sherlock Holmes
              gave his instructions to the servants. If any visitor were to call
              asking for Mrs. Hilton Cubitt no information should be given as to
              her condition, but he was to be shown at once into the
              drawing-room. He impressed these points upon them with the utmost
              earnestness. Finally he led the way into the drawing-room with the
              remark that the business was now out of our hands, and that we
              must while away the time as best we might until we could see what
              was in store for us. The doctor had departed to his patients, and
              only the inspector and myself remained.
            </TextNode>

            <TextNode>
              “I think that I can help you to pass an hour in an interesting and
              profitable manner,” said Holmes, drawing his chair up to the table
              and spreading out in front of him the various papers upon which
              were recorded the antics of the dancing men. “As to you, friend
              Watson, I owe you every atonement for having allowed your natural
              curiosity to remain so long unsatisfied. To you, inspector, the
              whole incident may appeal as a remarkable professional study. I
              must tell you first of all the interesting circumstances connected
              with the previous consultations which Mr. Hilton Cubitt has had
              with me in Baker Street.” He then shortly recapitulated the facts
              which have already been recorded. “I have here in front of me
              these singular productions, at which one might smile had they not
              proved themselves to be the fore-runners of so terrible a tragedy.
              I am fairly familiar with all forms of secret writings, and am
              myself the author of a trifling monograph upon the subject, in
              which I analyze one hundred and sixty separate ciphers; but I
              confess that this is entirely new to me. The object of those who
              invented the system has apparently been to conceal that these
              characters convey a message, and to give the idea that they are
              the mere random sketches of children.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </PageWrapper>
  );
}

export default Page178;
