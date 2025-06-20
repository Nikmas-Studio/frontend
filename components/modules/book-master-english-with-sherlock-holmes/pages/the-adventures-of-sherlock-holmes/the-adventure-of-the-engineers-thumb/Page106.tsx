'use client';

import BookLeftPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookLeftPartContainer';
import BookMainContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookMainContainer';
import BookRightPartContainer from '@/components/elements/book-master-english-with-sherlock-holmes/BookRightPartContainer';
import Indent from '@/components/elements/book-master-english-with-sherlock-holmes/Indent';
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

function Page106({
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
        title="THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;ENGINEER'S THUMB"
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “I took the lamp from him, and I examined the machine very
              thoroughly. It was indeed a gigantic one, and capable of
              exercising enormous pressure. When I passed outside, however, and
              pressed down the levers which controlled it, I knew at once by the
              whishing sound that there was a slight leakage, which allowed a
              regurgitation of water through one of the side cylinders. An
              examination showed that one of the india-rubber bands which was
              round the head of a driving-rod had shrunk so as not quite to fill
              the socket along which it worked. This was clearly the cause of
              the loss of power, and I pointed it out to my companions, who
              followed my remarks very carefully and asked several practical
              questions as to how they should proceed to set it right. When I
              had made it clear to them, I returned to the main chamber of the
              machine and took a good look at it to satisfy my own curiosity. It
              was obvious at a glance that the story of the fuller's-earth was
              the merest fabrication, for it would be absurd to suppose that so
              powerful an engine could be designed for so inadequate a purpose.
              The walls were of wood, but the floor consisted of a large iron
              trough, and when I came to examine it I could see a crust of
              metallic deposit all over it. I had stooped and was scraping at
              this to see exactly what it was when I heard a muttered
              exclamation in German and saw the cadaverous face of the colonel
              looking down at me.
            </TextNode>

            <TextNode>“‘What are you doing there?’ he asked.</TextNode>

            <TextNode>
              “I felt angry at having been tricked by so elaborate a story as
              that which he had told me. ‘I was admiring your fuller's-earth,’
              said I; ‘I think that I should be better able to advise you as to
              your machine if I knew what the exact purpose was for which it was
              used.’
            </TextNode>

            <TextNode>
              “The instant that I uttered the words I regretted the rashness of
              my speech. His face set hard, and a baleful light sprang up in his
              grey eyes.
            </TextNode>

            <TextNode>
              “‘Very well,’ said he, ‘you shall know all about the machine.’ He
              took a step backward, slammed the little door, and turned the key
              in the lock. I rushed towards it and pulled at the handle, but it
              was quite secure, and did not give in the least to my kicks and
              shoves. ‘Hullo!’ I yelled. ‘Hullo! Colonel! Let me out!’
            </TextNode>

            <TextNode>
              “And then suddenly in the silence I heard a sound which sent my
              heart into my mouth. It was the clank of the levers and the swish
              of the leaking cylinder. He had set the engine at work. The lamp
              still stood upon the floor where I had placed it when examining
              the trough. By its light I saw that the black ceiling was coming
              down upon me, slowly, jerkily, but, as none knew better than
              myself, with a force which must within a minute grind me to a
              shapeless pulp. I threw myself, screaming, against the door, and
              dragged with my nails at the lock. I implored the colonel to let
              me out, but the remorseless clanking of the levers drowned my
              cries. The ceiling was only a foot or two above my head, and with
              my hand upraised I could feel its hard, rough surface. Then it
              flashed through my mind that the pain of my death would depend
              very much upon the position in which I met it. If I lay on my face
              the weight would come upon my spine, and I shuddered to think of
              that dreadful snap. Easier the other way, perhaps; and yet, had I
              the nerve to lie and look up at that deadly black shadow wavering
              down upon me? Already I was unable to stand erect, when my eye
              caught something which brought a gush of hope back to my heart.
            </TextNode>

            <TextNode>
              “I have said that though the floor and ceiling were of iron, the
              walls were of wood. As I gave a last hurried glance around, I saw
              a thin line of yellow light between two of the boards, which
              broadened and broadened as a small panel was pushed backward. For
              an instant I could hardly believe that here was indeed a door
              which led away from death. The next instant I threw myself
              through, and lay half-fainting upon the other side. The panel had
              closed again behind me, but the crash of the lamp, and a few
              moments afterwards the clang of the two slabs of metal, told me
              how narrow had been my escape.
            </TextNode>

            <TextNode>
              “I was recalled to myself by a frantic plucking at my wrist, and I
              found myself lying upon the stone floor of a narrow corridor,
              while a woman bent over me and tugged at me with her left hand,
              while she held a candle in her right. It was the same good friend
              whose warning I had so foolishly rejected.
            </TextNode>

            <TextNode>
              “‘Come! come!’ she cried breathlessly. ‘They will be here in a
              moment. They will see that you are not there. Oh, do not waste the
              so-precious time, but come!’
            </TextNode>

            <TextNode>
              “This time, at least, I did not scorn her advice. I staggered to
              my feet and ran with her along the corridor and down a winding
              stair. The latter led to another broad passage, and just as we
              reached it we heard the sound of running feet and the shouting of
              two voices, one answering the other from the floor on which we
              were and from the one beneath. My guide stopped and looked about
              her like one who is at her wit's end. Then she threw open a door
              which led into a bedroom, through the window of which the moon was
              shining brightly.
            </TextNode>

            <TextNode>
              “‘It is your only chance,’ said she. ‘It is high, but it may be
              that you can jump it.’
            </TextNode>

            <TextNode>
              “As she spoke a light sprang into view at the further end of the
              passage, and I saw the lean figure of Colonel Lysander Stark
              rushing forward with a lantern in one hand and a weapon like a
              butcher's cleaver in the other. I rushed across the bedroom, flung
              open the window, and looked out. How quiet and sweet and wholesome
              the garden looked in the moonlight, and it could not be more than
              thirty feet down. I clambered out upon the sill, but I hesitated
              to jump until I should have heard what passed between my saviour
              and the ruffian who pursued me. If she were ill-used, then at any
              risks I was determined to go back to her assistance. The thought
              had hardly flashed through my mind before he was at the door,
              pushing his way past her; but she threw her arms round him and
              tried to hold him back.
            </TextNode>

            <TextNode>
              “‘Fritz! Fritz!’ she cried in English, ‘remember your promise
              after the last time. You said it should not be again. He will be
              silent! Oh, he will be silent!’
            </TextNode>

            <TextNode>
              “‘You are mad, Elise!’ he shouted, struggling to break away from
              her. ‘You will be the ruin of us. He has seen too much. Let me
              pass, I say!’ He dashed her to one side, and, rushing to the
              window, cut at me with his heavy weapon. I had let myself go, and
              was hanging by the hands to the sill, when his blow fell. I was
              conscious of a dull pain, my grip loosened, and I fell into the
              garden below.
            </TextNode>

            <TextNode>
              “I was shaken but not hurt by the fall; so I picked myself up and
              rushed off among the bushes as hard as I could run, for I
              understood that I was far from being out of danger yet. Suddenly,
              however, as I ran, a deadly dizziness and sickness came over me. I
              glanced down at my hand, which was throbbing painfully, and then,
              for the first time, saw that my thumb had been cut off and that
              the blood was pouring from my wound. I endeavoured to tie my
              handkerchief round it, but there came a sudden buzzing in my ears,
              and next moment I fell in a dead faint among the rose-bushes.
            </TextNode>

            <TextNode>
              “How long I remained unconscious I cannot tell. It must have been
              a very long time, for the moon had sunk, and a bright morning was
              breaking when I came to myself. My clothes were all sodden with
              dew, and my coat-sleeve was drenched with blood from my wounded
              thumb. The smarting of it recalled in an instant all the
              particulars of my night's adventure, and I sprang to my feet with
              the feeling that I might hardly yet be safe from my pursuers. But
              to my astonishment, when I came to look round me, neither house
              nor garden were to be seen. I had been lying in an angle of the
              hedge close by the highroad, and just a little lower down was a
              long building, which proved, upon my approaching it, to be the
              very station at which I had arrived upon the previous night. Were
              it not for the ugly wound upon my hand, all that had passed during
              those dreadful hours might have been an evil dream.
            </TextNode>

            <TextNode>
              “Half dazed, I went into the station and asked about the morning
              train. There would be one to Reading in less than an hour. The
              same porter was on duty, I found, as had been there when I
              arrived. I inquired of him whether he had ever heard of Colonel
              Lysander Stark. The name was strange to him. Had he observed a
              carriage the night before waiting for me? No, he had not. Was
              there a police-station anywhere near? There was one about three
              miles off.
            </TextNode>

            <TextNode>
              “It was too far for me to go, weak and ill as I was. I determined
              to wait until I got back to town before telling my story to the
              police. It was a little past six when I arrived, so I went first
              to have my wound dressed, and then the doctor was kind enough to
              bring me along here. I put the case into your hands and shall do
              exactly what you advise.”
            </TextNode>

            <TextNode>
              We both sat in silence for some little time after listening to
              this extraordinary narrative. Then Sherlock Holmes pulled down
              from the shelf one of the ponderous commonplace books in which he
              placed his cuttings.
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “Here is an advertisement which will interest you,” said he. “It
              appeared in all the papers about a year ago. Listen to this:
            </TextNode>

            <Indent>
              <TextNode noIndent>
                “‘Lost, on the 9th inst., Mr. Jeremiah Hayling, aged twenty-six,
                a hydraulic engineer. Left his lodgings at ten o'clock at night,
                and has not been heard of since. Was dressed in—’
              </TextNode>
            </Indent>

            <TextNode noIndent>
              etc., etc. Ha! That represents the last time that the colonel
              needed to have his machine overhauled, I fancy.”
            </TextNode>

            <TextNode>
              “Good heavens!” cried my patient. “Then that explains what the
              girl said.”
            </TextNode>

            <TextNode>
              “Undoubtedly. It is quite clear that the colonel was a cool and
              desperate man, who was absolutely determined that nothing should
              stand in the way of his little game, like those out-and-out
              pirates who will leave no survivor from a captured ship. Well,
              every moment now is precious, so if you feel equal to it we shall
              go down to Scotland Yard at once as a preliminary to starting for
              Eyford.”
            </TextNode>

            <TextNode>
              Some three hours or so afterwards we were all in the train
              together, bound from Reading to the little Berkshire village.
              There were Sherlock Holmes, the hydraulic engineer, Inspector
              Bradstreet, of Scotland Yard, a plain-clothes man, and myself.
              Bradstreet had spread an ordnance map of the county out upon the
              seat and was busy with his compasses drawing a circle with Eyford
              for its centre.
            </TextNode>

            <TextNode>
              “There you are,” said he. “That circle is drawn at a radius of ten
              miles from the village. The place we want must be somewhere near
              that line. You said ten miles, I think, sir.”
            </TextNode>

            <TextNode>“It was an hour's good drive.”</TextNode>

            <TextNode>
              “And you think that they brought you back all that way when you
              were unconscious?”
            </TextNode>

            <TextNode>
              “They must have done so. I have a confused memory, too, of having
              been lifted and conveyed somewhere.”
            </TextNode>

            <TextNode>
              “What I cannot understand,” said I, “is why they should have
              spared you when they found you lying fainting in the garden.
              Perhaps the villain was softened by the woman's entreaties.”
            </TextNode>

            <TextNode>
              “I hardly think that likely. I never saw a more inexorable face in
              my life.”
            </TextNode>

            <TextNode>
              “Oh, we shall soon clear up all that,” said Bradstreet. “Well, I
              have drawn my circle, and I only wish I knew at what point upon it
              the folk that we are in search of are to be found.”
            </TextNode>

            <TextNode>
              “I think I could lay my finger on it,” said Holmes quietly.
            </TextNode>

            <TextNode>
              “Really, now!” cried the inspector, “you have formed your opinion!
              Come, now, we shall see who agrees with you. I say it is south,
              for the country is more deserted there.”
            </TextNode>

            <TextNode>“And I say east,” said my patient.</TextNode>

            <TextNode>
              “I am for west,” remarked the plain-clothes man. “There are
              several quiet little villages up there.”
            </TextNode>

            <TextNode>
              “And I am for north,” said I, “because there are no hills there,
              and our friend says that he did not notice the carriage go up
              any.”
            </TextNode>

            <TextNode>
              “Come,” cried the inspector, laughing; “it's a very pretty
              diversity of opinion. We have boxed the compass among us. Who do
              you give your casting vote to?”
            </TextNode>

            <TextNode>“You are all wrong.”</TextNode>

            <TextNode>“But we can't all be.”</TextNode>

            <TextNode>
              “Oh, yes, you can. This is my point.” He placed his finger in the
              centre of the circle. “This is where we shall find them.”
            </TextNode>

            <TextNode>“But the twelve-mile drive?” gasped Hatherley.</TextNode>

            <TextNode>
              “Six out and six back. Nothing simpler. You say yourself that the
              horse was fresh and glossy when you got in. How could it be that
              if it had gone twelve miles over heavy roads?”
            </TextNode>

            <TextNode>
              “Indeed, it is a likely ruse enough,” observed Bradstreet
              thoughtfully. “Of course there can be no doubt as to the nature of
              this gang.”
            </TextNode>

            <TextNode>
              “None at all,” said Holmes. “They are coiners on a large scale,
              and have used the machine to form the amalgam which has taken the
              place of silver.”
            </TextNode>

            <TextNode>
              “We have known for some time that a clever gang was at work,” said
              the inspector. “They have been turning out half-crowns by the
              thousand. We even traced them as far as Reading, but could get no
              farther, for they had covered their traces in a way that showed
              that they were very old hands. But now, thanks to this lucky
              chance, I think that we have got them right enough.”
            </TextNode>

            <TextNode>
              But the inspector was mistaken, for those criminals were not
              destined to fall into the hands of justice. As we rolled into
              Eyford Station we saw a gigantic column of smoke which streamed up
              from behind a small clump of trees in the neighbourhood and hung
              like an immense ostrich feather over the landscape.
            </TextNode>

            <TextNode>
              “A house on fire?” asked Bradstreet as the train steamed off again
              on its way.
            </TextNode>

            <TextNode>“Yes, sir!” said the station-master.</TextNode>

            <TextNode>“When did it break out?”</TextNode>

            <TextNode>
              “I hear that it was during the night, sir, but it has got worse,
              and the whole place is in a blaze.”
            </TextNode>

            <TextNode>“Whose house is it?”</TextNode>

            <TextNode>“Dr. Becher's.”</TextNode>

            <TextNode>
              “Tell me,” broke in the engineer, “is Dr. Becher a German, very
              thin, with a long, sharp nose?”
            </TextNode>

            <TextNode>
              The station-master laughed heartily. “No, sir, Dr. Becher is an
              Englishman, and there isn't a man in the parish who has a
              better-lined waistcoat. But he has a gentleman staying with him, a
              patient, as I understand, who is a foreigner, and he looks as if a
              little good Berkshire beef would do him no harm.”
            </TextNode>

            <TextNode>
              The station-master had not finished his speech before we were all
              hastening in the direction of the fire. The road topped a low
              hill, and there was a great widespread whitewashed building in
              front of us, spouting fire at every chink and window, while in the
              garden in front three fire-engines were vainly striving to keep
              the flames under.
            </TextNode>

            <TextNode>
              “That's it!” cried Hatherley, in intense excitement. “There is the
              gravel-drive, and there are the rose-bushes where I lay. That
              second window is the one that I jumped from.”
            </TextNode>

            <TextNode>
              “Well, at least,” said Holmes, “you have had your revenge upon
              them. There can be no question that it was your oil-lamp which,
              when it was crushed in the press, set fire to the wooden walls,
              though no doubt they were too excited in the chase after you to
              observe it at the time. Now keep your eyes open in this crowd for
              your friends of last night, though I very much fear that they are
              a good hundred miles off by now.”
            </TextNode>

            <TextNode>
              And Holmes' fears came to be realised, for from that day to this
              no word has ever been heard either of the beautiful woman, the
              sinister German, or the morose Englishman. Early that morning a
              peasant had met a cart containing several people and some very
              bulky boxes driving rapidly in the direction of Reading, but there
              all traces of the fugitives disappeared, and even Holmes'
              ingenuity failed ever to discover the least clue as to their
              whereabouts.
            </TextNode>

            <TextNode>
              The firemen had been much perturbed at the strange arrangements
              which they had found within, and still more so by discovering a
              newly severed human thumb upon a window-sill of the second floor.
              About sunset, however, their efforts were at last successful, and
              they subdued the flames, but not before the roof had fallen in,
              and the whole place been reduced to such absolute ruin that, save
              some twisted cylinders and iron piping, not a trace remained of
              the machinery which had cost our unfortunate acquaintance so
              dearly. Large masses of nickel and of tin were discovered stored
              in an out-house, but no coins were to be found, which may have
              explained the presence of those bulky boxes which have been
              already referred to.
            </TextNode>

            <TextNode>
              How our hydraulic engineer had been conveyed from the garden to
              the spot where he recovered his senses might have remained forever
              a mystery were it not for the soft mould, which told us a very
              plain tale. He had evidently been carried down by two persons, one
              of whom had remarkably small feet and the other unusually large
              ones. On the whole, it was most probable that the silent
              Englishman, being less bold or less murderous than his companion,
              had assisted the woman to bear the unconscious man out of the way
              of danger.
            </TextNode>

            <TextNode>
              “Well,” said our engineer ruefully as we took our seats to return
              once more to London, “it has been a pretty business for me! I have
              lost my thumb and I have lost a fifty-guinea fee, and what have I
              gained?”
            </TextNode>

            <TextNode>
              “Experience,” said Holmes, laughing. “Indirectly it may be of
              value, you know; you have only to put it into words to gain the
              reputation of being excellent company for the remainder of your
              existence.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page106;
