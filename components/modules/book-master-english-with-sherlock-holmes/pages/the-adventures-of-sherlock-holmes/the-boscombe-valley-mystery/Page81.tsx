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

function Page81({
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
              We were seated at breakfast one morning, my wife and I, when the
              maid brought in a telegram. It was from Sherlock Holmes and ran in
              this way:
            </TextNode>

            <TextNode className='pl-14' noIndent>
              “Have you a couple of days to spare? Have just been wired for from
              the west of England in connection with Boscombe Valley tragedy.
              Shall be glad if you will come with me. Air and scenery perfect.
              Leave Paddington by the 11.15.”
            </TextNode>

            <TextNode noIndent>
              “What do you say, dear?” said my wife, looking across at me. “Will
              you go?”
            </TextNode>

            <TextNode>
              “I really don't know what to say. I have a fairly long list at
              present.”
            </TextNode>

            <TextNode>
              “Oh, Anstruther would do your work for you. You have been looking
              a little pale lately. I think that the change would do you good,
              and you are always so interested in Mr. Sherlock Holmes' cases.”
            </TextNode>

            <TextNode>
              “I should be ungrateful if I were not, seeing what I gained
              through one of them,” I answered. “But if I am to go, I must pack
              at once, for I have only half an hour.”
            </TextNode>

            <TextNode>
              My experience of camp life in Afghanistan had at least had the
              effect of making me a prompt and ready traveller. My wants were
              few and simple, so that in less than the time stated I was in a
              cab with my valise, rattling away to Paddington Station. Sherlock
              Holmes was pacing up and down the platform, his tall, gaunt figure
              made even gaunter and taller by his long grey travelling-cloak and
              close-fitting cloth cap.
            </TextNode>

            <TextNode>
              “It is really very good of you to come, Watson,” said he. “It
              makes a considerable difference to me, having someone with me on
              whom I can thoroughly rely. Local aid is always either worthless
              or else biassed. If you will keep the two corner seats I shall get
              the tickets.”
            </TextNode>

            <TextNode>
              We had the carriage to ourselves save for an immense litter of
              papers which Holmes had brought with him. Among these he rummaged
              and read, with intervals of note-taking and of meditation, until
              we were past Reading. Then he suddenly rolled them all into a
              gigantic ball and tossed them up onto the rack.
            </TextNode>

            <TextNode>
              “Have you heard anything of the case?” he asked.
            </TextNode>

            <TextNode>
              “Not a word. I have not seen a paper for some days.”
            </TextNode>

            <TextNode>
              “The London press has not had very full accounts. I have just been
              looking through all the recent papers in order to master the
              particulars. It seems, from what I gather, to be one of those
              simple cases which are so extremely difficult.”
            </TextNode>

            <TextNode>“That sounds a little paradoxical.”</TextNode>

            <TextNode>
              “But it is profoundly true. Singularity is almost invariably a
              clue. The more featureless and commonplace a crime is, the more
              difficult it is to bring it home. In this case, however, they have
              established a very serious case against the son of the murdered
              man.”
            </TextNode>

            <TextNode>“It is a murder, then?”</TextNode>

            <TextNode>
              “Well, it is conjectured to be so. I shall take nothing for
              granted until I have the opportunity of looking personally into
              it. I will explain the state of things to you, as far as I have
              been able to understand it, in a very few words.
            </TextNode>

            <TextNode>
              “Boscombe Valley is a country district not very far from Ross, in
              Herefordshire. The largest landed proprietor in that part is a Mr.
              John Turner, who made his money in Australia and returned some
              years ago to the old country. One of the farms which he held, that
              of Hatherley, was let to Mr. Charles McCarthy, who was also an
              ex-Australian. The men had known each other in the colonies, so
              that it was not unnatural that when they came to settle down they
              should do so as near each other as possible. Turner was apparently
              the richer man, so McCarthy became his tenant but still remained,
              it seems, upon terms of perfect equality, as they were frequently
              together. McCarthy had one son, a lad of eighteen, and Turner had
              an only daughter of the same age, but neither of them had wives
              living. They appear to have avoided the society of the
              neighbouring English families and to have led retired lives,
              though both the McCarthys were fond of sport and were frequently
              seen at the race-meetings of the neighbourhood. McCarthy kept two
              servants—a man and a girl. Turner had a considerable household,
              some half-dozen at the least. That is as much as I have been able
              to gather about the families. Now for the facts.
            </TextNode>

            <TextNode>
              “On June 3rd, that is, on Monday last, McCarthy left his house at
              Hatherley about three in the afternoon and walked down to the
              Boscombe Pool, which is a small lake formed by the spreading out
              of the stream which runs down the Boscombe Valley. He had been out
              with his serving-man in the morning at Ross, and he had told the
              man that he must hurry, as he had an appointment of importance to
              keep at three. From that appointment he never came back alive.
            </TextNode>

            <TextNode>
              “From Hatherley Farm-house to the Boscombe Pool is a quarter of a
              mile, and two people saw him as he passed over this ground. One
              was an old woman, whose name is not mentioned, and the other was
              William Crowder, a game-keeper in the employ of Mr. Turner. Both
              these witnesses depose that Mr. McCarthy was walking alone. The
              game-keeper adds that within a few minutes of his seeing Mr.
              McCarthy pass he had seen his son, Mr. James McCarthy, going the
              same way with a gun under his arm. To the best of his belief, the
              father was actually in sight at the time, and the son was
              following him. He thought no more of the matter until he heard in
              the evening of the tragedy that had occurred.
            </TextNode>

            <TextNode>
              “The two McCarthys were seen after the time when William Crowder,
              the game-keeper, lost sight of them. The Boscombe Pool is thickly
              wooded round, with just a fringe of grass and of reeds round the
              edge. A girl of fourteen, Patience Moran, who is the daughter of
              the lodge-keeper of the Boscombe Valley estate, was in one of the
              woods picking flowers. She states that while she was there she
              saw, at the border of the wood and close by the lake, Mr. McCarthy
              and his son, and that they appeared to be having a violent
              quarrel. She heard Mr. McCarthy the elder using very strong
              language to his son, and she saw the latter raise up his hand as
              if to strike his father. She was so frightened by their violence
              that she ran away and told her mother when she reached home that
              she had left the two McCarthys quarrelling near Boscombe Pool, and
              that she was afraid that they were going to fight. She had hardly
              said the words when young Mr. McCarthy came running up to the
              lodge to say that he had found his father dead in the wood, and to
              ask for the help of the lodge-keeper. He was much excited, without
              either his gun or his hat, and his right hand and sleeve were
              observed to be stained with fresh blood. On following him they
              found the dead body stretched out upon the grass beside the pool.
              The head had been beaten in by repeated blows of some heavy and
              blunt weapon. The injuries were such as might very well have been
              inflicted by the butt-end of his son's gun, which was found lying
              on the grass within a few paces of the body. Under these
              circumstances the young man was instantly arrested, and a verdict
              of ‘wilful murder’ having been returned at the inquest on Tuesday,
              he was on Wednesday brought before the magistrates at Ross, who
              have referred the case to the next Assizes. Those are the main
              facts of the case as they came out before the coroner and the
              police-court.”
            </TextNode>
          </BookLeftPartContainer>
          <BookRightPartContainer>
            <TextNode noIndent>
              “I could hardly imagine a more damning case,” I remarked. “If ever
              circumstantial evidence pointed to a criminal it does so here.”
            </TextNode>

            <TextNode>
              “Circumstantial evidence is a very tricky thing,” answered Holmes
              thoughtfully. “It may seem to point very straight to one thing,
              but if you shift your own point of view a little, you may find it
              pointing in an equally uncompromising manner to something entirely
              different. It must be confessed, however, that the case looks
              exceedingly grave against the young man, and it is very possible
              that he is indeed the culprit. There are several people in the
              neighbourhood, however, and among them Miss Turner, the daughter
              of the neighbouring landowner, who believe in his innocence, and
              who have retained Lestrade, whom you may recollect in connection
              with the Study in Scarlet, to work out the case in his interest.
              Lestrade, being rather puzzled, has referred the case to me, and
              hence it is that two middle-aged gentlemen are flying westward at
              fifty miles an hour instead of quietly digesting their breakfasts
              at home.”
            </TextNode>

            <TextNode>
              “I am afraid,” said I, “that the facts are so obvious that you
              will find little credit to be gained out of this case.”
            </TextNode>

            <TextNode>
              “There is nothing more deceptive than an obvious fact,” he
              answered, laughing. “Besides, we may chance to hit upon some other
              obvious facts which may have been by no means obvious to Mr.
              Lestrade. You know me too well to think that I am boasting when I
              say that I shall either confirm or destroy his theory by means
              which he is quite incapable of employing, or even of
              understanding. To take the first example to hand, I very clearly
              perceive that in your bedroom the window is upon the right-hand
              side, and yet I question whether Mr. Lestrade would have noted
              even so self-evident a thing as that.”
            </TextNode>

            <TextNode>“How on earth—”</TextNode>

            <TextNode>
              “My dear fellow, I know you well. I know the military neatness
              which characterises you. You shave every morning, and in this
              season you shave by the sunlight; but since your shaving is less
              and less complete as we get farther back on the left side, until
              it becomes positively slovenly as we get round the angle of the
              jaw, it is surely very clear that that side is less illuminated
              than the other. I could not imagine a man of your habits looking
              at himself in an equal light and being satisfied with such a
              result. I only quote this as a trivial example of observation and
              inference. Therein lies my métier, and it is just possible that it
              may be of some service in the investigation which lies before us.
              There are one or two minor points which were brought out in the
              inquest, and which are worth considering.”
            </TextNode>

            <TextNode>“What are they?”</TextNode>

            <TextNode>
              “It appears that his arrest did not take place at once, but after
              the return to Hatherley Farm. On the inspector of constabulary
              informing him that he was a prisoner, he remarked that he was not
              surprised to hear it, and that it was no more than his deserts.
              This observation of his had the natural effect of removing any
              traces of doubt which might have remained in the minds of the
              coroner's jury.”
            </TextNode>

            <TextNode>“It was a confession,” I ejaculated.</TextNode>

            <TextNode>
              “No, for it was followed by a protestation of innocence.”
            </TextNode>

            <TextNode>
              “Coming on the top of such a damning series of events, it was at
              least a most suspicious remark.”
            </TextNode>

            <TextNode>
              “On the contrary,” said Holmes, “it is the brightest rift which I
              can at present see in the clouds. However innocent he might be, he
              could not be such an absolute imbecile as not to see that the
              circumstances were very black against him. Had he appeared
              surprised at his own arrest, or feigned indignation at it, I
              should have looked upon it as highly suspicious, because such
              surprise or anger would not be natural under the circumstances,
              and yet might appear to be the best policy to a scheming man. His
              frank acceptance of the situation marks him as either an innocent
              man, or else as a man of considerable self-restraint and firmness.
              As to his remark about his deserts, it was also not unnatural if
              you consider that he stood beside the dead body of his father, and
              that there is no doubt that he had that very day so far forgotten
              his filial duty as to bandy words with him, and even, according to
              the little girl whose evidence is so important, to raise his hand
              as if to strike him. The self-reproach and contrition which are
              displayed in his remark appear to me to be the signs of a healthy
              mind rather than of a guilty one.”
            </TextNode>

            <TextNode>
              I shook my head. “Many men have been hanged on far slighter
              evidence,” I remarked.
            </TextNode>

            <TextNode>
              “So they have. And many men have been wrongfully hanged.”
            </TextNode>

            <TextNode>
              “What is the young man's own account of the matter?”
            </TextNode>

            <TextNode>
              “It is, I am afraid, not very encouraging to his supporters,
              though there are one or two points in it which are suggestive. You
              will find it here, and may read it for yourself.”
            </TextNode>

            <TextNode>
              He picked out from his bundle a copy of the local Herefordshire
              paper, and having turned down the sheet he pointed out the
              paragraph in which the unfortunate young man had given his own
              statement of what had occurred. I settled myself down in the
              corner of the carriage and read it very carefully. It ran in this
              way:
            </TextNode>

            <TextNode>
              “Mr. James McCarthy, the only son of the deceased, was then called
              and gave evidence as follows: ‘I had been away from home for three
              days at Bristol, and had only just returned upon the morning of
              last Monday, the 3rd. My father was absent from home at the time
              of my arrival, and I was informed by the maid that he had driven
              over to Ross with John Cobb, the groom. Shortly after my return I
              heard the wheels of his trap in the yard, and, looking out of my
              window, I saw him get out and walk rapidly out of the yard, though
              I was not aware in which direction he was going. I then took my
              gun and strolled out in the direction of the Boscombe Pool, with
              the intention of visiting the rabbit warren which is upon the
              other side. On my way I saw William Crowder, the game-keeper, as
              he had stated in his evidence; but he is mistaken in thinking that
              I was following my father. I had no idea that he was in front of
              me. When about a hundred yards from the pool I heard a cry of
              “Cooee!” which was a usual signal between my father and myself. I
              then hurried forward, and found him standing by the pool. He
              appeared to be much surprised at seeing me and asked me rather
              roughly what I was doing there. A conversation ensued which led to
              high words and almost to blows, for my father was a man of a very
              violent temper. Seeing that his passion was becoming ungovernable,
              I left him and returned towards Hatherley Farm. I had not gone
              more than 150 yards, however, when I heard a hideous outcry behind
              me, which caused me to run back again. I found my father expiring
              upon the ground, with his head terribly injured. I dropped my gun
              and held him in my arms, but he almost instantly expired. I knelt
              beside him for some minutes, and then made my way to Mr. Turner's
              lodge-keeper, his house being the nearest, to ask for assistance.
              I saw no one near my father when I returned, and I have no idea
              how he came by his injuries. He was not a popular man, being
              somewhat cold and forbidding in his manners, but he had, as far as
              I know, no active enemies. I know nothing further of the matter.’
            </TextNode>

            <TextNode>
              “The Coroner: Did your father make any statement to you before he
              died?
            </TextNode>

            <TextNode>
              “Witness: He mumbled a few words, but I could only catch some
              allusion to a rat.
            </TextNode>
          </BookRightPartContainer>
        </div>
      </BookMainContainer>
    </Page>
  );
}

export default Page81;
