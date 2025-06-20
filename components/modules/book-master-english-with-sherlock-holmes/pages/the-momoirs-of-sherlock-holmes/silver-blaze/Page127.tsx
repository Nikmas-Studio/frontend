'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
import Page from '@/components/elements/book-master-english-with-sherlock-holmes/Page';
import TextLi from '@/components/elements/book-master-english-with-sherlock-holmes/TextLi';
import TextNode from '@/components/elements/book-master-english-with-sherlock-holmes/TextNode';
import TextOl from '@/components/elements/book-master-english-with-sherlock-holmes/TextOl';
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

function Page127({
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
        title='SILVER&nbsp;BLAZE'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>“He has the horse, then?”</TextNode>
            <TextNode>
              “He tried to bluster out of it, but I described to him so exactly
              what his actions had been upon that morning that he is convinced
              that I was watching him. Of course you observed the peculiarly
              square toes in the impressions, and that his own boots exactly
              corresponded to them. Again, of course no subordinate would have
              dared to do such a thing. I described to him how, when according
              to his custom he was the first down, he perceived a strange horse
              wandering over the moor. How he went out to it, and his
              astonishment at recognizing, from the white forehead which has
              given the favorite its name, that chance had put in his power the
              only horse which could beat the one upon which he had put his
              money. Then I described how his first impulse had been to lead him
              back to King's Pyland, and how the devil had shown him how he
              could hide the horse until the race was over, and how he had led
              it back and concealed it at Mapleton. When I told him every detail
              he gave it up and thought only of saving his own skin.”
            </TextNode>
            <TextNode>“But his stables had been searched?”</TextNode>
            <TextNode>
              “Oh, and old horse-faker like him has many a dodge.”
            </TextNode>
            <TextNode>
              “But are you not afraid to leave the horse in his power now, since
              he has every interest in injuring it?”
            </TextNode>
            <TextNode>
              “My dear fellow, he will guard it as the apple of his eye. He
              knows that his only hope of mercy is to produce it safe.”
            </TextNode>
            <TextNode>
              “Colonel Ross did not impress me as a man who would be likely to
              show much mercy in any case.”
            </TextNode>
            <TextNode>
              “The matter does not rest with Colonel Ross. I follow my own
              methods, and tell as much or as little as I choose. That is the
              advantage of being unofficial. I don't know whether you observed
              it, Watson, but the Colonel's manner has been just a trifle
              cavalier to me. I am inclined now to have a little amusement at
              his expense. Say nothing to him about the horse.”
            </TextNode>
            <TextNode>“Certainly not without your permission.”</TextNode>
            <TextNode>
              “And of course this is all quite a minor point compared to the
              question of who killed John Straker.”
            </TextNode>
            <TextNode>“And you will devote yourself to that?”</TextNode>
            <TextNode>
              “On the contrary, we both go back to London by the night train.”
            </TextNode>
            <TextNode>
              I was thunderstruck by my friend's words. We had only been a few
              hours in Devonshire, and that he should give up an investigation
              which he had begun so brilliantly was quite incomprehensible to
              me. Not a word more could I draw from him until we were back at
              the trainer's house. The Colonel and the Inspector were awaiting
              us in the parlor.
            </TextNode>
            <TextNode>
              “My friend and I return to town by the night-express,” said
              Holmes. “We have had a charming little breath of your beautiful
              Dartmoor air.”
            </TextNode>
            <TextNode>
              The Inspector opened his eyes, and the Colonel's lip curled in a
              sneer.
            </TextNode>
            <TextNode>
              “So you despair of arresting the murderer of poor Straker,” said
              he.
            </TextNode>
            <TextNode>
              Holmes shrugged his shoulders. “There are certainly grave
              difficulties in the way,” said he. “I have every hope, however,
              that your horse will start upon Tuesday, and I beg that you will
              have your jockey in readiness. Might I ask for a photograph of Mr.
              John Straker?”
            </TextNode>
            <TextNode>
              The Inspector took one from an envelope and handed it to him.
            </TextNode>
            <TextNode>
              “My dear Gregory, you anticipate all my wants. If I might ask you
              to wait here for an instant, I have a question which I should like
              to put to the maid.”
            </TextNode>
            <TextNode>
              “I must say that I am rather disappointed in our London
              consultant,” said Colonel Ross, bluntly, as my friend left the
              room. “I do not see that we are any further than when he came.”
            </TextNode>
            <TextNode>
              “At least you have his assurance that your horse will run,” said
              I.
            </TextNode>
            <TextNode>
              “Yes, I have his assurance,” said the Colonel, with a shrug of his
              shoulders. “I should prefer to have the horse.”
            </TextNode>
            <TextNode>
              I was about to make some reply in defence of my friend when he
              entered the room again.
            </TextNode>
            <TextNode>
              “Now, gentlemen,” said he, “I am quite ready for Tavistock.”
            </TextNode>
            <TextNode>
              As we stepped into the carriage one of the stable-lads held the
              door open for us. A sudden idea seemed to occur to Holmes, for he
              leaned forward and touched the lad upon the sleeve.
            </TextNode>
            <TextNode>
              “You have a few sheep in the paddock,” he said. “Who attends to
              them?”
            </TextNode>
            <TextNode>“I do, sir.”</TextNode>
            <TextNode>
              “Have you noticed anything amiss with them of late?”
            </TextNode>
            <TextNode>
              “Well, sir, not of much account; but three of them have gone lame,
              sir.”
            </TextNode>
            <TextNode>
              I could see that Holmes was extremely pleased, for he chuckled and
              rubbed his hands together.
            </TextNode>
            <TextNode>
              “A long shot, Watson; a very long shot,” said he, pinching my arm.
              “Gregory, let me recommend to your attention this singular
              epidemic among the sheep. Drive on, coachman!”
            </TextNode>
            <TextNode>
              Colonel Ross still wore an expression which showed the poor
              opinion which he had formed of my companion's ability, but I saw
              by the Inspector's face that his attention had been keenly
              aroused.
            </TextNode>
            <TextNode>“You consider that to be important?” he asked.</TextNode>
            <TextNode>“Exceedingly so.”</TextNode>
            <TextNode>
              “Is there any point to which you would wish to draw my attention?”
            </TextNode>
            <TextNode>
              “To the curious incident of the dog in the night-time.”
            </TextNode>
            <TextNode>“The dog did nothing in the night-time.”</TextNode>
            <TextNode>
              “That was the curious incident,” remarked Sherlock Holmes.
            </TextNode>
            <TextNode>
              Four days later Holmes and I were again in the train, bound for
              Winchester to see the race for the Wessex Cup. Colonel Ross met us
              by appointment outside the station, and we drove in his drag to
              the course beyond the town. His face was grave, and his manner was
              cold in the extreme.
            </TextNode>
            <TextNode>“I have seen nothing of my horse,” said he.</TextNode>
            <TextNode>
              “I suppose that you would know him when you saw him?” asked
              Holmes.
            </TextNode>
            <TextNode>
              The Colonel was very angry. “I have been on the turf for twenty
              years, and never was asked such a question as that before,” said
              he. “A child would know Silver Blaze, with his white forehead and
              his mottled off-foreleg.”
            </TextNode>
            <TextNode>“How is the betting?”</TextNode>
            <TextNode>
              “Well, that is the curious part of it. You could have got fifteen
              to one yesterday, but the price has become shorter and shorter,
              until you can hardly get three to one now.”
            </TextNode>
            <TextNode>
              “Hum!” said Holmes. “Somebody knows something, that is clear.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              As the drag drew up in the enclosure near the grand stand I
              glanced at the card to see the entries.
            </TextNode>
            <Indent>
              <TextNode noIndent>
                Wessex Plate [it ran] 50 sovs. each h ft with 1000 sovs. added,
                for four and five year olds. Second, £300. Third, £200. New
                course (one mile and five furlongs).
              </TextNode>
            </Indent>
            <TextOl>
              <TextLi>
                Mr Heath Newton's The Negro. Red cap. Cinnamon jacket.
              </TextLi>
              <TextLi>
                Colonel Wardlaw's Pugilist. Pink cap. Blue and black jacket.
              </TextLi>
              <TextLi>
                Lord Backwater's Desborough. Yellow cap and sleeves.
              </TextLi>
              <TextLi>
                Colonel Ross's Silver Blaze. Black cap. Red jacket.
              </TextLi>
              <TextLi>
                Duke of Balmoral's Iris. Yellow and black stripes.
              </TextLi>
              <TextLi>
                Lord Singleford's Rasper. Purple cap. Black sleeves.
              </TextLi>
            </TextOl>
            <TextNode noIndent>
              “We scratched our other one, and put all hopes on your word,” said
              the Colonel. “Why, what is that? Silver Blaze favorite?”
            </TextNode>

            <TextNode>
              “Five to four against Silver Blaze!” roared the ring. “Five to
              four against Silver Blaze! Five to fifteen against Desborough!
              Five to four on the field!”
            </TextNode>

            <TextNode>
              “There are the numbers up,” I cried. “They are all six there.”
            </TextNode>

            <TextNode>
              “All six there? Then my horse is running,” cried the Colonel in
              great agitation. “But I don't see him. My colors have not passed.”
            </TextNode>

            <TextNode>“Only five have passed. This must be he.”</TextNode>

            <TextNode>
              As I spoke a powerful bay horse swept out from the weighting
              enclosure and cantered past us, bearing on its back the well-known
              black and red of the Colonel.
            </TextNode>

            <TextNode>
              “That's not my horse,” cried the owner. “That beast has not a
              white hair upon its body. What is this that you have done, Mr.
              Holmes?”
            </TextNode>

            <TextNode>
              “Well, well, let us see how he gets on,” said my friend,
              imperturbably. For a few minutes he gazed through my field-glass.
              “Capital! An excellent start!” he cried suddenly. “There they are,
              coming round the curve!”
            </TextNode>

            <TextNode>
              From our drag we had a superb view as they came up the straight.
              The six horses were so close together that a carpet could have
              covered them, but half way up the yellow of the Mapleton stable
              showed to the front. Before they reached us, however, Desborough's
              bolt was shot, and the Colonel's horse, coming away with a rush,
              passed the post a good six lengths before its rival, the Duke of
              Balmoral's Iris making a bad third.
            </TextNode>

            <TextNode>
              “It's my race, anyhow,” gasped the Colonel, passing his hand over
              his eyes. “I confess that I can make neither head nor tail of it.
              Don't you think that you have kept up your mystery long enough,
              Mr. Holmes?”
            </TextNode>

            <TextNode>
              “Certainly, Colonel, you shall know everything. Let us all go
              round and have a look at the horse together. Here he is,” he
              continued, as we made our way into the weighing enclosure, where
              only owners and their friends find admittance. “You have only to
              wash his face and his leg in spirits of wine, and you will find
              that he is the same old Silver Blaze as ever.”
            </TextNode>

            <TextNode>“You take my breath away!”</TextNode>

            <TextNode>
              “I found him in the hands of a faker, and took the liberty of
              running him just as he was sent over.”
            </TextNode>

            <TextNode>
              “My dear sir, you have done wonders. The horse looks very fit and
              well. It never went better in its life. I owe you a thousand
              apologies for having doubted your ability. You have done me a
              great service by recovering my horse. You would do me a greater
              still if you could lay your hands on the murderer of John
              Straker.”
            </TextNode>

            <TextNode>“I have done so,” said Holmes quietly.</TextNode>

            <TextNode>
              The Colonel and I stared at him in amazement. “You have got him!
              Where is he, then?”
            </TextNode>

            <TextNode>“He is here.”</TextNode>

            <TextNode>“Here! Where?”</TextNode>

            <TextNode>“In my company at the present moment.”</TextNode>

            <TextNode>
              The Colonel flushed angrily. “I quite recognize that I am under
              obligations to you, Mr. Holmes,” said he, “but I must regard what
              you have just said as either a very bad joke or an insult.”
            </TextNode>

            <TextNode>
              Sherlock Holmes laughed. “I assure you that I have not associated
              you with the crime, Colonel,” said he. “The real murderer is
              standing immediately behind you.” He stepped past and laid his
              hand upon the glossy neck of the thoroughbred.
            </TextNode>

            <TextNode>“The horse!” cried both the Colonel and myself.</TextNode>

            <TextNode>
              “Yes, the horse. And it may lessen his guilt if I say that it was
              done in self-defence, and that John Straker was a man who was
              entirely unworthy of your confidence. But there goes the bell, and
              as I stand to win a little on this next race, I shall defer a
              lengthy explanation until a more fitting time.”
            </TextNode>

            <TextNode>
              We had the corner of a Pullman car to ourselves that evening as we
              whirled back to London, and I fancy that the journey was a short
              one to Colonel Ross as well as to myself, as we listened to our
              companion's narrative of the events which had occurred at the
              Dartmoor training-stables upon the Monday night, and the means by
              which he had unravelled them.
            </TextNode>

            <TextNode>
              “I confess,” said he, “that any theories which I had formed from
              the newspaper reports were entirely erroneous. And yet there were
              indications there, had they not been overlaid by other details
              which concealed their true import. I went to Devonshire with the
              conviction that Fitzroy Simpson was the true culprit, although, of
              course, I saw that the evidence against him was by no means
              complete. It was while I was in the carriage, just as we reached
              the trainer's house, that the immense significance of the curried
              mutton occurred to me. You may remember that I was distrait, and
              remained sitting after you had all alighted. I was marvelling in
              my own mind how I could possibly have overlooked so obvious a
              clue.”
            </TextNode>

            <TextNode>
              “I confess,” said the Colonel, “that even now I cannot see how it
              helps us.”
            </TextNode>

            <TextNode>
              “It was the first link in my chain of reasoning. Powdered opium is
              by no means tasteless. The flavor is not disagreeable, but it is
              perceptible. Were it mixed with any ordinary dish the eater would
              undoubtedly detect it, and would probably eat no more. A curry was
              exactly the medium which would disguise this taste. By no possible
              supposition could this stranger, Fitzroy Simpson, have caused
              curry to be served in the trainer's family that night, and it is
              surely too monstrous a coincidence to suppose that he happened to
              come along with powdered opium upon the very night when a dish
              happened to be served which would disguise the flavor. That is
              unthinkable. Therefore Simpson becomes eliminated from the case,
              and our attention centers upon Straker and his wife, the only two
              people who could have chosen curried mutton for supper that night.
              The opium was added after the dish was set aside for the
              stable-boy, for the others had the same for supper with no ill
              effects. Which of them, then, had access to that dish without the
              maid seeing them?
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page127;
