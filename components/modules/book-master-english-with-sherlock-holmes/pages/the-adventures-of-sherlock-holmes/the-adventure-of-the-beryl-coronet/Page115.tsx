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

function Page115({
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
        title='THE&nbsp;ADVENTURE OF&nbsp;THE&nbsp;BERYL&nbsp;CORONET'
      />
      <BookMainContainer biggerTopPadding>
        <div className='flex  max-2md:flex-col'>
          <BookLeftPartContainer>
            <TextNode noIndent>
              “‘Tell me, dad,’ said she, looking, I thought, a little disturbed,
              ‘did you give Lucy, the maid, leave to go out to-night?’
            </TextNode>

            <TextNode>“‘Certainly not.’</TextNode>

            <TextNode>
              “‘She came in just now by the back door. I have no doubt that she
              has only been to the side gate to see someone, but I think that it
              is hardly safe and should be stopped.’
            </TextNode>

            <TextNode>
              “‘You must speak to her in the morning, or I will if you prefer
              it. Are you sure that everything is fastened?’
            </TextNode>

            <TextNode>“‘Quite sure, dad.’</TextNode>

            <TextNode>
              “‘Then, good-night.’ I kissed her and went up to my bedroom again,
              where I was soon asleep.
            </TextNode>

            <TextNode>
              “I am endeavouring to tell you everything, Mr. Holmes, which may
              have any bearing upon the case, but I beg that you will question
              me upon any point which I do not make clear.”
            </TextNode>

            <TextNode>
              “On the contrary, your statement is singularly lucid.”
            </TextNode>

            <TextNode>
              “I come to a part of my story now in which I should wish to be
              particularly so. I am not a very heavy sleeper, and the anxiety in
              my mind tended, no doubt, to make me even less so than usual.
              About two in the morning, then, I was awakened by some sound in
              the house. It had ceased ere I was wide awake, but it had left an
              impression behind it as though a window had gently closed
              somewhere. I lay listening with all my ears. Suddenly, to my
              horror, there was a distinct sound of footsteps moving softly in
              the next room. I slipped out of bed, all palpitating with fear,
              and peeped round the corner of my dressing-room door.
            </TextNode>

            <TextNode>
              “‘Arthur!’ I screamed, ‘you villain! you thief! How dare you touch
              that coronet?’
            </TextNode>

            <TextNode>
              “The gas was half up, as I had left it, and my unhappy boy,
              dressed only in his shirt and trousers, was standing beside the
              light, holding the coronet in his hands. He appeared to be
              wrenching at it, or bending it with all his strength. At my cry he
              dropped it from his grasp and turned as pale as death. I snatched
              it up and examined it. One of the gold corners, with three of the
              beryls in it, was missing.
            </TextNode>

            <TextNode>
              “‘You blackguard!’ I shouted, beside myself with rage. ‘You have
              destroyed it! You have dishonoured me forever! Where are the
              jewels which you have stolen?’
            </TextNode>

            <TextNode>“‘Stolen!’ he cried.</TextNode>

            <TextNode>
              “‘Yes, thief!’ I roared, shaking him by the shoulder.
            </TextNode>

            <TextNode>
              “‘There are none missing. There cannot be any missing,’ said he.
            </TextNode>

            <TextNode>
              “‘There are three missing. And you know where they are. Must I
              call you a liar as well as a thief? Did I not see you trying to
              tear off another piece?’
            </TextNode>

            <TextNode>
              “‘You have called me names enough,’ said he, ‘I will not stand it
              any longer. I shall not say another word about this business,
              since you have chosen to insult me. I will leave your house in the
              morning and make my own way in the world.’
            </TextNode>

            <TextNode>
              “‘You shall leave it in the hands of the police!’ I cried half-mad
              with grief and rage. ‘I shall have this matter probed to the
              bottom.’
            </TextNode>

            <TextNode>
              “‘You shall learn nothing from me,’ said he with a passion such as
              I should not have thought was in his nature. ‘If you choose to
              call the police, let the police find what they can.’
            </TextNode>

            <TextNode>
              “By this time the whole house was astir, for I had raised my voice
              in my anger. Mary was the first to rush into my room, and, at the
              sight of the coronet and of Arthur's face, she read the whole
              story and, with a scream, fell down senseless on the ground. I
              sent the house-maid for the police and put the investigation into
              their hands at once. When the inspector and a constable entered
              the house, Arthur, who had stood sullenly with his arms folded,
              asked me whether it was my intention to charge him with theft. I
              answered that it had ceased to be a private matter, but had become
              a public one, since the ruined coronet was national property. I
              was determined that the law should have its way in everything.
            </TextNode>

            <TextNode>
              “‘At least,’ said he, ‘you will not have me arrested at once. It
              would be to your advantage as well as mine if I might leave the
              house for five minutes.’
            </TextNode>

            <TextNode>
              “‘That you may get away, or perhaps that you may conceal what you
              have stolen,’ said I. And then, realising the dreadful position in
              which I was placed, I implored him to remember that not only my
              honour but that of one who was far greater than I was at stake;
              and that he threatened to raise a scandal which would convulse the
              nation. He might avert it all if he would but tell me what he had
              done with the three missing stones.
            </TextNode>

            <TextNode>
              “‘You may as well face the matter,’ said I; ‘you have been caught
              in the act, and no confession could make your guilt more heinous.
              If you but make such reparation as is in your power, by telling us
              where the beryls are, all shall be forgiven and forgotten.’
            </TextNode>

            <TextNode>
              “‘Keep your forgiveness for those who ask for it,’ he answered,
              turning away from me with a sneer. I saw that he was too hardened
              for any words of mine to influence him. There was but one way for
              it. I called in the inspector and gave him into custody. A search
              was made at once not only of his person but of his room and of
              every portion of the house where he could possibly have concealed
              the gems; but no trace of them could be found, nor would the
              wretched boy open his mouth for all our persuasions and our
              threats. This morning he was removed to a cell, and I, after going
              through all the police formalities, have hurried round to you to
              implore you to use your skill in unravelling the matter. The
              police have openly confessed that they can at present make nothing
              of it. You may go to any expense which you think necessary. I have
              already offered a reward of £1000. My God, what shall I do! I have
              lost my honour, my gems, and my son in one night. Oh, what shall I
              do!”
            </TextNode>

            <TextNode>
              He put a hand on either side of his head and rocked himself to and
              fro, droning to himself like a child whose grief has got beyond
              words.
            </TextNode>

            <TextNode>
              Sherlock Holmes sat silent for some few minutes, with his brows
              knitted and his eyes fixed upon the fire.
            </TextNode>

            <TextNode>“Do you receive much company?” he asked.</TextNode>

            <TextNode>
              “None save my partner with his family and an occasional friend of
              Arthur's. Sir George Burnwell has been several times lately. No
              one else, I think.”
            </TextNode>

            <TextNode>“Do you go out much in society?”</TextNode>

            <TextNode>
              “Arthur does. Mary and I stay at home. We neither of us care for
              it.”
            </TextNode>

            <TextNode>“That is unusual in a young girl.”</TextNode>

            <TextNode>
              “She is of a quiet nature. Besides, she is not so very young. She
              is four-and-twenty.”
            </TextNode>

            <TextNode>
              “This matter, from what you say, seems to have been a shock to her
              also.”
            </TextNode>

            <TextNode>“Terrible! She is even more affected than I.”</TextNode>

            <TextNode>
              “You have neither of you any doubt as to your son's guilt?”
            </TextNode>

            <TextNode>
              “How can we have when I saw him with my own eyes with the coronet
              in his hands.”
            </TextNode>

            <TextNode>
              “I hardly consider that a conclusive proof. Was the remainder of
              the coronet at all injured?”
            </TextNode>

            <TextNode>“Yes, it was twisted.”</TextNode>

            <TextNode>
              “Do you not think, then, that he might have been trying to
              straighten it?”
            </TextNode>

            <TextNode>
              “God bless you! You are doing what you can for him and for me. But
              it is too heavy a task. What was he doing there at all? If his
              purpose were innocent, why did he not say so?”
            </TextNode>

            <TextNode>
              “Precisely. And if it were guilty, why did he not invent a lie?
              His silence appears to me to cut both ways. There are several
              singular points about the case. What did the police think of the
              noise which awoke you from your sleep?”
            </TextNode>

            <TextNode>
              “They considered that it might be caused by Arthur's closing his
              bedroom door.”
            </TextNode>

            <TextNode>
              “A likely story! As if a man bent on felony would slam his door so
              as to wake a household. What did they say, then, of the
              disappearance of these gems?”
            </TextNode>

            <TextNode>
              “They are still sounding the planking and probing the furniture in
              the hope of finding them.”
            </TextNode>

            <TextNode>
              “Have they thought of looking outside the house?”
            </TextNode>

            <TextNode>
              “Yes, they have shown extraordinary energy. The whole garden has
              already been minutely examined.”
            </TextNode>

            <TextNode>
              “Now, my dear sir,” said Holmes. “is it not obvious to you now
              that this matter really strikes very much deeper than either you
              or the police were at first inclined to think? It appeared to you
              to be a simple case; to me it seems exceedingly complex. Consider
              what is involved by your theory. You suppose that your son came
              down from his bed, went, at great risk, to your dressing-room,
              opened your bureau, took out your coronet, broke off by main force
              a small portion of it, went off to some other place, concealed
              three gems out of the thirty-nine, with such skill that nobody can
              find them, and then returned with the other thirty-six into the
              room in which he exposed himself to the greatest danger of being
              discovered. I ask you now, is such a theory tenable?”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “But what other is there?” cried the banker with a gesture of
              despair. “If his motives were innocent, why does he not explain
              them?”
            </TextNode>

            <TextNode>
              “It is our task to find that out,” replied Holmes; “so now, if you
              please, Mr. Holder, we will set off for Streatham together, and
              devote an hour to glancing a little more closely into details.”
            </TextNode>

            <TextNode>
              My friend insisted upon my accompanying them in their expedition,
              which I was eager enough to do, for my curiosity and sympathy were
              deeply stirred by the story to which we had listened. I confess
              that the guilt of the banker's son appeared to me to be as obvious
              as it did to his unhappy father, but still I had such faith in
              Holmes' judgment that I felt that there must be some grounds for
              hope as long as he was dissatisfied with the accepted explanation.
              He hardly spoke a word the whole way out to the southern suburb,
              but sat with his chin upon his breast and his hat drawn over his
              eyes, sunk in the deepest thought. Our client appeared to have
              taken fresh heart at the little glimpse of hope which had been
              presented to him, and he even broke into a desultory chat with me
              over his business affairs. A short railway journey and a shorter
              walk brought us to Fairbank, the modest residence of the great
              financier.
            </TextNode>

            <TextNode>
              Fairbank was a good-sized square house of white stone, standing
              back a little from the road. A double carriage-sweep, with a
              snow-clad lawn, stretched down in front to two large iron gates
              which closed the entrance. On the right side was a small wooden
              thicket, which led into a narrow path between two neat hedges
              stretching from the road to the kitchen door, and forming the
              tradesmen's entrance. On the left ran a lane which led to the
              stables, and was not itself within the grounds at all, being a
              public, though little used, thoroughfare. Holmes left us standing
              at the door and walked slowly all round the house, across the
              front, down the tradesmen's path, and so round by the garden
              behind into the stable lane. So long was he that Mr. Holder and I
              went into the dining-room and waited by the fire until he should
              return. We were sitting there in silence when the door opened and
              a young lady came in. She was rather above the middle height,
              slim, with dark hair and eyes, which seemed the darker against the
              absolute pallor of her skin. I do not think that I have ever seen
              such deadly paleness in a woman's face. Her lips, too, were
              bloodless, but her eyes were flushed with crying. As she swept
              silently into the room she impressed me with a greater sense of
              grief than the banker had done in the morning, and it was the more
              striking in her as she was evidently a woman of strong character,
              with immense capacity for self-restraint. Disregarding my
              presence, she went straight to her uncle and passed her hand over
              his head with a sweet womanly caress.
            </TextNode>

            <TextNode>
              “You have given orders that Arthur should be liberated, have you
              not, dad?” she asked.
            </TextNode>

            <TextNode>
              “No, no, my girl, the matter must be probed to the bottom.”
            </TextNode>

            <TextNode>
              “But I am so sure that he is innocent. You know what woman's
              instincts are. I know that he has done no harm and that you will
              be sorry for having acted so harshly.”
            </TextNode>

            <TextNode>“Why is he silent, then, if he is innocent?”</TextNode>

            <TextNode>
              “Who knows? Perhaps because he was so angry that you should
              suspect him.”
            </TextNode>

            <TextNode>
              “How could I help suspecting him, when I actually saw him with the
              coronet in his hand?”
            </TextNode>

            <TextNode>
              “Oh, but he had only picked it up to look at it. Oh, do, do take
              my word for it that he is innocent. Let the matter drop and say no
              more. It is so dreadful to think of our dear Arthur in a prison!”
            </TextNode>

            <TextNode>
              “I shall never let it drop until the gems are found—never, Mary!
              Your affection for Arthur blinds you as to the awful consequences
              to me. Far from hushing the thing up, I have brought a gentleman
              down from London to inquire more deeply into it.”
            </TextNode>

            <TextNode>
              “This gentleman?” she asked, facing round to me.
            </TextNode>

            <TextNode>
              “No, his friend. He wished us to leave him alone. He is round in
              the stable lane now.”
            </TextNode>

            <TextNode>
              “The stable lane?” She raised her dark eyebrows. “What can he hope
              to find there? Ah! this, I suppose, is he. I trust, sir, that you
              will succeed in proving, what I feel sure is the truth, that my
              cousin Arthur is innocent of this crime.”
            </TextNode>

            <TextNode>
              “I fully share your opinion, and I trust, with you, that we may
              prove it,” returned Holmes, going back to the mat to knock the
              snow from his shoes. “I believe I have the honour of addressing
              Miss Mary Holder. Might I ask you a question or two?”
            </TextNode>

            <TextNode>
              “Pray do, sir, if it may help to clear this horrible affair up.”
            </TextNode>

            <TextNode>“You heard nothing yourself last night?”</TextNode>

            <TextNode>
              “Nothing, until my uncle here began to speak loudly. I heard that,
              and I came down.”
            </TextNode>

            <TextNode>
              “You shut up the windows and doors the night before. Did you
              fasten all the windows?”
            </TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>“Were they all fastened this morning?”</TextNode>

            <TextNode>“Yes.”</TextNode>

            <TextNode>
              “You have a maid who has a sweetheart? I think that you remarked
              to your uncle last night that she had been out to see him?”
            </TextNode>

            <TextNode>
              “Yes, and she was the girl who waited in the drawing-room, and who
              may have heard uncle's remarks about the coronet.”
            </TextNode>

            <TextNode>
              “I see. You infer that she may have gone out to tell her
              sweetheart, and that the two may have planned the robbery.”
            </TextNode>

            <TextNode>
              “But what is the good of all these vague theories,” cried the
              banker impatiently, “when I have told you that I saw Arthur with
              the coronet in his hands?”
            </TextNode>

            <TextNode>
              “Wait a little, Mr. Holder. We must come back to that. About this
              girl, Miss Holder. You saw her return by the kitchen door, I
              presume?”
            </TextNode>

            <TextNode>
              “Yes; when I went to see if the door was fastened for the night I
              met her slipping in. I saw the man, too, in the gloom.”
            </TextNode>

            <TextNode>“Do you know him?”</TextNode>

            <TextNode>
              “Oh, yes! he is the green-grocer who brings our vegetables round.
              His name is Francis Prosper.”
            </TextNode>

            <TextNode>
              “He stood,” said Holmes, “to the left of the door—that is to say,
              farther up the path than is necessary to reach the door?”
            </TextNode>

            <TextNode>“Yes, he did.”</TextNode>

            <TextNode>“And he is a man with a wooden leg?”</TextNode>

            <TextNode>
              Something like fear sprang up in the young lady's expressive black
              eyes. “Why, you are like a magician,” said she. “How do you know
              that?” She smiled, but there was no answering smile in Holmes'
              thin, eager face.
            </TextNode>

            <TextNode>
              “I should be very glad now to go upstairs,” said he. “I shall
              probably wish to go over the outside of the house again. Perhaps I
              had better take a look at the lower windows before I go up.”
            </TextNode>

            <TextNode>
              He walked swiftly round from one to the other, pausing only at the
              large one which looked from the hall onto the stable lane. This he
              opened and made a very careful examination of the sill with his
              powerful magnifying lens. “Now we shall go upstairs,” said he at
              last.
            </TextNode>

            <TextNode>
              The banker's dressing-room was a plainly furnished little chamber,
              with a grey carpet, a large bureau, and a long mirror. Holmes went
              to the bureau first and looked hard at the lock.
            </TextNode>

            <TextNode>“Which key was used to open it?” he asked.</TextNode>

            <TextNode>
              “That which my son himself indicated—that of the cupboard of the
              lumber-room.”
            </TextNode>

            <TextNode>“Have you it here?”</TextNode>

            <TextNode>“That is it on the dressing-table.”</TextNode>

            <TextNode>
              Sherlock Holmes took it up and opened the bureau.
            </TextNode>

            <TextNode>
              “It is a noiseless lock,” said he. “It is no wonder that it did
              not wake you. This case, I presume, contains the coronet. We must
              have a look at it.” He opened the case, and taking out the diadem
              he laid it upon the table. It was a magnificent specimen of the
              jeweller's art, and the thirty-six stones were the finest that I
              have ever seen. At one side of the coronet was a cracked edge,
              where a corner holding three gems had been torn away.
            </TextNode>

            <TextNode>
              “Now, Mr. Holder,” said Holmes, “here is the corner which
              corresponds to that which has been so unfortunately lost. Might I
              beg that you will break it off.”
            </TextNode>

            <TextNode>
              The banker recoiled in horror. “I should not dream of trying,”
              said he.
            </TextNode>

            <TextNode>
              “Then I will.” Holmes suddenly bent his strength upon it, but
              without result. “I feel it give a little,” said he; “but, though I
              am exceptionally strong in the fingers, it would take me all my
              time to break it. An ordinary man could not do it. Now, what do
              you think would happen if I did break it, Mr. Holder? There would
              be a noise like a pistol shot. Do you tell me that all this
              happened within a few yards of your bed and that you heard nothing
              of it?”
            </TextNode>

            <TextNode>
              “I do not know what to think. It is all dark to me.”
            </TextNode>

            <TextNode>
              “But perhaps it may grow lighter as we go. What do you think, Miss
              Holder?”
            </TextNode>

            <TextNode>
              “I confess that I still share my uncle's perplexity.”
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page115;
