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
import { BookVersion } from '@/types/book-version';
import { ReactElement, useRef } from 'react';
import Controls from '../../../Controls';

interface PageProps {
  pageNumber: number;
  hidePageNumber?: boolean;
  viewportHeight?: boolean;
}

function Page84({
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
        title='THE BOSCOMBE VALLEY MYSTERY'
      />
      <BookMainContainer>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “Then comes our expedition of to-day. By an examination of the
              ground I gained the trifling details which I gave to that imbecile
              Lestrade, as to the personality of the criminal.”
            </TextNode>

            <TextNode>“But how did you gain them?”</TextNode>

            <TextNode>
              “You know my method. It is founded upon the observation of
              trifles.”
            </TextNode>

            <TextNode>
              “His height I know that you might roughly judge from the length of
              his stride. His boots, too, might be told from their traces.”
            </TextNode>

            <TextNode>“Yes, they were peculiar boots.”</TextNode>

            <TextNode>“But his lameness?”</TextNode>

            <TextNode>
              “The impression of his right foot was always less distinct than
              his left. He put less weight upon it. Why? Because he limped—he
              was lame.”
            </TextNode>

            <TextNode>“But his left-handedness.”</TextNode>

            <TextNode>
              “You were yourself struck by the nature of the injury as recorded
              by the surgeon at the inquest. The blow was struck from
              immediately behind, and yet was upon the left side. Now, how can
              that be unless it were by a left-handed man? He had stood behind
              that tree during the interview between the father and son. He had
              even smoked there. I found the ash of a cigar, which my special
              knowledge of tobacco ashes enables me to pronounce as an Indian
              cigar. I have, as you know, devoted some attention to this, and
              written a little monograph on the ashes of 140 different varieties
              of pipe, cigar, and cigarette tobacco. Having found the ash, I
              then looked round and discovered the stump among the moss where he
              had tossed it. It was an Indian cigar, of the variety which are
              rolled in Rotterdam.”
            </TextNode>

            <TextNode>“And the cigar-holder?”</TextNode>

            <TextNode>
              “I could see that the end had not been in his mouth. Therefore he
              used a holder. The tip had been cut off, not bitten off, but the
              cut was not a clean one, so I deduced a blunt pen-knife.”
            </TextNode>

            <TextNode>
              “Holmes,” I said, “you have drawn a net round this man from which
              he cannot escape, and you have saved an innocent human life as
              truly as if you had cut the cord which was hanging him. I see the
              direction in which all this points. The culprit is—”
            </TextNode>

            <TextNode>
              “Mr. John Turner,” cried the hotel waiter, opening the door of our
              sitting-room, and ushering in a visitor.
            </TextNode>

            <TextNode>
              The man who entered was a strange and impressive figure. His slow,
              limping step and bowed shoulders gave the appearance of
              decrepitude, and yet his hard, deep-lined, craggy features, and
              his enormous limbs showed that he was possessed of unusual
              strength of body and of character. His tangled beard, grizzled
              hair, and outstanding, drooping eyebrows combined to give an air
              of dignity and power to his appearance, but his face was of an
              ashen white, while his lips and the corners of his nostrils were
              tinged with a shade of blue. It was clear to me at a glance that
              he was in the grip of some deadly and chronic disease.
            </TextNode>

            <TextNode>
              “Pray sit down on the sofa,” said Holmes gently. “You had my
              note?”
            </TextNode>

            <TextNode>
              “Yes, the lodge-keeper brought it up. You said that you wished to
              see me here to avoid scandal.”
            </TextNode>

            <TextNode>
              “I thought people would talk if I went to the Hall.”
            </TextNode>

            <TextNode>
              “And why did you wish to see me?” He looked across at my companion
              with despair in his weary eyes, as though his question was already
              answered.
            </TextNode>

            <TextNode>
              “Yes,” said Holmes, answering the look rather than the words. “It
              is so. I know all about McCarthy.”
            </TextNode>

            <TextNode>
              The old man sank his face in his hands. “God help me!” he cried.
              “But I would not have let the young man come to harm. I give you
              my word that I would have spoken out if it went against him at the
              Assizes.”
            </TextNode>

            <TextNode>
              “I am glad to hear you say so,” said Holmes gravely.
            </TextNode>

            <TextNode>
              “I would have spoken now had it not been for my dear girl. It
              would break her heart—it will break her heart when she hears that
              I am arrested.”
            </TextNode>

            <TextNode>“It may not come to that,” said Holmes.</TextNode>

            <TextNode>“What?”</TextNode>

            <TextNode>
              “I am no official agent. I understand that it was your daughter
              who required my presence here, and I am acting in her interests.
              Young McCarthy must be got off, however.”
            </TextNode>

            <TextNode>
              “I am a dying man,” said old Turner. “I have had diabetes for
              years. My doctor says it is a question whether I shall live a
              month. Yet I would rather die under my own roof than in a jail.”
            </TextNode>

            <TextNode>
              Holmes rose and sat down at the table with his pen in his hand and
              a bundle of paper before him. “Just tell us the truth,” he said.
              “I shall jot down the facts. You will sign it, and Watson here can
              witness it. Then I could produce your confession at the last
              extremity to save young McCarthy. I promise you that I shall not
              use it unless it is absolutely needed.”
            </TextNode>

            <TextNode>
              “It's as well,” said the old man; “it's a question whether I shall
              live to the Assizes, so it matters little to me, but I should wish
              to spare Alice the shock. And now I will make the thing clear to
              you; it has been a long time in the acting, but will not take me
              long to tell.
            </TextNode>

            <TextNode>
              “You didn't know this dead man, McCarthy. He was a devil
              incarnate. I tell you that. God keep you out of the clutches of
              such a man as he. His grip has been upon me these twenty years,
              and he has blasted my life. I'll tell you first how I came to be
              in his power.
            </TextNode>

            <TextNode>
              “It was in the early '60's at the diggings. I was a young chap
              then, hot-blooded and reckless, ready to turn my hand at anything;
              I got among bad companions, took to drink, had no luck with my
              claim, took to the bush, and in a word became what you would call
              over here a highway robber. There were six of us, and we had a
              wild, free life of it, sticking up a station from time to time, or
              stopping the wagons on the road to the diggings. Black Jack of
              Ballarat was the name I went under, and our party is still
              remembered in the colony as the Ballarat Gang.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “One day a gold convoy came down from Ballarat to Melbourne, and
              we lay in wait for it and attacked it. There were six troopers and
              six of us, so it was a close thing, but we emptied four of their
              saddles at the first volley. Three of our boys were killed,
              however, before we got the swag. I put my pistol to the head of
              the wagon-driver, who was this very man McCarthy. I wish to the
              Lord that I had shot him then, but I spared him, though I saw his
              wicked little eyes fixed on my face, as though to remember every
              feature. We got away with the gold, became wealthy men, and made
              our way over to England without being suspected. There I parted
              from my old pals and determined to settle down to a quiet and
              respectable life. I bought this estate, which chanced to be in the
              market, and I set myself to do a little good with my money, to
              make up for the way in which I had earned it. I married, too, and
              though my wife died young she left me my dear little Alice. Even
              when she was just a baby her wee hand seemed to lead me down the
              right path as nothing else had ever done. In a word, I turned over
              a new leaf and did my best to make up for the past. All was going
              well when McCarthy laid his grip upon me.
            </TextNode>

            <TextNode>
              “I had gone up to town about an investment, and I met him in
              Regent Street with hardly a coat to his back or a boot to his
              foot.
            </TextNode>

            <TextNode>
              “‘Here we are, Jack,’ says he, touching me on the arm; ‘we'll be
              as good as a family to you. There's two of us, me and my son, and
              you can have the keeping of us. If you don't—it's a fine,
              law-abiding country is England, and there's always a policeman
              within hail.’
            </TextNode>

            <TextNode>
              “Well, down they came to the west country, there was no shaking
              them off, and there they have lived rent free on my best land ever
              since. There was no rest for me, no peace, no forgetfulness; turn
              where I would, there was his cunning, grinning face at my elbow.
              It grew worse as Alice grew up, for he soon saw I was more afraid
              of her knowing my past than of the police. Whatever he wanted he
              must have, and whatever it was I gave him without question, land,
              money, houses, until at last he asked a thing which I could not
              give. He asked for Alice.
            </TextNode>

            <TextNode>
              “His son, you see, had grown up, and so had my girl, and as I was
              known to be in weak health, it seemed a fine stroke to him that
              his lad should step into the whole property. But there I was firm.
              I would not have his cursed stock mixed with mine; not that I had
              any dislike to the lad, but his blood was in him, and that was
              enough. I stood firm. McCarthy threatened. I braved him to do his
              worst. We were to meet at the pool midway between our houses to
              talk it over.
            </TextNode>

            <TextNode>
              “When I went down there I found him talking with his son, so I
              smoked a cigar and waited behind a tree until he should be alone.
              But as I listened to his talk all that was black and bitter in me
              seemed to come uppermost. He was urging his son to marry my
              daughter with as little regard for what she might think as if she
              were a slut from off the streets. It drove me mad to think that I
              and all that I held most dear should be in the power of such a man
              as this. Could I not snap the bond? I was already a dying and a
              desperate man. Though clear of mind and fairly strong of limb, I
              knew that my own fate was sealed. But my memory and my girl! Both
              could be saved if I could but silence that foul tongue. I did it,
              Mr. Holmes. I would do it again. Deeply as I have sinned, I have
              led a life of martyrdom to atone for it. But that my girl should
              be entangled in the same meshes which held me was more than I
              could suffer. I struck him down with no more compunction than if
              he had been some foul and venomous beast. His cry brought back his
              son; but I had gained the cover of the wood, though I was forced
              to go back to fetch the cloak which I had dropped in my flight.
              That is the true story, gentlemen, of all that occurred.”
            </TextNode>

            <TextNode>
              “Well, it is not for me to judge you,” said Holmes as the old man
              signed the statement which had been drawn out. “I pray that we may
              never be exposed to such a temptation.”
            </TextNode>

            <TextNode>
              “I pray not, sir. And what do you intend to do?”
            </TextNode>

            <TextNode>
              “In view of your health, nothing. You are yourself aware that you
              will soon have to answer for your deed at a higher court than the
              Assizes. I will keep your confession, and if McCarthy is condemned
              I shall be forced to use it. If not, it shall never be seen by
              mortal eye; and your secret, whether you be alive or dead, shall
              be safe with us.”
            </TextNode>

            <TextNode>
              “Farewell, then,” said the old man solemnly. “Your own deathbeds,
              when they come, will be the easier for the thought of the peace
              which you have given to mine.” Tottering and shaking in all his
              giant frame, he stumbled slowly from the room.
            </TextNode>

            <TextNode>
              “God help us!” said Holmes after a long silence. “Why does fate
              play such tricks with poor, helpless worms? I never hear of such a
              case as this that I do not think of Baxter's words, and say,
              ‘There, but for the grace of God, goes Sherlock Holmes.’”
            </TextNode>

            <TextNode>
              James McCarthy was acquitted at the Assizes on the strength of a
              number of objections which had been drawn out by Holmes and
              submitted to the defending counsel. Old Turner lived for seven
              months after our interview, but he is now dead; and there is every
              prospect that the son and daughter may come to live happily
              together in ignorance of the black cloud which rests upon their
              past.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page84;
