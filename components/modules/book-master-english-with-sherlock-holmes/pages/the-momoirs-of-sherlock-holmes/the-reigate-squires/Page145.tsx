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
import scrapOfPaperDark from '@/public/images/sherlock-reig-dark.png';
import scrapOfPaperLight from '@/public/images/sherlock-reig-light.png';
import { BookVersion } from '@/types/book-version';
import Image from 'next/image';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page145({
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
        title='THE REIGATE SQUIRES'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              It was some time before the health of my friend Mr. Sherlock
              Holmes recovered from the strain caused by his immense exertions
              in the spring of '87. The whole question of the Netherland-Sumatra
              Company and of the colossal schemes of Baron Maupertuis are too
              recent in the minds of the public, and are too intimately
              concerned with politics and finance to be fitting subjects for
              this series of sketches. They led, however, in an indirect fashion
              to a singular and complex problem which gave my friend an
              opportunity of demonstrating the value of a fresh weapon among the
              many with which he waged his life-long battle against crime.
            </TextNode>

            <TextNode>
              On referring to my notes I see that it was upon the 14th of April
              that I received a telegram from Lyons which informed me that
              Holmes was lying ill in the Hotel Dulong. Within twenty-four hours
              I was in his sick-room, and was relieved to find that there was
              nothing formidable in his symptoms. Even his iron constitution,
              however, had broken down under the strain of an investigation
              which had extended over two months, during which period he had
              never worked less than fifteen hours a day, and had more than
              once, as he assured me, kept to his task for five days at a
              stretch. Even the triumphant issue of his labors could not save
              him from reaction after so terrible an exertion, and at a time
              when Europe was ringing with his name and when his room was
              literally ankle-deep with congratulatory telegrams I found him a
              prey to the blackest depression. Even the knowledge that he had
              succeeded where the police of three countries had failed, and that
              he had outmanoeuvred at every point the most accomplished swindler
              in Europe, was insufficient to rouse him from his nervous
              prostration.
            </TextNode>

            <TextNode>
              Three days later we were back in Baker Street together; but it was
              evident that my friend would be much the better for a change, and
              the thought of a week of spring time in the country was full of
              attractions to me also. My old friend, Colonel Hayter, who had
              come under my professional care in Afghanistan, had now taken a
              house near Reigate in Surrey, and had frequently asked me to come
              down to him upon a visit. On the last occasion he had remarked
              that if my friend would only come with me he would be glad to
              extend his hospitality to him also. A little diplomacy was needed,
              but when Holmes understood that the establishment was a bachelor
              one, and that he would be allowed the fullest freedom, he fell in
              with my plans and a week after our return from Lyons we were under
              the Colonel's roof. Hayter was a fine old soldier who had seen
              much of the world, and he soon found, as I had expected, that
              Holmes and he had much in common.
            </TextNode>

            <TextNode>
              On the evening of our arrival we were sitting in the Colonel's
              gun-room after dinner, Holmes stretched upon the sofa, while
              Hayter and I looked over his little armory of Eastern weapons.
            </TextNode>

            <TextNode>
              “By the way,” said he suddenly, “I think I'll take one of these
              pistols upstairs with me in case we have an alarm.”
            </TextNode>

            <TextNode>“An alarm!” said I.</TextNode>

            <TextNode>
              “Yes, we've had a scare in this part lately. Old Acton, who is one
              of our county magnates, had his house broken into last Monday. No
              great damage done, but the fellows are still at large.”
            </TextNode>

            <TextNode>
              “No clue?” asked Holmes, cocking his eye at the Colonel.
            </TextNode>

            <TextNode>
              “None as yet. But the affair is a pretty one, one of our little
              country crimes, which must seem too small for your attention, Mr.
              Holmes, after this great international affair.”
            </TextNode>

            <TextNode>
              Holmes waved away the compliment, though his smile showed that it
              had pleased him.
            </TextNode>

            <TextNode>“Was there any feature of interest?”</TextNode>

            <TextNode>
              “I fancy not. The thieves ransacked the library and got very
              little for their pains. The whole place was turned upside down,
              drawers burst open, and presses ransacked, with the result that an
              odd volume of Pope's <span className='italic'>Homer</span>, two
              plated candlesticks, an ivory letter-weight, a small oak
              barometer, and a ball of twine are all that have vanished.”
            </TextNode>

            <TextNode>
              “What an extraordinary assortment!” I exclaimed.
            </TextNode>

            <TextNode>
              “Oh, the fellows evidently grabbed hold of everything they could
              get.”
            </TextNode>

            <TextNode>Holmes grunted from the sofa.</TextNode>

            <TextNode>
              “The county police ought to make something of that,” said he;
              “why, it is surely obvious that—”
            </TextNode>

            <TextNode>But I held up a warning finger.</TextNode>

            <TextNode>
              “You are here for a rest, my dear fellow. For Heaven's sake don't
              get started on a new problem when your nerves are all in shreds.”
            </TextNode>

            <TextNode>
              Holmes shrugged his shoulders with a glance of comic resignation
              towards the Colonel, and the talk drifted away into less dangerous
              channels.
            </TextNode>

            <TextNode>
              It was destined, however, that all my professional caution should
              be wasted, for next morning the problem obtruded itself upon us in
              such a way that it was impossible to ignore it, and our country
              visit took a turn which neither of us could have anticipated. We
              were at breakfast when the Colonel's butler rushed in with all his
              propriety shaken out of him.
            </TextNode>

            <TextNode>
              “Have you heard the news, sir?” he gasped. “At the Cunningham's
              sir!”
            </TextNode>

            <TextNode>
              “Burglary!” cried the Colonel, with his coffee-cup in mid-air.
            </TextNode>

            <TextNode>“Murder!”</TextNode>

            <TextNode>
              The Colonel whistled. “By Jove!” said he. “Who's killed, then? The
              J.P. or his son?”
            </TextNode>

            <TextNode>
              “Neither, sir. It was William the coachman. Shot through the
              heart, sir, and never spoke again.”
            </TextNode>

            <TextNode>“Who shot him, then?”</TextNode>

            <TextNode>
              “The burglar, sir. He was off like a shot and got clean away. He'd
              just broke in at the pantry window when William came on him and
              met his end in saving his master's property.”
            </TextNode>

            <TextNode>“What time?”</TextNode>

            <TextNode>
              “It was last night, sir, somewhere about twelve.”
            </TextNode>

            <TextNode>
              “Ah, then, we'll step over afterwards,” said the Colonel, coolly
              settling down to his breakfast again. “It's a baddish business,”
              he added when the butler had gone; “he's our leading man about
              here, is old Cunningham, and a very decent fellow too. He'll be
              cut up over this, for the man has been in his service for years
              and was a good servant. It's evidently the same villains who broke
              into Acton's.”
            </TextNode>

            <TextNode>
              “And stole that very singular collection,” said Holmes,
              thoughtfully.
            </TextNode>

            <TextNode>“Precisely.”</TextNode>

            <TextNode>
              “Hum! It may prove the simplest matter in the world, but all the
              same at first glance this is just a little curious, is it not? A
              gang of burglars acting in the country might be expected to vary
              the scene of their operations, and not to crack two cribs in the
              same district within a few days. When you spoke last night of
              taking precautions I remember that it passed through my mind that
              this was probably the last parish in England to which the thief or
              thieves would be likely to turn their attention—which shows that I
              have still much to learn.”
            </TextNode>

            <TextNode>
              “I fancy it's some local practitioner,” said the Colonel. “In that
              case, of course, Acton's and Cunningham's are just the places he
              would go for, since they are far the largest about here.”
            </TextNode>

            <TextNode>“And richest?”</TextNode>

            <TextNode>
              “Well, they ought to be, but they've had a lawsuit for some years
              which has sucked the blood out of both of them, I fancy. Old Acton
              has some claim on half Cunningham's estate, and the lawyers have
              been at it with both hands.”
            </TextNode>

            <TextNode>
              “If it's a local villain there should not be much difficulty in
              running him down,” said Holmes with a yawn. “All right, Watson, I
              don't intend to meddle.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Inspector Forrester, sir,” said the butler, throwing open the
              door.
            </TextNode>

            <TextNode>
              The official, a smart, keen-faced young fellow, stepped into the
              room. “Good-morning, Colonel,” said he; “I hope I don't intrude,
              but we hear that Mr. Holmes of Baker Street is here.”
            </TextNode>

            <TextNode>
              The Colonel waved his hand towards my friend, and the Inspector
              bowed.
            </TextNode>

            <TextNode>
              “We thought that perhaps you would care to step across, Mr.
              Holmes.”
            </TextNode>

            <TextNode>
              “The fates are against you, Watson,” said he, laughing. “We were
              chatting about the matter when you came in, Inspector. Perhaps you
              can let us have a few details.” As he leaned back in his chair in
              the familiar attitude I knew that the case was hopeless.
            </TextNode>

            <TextNode>
              “We had no clue in the Acton affair. But here we have plenty to go
              on, and there's no doubt it is the same party in each case. The
              man was seen.”
            </TextNode>

            <TextNode>“Ah!”</TextNode>

            <TextNode>
              “Yes, sir. But he was off like a deer after the shot that killed
              poor William Kirwan was fired. Mr. Cunningham saw him from the
              bedroom window, and Mr. Alec Cunningham saw him from the back
              passage. It was quarter to twelve when the alarm broke out. Mr.
              Cunningham had just got into bed, and Mr. Alec was smoking a pipe
              in his dressing-gown. They both heard William the coachman calling
              for help, and Mr. Alec ran down to see what was the matter. The
              back door was open, and as he came to the foot of the stairs he
              saw two men wrestling together outside. One of them fired a shot,
              the other dropped, and the murderer rushed across the garden and
              over the hedge. Mr. Cunningham, looking out of his bedroom, saw
              the fellow as he gained the road, but lost sight of him at once.
              Mr. Alec stopped to see if he could help the dying man, and so the
              villain got clean away. Beyond the fact that he was a middle-sized
              man and dressed in some dark stuff, we have no personal clue; but
              we are making energetic inquiries, and if he is a stranger we
              shall soon find him out.”
            </TextNode>

            <TextNode>
              “What was this William doing there? Did he say anything before he
              died?”
            </TextNode>

            <TextNode>
              “Not a word. He lives at the lodge with his mother, and as he was
              a very faithful fellow we imagine that he walked up to the house
              with the intention of seeing that all was right there. Of course
              this Acton business has put every one on their guard. The robber
              must have just burst open the door—the lock has been forced—when
              William came upon him.”
            </TextNode>

            <TextNode>
              “Did William say anything to his mother before going out?”
            </TextNode>

            <TextNode>
              “She is very old and deaf, and we can get no information from her.
              The shock has made her half-witted, but I understand that she was
              never very bright. There is one very important circumstance,
              however. Look at this!”
            </TextNode>

            <TextNode>
              He took a small piece of torn paper from a note-book and spread it
              out upon his knee.
            </TextNode>

            <TextNode>
              “This was found between the finger and thumb of the dead man. It
              appears to be a fragment torn from a larger sheet. You will
              observe that the hour mentioned upon it is the very time at which
              the poor fellow met his fate. You see that his murderer might have
              torn the rest of the sheet from him or he might have taken this
              fragment from the murderer. It reads almost as though it were an
              appointment.”
            </TextNode>

            <TextNode>
              Holmes took up the scrap of paper, a facsimile of which is here
              reproduced:
            </TextNode>
            <Image
              className='h-[15rem]  max-2md:h-auto  w-auto  mx-auto  dark:hidden'
              alt='the scrap of paper'
              src={scrapOfPaperLight}
              quality={100}
            />
            <Image
              className='h-[15rem]  max-2md:h-auto  w-auto  mx-auto  hidden  dark:block'
              alt='the scrap of paper'
              src={scrapOfPaperDark}
              quality={100}
            />
            <TextNode className='mt-3' noIndent>
              “Presuming that it is an appointment,” continued the Inspector,
              “it is of course a conceivable theory that this William
              Kirwan—though he had the reputation of being an honest man, may
              have been in league with the thief. He may have met him there, may
              even have helped him to break in the door, and then they may have
              fallen out between themselves.”
            </TextNode>

            <TextNode>
              “This writing is of extraordinary interest,” said Holmes, who had
              been examining it with intense concentration. “These are much
              deeper waters than I had thought.” He sank his head upon his
              hands, while the Inspector smiled at the effect which his case had
              had upon the famous London specialist.
            </TextNode>

            <TextNode>
              “Your last remark,” said Holmes, presently, “as to the possibility
              of there being an understanding between the burglar and the
              servant, and this being a note of appointment from one to the
              other, is an ingenious and not entirely impossible supposition.
              But this writing opens up—” He sank his head into his hands again
              and remained for some minutes in the deepest thought. When he
              raised his face again, I was surprised to see that his cheek was
              tinged with color, and his eyes as bright as before his illness.
              He sprang to his feet with all his old energy.
            </TextNode>

            <TextNode>
              “I'll tell you what,” said he, “I should like to have a quiet
              little glance into the details of this case. There is something in
              it which fascinates me extremely. If you will permit me, Colonel,
              I will leave my friend Watson and you, and I will step round with
              the Inspector to test the truth of one or two little fancies of
              mine. I will be with you again in half an hour.”
            </TextNode>

            <TextNode>
              An hour and half had elapsed before the Inspector returned alone.
            </TextNode>

            <TextNode>
              “Mr. Holmes is walking up and down in the field outside,” said he.
              “He wants us all four to go up to the house together.”
            </TextNode>

            <TextNode>“To Mr. Cunningham's?”</TextNode>

            <TextNode>“Yes, sir.”</TextNode>

            <TextNode>“What for?”</TextNode>

            <TextNode>
              The Inspector shrugged his shoulders. “I don't quite know, sir.
              Between ourselves, I think Mr. Holmes had not quite got over his
              illness yet. He's been behaving very queerly, and he is very much
              excited.”
            </TextNode>

            <TextNode>
              “I don't think you need alarm yourself,” said I. “I have usually
              found that there was method in his madness.”
            </TextNode>

            <TextNode>
              “Some folks might say there was madness in his method,” muttered
              the Inspector. “But he's all on fire to start, Colonel, so we had
              best go out if you are ready.”
            </TextNode>

            <TextNode>
              We found Holmes pacing up and down in the field, his chin sunk
              upon his breast, and his hands thrust into his trousers pockets.
            </TextNode>

            <TextNode>
              “The matter grows in interest,” said he. “Watson, your
              country-trip has been a distinct success. I have had a charming
              morning.”
            </TextNode>

            <TextNode>
              “You have been up to the scene of the crime, I understand,” said
              the Colonel.
            </TextNode>

            <TextNode>
              “Yes; the Inspector and I have made quite a little reconnaissance
              together.”
            </TextNode>

            <TextNode>“Any success?”</TextNode>

            <TextNode>
              “Well, we have seen some very interesting things. I'll tell you
              what we did as we walk. First of all, we saw the body of this
              unfortunate man. He certainly died from a revolver wound as
              reported.”
            </TextNode>

            <TextNode>“Had you doubted it, then?”</TextNode>

            <TextNode>
              “Oh, it is as well to test everything. Our inspection was not
              wasted. We then had an interview with Mr. Cunningham and his son,
              who were able to point out the exact spot where the murderer had
              broken through the garden-hedge in his flight. That was of great
              interest.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page145;
